# Audit Responsive — AgroPure Analytics

**Date :** 18 juin 2026  
**Périmètre :** Page d'accueil (`src/routes/$locale/index.tsx`) et sections clés  
**Breakpoints Tailwind v4 (défaut) :** `sm` 640px · `md` 768px · `lg` 1024px · `xl` 1280px · `2xl` 1536px  
**Viewports de référence :** Mobile 390px · Tablette 768px · Desktop 1440px

---

## Score global : **74 / 100**

| Critère | Score | Commentaire |
|---------|-------|-------------|
| Grille & espacements | 82/100 | `max-w-[1200px]`, `px-4 sm:px-8` cohérents sur toutes les sections |
| Typographie responsive | 85/100 | Échelles `text-3xl md:text-4xl` bien appliquées |
| Navigation | 68/100 | Menu hamburger sur tous les breakpoints ; liens absents en barre desktop |
| Sections interactives | 70/100 | Accordéons fonctionnels mais longs sur mobile |
| Médias & hero | 65/100 | Vidéo plein écran OK, poster/nav chevauchement mineur |
| Accessibilité responsive | 72/100 | `aria-*` présents ; scrollbar masquée ; pas de test 1440px dédié |

---

## Méthodologie

Analyse statique du code source, des classes Tailwind et des styles globaux (`src/styles.css`). Vérification des patterns `sm:` / `md:` / `lg:` par section. Build de production exécuté pour confirmer les assets servis.

---

## 1. Hero (`hero-section.tsx`)

### Comportement attendu par viewport

| Viewport | État actuel |
|----------|-------------|
| **390px** | Plein écran (`min-h-svh`), titre `text-4xl`, padding `px-4`, CTA centré — **OK** |
| **768px** | Titre passe à `md:text-6xl`, padding `sm:px-8` — **OK** |
| **1440px** | Titre plafonné à `lg:text-[4.25rem]` (~68px), contenu centré dans `max-w-4xl` — **OK** |

### Points positifs

- Conteneur hero avec coins arrondis adaptatifs (`rounded-[20px] sm:rounded-[24px]`).
- Vidéo en `object-fit: cover` via `.media-cover`.
- `playsInline`, `muted`, `preload="metadata"` — bonnes pratiques mobile.
- Overlay `bg-black/45` assure la lisibilité du texte blanc.

### Problèmes identifiés

| Sévérité | Problème | Détail |
|----------|----------|--------|
| **Moyen** | Espace header fixe | `pt-24` (96px) + nav `py-6` — sur 390px le titre peut sembler légèrement bas ; pas de `pt` responsive |
| **Moyen** | Vidéo identique tous devices | Aucune variante mobile (WebM léger / image statique) — charge ~18 Mo même sur 4G |
| **Faible** | Pas de `prefers-reduced-motion` | La vidéo tourne en boucle même si l'utilisateur demande moins d'animations |
| **Faible** | CTA seul en colonne | Pas de second lien ; acceptable mais peu d'options sur petit écran |

### Correctifs recommandés

```tsx
// Réduire la vidéo sur mobile ou respecter reduced-motion
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isNarrow = window.matchMedia("(max-width: 767px)").matches;

// Dans le JSX : ne monter la <video> que si !prefersReducedMotion && !isNarrow
// Sinon : poster seul ou image statique
```

- Ajouter `pt-20 sm:pt-24` pour affiner le mobile.
- Prévoir `<source media="(min-width: 768px)">` + fichier mobile < 2 Mo.

---

## 2. Industries / Secteurs (`industries-section.tsx`)

### Comportement par viewport

| Viewport | Layout | Interaction |
|----------|--------|-------------|
| **390px** | Colonne (`flex-col`), cartes `aspect-[4/3] min-h-[220px]` | Clic pour expand → `min-h-[360px]` |
| **768px** | Rangée (`md:flex-row`), `md:aspect-square`, `md:flex-1` | Hover **ou** clic selon `isDesktopPointer()` |
| **1440px** | 4 cartes égales dans `max-w-[1200px]` | Hover expand `md:flex-[2.5]` — **OK visuellement** |

### Points positifs

- Pattern accordéon mobile bien pensé (`onClick` vs `onMouseEnter`).
- `aria-expanded`, `role="button"`, navigation clavier (`Enter` / `Espace`).
- Images lazy sauf la première (`loading={i === 0 ? "eager" : "lazy"}`).
- Transition fluide 500ms entre états.

### Problèmes identifiés

