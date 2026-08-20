import type { LandingContent } from './types'

/* ─────────────────────────────────────────────────────────────
   Contenido de las landings de Google Ads.

   Reglas que cumple todo el copy de este archivo, tomadas del brief:
   - No se promete ningun resultado ni se afirma que todo paciente sea
     candidato: la indicacion depende siempre de la valoracion clinica.
   - Un unico objetivo de conversion por landing: agendar valoracion.
   - Keyword, contenido y CTA especificos por tratamiento.
   ───────────────────────────────────────────────────────────── */

const SHARED_STATS = ['4.9/5', '500+ pacientes', '8+ años de experiencia']

/* ── Landing 01 ─────────────────────────────────────────────── */

export const implantes: LandingContent = {
  slug: 'implantes-dentales-toluca',

  title: 'Implantes Dentales en Toluca — Marsa Project',
  metaDescription:
    'Tratamiento de implantes dentales en Toluca con especialistas, tecnología digital y materiales certificados. Agenda tu valoración en Marsa Project.',
  ogDescription:
    'Recupera la función y estética de tu sonrisa con un tratamiento personalizado, respaldado por especialistas y tecnología digital. Agenda tu valoración.',
  ogImage: '/services/implantes.webp',
  ogImageAlt: 'Implantes dentales en Marsa Project, Toluca',

  eyebrow: '▪ Especialistas en implantes · Toluca',
  h1Lead: 'Implantes Dentales',
  h1Highlight: 'en Toluca',
  subtitle:
    'Recupera la función y estética de tu sonrisa con un tratamiento personalizado, respaldado por especialistas y tecnología digital.',
  benefits: [
    'Evaluación personalizada',
    'Especialistas',
    'Tecnología digital',
    'Materiales certificados',
  ],
  heroImage: '/services/implantes.webp',
  heroImageAlt: 'Tratamiento de implantes dentales en Marsa Project, Toluca',
  stats: ['4.9/5', '500+ pacientes', '100+ implantes'],

  problem: {
    eyebrow: '▪ Por qué actuar',
    h2Lead: 'Recupera tu sonrisa y la',
    h2Highlight: 'función de tus dientes',
    paragraphs: [
      'La pérdida de uno o más dientes puede afectar tu forma de masticar, tu sonrisa y tu confianza.',
      'Los implantes dentales pueden ser una alternativa para reemplazar dientes ausentes. En Marsa Project evaluamos cada caso para determinar el tratamiento adecuado de acuerdo con tus necesidades.',
    ],
  },

  process: {
    h2Lead: 'Tu tratamiento comienza con',
    h2Highlight: 'una valoración',
    steps: [
      { title: 'Valoración', description: 'Conocemos tu situación y evaluamos tu caso.' },
      { title: 'Diagnóstico', description: 'Analizamos la información necesaria para definir las alternativas.' },
      { title: 'Planificación', description: 'Diseñamos el plan de tratamiento correspondiente.' },
      { title: 'Tratamiento', description: 'Realizamos el procedimiento indicado y damos seguimiento a tu evolución.' },
    ],
  },

  tech: {
    h2Lead: 'Tecnología para',
    h2Highlight: 'una mejor planificación',
    intro:
      'En Marsa Project utilizamos herramientas digitales que ayudan al equipo clínico en el diagnóstico y planificación de los tratamientos.',
    tools: ['Escaneo intraoral', 'Radiografía digital', 'Software de planificación'],
    ctaLabel: 'Conoce tu opción de tratamiento',
  },

  casesIntro: 'Conoce algunos de los casos tratados por nuestro equipo.',
  testimonialTreatment: 'Implantes dentales',

  faq: [
    {
      q: '¿Todos pueden colocarse un implante dental?',
      a: 'No necesariamente. La indicación depende de las condiciones clínicas de cada paciente y debe determinarse mediante una valoración profesional.',
    },
    {
      q: '¿Necesito una valoración antes de comenzar?',
      a: 'Sí. La valoración permite conocer las condiciones de tu caso y definir las alternativas de tratamiento.',
    },
    {
      q: '¿Cuánto cuesta un implante dental?',
      a: 'El costo depende de las características de cada caso, los procedimientos necesarios y el plan de tratamiento. Por ello, primero es necesario realizar una valoración.',
    },
    {
      q: '¿Cuánto dura el tratamiento?',
      a: 'El tiempo depende de las condiciones clínicas y del tratamiento indicado para cada paciente.',
    },
    {
      q: '¿Dónde se encuentra Marsa Project?',
      a: 'Estamos ubicados en Paseo Cristóbal Colón 128-MZ 027, Residencial Colón y Colonia Ciprés, 50120 Toluca de Lerdo, Estado de México.',
    },
  ],

  finalCta: {
    h2Lead: 'Da el primer paso hacia una',
    h2Highlight: 'sonrisa completa',
    text: 'Agenda una valoración con el equipo de Marsa Project y conoce las opciones de tratamiento disponibles para tu caso.',
  },

  form: {
    reason: 'Me faltan dientes',
    origin: 'Origen: Landing Implantes Dentales Toluca',
    formName: 'landing_implantes',
  },

  whatsappText: 'Hola, quiero información sobre implantes dentales',

  procedureName: 'Implantes dentales',
  procedureDescription:
    'Colocación de implantes dentales para reemplazar la raíz de dientes ausentes y recibir posteriormente una restauración. La indicación se determina mediante valoración clínica.',
  footerTagline: 'Marsa Project · Implantes Dentales en Toluca',
}

