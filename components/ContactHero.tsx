'use client'

import { MessageSquare, Mail, Phone } from 'lucide-react'

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[50vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a3a5f] via-[#2d5a8f] to-[#526955]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid grid-cols-8 md:grid-cols-12 gap-3 md:gap-4 p-4 md:p-6">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center animate-pulse"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {i % 3 === 0 ? (
                <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-white" />
              ) : i % 3 === 1 ? (
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
              ) : (
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
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
            <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-white" />
            <span className="text-white text-sm md:text-base font-semibold uppercase tracking-wide">
              Nous sommes à votre écoute
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase leading-tight tracking-tight mb-4 md:mb-6">
            CONTACTEZ-NOUS
          </h1>
          
          {/* Subtitle */}
          <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Une question sur le financement de votre projet ? Notre équipe est là pour vous accompagner
          </p>

          {/* Quick Contact */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12">
            <a
              href="tel:+2252720330200"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white text-sm md:text-base font-medium">+225 27 20 33 02 00</span>
            </a>
            
            <a
              href="mailto:contact@sunref-ci.ci"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white text-sm md:text-base font-medium">contact@sunref-ci.ci</span>
            </a>
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

