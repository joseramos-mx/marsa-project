import { FAQ_ITEMS } from './faq-data'

type Props = {
  siteUrl: string
  pageUrl: string
}

/**
 * Structured data specific to the "Implantes Dentales en Toluca" landing:
 * - MedicalWebPage describing the page itself
 * - MedicalProcedure for the implant treatment
 * - Service tied to the local Marsa Project dentist
 * - FAQPage mirroring the on-page FAQ
 */
export default function LandingSchema({ siteUrl, pageUrl }: Props) {
  const businessId = `${siteUrl}/#local-business`

  const medicalPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'Implantes Dentales en Toluca — Marsa Project',
    description:
      'Tratamiento de implantes dentales en Toluca con especialistas, tecnología digital y materiales certificados. Agenda tu valoración en Marsa Project.',
    inLanguage: 'es-MX',
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${pageUrl}#procedure` },
    mainEntity: { '@id': `${pageUrl}#faq` },
    primaryImageOfPage: `${siteUrl}/services/implantes.webp`,
    audience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
      geographicArea: {
        '@type': 'AdministrativeArea',
        name: 'Toluca de Lerdo, Estado de México',
      },
    },
    lastReviewed: new Date().toISOString().slice(0, 10),
  }

  const medicalProcedure = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': `${pageUrl}#procedure`,
    name: 'Implantes dentales',
    alternateName: 'Implantología dental',
    procedureType: 'https://schema.org/SurgicalProcedure',
    bodyLocation: 'Cavidad oral',
    howPerformed:
      'Colocación quirúrgica de un implante dental en el hueso maxilar seguida por una fase de restauración protésica planificada digitalmente. El plan definitivo se determina en la valoración clínica.',
    preparation:
      'Valoración clínica previa, estudios radiográficos y planificación digital para definir la indicación, alternativas y tiempos.',
    followup:
      'Seguimiento clínico posterior con revisiones periódicas para verificar la evolución.',
    performer: { '@id': businessId },
  }

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: 'Implantes dentales en Toluca',
    serviceType: 'Implantología dental',
    provider: { '@id': businessId },
    areaServed: {
      '@type': 'City',
      name: 'Toluca de Lerdo',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Estado de México',
      },
    },
    url: pageUrl,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: pageUrl,
      servicePhone: '+52-722-535-6109',
    },
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  const scripts = [medicalPage, medicalProcedure, service, faqPage]

  return (
    <>
      {scripts.map((json) => (
        <script
          key={json['@id']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
        />
      ))}
    </>
  )
}
