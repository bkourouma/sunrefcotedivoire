@echo off
echo ========================================
echo Creation du fichier .env.local
echo ========================================
echo.

if exist .env.local (
    echo Le fichier .env.local existe deja.
    echo Voulez-vous le remplacer ? (O/N)
    set /p reponse=
    if /i not "%reponse%"=="O" (
        echo Operation annulee.
        pause
        exit /b
    )
)

(
echo # SMTP Configuration
echo SMTP_HOST=smtp.hostinger.com
echo SMTP_PORT=465
echo SMTP_SECURE=true
echo SMTP_USER=formations@allianceconsultants.net
echo SMTP_PASS=your_smtp_password_here
echo SMTP_FROM=no-reply@allianceconsultants.net
echo.
echo # Email recipients ^(actuellement non utilises en mode test^)
echo EMAIL_RECIPIENT_1=mikou.nguessan@cgeci.ci
echo EMAIL_RECIPIENT_2=yaobla.amani@cgeci.ci
) > .env.local

echo.
echo Fichier .env.local cree avec succes !
echo.
echo IMPORTANT: Redemarrez le serveur de developpement ^(Ctrl+C puis npm run dev^)
echo.
pause
