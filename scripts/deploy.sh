#!/usr/bin/env bash
# Déploiement manuel depuis le Mac : build puis miroir FTP du dossier dist/.
#
# Prérequis :   brew install lftp
# Configuration : copier .env.example en .env et le remplir (le .env est
#                 ignoré par git, il ne partira jamais sur le dépôt).
# Usage :       npm run deploy        (ou ./scripts/deploy.sh --dry-run)

set -euo pipefail

cd "$(dirname "$0")/.."

if [[ ! -f .env ]]; then
  echo "✗ Fichier .env absent. Copiez .env.example en .env et renseignez-le." >&2
  exit 1
fi

# shellcheck disable=SC1091
set -a; source .env; set +a

: "${FTP_SERVER:?FTP_SERVER manquant dans .env}"
: "${FTP_USERNAME:?FTP_USERNAME manquant dans .env}"
: "${FTP_PASSWORD:?FTP_PASSWORD manquant dans .env}"
: "${FTP_SERVER_DIR:?FTP_SERVER_DIR manquant dans .env}"

# Même garde-fou que la CI, et il compte davantage ici : ce script utilise
# « mirror --delete », qui supprime du serveur tout ce qui n'est pas dans dist/.
# Lancé sur la racine, il effacerait le site voisin au lieu de simplement
# l'écraser.
case "$FTP_SERVER_DIR" in
  "/" | "." | "./" | "")
    echo "✗ FTP_SERVER_DIR vaut « ${FTP_SERVER_DIR} » : c'est la racine du compte FTP." >&2
    echo "  Ce script supprime les fichiers absents de dist/ — il effacerait le site" >&2
    echo "  qui s'y trouve. Renseignez le dossier du sous-domaine dans .env." >&2
    exit 1
    ;;
esac

if ! command -v lftp >/dev/null 2>&1; then
  echo "✗ lftp introuvable. Installez-le avec : brew install lftp" >&2
  exit 1
fi

DRY_RUN=""
if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN="--dry-run"
  echo "→ Mode simulation : rien ne sera écrit sur le serveur."
fi

echo "→ Build du site…"
npm run build

echo "→ Envoi vers ${FTP_SERVER}:${FTP_SERVER_DIR}…"
lftp -c "
set ftp:ssl-allow true;
set ftp:ssl-force true;
set ftp:ssl-protect-data true;
set ssl:verify-certificate no;
open -u '${FTP_USERNAME}','${FTP_PASSWORD}' '${FTP_SERVER}';
mirror --reverse --delete --verbose --parallel=4 ${DRY_RUN} \
  --exclude-glob .DS_Store \
  ./dist/ '${FTP_SERVER_DIR}';
bye
"

echo "✓ Déploiement terminé — https://academie.decoincesducrayon.com/"
