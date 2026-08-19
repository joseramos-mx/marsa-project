import type { ReactNode } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

/**
 * Cascaron compartido por las paginas legales.
 *
 * Los estilos de texto largo se aplican aqui con selectores descendentes
 * para que el contenido de cada pagina sea JSX plano y legible, sin repetir
 * clases de Tailwind en cada parrafo.
 */
export default function LegalPage({
  title,
  updatedAt,
  intro,
  children,
}: {
  title: string
  updatedAt: string
  intro?: string
  children: ReactNode
}) {
  return (
    <main className="bg-[#0c0c0c] min-h-screen">
      <Navbar />

      <header className="px-6 md:px-8 pt-36 pb-12 border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-white/40 text-[10px] uppercase mb-5"
            style={{ ...GEIST, letterSpacing: '0.22em' }}
          >
            &#9642; Legal
          </p>
          <h1
            className="text-[2.4rem] md:text-[3.2rem] text-white leading-[1.08] tracking-tight text-balance"
            style={ALBERT}
          >
            {title}
          </h1>
          {intro && (
            <p className="text-white/55 text-[15px] leading-relaxed mt-6 max-w-2xl" style={GEIST}>
              {intro}
            </p>
          )}
          <p className="text-white/35 text-[12px] mt-8" style={GEIST}>
            Ultima actualizacion: {updatedAt}
          </p>
        </div>
      </header>

      <article
        className="px-6 md:px-8 py-16"
        style={GEIST}
      >
        <div
          className="
            max-w-3xl mx-auto text-white/65 text-[14.5px] leading-[1.75]
            [&>section]:mb-12
            [&_h2]:text-white [&_h2]:text-[1.35rem] [&_h2]:leading-snug [&_h2]:tracking-tight
            [&_h2]:mb-4 [&_h2]:mt-0 [&_h2]:font-normal
            [&_h3]:text-white/90 [&_h3]:text-[1rem] [&_h3]:font-semibold [&_h3]:mt-7 [&_h3]:mb-2.5
            [&_p]:mb-4
            [&_ul]:mb-4 [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:marker:text-[#c69a2c]
            [&_ol]:mb-4 [&_ol]:pl-5 [&_ol]:list-decimal [&_ol]:marker:text-[#c69a2c]
            [&_li]:mb-2 [&_li]:pl-1
            [&_strong]:text-white [&_strong]:font-semibold
            [&_a]:text-[#f8d974] [&_a]:underline [&_a]:underline-offset-2
            hover:[&_a]:text-white [&_a]:transition-colors
            [&_table]:w-full [&_table]:text-[13px] [&_table]:border-collapse
            [&_th]:text-left [&_th]:text-white [&_th]:font-semibold [&_th]:py-2.5 [&_th]:pr-4
            [&_th]:border-b [&_th]:border-white/15 [&_th]:align-top
            [&_td]:py-2.5 [&_td]:pr-4 [&_td]:border-b [&_td]:border-white/8 [&_td]:align-top
          "
        >
          {children}
        </div>
      </article>

      <Footer />
    </main>
  )
}

/** Titulo de seccion numerado, para que el orden sea navegable y citable. */
export function LegalSection({
  n,
  title,
  id,
  children,
}: {
  n: number
  title: string
  id: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 style={ALBERT}>
        <span className="text-[#c69a2c] mr-2.5 tabular-nums">{String(n).padStart(2, '0')}</span>
        {title}
      </h2>
      {children}
    </section>
  )
}
