# Audit marketing — AgroPure Analytics

**Site :** https://agropure-analytics.com  
**Date :** 18 juin 2026  
**Périmètre :** site marketing multilingue (FR / EN / ZH / ES), code source et contenus publics  
**Méthode :** revue du code, des traductions, des parcours de conversion et des signaux de marque

---

## Résumé exécutif

AgroPure Analytics dispose d'une **base marketing solide** : proposition de valeur claire (« Moins de stress. Moins de coûts. Plus de rendement. »), segmentation par secteur (gouvernements, agriculteurs, coopératives, assureurs), contenu riche (10 articles de blog, FAQ structurée, widget marchés agricoles) et internationalisation sur quatre langues. Le positionnement B2B AgTech — plateformes nationales, diagnostic ravageurs, scoring crédit — est cohérent et différenciant face aux outils fermés orientés parcelle unique.

Cependant, **plusieurs failles critiques freinent la confiance et la conversion** :

1. **Bug hreflang dans `sitemap.xml`** — URLs dupliquées (`/fr/fr`, `/en/en`) qui nuisent au référencement multilingue.
2. **Incohérence de marque « AquaPure »** dans `src/content/legal/privacy-policy.ts` (domaine, courriel, nom légal) alors que le site public affiche AgroPure Analytics.
3. **Formulaire de contact dépendant de Web3Forms** — sans clé `WEB3FORMS_ACCESS_KEY` en production, les leads échouent silencieusement côté utilisateur.

**Score global marketing : 60 / 100**

| Pilier | Poids | Score | Pondéré |
|--------|-------|-------|---------|
| Contenu & messaging | 25 % | 74 | 18,5 |
| Conversion (CRO) | 20 % | 60 | 12,0 |
| SEO | 20 % | 54 | 10,8 |
| Positionnement concurrentiel | 15 % | 58 | 8,7 |
| Marque & confiance | 10 % | 50 | 5,0 |
| Croissance | 10 % | 52 | 5,2 |
| **Total** | **100 %** | — | **60,2** |

---

## 1. Contenu & messaging (74 / 100)

### Points forts

- **Hero percutant** (`fr.ts` → `home.hero`) : promesse orientée résultat, sous-titre actionnable.
- **Segmentation sectorielle** : quatre personas avec problèmes métier explicites (données dispersées, décisions tardives, traçabilité, risque assureur).
- **Preuves chiffrées** dans les fonctionnalités : « +15 % rendement », « 25 000+ parcelles/jour », « 34 % pesticides en moins » — utiles pour la vente, à sourcer.
- **FAQ riche** avec liens internes vers études de cas et autorités (FAO, Banque mondiale, CGIAR).
- **Blog** : 10 articles couvrant les cas d'usage clés (monitoring national, ravageurs, crédit, API white-label).
- **Multilingue** : FR, EN, ZH, ES avec métadonnées localisées par route.

### Points faibles

- **Statistiques non attribuées** : les chiffres des cartes fonctionnalités et de la FAQ manquent de source, client ou méthodologie — risque de crédibilité en vente enterprise.
- **Pas de témoignages clients** ni logos d'organisations déployées (seulement partenaires incubation).
- **Mention EOSDA** dans `public/llms.txt` (« plateformes nationales EOSDA ») sans équivalent visible sur le site public — confusion produit vs partenaire.
- **Section mission en double** : `IntroSection` répète la mission en bas de page après la FAQ, diluant le parcours.
- **README vs code** : le README indique une redirection vers `/fr`, mais `DEFAULT_LOCALE` est `en` dans `src/i18n/types.ts`.

### Recommandations

- Ajouter une section « Résultats clients » avec 2–3 citations nommées ou anonymisées par secteur.
- Documenter chaque stat clé (étude de cas, pilote, fourchette).
- Clarifier la relation EOSDA / AgroPure dans le messaging produit.
- Harmoniser la locale par défaut avec la stratégie marché (FR pour Québec/Canada francophone vs EN pour export).

---

## 2. Conversion — CRO (60 / 100)

### Parcours actuel

```
Hero CTA → #contact
Nav « Demander une démo » → #contact
Delivery cards (au clic) → #contact
Commodity markets CTA → #contact
FAQ footer → #contact
Blog articles → /#contact (lien absolu fragile)
```

Tous les CTAs convergent vers **un seul formulaire** — bon pour la simplicité, limitant pour les segments.

### Formulaire de contact (`contact-section.tsx`)

| Élément | État | Impact CRO |
|---------|------|------------|
| Champs prénom, nom, email, téléphone, entreprise, site, besoin | ✅ | Qualification correcte |
| Consentement RGPD/Loi 25 avec lien politique | ✅ | Conformité |
| Honeypot `botField` | ✅ | Anti-spam basique |
| État succès/erreur | ✅ | Feedback utilisateur |
| Sélecteur de secteur / type de demande | ❌ | Routage commercial difficile |
| Calendrier (Cal.com, HubSpot) | ❌ | Friction élevée pour démo |
| Téléphone cliquable en secours | ❌ | Perte de leads si formulaire en panne |
| Indicateur de délai de réponse | Partiel | FAQ mentionne « 1 jour ouvrable » mais pas sur le formulaire |

