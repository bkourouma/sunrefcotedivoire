import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ActualitesHero from '@/components/ActualitesHero'
import ActualitesContent from '@/components/ActualitesContent'

export const metadata: Metadata = {
  title: 'Actualités - SUNREF Côte d\'Ivoire',
  description: 'Suivez les dernières actualités et événements du programme SUNREF Côte d\'Ivoire',
}

export default function ActualitesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ActualitesHero />
      <ActualitesContent />
      <Footer />
    </main>
  )
}

