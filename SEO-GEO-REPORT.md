# Rapport SEO & GEO — AgroPure Analytics

**Site :** https://agropure-analytics.com  
**Date d'audit :** 18 juin 2026  
**Périmètre :** `public/robots.txt`, `public/llms.txt`, `public/sitemap.xml`, `scripts/generate-sitemap.mjs`, `src/lib/seo/site-config.ts`, `src/routes/__root.tsx`, contenu i18n et blog seed.

---

## Synthèse exécutive

| Domaine | Score | Verdict |
|---------|-------|---------|
| Accès bots IA | 9/10 | Excellent — crawlers majeurs explicitement autorisés |
| Schema.org | 7/10 | Bon socle, lacunes sur articles FAQ et services |
| Statistiques & citations (GEO Princeton) | 8/10 | Fort sur FAQ enrichie et blog, faible sur hero |
| Sitemap & hreflang | 2/10 | **Bug critique** — URLs dupliquées `/fr/fr`, `/en/en`… |
| Multilingue technique | 6/10 | hreflang HTML correct, `lang` HTML SSR figé sur `en` |

**Priorité immédiate :** corriger le générateur de sitemap avant toute soumission Search Console.

---

## 1. Accès des bots IA (GEO crawlability)

### 1.1 `public/robots.txt`

```
User-agent: *
Allow: /

User-agent: GPTBot          → Allow: /
User-agent: ChatGPT-User    → Allow: /
User-agent: PerplexityBot   → Allow: /
User-agent: ClaudeBot       → Allow: /
User-agent: anthropic-ai    → Allow: /
User-agent: Google-Extended → Allow: /
User-agent: Bingbot         → Allow: /

Sitemap: https://agropure-analytics.com/sitemap.xml
```

**Points forts**
- Politique ouverte par défaut (`Allow: /`) pour tous les agents.
- Couverture explicite des principaux crawlers IA : OpenAI (GPTBot, ChatGPT-User), Perplexity, Anthropic (ClaudeBot, anthropic-ai), Google AI training (Google-Extended), Bing/Copilot (Bingbot).
- Déclaration du sitemap en production.

**Lacunes**
- Pas de référence à `llms.txt` (convention émergente, non bloquante).
- Absence de `CCBot`, `Applebot-Extended`, `FacebookBot` — optionnel selon la stratégie de visibilité IA.
- Aucun `Crawl-delay` (normal pour un site marketing).

**Verdict :** configuration exemplaire pour l'indexation IA. Aucun blocage détecté.

---

## 2. Méthodes Princeton GEO — applicabilité

Référence : *GEO: Generative Engine Optimization* (Princeton / KDD 2024) — neuf tactiques testées sur la visibilité dans les réponses de moteurs génératifs.

| Méthode Princeton | Présence sur le site | Applicabilité | Recommandation |
|-------------------|---------------------|---------------|----------------|
| **Statistics Addition** | ✅ Forte | Très haute | FAQ (`25 000+ parcelles`, `68 %`, `34 %`, `22 %`, `41 %`), blog (10 articles chiffrés), métriques features (`+15 %`, `-60 %`…) | Maintenir et sourcer chaque chiffre |
| **Quotation Addition** | ✅ Moyenne | Haute | Citations anonymisées dans les articles blog (`Director of Agricultural Information…`) | Ajouter citations nommées vérifiables quand possible |
| **Cite Sources** | ✅ Bonne | Haute | Liens FAO, World Bank, CGIAR, Fields of the World dans FAQ et articles | Étendre aux pages secteurs |
| **Fluency Optimization** | ✅ Bonne | Haute | 4 langues natives, prose claire | — |
| **Authoritative Tone** | ✅ Bonne | Haute | Vocabulaire institutionnel (ministères, NDVI, scoring spatial) | Renforcer bios auteur |
| **Easy-to-Understand** | ⚠️ Partielle | Moyenne | Blog answer-first ; hero marketing (« Moins de stress… ») peu définitionnel | Ajouter phrase définitionnelle sous le H1 |
| **Unique Words** | ⚠️ Partielle | Moyenne | Termes sectoriels présents mais répétition de formulations AgTech génériques | Glossaire / pages piliers par produit |
| **Technical Terms** | ✅ Bonne | Haute | NDVI, Sentinel, transhumance, scoring paramétrique | — |
| **Keyword Stuffing** | ✅ Absent | — | Pas de sur-optimisation détectée | Ne pas dégrader la qualité |

