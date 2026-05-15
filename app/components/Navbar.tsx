'use client'

import NextLink from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname } from '../../i18n/navigation'
import { routing } from '../../i18n/routing'

function MarsaLogo() {
  return (
    <Image
      src="/marsa logo.png"
      alt="MARSA Logo"
      width={160}
      height={40}
      className="h-9 md:h-10 object-contain"
      style={{ width: 'auto' }}
      priority
    />
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      {open ? (
        <>
          <path d="M2 2L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M2 4h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  )
}

function LanguageSwitch() {
  const locale = useLocale()
  const pathname = usePathname()
  const tLang = useTranslations('language')
  const other = routing.locales.find((l) => l !== locale) ?? routing.defaultLocale

  return (
    <Link
      href={pathname}
      locale={other}
      aria-label={tLang('switchLabel')}
      className="flex items-center justify-center px-3 py-1.5 rounded-full text-white/80 hover:text-white border border-white/15 hover:border-white/30 transition-colors text-[11px] uppercase tracking-wider font-medium"
    >
      {tLang(other as 'es' | 'en')}
    </Link>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslations('navbar')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links: { label: string; href: string }[] = [
    { label: t('inicio'),          href: '#inicio'         },
    { label: t('nosotros'),        href: '#nosotros'       },
    { label: t('especialidades'),  href: '#especialidades' },
    { label: t('servicios'),       href: '#servicios'      },
    { label: t('testimonios'),     href: '#testimonios'    },
    { label: t('faq'),             href: '#faq'            },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3">

      <div
        className={`rounded-2xl overflow-hidden w-fit mx-auto transition-all duration-500 ${
          scrolled ? 'border border-white/10' : 'border border-transparent'
        }`}
        style={{
          background: scrolled ? 'rgba(8, 8, 8, 0.45)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >

        <div className="flex items-center justify-between md:justify-center px-4 py-2.5 gap-4 md:gap-15">

          <Link href="/" className="hover:opacity-80 transition-opacity shrink-0" aria-label={t('home')}>
            <MarsaLogo />
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-white/80 text-sm font-light">
            {links.map((l) => (
              <NextLink key={l.href} href={l.href} className="hover:text-white transition-colors uppercase tracking-wide text-xs">
                {l.label}
              </NextLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <LanguageSwitch />

            <NextLink
              href="https://wa.me/527225356109"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] text-black font-semibold px-4 py-1.5 rounded-full text-sm hover:brightness-110 transition-all"
            >
              {t('agenda')}
            </NextLink>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/15 transition-colors"
              aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>

        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col px-6 pt-2 pb-5 border-t border-white/10">
            {links.map((item, i, arr) => (
              <NextLink
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`py-4 text-white/80 text-base font-light hover:text-white transition-colors ${
                  i < arr.length - 1 ? 'border-b border-white/8' : ''
                }`}
              >
                {item.label}
              </NextLink>
            ))}
          </nav>
        </div>

      </div>
    </header>
  )
}
