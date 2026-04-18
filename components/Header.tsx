'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Linkedin, Instagram, Facebook, Twitter, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Fonction pour vérifier si un lien est actif
  const isActive = (path: string) => pathname === path

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar - Dark Green avec les trois logos partenaires */}
      <div className="bg-[#526955] w-full py-2.5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Side - Trois logos alignés */}
          <div className="flex items-center gap-3 md:gap-4">
            <Image
              src="/images/Logo CGECI.jpg"
              alt="CGECI"
              width={70}
              height={35}
              className="h-7 md:h-8 w-auto object-contain bg-white rounded px-2 py-1"
            />
            <Image
              src="/images/flag.jpg"
              alt="Union Européenne"
              width={45}
              height={35}
              className="h-7 md:h-8 w-auto object-contain bg-white rounded px-2 py-1"
            />
            <div className="bg-white rounded-full p-1.5">
              <Image
                src="/images/AFD.png"
                alt="AFD"
                width={28}
                height={28}
                className="h-6 md:h-7 w-auto rounded-full"
              />
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="text-white w-4 h-4 md:w-5 md:h-5 hover:text-gray-200 cursor-pointer transition-colors" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="text-white w-4 h-4 md:w-5 md:h-5 hover:text-gray-200 cursor-pointer transition-colors" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="text-white w-4 h-4 md:w-5 md:h-5 hover:text-gray-200 cursor-pointer transition-colors" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="text-white w-4 h-4 md:w-5 md:h-5 hover:text-gray-200 cursor-pointer transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar - White Background avec tous les logos */}
      <div className="bg-white w-full shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left Side - Logo Sunref uniquement */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo1.png"
                alt="Sunref Côte d'Ivoire"
                width={150}
                height={50}
                className="h-12 md:h-14 w-auto"
                priority
              />
            </Link>

            {/* Center - Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
              <Link 
                href="/" 
                className={`px-3 py-2 font-semibold text-xs xl:text-sm uppercase rounded-md transition-all duration-200 whitespace-nowrap ${
                  isActive('/') 
                    ? 'bg-[#526955] text-white' 
                    : 'text-[#1a3a5f] hover:bg-[#526955] hover:text-white'
                }`}
              >
                {t('nav.home')}
              </Link>
              <Link 
                href="/financement" 
                className={`px-3 py-2 font-semibold text-xs xl:text-sm uppercase rounded-md transition-all duration-200 whitespace-nowrap ${
                  isActive('/financement') 
                    ? 'bg-[#526955] text-white' 
                    : 'text-[#1a3a5f] hover:bg-[#526955] hover:text-white'
                }`}
              >
                {t('nav.financement')}
              </Link>
              <Link 
                href="/projets-finances" 
                className={`px-3 py-2 font-semibold text-xs xl:text-sm uppercase rounded-md transition-all duration-200 whitespace-nowrap ${
                  isActive('/projets-finances') 
                    ? 'bg-[#526955] text-white' 
                    : 'text-[#1a3a5f] hover:bg-[#526955] hover:text-white'
                }`}
              >
                {t('nav.projets')}
              </Link>
              <Link 
                href="/partenaires" 
                className={`px-3 py-2 font-semibold text-xs xl:text-sm uppercase rounded-md transition-all duration-200 whitespace-nowrap ${
                  isActive('/partenaires') 
                    ? 'bg-[#526955] text-white' 
                    : 'text-[#1a3a5f] hover:bg-[#526955] hover:text-white'
                }`}
              >
                {t('nav.partenaires')}
              </Link>
              <Link 
                href="/actualites" 
                className={`px-3 py-2 font-semibold text-xs xl:text-sm uppercase rounded-md transition-all duration-200 whitespace-nowrap ${
                  isActive('/actualites') 
                    ? 'bg-[#526955] text-white' 
                    : 'text-[#1a3a5f] hover:bg-[#526955] hover:text-white'
                }`}
              >
                {t('nav.actualites')}
              </Link>
              <Link 
                href="/contact" 
                className={`px-3 py-2 font-semibold text-xs xl:text-sm uppercase rounded-md transition-all duration-200 whitespace-nowrap ${
                  isActive('/contact') 
                    ? 'bg-[#526955] text-white' 
                    : 'text-[#1a3a5f] hover:bg-[#526955] hover:text-white'
                }`}
              >
                {t('nav.contact')}
              </Link>
            </nav>

            {/* Right Side - Language Switcher & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
                    language === 'fr'
                      ? 'bg-[#526955] text-white'
                      : 'text-[#1a3a5f] hover:bg-gray-200'
                  }`}
                  aria-label="Switch to French"
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
                    language === 'en'
                      ? 'bg-[#526955] text-white'
                      : 'text-[#1a3a5f] hover:bg-gray-200'
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
              </div>
              
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 text-[#1a3a5f] hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <nav
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col gap-2 pb-4">
              <Link
                href="/"
                onClick={toggleMenu}
                className={`font-semibold text-sm uppercase transition-colors py-3 px-4 rounded-lg ${
                  isActive('/') 
                    ? 'bg-[#526955] text-white' 
                    : 'text-[#1a3a5f] hover:bg-[#526955] hover:text-white'
                }`}
              >
                {t('nav.home')}
              </Link>
              <Link
                href="/financement"
                onClick={toggleMenu}
                className={`font-semibold text-sm uppercase transition-colors py-3 px-4 rounded-lg ${
                  isActive('/financement') 
                    ? 'bg-[#526955] text-white' 
                    : 'text-[#1a3a5f] hover:bg-[#526955] hover:text-white'
                }`}
              >
                {t('nav.financement')}
              </Link>
              <Link
                href="/projets-finances"
                onClick={toggleMenu}
                className={`font-semibold text-sm uppercase transition-colors py-3 px-4 rounded-lg ${
                  isActive('/projets-finances') 
                    ? 'bg-[#526955] text-white' 
                    : 'text-[#1a3a5f] hover:bg-[#526955] hover:text-white'
                }`}
              >
                {t('nav.projets')}
              </Link>
              <Link
                href="/partenaires"
                onClick={toggleMenu}
                className={`font-semibold text-sm uppercase transition-colors py-3 px-4 rounded-lg ${
                  isActive('/partenaires') 
                    ? 'bg-[#526955] text-white' 
                    : 'text-[#1a3a5f] hover:bg-[#526955] hover:text-white'
                }`}
              >
                {t('nav.partenaires')}
              </Link>
              <Link
                href="/actualites"
                onClick={toggleMenu}
                className={`font-semibold text-sm uppercase transition-colors py-3 px-4 rounded-lg ${
                  isActive('/actualites') 
                    ? 'bg-[#526955] text-white' 
                    : 'text-[#1a3a5f] hover:bg-[#526955] hover:text-white'
                }`}
              >
                {t('nav.actualites')}
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className={`font-semibold text-sm uppercase transition-colors py-3 px-4 rounded-lg ${
                  isActive('/contact') 
                    ? 'bg-[#526955] text-white' 
                    : 'text-[#1a3a5f] hover:bg-[#526955] hover:text-white'
                }`}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
