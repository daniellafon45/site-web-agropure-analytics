# Audit Performance — AgroPure Analytics

**Date :** 18 juin 2026  
**Stack :** TanStack Start · Vite 7 · Nitro · Cloudflare Workers (SSR)  
**Build analysé :** `npm run build` — succès en ~31s

---

## Score global : **46 / 100**

| Pilier | Score | Poids | Commentaire |
|--------|-------|-------|-------------|
| Assets médias | 25/100 | 35% | Vidéo hero ~18 Mo, images PNG/WebP non optimisées |
| JavaScript bundle | 55/100 | 25% | Chunk principal 584 kB (190 kB gzip) — au-dessus du seuil Vite 500 kB |
| Réseau & cache | 50/100 | 20% | Cache long sur `/assets/*` uniquement ; `/videos/*` non couvert |
| SSR & données | 60/100 | 10% | SSR actif CF Workers ; prix commodités fetch client-side |
| Fonts & tiers | 70/100 | 10% | Google Fonts avec `display=swap` — correct |

**Estimation impact utilisateur (4G, première visite homepage FR) :**  
~35–45 Mo transférés · LCP probablement dominé par vidéo hero ou poster · TTI retardé par JS + hydratation

---

## Inventaire des assets critiques

| Asset | Taille | Emplacement | Chargement homepage |
|-------|--------|-------------|---------------------|
| `hero.mp4` | **17,8 Mo** | `public/videos/` | Immédiat (autoplay) |
| `hero-poster.jpg` | **7,1 Mo** | `public/videos/` | `poster` + LCP candidat |
| `contact-formulaire.png` | **6,7 Mo** | `src/assets/` → bundle | Lazy (bas de page) |
| `ag-assistant.png` | **7,2 Mo** | `src/assets/features/` | Si outil actif (features) |
| Secteurs PNG (×4) | **0,5–1,1 Mo** chacun | `src/assets/sectors/` | 1 eager + 3 lazy |
| Commodités WebP (×10) | **36 kB – 3,6 Mo** | `src/assets/commodities/` | Tous via marquee (×2 duplicate) |
| CSS `styles-*.css` | **113 kB** (19 kB gzip) | Build | Bloquant dans `<head>` |

### Anomalie WebP commodités

Les fichiers portent l'extension `.webp` mais **9 sur 10 dépassent 1,5 Mo** (ex. `sorghum.webp` 3,6 Mo, `dap.webp` 3,5 Mo). Seul `wheat.webp` est correctement optimisé (36 kB). Le format ne garantit pas la compression — les sources doivent être ré-encodées (qualité 75–80, dimensions 80×80 pour icônes).

---

## 1. Vidéo Hero

**Fichier :** `src/components/sections/hero-section.tsx`

```tsx
<video preload="metadata" poster="/videos/hero-poster.jpg">
  <source src={import.meta.env.VITE_HERO_VIDEO_URL || "/videos/hero.mp4"} />
</video>
```

| Aspect | État | Impact |
|--------|------|--------|
| Taille fichier | 17,8 Mo | **Critique** — seul plus gros transfert du site |
| Poster | 7,1 Mo | **Critique** — affiché avant lecture, souvent LCP |
| `preload="metadata"` | OK | Limite le préchargement complet |
| Variantes responsive | Absentes | Même fichier 4G / Wi-Fi / mobile |
| Hébergement externe | `VITE_HERO_VIDEO_URL` prévu | Bon pour CDN/streaming si utilisé |
| `prefers-reduced-motion` | Non géré | Vidéo joue quand même |

---

## 2. Images commodités (WebP)

**Fichiers :** `src/lib/commodity-images.ts`, `src/components/ui/commodity-card.tsx`

- 10 icônes 40×40px affichées mais fichiers source jusqu'à **3,6 Mo**.
- Marquee duplique le tableau (`[...quotes, ...quotes]`) → **20 nœuds DOM** avec images.
- `framer-motion` importé pour `whileHover` sur chaque carte — ~62 kB côté serveur, inclus dans le bundle client homepage.

**Impact :** Au chargement de la section marchés, le navigateur peut télécharger plusieurs Mo d'icônes miniature.

---

## 3. En-têtes cache (`public/_headers`)

