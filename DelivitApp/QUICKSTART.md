# Guide de Démarrage Rapide - DelivitApp

## 📦 Installation

### 1. Installer les dépendances
```bash
cd DelivitApp
npm install
```

### 2. Configuration des variables d'environnement
```bash
cp .env.example .env
```
Modifiez le fichier `.env` avec vos propres clés API.

### 3. Installation iOS (macOS uniquement)
```bash
cd ios
pod install
cd ..
```

### 4. Lancer l'application

**Pour Android:**
```bash
npm run android
```

**Pour iOS:**
```bash
npm run ios
```

**Démarre Metro Bundler seul:**
```bash
npm start
```

## 🏗️ Structure du Projet

```
DelivitApp/
├── App.js                 # Point d'entrée principal
├── package.json           # Dépendances et scripts
├── README.md              # Documentation
├── .env.example           # Exemple de configuration
└── src/
    ├── assets/            # Images, fonts, animations
    ├── components/        # Composants réutilisables
    │   ├── common/        # Boutons, inputs, etc.
    │   ├── auth/          # Composants d'authentification
    │   └── ...
    ├── screens/           # Écrans de l'application
    │   ├── auth/          # Login, Register, Splash
    │   ├── catalog/       # Home, ProductDetail
    │   ├── cart/          # Cart, Checkout
    │   ├── profile/       # Profile, Orders
    │   └── admin/         # Écrans admin (à implémenter)
    ├── navigation/        # Configuration React Navigation
    ├── store/             # Redux Toolkit
    │   └── slices/        # Auth, Cart, Products, Orders
    ├── services/          # Appels API
    └── utils/             # Fonctions utilitaires
```

## 🔧 Fonctionnalités Implémentées

### ✅ Authentification
- Écran de splash
- Connexion
- Inscription
- Déconnexion
- Gestion du state avec Redux

### ✅ Catalogue Produits
- Liste des produits avec grille
- Filtrage par catégorie
- Recherche de produits
- Détails du produit
- Ajout au panier

### ✅ Panier
- Voir les articles du panier
- Modifier les quantités
- Supprimer des articles
- Calcul automatique du total

### ✅ Commandes
- Processus de checkout
- Sélection de l'adresse de livraison
- Choix du mode de paiement (MonCash, NatCash, Stripe, Cash)
- Historique des commandes
- Suivi du statut des commandes

### ✅ Profil Utilisateur
- Informations utilisateur
- Menu de navigation
- Paramètres
- Déconnexion

## 🎨 Design System

**Couleurs principales:**
- Primaire: `#FF6B35` (Orange)
- Secondaire: `#f5f5f5` (Gris clair)
- Texte: `#333`, `#666`, `#999`
- Succès: `#4CAF50`
- Erreur: `#ff4444`

## 📱 Navigation

L'application utilise React Navigation v6 avec:
- **Stack Navigator**: Pour la navigation principale (Splash → Login → Main)
- **Bottom Tab Navigator**: Pour les onglets principaux (Accueil, Panier, Commandes, Profil)

## 🔌 Intégrations de Paiement

Le projet est configuré pour supporter:
- **MonCash**: API de paiement haïtienne
- **NatCash**: Solution de paiement mobile
- **Stripe**: Paiement par carte bancaire internationale
- **Cash**: Paiement à la livraison

## 🚀 Prochaines Étapes

### À implémenter:
1. **Backend API**: Créer l'API backend pour connecter l'application
2. **AsyncStorage**: Persister les données utilisateur localement
3. **Push Notifications**: Intégrer Firebase Cloud Messaging
4. **Géolocalisation**: Suivi en temps réel des livraisons
5. **Chat**: Support client en temps réel
6. **Écrans Marchand**: Gestion des produits et commandes
7. **Écrans Admin**: Dashboard administrateur
8. **Tests**: Tests unitaires et d'intégration

### Améliorations UI/UX:
- Animations Lottie pour le chargement
- Skeleton screens pour le loading
- Dark mode
- Support multi-langues (Français, Créole, Anglais)

## 🐛 Résolution de Problèmes

### Erreur: "No space left on device"
```bash
# Nettoyer le cache npm
npm cache clean --force

# Supprimer node_modules et réinstaller
rm -rf node_modules
npm install
```

### Erreur Metro Bundler
```bash
# Réinitialiser le cache
npm start -- --reset-cache
```

### Problèmes Android
```bash
# Nettoyer le build Android
cd android && ./gradlew clean && cd ..
```

### Problèmes iOS
```bash
# Nettoyer le build iOS
cd ios && xcodebuild clean && cd ..
```

## 📞 Support

Pour toute question ou problème, consultez la documentation complète dans le README.md principal.

---

**Développé avec ❤️ pour Delivit**
