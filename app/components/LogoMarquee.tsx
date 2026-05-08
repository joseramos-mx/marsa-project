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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="object-contain grayscale brightness-0"
        style={{ height: '44px', width: 'auto', maxWidth: '140px' }}
      />
    </div>
  )
}

export default function LogoMarquee() {
  return (
    <div className="relative bg-white border-t border-black/8 py-12 overflow-hidden">

      {/* Left fade */}
      <div
        className="absolute left-0 inset-y-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #ffffff 0%, transparent 100%)' }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 inset-y-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #ffffff 0%, transparent 100%)' }}
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
