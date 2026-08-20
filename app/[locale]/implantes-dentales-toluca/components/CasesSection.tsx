const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

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

        {/* Placeholder autorizado — reemplazar con galería real */}
        <div
          role="group"
          aria-label="Galería de casos clínicos autorizados"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-2xl border border-dashed border-white/15 bg-white/[0.02] flex items-center justify-center overflow-hidden"
            >
              <div className="flex flex-col items-center gap-2 text-center px-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/25" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <p className="text-white/40 text-[11px] uppercase tracking-[0.14em]" style={GEIST}>
                  Caso #{i + 1} — pendiente
                </p>
                <p className="text-white/25 text-[10px]" style={GEIST}>
                  Contenido autorizado por publicar
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-white/50 text-[13px] italic max-w-2xl" style={GEIST}>
          Los resultados pueden variar de acuerdo con las condiciones particulares de cada paciente.
        </p>
      </div>
    </section>
  )
}
