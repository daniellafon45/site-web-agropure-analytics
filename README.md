# AgroPure Analytics — Site web

Site marketing multilingue (FR / EN / ZH / ES) pour AgroPure Analytics.

## Stack

- React 19 + TanStack Start + TanStack Router
- Tailwind CSS v4
- Déploiement Cloudflare Workers

## Développement local

### Prérequis

- Node.js **22.12+** (voir [`.node-version`](.node-version))
- Dépendances installées (`npm install` ou `npm ci`)

### Démarrer le site

```powershell
cd "c:\Users\Admin\Documents\Projets\Projets_Vibe_coding\Site web AgroPure analytics"
npm run dev
```

Attendez l’affichage de l’URL locale dans le terminal (souvent **8080** ou **3000** selon l’environnement) :

```
➜  Local:   http://localhost:8080/
```

Puis ouvrez dans **Chrome ou Edge** (recommandé) :

- `http://localhost:8080/` → redirige vers `/fr` (remplacez `8080` par le port affiché)
- `http://localhost:8080/fr` → page d’accueil française

### Dépannage

| Problème | Solution |
|----------|----------|
| Écran noir / page qui charge indéfiniment | Vérifiez que `npm run dev` tourne dans un terminal. Utilisez le port affiché par Vite (ex. 8080). |
| Navigateur intégré Cursor bloqué | Utilisez Chrome ou Edge à la place. |
| Port occupé | `npm run dev -- --port 3001` puis ouvrez `http://localhost:3001/fr` |
| Erreurs au démarrage | `npm ci` puis relancez `npm run dev` |
| Crash avec Node 25 | Tester Node 22 LTS (`nvm use 22` si disponible) |

### Vérification rapide

- [ ] Le terminal affiche `Local: http://localhost:…`
- [ ] `/fr` affiche le hero vidéo, la navigation et les sections
- [ ] La console du navigateur (F12) ne montre pas d’erreur rouge

## Build

```bash
npm run build
```

## Déploiement Cloudflare

### Prérequis

1. Compte Cloudflare avec Workers activé
2. Domaine `agropure-analytics.com` configuré sur le worker
3. Secret formulaire de contact :
   - `WEB3FORMS_ACCESS_KEY` (voir configuration Web3Forms ci-dessous)

### Déploiement manuel

```bash
npm run build
npx wrangler deploy --config .output/server/wrangler.json
```

### GitHub Actions

Configurer dans le dépôt GitHub :

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Le workflow `.github/workflows/deploy-cloudflare.yml` déploie automatiquement sur push vers `main`.

### Formulaire de contact (Web3Forms)

1. Créer un compte sur [web3forms.com](https://web3forms.com).
2. Créer un formulaire avec **`noreply@agropure-analytics.com`** comme adresse de notification.
3. Copier l’**Access Key** générée.
4. Définir la variable d’environnement :
   - **Local** : copier `.env.example` → `.env` et `.dev.vars.example` → `.dev.vars`, coller la clé, puis **redémarrer** `npm run dev`.
   - **Production (Cloudflare Pages)** — dashboard du projet connecté à GitHub :
     - **Settings → Variables and secrets → Production**
     - Ajouter le secret `WEB3FORMS_ACCESS_KEY` (type **Encrypted**)
     - **Redéployer** le site après toute modification (obligatoire)
     - Vérifier que le secret n'est pas uniquement sur **Preview**
   - **Production (Cloudflare Workers via Wrangler)** — après `npm run build` et le déploiement :

```bash
npx wrangler secret put WEB3FORMS_ACCESS_KEY --config .output/server/wrangler.json
```

Coller la même clé que dans `.env` / `.dev.vars` lorsque Wrangler le demande.

5. Sur [web3forms.com](https://web3forms.com), ouvrir le formulaire lié à votre access key et confirmer que l'email de notification est **`noreply@agropure-analytics.com`** (le destinataire se configure dans le dashboard Web3Forms, pas dans le code).

### Checklist déploiement Cloudflare

| Étape | Action |
|-------|--------|
| 1 | `npm run build` réussit localement |
| 2 | Secrets GitHub : `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` |
| 3 | Push sur `main` → déploiement auto via GitHub Actions |
| 4 | Cloudflare Dashboard → Worker `site-web-agropure-analytics` → Routes : `agropure-analytics.com/*` et `www.agropure-analytics.com/*` |
| 5 | SSL/TLS : mode **Full (strict)** |
| 6 | Pages : secret `WEB3FORMS_ACCESS_KEY` en **Production** + redeploy ; ou Workers : `npx wrangler secret put WEB3FORMS_ACCESS_KEY --config .output/server/wrangler.json` |
| 7 | Web3Forms dashboard : notification vers `noreply@agropure-analytics.com` |
| 8 | Tester `/fr#contact` en production |

**Déploiement manuel** (sans GitHub Actions) :

```bash
npm run build
npx wrangler deploy --config .output/server/wrangler.json
npx wrangler secret put WEB3FORMS_ACCESS_KEY --config .output/server/wrangler.json
```

### Vidéo hero

La vidéo `video_4` (162 Mo) dépasse la limite Cloudflare Workers (25 Mo). Par défaut, `video_1` (~18 Mo) est utilisée. Pour `video_4`, hébergez-la sur Cloudflare R2 ou un CDN et définissez `VITE_HERO_VIDEO_URL` au build.

## Structure des routes

| Route | Description |
|-------|-------------|
| `/` | Redirige vers `/fr` |
| `/fr`, `/en`, `/zh`, `/es` | Homepage |
| `/{locale}/confidentialite` | Politique de confidentialité |

## SEO

- `public/robots.txt` — crawlers IA autorisés
- `public/sitemap.xml` — hreflang multilingue
- `public/llms.txt` — contexte pour moteurs IA
- JSON-LD Organization, WebSite, SoftwareApplication, FAQPage