```
/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

| Route | Cache actuel | Problème |
|-------|--------------|----------|
| `/assets/*` (hash Vite) | 1 an, immutable | **OK** — fichiers fingerprintés |
| `/videos/*` | Aucune règle | Re-téléchargement à chaque visite |
| `/videos/hero-poster.jpg` | Aucune règle | 7 Mo sans cache long |
| `favicon`, `og-image` | Aucune règle | Requêtes répétées |
| HTML (SSR) | Non défini | Correct pour contenu dynamique |

Le build Nitro régénère `.output/public/_headers` avec la même règle `/assets/*` uniquement.

**Headers sécurité** (`src/lib/security-headers.ts`) : appliqués côté Worker SSR — bien. Pas de `Cache-Control` dynamique sur les réponses HTML.

---

## 4. SSR Cloudflare Workers

**Config :** `vite.config.ts` → Nitro `cloudflare` + `src/server.ts` wrapper

| Aspect | État |
|--------|------|
| Déploiement | `wrangler deploy` via `.output/server/wrangler.json` |
| SSR HTML | TanStack Start + React 19 streaming |
| Erreurs SSR | Wrapper `normalizeCatastrophicSsrResponse` — robuste |
| Server functions | `createServerFn` pour contact + commodités |
| Données homepage | **Prix commodités fetch côté client** (`useEffect` + `getCommodityPrices`) |

### Problème SSR : commodités

```tsx
// commodity-markets-section.tsx
useEffect(() => {
  getCommodityPrices().then(setData)...
}, []);
```

- Le HTML initial contient « Chargement… » — pas de données dans le premier rendu.
- Double aller-retour : document SSR → hydratation → RPC server function.
- Cache serveur 1h (`CACHE_TTL_MS`) dans `commodities.server.ts` — bon côté Worker, mais invisible au premier paint.

---

## 5. Bundle JavaScript (build production)

### Chunks client principaux

| Fichier | Taille | Gzip | Page |
|---------|--------|------|------|
| `index-D8HxQNMg.js` | **584 kB** | 190 kB | Runtime + routes partagées |
| `index-C95RgynT.js` | 194 kB | 61 kB | Homepage |
| `nav-DlzVvxKm.js` | 95 kB | 32 kB | Nav + Radix Sheet |
| `styles-*.css` | 113 kB | 19 kB | Global |

Vite avertit : *« Some chunks are larger than 500 kB »*.

### Dépendances lourdes dans `package.json` (homepage impact)

| Package | Usage homepage | Recommandation |
|---------|----------------|----------------|
| `framer-motion` | `CommodityCard` hover | Remplacer par CSS `hover:scale` |
| `@radix-ui/*` (30+ pkgs) | Sheet, Accordion FAQ, Theme | OK si tree-shaken ; beaucoup installés inutilisés |
| `recharts` | Dashboards features | Lazy-load avec `GlassFeatureDashboard` |
| `@tiptap/*` | Admin blog seulement | **Ne doit pas être sur homepage** — vérifier tree-shaking (chunk séparé 417 kB ✓) |
| `lucide-react` | Icônes | Imports nommés — OK |
| `@tanstack/react-query` | Root provider | Minimal si peu de queries homepage |

### Images bundlées Vite (homepage)

Toutes les images importées statiquement sont incluses dans le graphe :

- `feature-backgrounds.ts` — **12 PNG** importés d'un coup (jusqu'à 7,2 Mo chacun).
- `industries-section.tsx` — 4 PNG secteurs (~3,1 Mo total build).
- `commodity-images.ts` — 10 WebP (~22 Mo sources, chargement progressif).

**Problème :** `getFeatureBackground()` charge une seule image à la fois, mais Vite peut précharger le module entier selon le chunk.

---

## 6. Fonts

**Fichier :** `src/routes/__root.tsx`

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:..." />
```

- Roboto 300/400/500/700 — 4 graisses + italique.
- `font-display: swap` via Google — bon.
- `src/fonts.css` : Aeonik commenté (non utilisé).

**Impact :** ~50–100 kB CSS Google + fichiers WOFF2 — acceptable. Self-hosting réduirait la chaîne critique.

---

## 7. CSS & animations (`styles.css`)

| Règle | Coût perf |
|-------|-----------|
| `.logo-track` animation 30–70s | `will-change: transform` — couche GPU OK |
| `.commodity-marquee-track` | `will-change: transform` + transition JS |
| `.reveal` | IntersectionObserver — léger |
| `prefers-reduced-motion` | Désactive marquee CSS, logo, reveal — **bien** |

---

## Quick Wins — Classés par priorité

### 🔴 High (impact majeur, effort faible à moyen)

| # | Action | Gain estimé | Effort |
|---|--------|-------------|--------|
| H1 | **Ré-encoder `hero.mp4`** → < 3 Mo (720p, H.264, CRF 28) ou héberger sur CDN stream | −15 Mo première visite | 1–2 h |
| H2 | **Compresser `hero-poster.jpg`** → WebP/AVIF < 150 kB (1280px max) | −7 Mo LCP | 30 min |
| H3 | **Ré-encoder icônes commodités** → 80×80 WebP < 5 kB chacune | −20 Mo cumulé section | 1 h |
| H4 | **Remplacer `contact-formulaire.png`** par `contact-background.webp` (2,3 Mo) ou version < 200 kB | −6,5 Mo | 30 min |
| H5 | **Ajouter cache `_headers` pour `/videos/*`** | Revisites quasi gratuites | 5 min |

```txt
# public/_headers — ajouter :
/videos/*
  Cache-Control: public, max-age=2592000, stale-while-revalidate=86400

/*.webp
  Cache-Control: public, max-age=604800
```

| H6 | **Supprimer `framer-motion` de `CommodityCard`** — CSS only | −30–60 kB JS + moins d'hydratation | 15 min |
| H7 | **Prefetch SSR prix commodités** via `loader` TanStack Router | −1 RTT, LCP texte marchés | 2 h |

### 🟡 Medium (impact notable)

| # | Action | Gain estimé | Effort |
|---|--------|-------------|--------|
| M1 | Lazy-load dynamique `import()` des backgrounds features | Évite chargement des 12 PNG | 2 h |
| M2 | Convertir secteurs PNG → WebP responsive (`srcset`) | −2 Mo | 1 h |
| M3 | `loading="lazy"` + `decoding="async"` sur vidéo remplacée par poster mobile | Moindre coût mobile | 1 h |
| M4 | Self-host Roboto subset (latin, 400+500) | −1 RTT DNS/Google | 2 h |
| M5 | Code-split `CommodityMarketsSection` avec `React.lazy` | Réduit chunk homepage initial | 1 h |
| M6 | Poster hero : `<link rel="preload" as="image" fetchpriority="high">` | Améliore LCP | 30 min |
| M7 | Auditer Radix — retirer packages non utilisés du `package.json` | −node_modules / risque tree-shake | 2 h |

### 🟢 Low (polish / long terme)

| # | Action | Gain estimé | Effort |
|---|--------|-------------|--------|
| L1 | Service Worker / cache runtime (Cloudflare cache rules) | Revisites | 4 h |
| L2 | `manualChunks` Vite pour séparer `framer-motion`, `radix` | Meilleur cache navigateur | 2 h |
| L3 | AVIF pour toutes les images statiques | −10–30% vs WebP | 3 h |
| L4 | Remplacer Google Fonts par variable font locale | Latence tiers | 2 h |
| L5 | `vite-plugin-compression` (brotli) — CF le fait souvent en edge | Marginal si CF actif | 1 h |
| L6 | Limiter duplications marquee (`loopQuotes`) — virtualiser la liste | Moins de DOM | 3 h |
| L7 | Monitoring RUM (Web Vitals via CF Browser Insights) | Visibilité | 1 h |

---

## Métriques cibles post-optimisation

| Métrique | Actuel (estimé) | Cible |
|----------|-----------------|-------|
| Poids première visite | 35–45 Mo | **< 5 Mo** |
| LCP | 4–8 s (4G) | **< 2,5 s** |
| JS initial (gzip) | ~280 kB | **< 180 kB** |
| Chunk max | 584 kB | **< 350 kB** |
| Cache hit revisite | Partiel | **> 90% assets** |

---

## Architecture réseau (schéma)

```
Utilisateur
    │
    ▼
Cloudflare Workers (SSR) ──► HTML + headers sécurité
    │
    ├── /assets/* (hash) ──► Cache 1 an ✅
    ├── /videos/hero.mp4 ──► Pas de cache ❌ (~18 Mo)
    ├── fonts.googleapis.com ──► Roboto ⚠️
    └── ServerFn getCommodityPrices ──► Après hydratation ⚠️
```

---

## Fichiers à modifier en priorité

| Fichier | Type de changement |
|---------|-------------------|
| `public/videos/hero.mp4` | Ré-encodage |
| `public/videos/hero-poster.jpg` | Compression |
| `public/_headers` | Règles cache `/videos/*` |
| `src/assets/commodities/*.webp` | Ré-encodage 80×80 |
| `src/assets/contact-formulaire.png` | Remplacer par WebP optimisé |
| `src/components/ui/commodity-card.tsx` | Retirer framer-motion |
| `src/components/sections/commodity-markets-section.tsx` | Loader SSR |
| `src/data/feature-backgrounds.ts` | Dynamic imports |
| `vite.config.ts` | `manualChunks` (optionnel) |

---

## Commandes utiles

```bash
# Analyser le bundle (après build)
npx vite-bundle-visualizer

# Tailles des assets publics
Get-ChildItem public -Recurse | Sort-Object Length -Descending | Select Name, @{N='MB';E={[math]::Round($_.Length/1MB,2)}}

# Ré-encoder vidéo (ffmpeg)
ffmpeg -i public/videos/hero.mp4 -vf scale=1280:-2 -c:v libx264 -crf 28 -preset slow -an public/videos/hero-mobile.mp4

# Ré-encoder poster
ffmpeg -i public/videos/hero-poster.jpg -vf scale=1280:-2 -quality 80 public/videos/hero-poster.webp
```

---

## Synthèse exécutive

Le site souffre davantage d'**assets médias non optimisés** que de problèmes de code JavaScript. La vidéo hero (~18 Mo) et le poster (~7 Mo) dominent le budget réseau. Les icônes commodités en WebP sont un faux positif d'optimisation (fichiers multi-Mo pour des affichages 40×40). Le SSR Cloudflare est bien configuré, mais les données de marché arrivent trop tard (client-side). Le cache long sur `/assets/*` est correct pour le build Vite ; **`/videos/*` doit être ajouté**.

**Ordre recommandé :** H1 → H2 → H3 → H4 → H5 → H6 → H7, puis M1–M3.

---

*Audit généré par analyse statique + build production du dépôt AgroPure Analytics.*
