'use client'

import { Carousel, Card, CardData } from '@/components/ui/apple-cards-carousel'
import { motion } from 'motion/react'

const services: CardData[] = [
  {
    category: 'Odontología',
    title: 'Blanqueamiento dental',
    description:
      'En Marsa Project combinamos atención médica especializada, tecnología avanzada y un ambiente de lujo para resultados visibles desde la primera sesión.',
    src: '/services/blanquamiento.jpg',
  },
  {
    category: 'Odontología',
    title: 'Carillas de porcelana',
    description:
      'Transformamos tu sonrisa con carillas ultrafinas de porcelana que imitan a la perfección el aspecto natural de tus dientes.',
    src: '/services/carillas.png',
  },
  {
    category: 'Diseño de sonrisa',
    title: 'Diseño de sonrisa',
    description:
      'Planificamos cada detalle de tu nueva sonrisa con simulaciones digitales antes del tratamiento para que apruebes el resultado.',
    src: '/services/disenodesonrisa.jpg',
  },
  {
    category: 'Ortodoncia',
    title: 'Ortodoncia invisible',
    description:
      'Alineadores transparentes a medida que corrigen la posición de tus dientes de forma discreta y cómoda.',
    src: '/services/ortodoncia-invisible.png',
  },
  {
    category: 'Implantología',
    title: 'Implantes dentales',
    description:
      'Recupera la función y estética de tu sonrisa con implantes de titanio de alta resistencia y acabado natural.',
    src: '/services/implantes.jpg',
  },
]

export default function ServicesCarousel() {
  const cards = services.map((s, i) => <Card key={i} card={s} />)

  return (
    <section
      className="bg-[#0c0c0c] py-16 px-8"
      style={{ fontFamily: 'var(--font-albert-sans), sans-serif' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <p className="text-white/40 uppercase tracking-widest text-xs mb-2">
              Servicios
            </p>
            <h2 className="text-white text-3xl font-semibold">
              Nuestros tratamientos
            </h2>
          </div>
        </motion.div>

        <Carousel items={cards} />
      </div>
    </section>
  )
}
