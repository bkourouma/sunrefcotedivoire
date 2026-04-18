'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Instagram, Facebook, Twitter, Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const navigationLinks = [
    { name: t('footer.links.home'), href: "/" },
    { name: t('footer.links.financement'), href: "/financement" },
    { name: t('footer.links.projets'), href: "/projets-finances" },
    { name: t('footer.links.partenaires'), href: "/partenaires" },
    { name: t('footer.links.actualites'), href: "/actualites" },
    { name: t('footer.links.contact'), href: "/contact" },
  ]

  const quickLinks = [
    { name: t('footer.links.eligibility'), href: "/financement" },
    { name: t('footer.links.cycle'), href: "/financement" },
    { name: t('footer.links.realizations'), href: "/projets-finances" },
    { name: t('footer.links.becomePartner'), href: "/contact" },
  ]
  return (
    <footer className="w-full bg-gradient-to-b from-[#363E4A] to-[#2a3138] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Column 1 - Logo and Description */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Image
                src="/images/logo1.png"
                alt="Sunref Côte d'Ivoire"
                width={180}
                height={70}
                className="h-auto mb-6"
              />
            </div>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t('footer.description') }} />
            
            {/* Social Media Icons */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-white uppercase tracking-wide">
                {t('footer.follow')}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="bg-white/10 hover:bg-[#0077B5] p-3 rounded-lg transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 p-3 rounded-lg transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="bg-white/10 hover:bg-[#1877F2] p-3 rounded-lg transition-all duration-300 group"
                >
                  <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="bg-white/10 hover:bg-[#1DA1F2] p-3 rounded-lg transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg md:text-xl font-bold mb-6 uppercase tracking-tight flex items-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-[#526955] to-green-400 rounded-full"></div>
              {t('footer.navigation')}
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg md:text-xl font-bold mb-6 uppercase tracking-tight flex items-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-[#526955] to-green-400 rounded-full"></div>
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact & Partners */}
          <div className="lg:col-span-3">
            <h3 className="text-lg md:text-xl font-bold mb-6 uppercase tracking-tight flex items-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-[#526955] to-green-400 rounded-full"></div>
              {t('footer.contact')}
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 group">
                <div className="bg-[#526955]/20 p-2 rounded-lg group-hover:bg-[#526955]/30 transition-colors">
                  <MapPin className="w-4 h-4 text-[#526955] flex-shrink-0" />
                </div>
                <span className="text-sm md:text-base text-gray-300">
                  Abidjan, Côte d&apos;Ivoire
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-[#526955]/20 p-2 rounded-lg group-hover:bg-[#526955]/30 transition-colors">
                  <Phone className="w-4 h-4 text-[#526955] flex-shrink-0" />
                </div>
                <a
                  href="tel:+2252720330200"
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  +225 27 20 33 02 00
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-[#526955]/20 p-2 rounded-lg group-hover:bg-[#526955]/30 transition-colors">
                  <Mail className="w-4 h-4 text-[#526955] flex-shrink-0" />
                </div>
                <a
                  href="mailto:contact@sunref-ci.ci"
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors break-all"
                >
                  contact@sunref-ci.ci
                </a>
              </li>
            </ul>

            {/* Partners */}
            <div>
              <p className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
                {t('footer.partners')}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-white p-2 rounded-lg hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/images/AFD.png"
                    alt="AFD"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="bg-white p-2 rounded-lg hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/images/Logo CGECI.jpg"
                    alt="CGECI"
                    width={60}
                    height={30}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div className="bg-white p-2 rounded-lg hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/images/flag.jpg"
                    alt="Union Européenne"
                    width={50}
                    height={30}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#526955]/20 to-green-500/20 rounded-2xl p-6 md:p-8 border border-[#526955]/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                {t('footer.newsletterTitle')}
              </h4>
              <p className="text-sm md:text-base text-gray-300">
                {t('footer.newsletterDesc')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder={t('footer.newsletterPlaceholder')}
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#526955] transition-all w-full sm:w-64"
              />
              <button className="bg-gradient-to-r from-[#526955] to-green-500 hover:from-[#3d5243] hover:to-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap">
                <span>{t('footer.newsletterButton')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Dark Green */}
      <div className="bg-gradient-to-r from-[#526955] to-[#3d5243] border-t border-[#3d5243]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm md:text-base text-white/90 text-center md:text-left">
              © {new Date().getFullYear()} <strong>SUNREF Côte d&apos;Ivoire</strong>. {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-6 text-sm text-white/80">
              <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">
                {t('footer.legal')}
              </Link>
              <span className="text-white/30">•</span>
              <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">
                {t('footer.privacy')}
              </Link>
              <span className="text-white/30">•</span>
              <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">
                {t('footer.cookies')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
