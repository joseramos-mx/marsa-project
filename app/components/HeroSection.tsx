'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { useState, useEffect, useRef } from 'react'

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
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  /* ── Scroll-linked transforms ── */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Background SVG pattern — slow parallax (lags behind, depth)
  const bgY       = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.15, 0.1, 0])

  // Doctor — subtle zoom + slight downward lag + fade
  const doctorY       = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const doctorScale   = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const doctorOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0])

  // Card fan — accelerated exit (moves down faster than scroll) + fade
  const cardsY       = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.45, 0.85], [1, 0.5, 0])

  const cardSize = isMobile ? 120 : 200
  const fanGap   = isMobile ? 32  : 80

  return (
    <div ref={heroRef} className="h-screen p-3 bg-[#0c0c0c]">
    <section className="relative h-full overflow-hidden bg-black rounded-[28px]">

      {/* z-1 — backgroundhero.svg typographic pattern */}
      <motion.div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{ y: bgY, opacity: bgOpacity }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/backgroundhero.svg" alt="" className="w-full h-full object-contain backdrop-blur-l" style={{ filter: 'brightness(0) invert(1)' }} />
      </motion.div>

      {/* z-2 — gradient black → transparent, bottom to top */}
      <div
        className="absolute inset-0 z-2 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #000000 0%, transparent 60%)' }}
      />

      {/* z-3 — doctor image */}
      <motion.div
        className="absolute inset-0 z-3 flex items-end justify-center pointer-events-none"
        style={{ y: doctorY, scale: doctorScale, opacity: doctorOpacity }}
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
        className="absolute inset-x-0 bottom-0 z-5 pointer-events-none"
        style={{ paddingBottom: '28px', y: cardsY, opacity: cardsOpacity }}
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
            const offset    = i - CENTER
            const rotY      = offset * 13
            const zBack     = -Math.abs(offset) * 50
            const liftY     = Math.abs(offset) * 22
            const cardScale = 1 - Math.abs(offset) * 0.04
            const floatAmp  = 6 + Math.abs(offset) * 2

            return (
              <motion.div
                key={i}
                style={{
                  width:        `${cardSize}px`,
                  height:       `${cardSize}px`,
                  borderRadius: '18px',
                  overflow:     'hidden',
                  position:     'relative',
                  flexShrink:   0,
                  rotateY:      rotY,
                  z:            zBack,
                  scale:        cardScale,
                  boxShadow:    Math.abs(offset) < 0.6
                    ? '0 24px 70px rgba(0,0,0,0.9)'
                    : '0 8px 32px rgba(0,0,0,0.6)',
                }}
                animate={{ y: [liftY, liftY - floatAmp, liftY] }}
                transition={{
                  duration: 4 + Math.abs(offset) * 0.6,
                  delay:    i * 0.35,
                  repeat:   Infinity,
                  ease:     'easeInOut',
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
              </motion.div>
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
              <motion.svg
                key={i}
                width="14" height="14" viewBox="0 0 16 16" fill="#EAB308"
                animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.12, 1] }}
                transition={{
                  duration: 2.2,
                  delay:    i * 0.18,
                  repeat:   Infinity,
                  ease:     'easeInOut',
                }}
              >
                <path d="M8 1l1.854 3.756 4.146.603-3 2.924.708 4.127L8 10.25l-3.708 1.16.708-4.127L2 4.359l4.146-.603L8 1z" />
              </motion.svg>
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
