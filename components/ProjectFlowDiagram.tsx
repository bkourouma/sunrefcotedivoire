'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'

export default function ProjectFlowDiagram() {
  return (
    <section className="w-full bg-[#363E4A] py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Diagram Container */}
        <div className="relative bg-[#2a3138] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 overflow-hidden">
          
          {/* Top Row - Funders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* AFD */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-200 rounded-xl p-6 md:p-8 flex items-center gap-4 md:gap-6"
            >
              <Image
                src="/images/AFD.png"
                alt="AFD"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <p className="text-lg md:text-xl font-bold text-[#1a3a5f] uppercase">
                  AFD
                </p>
                <p className="text-sm md:text-base text-gray-700 uppercase">
                  AGENCE FRANÇAISE DE DÉVELOPPEMENT
                </p>
              </div>
            </motion.div>

            {/* Union Européenne */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-200 rounded-xl p-6 md:p-8 flex items-center gap-4 md:gap-6"
            >
              <Image
                src="/images/flag.jpg"
                alt="Union Européenne"
                width={80}
                height={80}
                className="object-contain"
              />
              <div>
                <p className="text-lg md:text-xl font-bold text-[#1a3a5f] uppercase">
                  UNION EUROPÉENNE
                </p>
              </div>
            </motion.div>
          </div>

          {/* Arrows from Funders to Banks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-4">
            <div className="flex flex-col items-center">
              <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-white mb-2" />
              <span className="text-white text-xs md:text-sm font-semibold bg-[#526955] px-3 py-1 rounded-full">
                Ligne de crédit verte
              </span>
            </div>
            <div className="flex flex-col items-center">
              <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-white mb-2" />
              <span className="text-white text-xs md:text-sm font-semibold bg-[#526955] px-3 py-1 rounded-full">
                Prime d&apos;investissement
              </span>
            </div>
          </div>

          {/* Main Flow - Central Column */}
          <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
            
            {/* Left Column - Management */}
            <div className="md:w-1/3 space-y-4 md:space-y-6">
              {/* Maîtrise d'Ouvrage */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-200 rounded-xl p-4 md:p-6 relative"
              >
                <p className="text-xs md:text-sm font-bold text-gray-600 uppercase mb-2">
                  MAITRISE D&apos;OUVRAGE
                </p>
                <p className="text-base md:text-lg font-bold text-[#1a3a5f] uppercase">
                  CGECI
                </p>
                {/* Arrow to central flow */}
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </motion.div>

              {/* Assistance Technique */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-200 rounded-xl p-4 md:p-6 relative"
              >
                <p className="text-xs md:text-sm font-bold text-gray-600 uppercase mb-2">
                  ASSISTANCE TECHNIQUE
                </p>
                <p className="text-sm md:text-base text-[#1a3a5f] font-semibold">
                  Groupement IED-BURGEAP
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  (GINGER INTERNATIONAL)
                </p>
                {/* Arrow to central flow */}
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </div>

            {/* Central Flow */}
            <div className="md:w-2/3 space-y-6 md:space-y-8">
              {/* Banques Partenaires */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-200 rounded-xl p-6 md:p-8 text-center"
              >
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a3a5f] uppercase">
                  BANQUES PARTENAIRES
                </p>
              </motion.div>

              <div className="flex flex-col items-center">
                <ArrowDown className="w-8 h-8 md:w-10 md:h-10 text-white mb-2" />
                <span className="text-white text-xs md:text-sm font-semibold bg-[#526955] px-3 py-1 rounded-full">
                  Prêts éligibles
                </span>
              </div>

              {/* Porteur de Projet */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-200 rounded-xl p-6 md:p-8 text-center"
              >
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a3a5f] uppercase">
                  PORTEUR DE PROJET
                </p>
              </motion.div>

              <div className="flex flex-col items-center">
                <ArrowDown className="w-8 h-8 md:w-10 md:h-10 text-white mb-2" />
                <span className="text-white text-xs md:text-sm font-semibold bg-[#526955] px-3 py-1 rounded-full">
                  Mise en oeuvre
                </span>
              </div>

              {/* Projets Eligibles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#1a3a5f] rounded-xl p-6 md:p-8 text-center"
              >
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase">
                  PROJETS ELIGIBLES
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