**Score GEO contenu global : 8/10** — le site applique déjà les tactiques les plus efficaces (statistiques + citations). Le hero et les sections interactives (accordéon, onglets secteurs) sont les principaux freins à l'extraction immédiate par les LLM.

---

## 3. FAQ — schéma et contenu

### 3.1 Implémentation technique

- **Composant :** `src/components/sections/faq-section.tsx` — accordéon Radix (6 questions).
- **Données :** `src/i18n/translations/{fr,en,zh,es}.ts` — champs `question`, `answer` (texte brut JSON-LD), `answerHtml` (affichage riche).
- **JSON-LD :** injecté sur la homepage via `faqJsonLd()` dans `src/routes/$locale/index.tsx`.

```typescript
// site-config.ts — structure correcte
{
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
}
```

### 3.2 Qualité des 6 questions (FR)

| ID | Question | Stats dans `answerHtml` | Stats dans `answer` (JSON-LD) |
|----|----------|-------------------------|-------------------------------|
| faq-what-is-agropure | Définition produit | Lien FAO | Non |
| faq-national-monitoring | Plateforme nationale | 25 000+, 68 % | Partiel (dizaines de milliers) |
| faq-pest-diagnostics | Diagnostic mobile | 34 %, <48 h | Partiel (<48 h) |
| faq-credit-scoring | Scoring crédit | 22 %, 41 % | Non |
| faq-api-white-label | API / white-label | 14 semaines | Oui (14 semaines) |
| faq-offline-africa | Hors ligne Afrique | CGIAR, souverain | Non |

**Problème GEO :** le JSON-LD utilise le champ `answer` (texte court) et **omet la plupart des statistiques** présentes dans `answerHtml`. Les moteurs IA qui priorisent le balisage structuré reçoivent des réponses moins riches que l'utilisateur humain.

**Problème UX crawl :** les réponses sont dans un accordéon fermé par défaut. Le contenu est dans le DOM (Radix), mais moins visible qu'un bloc `<details>` ouvert ou du texte statique.

### 3.3 FAQ sur le blog

- Chaque article seed contient une section FAQ en HTML (`<h3>` + `<p>`) via `article-builder.ts`.
- **Aucun `FAQPage` JSON-LD** sur les pages `/blog/$slug` — opportunité manquée (40 URLs × 3 questions ≈ 120 paires Q/R).

---

## 4. Statistiques dans le contenu

### 4.1 Homepage

| Zone | Exemples | Extractabilité |
|------|----------|----------------|
| FAQ `answerHtml` | 25 000+, 68 %, 34 %, 22 %, 41 %, 14 sem. | Moyenne (accordéon + JSON-LD appauvri) |
| Features / industries | +15 %, -60 %, 99 %, 100 % lots certifiés… | Faible (onglets interactifs, métriques dans sous-panneaux) |
| Case studies | 25 000+ parcelles quotidiennes | Moyenne |
| Hero | Aucun chiffre | Faible pour GEO |

### 4.2 Blog (10 articles × 4 langues)

Structure answer-first exemplaire :

```
Lead (réponse + chiffre) → Problème → Approche → Résultats chiffrés → Citation → Leçons → FAQ → Sources
```

Exemples de métriques documentées :
- 25 000+ parcelles/jour, -68 % temps de rapport
- -34 % pesticides, 1 200+ observations validées
- +22 % prêts approuvés, -41 % coûts d'inspection
- -70 % erreurs de transcription (recensement numérique)

