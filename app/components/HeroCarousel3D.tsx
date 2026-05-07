'use client'

import { useRef, useState } from 'react'
import { useAnimationFrame } from 'motion/react'

// 9 arm angles — incrementos de 20deg, centrados en 70deg
const ARM_ANGLES = [-10, 10, 30, 50, 70, 90, 110, 130, 150]

const CARDS = [
  {
    category: 'Odontología',
    title: 'Blanqueamiento',
    src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Odontología',
    title: 'Carillas',
    src: 'https://images.unsplash.com/photo-1588776814546-ec7e81f76b27?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Diseño',
    title: 'Diseño de Sonrisa',
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Medicina Estética',
    title: 'Estética Facial',
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Ortodoncia',
    title: 'Ortodoncia Invisible',
    src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Implantología',
    title: 'Implantes Dentales',
    src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Odontología',
    title: 'Blanqueamiento Laser',
    src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Diseño',
    title: 'Diseño Digital',
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Estética',
    title: 'Medicina Estética',
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop',
  },
]

const CARD_W      = 182
const CARD_H      = 248
const TRANSLATE_Z = 600     // radio del arco
const BASE_ROT_Y  = 153     // ángulo inicial — muestra solo el arco frontal
const SPEED       = 0.010   // deg/ms → ~10 deg/s, suave y majestuoso

export default function HeroCarousel3D() {
  const parentRef = useRef<HTMLDivElement>(null)
  const rotYRef   = useRef(BASE_ROT_Y)
  const [paused, setPaused] = useState(false)

  useAnimationFrame((_t, delta) => {
    if (paused || !parentRef.current) return
    rotYRef.current += delta * SPEED
    parentRef.current.style.transform =
      `rotateX(10deg) rotateY(${rotYRef.current}deg)`
  })

  return (
    <div
      className="select-none w-full"
      style={{
        height: '320px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/*
        Contenedor padre:
        - perspective: 3000px  → espacio 3D para los hijos
        - transform: rotateX + rotateY  → inclina y rota el arco completo
        - transform-style: preserve-3d  → propaga 3D a toda la jerarquía
        - width/height: 0  → ancla en el centro del flex parent
      */}
      <div
        ref={parentRef}
        style={{
          perspective:     '3000px',
          perspectiveOrigin: '50% 50%',
          transform:       `rotateX(10deg) rotateY(${BASE_ROT_Y}deg)`,
          transformStyle:  'preserve-3d',
          width:  0,
          height: 0,
          position: 'relative',
        }}
      >
        {/* Arms container — centrado en el origen, preserve-3d */}
        <div
          style={{
            position:      'absolute',
            left: 0,
            top:  0,
            transformStyle: 'preserve-3d',
          }}
        >
          {ARM_ANGLES.map((angle, i) => (
            // arm — anclado al origen, rotado en Y
            <div
              key={i}
              style={{
                position:        'absolute',
                left: 0,
                top:  0,
                transformOrigin: 'center center',
                transform:       `rotateY(${angle}deg)`,
                transformStyle:  'preserve-3d',
              }}
            >
              {/* wrapper — desplazado hacia afuera con translateZ = radio */}
              <div
                style={{
                  position:      'absolute',
                  transform:     `translateZ(${TRANSLATE_Z}px)`,
                  transformStyle: 'preserve-3d',
                  width:      `${CARD_W}px`,
                  height:     `${CARD_H}px`,
                  marginLeft: `${-CARD_W / 2}px`,
                  marginTop:  `${-CARD_H / 2}px`,
                }}
              >
                {/* Card real */}
                <div
                  style={{
                    width:        '100%',
                    height:       '100%',
                    borderRadius: '24px',
                    overflow:     'hidden',
                    position:     'relative',
                    boxShadow:    '0 40px 100px rgba(0,0,0,0.65), 0 8px 24px rgba(0,0,0,0.45)',
                  }}
                >
                  {/* Imagen */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={CARDS[i].src}
                    alt={CARDS[i].title}
                    style={{
                      width:      '100%',
                      height:     '100%',
                      objectFit:  'cover',
                      display:    'block',
                    }}
                  />

                  {/* Gradient overlay */}
                  <div
                    style={{
                      position:   'absolute',
                      inset:      0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)',
                    }}
                  />

                  {/* Texto del servicio */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom:   '18px',
                      left:     '16px',
                      right:    '16px',
                    }}
                  >
                    <p style={{
                      color:          'rgba(201,168,76,0.85)',
                      fontSize:       '9px',
                      letterSpacing:  '0.13em',
                      textTransform:  'uppercase',
                      marginBottom:   '5px',
                      fontWeight:     '500',
                    }}>
                      {CARDS[i].category}
                    </p>
                    <p style={{
                      color:       '#ffffff',
                      fontSize:    '15px',
                      fontWeight:  '600',
                      lineHeight:  1.2,
                    }}>
                      {CARDS[i].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
