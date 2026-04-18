import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import StatsSection from '@/components/StatsSection'
import ProgramOfferSection from '@/components/ProgramOfferSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <StatsSection />
      <ProgramOfferSection />
      <CTASection />
      <Footer />
    </main>
  )
}

