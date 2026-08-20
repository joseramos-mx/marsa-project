import { setRequestLocale } from "next-intl/server";
import HomeFaqSchema from "../components/seo/HomeFaqSchema";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LogoMarquee from "../components/LogoMarquee";
import LeadershipSection from "../components/LeadershipSection";
import StatsSection from "../components/StatsSection";
import WhyTrustSection from "../components/WhyTrustSection";
import WellnessSection from "../components/WellnessSection";
import SpecialtiesSection from "../components/SpecialtiesSection";
import ServicesCarousel from "../components/ServicesCarousel";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-[#0c0c0c]">
      {/* El FAQPage se emite aqui, no en el layout: solo la home muestra este FAQ. */}
      <HomeFaqSchema locale={locale} />
      <Navbar />

      <section id="inicio">
        <HeroSection />
      </section>

      <section id="aliados">
        <LogoMarquee />
      </section>

      <section id="liderazgo">
        <LeadershipSection />
      </section>

      <section id="estadisticas">
        <StatsSection />
      </section>

      <section id="por-que-elegirnos">
        <WhyTrustSection />
      </section>

      <section id="nosotros">
        {/* Anchor para Ángulo B — rehabilitación */}
        <div id="rehabilitacion" aria-hidden="true" />
        <WellnessSection />
      </section>

      <section id="especialidades">
        <SpecialtiesSection />
      </section>

      <section id="servicios">
        <ServicesCarousel />
      </section>

      <section id="testimonios">
        <TestimonialsSection />
      </section>

      <section id="faq">
        {/* Anchor para Ángulo A — urgencias (la FAQ incluye la pregunta de urgencia) */}
        <div id="urgencias" aria-hidden="true" />
        <FAQSection />
      </section>

      <section id="contacto">
        <CTASection />
      </section>

      {/* Anchor de ubicación — Footer contiene la dirección */}
      <div id="ubicacion" aria-hidden="true" />
      <Footer />
    </main>
  );
}
