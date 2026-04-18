import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PartenairesHero from '@/components/PartenairesHero'
import PartnersContent from '@/components/PartnersContent'
import TechnicalAssistance from '@/components/TechnicalAssistance'
import PartnerBanks from '@/components/PartnerBanks'
import ProjectFlowDiagram from '@/components/ProjectFlowDiagram'

export const metadata: Metadata = {
  title: 'Partenaires - SUNREF Côte d\'Ivoire',
  description: 'Découvrez les partenaires du programme SUNREF Côte d\'Ivoire',
}

export default function PartenairesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PartenairesHero />
      <PartnersContent />
      <TechnicalAssistance />
      <PartnerBanks />
      <ProjectFlowDiagram />
      <Footer />
    </main>
  )
}

