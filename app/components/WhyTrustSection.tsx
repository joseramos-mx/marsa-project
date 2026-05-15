'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, LayoutGroup } from 'motion/react'
import { Tooth, HeartStraight, Lightning, ArrowUpRight } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'

const CARD_DEFS = [
  { key: 'specialists', Icon: Tooth,         image: '/check.webp' },
  { key: 'facilities',  Icon: HeartStraight, image: '/heart.webp' },
  { key: 'equipment',   Icon: Lightning,     image: '/caliper.webp' },
] as const

const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

export default function WhyTrustSection() {
  const t  = useTranslations('whyTrust')
  const tc = useTranslations('whyTrust.cards')
  const CARDS = CARD_DEFS.map((c) => ({
    Icon:        c.Icon,
    image:       c.image,
    title:       tc(`${c.key}.title`),
    description: tc(`${c.key}.description`),
  }))
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="bg-[#0c0c0c] py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">

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
            {t('headingPart2')}
          </h2>

          <p
            className="text-white/50 text-[15px] leading-relaxed max-w-md mx-auto mb-9"
            style={GEIST}
          >
            {t('description')}
          </p>

          <Link
            href="https://wa.me/527225356109"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0 bg-white text-black pl-6 pr-1.5 py-1.5 rounded-full hover:bg-white/90 transition-colors"
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

        <div className="bg-[#141414] rounded-3xl p-3">
          <LayoutGroup>
            <div className="hidden md:flex gap-3">
              {CARDS.map((card, i) => (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    opacity: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
                    y: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
                    layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                  }}
                  className="relative bg-[#1f1f1f] rounded-2xl overflow-hidden cursor-default"
                  style={{
                    minHeight: '280px',
                    flex: hovered === i ? 1.6 : hovered !== null ? 0.7 : 1,
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="absolute top-5 left-5 w-10 h-10 rounded-xl bg-linear-to-br from-[#c69a2c] via-[#f8d974] to-[#c69a2c] flex items-center justify-center z-10">
                    <card.Icon size={20} weight="duotone" className="text-black" />
                  </div>

                  <div className="absolute bottom-5 left-5 right-[48%] z-10">
                    <h3 className="text-white text-[1.05rem] font-semibold leading-snug mb-1.5" style={ALBERT}>
                      {card.title}
                    </h3>
                    <p className="text-white/50 text-[12px] leading-relaxed" style={GEIST}>
                      {card.description}
                    </p>
                  </div>

                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        key="img"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute right-0 top-0 bottom-0 w-[46%] rounded-r-2xl flex items-center justify-center"
                        style={{ backgroundColor: '#f2f2f2' }}
                      >
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={130}
                          height={130}
                          className="object-contain drop-shadow-lg"
                          style={{ height: 'auto' }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col md:hidden gap-3">
              {CARDS.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                  className="relative bg-[#1f1f1f] rounded-2xl overflow-hidden"
                  style={{ minHeight: '200px' }}
                >
                  <div className="absolute top-5 left-5 w-10 h-10 rounded-xl bg-linear-to-br from-[#c69a2c] via-[#f8d974] to-[#c69a2c] flex items-center justify-center z-10">
                    <card.Icon size={20} weight="duotone" className="text-black" />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-10">
                    <h3 className="text-white text-[1.05rem] font-semibold leading-snug mb-1.5" style={ALBERT}>
                      {card.title}
                    </h3>
                    <p className="text-white/50 text-[12px] leading-relaxed" style={GEIST}>
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </LayoutGroup>
        </div>

      </div>
    </section>
  )
}
