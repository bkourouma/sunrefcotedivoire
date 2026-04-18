'use client'

import { Award, Users, Zap, TrendingUp, Building2, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function StatsSection() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Zap,
      value: "150 000 €",
      label: t('stats.stat1'),
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Building2,
      value: "100+",
      label: t('stats.stat2'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      value: "85%",
      label: t('stats.stat3'),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      value: "28%",
      label: t('stats.stat4'),
      color: "from-purple-500 to-pink-500"
    },
  ]

  const features = [
    {
      icon: Users,
      title: t('stats.feature1'),
      description: t('stats.feature1Desc')
    },
    {
      icon: TrendingUp,
      title: t('stats.feature2'),
      description: t('stats.feature2Desc')
    },
  ]
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a3a5f] uppercase mb-4 tracking-tight">
            {t('stats.title')}
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#526955] to-green-400 mx-auto rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 group border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-4 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-[#1a3a5f] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#526955] to-[#3d5243] rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-white/20 rounded-xl p-3 md:p-4 group-hover:bg-white/30 transition-colors">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

