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
| Prix « Académie » (1 400 € TTC) | `formules[0]` | **proposition** : tarif d'entrée abaissé pour ouvrir l'accès |
| Prix « Académie + Mentorat » (1 800 € TTC) | `formules[1]` | plafond maintenu au tarif pratiqué en 2025-2026 ; l'écart de 400 € valorise les 2 h de mentorat à 200 €/h |
| Nombre de places en Mentorat (8) | `formules[1].places` | **à confirmer** selon ce que ton agenda absorbe |
| `offerId` Podia des deux formules | `formules[].offerId` | **vides** — sans eux, aucun paiement possible. L'offre 2025-2026 portait l'id `2963419` |
| Coupons `ACA30` et `ACA20` | `paliers[].code` | `ACA30` existait en 2025-2026 ; **`ACA20` est à créer côté Podia** |
| Dates des 7 lives | `lives` | premier mardi du mois, octobre 2026 → avril 2027, **à confirmer** |
| Nombre de laboratoires | `chiffres` / `laboratoires` | la page 2025-2026 annonçait 10 mais en listait 9 ; ici on annonce 9 |

### Ce que paie réellement l'acheteur

| Formule | Plein | −30 % | −20 % |
|---|---|---|---|
| Académie | 1 400 € | **980 €** ou 10 × 98 € | 1 120 € ou 10 × 112 € |
| Académie + Mentorat | 1 800 € | **1 260 €** ou 10 × 126 € | 1 440 € ou 10 × 144 € |

À surveiller : la remise se cumule avec le tarif d'entrée abaissé. L'accès le
moins cher tombe à **980 €**, contre 1 260 € réellement pratiqués en 2025-2026
(le lien `?coupon=ACA30` était permanent sur l'ancienne page). Si cette érosion
n'est pas voulue, remonter `formules[0].prixComptant` plutôt que toucher aux
paliers.

À l'inverse, une coïncidence utile à exploiter en communication : à −30 %, la
formule Mentorat revient à 1 260 € — exactement le prix payé l'an dernier pour
le parcours seul, mentorat en plus.

## Early bird : deux paliers

`paliers` définit −30 % jusqu'au 15 septembre 2026, puis −20 % jusqu'au
5 octobre 2026, veille du live de lancement. Passé le dernier palier, `promo`
vaut `null` et la page repasse **toute seule** au prix plein : plus de bandeau,
plus de prix barré, plus de coupon dans les liens Podia.

⚠️ Le site est statique : le palier est figé au moment du build. Le workflow
contient donc un `schedule` quotidien (4h17 UTC) qui reconstruit et redéploie.
**Ne pas le retirer**, sinon la page continuerait d'afficher −30 % après
l'échéance — ce qui, en plus d'être faux, est une pratique commerciale
trompeuse au sens du code de la consommation.

Même logique pour le prix barré : le montant de référence doit avoir été
réellement pratiqué.

## Ressources visuelles

| Fichier | Origine |
|---|---|
| `public/img/logo-decoinces-du-crayon.png` | visuel de partage de la boutique Podia, rogné et fond rendu transparent |
| `public/img/logo-decoinces-du-crayon-dark.png` | même logo, lettres noires remplacées par du crème pour le mode sombre ; servi par `<picture>` sur `prefers-color-scheme: dark` |
| `public/favicon.png` | favicon de la boutique Podia |
| `public/og-academie.jpg` | composée en local (logo + titre + pastille cohorte), à régénérer si le millésime change |
| `src/assets/nicolas-portrait.png` | repris de `nicolasverdot-site`, converti en WebP au build par `astro:assets` |
| `public/logos/*` | logos clients repris de `nicolasverdot-site/src/data/clients.ts`, déjà publics sur ce site |

Les logos clients sont présentés sur la page comme des **références de praticien
de Nicolas**, pas comme des élèves de l'Académie. Ne pas modifier cette
formulation : elle est ce qui rend leur présence honnête.

## Déploiement FTP

Deux voies, au choix.

### 1. Automatique à chaque `git push` (en place)

Le dépôt est **[nverdot/academie-decoinces-du-crayon](https://github.com/nverdot/academie-decoinces-du-crayon)**,
les quatre secrets sont renseignés, et `FTP_SERVER_DIR` vaut
`/academie.decoincesducrayon.com/` — le dossier du sous-domaine, surtout pas la
racine du compte FTP, qui sert le domaine principal. Une étape « Vérifier la
cible FTP » refuse le déploiement si ce secret vaut `/`.

⚠️ Le `.htaccess` à la racine du compte FTP redirige vers `www` **tous** les
sous-domaines absents de sa liste blanche. `academie` y a été ajouté. Tout
nouveau sous-domaine devra l'être aussi, sinon il sera redirigé en silence.


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
