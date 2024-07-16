import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
// eslint-disable-next-line no-restricted-exports
export default defineConfig({
  site: 'https://shlink.io',
  outDir: './build',
  integrations: [sitemap(), react(), expressiveCode(), mdx()],
});
