'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const banks = [
  {
    name: 'NSIA Banque Côte d\'Ivoire',
    shortName: 'NSIA',
    logo: '/images/Logo5.png',
    description: 'NSIA Banque Côte d\'Ivoire est une banque ivoirienne faisant partie du groupe NSIA (Nouvelle société interafricaine d\'assurance). Ce groupe opère dans seize pays d\'Afrique de l\'Ouest et d\'Afrique centrale. Le groupe NSIA est créé en 1995, mais NSIA Banque revendique une histoire plus que centenaire, en étant l\'héritière de la Banque de l\'Afrique Occidentale (BAO) fondée à Grand-Bassam en 1906.',
    address: '8-10, AVENUE JOSEPH ANOMA, ABIDJAN-PLATEAU 01 BP 1274 ABIDJAN 01',
  },
  {
    name: 'Société Générale Côte d\'Ivoire',
    shortName: 'SOCIÉTÉ GÉNÉRALE CI',
    logo: '/images/Logo6.png',
    description: 'Société Générale Côte d\'Ivoire est la filiale ivoirienne de la banque française Société Générale. C\'est la première banque du groupe Société Générale en Afrique subsaharienne et l\'un des leaders du marché bancaire ivoirien.',
    address: 'AVENUE JOSEPH ANOMA, ABIDJAN PLATEAU, 01 BP 1355 ABIDJAN 01',
  },
]

export default function PartnerBanks() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a3a5f] uppercase mb-6 md:mb-8 tracking-tight">
            LES BANQUES PARTENAIRES
          </h2>
          
          <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-5xl">
            L&apos;Agence Française de Développement a établi des conventions avec deux banques partenaires,{' '}
            <span className="text-orange-500 font-semibold">la Société Générale Côte d&apos;Ivoire</span>
            {' '}et{' '}
            <span className="text-orange-500 font-semibold">la NSIA Banque Côte d&apos;Ivoire</span>
            , afin de leur offrir des conditions de partenariat privilégiées visant à saisir les opportunités de la finance verte.
          </p>
        </motion.div>

        {/* Banks Grid */}
        <div className="space-y-12 md:space-y-16">
          {banks.map((bank, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"
            >
              {/* Left Section - Logo and Description */}
              <div className="lg:col-span-2 space-y-6">
                {/* Logo */}
                <div className="flex items-center">
                  <Image
                    src={bank.logo}
                    alt={bank.name}
                    width={250}
                    height={100}
                    className="h-auto w-auto object-contain max-w-full"
                  />
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                  {bank.description}
                </p>
              </div>

              {/* Right Section - Address Box */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-100 h-full">
                  {/* Orange Header */}
                  <div className="bg-orange-500 px-4 md:px-6 py-3 md:py-4">
                    <p className="text-white text-xs md:text-sm font-bold uppercase text-center leading-tight">
                      {bank.shortName}
                    </p>
                  </div>

                  {/* Address Info */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#526955] flex-shrink-0 mt-1" />
                      <p className="text-gray-800 text-xs md:text-sm uppercase leading-tight">
                        {bank.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

