'use client'

import { useState } from 'react'
import type { CSSProperties } from 'react'

function CrossMark({ style }: { style: CSSProperties }) {
  return (
    <div className="absolute w-5 h-5" style={style}>
      <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-px bg-white/30" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px bg-white/30" />
    </div>
  )
}

const faqs = [
  {
    q: '¿Qué es Marsa Project y qué servicios ofrece?',
    a: 'Marsa Project es una clínica especializada en odontología estética y medicina estética. Ofrecemos blanqueamiento, carillas de porcelana, diseño de sonrisa, ortodoncia invisible, implantes dentales y tratamientos de medicina estética no invasiva.',
  },
  {
    q: '¿Cuánto tiempo dura un tratamiento de blanqueamiento dental?',
    a: 'Una sesión dura entre 60 y 90 minutos. Los resultados son visibles desde la primera sesión y pueden mantenerse hasta 2 años con el cuidado adecuado.',
  },
  {
    q: '¿Los tratamientos estéticos son seguros?',
    a: 'Sí. Todos nuestros procedimientos son realizados por especialistas certificados con tecnología de última generación y bajo protocolos de seguridad rigurosos.',
  },
  {
    q: '¿Ofrecen planes de pago o financiamiento?',
    a: 'Sí, contamos con planes de pago flexibles y opciones de financiamiento adaptadas a tu presupuesto para que puedas acceder al tratamiento que necesitas.',
  },
  {
    q: '¿Cómo puedo agendar mi primera consulta?',
    a: 'Puedes agendar a través de nuestro sitio web, WhatsApp o llamándonos directamente. La primera consulta incluye una evaluación completa y personalizada de tu caso.',
  },
  {
    q: '¿Qué incluye el diseño de sonrisa digital?',
    a: 'Incluye una evaluación estética completa, simulación virtual de tu nueva sonrisa y un plan de tratamiento detallado antes de comenzar cualquier procedimiento.',
  },
  {
    q: '¿Cuánto tiempo duran los resultados de los tratamientos?',
    a: 'Depende del tratamiento: el blanqueamiento dura hasta 2 años, las carillas de porcelana hasta 15 años y los implantes dentales son una solución permanente con el cuidado adecuado.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/12 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-5 px-7 py-5 text-left group"
      >
        {/* + / × icon */}
        <span
          className="shrink-0 text-white/50 text-xl leading-none transition-transform duration-300 group-hover:text-white"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
        <span className="text-white text-sm font-light flex-1">{q}</span>
      </button>

      {/* Answer — CSS height transition */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '200px' : '0px' }}
      >
        <p className="px-7 pb-5 pl-[4.25rem] text-white/45 text-sm leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  return (
    <section
      className="bg-black py-20 px-8"
      style={{ fontFamily: 'var(--font-albert-sans), sans-serif' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative">

          {/* 4 outer corners */}
          <CrossMark style={{ top: 0,    left: 0,      transform: 'translate(-50%, -50%)' }} />
          <CrossMark style={{ top: 0,    right: 0,     transform: 'translate( 50%, -50%)' }} />
          <CrossMark style={{ bottom: 0, left: 0,      transform: 'translate(-50%,  50%)' }} />
          <CrossMark style={{ bottom: 0, right: 0,     transform: 'translate( 50%,  50%)' }} />

          {/* Divider intersections — grid-cols-[4fr_5fr] → divider at 44.44% */}
          <CrossMark style={{ top: 0,    left: '44.44%', transform: 'translate(-50%, -50%)' }} />
          <CrossMark style={{ bottom: 0, left: '44.44%', transform: 'translate(-50%,  50%)' }} />

          <div className="grid grid-cols-[4fr_5fr] border border-white/15">

            {/* Left — yellow panel */}
            <div
              className="flex flex-col justify-between px-10 py-12 border-r border-white/15"
              style={{ backgroundColor: '#EAB308' }}
            >
              <div className="flex flex-col gap-6">
                <h2 className="text-black text-5xl font-normal leading-tight">
                  Preguntas<br />Frecuentes
                </h2>
                <p className="text-black/70 text-sm leading-relaxed max-w-[220px]">
                  Encuentra respuestas a preguntas comunes acerca de la odontología
                  especializada y el proceso en Marsa Project.
                </p>
              </div>
            </div>

            {/* Right — FAQ accordion */}
            <div className="flex flex-col divide-y-0">
              {faqs.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
