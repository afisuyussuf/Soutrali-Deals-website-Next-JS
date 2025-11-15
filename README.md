# 🟩 Soutrali Deals - Site Web Professionnel

Site web moderne et professionnel pour **Soutrali Deals**, une plateforme ivoirienne innovante de mise en relation, e-commerce et services connectés.

## 🚀 Technologies

- **Next.js 16** (App Router) avec TypeScript strict
- **Tailwind CSS 4** avec système de design cohérent
- **Framer Motion** (animations fluides)
- **React Hook Form** + **Zod** (validation de formulaires)
- **Lucide React** (icônes modernes)
- **Zustand** (gestion d'état)

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn

## 🛠️ Installation

1. Cloner le projet
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
soutralideals/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal avec metadata
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css        # Styles globaux et design system
│   ├── about/             # Page À propos
│   ├── services/          # Page Services
│   ├── marketplace/       # Page Marketplace
│   ├── contact/           # Page Contact
│   ├── faq/              # Page FAQ
│   ├── support/          # Page Support
│   ├── cgu/              # Conditions générales
│   └── privacy/          # Politique de confidentialité
├── components/
│   ├── ui/                # Composants UI réutilisables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Input.tsx
│   │   └── FloatingButtons.tsx
│   ├── layout/            # Composants de layout
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Sections de page
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── ServicesCarousel.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Values.tsx
│   │   ├── Stats.tsx
│   │   ├── AppSection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Partners.tsx
│   │   ├── CTA.tsx
│   │   └── SectionHeader.tsx
│   └── animations/        # Composants d'animation
│       └── AnimatedSection.tsx
├── lib/
│   ├── utils.ts           # Utilitaires (cn, etc.)
│   ├── constants.ts       # Constantes et données
│   ├── hooks.ts          # Hooks personnalisés
│   └── metadata.ts       # Génération de metadata
├── config/
│   └── site.ts           # Configuration du site
├── types/
│   └── index.ts          # Types TypeScript globaux
└── public/               # Assets statiques
    └── images/           # Images du site
```

## 🎨 Design System

### Couleurs

- **Vert primaire** : `#10B981` (Croissance, innovation)
- **Bleu primaire** : `#3B82F6` (Confiance, technologie)
- **Palette complète** : Variables CSS définies dans `globals.css`

### Typographie

- **Police principale** : Inter (Google Fonts)
- **Responsive** : Utilisation de `clamp()` pour la typographie scalable
- **Hiérarchie** : Système de tailles cohérent (xs à 6xl)

### Espacements

- Système d'espacements cohérents (xs, sm, md, lg, xl, 2xl, 3xl)
- Utilisation de variables CSS pour la cohérence

### Composants

- **Button** : Variants (primary, secondary, outline) avec tailles (sm, md, lg)
- **Card** : Avec effet hover optionnel
- **Container** : Centrage responsive avec max-widths
- **Input** : Avec label et gestion d'erreurs

## ✨ Fonctionnalités

- ✅ Design responsive (mobile-first)
- ✅ Animations fluides avec Framer Motion
- ✅ SEO optimisé (metadata, Open Graph, Twitter Cards)
- ✅ Accessibilité (ARIA, keyboard navigation, reduced motion)
- ✅ Formulaires avec validation (React Hook Form + Zod)
- ✅ Performance optimisée (Next.js Image, lazy loading)
- ✅ Headers de sécurité
- ✅ Optimisation des images (AVIF, WebP)
- ✅ Boutons flottants (WhatsApp, scroll to top)

## 📱 Pages

1. **Accueil** (`/`) - Landing page complète avec toutes les sections
2. **À propos** (`/about`) - Histoire, vision, mission, valeurs
3. **Services** (`/services`) - Présentation des services
4. **Marketplace** (`/marketplace`) - Présentation de la marketplace
5. **Contact** (`/contact`) - Formulaire de contact validé
6. **FAQ** (`/faq`) - Questions fréquentes avec accordéons
7. **Support** (`/support`) - Formulaire de support
8. **CGU** (`/cgu`) - Conditions générales d'utilisation
9. **Privacy** (`/privacy`) - Politique de confidentialité

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=https://soutralideals.com
```

### Configuration du site

Modifier `config/site.ts` pour personnaliser :
- Nom du site
- Description
- URLs des réseaux sociaux
- Informations de contact

## 📝 Best Practices

- **Structure** : Organisation claire selon les best practices Next.js
- **Types** : TypeScript strict avec types définis dans `types/`
- **Metadata** : Génération centralisée dans `lib/metadata.ts`
- **Performance** : Optimisation des images, lazy loading
- **Accessibilité** : Respect des standards WCAG
- **SEO** : Metadata complète, Open Graph, Twitter Cards

## 🚀 Déploiement

### Vercel (recommandé)

1. Connecter votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Configurer les variables d'environnement
4. Déployer !

### Autres plateformes

Le projet peut être déployé sur toute plateforme supportant Next.js :
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 Licence

Propriété de Soutrali Deals. Tous droits réservés.

## 📄 Crédits

- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Railway](https://railway.app/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/)


