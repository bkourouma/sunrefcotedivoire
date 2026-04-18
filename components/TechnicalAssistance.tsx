'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, MapPin } from 'lucide-react'
import Link from 'next/link'

const companies = [
  {
    name: 'IED consult',
    logo: '/images/logo2.png',
    description: 'Innovation E e Développement (IED) est une société de conseil et d\'ingénierie spécialisée dans l\'apport de services électriques durables via les énergies renouvelables. Ses services s\'étendent de l\'élaboration d\'études techniques à la réalisation des infrastructures de production et de distribution d\'énergie.',
  },
  {
    name: 'GINGER INTERNATIONAL',
    logo: '/images/Logo3.png',
  },
  {
    name: 'GINGER BURGEAP',
    logo: '/images/Logo4.png',
    description: 'Ginger LonGEAP est un bureau d\'études en environnement. BURGEAP existe depuis 1947 et se rapproche de Ginger CREDES en janvier E au sein du groupe Ginger _RNATIONAL, dont il constitue la branche environnement.',
  },
]

const contacts = [
  {
    name: 'IED INNOVATION ENERGIE DÉVELOPPEMENT',
    address: '2 CHEMIN DE LA CHAUDERAIE 69340 FRANCHEVILLE, FRANCE',
    website: 'WWW.IED-SA.FR',
    url: 'https://www.ied-sa.fr',
  },
  {
    name: 'GINGER BURGEAP',
    address: '143 AVENUE DE VERDUN 92130 ISSY-LES-MOULINEAUX, FRANCE',
    website: 'WWW.GINGER-INTERNATIONAL.FR',
    url: 'https://www.ginger-international.fr',
  },
]

export default function TechnicalAssistance() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a3a5f] uppercase mb-4 md:mb-6 tracking-tight">
            L&apos;ASSISTANCE TECHNIQUE
          </h2>
          <div className="border-t-2 border-gray-300 mb-6 md:mb-8"></div>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl">
            Le groupement IED - Ginger INTERNATIONAL a été recruté pour appuyer la CGECI dans la coordination et la mise en œuvre du programme SUNREF.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Left Column - Companies */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
              >
                {/* Company Logo */}
                <div className="mb-4 md:mb-6">
                  <div className="flex items-center">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={200}
                      height={80}
                      className="h-auto w-auto object-contain max-w-full"
                    />
                  </div>
                </div>

                {/* Description */}
                {company.description && (
                  <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                    {company.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Column - Contact Boxes */}
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-100"
              >
                {/* Orange Header */}
                <div className="bg-orange-500 px-4 md:px-6 py-3 md:py-4">
                  <p className="text-white text-xs md:text-sm font-bold uppercase text-center leading-tight">
                    {contact.name}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#526955] flex-shrink-0 mt-1" />
                    <p className="text-gray-800 text-xs md:text-sm uppercase leading-tight">
                      {contact.address}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-[#526955] flex-shrink-0" />
                    <Link
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a3a5f] text-xs md:text-sm font-semibold uppercase hover:text-[#526955] transition-colors underline"
                    >
                      {contact.website}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

