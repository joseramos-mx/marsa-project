const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

const CARDS = [
  {
    title: 'Especialistas',
    description: 'Formación continua y experiencia en odontología restauradora y estética.',
    icon: (
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
    ),
  },
  {
    title: 'Tecnología digital',
    description: 'Herramientas para diagnóstico y planificación de cada caso.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
  },
  {
    title: 'Materiales certificados',
    description: 'Materiales de marcas reconocidas y protocolos clínicos actualizados.',
    icon: (
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
    ),
  },
  {
    title: 'Atención personalizada',
    description: 'Un plan diseñado de acuerdo con las necesidades de cada paciente.',
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
  },
]

export default function WhyMarsaSection() {
  return (
    <section className="relative bg-[#0c0c0c] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-14 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#f8d974] mb-4" style={GEIST}>
            ▪ Por qué Marsa Project
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
            ¿Por qué Marsa Project?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-4 p-6 md:p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#c69a2c]/25 to-[#f8d974]/10 flex items-center justify-center border border-[#c69a2c]/25">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f8d974" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {c.icon}
                </svg>
              </div>
              <h3 className="text-white text-lg md:text-xl leading-snug" style={ALBERT}>
                {c.title}
              </h3>
              <p className="text-white/60 text-[14px] leading-relaxed" style={GEIST}>
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
