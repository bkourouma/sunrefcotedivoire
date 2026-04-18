# Guide des mises à jour - sunrefcotedivoire.com

## Processus de mise à jour

### Étape 1 : Faire les modifications en local

1. Modifiez les fichiers sur votre machine locale (dans `C:\sunref-ci`)
2. Testez localement avec `npm run dev`
3. Commitez et poussez sur GitHub :

```bash
git add .
git commit -m "Description de vos modifications"
git push
```

### Étape 2 : Déployer sur le serveur

Connectez-vous au serveur :
```bash
ssh root@82.29.174.93
```

## Méthode 1 : Déploiement manuel (recommandé pour apprendre)

```bash
# Aller dans le répertoire du projet
cd /var/www/sunrefci

# Récupérer les dernières modifications depuis GitHub
git pull origin main

# Installer les nouvelles dépendances (si vous avez ajouté des packages)
npm install

# Reconstruire l'application
npm run build

# Redémarrer l'application pour appliquer les changements
pm2 restart sunref-ci

# Vérifier que tout fonctionne
pm2 status
pm2 logs sunref-ci --lines 20
```

## Méthode 2 : Utiliser le script de déploiement automatique

### Première fois : Rendre le script exécutable

```bash
cd /var/www/sunrefci
chmod +x deploy.sh
```

### Pour chaque mise à jour :

```bash
cd /var/www/sunrefci
./deploy.sh
```

Le script fait automatiquement :
- ✅ Récupération des modifications (git pull)
- ✅ Installation des dépendances (npm install)
- ✅ Build de l'application (npm run build)
- ✅ Redémarrage de l'application (pm2 restart)

## Commandes utiles pour le débogage

### Voir les logs en temps réel
```bash
pm2 logs sunref-ci
```

### Voir les dernières erreurs
```bash
pm2 logs sunref-ci --err --lines 50
```

### Vérifier le statut de l'application
```bash
pm2 status
```

### Redémarrer l'application manuellement
```bash
pm2 restart sunref-ci
```

### Arrêter l'application
```bash
pm2 stop sunref-ci
```

### Voir les logs Nginx (si problème de serveur web)
```bash
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log
```

## Cas particuliers

### Si vous avez modifié package.json (nouveaux packages)

Après `git pull`, exécutez toujours :
```bash
npm install
npm run build
pm2 restart sunref-ci
```

### Si le build échoue

1. Vérifiez les erreurs dans les logs
2. Testez localement d'abord
3. Vérifiez que toutes les dépendances sont installées

### Si l'application ne démarre pas

```bash
# Voir les erreurs détaillées
pm2 logs sunref-ci --err

# Vérifier que le port 3000 n'est pas utilisé par autre chose
netstat -tulpn | grep 3000

# Redémarrer depuis zéro
pm2 delete sunref-ci
cd /var/www/sunrefci
pm2 start npm --name "sunref-ci" -- start
pm2 save
```

## Résumé rapide - Workflow complet

### Sur votre machine locale :
```bash
# 1. Modifier les fichiers
# 2. Tester localement
npm run dev

# 3. Commiter et pousser
git add .
git commit -m "Vos modifications"
git push
```

### Sur le serveur :
```bash
# Option A : Manuel
cd /var/www/sunrefci
git pull
npm install
npm run build
pm2 restart sunref-ci

# Option B : Script automatique
cd /var/www/sunrefci
./deploy.sh
```

## Bonnes pratiques

1. ✅ **Toujours tester localement** avant de déployer
2. ✅ **Faire des commits clairs** avec des messages descriptifs
3. ✅ **Vérifier les logs** après chaque déploiement
4. ✅ **Sauvegarder avant** les modifications importantes
5. ✅ **Vérifier le site** dans le navigateur après déploiement