**Verdict :** le blog est l'actif GEO le plus fort du site. La homepage sous-exploite les statistiques dans les zones above-the-fold.

---

## 5. Couverture Schema.org

### 5.1 Types implémentés

| Type | Fichier / route | Notes |
|------|-----------------|-------|
| `Organization` | `__root.tsx`, `$locale/index.tsx` | **Dupliqué** sur chaque page d'accueil |
| `WebSite` | `@graph` dans `organizationJsonLd()` | `inLanguage`: fr, en, zh-Hans, es |
| `SoftwareApplication` | `@graph` | `price: 0` + « Contact for pricing » |
| `FAQPage` | `$locale/index.tsx` | 6 entités, texte court |
| `Article` | `$locale/blog/$slug.tsx` | headline, datePublished, publisher |

### 5.2 Types absents (recommandés)

| Type | Usage suggéré |
|------|---------------|
| `FAQPage` | Chaque article de blog |
| `BreadcrumbList` | Blog > article |
| `Service` / `Product` | Pages ou sections secteurs (gouvernement, assureurs…) |
| `WebPage` + `speakable` | Homepage pour assistants vocaux |
| `LocalBusiness` | Non pertinent (B2B SaaS global) |

### 5.3 `sameAs` et E-E-A-T

```typescript
sameAs: [LINKEDIN_URL]  // seul profil tiers
```

**Faiblesse :** un seul lien `sameAs` (LinkedIn). Pas de Crunchbase, GitHub, profils fondateurs, annuaires AgTech (AgFunder, etc.). Impact sur la confiance des moteurs génératifs et Google E-E-A-T.

### 5.4 Métadonnées HTML (`buildPageHead`)

- `canonical`, `hreflang` (fr, en, zh-Hans, es, x-default → `/en`)
- Open Graph + Twitter Card
- `robots: index, follow, max-image-preview:large`
- Image OG : `/og-image.png`

**Bug `lang` HTML :** `__root.tsx` fixe `<html lang="en">` en SSR. La locale est mise à jour côté client uniquement (`useEffect` dans `$locale/route.tsx`). Les crawlers qui n'exécutent pas JS voient `lang="en"` sur `/fr`, `/zh`, `/es`.

---

## 6. Sitemap — bug hreflang critique

### 6.1 Symptôme

Toutes les balises `<xhtml:link rel="alternate">` du sitemap pointent vers des **URLs invalides** avec double préfixe locale :

| `<loc>` correct | `hreflang` généré (incorrect) |
|-----------------|-------------------------------|
| `/fr` | `https://agropure-analytics.com/fr/fr` |
| `/en/blog/national-crop-monitoring-platform` | `https://agropure-analytics.com/en/en/blog/national-crop-monitoring-platform` |
| `/fr/confidentialite` | `https://agropure-analytics.com/fr/fr/confidentialite` |

### 6.2 Cause racine — `scripts/generate-sitemap.mjs`

```javascript
function alternates(path) {
  return LOCALES.map(
    (loc) =>
      `... href="${SITE_URL}/${loc}${path}"/>`,
  ).join("\n");
}

const paths = [
  ...LOCALES.map((l) => `/${l}`),           // path = "/fr"
  ...LOCALES.flatMap((l) => SLUGS.map((s) => `/${l}/blog/${s}`)),
];
```

Quand `path = "/fr"`, la fonction produit `SITE_URL + "/fr" + "/fr"` → `/fr/fr`.

La ligne `x-default` utilise un `replace` partiel qui masque le bug pour elle seule :

```javascript
href="${SITE_URL}/en${path.replace(/^\/(fr|en|zh|es)/, "") || ""}"
// /fr → /en ✓ (correct par accident)
```

### 6.3 Impact SEO

