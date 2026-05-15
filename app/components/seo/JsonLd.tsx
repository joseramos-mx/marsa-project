import { getMessages } from "next-intl/server";

/* ─────────────────────────────────────────────────────────────
   JSON-LD Structured Data — Server Component (locale-aware)
   Schemas included:
     • Organization
     • Dentist (LocalBusiness)
     • MedicalOrganization
     • WebSite (with SearchAction)
     • FAQPage
   ───────────────────────────────────────────────────────────── */

type FaqMessages = { items: { q: string; a: string }[] };

export default async function JsonLd({
  siteUrl,
  locale,
}: {
  siteUrl: string;
  locale: string;
}) {
  const messages = (await getMessages({ locale })) as unknown as { faq: FaqMessages };
  const faqItems = messages.faq.items;
  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "MedicalOrganization"],
    "@id": `${siteUrl}/#organization`,
    name: "Marsa Project",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.svg`,
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
    inLanguage: locale === "en" ? "en-US" : "es-MX",
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
