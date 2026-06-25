// @ts-check
import { defineConfig } from 'astro/config';
import reallySimpleDocs from 'reallysimpledocs/astro';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    reallySimpleDocs({
      docsDir: './docs',
      routeBase: '/docs',
      style: 'vega',
      css: false,
      components: {
        Head: './src/components/DocsHead.astro'
      },
      site: {
        title: 'VergeKit Docs',
        description: 'Documentation for VergeKit.',
        assets: {
          favicon: '/favicon.svg'
        }
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
