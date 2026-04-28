import Image from 'next/image'

function LogoItem() {
  return (
    <div className="flex items-center justify-center mx-20 shrink-0 opacity-40">
      <Image
        src="/logo ph.svg"
        alt="Partner logo"
        width={160}
        height={40}
        className="object-contain invert"
        style={{ height: 'auto' }}
      />
    </div>
  )
}

const LOGOS = Array.from({ length: 6 })

export default function LogoMarquee() {
  return (
    <div className="relative bg-black border-t border-white/6 py-10 overflow-hidden">

      {/* Left fade */}
      <div
        className="absolute left-0 inset-y-0 w-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #000000 0%, transparent 100%)' }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 inset-y-0 w-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #000000 0%, transparent 100%)' }}
      />

      {/* Scrolling track — duplicated set for seamless loop */}
      <div className="flex animate-marquee whitespace-nowrap">
        {LOGOS.map((_, i) => (
          <LogoItem key={i} />
        ))}
        {LOGOS.map((_, i) => (
          <LogoItem key={`b-${i}`} />
        ))}
      </div>

    </div>
  )
}
