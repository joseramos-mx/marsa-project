'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight } from '@phosphor-icons/react'

const GEIST  = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

const AVATARS = [
  '/patients/IMG_7756.PNG',
  '/patients/IMG_7759.PNG',
  '/patients/IMG_7774.PNG',
  '/patients/IMG_7771.PNG',
]

export default function CTASection() {
  return (
    <section className="bg-white px-3 pb-3">
      <div className="max-w-7xl mx-auto">
      <div
        className="rounded-[28px] overflow-hidden relative"
        style={{ background: 'linear-gradient(135deg, #1a0008 0%, #0c0c0c 60%)' }}
      >
        {/* Doctor image — right side */}
        <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden md:block pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/doctorascta.jpeg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
          {/* fade into bg on the left edge */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0c0c0c 0%, transparent 40%)' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative z-10 max-w-lg flex flex-col gap-7 px-10 py-14 md:px-16 md:py-20"
        >

          {/* Trust badge */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {AVATARS.map((src, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#1a0008] overflow-hidden"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="w-full h-full object-cover object-top" />
                </div>
              ))}
            </div>
            <p className="text-white/55 text-[13px]" style={GEIST}>
              Más de{' '}
              <span className="text-white/80 font-medium">500 pacientes</span>
              {' '}confían en nosotros
            </p>
          </div>

          {/* Heading */}
          <h2
            className="text-white text-[2.8rem] md:text-[3.8rem] leading-[1.05] tracking-tight"
            style={ALBERT}
          >
            Tu mejor sonrisa<br />
            <span style={{ color: '#c18845' }}>te espera.</span>
          </h2>

          {/* Body */}
          <p
            className="text-white/45 text-[14px] leading-relaxed max-w-sm"
            style={GEIST}
          >
            Especialistas certificados, tecnología avanzada y un ambiente diseñado
            para tu comodidad. Agenda hoy y descubre el tratamiento ideal para ti.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="https://wa.me/527225356109"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-black pl-6 pr-1.5 py-1.5 rounded-full hover:bg-white/90 transition-colors"
            >
              <span
                className="text-[11px] font-medium uppercase tracking-[0.12em] pr-3"
                style={GEIST}
              >
                Agenda tu cita
              </span>
              <span className="w-8 h-8 rounded-full bg-[#c18845] flex items-center justify-center shrink-0">
                <ArrowUpRight size={15} weight="bold" className="text-black" />
              </span>
            </Link>

            <Link
              href="https://wa.me/527225356109"
              className="inline-flex items-center gap-2 text-white/60 text-[12px] hover:text-white/90 transition-colors px-3"
              style={GEIST}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.847L.057 23.63a.75.75 0 00.918.919l5.878-1.49A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.69 9.69 0 01-4.953-1.358l-.355-.212-3.686.934.977-3.588-.232-.369A9.698 9.698 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              WhatsApp
            </Link>
          </div>

        </motion.div>
      </div>
      </div>
    </section>
  )
}
