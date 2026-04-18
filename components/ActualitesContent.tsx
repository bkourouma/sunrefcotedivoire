'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, Calendar, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'

const news = [
  {
    id: 1,
    title: 'Lancement réussi de 3 nouveaux projets solaires',
    date: '15 Novembre 2024',
    category: 'Projets',
    description: 'SUNREF Côte d\'Ivoire célèbre le lancement de trois nouveaux projets d\'installation solaire photovoltaïque dans la région d\'Abidjan, marquant une étape importante dans la transition énergétique du pays.',
    fullDescription: 'Ces projets représentent une capacité totale de 650 kW et permettront de réduire les émissions de CO2 de plus de 500 tonnes par an. Les installations bénéficieront à des complexes commerciaux et industriels, contribuant ainsi à l\'indépendance énergétique de la Côte d\'Ivoire.',
    image: '/images/Image3.png',
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'Atelier de formation sur l\'efficacité énergétique',
    date: '03 Novembre 2024',
    category: 'Formation',
    description: 'Un atelier de sensibilisation et de formation sur les bonnes pratiques en matière d\'efficacité énergétique a rassemblé plus de 50 entrepreneurs ivoiriens à Abidjan.',
    fullDescription: 'Les participants ont découvert les technologies disponibles, les critères d\'éligibilité au financement SUNREF et les bénéfices économiques et environnementaux de l\'efficacité énergétique. Plusieurs projets concrets ont émergé de cet événement.',
    image: '/images/Image4.png',
    readTime: '4 min',
  },
  {
    id: 3,
    title: 'Partenariat renforcé avec les banques locales',
    date: '20 Octobre 2024',
    category: 'Partenariat',
    description: 'SUNREF Côte d\'Ivoire annonce l\'extension de son réseau de banques partenaires avec l\'ajout de deux nouvelles institutions financières, facilitant ainsi l\'accès au financement vert.',
    fullDescription: 'Ce partenariat élargi permettra d\'augmenter significativement le nombre de projets financés et d\'atteindre de nouveaux secteurs d\'activité. Les conditions de financement restent attractives avec des taux préférentiels pour les projets verts.',
    image: '/images/Image5.png',
    readTime: '3 min',
  },
]

const categories = ['Tous', 'Projets', 'Formation', 'Partenariat', 'Événement']

export default function ActualitesContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tous')

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Projets':
        return 'bg-green-500'
      case 'Formation':
        return 'bg-blue-500'
      case 'Partenariat':
        return 'bg-purple-500'
      case 'Événement':
        return 'bg-orange-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Search and Filter Bar */}
        <div className="mb-12 md:mb-16">
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une actualité..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 bg-gray-50 rounded-xl border-2 border-transparent focus:border-[#526955] focus:bg-white focus:outline-none transition-all text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-[#526955] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            {filteredNews.length} actualité{filteredNews.length > 1 ? 's' : ''} trouvée{filteredNews.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Image */}
              <div className="relative h-[250px] md:h-[300px] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`${getCategoryColor(article.category)} text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg`}>
                    <Tag className="w-4 h-4" />
                    <span className="text-sm font-semibold">{article.category}</span>
                  </div>
                </div>

                {/* Date on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{article.date}</span>
                    <span className="text-white/60 mx-2">•</span>
                    <span className="text-sm">{article.readTime} de lecture</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a3a5f] mb-4 group-hover:text-[#526955] transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                  {article.description}
                </p>

                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 line-clamp-2">
                  {article.fullDescription}
                </p>
                
                <Link
                  href={`/actualites/${article.id}`}
                  className="inline-flex items-center gap-2 text-[#526955] hover:text-[#3d5243] font-semibold text-sm md:text-base group/link"
                >
                  <span>Lire la suite</span>
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12 md:py-16 bg-white rounded-2xl shadow-lg">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Aucune actualité trouvée
              </p>
              <p className="text-gray-600">
                Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie
              </p>
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#526955] to-[#3d5243] rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Restez informé de nos actualités
          </h3>
          <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles et opportunités de financement
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-white transition-all"
            />
            <button className="bg-white text-[#526955] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
