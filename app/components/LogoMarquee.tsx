import Image from 'next/image'

const LOGOS = [
  { src: '/Allies/KerrLogo.webp',                                  alt: 'Kerr' },
  { src: '/Allies/Kulzer_Logo_RGB_w_trans-1-e1747069135279.webp',  alt: 'Kulzer' },
  { src: '/Allies/oralb.svg',                                      alt: 'Oral-B' },
  { src: '/Allies/Ultradent_Logo.webp',                            alt: 'Ultradent' },
  { src: '/Allies/enahri.webp',                                    alt: 'Enahri' },
  { src: '/Allies/zhermack.png',                                   alt: 'Zhermack' },
]

function LogoItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center mx-16 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
      <Image
        src={src}
        alt={alt}
        width={140}
        height={44}
        loading="lazy"
        decoding="async"
        className="object-contain grayscale brightness-0 invert"
        style={{ height: '44px', width: 'auto', maxWidth: '140px' }}
      />
    </div>
  )
}

export default function LogoMarquee() {
  return (
    <div className="relative bg-[#0c0c0c] border-t border-white/8 py-12 overflow-hidden">

      <div
        className="absolute left-0 inset-y-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0c0c0c 0%, transparent 100%)' }}
      />
      <div
        className="absolute right-0 inset-y-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0c0c0c 0%, transparent 100%)' }}
      />

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
