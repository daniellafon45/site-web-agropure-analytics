# Audit SEO — AgroPure Analytics

**Site :** https://agropure-analytics.com  
**Date :** 18 juin 2026  
**Stack :** TanStack Start / React 19, Cloudflare Workers  
**Langues :** FR, EN, ZH (zh-Hans), ES

---

## Résumé exécutif

Le site AgroPure Analytics présente une **architecture SEO moderne et intentionnelle** : métadonnées par route via `buildPageHead()`, balises hreflang dans le `<head>`, JSON-LD (Organization, WebSite, SoftwareApplication, FAQPage, Article), `robots.txt` permissif incluant les crawlers IA, `llms.txt` pour la découvrabilité LLM, et un sitemap multilingue de **52 URLs**.

Trois problèmes **bloquants ou à fort impact** ont été identifiés :

1. **Bug hreflang dans `sitemap.xml`** — toutes les balises `xhtml:link` pointent vers des URLs invalides (`/fr/fr`, `/en/en/blog/...`) à cause d'une erreur dans `scripts/generate-sitemap.mjs`.
2. **`og-image.png` manquant** — référencé dans `site-config.ts` mais absent du dossier `public/`.
3. **Incohérence marque AquaPure** dans `privacy-policy.ts` (fichier mort) et métadonnées racine en anglais fixe dans `__root.tsx`.

**Score SEO global : 54 / 100**

| Catégorie | Score | Commentaire |
|-----------|-------|-------------|
| Indexabilité & crawl | 72 | robots.txt OK, sitemap présent mais hreflang cassé |
| Métadonnées on-page | 68 | Bon par route ; root shell statique EN |
| International (hreflang) | 35 | Head correct, sitemap incorrect |
| Données structurées | 78 | JSON-LD riche ; SoftwareApplication `price: 0` discutable |
| Contenu & mots-clés | 70 | Blog + FAQ solides |
| Performance technique SEO | 55 | OG image absente, fonts Google externes |
| Confiance / E-E-A-T | 45 | Stats non sourcées, politique privacy légère |

---

## 1. Configuration SEO (`site-config.ts`)

### Constantes

```ts
SITE_URL = "https://agropure-analytics.com"
SITE_NAME = "AgroPure Analytics"
CONTACT_EMAIL = "contact@agropure-analytics.com"
DEFAULT_LOCALE = "en"  // via @/i18n/types
```

### `PUBLIC_PATHS` — 52 chemins indexables

| Type | Chemins |
|------|---------|
| Home | `/fr`, `/en`, `/zh`, `/es` |
| Confidentialité | `/{locale}/confidentialite` × 4 |
| Blog index | `/{locale}/blog` × 4 |
| Articles | 10 slugs × 4 locales = 40 |

### `buildPageHead()` — implémentation correcte

La fonction génère pour chaque page :

- `<title>`, `<meta name="description">`
- `<link rel="canonical">`
- `<link rel="alternate" hreflang="...">` pour fr, en, zh-Hans, es
- `<link rel="alternate" hreflang="x-default">` → `/en`
- Open Graph : title, description, type, url, site_name, locale, locale:alternate, image
- Twitter Card : summary_large_image

**Exemple de logique hreflang (correcte dans le HTML)** :

Pour une page `/fr/blog/slug`, les alternates pointent vers `/en/blog/slug`, `/zh/blog/slug`, etc. via `localePath()`.

### JSON-LD

| Type | Emplacement | Notes |
|------|-------------|-------|
| Organization + WebSite + SoftwareApplication | `__root.tsx` (shell) + `$locale/index.tsx` | Duplication Organization sur home |
| FAQPage | `$locale/index.tsx` | 6 questions FR/EN/etc. |
| Article | `$locale/blog/$slug.tsx` | Par article |

**Point d'attention — SoftwareApplication** :

```json
"offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Contact for pricing" }
```

Google peut interpréter cela comme produit gratuit. Préférer `price: null` ou retirer `offers` pour un produit B2B sur devis.

---

## 2. `robots.txt` — ✅ Conforme

```
User-agent: *
Allow: /

User-agent: GPTBot / ChatGPT-User / PerplexityBot / ClaudeBot / anthropic-ai / Google-Extended / Bingbot
Allow: /

Sitemap: https://agropure-analytics.com/sitemap.xml
```

**Points positifs :**

- Aucun `Disallow` bloquant.
- Crawlers IA explicitement autorisés (GEO).
- Sitemap déclaré.

**Recommandations mineures :**

- Ajouter `Host:` n'est pas standard Google — ne pas ajouter.
- Vérifier que `/admin/*` n'est pas exposé en production (routes admin blog présentes dans le code).

---

## 3. `sitemap.xml` — ⚠️ BUG HREFLANG CRITIQUE

### Symptôme

