'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from './faq-data'

const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-[#0c0c0c] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-5 md:px-8 flex flex-col gap-10">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#f8d974] mb-4" style={GEIST}>
            ▪ FAQ
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
            Preguntas{' '}
            <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">
              frecuentes
            </span>
          </h2>
        </div>

        <ul className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 text-left hover:bg-white/[0.04] transition-colors"
                >
                  <span className="text-white text-base md:text-lg leading-snug" style={ALBERT}>
                    {item.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-white/60 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-white/70 text-[14.5px] leading-relaxed" style={GEIST}>
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
