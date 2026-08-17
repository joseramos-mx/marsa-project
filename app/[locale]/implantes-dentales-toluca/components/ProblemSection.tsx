const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

export default function ProblemSection() {
  return (
    <section className="relative bg-[#0c0c0c] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center flex flex-col gap-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#f8d974]" style={GEIST}>
          ▪ Por qué actuar
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
          Recupera tu sonrisa y la{' '}
          <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">
            función de tus dientes
          </span>
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed" style={GEIST}>
          La pérdida de uno o más dientes puede afectar tu forma de masticar, tu sonrisa y tu confianza.
        </p>
        <p className="text-white/70 text-base md:text-lg leading-relaxed" style={GEIST}>
          Los implantes dentales pueden ser una alternativa para reemplazar dientes ausentes. En Marsa Project evaluamos cada caso para determinar el tratamiento adecuado de acuerdo con tus necesidades.
        </p>
        <div className="pt-4">
          <a
            href="#agenda"
            className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] text-black font-semibold px-6 py-3.5 rounded-full text-[13px] uppercase tracking-[0.14em] hover:brightness-110 transition-all"
            style={GEIST}
          >
            Agenda tu valoración
          </a>
        </div>
      </div>
    </section>
  )
}
