'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

const NUM = { fontFamily: 'var(--font-albert-sans)', fontWeight: 300 }
const LABEL = { fontFamily: 'var(--font-geist-sans)', letterSpacing: '0.08em' }

export default function StatsSection() {
  const t = useTranslations('stats')

  return (
    <section className="bg-[#0c0c0c] py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-5"
             style={LABEL}>
            • {t('eyebrow')}
          </p>
          <h2
            className="text-[2.6rem] md:text-5xl text-white leading-[1.15] tracking-tight"
            style={{ fontFamily: 'var(--font-albert-sans)' }}
          >
            {t('headingPart1')}<br />
            {t('headingPart2')}{' '}
            <img src="/heart-icon.svg" alt="" width={24} height={24} className="inline h-[0.9em] align-middle mx-0.5"/>
            {' '}{t('headingPart3')}<br />
            <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">{t('headingHighlight')}</span>
          </h2>
        </motion.div>

        {/* ── Bento grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
          style={{ gridTemplateRows: 'auto' }}
        >

          {/* ── Card 1 · left tall · doctor ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:row-span-2 rounded-3xl overflow-hidden relative bg-[#1a1a1a] min-h-105"
          >
            <Image
              src="/docsalem.webp"
              alt={t('doctorAlt')}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-2">
              <span className="block text-[3.25rem] leading-none text-black mb-2" style={NUM}>
                {t('yearsValue')}
              </span>
              <p className="text-[#555] text-sm leading-snug" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                {t('yearsDesc')}
              </p>
            </div>
          </motion.div>

          {/* ── Card 2 · center · patients ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="md:row-span-2 rounded-3xl bg-[#1a1a1a] px-7 pt-7 pb-8 flex flex-col justify-between min-h-80"
          >
            <div>
              <p className="text-white/55 text-[11px] uppercase mb-4" style={LABEL}>
                {t('patientsLabel')}
              </p>
              <span className="block text-[4.5rem] leading-none text-white" style={NUM}>
                {t('patientsValue')}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex -space-x-2">
                {[
                  '/patients/IMG_7769.webp',
                  '/patients/IMG_7774.webp',
                  '/patients/IMG_7771.webp',
                  '/patients/IMG_7756.webp',
                ].map((src, n) => (
                  <div
                    key={n}
                    className="w-9 h-9 rounded-full border-[3px] border-[#1a1a1a] overflow-hidden"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className="w-full h-full object-cover object-top" />
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-[13px] leading-relaxed" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                &ldquo;{t('patientsQuote')}&rdquo;
              </p>
            </div>
          </motion.div>

          {/* ── Card 3a · top-right · gold · implants ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="rounded-3xl px-7 pt-6 pb-7 flex flex-col justify-between min-h-60"
            style={{ background: 'linear-gradient(135deg, #c69a2c 0%, #f8d974 50%, #c69a2c 100%)' }}
          >
            <div>
              <p className="text-white/55 text-[11px] uppercase mb-3" style={LABEL}>
                {t('implantsLabel')}
              </p>
              <span className="block text-[4rem] leading-none text-white" style={NUM}>
                {t('implantsValue')}
              </span>
            </div>
            <p className="text-white/60 text-[13px] leading-snug" style={{ fontFamily: 'var(--font-geist-sans)' }}>
              {t('implantsDesc')}
            </p>
          </motion.div>

          {/* ── Card 3b · bottom-right · dark · rating ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="rounded-3xl bg-[#480517] px-7 py-6 flex items-center justify-between min-h-30"
          >
            <p className="text-white/50 text-[13px]" style={{ fontFamily: 'var(--font-geist-sans)' }}>
              {t('ratingLabel')}
            </p>
            <span className="text-[2.75rem] leading-none text-white" style={NUM}>
              {t('ratingValue')}
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
