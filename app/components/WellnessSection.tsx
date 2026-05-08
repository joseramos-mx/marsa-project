'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight } from '@phosphor-icons/react'

const NUM   = { fontFamily: 'var(--font-albert-sans)', fontWeight: 900 }
const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

const TAGS = [
  'Blanqueamiento dental', 'Carillas de porcelana', 'Diseño de sonrisa',
  'Ortodoncia invisible', 'Implantes dentales', 'Resultados naturales',
]

export default function WellnessSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Header — left title / right description ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10"
        >
          {/* Left */}
          <div className="max-w-xl">
            <p
              className="text-black/35 text-[10px] uppercase mb-4"
              style={{ ...GEIST, letterSpacing: '0.22em' }}
            >
              ▪ Nosotros
            </p>
            <h2
              className="text-[2.6rem] md:text-5xl text-black tracking-tight leading-[1.12]"
              style={ALBERT}
            >
              Un equipo dedicado<br />a tu bienestar y<br />
              <span style={{ color: '#c18845' }}>
                tu mejor{' '}
                <img src="/smileicon.svg" alt="" className="inline h-[0.85em] align-middle mx-0.5" />
                {' '}sonrisa
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5 max-w-xs">
            <p className="text-black/50 text-[14px] leading-relaxed" style={GEIST}>
              En Marsa Project combinamos ciencia, tecnología avanzada y
              un enfoque humano para brindarte resultados excepcionales.
            </p>
            <Link
              href="https://wa.me/527225356109"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center self-start bg-[#0c0c0c] text-white pl-6 pr-1.5 py-1.5 rounded-full hover:bg-black/80 transition-colors"
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] pr-3" style={GEIST}>
                Agenda tu cita
              </span>
              <span className="w-8 h-8 rounded-full bg-[#c18845] flex items-center justify-center shrink-0">
                <ArrowUpRight size={15} weight="bold" className="text-black" />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3">

          {/* Card 1 — tall left · doctor photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:row-span-2 rounded-3xl overflow-hidden relative bg-[#e8e0d5] min-h-100"
          >
            <Image
              src="/doctores.jpg"
              alt="Equipo Marsa Project"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          {/* Card 2 — top center · dark · image placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="rounded-3xl overflow-hidden relative min-h-50"
            style={{ backgroundColor: '#0c0c0c' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bg img us.svg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Card 3 — top right · gold */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="rounded-3xl p-7 flex flex-col justify-between min-h-50"
            style={{ backgroundColor: '#480517' }}
          >
            <p className="text-white/55 text-[11px] uppercase tracking-widest" style={GEIST}>
              Calificación promedio
            </p>
            <div>
              <span className="block text-[4rem] leading-none text-white" style={NUM}>5.0 ★</span>
              <p className="text-white/60 text-[13px] mt-2 leading-snug" style={GEIST}>
                Basada en más de 500 reseñas verificadas.
              </p>
            </div>
          </motion.div>

          {/* Card 4 — bottom right · wide (col-span-2) · treatment tags */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="md:col-span-2 rounded-3xl p-7 flex flex-col justify-between min-h-40 relative overflow-hidden"
            style={{ backgroundColor: '#f2f0ed' }}
          >
            {/* Placeholder bg — user will add image later */}
            <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, #f2f0ed 0%, #e8e4de 100%)' }} />

            <div className="relative z-10 flex flex-col gap-5">
              <p className="text-black/35 text-[11px] uppercase tracking-widest" style={GEIST}>
                Nuestros tratamientos
              </p>
              <div className="flex flex-wrap gap-2">
                {TAGS.map(tag => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-[12px] text-black/65 border border-black/12 bg-white/70"
                    style={GEIST}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
