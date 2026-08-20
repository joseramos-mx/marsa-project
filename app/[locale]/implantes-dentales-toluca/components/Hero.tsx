import Image from 'next/image'
import WhatsAppLink from '../../../components/WhatsAppLink'

const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

const BENEFITS = [
  'Evaluación personalizada',
  'Especialistas',
  'Tecnología digital',
  'Materiales certificados',
]

const WHATSAPP_URL = 'https://wa.me/527225356109?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20implantes%20dentales'

export default function Hero() {
  return (
    <section className="relative bg-[#0c0c0c] pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Fondo con imagen sutil */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(198,154,44,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0c0c0c]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="flex flex-col gap-6">
          <p
            className="text-[11px] uppercase tracking-[0.22em] text-[#f8d974]"
            style={GEIST}
          >
            ▪ Especialistas en implantes · Toluca
          </p>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.08] tracking-tight"
            style={ALBERT}
          >
            Implantes Dentales{' '}
            <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">
              en Toluca
            </span>
          </h1>

          <p
            className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl"
            style={GEIST}
          >
            Recupera la función y estética de tu sonrisa con un tratamiento personalizado, respaldado por especialistas y tecnología digital.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-w-md" style={GEIST}>
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-2 text-white/80 text-[14px]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f8d974" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#agenda"
              className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] text-black font-semibold px-6 py-3.5 rounded-full text-[13px] uppercase tracking-[0.14em] hover:brightness-110 transition-all"
              style={GEIST}
            >
              Agenda tu valoración
            </a>
            <WhatsAppLink
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-6 py-3.5 rounded-full text-[13px] uppercase tracking-[0.14em] hover:bg-white/5 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Hablar por WhatsApp
            </WhatsAppLink>
          </div>

          <div className="flex items-center gap-4 pt-4 text-white/60 text-[13px]" style={GEIST}>
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f8d974" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="ml-1 text-white/70 font-medium">4.9/5</span>
            </div>
            <span className="text-white/30">·</span>
            <span>500+ pacientes</span>
            <span className="text-white/30">·</span>
            <span>100+ implantes</span>
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 max-w-md md:max-w-none mx-auto md:mx-0 w-full">
          <Image
            src="/services/implantes.webp"
            alt="Implante dental en Marsa Project, Toluca"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
