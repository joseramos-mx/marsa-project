import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LogoMarquee from './components/LogoMarquee'
import WhyTrustSection from './components/WhyTrustSection'
import WellnessSection from './components/WellnessSection'
import ServicesCarousel from './components/ServicesCarousel'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <HeroSection />
      <LogoMarquee />
      <WhyTrustSection />
      <WellnessSection />
      <ServicesCarousel />
      <FAQSection />
      <CTASection />
    </main>
  )
}
