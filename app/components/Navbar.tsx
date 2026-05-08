'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3">

      {/* ── Pill container — wraps bar + mobile dropdown ── */}
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

        {/* Main bar */}
        <div className="flex items-center justify-between md:justify-center px-4 py-2.5 gap-4 md:gap-15">

          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity shrink-0" aria-label="MARSA Home">
            <MarsaLogo />
          </Link>

          {/* Nav links — desktop only */}
          <nav className="hidden md:flex items-center gap-5 text-white/80 text-sm font-light">
            <Link href="#inicio"      className="hover:text-white transition-colors uppercase tracking-wide text-xs">Inicio</Link>
            <Link href="#servicios"   className="hover:text-white transition-colors uppercase tracking-wide text-xs">Servicios</Link>
            <Link href="#nosotros"    className="hover:text-white transition-colors uppercase tracking-wide text-xs">Nosotros</Link>
            <Link href="#aliados"     className="hover:text-white transition-colors uppercase tracking-wide text-xs">Aliados</Link>
            <Link href="#testimonios" className="hover:text-white transition-colors uppercase tracking-wide text-xs">Testimonios</Link>
            <Link href="#faq"         className="hover:text-white transition-colors uppercase tracking-wide text-xs">FAQ</Link>
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="https://wa.me/527225356109"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] text-black font-semibold px-4 py-1.5 rounded-full text-sm hover:brightness-110 transition-all"
            >
              Agenda
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/15 transition-colors"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>

        </div>

        {/* ── Mobile dropdown ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col px-6 pt-2 pb-5 border-t border-white/10">
            {[
              { label: 'Inicio',       href: '#inicio'      },
              { label: 'Servicios',    href: '#servicios'   },
              { label: 'Nosotros',     href: '#nosotros'    },
              { label: 'Aliados',      href: '#aliados'     },
              { label: 'Testimonios',  href: '#testimonios' },
              { label: 'FAQ',          href: '#faq'         },
            ].map((item, i, arr) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`py-4 text-white/80 text-base font-light hover:text-white transition-colors ${
                  i < arr.length - 1 ? 'border-b border-white/8' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

      </div>
    </header>
  )
}
