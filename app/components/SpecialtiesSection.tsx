'use client'

import { motion } from 'motion/react'
import { Tooth, Sparkle, LineSegments, Baby, Drop, FirstAid } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'

const GEIST  = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

const SPECIALTY_DEFS = [
  { key: 'implants',  Icon: Tooth },
  { key: 'aesthetic', Icon: Sparkle },
  { key: 'ortho',     Icon: LineSegments },
  { key: 'pediatric', Icon: Baby },
  { key: 'endo',      Icon: Drop },
  { key: 'surgery',   Icon: FirstAid },
] as const

export default function SpecialtiesSection() {
  const t  = useTranslations('specialties')
  const ti = useTranslations('specialties.items')

  return (
    <section className="bg-[#0c0c0c] py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <p
            className="text-white/40 text-[10px] uppercase mb-5"
            style={{ ...GEIST, letterSpacing: '0.22em' }}
          >
            ▪ {t('eyebrow')}
          </p>
          <h2
            className="text-[2.6rem] md:text-5xl text-white leading-[1.12] tracking-tight mb-5"
            style={ALBERT}
          >
            {t('headingPart1')}<br />
            <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">{t('headingHighlight')}</span>
          </h2>
          <p
            className="text-white/50 text-[15px] leading-relaxed max-w-md mx-auto"
            style={GEIST}
          >
            {t('description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SPECIALTY_DEFS.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="group relative bg-[#141414] border border-white/5 rounded-3xl p-7 flex flex-col gap-5 transition-colors hover:border-white/15"
            >
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#c69a2c] via-[#f8d974] to-[#c69a2c] flex items-center justify-center shrink-0">
                <s.Icon size={22} weight="duotone" className="text-black" />
              </div>

              <div className="flex flex-col gap-2">
                <h3
                  className="text-white text-[1.15rem] font-semibold leading-snug"
                  style={ALBERT}
                >
                  {ti(`${s.key}.title`)}
                </h3>
                <p
                  className="text-white/50 text-[13px] leading-relaxed"
                  style={GEIST}
                >
                  {ti(`${s.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
