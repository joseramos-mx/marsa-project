'use client'

import Image from 'next/image'
import type { CSSProperties } from 'react'
import { motion } from 'motion/react'

function CrossMark({ style, className = '' }: { style: CSSProperties; className?: string }) {
  return (
    <div className={`absolute w-5 h-5 ${className}`} style={style}>
      <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-px bg-white/30" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px bg-white/30" />
    </div>
  )
}

export default function WellnessSection() {
  return (
    <section
      className="bg-black py-20 px-8"
      style={{ fontFamily: 'var(--font-albert-sans), sans-serif' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative">

          {/* 4 outer corners */}
          <CrossMark style={{ top: 0,    left: 0,     transform: 'translate(-50%, -50%)' }} />
          <CrossMark style={{ top: 0,    right: 0,    transform: 'translate( 50%, -50%)' }} />
          <CrossMark style={{ bottom: 0, left: 0,     transform: 'translate(-50%,  50%)' }} />
          <CrossMark style={{ bottom: 0, right: 0,    transform: 'translate( 50%,  50%)' }} />

          {/* 2 divider intersections — grid is 3fr+2fr = divider at 60% */}
          <CrossMark style={{ top: 0,    left: '60%', transform: 'translate(-50%, -50%)' }} className="hidden md:block" />
          <CrossMark style={{ bottom: 0, left: '60%', transform: 'translate(-50%,  50%)' }} className="hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] border border-white/15 md:min-h-120">

            {/* Left — text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-center gap-8 px-8 py-12 md:px-14 md:py-16 md:border-r border-b md:border-b-0 border-white/15"
            >
              <h2 className="text-white text-4xl font-thin leading- tracking-tight">
                Un espacio diseñado para tu bienestar.
              </h2>
              <p className="text-white/55 text-sm leading-relaxed max-w-sm">
                En Marsa Project combinamos atención médica especializada,
                tecnología avanzada y un ambiente de lujo para brindarte
                resultados que elevan tu confianza y bienestar.
              </p>
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] text-black font-semibold text-sm hover:brightness-110 transition-all cursor-pointer">
                  Agenda tu cita
                </button>
                <button className="px-6 py-3 border border-[#c69a2c] text-[#c69a2c] font-semibold text-sm hover:bg-[#c69a2c]/10 transition-all cursor-pointer">
                  Agenda tu cita
                </button>
              </div>
            </motion.div>

            {/* Right — doctors image, edge-to-edge inside the frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative overflow-hidden min-h-72 md:min-h-0 bg-white/5"
            >
              <Image
                src="/doctores.jpg"
                alt="Equipo médico Marsa"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1280px) 40vw, 460px"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
