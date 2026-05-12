'use client'

import { motion } from 'motion/react'

const TESTIMONIALS = [
  {
    name: 'Paciente Marsa',
    quote: 'El equipo de Marsa transformó mi sonrisa por completo. Resultados naturales y un trato increíblemente humano desde el primer día.',
    src: '/patients/IMG_7756.PNG',
  },
  {
    name: 'Paciente Marsa',
    quote: 'Los implantes quedaron perfectos. Nadie cree que no son mis dientes naturales. Totalmente recomendado.',
    src: '/patients/IMG_7759.PNG',
  },
  {
    name: 'Paciente Marsa',
    quote: 'Me devolvieron la confianza en mi sonrisa. El resultado superó todas mis expectativas, me siento increíble.',
    src: '/patients/IMG_7765.PNG',
  },
  {
    name: 'Paciente Marsa',
    quote: 'Tecnología de punta y un equipo que realmente escucha. El diseño de sonrisa cambió mi vida.',
    src: '/patients/IMG_7769.PNG',
  },
  {
    name: 'Paciente Marsa',
    quote: 'Vine por el blanqueamiento y salí enamorada del servicio. Un equipo que se preocupa genuinamente por ti.',
    src: '/patients/IMG_7771.PNG',
  },
  {
    name: 'Paciente Marsa',
    quote: 'Los implantes dentales quedaron naturales y hermosos. Gracias Marsa Project por devolverme mi sonrisa.',
    src: '/patients/IMG_7774.PNG',
  },
]

const REELS = ['DSfOTsYFWwP', 'DScpauAEq5N', 'DSaEnJtkbZ5']

/* one set: 6 cards × (320px + 16px gap) = 2016px */
const CARD_W   = 320
const GAP      = 16
const SET_W    = TESTIMONIALS.length * (CARD_W + GAP)

const GEIST  = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

function QuoteIcon() {
  return (
    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" aria-hidden="true">
      <path
        d="M0 20V12.2C0 8.93 0.82 6.29 2.46 4.27C4.1 2.25 6.46 0.91 9.56 0.19L10.64 2.37C8.82 2.91 7.37 3.83 6.28 5.11C5.19 6.39 4.64 7.83 4.64 9.44H9.62V20H0ZM15.06 20V12.2C15.06 8.93 15.88 6.29 17.52 4.27C19.16 2.25 21.52 0.91 24.62 0.19L25.7 2.37C23.88 2.91 22.43 3.83 21.34 5.11C20.25 6.39 19.7 7.83 19.7 9.44H24.68V20H15.06Z"
        fill="white"
        fillOpacity="0.7"
      />
    </svg>
  )
}

export default function TestimonialsSection() {
  /* triple the array so the seamless loop has plenty of runway */
  const items = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section className="bg-[#0c0c0c] py-20 overflow-hidden">

      {/* ── Header (constrained) ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p
            className="text-white/40 text-[10px] uppercase mb-4"
            style={{ ...GEIST, letterSpacing: '0.22em' }}
          >
            ▪ Testimonios
          </p>
          <h2
            className="text-[2.6rem] md:text-5xl text-white leading-[1.12] tracking-tight mb-3"
            style={ALBERT}
          >
            Lo que dicen<br />sobre nosotros
          </h2>
          <p className="text-white/50 text-[14px] leading-relaxed" style={GEIST}>
            Historias reales de pacientes que transformaron su sonrisa.
          </p>
        </motion.div>
      </div>

      {/* ── Infinite marquee (full width) ── */}
      <motion.div
        className="flex"
        style={{ gap: GAP, width: 'max-content' }}
        animate={{ x: [0, -SET_W] }}
        transition={{
          duration: 32,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {items.map((t, i) => (
          <div
            key={i}
            className="shrink-0 rounded-3xl overflow-hidden relative"
            style={{ width: CARD_W, height: CARD_W }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.src}
              alt={t.name}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/30 to-transparent" />
            <div className="absolute top-5 left-5"><QuoteIcon /></div>
            <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
              <p className="text-white text-[13px] font-semibold leading-snug" style={ALBERT}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-white/55 text-[11px] text-right" style={GEIST}>— {t.name}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── Instagram Reels ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 mt-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-white/40 text-[10px] uppercase mb-8"
          style={{ ...GEIST, letterSpacing: '0.22em' }}
        >
          ▪ En video
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REELS.map((id, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              className="relative w-full overflow-hidden bg-[#111]"
              style={{ height: 560 }}
            >
              <iframe
                src={`https://www.instagram.com/reel/${id}/embed/`}
                className="absolute inset-0 w-full border-0 bg-transparent"
                style={{ height: 'calc(100% + 250px)', top: '-95px' }}
                scrolling="no"
                allow="encrypted-media"
                title={`Testimonio en video ${i + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
