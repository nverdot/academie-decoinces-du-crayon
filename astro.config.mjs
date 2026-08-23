import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://academie.decoincesducrayon.com',
  integrations: [sitemap()],
  build: {
    // Une page unique : on garde des URLs propres et un build statique
    // déployable tel quel sur n'importe quel hébergeur (FTP, Netlify, Vercel).
    format: 'directory',
  },
});
