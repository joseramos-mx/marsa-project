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
      "https://www.instagram.com/marsa.project",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+52-722-535-6109",
      contactType: "customer service",
      areaServed: "MX",
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
    telephone: "+52-722-535-6109",
    address: {
      "@type": "PostalAddress",
      streetAddress: "P.º Cristóbal Colón 128-MZ 027, Residencial Colón y Col Ciprés",
      addressLocality: "Toluca de Lerdo",
      addressRegion: "Estado de México",
      postalCode: "50120",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      // Aproximadas a Paseo Cristóbal Colón, Toluca — refinar con lat/lng exactos de Google Maps
      latitude: 19.2865,
      longitude: -99.6557,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/marsa.project",
    ],
    medicalSpecialty: [
      "Dentistry",
      "Cosmetic Dentistry",
      "Aesthetic Medicine",
      "Orthodontics",
      "Pediatric Dentistry",
      "Endodontics",
      "Oral and Maxillofacial Surgery",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tratamientos Marsa Project",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Implantología dental" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Blanqueamiento dental" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Carillas de porcelana" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Diseño de sonrisa digital" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Ortodoncia invisible" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Odontopediatría" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Endodoncia" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Cirugía maxilofacial" } },
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
