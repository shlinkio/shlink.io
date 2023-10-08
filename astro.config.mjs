import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import mdxMermaid from 'mdx-mermaid'

// https://astro.build/config
export default defineConfig({
  site: 'https://shlink.io',
  outDir: './build',
  integrations: [sitemap(), react(), mdx({
    remarkPlugins: [() => mdxMermaid({ output: 'svg' })],
  })],
});
