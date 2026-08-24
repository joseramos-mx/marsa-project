'use client'

import { useRef, useState } from 'react'
import { StarRow } from './icons'
import type { Review } from '../../../lib/landings/types'

const GEIST = { fontFamily: 'var(--font-geist-sans)' }

/**
 * Carrusel compacto de reseñas.
 *
 * Usa scroll-snap nativo en lugar de una librería: el desplazamiento lo hace
 * el navegador, funciona con gesto táctil, con rueda y con teclado, y no
 * añade JavaScript de animación. El único estado es cuál está visible, para
 * pintar los puntos.
 *
 * Sin auto-avance a propósito. El brief pide evitar carruseles que se muevan
 * solos, y en una reseña el usuario necesita tiempo para leer.
 */
export default function LandingReviews({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const handleScroll = () => {
    const el = trackRef.current
    if (!el) return
    const idx = Math.round(el.scrollLeft / el.clientWidth)
    if (idx !== active) setActive(idx)
  }

  const goTo = (i: number) => {
    const el = trackRef.current
    if (!el) return
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col gap-5">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        tabIndex={0}
        role="group"
        aria-label="Reseñas de pacientes"
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f8d974]/50 rounded-2xl"
      >
        {reviews.map((r, i) => (
          <article
            key={`${r.author}-${i}`}
            className="snap-start shrink-0 w-full sm:w-1/2 lg:w-1/3 pr-4 last:pr-0"
          >
            <div className="h-full flex flex-col gap-3.5 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center justify-between gap-3">
                <StarRow count={r.rating} />
                {r.date && (
                  <span className="text-white/35 text-[11px]" style={GEIST}>
                    {r.date}
                  </span>
                )}
              </div>

              <p className="text-white/75 text-[14px] leading-relaxed flex-1" style={GEIST}>
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="pt-3 border-t border-white/10">
                <p className="text-white/90 text-[13.5px] font-medium" style={GEIST}>
                  {r.author}
                </p>
                <p className="text-white/40 text-[11px] mt-0.5" style={GEIST}>
                  Reseña en Google
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {reviews.length > 1 && (
        <div className="flex items-center gap-2">
          {reviews.map((r, i) => (
            <button
              key={`dot-${r.author}-${i}`}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ver reseña ${i + 1} de ${reviews.length}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f8d974]/60 ${
                i === active ? 'w-6 bg-[#f8d974]' : 'w-1.5 bg-white/25 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
