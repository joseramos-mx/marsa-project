'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import WhatsAppLink from './WhatsAppLink'

const GEIST  = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

const AVATARS = [
  '/patients/IMG_7756.webp',
  '/patients/IMG_7759.webp',
  '/patients/IMG_7774.webp',
  '/patients/IMG_7771.webp',
]

export default function CTASection() {
  const t = useTranslations('cta')

  return (
    <section className="bg-[#0c0c0c] px-3 pb-3">
      <div className="max-w-7xl mx-auto">
      <div
        className="rounded-[28px] overflow-hidden relative"
        style={{ background: 'linear-gradient(135deg, #2a0a12 0%, #181818 60%)' }}
      >
        <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden md:block pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/doctorascta.webp"
            alt={t('doctorAlt')}
            width={800}
            height={1000}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative z-10 max-w-lg flex flex-col gap-7 px-10 py-14 md:px-16 md:py-20"
        >

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {AVATARS.map((src, i) => (
                <div
                  key={i}
                  className="relative w-8 h-8 rounded-full border-2 border-[#1a0008] overflow-hidden"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="32px"
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
            <p className="text-white/55 text-[13px]" style={GEIST}>
              {t('trustPrefix')}{' '}
              <span className="text-white/80 font-medium">{t('trustPatients')}</span>
              {' '}{t('trustSuffix')}
            </p>
          </div>

          <h2
            className="text-white text-[2.8rem] md:text-[3.8rem] leading-[1.05] tracking-tight"
            style={ALBERT}
          >
            {t('headingPart1')}<br />
            <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">{t('headingHighlight')}</span>
          </h2>

          <p
            className="text-white/45 text-[14px] leading-relaxed max-w-sm"
            style={GEIST}
          >
            {t('description')}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <WhatsAppLink src="cta"
              href="https://wa.me/527225356109"
              className="inline-flex items-center bg-white text-black pl-6 pr-1.5 py-1.5 rounded-full hover:bg-white/90 transition-colors"
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
            </WhatsAppLink>

            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-white/60 text-[12px] hover:text-white/90 transition-colors px-3"
              style={GEIST}
            >
              O escríbenos por formulario →
            </Link>
          </div>

        </motion.div>
      </div>
      </div>
    </section>
  )
}