- Google Search Console : erreurs hreflang « URL de retour incorrecte ».
- Confusion pour les crawlers multilingues (52 entrées × 5 alternates = 260 liens erronés).
- Risque de découverte de pages 404 (`/fr/fr/blog/...`) si un bot suit les alternates.
- Le script n'est **pas** dans `package.json` scripts — risque de sitemap obsolète après ajout d'articles.

### 6.4 Correction recommandée

```javascript
function localeSuffix(path) {
  return path.replace(/^\/(fr|en|zh|es)(?=\/|$)/, "") || "";
}

function alternates(path) {
  const suffix = localeSuffix(path);
  return LOCALES.map(
    (loc) =>
      `    <xhtml:link rel="alternate" hreflang="${HREFLANG[loc]}" href="${SITE_URL}/${loc}${suffix}"/>`,
  ).join("\n");
}
```

Puis : `node scripts/generate-sitemap.mjs` et commit de `public/sitemap.xml`.

### 6.5 Inventaire sitemap actuel

| Type de page | URLs |
|--------------|------|
| Home (`/{locale}`) | 4 |
| Confidentialité | 4 |
| Index blog | 4 |
| Articles blog | 40 |
| **Total** | **52** |

Priorités : home 1.0, blog index 0.9, articles 0.8, confidentialité 0.5. Cohérent.

---

## 7. Autres constats SEO techniques

| Élément | État |
|---------|------|
| Redirection `/` | → `/en` (`DEFAULT_LOCALE`) — README indique `/fr` (doc obsolète) |
| SSR TanStack Start | Activé (`ssr: true`) — contenu indexable |
| `PUBLIC_PATHS` | Liste alignée avec le sitemap (hors bug hreflang) |
| Admin `/admin/*` | Hors sitemap — correct |
| Vidéo hero | Peu de texte alternatif pour crawlers visuels |
| `llms.txt` | Présent mais incomplet (voir AI-SEO-REPORT.md) |

---

## 8. Plan d'action priorisé

### P0 — Critique (cette semaine)

1. **Corriger `generate-sitemap.mjs`** et régénérer `sitemap.xml`.
2. **Aligner `answer` FAQ avec `answerHtml`** pour le JSON-LD (inclure les statistiques clés).
3. **Corriger `<html lang>` en SSR** selon la locale de la route.

### P1 — Important (2–4 semaines)

4. Ajouter `FAQPage` JSON-LD sur chaque article de blog.
5. Enrichir `sameAs` (LinkedIn + 2–4 profils institutionnels vérifiables).
6. Ajouter phrase définitionnelle + chiffre clé dans le hero (GEO answer-first).
7. Intégrer `npm run sitemap` au pipeline `build`.

### P2 — Amélioration continue

8. `BreadcrumbList` sur le blog.
9. Pages piliers produit indexables (au-delà des ancres `#gouvernement`).
10. Auditer les 404 sur `/fr/fr/*` dans Search Console après correction.

---

## 9. Fichiers audités

| Fichier | Rôle |
|---------|------|
| `public/robots.txt` | Politique crawlers |
| `public/sitemap.xml` | Index multilingue (bug hreflang) |
| `public/llms.txt` | Contexte IA |
| `scripts/generate-sitemap.mjs` | Générateur sitemap |
| `src/lib/seo/site-config.ts` | JSON-LD, canonical, hreflang HTML |
| `src/routes/__root.tsx` | Organization JSON-LD global, `lang` HTML |
| `src/routes/$locale/index.tsx` | FAQPage + Organization page d'accueil |
| `src/routes/$locale/blog/$slug.tsx` | Article JSON-LD |
| `src/i18n/translations/*.ts` | Contenu FAQ et métriques |
| `src/lib/blog/seed-content/*.ts` | Articles GEO-optimisés |

---

*Rapport généré par audit statique du dépôt — valider en production avec Google Search Console, Rich Results Test et fetch manuel des URLs `/fr/fr`.*
