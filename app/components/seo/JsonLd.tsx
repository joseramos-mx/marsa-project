/* ─────────────────────────────────────────────────────────────
   JSON-LD Structured Data — Server Component
   Schemas included:
     • Organization
     • Dentist (LocalBusiness)
     • MedicalOrganization
     • WebSite (with SearchAction)
     • FAQPage
   ───────────────────────────────────────────────────────────── */

const faqItems = [
  {
    q: "¿Qué es Marsa Project y qué servicios ofrece?",
    a: "Marsa Project es una clínica especializada en odontología estética y medicina estética. Ofrecemos blanqueamiento dental, carillas de porcelana, diseño de sonrisa, ortodoncia invisible, implantes dentales y tratamientos de medicina estética no invasiva.",
  },
  {
    q: "¿Cuánto tiempo dura un tratamiento de blanqueamiento dental?",
    a: "Una sesión dura entre 60 y 90 minutos. Los resultados son visibles desde la primera sesión y pueden mantenerse hasta 2 años con el cuidado adecuado.",
  },
  {
    q: "¿Los tratamientos estéticos son seguros?",
    a: "Sí. Todos nuestros procedimientos son realizados por especialistas certificados con tecnología de última generación y bajo protocolos de seguridad rigurosos.",
  },
  {
    q: "¿Ofrecen planes de pago o financiamiento?",
    a: "Sí, contamos con planes de pago flexibles y opciones de financiamiento adaptadas a tu presupuesto para que puedas acceder al tratamiento que necesitas.",
  },
  {
    q: "¿Cómo puedo agendar mi primera consulta?",
    a: "Puedes agendar a través de nuestro sitio web, WhatsApp o llamándonos directamente. La primera consulta incluye una evaluación completa y personalizada de tu caso.",
  },
  {
    q: "¿Qué incluye el diseño de sonrisa digital?",
    a: "Incluye una evaluación estética completa, simulación virtual de tu nueva sonrisa y un plan de tratamiento detallado antes de comenzar cualquier procedimiento.",
  },
  {
    q: "¿Cuánto tiempo duran los resultados de los tratamientos?",
    a: "Depende del tratamiento: el blanqueamiento dura hasta 2 años, las carillas de porcelana hasta 15 años y los implantes dentales son una solución permanente con el cuidado adecuado.",
  },
];

export default function JsonLd({ siteUrl }: { siteUrl: string }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "MedicalOrganization"],
    "@id": `${siteUrl}/#organization`,
    name: "Marsa Project",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/marsa%20logo.png`,
    },
    sameAs: [
      // "https://www.facebook.com/marsaproject",
      // "https://www.instagram.com/marsaproject",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Spanish",
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness"],
    "@id": `${siteUrl}/#local-business`,
    name: "Marsa Project",
    description:
      "Clínica especializada en odontología estética y medicina estética. Blanqueamiento dental, carillas de porcelana, diseño de sonrisa, ortodoncia invisible e implantes dentales.",
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
    priceRange: "$$",
    currenciesAccepted: "MXN",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    // ── Update these with real data ──
    // telephone: "+52-55-0000-0000",
    // address: {
    //   "@type": "PostalAddress",
    //   streetAddress: "Calle Ejemplo 123",
    //   addressLocality: "Ciudad de México",
    //   addressRegion: "CDMX",
    //   postalCode: "06600",
    //   addressCountry: "MX",
    // },
    // geo: {
    //   "@type": "GeoCoordinates",
    //   latitude: 19.4326,
    //   longitude: -99.1332,
    // },
    // openingHoursSpecification: [
    //   { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
    //   { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
    // ],
    medicalSpecialty: [
      "Dentistry",
      "Cosmetic Dentistry",
      "Aesthetic Medicine",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tratamientos Marsa Project",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Blanqueamiento dental" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Carillas de porcelana" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Diseño de sonrisa digital" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Ortodoncia invisible" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Implantes dentales" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Medicina estética" } },
      ],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Marsa Project",
    url: siteUrl,
    inLanguage: "es-MX",
    publisher: { "@id": `${siteUrl}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const schemas = [organization, localBusiness, website, faqPage];

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
  );
}