| Sévérité | Problème | Détail |
|----------|----------|--------|
| **Élevé** | Scroll vertical excessif (390px) | 4 cartes empilées × ~220px ≈ **880px+** avant expansion — section très longue |
| **Moyen** | Cartes serrées à 768px | 4 colonnes égales ≈ **180px/largeur** — titres `text-base` risquent le wrap agressif |
| **Moyen** | `isDesktopPointer()` = `min-width: 768px` | Tablettes tactiles en paysage déclenchent le hover au toucher suivant, pas au premier tap |
| **Moyen** | Pas de breakpoint `lg` | Entre 768–1023px le layout desktop est forcé alors que l'espace est limité |
| **Faible** | `IntroSection` après FAQ/Contact | Ordre de page atypique ; sur mobile l'intro arrive tard |

### Correctifs recommandés

1. **Mobile 390px** : passer à un carrousel horizontal (`snap-x`) ou accordéon Radix (un seul panneau ouvert) pour réduire la hauteur.
2. **768px** : retarder le layout rangée à `lg:flex-row` (1024px) ou n'afficher que 2 colonnes à `md`.
3. Remplacer `isDesktopPointer()` par `matchMedia("(hover: hover) and (pointer: fine)")` pour distinguer souris et tactile.
4. Ajouter `md:grid-cols-2 lg:flex-row` comme compromis tablette.

---

## 3. Marchés commodités (`commodity-markets-section.tsx` + `styles.css`)

### Comportement par viewport

| Viewport | Layout | Marquee |
|----------|--------|---------|
| **390px** | Colonne unique (`grid` sans `lg:`) | Marquee vertical 4 cartes visibles |
| **768px** | Toujours colonne (grille 2 col à `lg` seulement) | Même marquee — CTA en dessous des prix |
| **1440px** | `lg:grid-cols-2` — prix à gauche, CTA à droite | Hauteur fixe CSS ~19.5rem |

### Points positifs

- `CommodityStaticList` si `prefers-reduced-motion` — excellent pour a11y.
- Boutons haut/bas avec `aria-label` et états `disabled`.
- Masque dégradé `.commodity-marquee` pour fondu haut/bas.

### Problèmes identifiés

| Sévérité | Problème | Détail |
|----------|----------|--------|
| **Moyen** | Grille 2 col uniquement à `lg` (1024px) | À **768px** et **1440px** le comportement diffère ; tablette = layout mobile empilé |
| **Moyen** | Hauteur marquee figée en CSS | `.commodity-marquee { height: calc(4 * 4.5rem + 3 * 0.75rem) }` — si le texte wrap (locale longue), décalage avec `CARD_STEP` |
| **Moyen** | Cartes `min-h-[4.5rem]` + `text-lg` | Sur 390px, noms de produits longs (`truncate` OK) mais prix + unité peuvent déborder si police système plus grande |
| **Faible** | Contrôles verticaux peu intuitifs sur mobile | Flèches haut/bas pour un défilement vertical — acceptable mais pas un pattern natif |
| **Faible** | `order-1` / `order-2` inversés à `lg` | Sur desktop le bloc prix passe à gauche — vérifier cohérence avec la maquette |

### Correctifs recommandés

```css
/* Remplacer hauteur fixe par min-height + aspect ou mesure JS */
.commodity-marquee {
  min-height: calc(4 * 4.5rem + 3 * 0.75rem);
  height: auto;
  max-height: 22rem;
}
```

- Envisager `md:grid-cols-2` pour tablette 768px (prix compacts + CTA adjacent).
- Synchroniser `CARD_STEP` avec une variable CSS `--commodity-card-step`.
- Tester les traductions `zh` / `es` sur 390px (noms de matières premières).

---

## 4. Contact (`contact-section.tsx`)

### Comportement par viewport

| Viewport | Layout formulaire | Grilles champs |
|----------|-------------------|----------------|
| **390px** | Colonne unique (`grid` sans `lg`) | Champs pleine largeur (`sm:grid-cols-2` inactif) — **OK** |
| **768px** | Toujours colonne (2 col à `lg`) | Prénom/Nom et Email/Tél en 2 colonnes (`sm:grid-cols-2`) — **OK** |
| **1440px** | `lg:grid-cols-2` — texte + formulaire côte à côte | Formulaire `md:p-8` — **OK** |

### Points positifs

- `scroll-mt-28` cohérent avec la nav fixe.
- Labels `text-xs`, champs `text-sm` — lisibles sur mobile.
- Checkbox consentement avec lien politique de confidentialité.
- Fond décoratif `aria-hidden` + overlay pour contraste formulaire.

### Problèmes identifiés

