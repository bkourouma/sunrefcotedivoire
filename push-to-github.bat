@echo off
echo ========================================
echo Push vers GitHub
echo ========================================
echo.

echo Ajout des fichiers modifies...
git add .

echo.
echo Statut des fichiers:
git status

echo.
echo Creation du commit...
git commit -m "feat: Ajout du systeme bilingue Fr/En et configuration de l'envoi d'emails

- Ajout du systeme de traduction bilingue (Francais/Anglais)
- Configuration de l'envoi d'emails via SMTP Hostinger
- Mise a jour du numero de telephone: +225 27 20 33 02 00
- Amelioration du titre des emails de contact
- Ajout du selecteur de langue dans le header"

echo.
echo Push vers GitHub...
git push

echo.
echo ========================================
echo Termine!
echo ========================================
pause

