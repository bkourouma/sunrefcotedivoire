'use client'

import Image from 'next/image'
import { CreditCard, Wrench, Gift, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProgramOfferSection() {
  const { t } = useLanguage()

  const offers = [
    {
      icon: CreditCard,
      title: t('program.offer1'),
      description: t('program.offer1Desc'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Wrench,
      title: t('program.offer2'),
      description: t('program.offer2Desc'),
      subItems: [
        t('program.offer2Item1'),
        t('program.offer2Item2'),
        t('program.offer2Item3'),
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Gift,
      title: t('program.offer3'),
      description: t('program.offer3Desc'),
      color: "from-orange-500 to-orange-600"
    },
  ]
  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a3a5f] uppercase mb-4 tracking-tight">
            {t('program.title')}
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#526955] to-green-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-[#363E4A] font-semibold max-w-4xl mx-auto">
            {t('program.subtitle')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8">
            {offers.map((offer, index) => {
              const Icon = offer.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 group border border-gray-100"
                >
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className={`flex-shrink-0 bg-gradient-to-br ${offer.color} rounded-xl p-3 md:p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1a3a5f] mb-3 md:mb-4">
                        {offer.title}
                      </h3>
                      <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-3">
                        {offer.description}
                      </p>
                      {offer.subItems && (
                        <ul className="space-y-2 md:space-y-3 mt-4">
                          {offer.subItems.map((item, subIndex) => (
                            <li key={subIndex} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              </div>
                              <span className="text-sm md:text-base text-gray-700 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Call to Action Button */}
            <div className="relative pt-4">
              <Link 
                href="/financement" 
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#363E4A] to-[#2a3138] hover:from-[#2a3138] hover:to-[#1f252b] text-white font-semibold px-6 md:px-8 py-4 md:py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <span className="text-sm md:text-base lg:text-lg">{t('program.cta')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/Image1.jpg"
              alt="Programme SUNREF - Transition énergétique"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              quality={90}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#526955]/90 via-[#526955]/40 to-transparent"></div>
            
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
              <div className="space-y-4">
                <div className="inline-block bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 border border-white/30">
                  <p className="text-white text-sm md:text-base font-semibold">{t('program.imageBadge')}</p>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  {t('program.imageTitle')}
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  {t('program.imageDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
