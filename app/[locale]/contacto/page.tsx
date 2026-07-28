import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ContactForm from '../../components/ContactForm'
import WhatsAppLink from '../../components/WhatsAppLink'

export const metadata: Metadata = {
  title: 'Contacto — MARSA Project',
  description: 'Solicita informes o agenda una consulta con MARSA Project en Toluca.',
}

const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="bg-[#0c0c0c] min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 px-6 py-32 md:py-40">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-14 md:gap-20 items-start">
          <div className="flex flex-col gap-6">
            <p
              className="text-white/40 text-[10px] uppercase"
              style={{ ...GEIST, letterSpacing: '0.22em' }}
            >
              ▪ Contacto
            </p>
            <h1
              className="text-white text-[2.4rem] md:text-5xl leading-[1.1] tracking-tight"
              style={ALBERT}
            >
              Cuéntanos qué necesitas
            </h1>
            <p className="text-white/55 text-[14.5px] leading-relaxed max-w-sm" style={GEIST}>
              Te respondemos por teléfono o WhatsApp en horario de atención. Si
              prefieres respuesta inmediata, escríbenos directo por WhatsApp.
            </p>

            <WhatsAppLink
              href="https://wa.me/527225356109"
              className="inline-flex items-center self-start bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-5 py-2.5 rounded-full text-[12px] font-medium uppercase tracking-[0.14em] hover:bg-[#25D366]/20 transition-colors"
              style={GEIST}
            >
              Prefiero WhatsApp
            </WhatsAppLink>

            <div className="mt-6 text-white/40 text-[12.5px] leading-relaxed" style={GEIST}>
              <p>P.º Cristóbal Colón 128-MZ 027</p>
              <p>Residencial Colón y Col Ciprés</p>
              <p>50120 Toluca de Lerdo, Méx.</p>
              <p className="mt-2">Tel. <a className="underline hover:text-white" href="tel:+527225356109">722 535 6109</a></p>
            </div>
          </div>

          <div className="bg-[#141414] border border-white/8 rounded-3xl p-6 md:p-9">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
