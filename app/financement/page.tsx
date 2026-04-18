import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FinancementHero from '@/components/FinancementHero'
import ProjectCycle from '@/components/ProjectCycle'
import EligibilityCriteria from '@/components/EligibilityCriteria'

export const metadata: Metadata = {
  title: 'Financement - SUNREF Côte d\'Ivoire',
  description: 'Découvrez les deux catégories de projets éligibles : Efficacité Énergétique & Énergies Renouvelables',
}

export default function FinancementPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <FinancementHero />
      <ProjectCycle />
      <EligibilityCriteria />
      <Footer />
    </main>
  )
}

