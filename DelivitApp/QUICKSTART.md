# 🚀 Guide de Démarrage Rapide - DelivitApp avec Expo

## 📋 Prérequis

- **Node.js** (v16 ou supérieur)
- **npm** ou **yarn**
- **Expo CLI** : `npm install -g expo-cli`
- **Expo Go** (sur votre mobile pour tester)
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

## 🔧 Installation

```bash
cd DelivitApp

# Installer les dépendances
npm install --legacy-peer-deps

# Ou avec yarn
yarn install
```

## ▶️ Lancement de l'application

### Option 1: Serveur de développement
```bash
npm start
# ou
expo start
```

Un QR code apparaîtra dans le terminal. Scannez-le avec :
- **Android** : Expo Go app
- **iOS** : Appareil photo natif (iOS 11+)

### Option 2: Émulateurs/Simulateurs
```bash
# Android
npm run android
# ou
expo start --android

# iOS (Mac uniquement)
npm run ios
# ou
expo start --ios

# Web
npm run web
# ou
expo start --web
```

## 📱 Fonctionnalités incluses

### ✅ Authentification
- Écran de bienvenue (Splash)
- Connexion
- Inscription

### ✅ Navigation
- Stack Navigator (écrans d'auth + modales)
- Bottom Tabs (navigation principale)
- 4 onglets : Accueil, Panier, Commandes, Profil

### ✅ Catalogue
- Liste des produits
- Détails produit
- Recherche et filtres

### ✅ Panier & Commandes
- Gestion du panier
- Checkout multi-paiement (MonCash, NatCash, Stripe, Cash)
- Historique des commandes

### ✅ Profil
- Informations utilisateur
- Paramètres
- Déconnexion

## 🔐 Configuration des variables d'environnement

Copiez le fichier `.env.example` vers `.env` :

```bash
cp .env.example .env
```

Puis éditez `.env` avec vos clés API :

```env
API_URL=https://api.delivit.com
MONCASH_CLIENT_ID=votre_client_id
STRIPE_PUBLIC_KEY=votre_clé_publique
NATCASH_API_KEY=votre_clé_api
```

## 🏗️ Architecture du projet

```
DelivitApp/
├── src/
│   ├── assets/          # Images, animations, fonts
│   ├── components/      # Composants réutilisables
│   │   ├── auth/        # Composants d'authentification
│   │   ├── cart/        # Composants du panier
│   │   ├── catalog/     # Composants du catalogue
│   │   ├── common/      # Composants communs
│   │   └── profile/     # Composants de profil
│   ├── navigation/      # Configuration navigation
│   ├── screens/         # Écrans principaux
│   │   ├── auth/        # Écrans d'authentification
│   │   ├── cart/        # Écrans du panier
│   │   ├── catalog/     # Écrans du catalogue
│   │   └── profile/     # Écrans de profil
│   ├── services/        # API calls (Axios)
│   ├── store/           # Redux Toolkit
│   │   └── slices/      # Slices Redux
│   └── utils/           # Utilitaires
├── App.js               # Point d'entrée
├── app.json             # Configuration Expo
├── package.json         # Dépendances
└── .env                 # Variables d'environnement
```

## 🎨 Personnalisation

### Couleurs de la marque
Modifiez les couleurs dans `src/utils/constants.js` :

```javascript
export const COLORS = {
  primary: '#FF6B35',    // Orange Delivit
  secondary: '#2ECC71',  // Vert succès
  // ...
};
```

### Icônes et Splash Screen
Remplacez les images placeholder dans `src/assets/images/` :
- `icon.png` (1024x1024)
- `splash.png` (1242x2436)
- `adaptive-icon.png` (1080x1080)
- `favicon.png` (48x48)

## 🧪 Tests

```bash
# Lancer les tests
npm test
```

## 📦 Build pour production

### Android APK
```bash
expo build:android
# ou avec EAS Build
eas build --platform android
```

### iOS IPA
```bash
expo build:ios
# ou avec EAS Build
eas build --platform ios
```

## 🔗 Liens utiles

- [Documentation Expo](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Delivit README](./README.md)

## 🆘 Support

En cas de problème :
1. Vérifiez que toutes les dépendances sont installées
2. Redémarrez le serveur Expo (`Ctrl+C` puis `npm start`)
3. Effacez le cache : `expo start -c`
4. Consultez les issues GitHub

---

**Développé avec ❤️ pour Delivit**
