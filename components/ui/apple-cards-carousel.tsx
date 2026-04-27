'use client'

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from 'react'
import { cn } from '@/lib/utils'

/* ─── Types ─── */
export type CardData = {
  src: string
  title: string
  category: string
  description: string
}

/* ─── Context ─── */
export const CarouselContext = createContext<{ currentIndex: number }>({
  currentIndex: 0,
})

/* ─── Arrow icons ─── */
function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ─── Carousel ─── */
export function Carousel({
  items,
  initialScroll = 0,
}: {
  items: React.ReactElement[]
  initialScroll?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  /* drag state */
  const dragging = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft = initialScroll
      check()
    }
  }, [initialScroll])

  function check() {
    if (!ref.current) return
    const { scrollLeft, scrollWidth, clientWidth } = ref.current
    setCanLeft(scrollLeft > 0)
    setCanRight(scrollLeft < scrollWidth - clientWidth - 1)
  }

  function scrollBy(px: number) {
    ref.current?.scrollBy({ left: px, behavior: 'smooth' })
  }

  /* mouse-drag handlers for desktop */
  function onMouseDown(e: React.MouseEvent) {
    dragging.current = true
    startX.current = e.pageX
    startScroll.current = ref.current?.scrollLeft ?? 0
    if (ref.current) ref.current.style.scrollBehavior = 'auto'
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!dragging.current || !ref.current) return
    e.preventDefault()
    ref.current.scrollLeft = startScroll.current - (e.pageX - startX.current)
  }
  function stopDrag() {
    dragging.current = false
    if (ref.current) ref.current.style.scrollBehavior = 'smooth'
  }

  return (
    <CarouselContext.Provider value={{ currentIndex }}>
      <div className="relative w-full select-none">

        {/* ── Nav arrows: square boxes, top-left ── */}
        <div className="flex gap-2 mb-5 pl-1">
          <button
            onClick={() => scrollBy(-360)}
            disabled={!canLeft}
            className={cn(
              'flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-opacity hover:border-white/50',
              !canLeft && 'opacity-30 cursor-not-allowed'
            )}
            aria-label="Anterior"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => scrollBy(360)}
            disabled={!canRight}
            className={cn(
              'flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-opacity hover:border-white/50',
              !canRight && 'opacity-30 cursor-not-allowed'
            )}
            aria-label="Siguiente"
          >
            <ArrowRight />
          </button>
        </div>

        {/* ── Scrollable track ── */}
        <div
          ref={ref}
          onScroll={check}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          className="flex overflow-x-scroll overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        >
          <div className="flex gap-4 pl-1 pr-[8%] md:pr-[15%]">
            {items.map((item, i) => (
              <div key={i} className="shrink-0">
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </CarouselContext.Provider>
  )
}

/* ─── Card ─── */
export function Card({ card }: { card: CardData }) {
  return (
    <div className="relative h-[420px] w-[240px] md:h-[480px] md:w-[300px] overflow-hidden rounded-3xl">

      {/* Photo */}
      <img
        src={card.src}
        alt={card.title}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
        loading="lazy"
        decoding="async"
      />

      {/* Gradient: transparent top → black bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Text block */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
        <span className="text-[11px] uppercase tracking-widest text-white/50 font-medium">
          {card.category}
        </span>
        <h3 className="text-white text-lg font-semibold leading-snug">
          {card.title}
        </h3>
        <p className="text-white/55 text-xs leading-relaxed line-clamp-3">
          {card.description}
        </p>
      </div>

    </div>
  )
}
