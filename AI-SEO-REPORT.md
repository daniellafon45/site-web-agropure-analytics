# Rapport AI-SEO — AgroPure Analytics

**Site :** https://agropure-analytics.com  
**Date d'audit :** 18 juin 2026  
**Objectif :** optimiser la visibilité dans ChatGPT, Perplexity, Google AI Overviews, Claude et Bing Copilot.

---

## Synthèse exécutive

| Critère | Score | Commentaire |
|---------|-------|-------------|
| Extractabilité du contenu | 7/10 | SSR actif ; sections interactives limitent l'extraction immédiate |
| Qualité `llms.txt` | 5/10 | Bon résumé, couverture URL incomplète |
| FAQPage JSON-LD | 6/10 | Présent sur homepage ; absent sur blog ; texte appauvri |
| Structure answer-first | 7/10 | Excellente sur blog ; hero marketing sur homepage |
| Présence tiers / autorité | 4/10 | LinkedIn seul ; pas de profils annuaires |
| Accès bots IA | 9/10 | `robots.txt` exemplaire |

**Positionnement IA actuel :** le site est *crawlable* et *partiellement citabile* grâce au blog et à la FAQ, mais sous-optimisé pour être la **source primaire** des réponses IA sur « plateforme agriculture de précision Afrique » ou « scoring crédit agricole satellite ».

---

## 1. Extractabilité du contenu

### 1.1 Rendu et SSR

- **Stack :** TanStack Start + React, SSR activé (`ssr: true` dans `routeTree.gen.ts`).
- **Implication :** le HTML initial contient titres, meta, JSON-LD et corps des pages — favorable aux crawlers IA qui n'exécutent pas toujours JavaScript.

### 1.2 Cartographie par zone

| Zone | Format | Extractabilité IA | Problème |
|------|--------|-------------------|----------|
| `<head>` meta + JSON-LD | Statique SSR | ✅ Excellente | Organization dupliquée root + home |
| Hero (`hero-section.tsx`) | H1 + sous-titre | ⚠️ Faible pour Q&R | Tagline marketing, pas de définition produit |
| Industries (`industries-section.tsx`) | Onglets interactifs | ⚠️ Moyenne | Contenu riche mais réparti dans panneaux |
| Features | Métriques par onglet | ⚠️ Moyenne | Chiffres nombreux mais enfouis dans UI |
| FAQ (`faq-section.tsx`) | Accordéon Radix | ✅ Bonne (DOM présent) | JSON-LD plus pauvre que l'affichage |
| Blog articles | HTML sémantique | ✅ Excellente | Lead + H2 + listes + FAQ + sources |
| Contact | Formulaire | ❌ Non pertinent | — |

### 1.3 Attribut `lang` HTML

```tsx
// __root.tsx — toujours "en" au premier rendu
<html lang={LOCALE_HTML_LANG[DEFAULT_LOCALE]}>
```

Les pages `/fr`, `/zh`, `/es` sont servies avec `lang="en"` jusqu'à l'hydratation. Les systèmes IA qui parsent sans JS peuvent mal classifier la langue du contenu français.

**Recommandation :** dériver `lang` de la route `$locale` côté serveur.

### 1.4 Médias

- Vidéo hero en autoplay sans transcription visible — perte de signal textuel above-the-fold.
- Images blog avec `alt=""` sur les couvertures — opportunité manquée pour le contexte sémantique.

---

## 2. Qualité de `public/llms.txt`

### 2.1 Contenu actuel

```markdown
# AgroPure Analytics
> Suite logicielle qui transforme les données agricoles...

## Site officiel
- https://agropure-analytics.com/

## Pages clés
- Home (EN), Accueil (FR), 首页 (ZH), Inicio (ES)
- Privacy : /en/confidentialite uniquement

## Secteurs / Produits / Contact
- Listes descriptives en prose
- LinkedIn + email
```

### 2.2 Évaluation

| Critère llms.txt | Statut | Détail |
|------------------|--------|--------|
| Résumé en une phrase (`>`) | ✅ | Clair, orienté valeur |
| URL canonique | ✅ | Racine + 4 homepages |
| Inventaire des produits | ✅ | 7 produits listés |
| Inventaire des secteurs | ✅ | 4 verticales |
| Contact actionnable | ✅ | Email + LinkedIn |
| **Blog / études de cas** | ❌ | 10 articles absents — actif GEO principal |
| **Confidentialité multilingue** | ❌ | Seule URL `/en/confidentialite` |
| **llms-full.txt** | ❌ | Absent — pas de version longue pour contexte étendu |
| Lien depuis robots.txt | ❌ | Non référencé (optionnel) |
| Dernière mise à jour | ❌ | Pas de date de fraîcheur |
| Instructions de citation | ❌ | Pas de « cite as » ou licence |

