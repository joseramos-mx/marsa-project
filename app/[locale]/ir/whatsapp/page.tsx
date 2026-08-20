import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '../../../../i18n/routing'
import WhatsAppRedirect from './WhatsAppRedirect'

export const WHATSAPP_NUMBER = '527225356109'

export const metadata: Metadata = {
  // `absolute` evita que la plantilla del layout duplique la marca.
  title: { absolute: 'Abriendo WhatsApp — Marsa Project' },
  // Pagina de paso: nunca debe indexarse ni aparecer en resultados.
  robots: { index: false, follow: false },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

/** Solo se aceptan estos origenes, para que el parametro no sea un campo libre. */
const ALLOWED_SRC = new Set([
  'hero',
  'header',
  'navbar',
  'footer',
  'floating',
  'cta',
  'faq',
  'gracias',
  'contacto',
  'landing',
  'desconocido',
])

export default async function IrWhatsAppPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ src?: string; text?: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const { src: rawSrc, text } = await searchParams
  const src = rawSrc && ALLOWED_SRC.has(rawSrc) ? rawSrc : 'desconocido'

  const target = text
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <main className="bg-[#0c0c0c] min-h-screen flex items-center justify-center px-6">
      <WhatsAppRedirect target={target} src={src} />

      <div
        className="text-center flex flex-col items-center gap-5"
        style={{ fontFamily: 'var(--font-geist-sans)' }}
      >
        <div
          className="w-10 h-10 rounded-full border-2 border-white/15 border-t-[#f8d974] animate-spin"
          role="status"
          aria-label="Abriendo WhatsApp"
        />
        <p className="text-white/70 text-[15px]">Abriendo WhatsApp…</p>

        {/* Salida manual si el salto automatico no ocurre (JS desactivado o bloqueado). */}
        <a
          href={target}
          className="text-[#f8d974] text-[13px] underline underline-offset-2 hover:text-white transition-colors"
        >
          Continuar a WhatsApp
        </a>
      </div>
    </main>
  )
}
