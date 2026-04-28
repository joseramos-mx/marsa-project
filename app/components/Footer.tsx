'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import { motion } from 'motion/react'

function CrossMark({ style, className = '' }: { style: CSSProperties; className?: string }) {
  return (
    <div className={`absolute w-5 h-5 ${className}`} style={style}>
      <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-px bg-white/30" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px bg-white/30" />
    </div>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black pt-20 pb-10 px-8 relative overflow-hidden" style={{ fontFamily: 'var(--font-albert-sans), sans-serif' }}>
      <div className="max-w-6xl mx-auto relative border-t border-white/15 pt-16">
        
        {/* Corner Marks */}
        <CrossMark style={{ top: 0, left: 0, transform: 'translate(-50%, -50%)' }} />
        <CrossMark style={{ top: 0, right: 0, transform: 'translate(50%, -50%)' }} />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Column 1: Logo & Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <Link href="/" aria-label="MARSA Home" className="inline-block w-fit hover:opacity-80 transition-opacity">
              {/* Note: In your actual app, you might want to adjust the width/height to match your exact logo aspect ratio */}
              <Image src="/marsa%20logo.png" alt="MARSA Logo" width={150} height={40} className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-sm">
              Clínica especializada en odontología estética y medicina estética. Resultados naturales, seguros y personalizados para revelar tu mejor versión.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            <h4 className="text-white uppercase tracking-widest text-xs font-semibold">Enlaces Rápidos</h4>
            <nav className="flex flex-col gap-3 text-sm font-light text-white/55">
              <Link href="#inicio" className="hover:text-white hover:translate-x-1 transition-all w-fit">Inicio</Link>
              <Link href="#servicios" className="hover:text-white hover:translate-x-1 transition-all w-fit">Servicios</Link>
              <Link href="#nosotros" className="hover:text-white hover:translate-x-1 transition-all w-fit">Nosotros</Link>
              <Link href="#aliados" className="hover:text-white hover:translate-x-1 transition-all w-fit">Aliados</Link>
              <Link href="#faq" className="hover:text-white hover:translate-x-1 transition-all w-fit">FAQ</Link>
            </nav>
          </motion.div>

          {/* Column 3: Contact & Social */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            <h4 className="text-white uppercase tracking-widest text-xs font-semibold">Contacto</h4>
            <div className="flex flex-col gap-3 text-sm font-light text-white/55">
              <p className="hover:text-white transition-colors cursor-default">Av. Principal 123, Ciudad</p>
              <a href="mailto:contacto@marsaproject.com" className="hover:text-white transition-colors">contacto@marsaproject.com</a>
              <a href="tel:+5215555555555" className="hover:text-white transition-colors">+52 1 55 5555 5555</a>
            </div>
            
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all" aria-label="WhatsApp">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/30 text-xs font-light">
            &copy; {currentYear} Marsa Project. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs font-light flex items-center gap-1">
            Hecho con <span className="text-white/50">🤍</span> para tu sonrisa.
          </p>
        </motion.div>

      </div>
    </footer>
  )
}
