import type { LandingContent } from '../../../lib/landings/types'

/**
 * Datos estructurados de una landing de tratamiento:
 *   - MedicalWebPage describe la pagina
 *   - MedicalProcedure describe el tratamiento
 *   - Service lo enlaza con la ficha local de Marsa Project
 *   - FAQPage refleja EXACTAMENTE la FAQ visible en la pagina
 *
 * El FAQPage se construye desde el mismo array que renderiza <LandingFaq />,
 * de modo que no puede desincronizarse del contenido visible: esa es la
 * condicion que Google exige para marcar una FAQ.
 */
export default function LandingSchema({
  content,
  siteUrl,
  pageUrl,
}: {
  content: LandingContent
  siteUrl: string
  pageUrl: string
}) {
  const businessId = `${siteUrl}/#local-business`

  const medicalPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: content.title,
    description: content.metaDescription,
    inLanguage: 'es-MX',
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${pageUrl}#procedure` },
    mainEntity: { '@id': `${pageUrl}#faq` },
    primaryImageOfPage: `${siteUrl}${content.ogImage}`,
    audience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
      geographicArea: {
        '@type': 'AdministrativeArea',
        name: 'Toluca de Lerdo, Estado de México',
      },
    },
  }

  const procedure = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': `${pageUrl}#procedure`,
    name: content.procedureName,
    description: content.procedureDescription,
    procedureType: 'https://schema.org/NoninvasiveProcedure',
    bodyLocation: 'Boca',
    provider: { '@id': businessId },
  }

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: `${content.procedureName} en Toluca`,
    description: content.metaDescription,
    serviceType: content.procedureName,
    provider: { '@id': businessId },
    areaServed: {
      '@type': 'City',
      name: 'Toluca de Lerdo',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Estado de México' },
    },
    url: pageUrl,
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: content.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const schemas = [medicalPage, procedure, service, faqPage]

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
