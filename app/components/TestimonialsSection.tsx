'use client'

import { motion } from 'motion/react'

const testimonials = [
  { id: '1', link: 'https://www.instagram.com/reel/DSfOTsYFWwP/embed/?theme=dark' },
  { id: '2', link: 'https://www.instagram.com/reel/DScpauAEq5N/embed/?theme=dark' },
  { id: '3', link: 'https://www.instagram.com/reel/DSaEnJtkbZ5/embed/?theme=dark' },
]

export default function TestimonialsSection() {
  return (
    <section
      className="bg-black py-24 px-8 relative overflow-hidden"
      style={{ fontFamily: 'var(--font-albert-sans), sans-serif' }}
    >
      {/* Background glow for aesthetics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-xl font-light mb-4"
          >
            Nuestros <strong className="font-semibold text-[#d4af37]">Testimonios</strong>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-sm max-w-md mx-auto"
          >
            Descubre las historias de éxito y las sonrisas transformadas de nuestros pacientes.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
          {testimonials.map((test, i) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[340px] mx-auto"
            >
              {/* Gold gradient frame to make it highly personalized and premium */}
              <div className="absolute -inset-[2px] bg-gradient-to-b from-[#d4af37] via-white/10 to-transparent rounded-[26px] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-[580px] w-full rounded-[24px] overflow-hidden bg-black flex items-center justify-center">
                {/* Loader or background before iframe loads */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#111]">
                  <div className="w-8 h-8 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin" />
                </div>

                {/* Instagram Iframe focuses purely on the video */}
                {/* We make the iframe taller than the container to hide the bottom bar containing likes */}
                <iframe
                  src={test.link}
                  className="relative z-10 w-full h-[calc(100%+54px)] border-0 bg-transparent"
                  style={{ top: '-1px' }}
                  scrolling="no"
                  allowTransparency={true}
                  allow="encrypted-media"
                  title={`Testimonio Marsa Project ${test.id}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
