import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LogoMarquee from './components/LogoMarquee'
import StatsSection from './components/StatsSection'
import WhyTrustSection from './components/WhyTrustSection'
import WellnessSection from './components/WellnessSection'
import ServicesCarousel from './components/ServicesCarousel'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Odontología Estética y Medicina Estética',
  description:
    'Marsa Project: especialistas en blanqueamiento dental, carillas de porcelana, diseño de sonrisa, ortodoncia invisible e implantes dentales. Consulta gratuita — resultados naturales, seguros y personalizados.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />

      <section id="inicio" aria-label="Inicio">
        <HeroSection />
      </section>

      <section id="aliados" aria-label="Nuestros aliados">
        <LogoMarquee />
      </section>

      <section id="estadisticas" aria-label="Nuestras estadísticas">
        <StatsSection />
      </section>

      <section id="por-que-elegirnos" aria-label="Por qué elegirnos">
        <WhyTrustSection />
      </section>

      <section id="nosotros" aria-label="Nosotros">
        <WellnessSection />
      </section>

      <section id="servicios" aria-label="Nuestros servicios">
        <ServicesCarousel />
      </section>

      <section id="testimonios" aria-label="Testimonios">
        <TestimonialsSection />
      </section>

      <section id="faq" aria-label="Preguntas frecuentes">
        <FAQSection />
      </section>

      <section id="contacto" aria-label="Agenda tu cita">
        <CTASection />
      </section>

      <Footer />
    </main>
  )
}