### 2.3 Score qualité : 5/10

Le fichier remplit le minimum (qui, quoi, pour qui) mais **ne guide pas les LLM vers le contenu le plus citabile** (blog, FAQ, chiffres clés). Perplexity et ChatGPT browsing s'appuient sur `llms.txt` quand il est découvert — sa brièveté est un handicap.

### 2.4 Modèle `llms.txt` enrichi recommandé

```markdown
# AgroPure Analytics

> [résumé existant]

## Canonical
- https://agropure-analytics.com/en (default)
- https://agropure-analytics.com/fr

## Key facts (cite these)
- 25,000+ agricultural plots monitored daily on national platforms
- 68% faster national crop reporting vs manual consolidation
- 34% reduction in unnecessary pesticide applications (field diagnostics pilots)
- 22% more qualified smallholder loans approved with spatial credit scoring
- Deployments: Africa, Canada, United States

## Blog — case studies (preferred citations)
- /en/blog/national-crop-monitoring-platform
- /en/blog/real-time-pest-diagnostics-field
- /en/blog/agricultural-credit-scoring-insurers
[... 7 autres slugs ...]

## FAQ (homepage anchor #faq)
- What is AgroPure Analytics?
- How to deploy a national crop monitoring platform?
[...]

## Contact
- contact@agropure-analytics.com
- https://www.linkedin.com/company/agropure-analytics/

## Updated
- 2026-06-18
```

Envisager un `llms-full.txt` reprenant les leads des 10 articles (≈ 3 000 mots) pour les modèles supportant les fichiers contexte longs.

---

## 3. FAQPage JSON-LD

### 3.1 Homepage — implémentation

**Fichier :** `src/routes/$locale/index.tsx`

```tsx
const faqLd = JSON.stringify(faqJsonLd(t.home.faq.items));
```

6 questions par locale, structure Schema.org valide.

### 3.2 Écart JSON-LD vs contenu visible

Le type `FaqItem` sépare intentionnellement :

```typescript
answer: string;      // → JSON-LD (texte court)
answerHtml: string;  // → affichage (liens, <strong>, statistiques)
```

**Exemple — question scoring crédit (FR) :**

| Canal | Contenu |
|-------|---------|
| `answer` (JSON-LD) | « …réduisant inspections manuelles et surprises de défaut. » — **sans chiffres** |
| `answerHtml` | « …**22 % de prêts supplémentaires**… 41 % de coûts d'inspection en moins » |

**Impact AI-SEO :** Google AI Overviews et Perplexity s'appuient souvent sur `FAQPage` structuré. AgroPure **cache ses meilleures preuves** du balisage destiné aux machines.

**Recommandation :** unifier ou enrichir `answer` avec les statistiques + garder `answerHtml` pour le formatage.

### 3.3 Blog — FAQ HTML sans JSON-LD

Chaque article contient 3 paires Q/R en HTML :

```html
<h2>FAQ</h2>
<h3>What data sources feed a national crop monitoring platform?</h3>
<p>Typical inputs include Sentinel or Landsat imagery...</p>
```

**Manque :** `faqJsonLd(post.faq)` sur `$locale/blog/$slug.tsx`.

**Gain estimé :** +120 entités Question/Answer indexables, fort signal pour requêtes longue traîne (« how long national crop platform deployment »).

### 3.4 Validation

