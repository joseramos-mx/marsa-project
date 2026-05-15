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
  const [activeIdx, setActiveIdx] = useState(0)
  const heroRef  = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  /* ── Mobile carousel: track scroll position for dots ── */
  const handleTrackScroll = () => {
    if (!trackRef.current) return
    const { scrollLeft, clientWidth } = trackRef.current
    const idx = Math.round(scrollLeft / clientWidth)
    if (idx !== activeIdx) setActiveIdx(idx)
  }

  /* ── Desktop carousel: auto-advance every 3.5s (paused while user interacts) ── */
  const pauseUntilRef = useRef(0)
  useEffect(() => {
    if (isMobile) return
    const id = setInterval(() => {
      if (Date.now() < pauseUntilRef.current) return
      setActiveIdx(prev => (prev + 1) % CARDS.length)
    }, 3500)
    return () => clearInterval(id)
  }, [isMobile])

  /* ── Desktop drag/swipe: manual rotation with mouse or touch ── */
  const dragStartRef = useRef<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartRef.current = e.clientX
    setIsDragging(true)
    pauseUntilRef.current = Date.now() + 8000   // pause auto-advance for 8s
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragStartRef.current === null) return
    const delta = e.clientX - dragStartRef.current
    const SWIPE_THRESHOLD = 40
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0) setActiveIdx(prev => (prev + 1) % CARDS.length)
      else           setActiveIdx(prev => (prev - 1 + CARDS.length) % CARDS.length)
    }
    dragStartRef.current = null
    setIsDragging(false)
  }

  const handlePointerCancel = () => {
    dragStartRef.current = null
    setIsDragging(false)
  }

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

      {/* SEO h1 — visually hidden, accessible to crawlers and screen readers */}
      <h1 className="sr-only">
        Marsa Project · Clínica de odontología estética y medicina estética en Toluca: blanqueamiento dental, carillas de porcelana, diseño de sonrisa, ortodoncia invisible e implantes dentales
      </h1>

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
        className="absolute inset-0 z-3 flex items-start sm:items-end justify-center pointer-events-none"
        style={{ y: doctorY, scale: doctorScale, opacity: doctorOpacity }}
      >
        <div className="relative w-[150vw] sm:w-100 md:w-150 h-full md:h-250">
          {/* Mobile: vertical-portrait doctor (1340×2400) */}
          <Image
            src="/doctorver.png"
            alt="Doctor Marsa Project"
            fill
            priority
            sizes="(max-width: 640px) 150vw, 0px"
            className="object-cover object-top sm:hidden"
          />
          {/* Desktop & up: standard doctor */}
          <Image
            src="/doctor n.png"
            alt="Doctor Marsa Project"
            fill
            priority
            sizes="(max-width: 768px) 25rem, 37.5rem"
            className="hidden sm:block object-contain object-bottom"
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
        {/* ── Mobile: swipeable carousel (one card per slide) ── */}
        {isMobile ? (
          <>
            <div
              ref={trackRef}
              onScroll={handleTrackScroll}
              className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pointer-events-auto"
              style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
            >
              {CARDS.map((card, i) => (
                <div
                  key={i}
                  className="snap-center shrink-0 w-screen flex justify-center items-center"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <motion.div
                    style={{
                      width:        '60vw',
                      height:       '60vw',
                      borderRadius: '20px',
                      overflow:     'hidden',
                      position:     'relative',
                      boxShadow:    '0 24px 70px rgba(0,0,0,0.9)',
                    }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4,
                      delay:    i * 0.3,
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
                      background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 55%)',
                    }} />
                    <div style={{ position: 'absolute', bottom: '14px', left: '14px', right: '14px' }}>
                      <p style={{
                        color: 'rgba(248,217,116,0.95)', fontSize: '9px',
                        letterSpacing: '0.16em', textTransform: 'uppercase',
                        fontWeight: 500, marginBottom: '4px',
                        fontFamily: 'var(--font-geist-sans)',
                      }}>
                        {card.category}
                      </p>
                      <p style={{
                        color: '#fff', fontSize: '15px', fontWeight: 600,
                        lineHeight: 1.2, whiteSpace: 'pre-line',
                        fontFamily: 'var(--font-albert-sans)',
                      }}>
                        {card.title}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-5">
              {CARDS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIdx ? 'w-6 bg-white/90' : 'w-1.5 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          /* ── Desktop: auto-rotating 3D carousel (also draggable) ── */
          <div
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onPointerLeave={handlePointerCancel}
            className="pointer-events-auto select-none"
            style={{
              position:          'relative',
              height:            `${cardSize + 60}px`,
              perspective:       '1100px',
              perspectiveOrigin: '50% 50%',
              padding:           '0 24px',
              cursor:            isDragging ? 'grabbing' : 'grab',
              touchAction:       'pan-y',
            }}
          >
            {CARDS.map((card, i) => {
              const N = CARDS.length
              // Position of this card in the fan, relative to the center slot.
              // pos cycles -2,-1,0,1,2 (for N=5) as activeIdx advances.
              let pos = ((i - activeIdx) % N + N) % N
              if (pos > Math.floor(N / 2)) pos -= N

              const isFarEdge = Math.abs(pos) === Math.floor(N / 2)
              const rotY      = pos * 13
              const zBack     = -Math.abs(pos) * 60
              const liftY     = Math.abs(pos) * 22
              const cardScale = 1 - Math.abs(pos) * 0.06
              const spacing   = cardSize + fanGap

              return (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{
                    x:        pos * spacing,
                    rotateY:  rotY,
                    z:        zBack,
                    y:        liftY,
                    scale:    cardScale,
                    opacity:  isFarEdge ? 0.45 : 1,
                  }}
                  transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    position:     'absolute',
                    left:         `calc(50% - ${cardSize / 2}px)`,
                    top:          0,
                    width:        `${cardSize}px`,
                    height:       `${cardSize}px`,
                    borderRadius: '18px',
                    overflow:     'hidden',
                    zIndex:       10 - Math.abs(pos) * 3,
                    boxShadow:    Math.abs(pos) < 0.6
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
                </motion.div>
              )
            })}
          </div>
        )}

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
