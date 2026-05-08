'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

const CARDS = [
  {
    category: 'Odontología',
    title: 'Blanqueamiento\nDental',
    src: '/services/blanquamiento.jpg',
  },
  {
    category: 'Odontología',
    title: 'Carillas de\nPorcelana',
    src: '/services/carillas.png',
  },
  {
    category: 'Diseño',
    title: 'Diseño de\nSonrisa',
    src: '/services/disenodesonrisa.jpg',
  },
  {
    category: 'Ortodoncia',
    title: 'Ortodoncia\nInvisible',
    src: '/services/ortodoncia-invisible.png',
  },
  {
    category: 'Implantología',
    title: 'Implantes\nDentales',
    src: '/services/implantes.jpg',
  },
]

const CENTER = (CARDS.length - 1) / 2
const STARS  = Array.from({ length: 5 })

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const cardSize = isMobile ? 120 : 200
  const fanGap   = isMobile ? 32  : 80

  return (
    <div className="h-screen p-3 bg-white">
    <section className="relative h-full overflow-hidden bg-black rounded-[28px]">

      {/* z-1 — backgroundhero.svg typographic pattern */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/backgroundhero.svg" alt="" className="w-full h-full object-contain opacity-15 backdrop-blur-l" style={{ filter: 'brightness(0) invert(1)' }} />
      </div>

      {/* z-2 — gradient black → transparent, bottom to top */}
      <div
        className="absolute inset-0 z-2 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #000000 0%, transparent 60%)' }}
      />

      {/* z-3 — doctor image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0 z-3 flex items-end justify-center pointer-events-none"
      >
        <div className="relative w-[90vw] sm:w-100 md:w-150 h-250">
          <Image
            src="/doctor n.png"
            alt="Doctor Marsa Project"
            fill
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 25rem, 37.5rem"
            className="object-contain object-bottom"
          />
        </div>
      </motion.div>

      {/* z-4 — second gradient over doctor (bottom fade) */}
      <div
        className="absolute inset-0 z-4 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #000000 0%, transparent 50%)' }}
      />

      {/* z-5 — card fan + reviews pinned to bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-x-0 bottom-0 z-5 pointer-events-none"
        style={{ paddingBottom: '28px' }}
      >
        {/* Card fan */}
        <div
          style={{
            display:           'flex',
            alignItems:        'flex-end',
            justifyContent:    'center',
            gap:               `${fanGap}px`,
            perspective:       '1100px',
            perspectiveOrigin: '50% 50%',
            padding:           '0 24px',
          }}
        >
          {CARDS.map((card, i) => {
            const offset = i - CENTER
            const rotY   = offset * 13
            const zBack  = -Math.abs(offset) * 50
            const liftY  = -Math.abs(offset) * -22
            const scale  = 1 - Math.abs(offset) * 0.04

            return (
              <div
                key={i}
                style={{
                  width:        `${cardSize}px`,
                  height:       `${cardSize}px`,
                  borderRadius: '18px',
                  overflow:     'hidden',
                  position:     'relative',
                  flexShrink:   0,
                  transform:    `rotateY(${rotY}deg) translateZ(${zBack}px) translateY(${liftY}px) scale(${scale})`,
                  boxShadow:    Math.abs(offset) < 0.6
                    ? '0 24px 70px rgba(0,0,0,0.9)'
                    : '0 8px 32px rgba(0,0,0,0.6)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.src}
                  alt={card.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position:   'absolute',
                  inset:      0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 60%)',
                }} />
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px' }}>
                  <p style={{
                    color: 'rgba(201,168,76,0.9)', fontSize: '8px',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    fontWeight: 500, marginBottom: '3px',
                    fontFamily: 'var(--font-geist-sans)',
                  }}>
                    {card.category}
                  </p>
                  <p style={{
                    color: '#fff', fontSize: '12px', fontWeight: 600,
                    lineHeight: 1.25, whiteSpace: 'pre-line',
                    fontFamily: 'var(--font-albert-sans)',
                  }}>
                    {card.title}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Reviews */}
        <div style={{
          marginTop: isMobile ? '40px' : '86px', display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '5px',
        }}>
          <div style={{ display: 'flex', gap: '3px' }}>
            {STARS.map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#EAB308">
                <path d="M8 1l1.854 3.756 4.146.603-3 2.924.708 4.127L8 10.25l-3.708 1.16.708-4.127L2 4.359l4.146-.603L8 1z" />
              </svg>
            ))}
          </div>
          <p style={{
            color: 'rgba(255,255,255,0.38)', fontSize: '11px',
            letterSpacing: '0.04em', fontFamily: 'var(--font-geist-sans)',
          }}>
            Más de{' '}
            <span style={{ color: 'rgba(255,255,255,0.72)', fontWeight: 500 }}>500 pacientes</span>
            {' '}· Calificación{' '}
            <span style={{ color: 'rgba(255,255,255,0.72)', fontWeight: 500 }}>4.9 / 5</span>
          </p>
        </div>
      </motion.div>

    </section>
    </div>
  )
}
