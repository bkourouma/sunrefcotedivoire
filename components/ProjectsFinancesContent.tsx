'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, MapPin, Calendar, Zap, Leaf, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Installation Solaire Photovoltaïque',
    category: 'Énergies Renouvelables',
    categoryIcon: 'leaf',
    description: 'Projet d\'installation de panneaux solaires pour l\'électrification d\'un complexe commercial',
    fullDescription: 'Ce projet innovant a permis l\'installation de 250 kW de capacité solaire photovoltaïque, réduisant la dépendance au réseau électrique de 65% et diminuant les émissions de CO2 de 180 tonnes par an. Une réalisation majeure dans la transition énergétique du secteur commercial ivoirien.',
    location: {
      name: 'Akeka',
      city: 'Abidjan, Côte d\'Ivoire',
      coordinates: '5.464350, -3.993001',
    },
    date: 'Décembre 2023',
    image: '/images/Image3.png',
    impact: {
      co2Reduction: '180 tonnes/an',
      energySavings: '65%',
      capacity: '250 kW',
    },
  },
  {
    id: 2,
    title: 'Système d\'Efficacité Énergétique',
    category: 'Efficacité Énergétique',
    categoryIcon: 'zap',
    description: 'Modernisation complète du système de climatisation et d\'éclairage d\'un centre médical',
    fullDescription: 'Remplacement des équipements obsolètes par des systèmes LED haute efficacité et climatisation intelligente. Le projet a permis une réduction de 45% de la consommation énergétique tout en améliorant le confort des patients et du personnel médical.',
    location: {
      name: 'Yopougon',
      city: 'Abidjan, Côte d\'Ivoire',
      coordinates: '5.300000, -4.050000',
    },
    date: 'Octobre 2023',
    image: '/images/Image4.png',
    impact: {
      co2Reduction: '120 tonnes/an',
      energySavings: '45%',
      capacity: 'N/A',
    },
  },
  {
    id: 3,
    title: 'Centrale Solaire Hybride',
    category: 'Énergies Renouvelables',
    categoryIcon: 'leaf',
    description: 'Installation d\'une centrale solaire hybride pour un site industriel',
    fullDescription: 'Déploiement d\'un système solaire hybride de 400 kW couplé à un système de stockage par batteries. Cette solution garantit une alimentation électrique stable 24h/24 tout en réduisant drastiquement les coûts opérationnels et l\'empreinte carbone.',
    location: {
      name: 'Cocody',
      city: 'Abidjan, Côte d\'Ivoire',
      coordinates: '5.350000, -4.000000',
    },
    date: 'Septembre 2023',
    image: '/images/Image5.png',
    impact: {
      co2Reduction: '300 tonnes/an',
      energySavings: '70%',
      capacity: '400 kW',
    },
  },
]

export default function ProjectsFinancesContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Search and Filter Bar */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 bg-gray-50 rounded-xl border-2 border-transparent focus:border-[#526955] focus:bg-white focus:outline-none transition-all text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-[#526955] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => setSelectedCategory('Énergies Renouvelables')}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === 'Énergies Renouvelables'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Leaf className="w-4 h-4" />
                Énergies Renouvelables
              </button>
              <button
                onClick={() => setSelectedCategory('Efficacité Énergétique')}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === 'Efficacité Énergétique'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Zap className="w-4 h-4" />
                Efficacité Énergétique
              </button>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8 md:space-y-12">
          {filteredProjects.map((project) => {
            const IconComponent = project.categoryIcon === 'leaf' ? Leaf : Zap
            const categoryColor = project.categoryIcon === 'leaf' ? 'bg-green-500' : 'bg-blue-500'
            
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Project Header */}
                <div className={`${categoryColor} px-6 md:px-8 py-4 md:py-5 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-6 h-6 text-white" />
                    <span className="text-white font-semibold text-sm md:text-base uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>

                {/* Project Body */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 p-6 md:p-8">
                  {/* Left Section - Image */}
                  <div className="lg:col-span-2 relative">
                    <div className="relative h-[300px] md:h-[350px] lg:h-full rounded-xl overflow-hidden shadow-lg group">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        quality={90}
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Location Badge on Image */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-[#526955] flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-bold text-gray-800">{project.location.name}</p>
                            <p className="text-xs text-gray-600">{project.location.city}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Content */}
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a3a5f] mb-3">
                        {project.title}
                      </h2>
                      <p className="text-base md:text-lg text-gray-600 font-medium">
                        {project.description}
                      </p>
                    </div>
                    
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {project.fullDescription}
                    </p>

                    {/* Impact Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      <div className="text-center">
                        <div className="bg-green-50 rounded-xl p-4">
                          <p className="text-2xl md:text-3xl font-bold text-green-600">
                            {project.impact.co2Reduction}
                          </p>
                          <p className="text-xs md:text-sm text-gray-600 mt-1 uppercase font-semibold">
                            Réduction CO2
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-blue-50 rounded-xl p-4">
                          <p className="text-2xl md:text-3xl font-bold text-blue-600">
                            {project.impact.energySavings}
                          </p>
                          <p className="text-xs md:text-sm text-gray-600 mt-1 uppercase font-semibold">
                            Économie énergie
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-orange-50 rounded-xl p-4">
                          <p className="text-2xl md:text-3xl font-bold text-orange-600">
                            {project.impact.capacity}
                          </p>
                          <p className="text-xs md:text-sm text-gray-600 mt-1 uppercase font-semibold">
                            Capacité
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="flex items-center gap-2 text-[#526955] hover:text-[#3d5243] font-semibold text-sm md:text-base group">
                      <span>En savoir plus</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 md:py-16 bg-white rounded-2xl shadow-lg">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Aucun projet trouvé
              </p>
              <p className="text-gray-600">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