/* ── Landing 02 ─────────────────────────────────────────────── */

export const disenoSonrisa: LandingContent = {
  slug: 'diseno-de-sonrisa-toluca',

  title: 'Diseño de Sonrisa en Toluca — Marsa Project',
  metaDescription:
    'Diseño de sonrisa en Toluca con planificación digital: simulamos la propuesta antes de comenzar. Agenda tu valoración en Marsa Project.',
  ogDescription:
    'Planificamos tu sonrisa con simulación digital antes de iniciar el tratamiento, para que conozcas la propuesta con anticipación. Agenda tu valoración.',
  ogImage: '/services/disenodesonrisa.webp',
  ogImageAlt: 'Diseño de sonrisa en Marsa Project, Toluca',

  eyebrow: '▪ Diseño de sonrisa digital · Toluca',
  h1Lead: 'Diseño de Sonrisa',
  h1Highlight: 'en Toluca',
  subtitle:
    'Planificamos cada detalle de tu sonrisa con herramientas digitales y te mostramos la propuesta antes de iniciar cualquier procedimiento.',
  benefits: [
    'Simulación previa al tratamiento',
    'Planificación digital',
    'Enfoque en tu rostro',
    'Plan por etapas',
  ],
  heroImage: '/services/disenodesonrisa.webp',
  heroImageAlt: 'Planificación de diseño de sonrisa en Marsa Project, Toluca',
  stats: SHARED_STATS,

  problem: {
    eyebrow: '▪ Por qué planificar',
    h2Lead: 'Conoce la propuesta',
    h2Highlight: 'antes de empezar',
    paragraphs: [
      'Cambiar la forma, el color o la posición de los dientes afecta al conjunto del rostro, no solo a una pieza aislada.',
      'El diseño de sonrisa es un proceso de planificación: se estudia tu caso, se define una propuesta y se te presenta antes de iniciar. Las alternativas y su viabilidad se determinan mediante valoración clínica.',
    ],
  },

  process: {
    h2Lead: 'Cómo planificamos',
    h2Highlight: 'tu diseño de sonrisa',
    steps: [
      { title: 'Valoración', description: 'Revisamos el estado de tus dientes, encías y mordida.' },
      { title: 'Registros', description: 'Tomamos fotografías clínicas y escaneo intraoral de tu caso.' },
      { title: 'Propuesta digital', description: 'Elaboramos una simulación y la revisamos contigo antes de decidir.' },
      { title: 'Tratamiento', description: 'Ejecutamos el plan acordado por etapas y damos seguimiento.' },
    ],
  },

  tech: {
    h2Lead: 'Planificación',
    h2Highlight: 'digital de cada caso',
    intro:
      'El escaneo intraoral y la fotografía clínica permiten estudiar tu caso y construir una propuesta antes de intervenir.',
    tools: ['Escaneo intraoral', 'Fotografía clínica', 'Software de diseño', 'Simulación previa'],
    ctaLabel: 'Quiero ver mi propuesta',
  },

  casesIntro: 'Algunos casos de diseño de sonrisa tratados por nuestro equipo.',
  testimonialTreatment: 'Diseño de sonrisa',

  faq: [
    {
      q: '¿Qué incluye el diseño de sonrisa?',
      a: 'Incluye una valoración clínica y estética, los registros necesarios, una simulación digital de la propuesta y un plan de tratamiento detallado antes de comenzar cualquier procedimiento.',
    },
    {
      q: '¿La simulación garantiza el resultado final?',
      a: 'No. La simulación es una herramienta de planificación y comunicación: ayuda a acordar el objetivo, pero el resultado depende de las condiciones clínicas de cada paciente.',
    },
    {
      q: '¿Qué tratamientos puede incluir?',
      a: 'Según el caso puede combinar carillas, blanqueamiento, ortodoncia o restauraciones. Las alternativas se definen tras la valoración.',
    },
    {
      q: '¿Cuánto cuesta un diseño de sonrisa?',
      a: 'El costo depende de los procedimientos que incluya el plan de cada paciente. Por ello, primero es necesario realizar una valoración.',
    },
    {
      q: '¿Dónde se encuentra Marsa Project?',
      a: 'Estamos ubicados en Paseo Cristóbal Colón 128-MZ 027, Residencial Colón y Colonia Ciprés, 50120 Toluca de Lerdo, Estado de México.',
    },
  ],

  finalCta: {
    h2Lead: 'Empieza por conocer',
    h2Highlight: 'tu propuesta',
    text: 'Agenda una valoración con el equipo de Marsa Project y descubre qué alternativas de diseño de sonrisa aplican a tu caso.',
  },

  form: {
    reason: 'Diseño de sonrisa',
    origin: 'Origen: Landing Diseño de Sonrisa Toluca',
    formName: 'landing_diseno_sonrisa',
  },

  whatsappText: 'Hola, quiero información sobre diseño de sonrisa',

  procedureName: 'Diseño de sonrisa',
  procedureDescription:
    'Planificación estética y funcional de la sonrisa con registros clínicos y simulación digital previa. Las alternativas se determinan mediante valoración clínica.',
  footerTagline: 'Marsa Project · Diseño de Sonrisa en Toluca',
}

