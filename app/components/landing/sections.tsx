import Image from 'next/image'
import Link from 'next/link'
import WhatsAppLink from '../WhatsAppLink'
import PhoneLink, { PHONE_DISPLAY } from '../PhoneLink'
import LandingForm from './LandingForm'
import { WhatsAppIcon, PhoneIcon, CheckIcon, StarRow } from './icons'
import type { LandingContent } from '../../../lib/landings/types'

const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

const CTA_SOLID =
  'inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] text-black font-semibold px-6 py-3.5 rounded-full text-[13px] uppercase tracking-[0.14em] hover:brightness-110 transition-all'
const CTA_GHOST =
  'inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-6 py-3.5 rounded-full text-[13px] uppercase tracking-[0.14em] hover:bg-white/5 transition-all'

/** Titulo de seccion con la segunda mitad resaltada en dorado. */
function SplitHeading({ lead, highlight }: { lead: string; highlight: string }) {
  return (
    <>
      {lead}{' '}
      <span className="bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] bg-clip-text text-transparent">
        {highlight}
      </span>
    </>
  )
}

function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[11px] uppercase tracking-[0.22em] text-[#f8d974] ${className}`} style={GEIST}>
      {children}
    </p>
  )
}

/* ── Hero ───────────────────────────────────────────────────── */