| Sévérité | Problème | Détail |
|----------|----------|--------|
| **Moyen** | Section single-col jusqu'à 1024px | À **768px** le formulaire (~600px utile) reste sous le titre — beaucoup de scroll |
| **Moyen** | `sm:grid-cols-2` dès 640px | Sur **390px** OK ; entre 640–767 les paires de champs étroites (~175px/champ) |
| **Faible** | CTA « contacter » duplique le scroll vers `#contact-form` | Le formulaire est déjà visible sur desktop ; sur mobile le lien est utile |
| **Faible** | `textarea rows={4}` | Peut être petit sur mobile ; `resize-y` permet l'agrandissement |

### Correctifs recommandés

1. Passer la grille section à `md:grid-cols-2` (768px) au lieu de `lg:` pour le formulaire à côté du titre sur tablette.
2. Utiliser `grid-cols-1 md:grid-cols-2` sur les paires de champs (éviter `sm:` à 640px).
3. Ajouter `max-w-lg mx-auto lg:max-w-none` sur le formulaire en mode colonne pour centrage mobile.

---

## 5. Navigation (`nav.tsx`) — impact transversal

| Viewport | Comportement |
|----------|--------------|
| **390px** | Sheet latéral, bouton menu 44×44px (`size-11`) — **OK touch target** |
| **768px** | Idem ; lien « Demander une démo » visible à partir de `sm` |
| **1440px** | **Pas de liens ancres en barre** — tout passe par le menu hamburger |

**Problème :** Sur desktop 1440px, l'UX attendue est une nav horizontale ; actuellement seuls langue, thème et hamburger sont visibles.

**Correctif :** `hidden lg:flex` pour les liens `#secteurs`, `#fonctionnalites`, etc.

---

## 6. Styles globaux (`styles.css`)

| Élément | Impact responsive |
|---------|-------------------|
| `overflow-x: hidden` sur `html`/`body` | Évite le scroll horizontal ; peut masquer du contenu débordant au lieu de le corriger |
| Scrollbar masquée | Moins de repère visuel sur longues pages (industries + contact) |
| `.media-cover scale(1.02)` | Léger crop — OK |
| `scroll-behavior: smooth` | Peut gêner `prefers-reduced-motion` (non désactivé ici) |

---

## 7. Autres sections (aperçu)

| Section | Mobile 390 | Tablette 768 | Desktop 1440 | Note |
|---------|------------|--------------|--------------|------|
| **Features** | Boutons wrap, image `min-h-[280px]` | `lg:grid-cols-2` non actif | Grille 2 col à 1024px+ | Nombreux boutons outils — wrap OK |
| **Integrations** | Marquee horizontal, logos `h-8` | `md:h-10` | Centré dans viewport | Pas de pause au touch |
| **Delivery** | Colonne, cartes cliquables | `md:grid-cols-3` | 3 colonnes dans 1200px | **OK** |
| **FAQ** | Accordéon Radix, `max-w-2xl` | Idem | Centré | `-mx-2 sm:mx-0` compense le padding mobile |

---

## Matrice des breakpoints utilisés

```
Section          │ <640 │ 640-767 │ 768-1023 │ ≥1024 │ ≥1440
─────────────────┼──────┼─────────┼──────────┼───────┼──────
Hero             │  ✓   │   ✓     │    ✓     │   ✓   │  ✓
Industries       │ col  │  col    │  row (*) │  row  │ row
Commodity        │ 1col │  1col   │   1col   │ 2col  │ 2col
Contact          │ 1col │ 2fld    │  1col    │ 2col  │ 2col
Features         │ 1col │  1col   │   1col   │ 2col  │ 2col
Nav links        │ menu │  menu   │   menu   │ menu  │ menu (!)
```

(*) Layout rangée dès 768px — peut être trop tôt pour tablette portrait.

---

## Plan d'action priorisé

### Priorité haute

1. Raccourcir la section Industries sur mobile (carrousel ou accordéon exclusif).
2. Afficher la navigation desktop à `lg:`.
3. Détecter `(hover: hover)` au lieu de `min-width: 768px` pour les secteurs.

### Priorité moyenne

4. Activer `md:grid-cols-2` sur Contact et Commodity Markets.
5. Retarder le layout rangée Industries à `lg:`.
6. Ajouter variantes média hero pour mobile.

### Priorité basse

7. Désactiver `scroll-behavior: smooth` si `prefers-reduced-motion`.
8. Revoir l'ordre `IntroSection` (actuellement après FAQ).
9. Pause marquee intégrations au `touchstart`.

---

## Fichiers concernés

- `src/components/sections/hero-section.tsx`
- `src/components/sections/industries-section.tsx`
- `src/components/sections/commodity-markets-section.tsx`
- `src/components/sections/contact-section.tsx`
- `src/components/site/nav.tsx`
- `src/styles.css`

---

*Audit généré par analyse statique du dépôt AgroPure Analytics.*
