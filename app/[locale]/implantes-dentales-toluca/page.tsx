import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import WhyMarsaSection from './components/WhyMarsaSection'
import ProcessSection from './components/ProcessSection'
import TechSection from './components/TechSection'
import SpecialistSection from './components/SpecialistSection'
import CasesSection from './components/CasesSection'
import TestimonialsSection from './components/TestimonialsSection'
import FaqSection from './components/FaqSection'
import FinalCta from './components/FinalCta'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import LandingSchema from './components/LandingSchema'

const SITE_URL = 'https://marsaproject.com'
const PATH = '/implantes-dentales-toluca'
const PAGE_URL = `${SITE_URL}${PATH}`

export function generateStaticParams() {
  // Landing solo en español — evita generar la variante /en/…
  return [{ locale: 'es' }]
}

export const dynamicParams = false

export const metadata: Metadata = {
  title: { absolute: 'Implantes Dentales en Toluca — Marsa Project' },
  description:
    'Tratamiento de implantes dentales en Toluca con especialistas, tecnología digital y materiales certificados. Agenda tu valoración en Marsa Project.',
  alternates: {
    canonical: PATH,
    languages: {
      'es-MX': PATH,
      'x-default': PATH,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: PAGE_URL,
    siteName: 'Marsa Project',
    title: 'Implantes Dentales en Toluca — Marsa Project',
    description:
      'Recupera la función y estética de tu sonrisa con un tratamiento personalizado, respaldado por especialistas y tecnología digital. Agenda tu valoración.',
    images: [
      {
        url: '/services/implantes.webp',
        width: 1200,
        height: 630,
        alt: 'Implantes dentales en Marsa Project, Toluca',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Implantes Dentales en Toluca — Marsa Project',
    description:
      'Especialistas en implantología dental en Toluca. Tecnología digital y materiales certificados. Agenda tu valoración.',
    images: ['/services/implantes.webp'],
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

export default async function ImplantesLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale !== 'es') notFound()
  setRequestLocale(locale)

  return (
    <>
      <LandingSchema siteUrl={SITE_URL} pageUrl={PAGE_URL} />

      <main className="bg-[#0c0c0c] text-white">
        <Header />
        <Hero />
        <ProblemSection />
        <WhyMarsaSection />
        <ProcessSection />
        <TechSection />
        <SpecialistSection />
        <CasesSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCta />
        <MapSection />
        <Footer />
      </main>
    </>
  )
}
