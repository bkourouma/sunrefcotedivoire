'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Mail, FileText } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CTASection() {
  const { t } = useLanguage()
  return (
    <section className="w-full bg-gradient-to-br from-[#1a3a5f] via-[#526955] to-[#363E4A] py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-6 tracking-tight">
            {t('cta.title')}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('cta.description')}
          </p>
        </div>

        {/* CTA Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Contact Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {t('ctaSection.callUs')}
              </h3>
              <p className="text-white/80 text-sm md:text-base mb-4">
                {t('ctaSection.callUsDesc')}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white hover:text-green-300 font-semibold transition-colors"
              >
                <span>{t('ctaSection.callUsLink')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {t('ctaSection.emailUs')}
              </h3>
              <p className="text-white/80 text-sm md:text-base mb-4">
                {t('ctaSection.emailUsDesc')}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white hover:text-green-300 font-semibold transition-colors"
              >
                <span>{t('ctaSection.emailUsLink')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Documentation Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {t('ctaSection.documentation')}
              </h3>
              <p className="text-white/80 text-sm md:text-base mb-4">
                {t('ctaSection.documentationDesc')}
              </p>
              <Link
                href="/financement"
                className="inline-flex items-center gap-2 text-white hover:text-green-300 font-semibold transition-colors"
              >
                <span>{t('ctaSection.documentationLink')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#1a3a5f] font-bold px-8 md:px-12 py-4 md:py-6 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 text-base md:text-lg"
          >
            <span>{t('cta.button')}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