export function LandingHero({ c }: { c: LandingContent }) {
  return (
    <section className="relative bg-[#0c0c0c] pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(198,154,44,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0c0c0c]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="flex flex-col gap-6">
          <Eyebrow>{c.eyebrow}</Eyebrow>

          {/* H1 unico de la pagina. */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.08] tracking-tight"
            style={ALBERT}
          >
            <SplitHeading lead={c.h1Lead} highlight={c.h1Highlight} />
          </h1>

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl" style={GEIST}>
            {c.subtitle}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-w-md" style={GEIST}>
            {c.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-white/80 text-[14px]">
                <CheckIcon />
                {b}
              </li>
            ))}
          </ul>

          {/* CTA visible desde el primer scroll. */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a href="#agenda" className={CTA_SOLID} style={GEIST}>
              Agenda tu valoración
            </a>
            <WhatsAppLink src="hero" text={c.whatsappText} className={CTA_GHOST}>
              <WhatsAppIcon />
              Hablar por WhatsApp
            </WhatsAppLink>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 text-white/60 text-[13px]" style={GEIST}>
            <StarRow />
            {c.stats.map((s, i) => (
              <span key={s} className="flex items-center gap-3">
                {i > 0 && <span className="text-white/30">·</span>}
                <span>{s}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 max-w-md md:max-w-none mx-auto md:mx-0 w-full">
          <Image
            src={c.heroImage}
            alt={c.heroImageAlt}
            fill
            priority
            sizes="(max-width: 768px) 90vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ── Problema / necesidad ───────────────────────────────────── */

export function LandingProblem({ c }: { c: LandingContent }) {
  return (
    <section className="relative bg-[#0c0c0c] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center flex flex-col gap-6">
        <Eyebrow>{c.problem.eyebrow}</Eyebrow>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
          <SplitHeading lead={c.problem.h2Lead} highlight={c.problem.h2Highlight} />
        </h2>
        {c.problem.paragraphs.map((p) => (
          <p key={p} className="text-white/70 text-base md:text-lg leading-relaxed" style={GEIST}>
            {p}
          </p>
        ))}
        <div className="pt-4">
          <a href="#agenda" className={CTA_SOLID} style={GEIST}>
            Agenda tu valoración
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── Por que Marsa Project (identico en todas) ──────────────── */

const WHY_CARDS = [
  {
    title: 'Especialistas',
    description: 'Formación continua y experiencia en odontología restauradora y estética.',
    icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />,
  },
  {
    title: 'Tecnología digital',
    description: 'Herramientas para diagnóstico y planificación de cada caso.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
  },
  {
    title: 'Materiales certificados',
    description: 'Materiales de marcas reconocidas y protocolos clínicos actualizados.',
    icon: <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />,
  },
  {
    title: 'Atención personalizada',
    description: 'Un plan diseñado de acuerdo con las necesidades de cada paciente.',
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
  },
]

export function LandingWhyMarsa() {
  return (
    <section className="relative bg-[#0c0c0c] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-14 md:mb-16">
          <Eyebrow className="mb-4">▪ Por qué Marsa Project</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
            ¿Por qué Marsa Project?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {WHY_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-4 p-6 md:p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#c69a2c]/25 to-[#f8d974]/10 flex items-center justify-center border border-[#c69a2c]/25">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f8d974"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {card.icon}
                </svg>
              </div>
              <h3 className="text-white text-lg md:text-xl leading-snug" style={ALBERT}>
                {card.title}
              </h3>
              <p className="text-white/60 text-[14px] leading-relaxed" style={GEIST}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Proceso ────────────────────────────────────────────────── */

export function LandingProcess({ c }: { c: LandingContent }) {
  return (
    <section className="relative bg-[#0a0a0a] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-14 md:mb-16">
          <Eyebrow className="mb-4">▪ Proceso</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
            <SplitHeading lead={c.process.h2Lead} highlight={c.process.h2Highlight} />
          </h2>
        </div>

        {/* Lista ordenada: el orden de los pasos es informacion, no decoracion. */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {c.process.steps.map((s, i) => (
            <li
              key={s.title}
              className="relative flex flex-col gap-4 p-6 md:p-7 rounded-2xl bg-white/[0.03] border border-white/10"
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-full bg-linear-to-br from-[#c69a2c] to-[#f8d974] text-black flex items-center justify-center font-bold text-lg"
                  style={ALBERT}
                >
                  {i + 1}
                </span>
                {i < c.process.steps.length - 1 && (
                  <span
                    className="hidden lg:block flex-1 h-px bg-linear-to-r from-white/20 to-transparent"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="text-white text-lg md:text-xl leading-snug" style={ALBERT}>
                {s.title}
              </h3>
              <p className="text-white/60 text-[14px] leading-relaxed" style={GEIST}>
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ── Tecnologia ─────────────────────────────────────────────── */

export function LandingTech({ c }: { c: LandingContent }) {
  return (
    <section className="relative bg-[#0c0c0c] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center flex flex-col gap-6">
        <Eyebrow>▪ Tecnología</Eyebrow>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
          <SplitHeading lead={c.tech.h2Lead} highlight={c.tech.h2Highlight} />
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={GEIST}>
          {c.tech.intro}
        </p>

        <ul className="flex flex-wrap justify-center gap-2.5 pt-4" style={GEIST}>
          {c.tech.tools.map((t) => (
            <li
              key={t}
              className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/12 text-white/85 text-[13px]"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="pt-6">
          <a href="#agenda" className={CTA_SOLID} style={GEIST}>
            {c.tech.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── Especialista (identico en todas) ───────────────────────── */

export function LandingSpecialist() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 max-w-md mx-auto md:mx-0 w-full order-2 md:order-1">
          <Image
            src="/docsalem.webp"
            alt="Dr. Salém Sarmiento Marín, director clínico de Marsa Project"
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col gap-6 order-1 md:order-2">
          <Eyebrow>▪ Especialistas</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
            Especialistas comprometidos con tu sonrisa
          </h2>
          <div className="pt-2 flex flex-col gap-2">
            <h3 className="text-2xl md:text-3xl text-white leading-tight" style={ALBERT}>
              Dr. Salém Sarmiento Marín
            </h3>
            <p className="text-[#f8d974] text-[13px] uppercase tracking-[0.16em]" style={GEIST}>
              Director Clínico de Marsa Project
            </p>
          </div>
          <p className="text-white/70 text-base md:text-lg leading-relaxed" style={GEIST}>
            Profesional dedicado a la odontología restauradora y estética, con participación en
            formación continua y actividades académicas nacionales e internacionales.
          </p>
          <div className="pt-2">
            <a href="#agenda" className={CTA_SOLID} style={GEIST}>
              Agenda tu valoración
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Casos clinicos ─────────────────────────────────────────── */

export function LandingCases({ c }: { c: LandingContent }) {
  return (
    <section className="relative bg-[#0c0c0c] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-10 md:gap-12">
        <div className="max-w-2xl">
          <Eyebrow className="mb-4">▪ Casos clínicos</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
            <SplitHeading lead="Resultados y" highlight="casos clínicos" />
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mt-4" style={GEIST}>
            {c.casesIntro}
          </p>
        </div>

        {/* Marcador de posicion: el brief prohibe stock, asi que la galeria
            espera fotografia real autorizada por los pacientes. */}
        <div
          role="group"
          aria-label="Galería de casos clínicos autorizados"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-2xl border border-dashed border-white/15 bg-white/[0.02] flex items-center justify-center overflow-hidden"
            >
              <div className="flex flex-col items-center gap-2 text-center px-4">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/25"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <p className="text-white/40 text-[11px] uppercase tracking-[0.14em]" style={GEIST}>
                  Caso #{i + 1} — pendiente
                </p>
                <p className="text-white/25 text-[10px]" style={GEIST}>
                  Contenido autorizado por publicar
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-white/50 text-[13px] italic max-w-2xl" style={GEIST}>
          Los resultados pueden variar de acuerdo con las condiciones particulares de cada paciente.
        </p>
      </div>
    </section>
  )
}

/* ── Testimonios ────────────────────────────────────────────── */

export function LandingTestimonials({ c }: { c: LandingContent }) {
  return (
    <section className="relative bg-[#0a0a0a] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-10 md:gap-12">
        <div className="max-w-2xl">
          <Eyebrow className="mb-4">▪ Testimonios</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
            <SplitHeading lead="La experiencia de" highlight="nuestros pacientes" />
          </h2>
        </div>

        {/* El brief exige testimonios reales y autorizados: hasta tenerlos,
            marcador de posicion explicito en lugar de texto inventado. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-6 md:p-7 rounded-2xl border border-dashed border-white/15 bg-white/[0.02]"
            >
              <StarRow />
              <p className="text-white/70 text-[14px] leading-relaxed italic" style={GEIST}>
                &ldquo;Testimonio real del paciente.&rdquo;
              </p>
              <div className="pt-2 border-t border-white/10 flex flex-col gap-1">
                <p className="text-white/85 text-[14px] font-medium" style={GEIST}>
                  Paciente de Marsa Project
                </p>
                <p className="text-[#f8d974] text-[11px] uppercase tracking-[0.14em]" style={GEIST}>
                  Tratamiento: {c.testimonialTreatment}
                </p>
              </div>
              <p className="text-white/25 text-[10px] pt-2 border-t border-white/5" style={GEIST}>
                Pendiente testimonio real autorizado
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA final + formulario ─────────────────────────────────── */

export function LandingFinalCta({ c }: { c: LandingContent }) {
  return (
    <section
      id="agenda"
      className="relative bg-[#0a0a0a] py-20 md:py-28 border-t border-white/5 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
        <div className="flex flex-col gap-6">
          <Eyebrow>▪ Agenda hoy</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight" style={ALBERT}>
            <SplitHeading lead={c.finalCta.h2Lead} highlight={c.finalCta.h2Highlight} />
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed" style={GEIST}>
            {c.finalCta.text}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <WhatsAppLink src="cta" text={c.whatsappText} className={CTA_GHOST}>
              <WhatsAppIcon />
              Hablar por WhatsApp
            </WhatsAppLink>
            <PhoneLink src="cta" className={CTA_GHOST} style={GEIST}>
              <PhoneIcon />
              Llamar {PHONE_DISPLAY}
            </PhoneLink>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <p className="text-[11px] uppercase tracking-[0.14em] text-white/50 mb-5" style={GEIST}>
            Formulario · te contactamos
          </p>
          <LandingForm
            reason={c.form.reason}
            origin={c.form.origin}
            formName={c.form.formName}
          />
        </div>
      </div>
    </section>
  )
}

/* ── Ubicacion (identica en todas) ──────────────────────────── */

const MAP_SRC =
  'https://www.google.com/maps?q=Paseo%20Crist%C3%B3bal%20Col%C3%B3n%20128%2C%20Toluca%2C%20Estado%20de%20M%C3%A9xico&z=16&output=embed'
const MAP_LINK =
  'https://www.google.com/maps/search/?api=1&query=Marsa+Project+Paseo+Cristobal+Colon+128+Toluca'

export function LandingMap() {
  return (
    <section className="relative bg-[#0c0c0c] py-20 md:py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4">
          <Eyebrow>▪ Ubicación</Eyebrow>
          <h2 className="text-2xl md:text-3xl text-white leading-tight tracking-tight" style={ALBERT}>
            Marsa Project · Toluca
          </h2>
          <address className="not-italic text-white/70 text-[15px] leading-relaxed" style={GEIST}>
            P.º Cristóbal Colón 128-MZ 027
            <br />
            Residencial Colón y Col. Ciprés
            <br />
            50120 Toluca de Lerdo, Méx.
          </address>
          <div className="text-white/60 text-[14px] leading-relaxed" style={GEIST}>
            Lunes a viernes: 10:00 a.m. – 8:00 p.m.
            <br />
            Sábado: 10:00 a.m. – 4:00 p.m.
            <br />
            Domingo: Cerrado
          </div>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#f8d974] hover:text-white text-[13px] uppercase tracking-[0.14em] mt-2 w-fit"
            style={GEIST}
          >
            Cómo llegar
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02]">
          <iframe
            src={MAP_SRC}
            title="Mapa · Marsa Project Toluca"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 0, colorScheme: 'normal' }}
          />
        </div>
      </div>
    </section>
  )
}

/* ── Pie minimo ─────────────────────────────────────────────── */

export function LandingFooter({ c }: { c: LandingContent }) {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-[#080808] border-t border-white/8 py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-10">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="Marsa Project" className="w-fit hover:opacity-80 transition-opacity">
              <Image
                src="/logo.svg"
                alt="Marsa Project"
                width={140}
                height={36}
                className="h-9 object-contain"
                style={{ width: 'auto' }}
              />
            </Link>
            <p className="text-white/55 text-[14px] leading-relaxed max-w-xs" style={GEIST}>
              {c.footerTagline}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-[14px] text-white/60" style={GEIST}>
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/40 mb-1" style={ALBERT}>
              Contacto
            </p>
            <address className="not-italic leading-relaxed">
              P.º Cristóbal Colón 128-MZ 027
              <br />
              Residencial Colón y Col. Ciprés
              <br />
              50120 Toluca de Lerdo, Méx.
            </address>
            <PhoneLink src="footer" className="hover:text-white transition-colors w-fit">
              {PHONE_DISPLAY}
            </PhoneLink>
            <WhatsAppLink src="footer" text={c.whatsappText} className="hover:text-white transition-colors w-fit">
              WhatsApp
            </WhatsAppLink>
          </div>

          <div className="flex flex-col gap-2 text-[14px] text-white/60" style={GEIST}>
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/40 mb-1" style={ALBERT}>
              Horarios
            </p>
            <p>Lunes a viernes: 10:00 a.m. – 8:00 p.m.</p>
            <p>Sábado: 10:00 a.m. – 4:00 p.m.</p>
            <p className="text-white/40">Domingo: Cerrado</p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-white/35 text-[12px]" style={GEIST}>
            &copy; {year} Marsa Project. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-[12px] text-white/45" style={GEIST}>
            <Link href="/aviso-de-privacidad" className="hover:text-white transition-colors">
              Aviso de privacidad
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/terminos-y-condiciones" className="hover:text-white transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
