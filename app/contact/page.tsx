import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactHero from '@/components/ContactHero'
import ContactContent from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'Contact - SUNREF Côte d\'Ivoire',
  description: 'Contactez notre équipe pour plus d\'informations sur le financement de vos projets d\'énergie verte',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactContent />
      <Footer />
    </main>
  )
}

