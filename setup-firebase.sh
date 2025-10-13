#!/bin/bash

# Firebase Setup Script für Iphigenie E-Reader
# Dieses Script hilft bei der Einrichtung von Firebase für den globalen Cache

echo "🔥 Firebase Setup für Iphigenie E-Reader"
echo "========================================"
echo ""

echo "📋 Vor der Ausführung dieses Scripts:"
echo "1. Erstellen Sie ein Firebase-Projekt: https://console.firebase.google.com/"
echo "2. Aktivieren Sie Firestore Database"
echo "3. Erstellen Sie eine Web-App in Ihrem Firebase-Projekt"
echo "4. Kopieren Sie die Konfigurationswerte"
echo ""

read -p "Haben Sie diese Schritte abgeschlossen? (y/n): " ready

if [ "$ready" != "y" ]; then
    echo "Bitte führen Sie die obigen Schritte aus und starten Sie dieses Script erneut."
    exit 1
fi

echo ""
echo "📝 Firebase-Konfiguration eingeben:"
echo ""

read -p "Firebase API Key: " api_key
read -p "Auth Domain: " auth_domain
read -p "Project ID: " project_id
read -p "Storage Bucket: " storage_bucket
read -p "Messaging Sender ID: " sender_id
read -p "App ID: " app_id

echo ""
echo "🔧 Erstelle .env Datei..."

# Backup existing .env if it exists
if [ -f ".env" ]; then
    cp .env .env.backup
    echo "✅ Bestehende .env als .env.backup gesichert"
fi

# Create new .env file
cat > .env << EOF
# OpenAI API Configuration
VITE_OPENAI_API_KEY=your-openai-api-key-here

# Firebase Configuration für globalen Cache
VITE_FIREBASE_API_KEY=$api_key
VITE_FIREBASE_AUTH_DOMAIN=$auth_domain
VITE_FIREBASE_PROJECT_ID=$project_id
VITE_FIREBASE_STORAGE_BUCKET=$storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=$sender_id
VITE_FIREBASE_APP_ID=$app_id
EOF

echo "✅ .env Datei erstellt!"
echo ""

echo "🔒 Firestore Sicherheitsregeln:"
echo "Kopieren Sie diese Regeln in Ihre Firebase Console (Firestore Database > Regeln):"
echo ""
echo "rules_version = '2';"
echo "service cloud.firestore {"
echo "  match /databases/{database}/documents {"
echo "    match /explanation_cache/{document} {"
echo "      allow read, write: if true;"
echo "    }"
echo "  }"
echo "}"
echo ""

echo "⚡ Nächste Schritte:"
echo "1. Fügen Sie Ihren OpenAI API-Schlüssel in die .env Datei ein"
echo "2. Kopieren Sie die Firestore-Regeln in die Firebase Console"
echo "3. Starten Sie die Anwendung: npm run dev"
echo ""
echo "🎉 Setup abgeschlossen! Der globale Cache ist jetzt aktiv."

chmod +x setup-firebase.sh
