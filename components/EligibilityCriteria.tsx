'use client'

import Image from 'next/image'
import { Download, FileText, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

const criteriaList = [
  {
    title: 'Localisation',
    description: 'Le projet doit être réalisé en Côte d\'Ivoire',
    icon: CheckCircle,
  },
  {
    title: 'Normes & Réglementations',
    description: 'Respect des lois environnementales et sociales du pays',
    icon: CheckCircle,
  },
  {
    title: 'Autorisations',
    description: 'Disposer de toutes les autorisations administratives nécessaires',
    icon: CheckCircle,
  },
  {
    title: 'Passation de marchés',
    description: 'Respect des règles de passation de marchés',
    icon: CheckCircle,
  },
]

export default function EligibilityCriteria() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a3a5f] uppercase mb-4 tracking-tight">
            CRITÈRES D&apos;ÉLIGIBILITÉ
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#526955] to-[#1a3a5f] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-base md:text-lg mt-6 max-w-3xl mx-auto">
            Votre projet doit répondre aux critères suivants pour être éligible au financement SUNREF
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Side - Image Background */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 group">
            <Image
              src="/images/image2.jpg"
              alt="Critères d'éligibilité - Énergie verte"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              quality={90}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5f]/80 via-transparent to-transparent"></div>
            
            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <p className="text-white font-bold text-lg md:text-xl">
                  Des projets verts pour un avenir durable
                </p>
                <p className="text-white/80 text-sm md:text-base mt-2">
                  Ensemble, construisons la transition énergétique de la Côte d'Ivoire
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content Panel */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            
            {/* Criteria Cards */}
            <div className="space-y-4">
              {criteriaList.map((criterion, index) => {
                const IconComponent = criterion.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#526955]/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#526955] to-[#3d5243] rounded-lg p-3 flex-shrink-0">
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-[#1a3a5f] mb-2">
                          {criterion.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {criterion.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Important Notice */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-5 md:p-6 border-l-4 border-orange-500">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-orange-800 font-semibold text-sm md:text-base mb-2">
                    Information importante
                  </p>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Retrouvez l&apos;intégralité des critères d&apos;éligibilité, des conditions de financement et de la liste complète des technologies éligibles dans le document PDF.
                  </p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="pt-4">
              <Link
                href="#"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#1a3a5f] to-[#2d5a8f] hover:from-[#2a4a6f] hover:to-[#3d6a9f] text-white font-semibold px-6 md:px-8 py-4 md:py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl w-full md:w-auto justify-center"
              >
                <FileText className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-sm md:text-base lg:text-lg">
                  Télécharger les critères d&apos;éligibilité (PDF)
                </span>
                <Download className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
