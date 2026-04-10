# 🚚 Delivit - Application Mobile de Livraison

[![React Native](https://img.shields.io/badge/React%20Native-0.72+-61DAFB?style=for-the-badge&logo=react)](https://reactnative.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android-blue?style=for-the-badge)]()

**Delivit** est une application mobile de livraison connectant marchands et clients. Elle offre une expérience d'achat fluide de type "Marketplace" (style Amazon) avec une gestion simplifiée des commandes et des paiements locaux et internationaux.

---

## 📋 Table des matières

1. [Caractéristiques](#-caractéristiques)
2. [Stack Technologique](#-stack-technologique)
3. [Architecture du Projet](#-architecture-du-projet)
4. [Installation & Configuration](#-installation--configuration)
5. [Configuration des Paiements (Important)](#-configuration-des-paiements-important)
6. [Guide des Animations (Lottie)](#-guide-des-animations-lottie)
7. [Roadmap de Développement](#-roadmap-de-développement)
8. [Contribuer](#-contribuer)

---

## ✨ Caractéristiques

### 👤 Espace Client
*   **Navigation sans compte :** Possibilité de naviguer dans le catalogue en mode visiteur.
*   **Catalogue Avancé :** Recherche, filtres par catégorie, marchand, et favoris.
*   **Interface Moderne :** Navigation centrale flottante style "Telegram".
*   **Panier & Commandes :** Gestion dynamique du panier et suivi de commande en temps réel.
*   **Paiement Multi-plateforme :** Support de MonCash, NatCash et Stripe.

### 🏪 Espace Marchand
*   **Tableau de bord :** Statistiques de ventes et activité.
*   **Gestion de catalogue :** Ajout, modification et suppression de produits avec photos.
*   **Gestion des commandes :** Acceptation, refus et marquage "Livrée".

### 🔒 Transversal
*   **Notifications Push :** Alertes pour nouvelles commandes et statuts.
*   **Support Cross-Platform :** iOS et Android via React Native.

---

## 🛠 Stack Technologique

*   **Framework :** React Native (CLI)
*   **State Management :** Redux Toolkit
*   **Navigation :** React Navigation (v6)
*   **UI / Animations :** 
    *   `lottie-react-native` (Animations fluides)
    *   `react-native-vector-icons`
*   **Réseau :** Axios
*   **Paiements :** SDKs MonCash, NatCash, Stripe

---

## 📂 Architecture du Projet

```text
delivit-app/
├── 📂 src/
│   ├── 📂 assets/
│   │   ├── 📂 animations/      # Fichiers JSON Lottie (Splash, Loading, Success)
│   │   ├── 📂 images/          # Logos, icônes, placeholders
│   │   └── 📂 fonts/           # Polices personnalisées
│   │
│   ├── 📂 components/
│   │   ├── 📂 common/          # Boutons, Inputs, Cards réutilisables
│   │   ├── 📂 animations/      # Wrappers pour Lottie (ex: <LottieLoader />)
│   │   └──  layout/          # Header, BottomTabNav
│   │
│   ├── 📂 screens/
│   │   ├── 📂 Auth/            # Splash, Onboarding, Login, Register
│   │   ├── 📂 Client/          # Home, Search, ProductDetails, Cart, Checkout
│   │   ├── 📂 Merchant/        # Dashboard, ProductManager, OrderManager
│   │   └── 📂 Admin/           # (Interface Web/Interne)
│   │
│   ├── 📂 navigation/          # Configuration des stacks et tabs
│   ├── 📂 store/               # Redux slices (auth, cart, products)
│   ├── 📂 services/            # Appels API (PaymentService, MerchantService)
│   └──  utils/               # Helpers, Constants, AnimationMappings
│
├── 📂 android/                 # Code natif Android
├── 📂 ios/                     # Code natif iOS
├── .env.example                # Exemple de variables d'environnement
└── README.md