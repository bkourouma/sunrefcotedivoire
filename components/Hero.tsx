'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Leaf, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative w-full min-h-[75vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Rectangle 113.png"
          alt="Wind Turbines Background"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a5f]/90 via-[#526955]/85 to-black/80"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-5 py-3 border border-white/20">
              <Leaf className="w-5 h-5 text-white" />
              <span className="text-white text-sm md:text-base font-semibold uppercase tracking-wide">
                {t('hero.badge')}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase leading-tight tracking-tight">
              {t('hero.title')}<br />
              <span className="text-green-400">{t('hero.subtitle')}</span>
            </h1>
            
            {/* Description */}
            <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>

            {/* Key Points */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 max-w-md mx-auto lg:mx-0">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm md:text-base">{t('hero.point1')}</span>
              </div>
              <div className="flex items-center gap-3 text-white bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 max-w-md mx-auto lg:mx-0">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm md:text-base">{t('hero.point2')}</span>
              </div>
              <div className="flex items-center gap-3 text-white bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 max-w-md mx-auto lg:mx-0">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm md:text-base">{t('hero.point3')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link
                href="/financement"
                className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#1a3a5f] font-bold px-6 md:px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="text-sm md:text-base">{t('hero.cta1')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-6 md:px-8 py-4 rounded-xl transition-all duration-300 border border-white/20"
              >
                <span className="text-sm md:text-base">{t('hero.cta2')}</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <TrendingUp className="w-10 h-10 text-green-400 mb-4" />
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">28%</p>
              <p className="text-white/80 text-sm">{t('hero.stat1')}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Leaf className="w-10 h-10 text-green-400 mb-4" />
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">42%</p>
              <p className="text-white/80 text-sm">{t('hero.stat2')}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 col-span-2">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 rounded-full p-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white mb-1">{t('hero.stat3')}</p>
                  <p className="text-white/80 text-sm">{t('hero.stat3Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

