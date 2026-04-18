# Configuration de l'envoi d'emails

## Variables d'environnement

Pour que l'envoi d'emails fonctionne, vous devez créer un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
# SMTP Configuration
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=formations@allianceconsultants.net
SMTP_PASS=your_smtp_password_here
SMTP_FROM=no-reply@allianceconsultants.net

# Email recipients
EMAIL_RECIPIENT_1=mikou.nguessan@cgeci.ci
EMAIL_RECIPIENT_2=yaobla.amani@cgeci.ci
```

## Instructions

1. Créez un fichier `.env.local` à la racine du projet (même niveau que `package.json`)
2. Copiez les variables ci-dessus dans ce fichier
3. Redémarrez le serveur de développement (`npm run dev`)

## Fonctionnement

- Lorsqu'un utilisateur soumet le formulaire de contact, un email est envoyé aux adresses configurées.
- **Mode test** : Actuellement configuré pour envoyer à `mickael.andjui.21@gmail.com`
- **Mode production** : Les adresses de production sont commentées dans le code :
  - `mikou.nguessan@cgeci.ci` (commentée)
  - `yaobla.amani@cgeci.ci` (commentée)
  
Pour activer les adresses de production, décommentez les lignes dans `app/api/contact/route.ts` et commentez l'adresse de test.

- L'email contient toutes les informations du formulaire :
  - Destinataire
  - Prénom et nom
  - Email du contact
  - Objet
  - Message
  - Statut client banque
  - Banque partenaire (si applicable)

- L'email est envoyé depuis `formations@allianceconsultants.net` (l'adresse d'authentification SMTP) avec la possibilité de répondre directement au contact.
- **Note** : Le serveur SMTP Hostinger exige que l'adresse expéditeur soit la même que l'adresse d'authentification.

## Note importante

Le fichier `.env.local` ne doit **jamais** être commité dans Git. Il est déjà dans le `.gitignore`.
