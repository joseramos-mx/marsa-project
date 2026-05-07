'use client'

import { motion } from 'motion/react'

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

const CENTER = (CARDS.length - 1) / 2

const STARS = Array.from({ length: 5 })

export default function ScrollCarouselSection() {
  return (
    <section
      className="relative bg-black overflow-hidden"
      style={{ paddingTop: '56px', paddingBottom: '60px' }}
    >
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          textAlign:     'center',
          color:         'rgba(255,255,255,0.28)',
          fontSize:      '10px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginBottom:  '40px',
          fontFamily:    'var(--font-geist-sans)',
        }}
      >
        Nuestros tratamientos
      </motion.p>

      {/* Card fan */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          display:           'flex',
          alignItems:        'flex-end',
          justifyContent:    'center',
          gap:               '80px',
          perspective:       '1100px',
          perspectiveOrigin: '50% 50%',
          padding:           '0 24px',
        }}
      >
        {CARDS.map((card, i) => {
          const offset = i - CENTER           // –2.5 … +2.5
          const rotY   = offset * 13          // fan: outer cards tilt outward
          const zBack  = -Math.abs(offset) * 50
          const scale  = 1 - Math.abs(offset) * 0.04

          return (
            <div
              key={i}
              style={{
                width:        '155px',
                height:       '155px',
                borderRadius: '18px',
                overflow:     'hidden',
                position:     'relative',
                flexShrink:   0,
                transform:    `rotateY(${rotY}deg) translateZ(${zBack}px) scale(${scale})`,
                boxShadow:    Math.abs(offset) < 0.6
                  ? '0 28px 80px rgba(0,0,0,0.9), 0 4px 24px rgba(0,0,0,0.5)'
                  : '0 10px 36px rgba(0,0,0,0.6)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.src}
                alt={card.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />

              {/* Gradient */}
              <div style={{
                position:   'absolute',
                inset:      0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.06) 55%, transparent 100%)',
              }} />

              {/* Text */}
              <div style={{ position: 'absolute', bottom: '14px', left: '14px', right: '14px' }}>
                <p style={{
                  color:         'rgba(201,168,76,0.9)',
                  fontSize:      '9px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight:    500,
                  marginBottom:  '5px',
                  fontFamily:    'var(--font-geist-sans)',
                }}>
                  {card.category}
                </p>
                <p style={{
                  color:      '#fff',
                  fontSize:   '14px',
                  fontWeight: 600,
                  lineHeight: 1.25,
                  whiteSpace: 'pre-line',
                  fontFamily: 'var(--font-albert-sans)',
                }}>
                  {card.title}
                </p>
              </div>
            </div>
          )
        })}
      </motion.div>

      {/* Side fade gradients */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32"
        style={{ background: 'linear-gradient(to right, #000 0%, transparent 100%)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32"
        style={{ background: 'linear-gradient(to left, #000 0%, transparent 100%)' }}
      />

      {/* Reviews */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        style={{
          marginTop:      '40px',
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          gap:            '8px',
        }}
      >
        {/* Stars */}
        <div style={{ display: 'flex', gap: '4px' }}>
          {STARS.map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#EAB308">
              <path d="M8 1l1.854 3.756 4.146.603-3 2.924.708 4.127L8 10.25l-3.708 1.16.708-4.127L2 4.359l4.146-.603L8 1z" />
            </svg>
          ))}
        </div>

        {/* Text */}
        <p style={{
          color:         'rgba(255,255,255,0.40)',
          fontSize:      '12px',
          letterSpacing: '0.04em',
          fontFamily:    'var(--font-geist-sans)',
        }}>
          Más de{' '}
          <span style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
            500 pacientes satisfechos
          </span>
          {' '}· Calificación{' '}
          <span style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
            4.9 / 5
          </span>
        </p>
      </motion.div>

    </section>
  )
}
