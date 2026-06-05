import { setRequestLocale } from "next-intl/server";
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
        <FAQSection />
      </section>

      <section id="contacto">
        <CTASection />
      </section>

      <Footer />
    </main>
  );
}
