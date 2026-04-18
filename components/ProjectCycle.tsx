'use client'

import { CheckCircle, XCircle, ArrowDown, ArrowRight } from 'lucide-react'

const actors = [
  { name: 'Porteur de projet', color: 'bg-green-500', borderColor: 'border-green-500' },
  { name: 'Assistance technique', color: 'bg-orange-500', borderColor: 'border-orange-500' },
  { name: 'Banque partenaire', color: 'bg-yellow-500', borderColor: 'border-yellow-500' },
  { name: 'Consultant vérificateur (CV)', color: 'bg-blue-500', borderColor: 'border-blue-500' },
]

const steps = [
  {
    id: 1,
    title: 'ETAPE - 1',
    subtitle: 'Prise de contact initiale',
    actors: ['Porteur de projet', 'Assistance technique'],
    description: 'Premier contact entre le porteur de projet et l\'équipe d\'assistance technique',
  },
  {
    id: 2,
    title: 'ETAPE - 2',
    subtitle: 'Analyse préliminaire',
    actors: ['Porteur de projet', 'Assistance technique'],
    description: 'Évaluation initiale de la faisabilité technique et financière du projet',
  },
  {
    id: 3,
    title: 'ETAPE - 3',
    subtitle: 'Revue détaillée du projet',
    actors: ['Porteur de projet', 'Assistance technique'],
    hasEligibility: true,
    description: 'Analyse approfondie et vérification des critères d\'éligibilité',
  },
  {
    id: 4,
    title: 'ETAPE - 4',
    subtitle: 'Financement et mise en œuvre',
    actors: ['Porteur de projet', 'Assistance technique', 'Banque partenaire'],
    description: 'Accord de financement et démarrage de la réalisation du projet',
  },
  {
    id: 5,
    title: 'ETAPE - 5',
    subtitle: 'Vérification',
    actors: ['Consultant vérificateur (CV)'],
    description: 'Contrôle final et validation de la conformité du projet réalisé',
  },
]

const eligibilityCriteria = [
  'ELIGIBLE LEME',
  'BUDGET < 150 000 EUR',
  'LISTE TECHNOLOGIES',
  'STANDARDS',
]

export default function ProjectCycle() {
  return (
    <section className="w-full bg-gradient-to-b from-[#363E4A] to-[#2a3138] py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-4 tracking-tight">
            CYCLE DE PROJET
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#526955] to-[#1a3a5f] mx-auto rounded-full"></div>
          <p className="text-white/80 text-base md:text-lg mt-6 max-w-3xl mx-auto">
            Découvrez les 5 étapes clés pour concrétiser votre projet d'énergie verte
          </p>
        </div>

        {/* Actors Legend */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16">
          {actors.map((actor, index) => (
            <div
              key={index}
              className={`border-2 ${actor.borderColor} border-dashed rounded-xl p-4 text-center bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300`}
            >
              <div className={`w-4 h-4 ${actor.color} rounded-full mx-auto mb-2 shadow-lg`}></div>
              <p className="text-white text-xs md:text-sm font-semibold leading-tight">
                {actor.name.split(' ').map((word, i) => (
                  <span key={i}>
                    {word}
                    {i < actor.name.split(' ').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        {/* Project Cycle Flow */}
        <div className="relative">
          <div className="space-y-6 md:space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 md:gap-6">
                    {/* Step Number and Title */}
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-[#526955] to-[#3d5243] rounded-xl px-4 md:px-6 py-3 md:py-4 shadow-lg">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                          {step.title}
                        </h3>
                        <p className="text-sm md:text-base lg:text-lg text-white/90 mt-1">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="flex-1">
                      <p className="text-white/80 text-sm md:text-base mb-4">
                        {step.description}
                      </p>
                      
                      {/* Actors Involved */}
                      <div className="flex flex-wrap items-center gap-3 md:gap-4">
                        {step.actors.map((actorName, actorIndex) => {
                          const actor = actors.find(a => a.name === actorName)
                          return (
                            <div
                              key={actorIndex}
                              className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg border-2 ${actor?.borderColor} border-dashed bg-white/5 hover:bg-white/10 transition-colors duration-200`}
                            >
                              <div className={`w-3 h-3 ${actor?.color} rounded-full shadow-sm`}></div>
                              <span className="text-white text-xs md:text-sm font-medium">
                                {actorName}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Eligibility Check (only for step 3) */}
                  {step.hasEligibility && (
                    <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/20">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-8">
                        {/* NO Path */}
                        <div className="flex items-center gap-3 bg-red-500/10 rounded-xl px-4 py-3 border border-red-500/30">
                          <XCircle className="w-6 h-6 md:w-8 md:h-8 text-red-400 flex-shrink-0" />
                          <span className="text-white font-bold text-lg md:text-xl">NON</span>
                          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white/70" />
                        </div>

                        {/* Eligibility Box */}
                        <div className="flex-1 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border-2 border-yellow-500 border-dashed">
                          <p className="text-white font-bold text-base md:text-lg mb-4 uppercase">
                            Critères d'éligibilité
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {eligibilityCriteria.map((criterion, critIndex) => (
                              <div
                                key={critIndex}
                                className="flex items-center gap-2 text-white text-sm md:text-base bg-white/5 rounded-lg px-3 py-2"
                              >
                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 flex-shrink-0" />
                                <span>{criterion}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* YES Path */}
                        <div className="flex items-center gap-3 bg-green-500/10 rounded-xl px-4 py-3 border border-green-500/30">
                          <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-400 flex-shrink-0" />
                          <span className="text-white font-bold text-lg md:text-xl">OUI</span>
                          <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-white/70" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 md:my-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
                      <ArrowDown className="w-8 h-8 md:w-10 md:h-10 text-white animate-bounce" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
