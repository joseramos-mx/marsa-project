'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'
import { contactSchema, type ContactInput } from '../../lib/schemas/contact'
import { rateLimit } from '../../lib/rate-limit'
import {
  renderNotificationEmail,
  renderConfirmationEmail,
} from '../../lib/email/contact-templates'

const MIN_FILL_MS = 3_000
const RATE_LIMIT = { limit: 3, windowMs: 10 * 60_000 }

export type ContactActionState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  fieldErrors?: Partial<Record<keyof ContactInput, string[]>>
}

export async function submitContact(
  _prev: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  // ---------- Validation ----------
  const raw = Object.fromEntries(formData.entries())
  const parsed = contactSchema.safeParse(raw)

  if (!parsed.success) {
    const flat = parsed.error.flatten()
    return {
      status: 'error',
      message: 'Revisa los datos del formulario.',
      fieldErrors: flat.fieldErrors as ContactActionState['fieldErrors'],
    }
  }

  const data = parsed.data

  // ---------- Anti-spam ----------
  if (data.website && data.website.length > 0) {
    // Honeypot filled → pretend success to avoid tipping off bots.
    redirect('/gracias')
  }

  const elapsed = Date.now() - data.ts
  if (elapsed < MIN_FILL_MS) {
    return {
      status: 'error',
      message: 'Envío demasiado rápido. Intenta de nuevo.',
    }
  }

  // ---------- Rate limit by IP ----------
  const hdrs = await headers()
  const ip =
    hdrs.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    hdrs.get('x-real-ip') ||
    'unknown'

  const rl = rateLimit(`contact:${ip}`, RATE_LIMIT)
  if (!rl.ok) {
    const mins = Math.ceil(rl.retryAfterMs / 60_000)
    return {
      status: 'error',
      message: `Has enviado demasiados formularios. Intenta de nuevo en ${mins} min o escríbenos por WhatsApp.`,
    }
  }

  // ---------- Send ----------
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL
  const to = process.env.RESEND_TO_EMAIL

  if (!apiKey || !from || !to) {
    console.error('[contact] Missing Resend env vars')
    return {
      status: 'error',
      message: 'Error de configuración. Escríbenos por WhatsApp.',
    }
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `Nuevo contacto web — ${data.reason} — ${data.name}`,
      html: renderNotificationEmail(data),
    })
    if (error) throw error

    if (data.email) {
      // Confirmation to the patient — non-fatal if it fails.
      const conf = await resend.emails.send({
        from,
        to: data.email,
        subject: 'Recibimos tu solicitud — MARSA Project',
        html: renderConfirmationEmail(data),
      })
      if (conf.error) console.error('[contact] confirmation failed', conf.error)
    }
  } catch (err) {
    console.error('[contact] Resend send failed', err)
    return {
      status: 'error',
      message: 'No pudimos enviar tu mensaje. Intenta por WhatsApp.',
    }
  }

  redirect('/gracias')
}
