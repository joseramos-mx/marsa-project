'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Microphone, GlobeHemisphereWest, SealCheck } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'

const GEIST  = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

export default function LeadershipSection() {
  const t = useTranslations('leadership')

  return (
    <section className="bg-[#0c0c0c] py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 max-w-2xl mx-auto"
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
            {t('headingPart1')}{' '}
            <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">
              {t('headingHighlight')}
            </span>
          </h2>
          <p className="text-white/50 text-[15px] leading-relaxed" style={GEIST}>
            {t('description')}
          </p>
        </motion.div>

        {/* ── Two-column: photo + credentials ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="relative rounded-3xl overflow-hidden bg-[#1a1a1a] min-h-[480px] md:min-h-0"
          >
            <Image
              src="/docsalem.webp"
              alt={t('doctorAlt')}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
              className="object-cover object-center"
            />
            <div
              className="absolute inset-x-0 bottom-0 p-7 pt-20"
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
              }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.22em] mb-2 bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent"
                style={GEIST}
              >
                {t('doctorRole')}
              </p>
              <h3 className="text-white text-[1.5rem] md:text-[1.75rem] font-semibold leading-tight" style={ALBERT}>
                {t('doctorName')}
              </h3>
            </div>
          </motion.div>

          {/* Credentials column */}
          <div className="flex flex-col gap-3">

            {/* Credential 1: Kulzer */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
              className="relative bg-[#141414] border border-white/5 rounded-3xl p-7 flex flex-col gap-5 hover:border-white/15 transition-colors flex-1"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#c69a2c] via-[#f8d974] to-[#c69a2c] flex items-center justify-center shrink-0">
                  <Microphone size={22} weight="duotone" className="text-black" />
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Allies/Kulzer_Logo_RGB_w_trans-1-e1747069135279.webp"
                  alt="Kulzer"
                  width={90}
                  height={28}
                  loading="lazy"
                  decoding="async"
                  className="opacity-70 brightness-0 invert"
                  style={{ height: '28px', width: 'auto', maxWidth: '90px' }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-[1.1rem] font-semibold" style={ALBERT}>
                  {t('cards.kulzer.title')}
                </h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed" style={GEIST}>
                  {t('cards.kulzer.description')}
                </p>
              </div>
            </motion.div>

            {/* Credential 2: National speaker */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
              className="relative bg-[#141414] border border-white/5 rounded-3xl p-7 flex gap-4 hover:border-white/15 transition-colors flex-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#c69a2c] via-[#f8d974] to-[#c69a2c] flex items-center justify-center shrink-0">
                <SealCheck size={22} weight="duotone" className="text-black" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-[1.1rem] font-semibold" style={ALBERT}>
                  {t('cards.national.title')}
                </h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed" style={GEIST}>
                  {t('cards.national.description')}
                </p>
              </div>
            </motion.div>

            {/* Credential 3: International speaker */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
              className="relative bg-[#141414] border border-white/5 rounded-3xl p-7 flex gap-4 hover:border-white/15 transition-colors flex-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#c69a2c] via-[#f8d974] to-[#c69a2c] flex items-center justify-center shrink-0">
                <GlobeHemisphereWest size={22} weight="duotone" className="text-black" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-[1.1rem] font-semibold" style={ALBERT}>
                  {t('cards.international.title')}
                </h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed" style={GEIST}>
                  {t('cards.international.description')}
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}
