'use client'

import { Zap, Leaf, Calculator } from 'lucide-react'

export default function FinancementHero() {
  return (
    <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a3a5f] via-[#2d5a8f] to-[#526955]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid grid-cols-8 md:grid-cols-12 gap-3 md:gap-4 p-4 md:p-6">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center animate-pulse"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {i % 3 === 0 ? (
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
              ) : i % 3 === 1 ? (
                <Leaf className="w-5 h-5 md:w-6 md:h-6 text-white" />
              ) : (
                <Calculator className="w-5 h-5 md:w-6 md:h-6 text-white" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 text-center">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 md:mb-8">
            <Calculator className="w-5 h-5 md:w-6 md:h-6 text-white" />
            <span className="text-white text-sm md:text-base font-semibold uppercase tracking-wide">
              Solutions de financement
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase leading-tight tracking-tight mb-4 md:mb-6">
            FINANCEMENT
          </h1>
          
          {/* Subtitle */}
          <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10">
            Deux catégories de projets éligibles pour votre transition énergétique
          </p>

          {/* Categories Cards */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="w-full md:w-auto bg-white/10 backdrop-blur-md rounded-2xl px-6 md:px-8 py-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xl md:text-2xl font-bold text-white uppercase">
                    Efficacité Énergétique
                  </p>
                  <p className="text-sm md:text-base text-white/80">
                    Réduisez votre consommation
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto bg-white/10 backdrop-blur-md rounded-2xl px-6 md:px-8 py-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Leaf className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xl md:text-2xl font-bold text-white uppercase">
                    Énergies Renouvelables
                  </p>
                  <p className="text-sm md:text-base text-white/80">
                    Produisez votre énergie verte
                  </p>
                </div>
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
            fill="rgb(249, 250, 251)"
          />
        </svg>
      </div>
    </section>
  )
}
