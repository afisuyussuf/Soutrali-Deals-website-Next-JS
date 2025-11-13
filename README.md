# 🟩 Soutrali Deals - Site Web

Site web moderne et professionnel pour **Soutrali Deals**, une plateforme ivoirienne innovante de mise en relation, e-commerce et services connectés.

## 🚀 Technologies

- **Next.js 16** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS 4**
- **Framer Motion** (animations)
- **React Hook Form** + **Zod** (formulaires)
- **Lucide React** (icônes)

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn

## 🛠️ Installation

1. Cloner le projet (ou utiliser le projet existant)
2. Installer les dépendances :

```bash
npm install
```

## 🏃 Développement

Lancer le serveur de développement :

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build pour production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
src/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── about/             # Page À propos
│   ├── services/          # Page Services
│   ├── marketplace/       # Page Marketplace
│   ├── contact/           # Page Contact
│   └── faq/              # Page FAQ
├── components/
│   ├── ui/                # Composants UI réutilisables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── Input.tsx
│   ├── layout/            # Composants de layout
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Sections de page
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Values.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   └── animations/        # Composants d'animation
│       └── AnimatedSection.tsx
├── lib/
│   ├── utils.ts           # Utilitaires
│   ├── constants.ts       # Constantes et données
│   └── hooks.ts          # Hooks personnalisés
└── public/               # Assets statiques
```

## 🎨 Design System

### Couleurs

- **Vert primaire** : `#10B981` (Croissance)
- **Bleu primaire** : `#3B82F6` (Confiance)
- **Neutres** : Palette de gris pour le texte et les arrière-plans

### Typographie

- **Police principale** : Inter (Google Fonts)
- **Responsive** : Utilisation de `clamp()` pour la typographie scalable

## ✨ Fonctionnalités

- ✅ Design responsive (mobile-first)
- ✅ Animations fluides avec Framer Motion
- ✅ SEO optimisé (metadata, Open Graph)
- ✅ Accessibilité (ARIA, keyboard navigation, reduced motion)
- ✅ Formulaires avec validation (React Hook Form + Zod)
- ✅ Performance optimisée (Next.js Image, lazy loading)

## 📱 Pages

1. **Accueil** (`/`) - Landing page complète avec toutes les sections
2. **À propos** (`/about`) - Histoire, vision, mission, valeurs
3. **Services** (`/services`) - Présentation des services et processus
4. **Marketplace** (`/marketplace`) - Présentation de la marketplace
5. **Contact** (`/contact`) - Formulaire de contact
6. **FAQ** (`/faq`) - Questions fréquentes avec accordéons

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env.local` si nécessaire :

```env
# Exemple (à adapter selon vos besoins)
NEXT_PUBLIC_SITE_URL=https://soutralideals.com
```

## 📝 Notes

- Les animations respectent les préférences `prefers-reduced-motion`
- Toutes les images doivent être optimisées avec Next.js Image
- Le code est en TypeScript strict pour une meilleure robustesse

## 🚀 Déploiement

### Vercel (recommandé)

1. Connecter votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Déployer !

### Autres plateformes

Le projet peut être déployé sur toute plateforme supportant Next.js :
- Netlify
- AWS Amplify
- Railway
- etc.

## 📄 Licence

© 2025 Soutrali Deals. Tous droits réservés.

## 👥 Support

Pour toute question ou problème, contactez l'équipe Soutrali Deals.

---

**Développé avec ❤️ pour Soutrali Deals**
