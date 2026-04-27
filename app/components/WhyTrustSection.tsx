import Image from 'next/image'
import type { CSSProperties } from 'react'

const features = [
  {
    icon: '/check.png',
    title: 'Contamos con especialistas',
    description:
      'Profesionales certificados con amplia experiencia en estética y odontología.',
  },
  {
    icon: '/heart.png',
    title: 'Instalaciones de vanguardia',
    description: 'Instalaciones seguras y diseñadas para tu comodidad.',
  },
  {
    icon: '/caliper.png',
    title: 'Equipamiento moderno',
    description:
      'Equipos de última generación para resultados precisos y seguros.',
  },
]

function CrossMark({ style }: { style: CSSProperties }) {
  return (
    <div className="absolute w-5 h-5" style={style}>
      <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-px bg-white/30" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px bg-white/30" />
    </div>
  )
}

const T = 'translate(-50%, -50%)'
const B = 'translate(-50%,  50%)'

export default function WhyTrustSection() {
  return (
    <section
      className="bg-black py-20 px-8"
      style={{ fontFamily: 'var(--font-albert-sans), sans-serif' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-white uppercase text-xl font-light mb-16">
          Por qué confiar en{' '}
          <strong className="font-semibold">Marsa Project?</strong>
        </h2>

        {/* Grid */}
        <div className="relative">

          {/* 4 outer corners */}
          <CrossMark style={{ top: 0,      left: 0,        transform: 'translate(-50%, -50%)' }} />
          <CrossMark style={{ top: 0,      right: 0,       transform: 'translate( 50%, -50%)' }} />
          <CrossMark style={{ bottom: 0,   left: 0,        transform: 'translate(-50%,  50%)' }} />
          <CrossMark style={{ bottom: 0,   right: 0,       transform: 'translate( 50%,  50%)' }} />

          {/* 4 divider intersections (top + bottom of each inner column border) */}
          <CrossMark style={{ top: 0,    left: '33.333%', transform: T }} />
          <CrossMark style={{ top: 0,    left: '66.667%', transform: T }} />
          <CrossMark style={{ bottom: 0, left: '33.333%', transform: B }} />
          <CrossMark style={{ bottom: 0, left: '66.667%', transform: B }} />

          <div className="grid grid-cols-3 border border-white/15">
            {features.map((feature, i) => (
              <div
                key={feature.icon}
                className={`flex flex-col gap-8 pt-14 pb-16 px-10 ${
                  i < 2 ? 'border-r border-white/15' : ''
                }`}
              >
                {/* Icon — centered */}
                <div className="flex justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={150}
                    height={120}
                    className="object-contain"
                  />
                </div>

                {/* Text — left aligned */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-white text-2xl font-light leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
