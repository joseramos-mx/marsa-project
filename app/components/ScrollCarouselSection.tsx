'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const CARDS = [
  {
    category: 'Odontología',
    title: 'Blanqueamiento\nDental',
    src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Odontología',
    title: 'Carillas de\nPorcelana',
    src: 'https://images.unsplash.com/photo-1588776814546-ec7e81f76b27?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Diseño',
    title: 'Diseño de\nSonrisa',
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Medicina Estética',
    title: 'Estética\nFacial',
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Ortodoncia',
    title: 'Ortodoncia\nInvisible',
    src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Implantología',
    title: 'Implantes\nDentales',
    src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop',
  },
]

const CARD_W     = 200
const CARD_H     = 200
const RADIUS     = 650
const N          = CARDS.length
const ANGLE_STEP = 360 / N

const DR_W = 500
const DR_H = 1200

export default function ScrollCarouselSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -720])
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])

  return (
    <div ref={containerRef} style={{ height: '300vh', background: '#000' }}>

      <div
        style={{
          position:          'sticky',
          top:               0,
          height:            '100vh',
          display:           'flex',
          flexDirection:     'column',
          alignItems:        'center',
          justifyContent:    'center',
          overflow:          'hidden',
          perspective:       '3000px',
          perspectiveOrigin: '50% 50%',
          background:        '#000',
        }}
      >
        <p style={{
          color:         'rgba(255,255,255,0.28)',
          fontSize:      '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom:  '52px',
          fontFamily:    'var(--font-geist-sans)',
        }}>
          Nuestros tratamientos
        </p>

        {/*
          Wrapper preserve-3d: propaga la perspectiva del sticky-div hacia adentro
          y permite z-sorting entre el doctor (z=0) y las tarjetas (-R … +R)
        */}
        <div
          style={{
            position:       'relative',
            width:          `${CARD_W}px`,
            height:         `${CARD_H}px`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* ── Pivote rotante — solo tarjetas ── */}
          <motion.div
            style={{
              position:       'absolute',
              inset:          0,
              transformStyle: 'preserve-3d',
              rotateY,
              rotateX:        15,
            }}
          >
            {CARDS.map((card, i) => (
              <div
                key={i}
                style={{
                  position:           'absolute',
                  top:                0,
                  left:               0,
                  width:              '100%',
                  height:             '100%',
                  transform:          `rotateY(${i * ANGLE_STEP}deg) translateZ(${RADIUS}px)`,
                  borderRadius:       '24px',
                  overflow:           'hidden',
                  backfaceVisibility: 'hidden',
                  boxShadow:          '0 40px 100px rgba(0,0,0,0.7), 0 8px 32px rgba(0,0,0,0.5)',
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
                  background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)',
                }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                  <p style={{
                    color:         'rgba(201,168,76,0.9)',
                    fontSize:      '9px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom:  '5px',
                    fontWeight:    '500',
                  }}>
                    {card.category}
                  </p>
                  <p style={{
                    color:      '#fff',
                    fontSize:   '15px',
                    fontWeight: '600',
                    lineHeight: 1.2,
                    whiteSpace: 'pre-line',
                  }}>
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/*
            ── Doctor ── completamente fuera del pivote rotante
            Sin ningún transform → z=0 en el espacio preserve-3d del wrapper
            Las tarjetas del frente (z > 0) aparecen delante; las del fondo (z < 0), detrás
          */}
          <div
            style={{
              position:      'absolute',
              left:          '50%',
              top:           '50%',
              width:         `${DR_W}px`,
              height:        `${DR_H}px`,
              marginLeft:    `${-DR_W / 2}px`,
              marginTop:     `${-DR_H / 2}px`,
              pointerEvents: 'none',
            }}
          >
            <Image
              src="/doctor2.png"
              alt="Doctor Salem"
              fill
              sizes="500px"
              style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
              priority
            />
          </div>
        </div>

        {/* Indicador de scroll */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-10 flex flex-col items-center gap-2 pointer-events-none"
        >
          <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: '10px', letterSpacing: '0.2em' }}>
            SCROLL
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
            style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.18)' }}
          />
        </motion.div>
      </div>
    </div>
  )
}
