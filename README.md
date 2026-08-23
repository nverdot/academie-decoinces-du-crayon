# Académie des Décoincés du Crayon — page de vente 2026/2027

Site statique Astro, une seule page, destiné à **https://academie.decoincesducrayon.com**.
Le paiement reste géré par **Podia + Stripe** : la page ne fait qu'envoyer vers le
checkout de l'offre.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4331
npm run build    # génère dist/
```

## Où se trouve le contenu

Tout le texte, les prix, les dates et le lien de paiement sont dans un seul
fichier : **`src/data/academie.ts`**. La page (`src/pages/index.astro`) ne
contient aucune de ces valeurs en dur. Pour la cohorte suivante, il suffit de
modifier ce fichier.

## ⚠️ À valider avant la mise en ligne

| Quoi | Où | Statut |
|---|---|---|
| Tarif (1 800 € / 10 × 180 €) | `src/data/academie.ts` → `offre` | repris de 2025-2026, **à confirmer** |
| Lien de checkout Podia | `src/data/academie.ts` → `offre.checkoutUrl` | l'`offer_id` de 2025-2026 était `2963419`, **il faut celui de la nouvelle offre** |
| Dates des 7 lives | `src/data/academie.ts` → `lives` | mardis calés sur le rythme 2025-2026, **à confirmer** |
| Nombre de laboratoires | `src/data/academie.ts` → `chiffres` / `laboratoires` | la page 2025-2026 annonçait « 10 laboratoires » mais n'en listait que 9 ; ici on annonce 9. À trancher. |
| Image de partage | `public/og-academie.jpg` | **manquante** — 1200 × 630 px, référencée par les balises Open Graph |
| Codes promo | — | la page 2025-2026 avait un lien « remise de 30 % » (`?coupon=ACA30`). Non repris ici. |

## Déploiement FTP

Deux voies, au choix.

### 1. Automatique à chaque `git push` (recommandé)

`.github/workflows/deploy.yml` construit le site et le pousse en FTP à chaque
push sur `main`. À configurer une seule fois dans les *Settings → Secrets and
variables → Actions* du dépôt GitHub :

- `FTP_SERVER` — l'hôte, sans `ftp://` ni chemin
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_SERVER_DIR` — le dossier du sous-domaine, terminé par `/`

C'est le même mécanisme que le site `nicolasverdot-site`, avec des secrets
distincts puisque la cible est un autre dossier.

### 2. Manuel depuis le Mac

```bash
brew install lftp          # une seule fois
cp .env.example .env       # puis remplir les 4 variables
npm run deploy:dry         # simulation, n'écrit rien
npm run deploy             # build + envoi
```

`.env` est ignoré par git : les identifiants ne quittent jamais la machine.

## SEO

- `<title>`, meta description, canonical et Open Graph dans `src/layouts/Layout.astro`
- JSON-LD `Course` (avec `Offer` et `CourseInstance`) et `FAQPage` générés depuis
  les données — la FAQ de la page et celle du balisage ne peuvent pas diverger
- `sitemap-index.xml` et `robots.txt` générés au build
- Une seule page volontairement : contenu dense et unique plutôt que plusieurs
  pages minces sur le même sujet