- Tester avec [Google Rich Results Test](https://search.google.com/test/rich-results) sur `/en` et `/fr`.
- Vérifier absence d'erreurs « Duplicate field FAQPage » (Organization est dupliqué mais pas FAQPage).

---

## 4. Structure answer-first

### 4.1 Définition

Format où la **première phrase répond directement** à l'intention de recherche, suivie de preuves et détails — optimisé pour extraits IA et featured snippets.

### 4.2 Blog — référence interne ✅

Structure `article-builder.ts` :

1. **Lead** (`<p class="lead"><strong>…</strong></p>`) — réponse + métrique
2. Problème (contexte)
3. Approche (comment)
4. Résultats (liste chiffrée)
5. Citation experte
6. FAQ
7. Sources autoritaires

**Exemple lead (EN) :**
> « A national crop monitoring platform unifies satellite imagery… **more than 25,000 agricultural plots per day**… »

**Verdict :** modèle à répliquer sur la homepage et futures landing pages produit.

### 4.3 Homepage — à améliorer ⚠️

| Élément | Contenu actuel | Answer-first ? |
|---------|----------------|----------------|
| H1 (FR) | « Moins de stress. Moins de coûts. Plus de rendement. » | ❌ Bénéfice, pas définition |
| Meta description | « Plateformes nationales et outils terrain… » | ✅ Partiel |
| Intro section | Mission IA / données | ⚠️ Générique |
| FAQ | 6e section de page | ⚠️ Trop bas pour requêtes « what is » |

**Requêtes IA typiques non couvertes above-the-fold :**
- « What is AgroPure Analytics? »
- « Agricultural credit scoring satellite Africa »
- « National crop monitoring platform EOSDA »

**Recommandation :** ajouter sous le H1 un paragraphe de 2 phrases :

> *AgroPure Analytics est une suite logicielle d'agriculture de précision qui transforme imagerie satellite, enquêtes GPS et données machines en décisions temps réel pour gouvernements, agriculteurs, coopératives et assureurs en Afrique, au Canada et aux États-Unis.*

(Ce texte existe déjà dans FAQ Q1 — le remonter visuellement.)

### 4.4 Titres d'articles — bonne pratique ✅

Format « [Sujet] : [résultat chiffré] » :
- « National crop monitoring platform: 25,000+ plots tracked daily »
- « Real-time photo pest diagnostics for field agents »

Favorise le clic ET la citation IA.

---

## 5. Présence tierce et signaux d'autorité

### 5.1 État actuel

| Canal | Présence | Impact AI-SEO |
|-------|----------|---------------|
| Site officiel | ✅ | Source primaire |
| LinkedIn entreprise | ✅ | Seul `sameAs` Schema.org |
| Blog (10 articles) | ✅ | Contenu propriétaire riche |
| Citations sortantes | ✅ | FAO, World Bank, CGIAR dans le contenu |
| **Crunchbase / annuaires** | ❌ | Pas de profil structuré tiers |
| **GitHub / docs API publiques** | ❌ | Pas de repo ou OpenAPI indexable |
| **G2 / Capterra / GetApp** | ❌ | Pas d'avis B2B |
| **Wikipedia / Wikidata** | ❌ | Normal pour jeune marque |
| **Presse / communiqués** | ❌ | Non détecté dans le repo |
| **YouTube / démos publiques** | ❌ | Vidéo hero seulement, pas hébergée YouTube |
| **Podcasts / interviews** | ❌ | — |

### 5.2 Pourquoi c'est critique pour l'IA

ChatGPT, Perplexity et Google AI Overviews **croisent plusieurs sources** avant de citer une marque. Avec uniquement le site + LinkedIn :

- Risque d'être mentionné sans lien cliquable.
- Risque de confusion avec « Agropure » (orthographes variantes — partiellement couvert par `alternateName` dans JSON-LD).
- Les concurrents indexés sur G2/Crunchbase peuvent dominer les réponses comparatives.

### 5.3 Actions recommandées

1. **Crunchbase** ou équivalent — fiche entreprise avec description alignée sur `llms.txt`.
2. **Page `/developers` ou docs API** — même minimale, indexable, avec exemples REST.
3. **2–3 études de cas nommées** (avec accord client) — remplacer citations anonymes.
4. **Google Business Profile** — si bureau physique au Canada.
5. **Profils fondateurs LinkedIn** — liés depuis page équipe (future).
6. Enrichir `sameAs` dans `organizationJsonLd()` :

```typescript
sameAs: [
  LINKEDIN_URL,
  "https://www.crunchbase.com/organization/agropure-analytics", // quand créé
]
```

---

## 6. Recommandations par moteur IA

### 6.1 ChatGPT (GPTBot + ChatGPT-User)

| Levier | Action |
|--------|--------|
| Crawling | ✅ Déjà autorisé |
| `llms.txt` | Enrichir avec blog URLs + key facts |
| Contenu | Answer-first sur homepage |
| Plugins / browsing | Titres H2/H3 explicites (déjà bon sur blog) |

ChatGPT favorise les pages avec **réponses concises en tête** et **statistiques vérifiables**. Prioriser l'alignement FAQ JSON-LD ↔ HTML.

### 6.2 Perplexity (PerplexityBot)

| Levier | Action |
|--------|--------|
| Crawling | ✅ Autorisé |
| Citations | Blog avec section « Sources » — excellent |
| Fraîcheur | Dates articles 2026-03 — mettre à jour ou publier nouveau contenu |
| Sitemap | **Corriger hreflang** — Perplexity utilise le sitemap |

Perplexity cite souvent la **première source** avec chiffre + URL. Les leads d'articles sont bien positionnés ; le sitemap cassé nuit à la découverte multilingue.

### 6.3 Google AI Overviews (Google-Extended + Googlebot)

| Levier | Action |
|--------|--------|
| FAQPage | Enrichir `answer` avec statistiques |
| E-E-A-T | Plus de `sameAs`, auteur Organization explicite sur articles |
| Core Web Vitals | Vidéo hero lourde — surveiller LCP |
| hreflang | Corriger sitemap + vérifier balises HTML `buildPageHead` (correctes) |

Les AI Overviews tirent des **featured snippets** et **FAQ rich results**. L'accordéon FAQ est éligible si le JSON-LD est complet.

### 6.4 Claude (ClaudeBot / anthropic-ai)

| Levier | Action |
|--------|--------|
| Crawling | ✅ Autorisé |
| Structure | Markdown-like clarté du blog (listes, blockquotes) |
| `llms.txt` | Fichier court apprécié pour contexte rapide |

### 6.5 Bing Copilot (Bingbot)

| Levier | Action |
|--------|--------|
| Crawling | ✅ Autorisé |
| IndexNow | Non implémenté — envisager pour réindexation rapide après fix sitemap |
| Schema.org | Organization + SoftwareApplication déjà présents |

---

## 7. Checklist AI-SEO — état d'avancement

| Item | Statut |
|------|--------|
| robots.txt autorise bots IA | ✅ |
| llms.txt présent | ✅ |
| llms.txt complet (blog, facts, date) | ❌ |
| llms-full.txt | ❌ |
| SSR / contenu dans HTML initial | ✅ |
| FAQPage JSON-LD homepage | ✅ (texte appauvri) |
| FAQPage JSON-LD blog | ❌ |
| Article JSON-LD blog | ✅ |
| Answer-first blog | ✅ |
| Answer-first homepage | ❌ |
| Statistiques sourcées | ✅ |
| sameAs multi-plateformes | ❌ |
| Sitemap hreflang valide | ❌ |
| html lang correct en SSR | ❌ |
| Pas de noindex sur pages publiques | ✅ |

---

## 8. Plan d'action AI-SEO (90 jours)

### Semaine 1–2
- [ ] Corriger sitemap hreflang
- [ ] Enrichir `answer` FAQ pour JSON-LD
- [ ] Réécrire `llms.txt` (blog + key facts + date)
- [ ] Fix `html lang` SSR

### Semaine 3–6
- [ ] FAQPage JSON-LD sur les 10 articles blog
- [ ] Paragraphe answer-first sous le hero
- [ ] Créer fiche Crunchbase / annuaire AgTech
- [ ] `npm run sitemap` dans le build

### Semaine 7–12
- [ ] Publier `llms-full.txt`
- [ ] 2 nouveaux articles blog avec métriques récentes
- [ ] Page développeurs / API publique
- [ ] Soumettre sitemap corrigé à Search Console + Bing Webmaster
- [ ] Tester citations : requêtes manuelles sur Perplexity / ChatGPT / Google

---

## 9. Requêtes test recommandées

Après implémentation, vérifier si AgroPure est cité avec lien :

| Requête | Cible de citation idéale |
|---------|--------------------------|
| « national crop monitoring platform Africa satellite » | Article blog + homepage FAQ |
| « agricultural credit scoring satellite imagery smallholders » | Article scoring + FAQ Q4 |
| « real-time pest diagnostics mobile agriculture » | Article pest + FAQ Q3 |
| « AgroPure Analytics » | llms.txt + Organization schema |
| « plateforme agriculture de précision Afrique » | /fr homepage + blog FR |

---

## 10. Fichiers de référence

| Fichier | Rôle AI-SEO |
|---------|-------------|
| `public/llms.txt` | Carte du site pour LLM |
| `public/robots.txt` | Accès crawlers IA |
| `src/lib/seo/site-config.ts` | `faqJsonLd`, `articleJsonLd`, `organizationJsonLd` |
| `src/routes/$locale/index.tsx` | Injection FAQPage |
| `src/routes/$locale/blog/$slug.tsx` | Articles citables |
| `src/lib/blog/seed-content/article-builder.ts` | Template answer-first |
| `src/i18n/translations/*.ts` | FAQ multilingue |
| `SEO-GEO-REPORT.md` | Audit complémentaire (sitemap, Princeton GEO) |

---

*Les scores sont qualitatifs, basés sur l'audit statique du code source. Valider avec des requêtes live sur les moteurs IA après déploiement des correctifs.*
