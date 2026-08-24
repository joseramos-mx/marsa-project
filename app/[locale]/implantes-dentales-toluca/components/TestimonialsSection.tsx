import Image from 'next/image'

const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

// Fotos de pacientes autorizadas · texto pendiente de testimonio real
const TESTIMONIALS = [
  { photo: '/patients/IMG_7756.webp', treatment: 'Rehabilitación con implantes' },
  { photo: '/patients/IMG_7765.webp', treatment: 'Diseño de sonrisa' },
  { photo: '/patients/IMG_7774.webp', treatment: 'Rehabilitación con implantes' },
] as const

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-10 md:gap-12">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#f8d974] mb-4" style={GEIST}>
            ▪ Testimonios
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
            La experiencia de{' '}
            <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">
              nuestros pacientes
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.photo}
              className="flex flex-col gap-4 p-6 md:p-7 rounded-2xl border border-white/10 bg-white/2"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/15 shrink-0">
                  <Image
                    src={t.photo}
                    alt={`Paciente Marsa Project — ${t.treatment}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-white/90 text-[14px] font-medium" style={GEIST}>
                    Paciente Marsa Project
                  </p>
                  <p className="text-[#f8d974] text-[10.5px] uppercase tracking-[0.14em]" style={GEIST}>
                    {t.treatment}
                  </p>
                </div>
              </div>

              <div className="flex gap-1" aria-label="5 estrellas">
                {[0, 1, 2, 3, 4].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#f8d974" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <p className="text-white/70 text-[14px] leading-relaxed italic" style={GEIST}>
                &ldquo;Testimonio real del paciente.&rdquo;
              </p>

              <p className="text-white/25 text-[10px] pt-2 border-t border-white/5" style={GEIST}>
                Pendiente testimonio autorizado por escrito
              </p>
            </article>
          ))}
        </div>

        <p className="text-white/45 text-[12px] italic" style={GEIST}>
          Los resultados pueden variar de acuerdo con las condiciones particulares de cada paciente.
        </p>
      </div>
    </section>
  )
}
