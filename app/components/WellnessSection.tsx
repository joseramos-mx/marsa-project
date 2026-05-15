'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'

const NUM   = { fontFamily: 'var(--font-albert-sans)', fontWeight: 900 }
const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

export default function WellnessSection() {
  const t = useTranslations('wellness')
  const tags = t.raw('tags') as string[]

  return (
    <section className="bg-[#0c0c0c] py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10"
        >
          <div className="max-w-xl">
            <p
              className="text-white/40 text-[10px] uppercase mb-4"
              style={{ ...GEIST, letterSpacing: '0.22em' }}
            >
              ▪ {t('eyebrow')}
            </p>
            <h2
              className="text-[2.6rem] md:text-5xl text-white tracking-tight leading-[1.12]"
              style={ALBERT}
            >
              {t('headingPart1')}<br />{t('headingPart2')}<br />
              <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">
                {t('highlightPrefix')}{' '}
                <img src="/smileicon.svg" alt="" width={24} height={24} className="inline h-[0.85em] align-middle mx-0.5" />
                {' '}{t('highlightSuffix')}
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-5 max-w-xs">
            <p className="text-white/50 text-[14px] leading-relaxed" style={GEIST}>
              {t('description')}
            </p>
            <Link
              href="https://wa.me/527225356109"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center self-start bg-white text-black pl-6 pr-1.5 py-1.5 rounded-full hover:bg-white/90 transition-colors"
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] pr-3" style={GEIST}>
                {t('ctaLabel')}
              </span>
              <span className="w-8 h-8 rounded-full bg-linear-to-br from-[#c69a2c] via-[#f8d974] to-[#c69a2c] flex items-center justify-center shrink-0">
                <ArrowUpRight size={15} weight="bold" className="text-black" />
              </span>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:row-span-2 rounded-3xl overflow-hidden relative bg-[#1a1a1a] min-h-100"
          >
            <Image
              src="/doctores.jpg"
              alt={t('doctorAlt')}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="rounded-3xl overflow-hidden relative min-h-50"
            style={{ backgroundColor: '#1a1a1a' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/asset.svg"
              alt=""
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="rounded-3xl p-7 flex flex-col justify-between min-h-50"
            style={{ backgroundColor: '#480517' }}
          >
            <p className="text-white/55 text-[11px] uppercase tracking-widest" style={GEIST}>
              {t('ratingLabel')}
            </p>
            <div>
              <span className="block text-[4rem] leading-none text-white" style={NUM}>{t('ratingValue')}</span>
              <p className="text-white/60 text-[13px] mt-2 leading-snug" style={GEIST}>
                {t('ratingDesc')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="md:col-span-2 rounded-3xl p-7 flex flex-col justify-between min-h-40 relative overflow-hidden"
            style={{ backgroundColor: '#1a1a1a' }}
          >
            <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)' }} />

            <div className="relative z-10 flex flex-col gap-5">
              <p className="text-white/40 text-[11px] uppercase tracking-widest" style={GEIST}>
                {t('treatmentsLabel')}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-[12px] text-white/65 border border-white/12 bg-white/5"
                    style={GEIST}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
