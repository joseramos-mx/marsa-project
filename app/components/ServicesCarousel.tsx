'use client'

import { Carousel, Card, CardData } from '@/components/ui/apple-cards-carousel'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

const SERVICE_KEYS = [
  { key: 'whitening',   src: '/services/blanquamiento.jpg' },
  { key: 'veneers',     src: '/services/carillas.png' },
  { key: 'smileDesign', src: '/services/disenodesonrisa.jpg' },
  { key: 'ortho',       src: '/services/ortodoncia-invisible.png' },
  { key: 'implants',    src: '/services/implantes.jpg' },
] as const

export default function ServicesCarousel() {
  const t  = useTranslations('services')
  const ti = useTranslations('services.items')

  const services: CardData[] = SERVICE_KEYS.map((s) => ({
    category:    ti(`${s.key}.category`),
    title:       ti(`${s.key}.title`),
    description: ti(`${s.key}.description`),
    src:         s.src,
  }))

  const cards = services.map((s, i) => <Card key={i} card={s} />)

  return (
    <section
      className="bg-[#0c0c0c] py-16 px-8"
      style={{ fontFamily: 'var(--font-albert-sans), sans-serif' }}
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <p className="text-white/40 uppercase tracking-widest text-xs mb-2">
              {t('eyebrow')}
            </p>
            <h2 className="text-white text-3xl font-semibold">
              {t('heading')}
            </h2>
          </div>
        </motion.div>

        <Carousel items={cards} />
      </div>
    </section>
  )
}
