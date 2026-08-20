import Image from 'next/image'

const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

export default function SpecialistSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 max-w-md mx-auto md:mx-0 w-full order-2 md:order-1">
          <Image
            src="/docsalem.webp"
            alt="Dr. Salém Sarmiento Marín, director clínico de Marsa Project"
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col gap-6 order-1 md:order-2">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#f8d974]" style={GEIST}>
            ▪ Especialistas
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
            Especialistas comprometidos con tu sonrisa
          </h2>
          <div className="pt-2 flex flex-col gap-2">
            <h3 className="text-2xl md:text-3xl text-white leading-tight" style={ALBERT}>
              Dr. Salém Sarmiento Marín
            </h3>
            <p className="text-[#f8d974] text-[13px] uppercase tracking-[0.16em]" style={GEIST}>
              Director Clínico de Marsa Project
            </p>
          </div>
          <p className="text-white/70 text-base md:text-lg leading-relaxed" style={GEIST}>
            Profesional dedicado a la odontología restauradora y estética, con participación en formación continua y actividades académicas nacionales e internacionales.
          </p>
          <div className="pt-2">
            <a
              href="#agenda"
              className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] text-black font-semibold px-6 py-3.5 rounded-full text-[13px] uppercase tracking-[0.14em] hover:brightness-110 transition-all"
              style={GEIST}
            >
              Agenda tu valoración
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
