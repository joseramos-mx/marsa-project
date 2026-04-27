import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* z-[1] — MARSA full-width display text */}
      <div className="absolute inset-0 flex items-center z-1 pointer-events-none">
        <svg
          viewBox="0 0 1000 480"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-label="MARSA"
          style={{ marginTop: '-2%' }}
        >
          <text
            x="0"
            y="420"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fontSize="400"
            fontWeight="100"
            fill="white"
            style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
          >
            MARSA
          </text>
        </svg>
      </div>

      {/* z-[2] — gradient black → transparent, bottom to top */}
      <div
        className="absolute inset-0 z-2 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #000000 0%, transparent 60%)',
        }}
      />

      {/* z-[3] — doctor image (place /public/doctor.png) */}
      <div className="absolute inset-0 z-3 flex items-end justify-center pointer-events-none">
        <div className="relative w-[480px] h-[90%]">
          <Image
            src="/doctor.png"
            alt="Doctor salem"
            fill
            priority
            className="object-contain object-bottom"
            sizes="480px"
          />
        </div>
      </div>

      {/* z-[4] — second gradient black → transparent, bottom to top, over the doctor */}
      <div
        className="absolute inset-0 z-4 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #000000 0%, transparent 60%)',
        }}
      />

      {/* Description card — bottom-left glass panel, above everything */}
      <div className="absolute bottom-[88px] left-8 z-5 max-w-72.5">
        <div
          className="rounded-2xl px-5 py-4"
          style={{
            background: 'rgba(255, 255, 255, 0.07)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p className="text-white/90 text-sm leading-relaxed font-light">
            Nos especializamos en procesos odontológicos y medicina estética con
            resultados naturales, seguros y personalizados
          </p>
        </div>
      </div>

    </section>
  )
}