Chaque entrée `<url>` contient des alternates **invalides** :

```xml
<loc>https://agropure-analytics.com/fr</loc>
<xhtml:link rel="alternate" hreflang="fr" href="https://agropure-analytics.com/fr/fr"/>
<xhtml:link rel="alternate" hreflang="en" href="https://agropure-analytics.com/en/fr"/>
```

Au lieu de :

```xml
<xhtml:link rel="alternate" hreflang="fr" href="https://agropure-analytics.com/fr"/>
<xhtml:link rel="alternate" hreflang="en" href="https://agropure-analytics.com/en"/>
```

### Cause racine — `scripts/generate-sitemap.mjs`

```javascript
function alternates(path) {
  return LOCALES.map(
    (loc) =>
      `    <xhtml:link rel="alternate" hreflang="${HREFLANG[loc]}" href="${SITE_URL}/${loc}${path}"/>`,
  ).join("\n");
}

// paths incluent déjà la locale : "/fr", "/fr/blog", etc.
const paths = [
  ...LOCALES.map((l) => `/${l}`),
  ...LOCALES.map((l) => `/${l}/confidentialite`),
  ...
];
```

Quand `path = "/fr"`, l'alternate FR devient `SITE_URL + "/fr" + "/fr"` = **`/fr/fr`**.

### Impact SEO

| Impact | Sévérité |
|--------|----------|
| Google ignore les hreflang du sitemap | Élevée |
| Signaux multilingues contradictoires (head vs sitemap) | Élevée |
| Crawl budget gaspillé sur URLs 404 potentielles | Moyenne |
| Bing / Yandex même comportement | Élevée |

### Correction recommandée

Extraire le **suffixe sans locale** avant de générer les alternates :

```javascript
function localeSuffix(path) {
  return path.replace(/^\/(fr|en|zh|es)/, "") || "";
}

function alternates(path) {
  const suffix = localeSuffix(path);
  return LOCALES.map(
    (loc) =>
      `    <xhtml:link rel="alternate" hreflang="${HREFLANG[loc]}" href="${SITE_URL}/${loc}${suffix}"/>`,
  ).join("\n");
}
```

Puis exécuter `node scripts/generate-sitemap.mjs` et redéployer.

**Note :** les balises hreflang dans le `<head>` HTML (via `buildPageHead`) sont **correctes** — seul le sitemap est affecté. Google peut toutefois prioriser le sitemap pour le discovery multilingue.

---

## 4. `llms.txt` — ✅ Bon pour GEO

Contenu structuré :

- Description entreprise
- URLs par langue
- Secteurs et produits
- Contact

**Améliorations suggérées :**

- Ajouter les URLs blog principales.
- Remplacer « EOSDA » par formulation neutre si ce n'est pas un partenariat public.
- Ajouter `Sitemap: https://agropure-analytics.com/sitemap.xml`.

---

## 5. Métadonnées par route

### `__root.tsx` — shell global

```tsx
head: () => buildPageHead({
  title: `${SITE_NAME}, Agricultural data into real-time action`,
  description: "National platforms, farmer apps and credit scoring...",
  path: localePath(DEFAULT_LOCALE),  // /en
  locale: DEFAULT_LOCALE,             // en
})
```

```tsx
<html lang={LOCALE_HTML_LANG[DEFAULT_LOCALE]}>  // lang="en" toujours
```

**Problèmes :**

| Problème | Impact |
|----------|--------|
| `<html lang="en">` fixe pour toutes les pages | Moyen — les routes `$locale` ne mettent pas à jour `lang` sur `<html>` |
| Meta root en anglais pour pages sans override | Faible — les routes enfants surchargent via TanStack Router `head` |
| JSON-LD Organization en anglais dans le shell | Faible |

### `$locale/index.tsx` — ✅ Correct

```tsx
buildPageHead({
  title: t.meta.homeTitle,
  description: t.meta.homeDescription,
  path: localePath(locale),
  locale,
})
```

Titres localisés, ex. FR : *« AgroPure Analytics, Moins de stress. Moins de coûts. Plus de rendement. »*

### `$locale/confidentialite.tsx`

- Title/description depuis `t.meta.privacyTitle` (AgroPure ✅)
- Contenu page depuis `t.privacy` (4 sections simplifiées)
- **Non utilisé :** `getPrivacyPolicy()` de `privacy-policy.ts` (AquaPure ❌)

### Blog

- Index et articles : `buildPageHead` + `articleJsonLd`
- Slugs EN pour toutes les langues (bon pour cohérence hreflang, limite SEO local ZH/ES sur URL)

---

## 6. Politique de confidentialité — incohérence de marque

### Fichier mort : `src/content/legal/privacy-policy.ts`

