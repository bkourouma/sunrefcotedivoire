'use client'

import React from 'react'
import { Target, Lightbulb, Building2, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()

  const objectives = [
    {
      icon: Lightbulb,
      text: t('about.objective1'),
    },
    {
      icon: Building2,
      text: t('about.objective2'),
    },
    {
      icon: Target,
      text: t('about.objective3'),
    },
    {
      icon: TrendingUp,
      text: t('about.objective4'),
    },
  ]
  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        
        {/* Introduction Card - Green Background */}
        <div className="bg-gradient-to-br from-[#526955] to-[#3d5243] rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 mb-16 md:mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-4">
                {t('about.title')}
              </h2>
              <div className="h-1 w-32 bg-white/30 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6 md:space-y-8 text-white text-sm md:text-base lg:text-lg leading-relaxed">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <p className="text-left" dangerouslySetInnerHTML={{ __html: t('about.text1') }} />
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <p className="text-left" dangerouslySetInnerHTML={{ __html: t('about.text2') }} />
              </div>
            </div>
          </div>
        </div>

        {/* Objectives Section - Dark Background */}
        <div className="bg-gradient-to-br from-[#363E4A] to-[#2a3138] rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight mb-4">
                {t('about.objectivesTitle')}
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[#526955] to-green-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {objectives.map((objective, index) => {
                const Icon = objective.icon
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4 md:gap-5">
                      <div className="flex-shrink-0 bg-gradient-to-br from-[#526955] to-green-500 rounded-xl p-3 md:p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed flex-1 pt-1">
                        {objective.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-10 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border-l-4 border-green-400">
              <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed text-center">
                {t('about.objectivesNote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
