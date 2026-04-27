import Image from 'next/image'
import type { CSSProperties } from 'react'

function CrossMark({ style }: { style: CSSProperties }) {
  return (
    <div className="absolute w-5 h-5" style={style}>
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
          <CrossMark style={{ top: 0,    left: '60%', transform: 'translate(-50%, -50%)' }} />
          <CrossMark style={{ bottom: 0, left: '60%', transform: 'translate(-50%,  50%)' }} />

          <div className="grid grid-cols-[3fr_2fr] border border-white/15 min-h-[480px]">

            {/* Left — text */}
            <div className="flex flex-col justify-center gap-8 px-14 py-16 border-r border-white/15">
              <h2 className="text-white text-4xl font-thin leading- tracking-tight">
                Un espacio diseñado para tu bienestar.
              </h2>
              <p className="text-white/55 text-sm leading-relaxed max-w-sm">
                En Marsa Project combinamos atención médica especializada,
                tecnología avanzada y un ambiente de lujo para brindarte
                resultados que elevan tu confianza y bienestar.
              </p>
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 bg-[#EAB308] text-black font-semibold text-sm hover:bg-[#ca9a07] transition-colors cursor-pointer">
                  Agenda tu cita
                </button>
                <button className="px-6 py-3 border border-[#EAB308] text-[#EAB308] font-semibold text-sm hover:bg-[#EAB308]/10 transition-colors cursor-pointer">
                  Agenda tu cita
                </button>
              </div>
            </div>

            {/* Right — doctors image, edge-to-edge inside the frame */}
            <div className="relative overflow-hidden">
              <Image
                src="/doctores.png"
                alt="Equipo médico Marsa"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1280px) 40vw, 460px"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