| Champ | Valeur incorrecte |
|-------|-------------------|
| Marque | AquaPure Analytics |
| Domaine | aquapure-analytics.com |
| Email | contact@aquapure-analytics.com |
| Meta | « Politique de confidentialité d'AquaPure Analytics » |

**Statut :** aucun import dans le codebase — **non rendu**.

### Fichier actif : `src/i18n/translations/*.ts` → `privacy`

| Champ | Valeur |
|-------|--------|
| Marque | AgroPure Analytics |
| Email | contact@agropure-analytics.com |
| Sections | 4 (collecte, utilisation, conservation, droits) |

**Risques SEO / conformité :**

- Contenu privacy trop court pour Loi 25 (vs 10 sections dans le fichier mort).
- Pas de mention Web3Forms dans la politique affichée (présente dans `privacy-policy.ts`).
- URL `/confidentialite` en français pour toutes les locales — acceptable mais non idéal pour ES (`privacidad`) et EN (`privacy`).

---

## 7. Formulaire Web3Forms — implications SEO & confiance

### Architecture

```
contact-section.tsx
  → submitContactForm (TanStack Server Fn)
    → contact-mail.server.ts
      → POST api.web3forms.com/submit
```

### Configuration requise

| Variable | Rôle |
|----------|------|
| `WEB3FORMS_ACCESS_KEY` | Secret Cloudflare Workers / `.env` local |
| Dashboard Web3Forms | Destinataire `noreply@agropure-analytics.com` |

### Impact SEO indirect

- Formulaire cassé = **taux de rebond élevé** sur `#contact`, signal UX négatif.
- Pas de page `/merci` post-conversion — impossible de tracker les conversions organiques.
- Données personnelles transitent par Web3Forms (tiers US) — doit figurer dans la politique de confidentialité **affichée**.

---

## 8. Contenu & stratégie de mots-clés

### Mots-clés cibles identifiés

| Cluster | Où optimisé | Force |
|---------|-------------|-------|
| Plateforme suivi cultures nationale | Hero, FAQ, blog | Fort |
| Diagnostic ravageurs temps réel | Features, blog | Fort |
| Scoring crédit agricole | Industries assurance, blog | Fort |
| Agriculture de précision Afrique | FAQ, llms.txt | Moyen |
| API AgTech white-label | Blog, FAQ | Moyen |
| Traçabilité coopérative | Industries, blog | Moyen |

### Blog — 10 articles × 4 langues

Slugs (EN, partagés) :

1. `national-crop-monitoring-platform`
2. `real-time-pest-diagnostics-field`
3. `agricultural-credit-scoring-insurers`
4. `cooperative-traceability-supply-chain`
5. `digital-farm-survey-mobile-data`
6. `field-boundary-detection-ai-parcels`
7. `smallholder-credit-data-africa`
8. `satellite-drought-monitoring-crops`
9. `agtech-api-white-label-integration`
10. `parametric-insurance-crop-data`

**Forces :** couverture sémantique large, maillage interne FAQ → blog.

**Faiblesses :**

- Slugs 100 % anglais (opportunité slugs localisés ou hreflang slug mapping).
- Pas de dates `dateModified` visibles pour fraîcheur.
- Images article optionnelles dans `articleJsonLd`.

### FAQ — rich snippets

6 questions avec `FAQPage` JSON-LD — éligible aux rich results Google. Contenu `answerHtml` avec liens internes : excellent pour le maillage.

---

## 9. Assets & partage social

| Asset | Chemin | Statut |
|-------|--------|--------|
| Favicon | `/favicon.png` | Référencé dans root |
| Apple touch | `/apple-touch-icon.png` | Référencé + JSON-LD logo |
| OG image | `/og-image.png` | **❌ Absent de `public/`** |
| Hero poster | `/videos/hero-poster.jpg` | Hors public/ (build assets) |
| Hero video | `/videos/hero.mp4` ou `VITE_HERO_VIDEO_URL` | Variable |

**Impact OG image manquante :** partages LinkedIn/Twitter/WhatsApp sans visuel — CTR social réduit.

**Recommandation :** créer `public/og-image.png` 1200×630 avec logo, tagline et visuel agricole.

---

## 10. Technique & performance (SEO)

### Points positifs

- SSR via TanStack Start — contenu indexable.
- `loading="lazy"` sur images section contact.
- `preload="metadata"` sur vidéo hero.
- Headers sécurité Cloudflare (`_headers`).
- Cache immutable sur `/assets/*`.

### Points d'attention

| Élément | Impact Core Web Vitals / SEO |
|---------|------------------------------|
| Google Fonts (Roboto) externe | LCP, privacy |
| Vidéo hero autoplay | LCP mobile |
| Pas de `generate-sitemap` dans `npm run build` | Sitemap peut diverger du code |
| Commodity API live | TTFB variable sur section marchés |