/* ── Landing 03 ─────────────────────────────────────────────── */

export const carillas: LandingContent = {
  slug: 'carillas-dentales-toluca',

  title: 'Carillas Dentales en Toluca — Marsa Project',
  metaDescription:
    'Carillas dentales de porcelana en Toluca, planificadas caso por caso con registros digitales. Agenda tu valoración en Marsa Project.',
  ogDescription:
    'Carillas de porcelana planificadas para integrarse con las características de tu sonrisa. Agenda tu valoración en Marsa Project.',
  ogImage: '/services/carillas.webp',
  ogImageAlt: 'Carillas dentales de porcelana en Marsa Project, Toluca',

  eyebrow: '▪ Carillas de porcelana · Toluca',
  h1Lead: 'Carillas Dentales',
  h1Highlight: 'en Toluca',
  subtitle:
    'Carillas de porcelana planificadas para integrarse con la forma y el color de tu sonrisa, a partir de una valoración clínica.',
  benefits: [
    'Planificación previa',
    'Porcelana de marcas reconocidas',
    'Registros digitales',
    'Seguimiento clínico',
  ],
  heroImage: '/services/carillas.webp',
  heroImageAlt: 'Carillas dentales de porcelana en Marsa Project, Toluca',
  stats: SHARED_STATS,

  problem: {
    eyebrow: '▪ Por qué valorarlo',
    h2Lead: 'Forma, color y',
    h2Highlight: 'proporción de tus dientes',
    paragraphs: [
      'Los desgastes, las fracturas pequeñas, las manchas resistentes o las diferencias de forma entre piezas pueden afectar la armonía de la sonrisa.',
      'Las carillas dentales son una alternativa para modificar la superficie visible del diente. Si son adecuadas para tu caso, y con qué material, es algo que se determina mediante valoración clínica.',
    ],
  },

  process: {
    h2Lead: 'Cómo se planifica',
    h2Highlight: 'un tratamiento con carillas',
    steps: [
      { title: 'Valoración', description: 'Evaluamos el estado de tus dientes, encías y mordida.' },
      { title: 'Diseño', description: 'Definimos forma y color a partir de registros y fotografía clínica.' },
      { title: 'Prueba', description: 'Revisamos la propuesta contigo antes de la colocación definitiva.' },
      { title: 'Colocación', description: 'Colocamos las carillas y programamos las revisiones de seguimiento.' },
    ],
  },

  tech: {
    h2Lead: 'Registros digitales para',
    h2Highlight: 'un ajuste preciso',
    intro:
      'El escaneo intraoral y la fotografía clínica permiten planificar forma y color antes de fabricar las carillas.',
    tools: ['Escaneo intraoral', 'Fotografía clínica', 'Toma de color', 'Software de diseño'],
    ctaLabel: 'Conoce tu opción de tratamiento',
  },

  casesIntro: 'Algunos casos tratados con carillas por nuestro equipo.',
  testimonialTreatment: 'Carillas de porcelana',

  faq: [
    {
      q: '¿Soy candidato a carillas dentales?',
      a: 'Depende del estado de tus dientes, encías y mordida. La indicación debe determinarse mediante una valoración profesional.',
    },
    {
      q: '¿Es necesario desgastar el diente?',
      a: 'Depende del tipo de carilla y del caso. Durante la valoración se explica qué preparación requiere tu situación concreta.',
    },
    {
      q: '¿Cuánto duran las carillas?',
      a: 'La duración depende del material indicado, de los hábitos de cada paciente, de la higiene y de las revisiones periódicas. Tu especialista te indicará qué esperar en tu caso.',
    },
    {
      q: '¿Cuánto cuestan las carillas dentales?',
      a: 'El costo depende del número de piezas, del material y del plan de tratamiento. Por ello, primero es necesario realizar una valoración.',
    },
    {
      q: '¿Dónde se encuentra Marsa Project?',
      a: 'Estamos ubicados en Paseo Cristóbal Colón 128-MZ 027, Residencial Colón y Colonia Ciprés, 50120 Toluca de Lerdo, Estado de México.',
    },
  ],

  finalCta: {
    h2Lead: 'Da el primer paso hacia',
    h2Highlight: 'tu nueva sonrisa',
    text: 'Agenda una valoración con el equipo de Marsa Project y conoce si las carillas son una alternativa para tu caso.',
  },

  form: {
    reason: 'Carillas dentales',
    origin: 'Origen: Landing Carillas Dentales Toluca',
    formName: 'landing_carillas',
  },

  whatsappText: 'Hola, quiero información sobre carillas dentales',

  procedureName: 'Carillas dentales',
  procedureDescription:
    'Colocación de carillas de porcelana sobre la superficie visible del diente, planificadas con registros digitales. La indicación se determina mediante valoración clínica.',
  footerTagline: 'Marsa Project · Carillas Dentales en Toluca',
}

