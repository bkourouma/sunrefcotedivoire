# Guide de déploiement - sunrefcotedivoire.com

## Prérequis
- Serveur VPS Hostinger (Ubuntu/Debian)
- Accès SSH root
- Domaine pointant vers le serveur : sunrefcotedivoire.com

## Étape 1 : Mise à jour du système

```bash
apt update && apt upgrade -y
```

## Étape 2 : Installation de Node.js (version 18 LTS)

```bash
# Installation de curl si nécessaire
apt install -y curl

# Ajout du repository NodeSource
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -

# Installation de Node.js
apt install -y nodejs

# Vérification de l'installation
node --version
npm --version
```

## Étape 3 : Installation de Git

```bash
apt install -y git
git --version
```

## Étape 4 : Installation de Nginx

```bash
apt install -y nginx

# Démarrer et activer Nginx
systemctl start nginx
systemctl enable nginx

# Vérifier le statut
systemctl status nginx
```

## Étape 5 : Installation de PM2 (Process Manager)

```bash
npm install -g pm2
pm2 --version
```

## Étape 6 : Cloner le projet depuis GitHub

```bash
# Créer un répertoire pour l'application
mkdir -p /var/www
cd /var/www

# Cloner le dépôt
git clone https://github.com/DevMick/sunrefci.git

# Aller dans le répertoire du projet
cd sunrefci

# Installer les dépendances
npm install
```

## Étape 7 : Build de l'application Next.js

```bash
# Créer le build de production
npm run build
```

## Étape 8 : Configuration de PM2

```bash
# Démarrer l'application avec PM2
pm2 start npm --name "sunref-ci" -- start

# Sauvegarder la configuration PM2
pm2 save

# Configurer PM2 pour démarrer au boot
pm2 startup
# Exécuter la commande qui sera affichée (généralement quelque chose comme: sudo env PATH=...)
```

## Étape 9 : Configuration de Nginx

```bash
# Créer le fichier de configuration Nginx
nano /etc/nginx/sites-available/sunrefcotedivoire.com
```

**Contenu du fichier de configuration :**

```nginx
server {
    listen 80;
    server_name sunrefcotedivoire.com www.sunrefcotedivoire.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Sauvegarder et quitter (Ctrl+X, puis Y, puis Enter)**

```bash
# Créer un lien symbolique
ln -s /etc/nginx/sites-available/sunrefcotedivoire.com /etc/nginx/sites-enabled/

# Tester la configuration Nginx
nginx -t

# Recharger Nginx
systemctl reload nginx
```

## Étape 10 : Configuration du pare-feu (UFW)

```bash
# Installation de UFW si nécessaire
apt install -y ufw

# Autoriser SSH, HTTP et HTTPS
ufw allow OpenSSH
ufw allow 'Nginx Full'

# Activer le pare-feu
ufw enable

# Vérifier le statut
ufw status
```

## Étape 11 : Installation et configuration de SSL avec Let's Encrypt

```bash
# Installation de Certbot
apt install -y certbot python3-certbot-nginx

# Obtenir le certificat SSL
certbot --nginx -d sunrefcotedivoire.com -d www.sunrefcotedivoire.com

# Suivre les instructions interactives :
# - Entrer votre email
# - Accepter les termes
# - Choisir de rediriger HTTP vers HTTPS (option 2)

# Test du renouvellement automatique
certbot renew --dry-run
```

## Étape 12 : Vérification finale

```bash
# Vérifier que PM2 tourne
pm2 status

# Vérifier les logs
pm2 logs sunref-ci

# Vérifier Nginx
systemctl status nginx

# Vérifier que l'application répond
curl http://localhost:3000
```

## Commandes utiles pour la maintenance

```bash
# Voir les logs de l'application
pm2 logs sunref-ci

# Redémarrer l'application
pm2 restart sunref-ci

# Arrêter l'application
pm2 stop sunref-ci

# Mettre à jour le code depuis GitHub
cd /var/www/sunrefci
git pull
npm install
npm run build
pm2 restart sunref-ci

# Voir les logs Nginx
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log
```

## Dépannage

Si l'application ne démarre pas :
1. Vérifier les logs : `pm2 logs sunref-ci`
2. Vérifier que le port 3000 est libre : `netstat -tulpn | grep 3000`
3. Vérifier la configuration Nginx : `nginx -t`
4. Vérifier les erreurs Nginx : `tail -f /var/log/nginx/error.log`