**Recommandation :** ajouter `node scripts/generate-sitemap.mjs` au script `build`.

---

## 11. Internationalisation SEO

### Mapping locales

| Code route | HTML lang | hreflang | OG locale |
|------------|-----------|----------|-----------|
| fr | fr | fr | fr_CA |
| en | en | en | en_US |
| zh | zh-Hans | zh-Hans | zh_CN |
| es | es | es | es_ES |

### x-default

Pointe vers `/en` — cohérent avec `DEFAULT_LOCALE = "en"`.

**Incohérence documentaire :** README indique redirection `/` → `/fr`, code redirige vers `/en`.

### URL confidentialité

`/confidentialite` pour toutes les langues — fonctionnel mais sous-optimal pour :

- Requêtes « privacy policy » EN
- CTR SERP localisé

---

## 12. Checklist technique SEO

| Critère | Statut |
|---------|--------|
| HTTPS (production) | ✅ Attendu Cloudflare |
| robots.txt | ✅ |
| sitemap.xml | ⚠️ Hreflang cassé |
| Canonical par page | ✅ |
| hreflang HTML | ✅ |
| hreflang sitemap | ❌ |
| Title unique par page | ✅ |
| Meta description | ✅ |
| JSON-LD | ✅ |
| OG tags | ⚠️ Image manquante |
| llms.txt | ✅ |
| 404 page | ✅ |
| Mobile-friendly | ✅ (responsive) |
| Structured FAQ | ✅ |
| Breadcrumbs JSON-LD | ❌ |
| Hreflang slug localisés | ❌ |

---

## Top 10 corrections SEO prioritaires

| # | Priorité | Action | Fichier(s) | Effort |
|---|----------|--------|------------|--------|
| 1 | **Élevée** | Corriger `alternates()` dans `generate-sitemap.mjs` et régénérer sitemap | `scripts/generate-sitemap.mjs`, `public/sitemap.xml` | 30 min |
| 2 | **Élevée** | Créer et déployer `public/og-image.png` | `public/` | 1 h |
| 3 | **Élevée** | Supprimer/corriger `privacy-policy.ts` AquaPure ; enrichir `t.privacy` avec tiers Web3Forms | `privacy-policy.ts`, `fr.ts`, `en.ts` | 2 h |
| 4 | **Élevée** | Dynamiser `<html lang>` selon `$locale` | `__root.tsx` ou layout locale | 1 h |
| 5 | **Moyenne** | Intégrer `generate-sitemap.mjs` dans `npm run build` | `package.json` | 15 min |
| 6 | **Moyenne** | Retirer ou corriger `price: "0"` dans SoftwareApplication JSON-LD | `site-config.ts` | 15 min |
| 7 | **Moyenne** | Ajouter BreadcrumbList JSON-LD sur blog | `blog/$slug.tsx` | 1 h |
| 8 | **Moyenne** | Corriger liens CTA blog `/#contact` → `/{locale}#contact` | `article-builder.ts` | 30 min |
| 9 | **Moyenne** | Soumettre sitemap corrigé dans Google Search Console + Bing Webmaster | Externe | 30 min |
| 10 | **Faible** | Envisager slugs ou chemins privacy localisés (`/en/privacy`) | Routes | 4 h |

---

## Annexe A — Détail du bug sitemap (reproduction)

**Entrée générée pour** `https://agropure-analytics.com/fr/blog/national-crop-monitoring-platform` :

```xml
<xhtml:link rel="alternate" hreflang="en"
  href="https://agropure-analytics.com/en/fr/blog/national-crop-monitoring-platform"/>
```

**Attendu :**

```xml
<xhtml:link rel="alternate" hreflang="en"
  href="https://agropure-analytics.com/en/blog/national-crop-monitoring-platform"/>
```

**Ligne fautive :** `href="${SITE_URL}/${loc}${path}"` où `path` contient déjà `/${locale}`.

---

## Annexe B — Structure URLs indexables (52)

```
4  × homepage
4  × confidentialite
4  × blog index
40 × blog articles (10 slugs × 4 locales)
───
52 URLs totales
```

Priorités sitemap actuelles : home 1.0, blog 0.9, articles 0.8, confidentialité 0.5.

---

## Annexe C — Web3Forms checklist déploiement

- [ ] Compte web3forms.com créé
- [ ] Formulaire lié à `noreply@agropure-analytics.com`
- [ ] `WEB3FORMS_ACCESS_KEY` dans Cloudflare Workers secrets
- [ ] Test soumission depuis `/fr#contact` en production
- [ ] Mention Web3Forms dans politique confidentialité publiée
- [ ] Monitoring erreurs formulaire (logs Workers)

---

*Audit SEO basé sur l'analyse statique du dépôt. Valider en production avec Google Search Console, Rich Results Test et Screaming Frog après correction du sitemap.*
