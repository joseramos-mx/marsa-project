import Image from 'next/image'

const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

// Fotografías reales de pacientes de Marsa Project (autorizadas para uso web).
// Todas son "después" del tratamiento — cuando se disponga de fotos "antes"
// pareables, sustituir la grid por un componente de comparación.
const CASES = [
  { src: '/patients/IMG_7756.webp', treatment: 'Rehabilitación con implantes' },
  { src: '/patients/IMG_7759.webp', treatment: 'Rehabilitación oral' },
  { src: '/patients/IMG_7765.webp', treatment: 'Diseño de sonrisa' },
  { src: '/patients/IMG_7769.webp', treatment: 'Rehabilitación con implantes' },
  { src: '/patients/IMG_7771.webp', treatment: 'Rehabilitación oral' },
  { src: '/patients/IMG_7774.webp', treatment: 'Rehabilitación con implantes' },
] as const

export default function CasesSection() {
  return (
    <section className="relative bg-[#0c0c0c] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-10 md:gap-12">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#f8d974] mb-4" style={GEIST}>
            ▪ Casos clínicos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
            Resultados y{' '}
            <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">
              casos clínicos
            </span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mt-4" style={GEIST}>
            Conoce algunos de los casos tratados por nuestro equipo.
          </p>
        </div>

        <div
          role="group"
          aria-label="Galería de resultados de pacientes"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {CASES.map((c, i) => (
            <figure
              key={c.src}
              className="group relative aspect-3/4 rounded-2xl overflow-hidden border border-white/10 bg-white/2"
            >
              <Image
                src={c.src}
                alt={`Resultado de paciente Marsa Project — ${c.treatment}`}
                fill
                loading={i < 3 ? 'eager' : 'lazy'}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 top-0 p-3 flex justify-end">
                <span
                  className="text-[10px] uppercase tracking-[0.16em] bg-black/55 text-white/90 border border-white/15 rounded-full px-2.5 py-1 backdrop-blur-sm"
                  style={GEIST}
                >
                  Resultado
                </span>
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black/85 via-black/55 to-transparent">
                <p className="text-white text-[13px] leading-tight" style={GEIST}>
                  {c.treatment}
                </p>
                <p className="text-white/55 text-[11px] mt-0.5" style={GEIST}>
                  Paciente Marsa Project
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="text-white/50 text-[13px] italic max-w-2xl" style={GEIST}>
          Los resultados pueden variar de acuerdo con las condiciones particulares de cada paciente.
        </p>
      </div>
    </section>
  )
}
