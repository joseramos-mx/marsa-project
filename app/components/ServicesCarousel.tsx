import { Carousel, Card, CardData } from '@/components/ui/apple-cards-carousel'

const services: CardData[] = [
  {
    category: 'Odontología',
    title: 'Blanqueamiento dental',
    description:
      'En Marsa Project combinamos atención médica especializada, tecnología avanzada y un ambiente de lujo para resultados visibles desde la primera sesión.',
    src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop',
  },
  {
    category: 'Odontología',
    title: 'Carillas de porcelana',
    description:
      'Transformamos tu sonrisa con carillas ultrafinas de porcelana que imitan a la perfección el aspecto natural de tus dientes.',
    src: 'https://images.unsplash.com/photo-1588776814546-ec7e81f76b27?q=80&w=1974&auto=format&fit=crop',
  },
  {
    category: 'Diseño de sonrisa',
    title: 'Diseño de sonrisa',
    description:
      'Planificamos cada detalle de tu nueva sonrisa con simulaciones digitales antes del tratamiento para que apruebes el resultado.',
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop',
  },
  {
    category: 'Medicina estética',
    title: 'Medicina estética',
    description:
      'Tratamientos no invasivos de última generación para realzar tu belleza natural con resultados seguros y personalizados.',
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop',
  },
  {
    category: 'Ortodoncia',
    title: 'Ortodoncia invisible',
    description:
      'Alineadores transparentes a medida que corrigen la posición de tus dientes de forma discreta y cómoda.',
    src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop',
  },
  {
    category: 'Implantología',
    title: 'Implantes dentales',
    description:
      'Recupera la función y estética de tu sonrisa con implantes de titanio de alta resistencia y acabado natural.',
    src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop',
  },
]

export default function ServicesCarousel() {
  const cards = services.map((s, i) => <Card key={i} card={s} />)

  return (
    <section
      className="bg-black py-16 px-8"
      style={{ fontFamily: 'var(--font-albert-sans), sans-serif' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-white/40 uppercase tracking-widest text-xs mb-2">
              Servicios
            </p>
            <h2 className="text-white text-3xl font-semibold">
              Nuestros tratamientos
            </h2>
          </div>
        </div>

        <Carousel items={cards} />
      </div>
    </section>
  )
}
