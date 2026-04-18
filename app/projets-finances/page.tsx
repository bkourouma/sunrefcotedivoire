import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectsFinancesHero from '@/components/ProjectsFinancesHero'
import ProjectsFinancesContent from '@/components/ProjectsFinancesContent'

export const metadata: Metadata = {
  title: 'Projets Financés - SUNREF Côte d\'Ivoire',
  description: 'Découvrez les projets d\'énergie verte financés par le programme SUNREF Côte d\'Ivoire',
}

export default function ProjetsFinancesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProjectsFinancesHero />
      <ProjectsFinancesContent />
      <Footer />
    </main>
  )
}

