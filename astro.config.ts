import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
// @ts-expect-error The module is in fact found. TS fails to find it due to entry points
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
// eslint-disable-next-line no-restricted-exports
export default defineConfig({
  site: 'https://shlink.io',
  outDir: './build',
  integrations: [sitemap(), react(), expressiveCode(), mdx()],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Silence annoying sass deprecation warnings until we get rid of bootstrap
          silenceDeprecations: ['mixed-decls', 'abs-percent', 'color-functions', 'global-builtin', 'import'],
        },
      },
    },
  },
});
