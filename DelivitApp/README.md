# Delivit - Application Mobile de Livraison

## Description
Delivit est une marketplace de livraison mobile permettant aux clients d'acheter des produits auprès de différents marchands, avec gestion des livraisons.

## Structure du Projet
```
DelivitApp/
├── src/
│   ├── assets/          # Images, fonts, animations Lottie
│   ├── components/      # Composants réutilisables
│   │   ├── common/      # Composants communs (Button, Input, etc.)
│   │   ├── auth/        # Composants d'authentification
│   │   ├── catalog/     # Composants du catalogue
│   │   ├── cart/        # Composants du panier
│   │   ├── delivery/    # Composants de livraison
│   │   └── profile/     # Composants de profil
│   ├── screens/         # Écrans de l'application
│   │   ├── auth/        # Écrans d'authentification
│   │   ├── catalog/     # Écrans du catalogue
│   │   ├── cart/        # Écrans du panier
│   │   ├── delivery/    # Écrans de livraison
│   │   ├── profile/     # Écrans de profil
│   │   └── admin/       # Écrans administrateur
│   ├── navigation/      # Configuration de la navigation
│   ├── store/           # Store Redux
│   │   └── slices/      # Slices Redux Toolkit
│   ├── services/        # Services API
│   └── utils/           # Utilitaires
├── App.js               # Point d'entrée principal
└── package.json
```

## Installation

### Prérequis
- Node.js >= 16
- npm ou yarn
- React Native CLI
- Android Studio (pour Android) ou Xcode (pour iOS)

### Étapes

1. Installer les dépendances :
```bash
cd DelivitApp
npm install
```

2. Pour iOS (macOS uniquement) :
```bash
cd ios && pod install && cd ..
npm run ios
```

3. Pour Android :
```bash
npm run android
```

## Variables d'Environnement
Créez un fichier `.env` à la racine avec :
```
API_URL=https://api.delivit.com
MONCASH_CLIENT_ID=votre_client_id
MONCASH_SECRET_KEY=votre_secret_key
STRIPE_PUBLIC_KEY=votre_stripe_key
```

## Fonctionnalités

### Clients
- Inscription/Connexion
- Navigation dans le catalogue
- Recherche de produits
- Gestion du panier
- Commandes et suivi
- Paiement (MonCash, NatCash, Stripe)

### Marchands
- Gestion des produits
- Suivi des commandes
- Tableau de bord

### Administrateurs
- Gestion des utilisateurs
- Gestion des marchands
- Statistiques globales

## Technologies
- React Native 0.72+
- Redux Toolkit
- React Navigation v6
- Lottie React Native
- Axios

## Scripts Disponibles
- `npm start` - Démarre Metro Bundler
- `npm run android` - Lance sur Android
- `npm run ios` - Lance sur iOS
- `npm test` - Exécute les tests
- `npm run lint` - Vérifie le code