/* ── Landing 04 ─────────────────────────────────────────────── */

export const ortodoncia: LandingContent = {
  slug: 'ortodoncia-invisible-toluca',

  title: 'Ortodoncia Invisible en Toluca — Marsa Project',
  metaDescription:
    'Ortodoncia invisible con alineadores transparentes en Toluca, planificada con escaneo digital. Agenda tu valoración en Marsa Project.',
  ogDescription:
    'Alineadores transparentes hechos a medida y planificados con escaneo digital. Agenda tu valoración en Marsa Project.',
  ogImage: '/services/ortodoncia-invisible.webp',
  ogImageAlt: 'Ortodoncia invisible con alineadores en Marsa Project, Toluca',

  eyebrow: '▪ Alineadores transparentes · Toluca',
  h1Lead: 'Ortodoncia Invisible',
  h1Highlight: 'en Toluca',
  subtitle:
    'Alineadores transparentes hechos a medida para corregir la posición de tus dientes de forma discreta, con un plan definido desde el escaneo digital.',
  benefits: [
    'Alineadores removibles',
    'Planificación por escaneo',
    'Revisiones programadas',
    'Discreto en el día a día',
  ],
  heroImage: '/services/ortodoncia-invisible.webp',
  heroImageAlt: 'Alineadores transparentes de ortodoncia invisible en Marsa Project, Toluca',
  stats: SHARED_STATS,

  problem: {
    eyebrow: '▪ Por qué corregirlo',
    h2Lead: 'La posición de tus dientes',
    h2Highlight: 'no es solo estética',
    paragraphs: [
      'El apiñamiento, los espacios entre dientes o una mordida desalineada pueden dificultar la higiene y afectar la forma en que muerdes.',
      'La ortodoncia invisible es una alternativa para corregir la posición dental mediante alineadores removibles. Si es adecuada para tu caso se determina mediante valoración clínica; algunos casos requieren otra técnica.',
    ],
  },

  process: {
    h2Lead: 'Cómo funciona',
    h2Highlight: 'el tratamiento',
    steps: [
      { title: 'Valoración', description: 'Revisamos tu mordida, la posición dental y el estado de tus encías.' },
      { title: 'Escaneo', description: 'Tomamos un escaneo intraoral y los registros necesarios de tu caso.' },
      { title: 'Plan digital', description: 'Definimos la secuencia de movimientos y el número de alineadores.' },
      { title: 'Seguimiento', description: 'Entregamos los alineadores y controlamos el avance en cada revisión.' },
    ],
  },

  tech: {
    h2Lead: 'Escaneo digital para',
    h2Highlight: 'planificar cada movimiento',
    intro:
      'El escaneo intraoral evita las impresiones tradicionales y permite planificar la secuencia del tratamiento antes de fabricar los alineadores.',
    tools: ['Escaneo intraoral', 'Radiografía digital', 'Planificación 3D', 'Control de avance'],
    ctaLabel: 'Quiero saber si soy candidato',
  },

  casesIntro: 'Algunos casos de ortodoncia tratados por nuestro equipo.',
  testimonialTreatment: 'Ortodoncia invisible',

  faq: [
    {
      q: '¿Sirve la ortodoncia invisible para cualquier caso?',
      a: 'No necesariamente. Hay casos que requieren otra técnica. La indicación depende de las condiciones clínicas de cada paciente y debe determinarse mediante una valoración profesional.',
    },
    {
      q: '¿Cuántas horas al día hay que usarlos?',
      a: 'Los alineadores son removibles, pero requieren un uso constante durante el día para que el plan avance según lo previsto. Tu especialista te indicará las horas de uso de tu caso.',
    },
    {
      q: '¿Cuánto dura el tratamiento?',
      a: 'El tiempo depende de la complejidad del caso y del cumplimiento de uso. La valoración permite estimar la duración de tu tratamiento.',
    },
    {
      q: '¿Cuánto cuesta la ortodoncia invisible?',
      a: 'El costo depende del número de alineadores y de la complejidad del caso. Por ello, primero es necesario realizar una valoración.',
    },
    {
      q: '¿Dónde se encuentra Marsa Project?',
      a: 'Estamos ubicados en Paseo Cristóbal Colón 128-MZ 027, Residencial Colón y Colonia Ciprés, 50120 Toluca de Lerdo, Estado de México.',
    },
  ],

  finalCta: {
    h2Lead: 'Descubre si eres',
    h2Highlight: 'candidato',
    text: 'Agenda una valoración con el equipo de Marsa Project y conoce si la ortodoncia invisible es una alternativa para tu caso.',
  },

  form: {
    reason: 'Ortodoncia invisible',
    origin: 'Origen: Landing Ortodoncia Invisible Toluca',
    formName: 'landing_ortodoncia',
  },

  whatsappText: 'Hola, quiero información sobre ortodoncia invisible',

  procedureName: 'Ortodoncia invisible',
  procedureDescription:
    'Corrección de la posición dental mediante alineadores transparentes removibles, planificada con escaneo intraoral. La indicación se determina mediante valoración clínica.',
  footerTagline: 'Marsa Project · Ortodoncia Invisible en Toluca',
}

