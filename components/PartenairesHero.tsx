'use client'

import { Users, Globe } from 'lucide-react'

export default function PartenairesHero() {
  return (
    <section className="relative w-full min-h-[45vh] md:min-h-[55vh] lg:min-h-[65vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#526955] via-[#3d5243] to-[#1a3a5f]">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid grid-cols-8 md:grid-cols-12 gap-3 md:gap-4 p-4 md:p-6">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center animate-pulse"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {i % 2 === 0 ? (
                <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
              ) : (
                <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-24 text-center">
        <div>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 md:mb-8">
            <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
            <span className="text-white text-sm md:text-base font-semibold uppercase tracking-wide">
              Ensemble pour la transition énergétique
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase leading-tight tracking-tight mb-4 md:mb-6">
            NOS PARTENAIRES
          </h1>
          
          <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Des institutions engagées pour un avenir durable en Côte d&apos;Ivoire
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-8 md:mt-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 md:px-6 py-3 md:py-4 hover:bg-white/20 transition-all duration-300">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
              <div className="text-left">
                <p className="text-2xl md:text-3xl font-bold text-white">3</p>
                <p className="text-xs md:text-sm text-white/80 uppercase">Partenaires</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 md:px-6 py-3 md:py-4 hover:bg-white/20 transition-all duration-300">
              <Globe className="w-6 h-6 md:w-8 md:h-8 text-white" />
              <div className="text-left">
                <p className="text-2xl md:text-3xl font-bold text-white">∞</p>
                <p className="text-xs md:text-sm text-white/80 uppercase">Engagement</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16 lg:h-20"
          fill="none"
        >
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="rgb(255, 255, 255)"
          />
        </svg>
      </div>
    </section>
  )
}
