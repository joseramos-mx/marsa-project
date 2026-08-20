'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import WhatsAppLink from '../WhatsAppLink'
import PhoneLink, { PHONE_DISPLAY } from '../PhoneLink'
import { WhatsAppIcon, PhoneIcon } from './icons'

/**
 * Cabecera reducida de landing.
 *
 * Deliberadamente sin menu de navegacion: el brief pide no incluir el menu
 * principal ni mandar al usuario a otras secciones. Solo quedan el logotipo y
 * los dos canales de contacto.
 */
export default function LandingHeader({ whatsappText }: { whatsappText: string }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3">
      <div
        className={`rounded-2xl overflow-hidden w-full max-w-5xl mx-auto transition-all duration-500 ${
          scrolled ? 'border border-white/10' : 'border border-transparent'
        }`}
        style={{
          background: scrolled ? 'rgba(8, 8, 8, 0.75)' : 'rgba(8, 8, 8, 0.35)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex items-center justify-between px-4 py-2.5 gap-3">
          <Link href="/" aria-label="Marsa Project" className="hover:opacity-80 transition-opacity shrink-0">
            <Image
              src="/logo.svg"
              alt="Marsa Project"
              width={140}
              height={36}
              className="h-8 md:h-9 object-contain"
              style={{ width: 'auto' }}
              priority
            />
          </Link>

          <div className="flex items-center gap-2 shrink-0">
            <PhoneLink
              src="header"
              aria-label={`Llamar al ${PHONE_DISPLAY}`}
              className="flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-full text-white/85 hover:text-white border border-white/15 hover:border-white/30 transition-colors text-[11px] uppercase tracking-wider font-medium"
            >
              <PhoneIcon size={12} />
              <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            </PhoneLink>

            <WhatsAppLink
              src="header"
              text={whatsappText}
              className="inline-flex items-center gap-1.5 bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] text-black font-semibold px-3.5 md:px-4 py-1.5 rounded-full text-[12px] md:text-[13px] hover:brightness-110 transition-all whitespace-nowrap"
            >
              <WhatsAppIcon size={14} />
              WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </header>
  )
}
