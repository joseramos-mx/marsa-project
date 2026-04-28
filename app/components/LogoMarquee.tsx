import Image from 'next/image'

const LOGOS = [
  { src: '/allies/KerrLogo.png', alt: 'Kerr' },
  { src: '/allies/Kulzer_Logo_RGB_w_trans-1-e1747069135279.webp', alt: 'Kulzer' },
  { src: '/allies/oralb.svg', alt: 'Oral-B' },
  { src: '/allies/Ultradent_Logo.png', alt: 'Ultradent' },
  { src: '/allies/enahri.png', alt: 'Enahri' },
  { src: '/allies/zhermack.png', alt: 'Zhermack' }
]

function LogoItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center mx-16 shrink-0 opacity-50 hover:opacity-100 transition-opacity">
      <Image
        src={src}
        alt={alt}
        width={140}
        height={60}
        className="object-contain grayscale brightness-0 invert"
        style={{ height: 'auto', maxHeight: '50px' }}
      />
    </div>
  )
}

export default function LogoMarquee() {
  return (
    <div className="relative bg-black border-t border-white/10 py-12 overflow-hidden">

      {/* Left fade */}
      <div
        className="absolute left-0 inset-y-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #000000 0%, transparent 100%)' }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 inset-y-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #000000 0%, transparent 100%)' }}
      />

      {/* Scrolling track — duplicated set for seamless loop */}
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {LOGOS.map((logo, i) => (
          <LogoItem key={i} src={logo.src} alt={logo.alt} />
        ))}
        {LOGOS.map((logo, i) => (
          <LogoItem key={`b-${i}`} src={logo.src} alt={logo.alt} />
        ))}
      </div>

    </div>
  )
}
