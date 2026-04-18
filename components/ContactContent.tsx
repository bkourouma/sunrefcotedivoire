'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Clock, ChevronDown, Send, CheckCircle } from 'lucide-react'

type FormData = {
  destinataire: string
  prenom: string
  nom: string
  email: string
  objet: string
  message: string
  isClient: 'oui' | 'non'
  banque: string
}

const recipients = [
  'Direction Générale',
  'Service Client',
  'Relations Presse',
  'Assistance Technique',
]

const banks = [
  'NSIA Banque Côte d\'Ivoire',
  'Société Générale Côte d\'Ivoire',
  'Banque Atlantique Côte d\'Ivoire',
  'Ecobank Côte d\'Ivoire',
]

export default function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<FormData>({
    defaultValues: {
      isClient: 'oui',
    },
  })

  const isClient = watch('isClient')

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setIsSuccess(false)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Une erreur est survenue lors de l\'envoi du message')
      }

      // Succès
      setIsSuccess(true)
      setErrorMessage(null)
      reset()
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error: any) {
      console.error('Erreur:', error)
      setErrorMessage(error.message || 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.')
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Success Message */}
        {isSuccess && (
          <div className="mb-8 bg-green-50 border-l-4 border-green-500 rounded-xl p-6 flex items-center gap-4 animate-pulse">
            <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
            <div>
              <p className="text-green-800 font-semibold text-lg">Message envoyé avec succès!</p>
              <p className="text-green-700 text-sm mt-1">Nous vous répondrons dans les plus brefs délais.</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-8 bg-red-50 border-l-4 border-red-500 rounded-xl p-6 flex items-center gap-4">
            <div className="w-8 h-8 text-red-500 flex-shrink-0 flex items-center justify-center text-xl font-bold">⚠</div>
            <div>
              <p className="text-red-800 font-semibold text-lg">Erreur lors de l'envoi</p>
              <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
            </div>
            <button
              onClick={() => setErrorMessage(null)}
              className="ml-auto text-red-500 hover:text-red-700 font-bold text-xl"
              aria-label="Fermer"
            >
              ×
            </button>
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          
          {/* Left Section - Contact Form (3 columns) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a5f] mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Destinataire */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Destinataire <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      {...register('destinataire', { required: 'Ce champ est requis' })}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#526955] focus:bg-white focus:outline-none appearance-none text-gray-700 transition-all"
                    >
                      <option value="">Sélectionner un destinataire</option>
                      {recipients.map((recipient) => (
                        <option key={recipient} value={recipient}>
                          {recipient}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                  {errors.destinataire && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <span>⚠</span> {errors.destinataire.message}
                    </p>
                  )}
                </div>

                {/* Prénom et Nom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('prenom', { required: 'Ce champ est requis' })}
                      placeholder="Votre prénom"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#526955] focus:bg-white focus:outline-none text-gray-700 transition-all"
                    />
                    {errors.prenom && (
                      <p className="text-red-500 text-sm mt-1">⚠ {errors.prenom.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('nom', { required: 'Ce champ est requis' })}
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#526955] focus:bg-white focus:outline-none text-gray-700 transition-all"
                    />
                    {errors.nom && (
                      <p className="text-red-500 text-sm mt-1">⚠ {errors.nom.message}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Ce champ est requis',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email invalide',
                      },
                    })}
                    placeholder="votre.email@exemple.com"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#526955] focus:bg-white focus:outline-none text-gray-700 transition-all"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">⚠ {errors.email.message}</p>
                  )}
                </div>

                {/* Objet */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Objet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('objet', { required: 'Ce champ est requis' })}
                    placeholder="Objet de votre message"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#526955] focus:bg-white focus:outline-none text-gray-700 transition-all"
                  />
                  {errors.objet && (
                    <p className="text-red-500 text-sm mt-1">⚠ {errors.objet.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register('message', { required: 'Ce champ est requis' })}
                    rows={5}
                    placeholder="Décrivez votre demande..."
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#526955] focus:bg-white focus:outline-none text-gray-700 resize-none transition-all"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">⚠ {errors.message.message}</p>
                  )}
                </div>

                {/* Etes vous client ? */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Êtes-vous client d'une banque partenaire ? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value="oui"
                        {...register('isClient', { required: true })}
                        className="w-5 h-5 text-[#526955] focus:ring-[#526955] cursor-pointer"
                      />
                      <span className="text-gray-700 font-medium">Oui</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value="non"
                        {...register('isClient', { required: true })}
                        className="w-5 h-5 text-[#526955] focus:ring-[#526955] cursor-pointer"
                      />
                      <span className="text-gray-700 font-medium">Non</span>
                    </label>
                  </div>
                </div>

                {/* Banque (si client) */}
                {isClient === 'oui' && (
                  <div className="animate-fadeIn">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Banque partenaire <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        {...register('banque', { required: isClient === 'oui' ? 'Ce champ est requis' : false })}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#526955] focus:bg-white focus:outline-none appearance-none text-gray-700 transition-all"
                      >
                        <option value="">Sélectionner votre banque</option>
                        {banks.map((bank) => (
                          <option key={bank} value={bank}>
                            {bank}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    {errors.banque && (
                      <p className="text-red-500 text-sm mt-1">⚠ {errors.banque.message}</p>
                    )}
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#526955] to-[#3d5243] hover:from-[#3d5243] hover:to-[#526955] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 uppercase text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Section - Contact Information (2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-[#526955] to-[#3d5243] rounded-2xl shadow-xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold uppercase mb-6">
                Informations de contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 group-hover:bg-white/20 transition-all">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Téléphone</p>
                    <a href="tel:+2252720330200" className="text-white font-semibold hover:underline">
                      +225 27 20 33 02 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 group-hover:bg-white/20 transition-all">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Email</p>
                    <a href="mailto:contact@sunref-ci.ci" className="text-white font-semibold hover:underline break-all">
                      contact@sunref-ci.ci
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 group-hover:bg-white/20 transition-all">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Adresse</p>
                    <p className="text-white font-semibold">
                      Abidjan, Plateau<br />
                      Côte d'Ivoire
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 group-hover:bg-white/20 transition-all">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Horaires</p>
                    <p className="text-white font-semibold">
                      Lun - Ven: 8h00 - 17h00<br />
                      Sam - Dim: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Press Relations Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#1a3a5f] mb-4">
                Relations Presse
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Pour toute demande média ou information presse
              </p>
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <Mail className="w-5 h-5 text-[#526955]" />
                <a href="mailto:presse@sunref-ci.ci" className="text-[#526955] font-semibold hover:underline">
                  presse@sunref-ci.ci
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
