import type { Metadata } from 'next'
import Link from 'next/link'
import { setRequestLocale } from 'next-intl/server'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppLink from '../../components/WhatsAppLink'
import ThanksConversion from '../../components/ThanksConversion'
import { CheckCircle, ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Gracias — MARSA Project',
  robots: { index: false, follow: false },
}

const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

export default async function GraciasPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="bg-[#0c0c0c] min-h-screen flex flex-col">
      <Navbar />
      <ThanksConversion />

      <section className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="max-w-xl w-full text-center flex flex-col items-center gap-7">
          <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#c69a2c] via-[#f8d974] to-[#c69a2c] flex items-center justify-center">
            <CheckCircle size={32} weight="fill" className="text-black" />
          </div>

          <h1
            className="text-white text-[2.4rem] md:text-4xl leading-tight tracking-tight"
            style={ALBERT}
          >
            Recibimos tu <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">solicitud</span>
          </h1>

          <p className="text-white/60 text-[15px] leading-relaxed max-w-md" style={GEIST}>
            Un miembro del equipo te contactará muy pronto. Si prefieres respuesta
            inmediata, escríbenos por WhatsApp.
          </p>

          <WhatsAppLink
            href="https://wa.me/527225356109"
            className="inline-flex items-center bg-[#25D366] text-white pl-6 pr-1.5 py-1.5 rounded-full hover:brightness-110 transition-all"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] pr-3" style={GEIST}>
              Abrir WhatsApp
            </span>
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
              <ArrowUpRight size={15} weight="bold" className="text-[#25D366]" />
            </span>
          </WhatsAppLink>

          <Link
            href="/"
            className="text-white/40 text-[12px] uppercase tracking-[0.14em] hover:text-white/70 transition-colors mt-2"
            style={GEIST}
          >
            Volver al inicio
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
