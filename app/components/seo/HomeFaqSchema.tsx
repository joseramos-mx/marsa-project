import { getMessages } from 'next-intl/server'

type FaqMessages = { items: { q: string; a: string }[] }

/**
 * FAQPage de la home.
 *
 * Vive aparte de <JsonLd /> a proposito: <JsonLd /> se renderiza desde el
 * layout, o sea en TODAS las paginas, y emitir ahi el FAQ de la home ponia
 * en las landings un FAQPage con preguntas que no estan visibles en ellas.
 * Google exige que el contenido marcado sea visible en la propia pagina, y
 * ademas dos FAQPage por URL compiten entre si.
 *
 * Cada landing emite su propio FAQPage desde <LandingSchema />.
 */
export default async function HomeFaqSchema({ locale }: { locale: string }) {
  const messages = (await getMessages({ locale })) as unknown as { faq: FaqMessages }
  const items = messages.faq.items

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
    />
  )
}
