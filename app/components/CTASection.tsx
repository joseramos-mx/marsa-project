'use client'

import type { CSSProperties } from 'react'
import { motion } from 'motion/react'

function CrossMark({ style }: { style: CSSProperties }) {
  return (
    <div className="absolute w-5 h-5" style={style}>
      <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-px bg-white/30" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px bg-white/30" />
    </div>
  )
}

export default function CTASection() {
  return (
    <section
      className="bg-black py-20 px-8"
      style={{ fontFamily: 'var(--font-albert-sans), sans-serif' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative border border-white/15">

          {/* Corner marks */}
          <CrossMark style={{ top: 0,    left: 0,   transform: 'translate(-50%, -50%)' }} />
          <CrossMark style={{ top: 0,    right: 0,  transform: 'translate( 50%, -50%)' }} />
          <CrossMark style={{ bottom: 0, left: 0,   transform: 'translate(-50%,  50%)' }} />
          <CrossMark style={{ bottom: 0, right: 0,  transform: 'translate( 50%,  50%)' }} />

          {/* Horizontal divider mid-section + its 2 intersection marks */}
          <div
            className="absolute left-0 right-0 h-px bg-white/10"
            style={{ top: '50%' }}
          />
          <CrossMark style={{ top: '50%', left: 0,  transform: 'translate(-50%, -50%)' }} />
          <CrossMark style={{ top: '50%', right: 0, transform: 'translate( 50%, -50%)' }} />

          {/* Top half — headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center px-6 pt-12 pb-10 md:px-16 md:pt-16 md:pb-12"
          >
            <h2 className="text-white font-semibold leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Tu mejor sonrisa<br />
              <em className="not-italic text-white/40">te espera.</em>
            </h2>
          </motion.div>

          {/* Bottom half — body + buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center text-center px-6 pt-8 pb-12 md:px-16 md:pt-10 md:pb-16 gap-9"
          >
            <p className="text-white/45 text-sm leading-relaxed max-w-md">
              En Marsa Project combinamos especialistas certificados, tecnología avanzada
              y un ambiente pensado para tu comodidad. Agenda hoy y descubre el
              tratamiento ideal para ti.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="px-8 py-3.5 bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] text-black text-sm font-semibold hover:brightness-110 transition-all"
              >
                Agenda tu cita
              </a>
              <a
                href="#"
                className="px-8 py-3.5 border border-white/30 text-white text-sm font-light hover:border-white/60 hover:bg-white/5 transition-colors"
              >
                Contactar por WhatsApp
              </a>
            </div>

            {/* Subtle trust line */}
            <p className="text-white/20 text-xs tracking-wider uppercase">
              Más de 500 sonrisas transformadas · Especialistas certificados
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
