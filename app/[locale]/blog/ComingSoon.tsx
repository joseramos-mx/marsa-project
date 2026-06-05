'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { ArrowUpRight } from '@phosphor-icons/react'

const GEIST  = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

export default function ComingSoon() {
  const t = useTranslations('blog')

  return (
    <section className="min-h-screen bg-[#0c0c0c] flex items-center justify-center px-6 pt-24 pb-20 relative overflow-hidden">
      {/* Subtle gold glow background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-15"
        style={{
          background:
            'radial-gradient(circle, rgba(248,217,116,0.25) 0%, rgba(248,217,116,0) 60%)',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center max-w-2xl flex flex-col items-center"
      >
        <span
          className="inline-block px-4 py-1.5 rounded-full bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] text-black text-[10px] uppercase tracking-[0.2em] font-semibold mb-8"
          style={GEIST}
        >
          {t('badge')}
        </span>

        <h1
          className="text-[3rem] md:text-[4.5rem] text-white leading-[1.05] tracking-tight mb-6"
          style={ALBERT}
        >
          {t('comingSoonHeading1')}
          <br />
          <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">
            {t('comingSoonHeading2')}
          </span>
        </h1>

        <p
          className="text-white/55 text-[15px] md:text-[16px] leading-relaxed max-w-md mb-10"
          style={GEIST}
        >
          {t('comingSoonDescription')}
        </p>

        <Link
          href="/"
          className="inline-flex items-center bg-white text-black pl-6 pr-1.5 py-1.5 rounded-full hover:bg-white/90 transition-colors"
        >
          <span
            className="text-[11px] font-medium uppercase tracking-[0.12em] pr-3"
            style={GEIST}
          >
            {t('backToHome')}
          </span>
          <span className="w-8 h-8 rounded-full bg-linear-to-br from-[#c69a2c] via-[#f8d974] to-[#c69a2c] flex items-center justify-center shrink-0">
            <ArrowUpRight size={15} weight="bold" className="text-black" />
          </span>
        </Link>
      </motion.div>
    </section>
  )
}
