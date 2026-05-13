'use client'

import { motion } from 'motion/react'
import { Tooth, Sparkle, LineSegments, Baby, Drop, FirstAid } from '@phosphor-icons/react'

const GEIST  = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

const SPECIALTIES = [
  {
    Icon: Tooth,
    title: 'Implantología',
    description: 'Reemplazo permanente de piezas perdidas con implantes de titanio de alta resistencia y acabado natural.',
  },
  {
    Icon: Sparkle,
    title: 'Odontología estética',
    description: 'Carillas, blanqueamiento y diseño de sonrisa para resultados luminosos y naturales.',
  },
  {
    Icon: LineSegments,
    title: 'Ortodoncia',
    description: 'Alineadores invisibles y brackets para corregir la posición de tus dientes de forma cómoda.',
  },
  {
    Icon: Baby,
    title: 'Odontopediatría',
    description: 'Atención dental especializada para niños en un ambiente cálido, seguro y divertido.',
  },
  {
    Icon: Drop,
    title: 'Endodoncia',
    description: 'Tratamientos de conducto que preservan la pieza dental original con técnica precisa.',
  },
  {
    Icon: FirstAid,
    title: 'Cirugía maxilofacial',
    description: 'Procedimientos quirúrgicos especializados de la zona maxilofacial con tecnología avanzada.',
  },
]

export default function SpecialtiesSection() {
  return (
    <section className="bg-[#0c0c0c] py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <p
            className="text-white/40 text-[10px] uppercase mb-5"
            style={{ ...GEIST, letterSpacing: '0.22em' }}
          >
            ▪ Especialidades
          </p>
          <h2
            className="text-[2.6rem] md:text-5xl text-white leading-[1.12] tracking-tight mb-5"
            style={ALBERT}
          >
            Especialidades<br />
            <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">en Marsa Project</span>
          </h2>
          <p
            className="text-white/50 text-[15px] leading-relaxed max-w-md mx-auto"
            style={GEIST}
          >
            Un equipo multidisciplinario de especialistas certificados cubre cada
            necesidad odontológica bajo un mismo techo.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SPECIALTIES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="group relative bg-[#141414] border border-white/5 rounded-3xl p-7 flex flex-col gap-5 transition-colors hover:border-white/15"
            >
              {/* Icon badge */}
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#c69a2c] via-[#f8d974] to-[#c69a2c] flex items-center justify-center shrink-0">
                <s.Icon size={22} weight="duotone" className="text-black" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-white text-[1.15rem] font-semibold leading-snug"
                  style={ALBERT}
                >
                  {s.title}
                </h3>
                <p
                  className="text-white/50 text-[13px] leading-relaxed"
                  style={GEIST}
                >
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
