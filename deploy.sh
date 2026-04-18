#!/bin/bash

# Script de déploiement pour sunrefcotedivoire.com
# À exécuter sur le serveur VPS

set -e  # Arrêter le script en cas d'erreur

echo "🚀 Début du déploiement..."
echo ""

# Aller dans le répertoire du projet
echo "📁 Changement de répertoire..."
cd /var/www/sunrefci || {
    echo "❌ Erreur: Impossible d'accéder au répertoire /var/www/sunrefci"
    exit 1
}

# Récupérer les dernières modifications
echo "📥 Récupération des modifications depuis GitHub..."
if ! git pull origin main; then
    echo "❌ Erreur lors de la récupération des modifications"
    exit 1
fi
echo "✅ Modifications récupérées"
echo ""

# Installer les nouvelles dépendances si nécessaire
echo "📦 Installation des dépendances..."
if ! npm install; then
    echo "❌ Erreur lors de l'installation des dépendances"
    exit 1
fi
echo "✅ Dépendances installées"
echo ""

# Build de l'application
echo "🔨 Construction de l'application..."
if ! npm run build; then
    echo "❌ Erreur lors de la construction de l'application"
    echo "📋 Vérifiez les logs ci-dessus pour plus de détails"
    exit 1
fi
echo "✅ Application construite avec succès"
echo ""

# Redémarrer l'application avec PM2
echo "🔄 Redémarrage de l'application..."
if ! pm2 restart sunref-ci; then
    echo "❌ Erreur lors du redémarrage de l'application"
    echo "💡 Essayez: pm2 start npm --name 'sunref-ci' -- start"
    exit 1
fi
echo "✅ Application redémarrée"
echo ""

echo "✅ Déploiement terminé avec succès!"
echo ""
echo "📊 Statut de l'application:"
pm2 status
echo ""
echo "📋 Pour voir les logs en temps réel: pm2 logs sunref-ci"

