import type { ContactReason } from '../schemas/contact'

/**
 * Contenido de una landing de Google Ads.
 *
 * Todas comparten estructura y diseño; lo que cambia es el contenido, que es
 * justo lo que exige el brief: keyword especifica, anuncio especifico,
 * contenido especifico y CTA especifico por landing.
 *
 * Las secciones que NO varian entre tratamientos (por que Marsa, especialista,
 * ubicacion) no viven aqui: son componentes compartidos sin props.
 */
export type LandingContent = {
  /** Segmento de URL, sin barras. Debe ser amigable y contener la keyword. */
  slug: string

  /* ── SEO ── */
  title: string
  metaDescription: string
  ogDescription: string
  ogImage: string
  ogImageAlt: string

  /* ── Hero ── */
  eyebrow: string
  /** El H1 se parte en dos para poder resaltar la segunda mitad en dorado. */
  h1Lead: string
  h1Highlight: string
  subtitle: string
  benefits: string[]
  heroImage: string
  heroImageAlt: string
  /** Cifras de confianza bajo el hero. */
  stats: string[]

  /* ── Problema / necesidad ── */
  problem: {
    eyebrow: string
    h2Lead: string
    h2Highlight: string
    paragraphs: string[]
  }

  /* ── Proceso de tratamiento ── */
  process: {
    h2Lead: string
    h2Highlight: string
    steps: { title: string; description: string }[]
  }

  /* ── Tecnologia ── */
  tech: {
    h2Lead: string
    h2Highlight: string
    intro: string
    tools: string[]
    ctaLabel: string
  }

  /* ── Casos clinicos ── */
  casesIntro: string

  /* ── Testimonios ── */
  testimonialTreatment: string

  /* ── FAQ ── */
  faq: { q: string; a: string }[]

  /* ── CTA final ── */
  finalCta: {
    h2Lead: string
    h2Highlight: string
    text: string
  }

  /* ── Formulario ── */
  form: {
    reason: ContactReason
    /** Se adjunta al correo para saber de que landing vino el lead. */
    origin: string
    /** `form_name` del evento form_submit_attempt en GA4. */
    formName: string
  }

  /** Mensaje prellenado al abrir WhatsApp desde esta landing. */
  whatsappText: string

  /* ── Datos estructurados ── */
  procedureName: string
  procedureDescription: string

  /** Linea descriptiva del pie de la landing. */
  footerTagline: string
}
