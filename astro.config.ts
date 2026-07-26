import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://shlink.io',
  outDir: './build',
  integrations: [sitemap(), react(), expressiveCode(), mdx()],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Silence annoying sass deprecation warnings until we get rid of bootstrap
          silenceDeprecations: ['abs-percent', 'color-functions', 'global-builtin', 'import', 'if-function'],
        },
      },
    },
  },
});
