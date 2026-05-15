'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'

const GEIST  = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
      className="border-b border-white/8 last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-white text-[14px] leading-snug flex-1" style={ALBERT}>
          {q}
        </span>
        <span
          className="shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white/50 text-sm transition-all duration-300 group-hover:border-white/40 group-hover:text-white/80"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease, color 0.2s, border-color 0.2s' }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-white/55 text-[13px] leading-relaxed pb-5 pr-10" style={GEIST}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const t = useTranslations('faq')
  const items = t.raw('items') as { q: string; a: string }[]

  return (
    <section className="bg-[#0c0c0c] py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-12 md:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col justify-between gap-10"
          >
            <div>
              <p
                className="text-white/40 text-[10px] uppercase mb-4"
                style={{ ...GEIST, letterSpacing: '0.22em' }}
              >
                ▪ {t('eyebrow')}
              </p>
              <h2
                className="text-[2.6rem] md:text-5xl text-white leading-[1.1] tracking-tight mb-5"
                style={ALBERT}
              >
                {t('headingPart1')}<br />
                <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">{t('headingHighlight')}</span>
              </h2>
              <p
                className="text-white/50 text-[14px] leading-relaxed max-w-xs"
                style={GEIST}
              >
                {t('description')}
              </p>
            </div>

            <Link
              href="https://wa.me/527225356109"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center self-start bg-white text-black pl-6 pr-1.5 py-1.5 rounded-full hover:bg-white/90 transition-colors"
            >
              <span
                className="text-[11px] font-medium uppercase tracking-[0.12em] pr-3"
                style={GEIST}
              >
                {t('ctaLabel')}
              </span>
              <span className="w-8 h-8 rounded-full bg-linear-to-br from-[#c69a2c] via-[#f8d974] to-[#c69a2c] flex items-center justify-center shrink-0">
                <ArrowUpRight size={15} weight="bold" className="text-black" />
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="bg-[#141414] border border-white/5 rounded-3xl px-7 py-4"
          >
            {items.map((item, i) => (
              <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
