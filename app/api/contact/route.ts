import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type ContactFormData = {
  destinataire: string
  prenom: string
  nom: string
  email: string
  objet: string
  message: string
  isClient: 'oui' | 'non'
  banque?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validation des champs requis
    if (!body.destinataire || !body.prenom || !body.nom || !body.email || !body.objet || !body.message) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      )
    }

    // Validation du champ banque si l'utilisateur est client
    if (body.isClient === 'oui' && !body.banque) {
      return NextResponse.json(
        { error: 'Veuillez sélectionner votre banque partenaire' },
        { status: 400 }
      )
    }

    // Validation de l'email
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      )
    }

    // Vérification des variables d'environnement
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const smtpFrom = process.env.SMTP_FROM

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !smtpFrom) {
      console.error('Variables SMTP manquantes:', {
        SMTP_HOST: smtpHost ? '✓' : '✗',
        SMTP_PORT: smtpPort ? '✓' : '✗',
        SMTP_USER: smtpUser ? '✓' : '✗',
        SMTP_PASS: smtpPass ? '✓' : '✗',
        SMTP_FROM: smtpFrom ? '✓' : '✗',
      })
      return NextResponse.json(
        { 
          error: 'Configuration SMTP manquante. Veuillez vérifier le fichier .env.local',
          details: process.env.NODE_ENV === 'development' ? 'Variables d\'environnement non chargées' : undefined
        },
        { status: 500 }
      )
    }

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: process.env.SMTP_SECURE === 'true', // true pour le port 465, false pour les autres ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Vérification de la connexion SMTP
    await transporter.verify()

    // Préparation du contenu de l'email
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #526955; border-bottom: 2px solid #526955; padding-bottom: 10px;">
          📧 Nouvelle demande de contact - SUNREF Côte d'Ivoire
        </h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1a3a5f; margin-top: 0;">Informations du contact</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #363E4A; width: 150px;">Destinataire :</td>
              <td style="padding: 8px 0; color: #1a3a5f;">${body.destinataire}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #363E4A;">Prénom :</td>
              <td style="padding: 8px 0; color: #1a3a5f;">${body.prenom}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #363E4A;">Nom :</td>
              <td style="padding: 8px 0; color: #1a3a5f;">${body.nom}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #363E4A;">Email :</td>
              <td style="padding: 8px 0; color: #1a3a5f;">
                <a href="mailto:${body.email}" style="color: #526955; text-decoration: none;">${body.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #363E4A;">Client banque :</td>
              <td style="padding: 8px 0; color: #1a3a5f;">${body.isClient === 'oui' ? 'Oui' : 'Non'}</td>
            </tr>
            ${body.isClient === 'oui' && body.banque ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #363E4A;">Banque partenaire :</td>
              <td style="padding: 8px 0; color: #1a3a5f;">${body.banque}</td>
            </tr>
            ` : ''}
          </table>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #526955; margin: 20px 0;">
          <h3 style="color: #1a3a5f; margin-top: 0;">Objet :</h3>
          <p style="color: #363E4A; font-size: 16px; margin: 0;">${body.objet}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #526955; margin: 20px 0;">
          <h3 style="color: #1a3a5f; margin-top: 0;">Message :</h3>
          <p style="color: #363E4A; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${body.message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
          <p>Cet email a été envoyé depuis le formulaire de contact du site SUNREF Côte d'Ivoire.</p>
          <p>Date d'envoi : ${new Date().toLocaleString('fr-FR', { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
          })}</p>
        </div>
      </div>
    `

    // Préparation de l'email en texte brut (pour les clients email qui ne supportent pas HTML)
    const textContent = `
📧 Nouvelle demande de contact - SUNREF Côte d'Ivoire

Informations du contact :
- Destinataire : ${body.destinataire}
- Prénom : ${body.prenom}
- Nom : ${body.nom}
- Email : ${body.email}
- Client banque : ${body.isClient === 'oui' ? 'Oui' : 'Non'}
${body.isClient === 'oui' && body.banque ? `- Banque partenaire : ${body.banque}` : ''}

Objet : ${body.objet}

Message :
${body.message}

---
Cet email a été envoyé depuis le formulaire de contact du site SUNREF Côte d'Ivoire.
Date d'envoi : ${new Date().toLocaleString('fr-FR')}
    `

    // Configuration de l'email
    // Utiliser l'adresse SMTP_USER comme expéditeur car le serveur SMTP exige que l'adresse from soit la même que l'utilisateur authentifié
    const mailOptions = {
      from: `"SUNREF Côte d'Ivoire" <${smtpUser}>`,
      to: [
        // Adresses de production
        process.env.EMAIL_RECIPIENT_1, // mikou.nguessan@cgeci.ci
        process.env.EMAIL_RECIPIENT_2, // yaobla.amani@cgeci.ci
        // Adresse de test (commentée pour la production)
        // 'mickael.andjui.21@gmail.com',
      ].filter(Boolean).join(', '),
      replyTo: body.email,
      subject: `[SUNREF CI] Contact: ${body.objet} - ${body.prenom} ${body.nom}`,
      text: textContent,
      html: emailContent,
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.' 
      },
      { status: 200 }
    )

  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    
    return NextResponse.json(
      { 
        error: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard ou nous contacter directement.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}

