# Vérification du fichier .env.local

## Étapes importantes après avoir créé/renommé le fichier

### 1. Vérifier le contenu du fichier

Le fichier `.env.local` doit contenir exactement :

```env
# SMTP Configuration
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=formations@allianceconsultants.net
SMTP_PASS=your_smtp_password_here
SMTP_FROM=no-reply@allianceconsultants.net

# Email recipients (actuellement non utilisés en mode test)
EMAIL_RECIPIENT_1=mikou.nguessan@cgeci.ci
EMAIL_RECIPIENT_2=yaobla.amani@cgeci.ci
```

### 2. ⚠️ REDÉMARRER LE SERVEUR (OBLIGATOIRE)

**C'est la partie la plus importante !** Next.js ne charge les variables d'environnement qu'au démarrage.

1. Dans le terminal où `npm run dev` tourne, appuyez sur **Ctrl+C** pour arrêter le serveur
2. Relancez le serveur : `npm run dev`
3. Attendez que le serveur soit prêt (message "Ready")

### 3. Tester le formulaire

Une fois le serveur redémarré, testez à nouveau le formulaire de contact.

## Si ça ne fonctionne toujours pas

Vérifiez dans la console du serveur (terminal) s'il y a des messages d'erreur concernant les variables SMTP.
