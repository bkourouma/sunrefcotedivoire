# Guide du fichier .env.local

## Qu'est-ce que le fichier .env.local ?

Le fichier `.env.local` est un fichier de configuration qui contient des **variables d'environnement** (des informations sensibles comme les mots de passe, clés API, etc.).

### Caractéristiques importantes :

1. **Fichier local** : Il est uniquement sur votre machine, jamais partagé sur Git
2. **Sécurisé** : Il contient des informations sensibles (mots de passe, clés)
3. **Nécessaire** : Sans ce fichier, l'envoi d'emails ne fonctionnera pas

## Où créer ce fichier ?

Le fichier `.env.local` doit être créé **à la racine du projet**, au même niveau que :
- `package.json`
- `next.config.js`
- `README.md`

```
sunref-ci/
├── .env.local          ← ICI (à créer)
├── package.json
├── next.config.js
├── app/
├── components/
└── ...
```

## Contenu du fichier .env.local

Créez un fichier nommé exactement `.env.local` (avec le point au début) et copiez ce contenu :

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

## Comment créer le fichier ?

### Sur Windows :

1. Ouvrez l'explorateur de fichiers
2. Naviguez vers `C:\sunref-ci`
3. Créez un nouveau fichier texte
4. Renommez-le en `.env.local` (avec le point au début)
   - ⚠️ Windows peut demander confirmation pour changer l'extension
5. Ouvrez-le avec un éditeur de texte (Notepad, VS Code, etc.)
6. Collez le contenu ci-dessus
7. Enregistrez

### Sur Mac/Linux :

```bash
cd /chemin/vers/sunref-ci
nano .env.local
# Collez le contenu, puis Ctrl+X, Y, Enter pour sauvegarder
```

### Avec VS Code :

1. Ouvrez VS Code dans le dossier `C:\sunref-ci`
2. Cliquez sur "Nouveau fichier"
3. Nommez-le `.env.local`
4. Collez le contenu
5. Enregistrez (Ctrl+S)

## Vérification

### Le fichier est-il bien ignoré par Git ?

✅ **OUI** - Le fichier `.env.local` est déjà dans le `.gitignore` (ligne 26), donc il ne sera jamais commité sur GitHub.

### Comment vérifier que le fichier existe ?

Dans le terminal, à la racine du projet :
```bash
# Windows PowerShell
Test-Path .env.local

# Mac/Linux
ls -la .env.local
```

Si la commande retourne `True` ou affiche le fichier, c'est bon !

## Après avoir créé le fichier

1. **Redémarrez le serveur de développement** :
   ```bash
   # Arrêtez le serveur (Ctrl+C)
   npm run dev
   ```

2. **Testez le formulaire de contact** - Les emails devraient maintenant être envoyés.

## Important ⚠️

- ❌ **NE JAMAIS** commit ce fichier sur Git
- ❌ **NE JAMAIS** partager ce fichier publiquement
- ✅ Le fichier est déjà dans `.gitignore`, donc c'est sécurisé
- ✅ Sur le serveur de production, créez aussi un fichier `.env.local` avec les mêmes variables

## Variables utilisées dans le code

Ces variables sont utilisées dans `app/api/contact/route.ts` :
- `SMTP_HOST` → Serveur SMTP
- `SMTP_PORT` → Port de connexion (465 pour SSL)
- `SMTP_SECURE` → Connexion sécurisée (true/false)
- `SMTP_USER` → Nom d'utilisateur SMTP
- `SMTP_PASS` → Mot de passe SMTP
- `SMTP_FROM` → Adresse email expéditeur
- `EMAIL_RECIPIENT_1` et `EMAIL_RECIPIENT_2` → Destinataires (actuellement commentés en mode test)

## Problèmes courants

### Le fichier n'est pas reconnu ?
- Vérifiez que le nom est exactement `.env.local` (avec le point)
- Redémarrez le serveur après création/modification

### Les emails ne partent pas ?
- Vérifiez que toutes les variables sont correctes
- Vérifiez les logs du serveur pour les erreurs
- Testez la connexion SMTP avec les identifiants
