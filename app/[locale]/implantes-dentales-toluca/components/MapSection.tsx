const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

const MAP_SRC =
  'https://www.google.com/maps?q=Paseo%20Crist%C3%B3bal%20Col%C3%B3n%20128%2C%20Toluca%2C%20Estado%20de%20M%C3%A9xico&z=16&output=embed'
const MAP_LINK =
  'https://www.google.com/maps/search/?api=1&query=Marsa+Project+Paseo+Cristobal+Colon+128+Toluca'

export default function MapSection() {
  return (
    <section className="relative bg-[#0c0c0c] py-20 md:py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#f8d974]" style={GEIST}>
            ▪ Ubicación
          </p>
          <h2 className="text-2xl md:text-3xl text-white leading-tight tracking-tight" style={ALBERT}>
            Marsa Project · Toluca
          </h2>
          <address className="not-italic text-white/70 text-[15px] leading-relaxed" style={GEIST}>
            P.º Cristóbal Colón 128-MZ 027<br />
            Residencial Colón y Col. Ciprés<br />
            50120 Toluca de Lerdo, Méx.
          </address>
          <div className="text-white/60 text-[14px] leading-relaxed" style={GEIST}>
            Lunes a viernes: 10:00 a.m. – 8:00 p.m.<br />
            Sábado: 10:00 a.m. – 4:00 p.m.<br />
            Domingo: Cerrado
          </div>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#f8d974] hover:text-white text-[13px] uppercase tracking-[0.14em] mt-2 w-fit"
            style={GEIST}
          >
            Cómo llegar
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02]">
          <iframe
            src={MAP_SRC}
            title="Mapa · Marsa Project Toluca"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 0, colorScheme: 'normal' }}
          />
        </div>
      </div>
    </section>
  )
}
