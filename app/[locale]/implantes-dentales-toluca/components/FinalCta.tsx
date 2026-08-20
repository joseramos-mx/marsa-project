import WhatsAppLink from '../../../components/WhatsAppLink'
import ContactFormShort from './ContactFormShort'

const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

const WHATSAPP_URL = 'https://wa.me/527225356109?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20implantes%20dentales'

export default function FinalCta() {
  return (
    <section id="agenda" className="relative bg-[#0a0a0a] py-20 md:py-28 border-t border-white/5 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
        <div className="flex flex-col gap-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#f8d974]" style={GEIST}>
            ▪ Agenda hoy
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
            Da el primer paso hacia una{' '}
            <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">
              sonrisa completa
            </span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed" style={GEIST}>
            Agenda una valoración con el equipo de Marsa Project y conoce las opciones de tratamiento disponibles para tu caso.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <WhatsAppLink
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-6 py-3.5 rounded-full text-[13px] uppercase tracking-[0.14em] hover:bg-white/5 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Hablar por WhatsApp
            </WhatsAppLink>
            <a
              href="tel:+527225356109"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-6 py-3.5 rounded-full text-[13px] uppercase tracking-[0.14em] hover:bg-white/5 transition-all"
              style={GEIST}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Llamar 722 535 6109
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <p className="text-[11px] uppercase tracking-[0.14em] text-white/50 mb-5" style={GEIST}>
            Formulario · te contactamos
          </p>
          <ContactFormShort />
        </div>
      </div>
    </section>
  )
}