/* ── Landing 05 ─────────────────────────────────────────────── */

export const blanqueamiento: LandingContent = {
  slug: 'blanqueamiento-dental-toluca',

  title: 'Blanqueamiento Dental en Toluca — Marsa Project',
  metaDescription:
    'Blanqueamiento dental en Toluca realizado por especialistas, con protocolo definido tras valoración clínica. Agenda tu valoración en Marsa Project.',
  ogDescription:
    'Blanqueamiento dental supervisado por especialistas, con el protocolo y las sesiones definidos tras la valoración. Agenda tu valoración.',
  ogImage: '/services/blanquamiento.webp',
  ogImageAlt: 'Blanqueamiento dental en Marsa Project, Toluca',

  eyebrow: '▪ Blanqueamiento supervisado · Toluca',
  h1Lead: 'Blanqueamiento Dental',
  h1Highlight: 'en Toluca',
  subtitle:
    'Aclaramiento dental realizado por especialistas, con un protocolo definido a partir de la valoración de tu caso.',
  benefits: [
    'Valoración previa',
    'Protocolo supervisado',
    'Materiales certificados',
    'Indicaciones de cuidado',
  ],
  heroImage: '/services/blanquamiento.webp',
  heroImageAlt: 'Tratamiento de blanqueamiento dental en Marsa Project, Toluca',
  stats: SHARED_STATS,

  problem: {
    eyebrow: '▪ Por qué valorarlo antes',
    h2Lead: 'No todas las manchas',
    h2Highlight: 'responden igual',
    paragraphs: [
      'El color de los dientes puede cambiar por el paso del tiempo, ciertos alimentos y bebidas, o por causas internas de la pieza dental.',
      'El origen de la pigmentación determina si el blanqueamiento es la alternativa adecuada y qué protocolo corresponde. Por eso el tratamiento comienza siempre con una valoración clínica.',
    ],
  },

  process: {
    h2Lead: 'Cómo se realiza',
    h2Highlight: 'el tratamiento',
    steps: [
      { title: 'Valoración', description: 'Revisamos el origen del cambio de color y el estado de tus dientes y encías.' },
      { title: 'Preparación', description: 'Atendemos primero lo que deba tratarse antes de aclarar el diente.' },
      { title: 'Aplicación', description: 'Realizamos el protocolo indicado bajo supervisión del especialista.' },
      { title: 'Cuidados', description: 'Te damos indicaciones de mantenimiento y programamos la revisión.' },
    ],
  },

  tech: {
    h2Lead: 'Protocolo clínico',
    h2Highlight: 'y materiales certificados',
    intro:
      'El registro de color y la valoración previa permiten definir el protocolo adecuado y dar seguimiento objetivo al tratamiento.',
    tools: ['Registro de color', 'Materiales certificados', 'Protocolo supervisado'],
    ctaLabel: 'Conoce tu opción de tratamiento',
  },

  casesIntro: 'Algunos casos de blanqueamiento tratados por nuestro equipo.',
  testimonialTreatment: 'Blanqueamiento dental',

  faq: [
    {
      q: '¿El blanqueamiento sirve para cualquier tipo de mancha?',
      a: 'No. El resultado depende del origen de la pigmentación. Algunas manchas responden al aclaramiento y otras requieren un tratamiento distinto, lo que se determina en la valoración.',
    },
    {
      q: '¿Es seguro?',
      a: 'Realizado por un profesional y tras una valoración previa, es un procedimiento habitual en odontología. Pueden presentarse efectos temporales como sensibilidad, que el especialista te explicará antes de comenzar.',
    },
    {
      q: '¿Cuánto dura el efecto?',
      a: 'La duración depende de los hábitos de cada paciente, la alimentación, la higiene y las revisiones periódicas. Tu especialista te indicará qué esperar en tu caso.',
    },
    {
      q: '¿Cuánto cuesta un blanqueamiento dental?',
      a: 'El costo depende del protocolo indicado y del número de sesiones que requiera tu caso. Por ello, primero es necesario realizar una valoración.',
    },
    {
      q: '¿Dónde se encuentra Marsa Project?',
      a: 'Estamos ubicados en Paseo Cristóbal Colón 128-MZ 027, Residencial Colón y Colonia Ciprés, 50120 Toluca de Lerdo, Estado de México.',
    },
  ],

  finalCta: {
    h2Lead: 'Empieza por una',
    h2Highlight: 'valoración',
    text: 'Agenda una valoración con el equipo de Marsa Project y conoce si el blanqueamiento es la alternativa indicada para tu caso.',
  },

  form: {
    reason: 'Blanqueamiento dental',
    origin: 'Origen: Landing Blanqueamiento Dental Toluca',
    formName: 'landing_blanqueamiento',
  },

  whatsappText: 'Hola, quiero información sobre blanqueamiento dental',

  procedureName: 'Blanqueamiento dental',
  procedureDescription:
    'Aclaramiento del color dental mediante protocolo supervisado por especialista, definido tras valoración clínica del origen de la pigmentación.',
  footerTagline: 'Marsa Project · Blanqueamiento Dental en Toluca',
}

/* ── Registro ───────────────────────────────────────────────── */

export const LANDINGS: LandingContent[] = [
  implantes,
  disenoSonrisa,
  carillas,
  ortodoncia,
  blanqueamiento,
]

/** Rutas de las landings, para el sitemap. */
export const LANDING_PATHS = LANDINGS.map((l) => `/${l.slug}`)
