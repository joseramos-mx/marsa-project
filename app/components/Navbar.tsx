'use client'

import Link from 'next/link'
import { useState } from 'react'

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MarsaLogo() {
  return <img src="/marsa%20logo.png" alt="MARSA Logo" className="h-10 md:h-12 w-auto object-contain" />
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

  return (
    <header className="absolute top-0 left-0 right-0 z-50">

      {/* ── Main bar ── */}
      <div className="flex items-center px-5 md:px-8 py-5">

        {/* Left — nav links (desktop only) */}
        <nav className="hidden md:flex items-center gap-7 text-white/90 text-sm font-light">
          <Link href="#inicio" className="hover:text-white transition-colors">Inicio</Link>
          <Link href="#servicios" className="hover:text-white transition-colors">Servicios</Link>
          <Link href="#nosotros" className="hover:text-white transition-colors">Nosotros</Link>
          <Link href="#aliados" className="hover:text-white transition-colors">Aliados</Link>
          <Link href="#testimonios" className="hover:text-white transition-colors">Testimonios</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
        </nav>

        {/* Center — logo: left on mobile, absolutely centered on desktop */}
        <Link
          href="/"
          className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-3 hover:opacity-80 transition-opacity"
          aria-label="MARSA Home"
        >
          <MarsaLogo />
        </Link>

        {/* Right — CTA button + hamburger (mobile only) */}
        <div className="flex items-center gap-3 ml-auto">
          <Link
            href="#contacto"
            className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c]  text-black font-semibold px-5 py-1.5 rounded-full text-sm hover:brightness-110 transition-all"
          >
            Agenda
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/15 transition-colors"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

      </div>

      {/* ── Mobile dropdown menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        style={{
          background: 'rgba(0, 0, 0, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <nav className="flex flex-col px-6 pt-2 pb-6 border-t border-white/10">
          {[
            { label: 'Inicio', href: '#inicio' },
            { label: 'Servicios', href: '#servicios' },
            { label: 'Nosotros', href: '#nosotros' },
            { label: 'Aliados', href: '#aliados' },
            { label: 'Testimonios', href: '#testimonios' },
            { label: 'FAQ', href: '#faq' },
          ].map((item, i, arr) => (
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`py-4 text-white/80 text-base font-light hover:text-white transition-colors ${i < arr.length - 1 ? 'border-b border-white/8' : ''
                  }`}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                className={`flex items-center justify-between py-4 text-white/80 text-base font-light hover:text-white transition-colors ${i < arr.length - 1 ? 'border-b border-white/8' : ''
                  }`}
              >
                {item.label} <ChevronDown />
              </button>
            )
          ))}
        </nav>
      </div>

    </header>
  )
}
