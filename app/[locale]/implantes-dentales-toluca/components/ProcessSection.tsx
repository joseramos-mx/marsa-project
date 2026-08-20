const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

const STEPS = [
  {
    n: '1',
    title: 'Valoración',
    description: 'Conocemos tu situación y evaluamos tu caso.',
  },
  {
    n: '2',
    title: 'Diagnóstico',
    description: 'Analizamos la información necesaria para definir las alternativas.',
  },
  {
    n: '3',
    title: 'Planificación',
    description: 'Diseñamos el plan de tratamiento correspondiente.',
  },
  {
    n: '4',
    title: 'Tratamiento',
    description: 'Realizamos el procedimiento indicado y damos seguimiento a tu evolución.',
  },
]

export default function ProcessSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-14 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#f8d974] mb-4" style={GEIST}>
            ▪ Proceso
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
            Tu tratamiento comienza con{' '}
            <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">
              una valoración
            </span>
          </h2>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="relative flex flex-col gap-4 p-6 md:p-7 rounded-2xl bg-white/[0.03] border border-white/10"
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-full bg-linear-to-br from-[#c69a2c] to-[#f8d974] text-black flex items-center justify-center font-bold text-lg"
                  style={ALBERT}
                >
                  {s.n}
                </span>
                {i < STEPS.length - 1 && (
                  <span className="hidden lg:block flex-1 h-px bg-linear-to-r from-white/20 to-transparent" aria-hidden="true" />
                )}
              </div>
              <h3 className="text-white text-lg md:text-xl leading-snug" style={ALBERT}>
                {s.title}
              </h3>
              <p className="text-white/60 text-[14px] leading-relaxed" style={GEIST}>
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