### Notes CRO — formulaire

1. **Web3Forms** (`contact-mail.server.ts`) : l'envoi passe par `POST https://api.web3forms.com/submit` avec `WEB3FORMS_ACCESS_KEY`. Si le secret Cloudflare Workers n'est pas configuré, l'utilisateur voit : *« Le service d'envoi n'est pas configuré. Écrivez-nous à contact@agropure-analytics.com »* — message utile mais **aucun tracking** de ces échecs.
2. **`FORM_NOTIFICATION_EMAIL`** (`noreply@agropure-analytics.com`) est documenté dans `site-config.ts` et le README, mais **n'est pas envoyé dans le payload API** — le destinataire se configure uniquement sur le tableau de bord Web3Forms.
3. **CTA redondant** : le bouton « Planifier une rencontre » dans la colonne gauche scroll vers `#contact-form` alors que le formulaire est déjà visible à droite sur desktop — confusion mineure sur mobile.
4. **Pas de valeur perçue au submit** : ajouter « Démo personnalisée en 30 min » ou « Réponse sous 24 h » directement sur le bouton ou sous le formulaire.
5. **Champ « Votre besoin »** : placeholder bien rédigé ; envisager un menu déroulant (Gouvernement / Agriculteur / Coopérative / Assurance / Autre) pour prioriser les leads.

### Notes CRO — CTAs globaux

- **Un seul type de conversion** (demande de démo) — pas de lead magnet (livre blanc, checklist déploiement national).
- **Nav desktop** : le CTA « Demander une démo » est un lien texte discret, pas un bouton plein — moins visible que le hero.
- **Pas de CTA sticky** sur mobile après scroll du hero.
- **Blog** : les CTAs en fin d'article pointent vers `/#contact` — peut casser si l'utilisateur est sur `/fr/blog/...` (hash sur mauvaise route). Préférer `/{locale}#contact`.

### Recommandations CRO prioritaires

1. Ajouter un sélecteur « Je représente… » + routage email par segment.
2. Intégrer un lien Calendly/Cal.com en alternative au formulaire.
3. Afficher `contact@agropure-analytics.com` et LinkedIn sous le formulaire comme filet de sécurité.
4. Transformer le CTA nav en bouton `brand` visible.
5. Instrumenter les événements `form_start`, `form_submit`, `form_error` (après mise en place analytics consent-based).

---

## 3. SEO (54 / 100) — voir aussi SEO-AUDIT.md

Synthèse marketing :

- Fondations techniques présentes (robots, sitemap, llms.txt, JSON-LD).
- **Bug hreflang sitemap** critique.
- **`og-image.png` référencé mais absent** du dépôt `public/`.
- Page confidentialité légère (`t.privacy` dans les traductions) vs fichier légal complet non utilisé.

---

## 4. Positionnement concurrentiel (58 / 100)

### Paysage

| Concurrent / référence | Positionnement | vs AgroPure |
|------------------------|----------------|-------------|
| EOSDA | Plateforme satellite nationale | Mentionné dans llms.txt ; AgroPure se positionne comme suite intégrée (terrain + crédit + ravageurs) |
| Cropin, Agworld | Gestion exploitation | AgroPure plus orienté programmes nationaux et assureurs |
| OneSoil, FarmLogs | Agriculteur individuel | AgroPure couvre aussi gouvernements et coopératives |
| Ignitia, aWhere | Météo / Afrique | Chevauchement sur petits producteurs Afrique |

### Différenciateurs actuels

- **Quatre verticales** sur une même plateforme (gov, farmer, coop, insurance).
- **Widget marchés agricoles** (USDA/EIA) — engagement et rétention.
- **Déploiement 14 semaines** vs 12 mois in-house (claim FAQ).
- **Offline-first** pour zones rurales africaines.
- **White-label / API** pour partenaires institutionnels.

### Lacunes concurrentielles

- Pas de page « Pourquoi AgroPure » ou tableau comparatif.
- Pas de fiche produit dédiée par module (SEO long-tail).
- Intégrations John Deere / CNH / DJI mentionnées sans logos ni documentation publique.
- Pas de présence visible sur les annuaires AgTech (G2, Capterra) — opportunité future.

---

## 5. Marque & confiance (50 / 100)

### Points forts

- Identité visuelle cohérente (hero vidéo, palette, typographie Roboto).
- **TrustSection** : logos Desjardins, ÉTS, OSE Entreprendre, Aqua Action, AquaHacking — crédibilité écosystème canadien.
- JSON-LD Organization avec `sameAs` LinkedIn.
- Bannière de consentement cookies (Loi 25).
- En-têtes sécurité (`public/_headers`).

