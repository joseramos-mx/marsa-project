const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

const TOOLS = [
  { label: 'Escaneo intraoral' },
  { label: 'Radiografía digital' },
  { label: 'Software de planificación' },
]

export default function TechSection() {
  return (
    <section className="relative bg-[#0c0c0c] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center flex flex-col gap-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#f8d974]" style={GEIST}>
          ▪ Tecnología
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
          Tecnología para{' '}
          <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">
            una mejor planificación
          </span>
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={GEIST}>
          En Marsa Project utilizamos herramientas digitales que ayudan al equipo clínico en el diagnóstico y planificación de los tratamientos.
        </p>

        <ul className="flex flex-wrap justify-center gap-2.5 pt-4" style={GEIST}>
          {TOOLS.map((t) => (
            <li
              key={t.label}
              className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/12 text-white/85 text-[13px]"
            >
              {t.label}
            </li>
          ))}
        </ul>

        <div className="pt-6">
          <a
            href="#agenda"
            className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] text-black font-semibold px-6 py-3.5 rounded-full text-[13px] uppercase tracking-[0.14em] hover:brightness-110 transition-all"
            style={GEIST}
          >
            Conoce tu opción de tratamiento
          </a>
        </div>
      </div>
    </section>
  )
}
