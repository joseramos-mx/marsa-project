'use client'

import { useActionState, useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { trackEvent } from "../../lib/gtag"
import { submitContact, type ContactActionState } from '../actions/contact'
import { REASONS } from '../../lib/schemas/contact'
import { readGclid } from './GclidCapture'

const initialState: ContactActionState = { status: 'idle' }

const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

const inputBase =
  'w-full bg-white/5 border border-white/12 rounded-xl px-4 py-3 text-white text-[14px] placeholder:text-white/30 focus:outline-none focus:border-[#c69a2c]/70 focus:bg-white/8 transition-colors'

function FieldError({ msg }: { msg?: string[] }) {
  if (!msg?.length) return null
  return <p className="mt-1.5 text-[12px] text-red-400/90" style={GEIST}>{msg[0]}</p>
}

function SubmitButton({ formName }: { formName: string }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      // Intento de envio: NO es un lead. El lead se confirma en /gracias.
      onClick={() => trackEvent("form_submit_attempt", { form_name: formName })}
      className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] text-black font-semibold px-8 py-3.5 rounded-full text-[13px] uppercase tracking-[0.14em] disabled:opacity-60 disabled:cursor-not-allowed hover:brightness-110 transition-all"
      style={GEIST}
    >
      {pending ? (
        <>
          <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
          Enviando…
        </>
      ) : (
        'Solicitar contacto'
      )}
    </button>
  )
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState)
  // Client-only fields — populated once on mount. Rendered as null on SSR so
  // React doesn't call Date.now() during render (react-hooks/purity).
  const [clientFields, setClientFields] = useState<{ ts: number; gclid: string } | null>(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setClientFields({ ts: Date.now(), gclid: readGclid() ?? '' })
  }, [])

  const fe = state.fieldErrors ?? {}

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      <input type="hidden" name="ts" value={clientFields?.ts ?? 0} readOnly />
      <input type="hidden" name="gclid" value={clientFields?.gclid ?? ''} readOnly />

      {/* Honeypot — hidden with CSS, not [hidden], so bots see it */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      >
        <label>
          No llenar este campo
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>

      <div>
        <label htmlFor="cf-name" className="block text-[11px] uppercase tracking-[0.14em] text-white/50 mb-2" style={GEIST}>
          Nombre *
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={80}
          autoComplete="name"
          className={inputBase}
          placeholder="María López"
        />
        <FieldError msg={fe.name} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-phone" className="block text-[11px] uppercase tracking-[0.14em] text-white/50 mb-2" style={GEIST}>
            Teléfono *
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel-national"
            className={inputBase}
            placeholder="722 123 4567"
          />
          <FieldError msg={fe.phone} />
        </div>

        <div>
          <label htmlFor="cf-email" className="block text-[11px] uppercase tracking-[0.14em] text-white/50 mb-2" style={GEIST}>
            Email <span className="text-white/30 normal-case tracking-normal">(opcional)</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputBase}
            placeholder="tu@correo.com"
          />
          <FieldError msg={fe.email} />
        </div>
      </div>

      <div>
        <label htmlFor="cf-reason" className="block text-[11px] uppercase tracking-[0.14em] text-white/50 mb-2" style={GEIST}>
          Motivo de consulta *
        </label>
        <select
          id="cf-reason"
          name="reason"
          required
          defaultValue=""
          className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22white%22 opacity=%220.5%22><path d=%22M5 8l5 5 5-5%22/></svg>')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:18px] pr-10`}
        >
          <option value="" disabled>Selecciona…</option>
          {REASONS.map((r) => (
            <option key={r} value={r} className="bg-[#141414]">{r}</option>
          ))}
        </select>
        <FieldError msg={fe.reason} />
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-[11px] uppercase tracking-[0.14em] text-white/50 mb-2" style={GEIST}>
          Mensaje <span className="text-white/30 normal-case tracking-normal">(opcional)</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          maxLength={1000}
          className={`${inputBase} resize-y min-h-24`}
          placeholder="Cuéntanos brevemente qué necesitas…"
        />
        <FieldError msg={fe.message} />
      </div>

      <label className="flex items-start gap-3 text-[13px] text-white/70 leading-relaxed cursor-pointer" style={GEIST}>
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 w-4 h-4 accent-[#c69a2c]"
        />
        <span>
          Acepto el{' '}
          <a href="/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-[#f8d974]">
            aviso de privacidad
          </a>
          {' '}y el tratamiento de mis datos para ser contactado.
        </span>
      </label>
      <FieldError msg={fe.consent} />

      {state.status === 'error' && state.message && (
        <div
          role="alert"
          aria-live="polite"
          className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-[13px] text-red-200"
          style={GEIST}
        >
          {state.message}
        </div>
      )}

      <div className="flex items-center gap-4 pt-1">
        <SubmitButton formName="contacto_largo" />
        <p className="text-[11px] text-white/40" style={GEIST}>
          Te contactamos en horario de atención.
        </p>
      </div>

      <p className="sr-only" aria-live="polite">
        {state.status === 'error' ? state.message : ''}
      </p>

      <span className="sr-only" style={ALBERT} />
    </form>
  )
}
