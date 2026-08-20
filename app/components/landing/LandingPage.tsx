import type { Metadata } from 'next'
import LandingHeader from './LandingHeader'
import LandingFaq from './LandingFaq'
import LandingSchema from './LandingSchema'
import {
  LandingHero,
  LandingProblem,
  LandingWhyMarsa,
  LandingProcess,
  LandingTech,
  LandingSpecialist,
  LandingCases,
  LandingTestimonials,
  LandingFinalCta,
  LandingMap,
  LandingFooter,
} from './sections'
import type { LandingContent } from '../../../lib/landings/types'

export const SITE_URL = 'https://marsaproject.com'

/**
 * Metadatos de una landing, derivados de su contenido.
 *
 * Se centraliza aqui para que las cinco landings compartan exactamente la
 * misma configuracion de canonical, hreflang, OpenGraph y robots, y no se
 * puedan desalinear al añadir una nueva.
 */
export function landingMetadata(c: LandingContent): Metadata {
  const path = `/${c.slug}`
  const pageUrl = `${SITE_URL}${path}`

  return {
    // `absolute` evita que la plantilla del layout duplique la marca.
    title: { absolute: c.title },
    description: c.metaDescription,
    alternates: {
      canonical: path,
      // Landing solo en español: no se declara alternate en ingles porque
      // esa pagina no existe.
      languages: { 'es-MX': path, 'x-default': path },
    },
    openGraph: {
      type: 'website',
      locale: 'es_MX',
      url: pageUrl,
      siteName: 'Marsa Project',
      title: c.title,
      description: c.ogDescription,
      images: [{ url: c.ogImage, width: 1200, height: 630, alt: c.ogImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.ogDescription,
      images: [c.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'health',
  }
}

/**
 * Estructura de landing definida en el brief:
 * hero → prueba social → problema → solucion → beneficios → por que Marsa →
 * tecnologia → proceso → especialista → casos → testimonios → FAQ →
 * ubicacion → CTA final → pie minimo.
 */
export default function LandingPage({ content }: { content: LandingContent }) {
  const pageUrl = `${SITE_URL}/${content.slug}`

  return (
    <>
      <LandingSchema content={content} siteUrl={SITE_URL} pageUrl={pageUrl} />

      <main className="bg-[#0c0c0c] text-white">
        <LandingHeader whatsappText={content.whatsappText} />
        <LandingHero c={content} />
        <LandingProblem c={content} />
        <LandingWhyMarsa />
        <LandingProcess c={content} />
        <LandingTech c={content} />
        <LandingSpecialist />
        <LandingCases c={content} />
        <LandingTestimonials c={content} />
        <LandingFaq items={content.faq} />
        <LandingFinalCta c={content} />
        <LandingMap />
        <LandingFooter c={content} />
      </main>
    </>
  )
}