### Points faibles — incohérence AquaPure / AgroPure

Le fichier `src/content/legal/privacy-policy.ts` contient **partout « AquaPure Analytics »** :

- Domaine : `aquapure-analytics.com`
- Courriel : `contact@aquapure-analytics.com`
- Meta description et sections légales

**Ce fichier n'est actuellement pas importé** — la page `/confidentialite` utilise `t.privacy` dans `fr.ts` / `en.ts` (marque AgroPure correcte). Risques :

- Réactivation accidentelle du mauvais contenu lors d'un refactor.
- Confusion pour les développeurs et auditeurs juridiques.
- Héritage visible ailleurs : `LEGACY_STORAGE_KEY = "aquapure-blog-custom"` dans `blog/constants.ts`.

### Autres lacunes confiance

- Pas de page équipe / à propos.
- Pas d'adresse physique ou juridiction d'entreprise.
- LinkedIn seul réseau social.
- Politique de confidentialité simplifiée (4 sections) vs exigences Loi 25 détaillées dans le fichier non utilisé.

---

## 6. Croissance (52 / 100)

### Canaux actifs

| Canal | Maturité | Notes |
|-------|----------|-------|
| SEO organique | Moyen | Blog + FAQ ; sitemap à corriger |
| GEO / LLM | Bon | `llms.txt`, robots IA autorisés |
| LinkedIn | Faible | Lien footer uniquement |
| Email / nurturing | Absent | Pas de newsletter |
| Analytics | Absent | Consent stocké en localStorage, aucun script analytics branché |
| Paid | N/A | Hors périmètre site |

### Opportunités

- Publier 2 articles/mois ciblant requêtes long-tail (« plateforme suivi cultures nationale », « scoring crédit agricole Afrique »).
- Activer Plausible ou GA4 **après** consentement analytics.
- Campagnes LinkedIn ciblant directeurs AgTech / ministères agriculture Afrique francophone.
- Webinaires ou ateliers « souscription agricole » réutilisant le contenu FAQ.

---

## Top 10 corrections prioritaires

| # | Priorité | Correction | Pilier | Effort |
|---|----------|------------|--------|--------|
| 1 | **Élevée** | Corriger le bug hreflang dans `scripts/generate-sitemap.mjs` (URLs `/fr/fr`) et régénérer `sitemap.xml` | SEO | Faible |
| 2 | **Élevée** | Remplacer ou supprimer `privacy-policy.ts` AquaPure ; unifier la politique AgroPure conforme Loi 25 | Marque | Moyen |
| 3 | **Élevée** | Vérifier `WEB3FORMS_ACCESS_KEY` en production Cloudflare + tester envoi bout en bout | Conversion | Faible |
| 4 | **Élevée** | Ajouter `public/og-image.png` (1200×630) pour partages sociaux | SEO / Marque | Faible |
| 5 | **Élevée** | Ajouter sélecteur secteur + promesse de délai sur le formulaire contact | CRO | Faible |
| 6 | **Moyenne** | Sourcer ou adoucir les statistiques marketing (« jusqu'à », « en pilote ») | Contenu | Moyen |
| 7 | **Moyenne** | Corriger liens blog CTA : `/{locale}#contact` au lieu de `/#contact` | CRO | Faible |
| 8 | **Moyenne** | Ajouter témoignages ou logos clients déployés | Confiance | Moyen |
| 9 | **Moyenne** | Brancher analytics consent-based (Plausible/GA4) sur `setConsent(true)` | Croissance | Moyen |
| 10 | **Faible** | Créer pages produit dédiées ou comparatif concurrentiel | Concurrentiel | Élevé |

---

## Annexe — Inventaire des sections homepage

| Ordre | Section | Rôle marketing |
|-------|---------|----------------|
| 1 | Hero | Accroche + CTA primaire |
| 2 | Industries | Segmentation |
| 3 | Integrations | Réduction objection TI |
| 4 | Features | Détail produit + stats |
| 5 | Delivery | Modèles de déploiement |
| 6 | Trust | Logos partenaires |
| 7 | Case studies | Preuve sociale → blog |
| 8 | Commodity markets | Engagement + CTA |
| 9 | FAQ | SEO + objections |
| 10 | Intro (mission) | Répétition — à repositionner |
| 11 | Contact | Conversion |

---

## Fichiers sources analysés

- `src/lib/seo/site-config.ts`
- `src/i18n/translations/fr.ts` (sections `home`, `meta`, `privacy`)
- `src/components/sections/contact-section.tsx`
- `src/lib/contact-mail.server.ts`
- `src/lib/api/contact.functions.ts`
- `src/content/legal/privacy-policy.ts`
- `src/routes/__root.tsx`, `src/routes/$locale/index.tsx`
- `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`
- `scripts/generate-sitemap.mjs`
- `README.md`

---

*Audit généré à partir de l'analyse statique du dépôt — aucun test live de production n'a été effectué sur agropure-analytics.com.*
