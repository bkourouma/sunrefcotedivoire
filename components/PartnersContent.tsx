'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Building2, MapPin, Target, TrendingUp, Users, Globe } from 'lucide-react'

const funders = [
  {
    name: 'Union Européenne',
    logo: '/images/flag.jpg',
    description: 'L\'Union européenne, via la Commission européenne et ses 27 États membres, est le premier bailleur au monde. En 2020, elle a fourni 66,8 milliards d\'euros d\'aide publique au développement, représentant environ 46% de l\'aide mondiale.',
    highlights: [
      { icon: Globe, text: '27 États membres' },
      { icon: Target, text: 'Premier bailleur mondial' },
      { icon: TrendingUp, text: '66,8 Mds € en 2020' },
    ],
    mission: 'Acteur central pour la réalisation des Objectifs de développement durable (ODD) des Nations unies.',
  },
  {
    name: 'AFD',
    fullName: 'Agence Française de Développement',
    logo: '/images/AFD.png',
    description: 'Institution financière publique française qui met en œuvre la politique de développement de la France. L\'AFD agit dans de nombreux secteurs : énergie, santé, biodiversité, eau, numérique, formation professionnelle...',
    highlights: [
      { icon: Globe, text: 'Présence dans 115 pays' },
      { icon: Target, text: 'Lutte contre la pauvreté' },
      { icon: TrendingUp, text: 'Développement durable' },
    ],
    mission: 'Combattre la pauvreté et favoriser le développement durable dans les pays en développement et les départements d\'outre-mer français.',
  },
]

const projectManagement = {
  name: 'CGECI',
  fullName: 'Confédération Générale des Entreprises de Côte d\'Ivoire',
  slogan: 'Le Patronat Ivoirien',
  logo: '/images/Logo CGECI.jpg',
  description: 'La Maîtrise d\'Ouvrage du programme SUNREF est assurée par la CGECI, principale organisation patronale de Côte d\'Ivoire. La CGECI représente et défend les intérêts du secteur privé ivoirien tout en contribuant au développement économique du pays.',
  highlights: [
    { icon: Building2, text: 'Organisation patronale de référence' },
    { icon: Users, text: 'Représente le secteur privé' },
    { icon: Target, text: 'Maîtrise d\'ouvrage SUNREF' },
  ],
  contact: {
    address: 'La Maison de l\'Entreprise, Plateau',
    postal: '01 BP 8666 Abidjan 01 Abidjan',
  },
}

export default function PartnersContent() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section: LES BAILLEURS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-24"
        >
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a3a5f] uppercase tracking-tight mb-4">
                LES BAILLEURS
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[#526955] to-[#1a3a5f] mx-auto rounded-full"></div>
            </motion.div>
            
            <p className="text-gray-600 text-base md:text-lg lg:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              Le programme SUNREF est financé par deux institutions majeures du développement international
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {funders.map((funder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Logo Section */}
                  <div className="lg:w-1/3 bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#526955] to-[#1a3a5f] rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <Image
                        src={funder.logo}
                        alt={funder.name}
                        width={funder.name === 'Union Européenne' ? 180 : 130}
                        height={funder.name === 'Union Européenne' ? 130 : 130}
                        className="object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {funder.fullName && (
                      <div className="mt-6 text-center">
                        <p className="text-xl md:text-2xl font-bold text-[#1a3a5f] uppercase">
                          {funder.name}
                        </p>
                        <p className="text-sm md:text-base text-gray-600 mt-2">
                          {funder.fullName}
                        </p>
                      </div>
                    )}
                    {funder.name === 'Union Européenne' && (
                      <p className="text-lg md:text-xl font-bold text-[#1a3a5f] mt-6 uppercase">
                        {funder.name}
                      </p>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-2/3 p-8 md:p-10">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                      {funder.description}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {funder.highlights.map((highlight, idx) => {
                        const IconComponent = highlight.icon
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                            className="flex items-center gap-3 bg-gradient-to-br from-[#526955]/5 to-[#1a3a5f]/5 rounded-xl p-4 hover:from-[#526955]/10 hover:to-[#1a3a5f]/10 transition-all duration-300"
                          >
                            <IconComponent className="w-5 h-5 text-[#526955] flex-shrink-0" />
                            <span className="text-sm md:text-base text-gray-700 font-medium">
                              {highlight.text}
                            </span>
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Mission */}
                    <div className="bg-gradient-to-r from-[#1a3a5f]/5 to-[#526955]/5 rounded-xl p-6 border-l-4 border-[#526955]">
                      <p className="text-sm md:text-base text-gray-700 italic leading-relaxed">
                        <span className="font-bold text-[#1a3a5f] not-italic">Mission : </span>
                        {funder.mission}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider with Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center my-16 md:my-20"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="mx-6 w-12 h-12 bg-gradient-to-br from-[#526955] to-[#1a3a5f] rounded-full flex items-center justify-center shadow-lg">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </motion.div>

        {/* Section: LA MAÎTRISE D'OUVRAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a3a5f] uppercase tracking-tight mb-4">
                LA MAÎTRISE D&apos;OUVRAGE
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[#526955] to-[#1a3a5f] mx-auto rounded-full"></div>
            </motion.div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Logo and Description - 3 columns */}
              <div className="lg:col-span-3 p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  {/* Logo */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 group">
                      <Image
                        src={projectManagement.logo}
                        alt={projectManagement.name}
                        width={160}
                        height={110}
                        className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="mt-5 text-center lg:text-left">
                        <p className="text-xl md:text-2xl font-bold text-[#526955] uppercase">
                          {projectManagement.name}
                        </p>
                        <p className="text-sm md:text-base text-gray-600 italic mt-2">
                          &quot;{projectManagement.slogan}&quot;
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                      {projectManagement.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {projectManagement.highlights.map((highlight, idx) => {
                        const IconComponent = highlight.icon
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                            className="flex flex-col items-center text-center gap-3 bg-gradient-to-br from-[#526955]/5 to-orange-500/5 rounded-xl p-5 hover:from-[#526955]/10 hover:to-orange-500/10 transition-all duration-300"
                          >
                            <IconComponent className="w-8 h-8 text-[#526955]" />
                            <span className="text-xs md:text-sm text-gray-700 font-medium leading-tight">
                              {highlight.text}
                            </span>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Contact Box - 2 columns */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 bg-gradient-to-br from-orange-50 to-orange-100/50 border-l-0 lg:border-l border-gray-100"
              >
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 md:px-8 py-6 md:py-8">
                    <h3 className="text-white text-base md:text-lg font-bold uppercase text-center leading-tight">
                      Coordonnées
                    </h3>
                    <p className="text-white/90 text-xs md:text-sm text-center mt-2">
                      {projectManagement.fullName}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="flex-1 p-6 md:p-8 space-y-6">
                    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-[#526955] to-[#1a3a5f] rounded-lg p-3 flex-shrink-0">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs md:text-sm text-gray-500 font-semibold mb-1 uppercase">Adresse</p>
                          <p className="text-gray-800 text-sm md:text-base font-semibold leading-tight">
                            {projectManagement.contact.address}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-3 flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs md:text-sm text-gray-500 font-semibold mb-1 uppercase">Boîte postale</p>
                          <p className="text-gray-700 text-sm md:text-base leading-tight">
                            {projectManagement.contact.postal}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

