import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://turkay.eu',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr', 'sk'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static'
});
