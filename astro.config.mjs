import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
// import remarkMermaidjs from 'remark-mermaidjs'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx({
    // remarkPlugins: [remarkMermaidjs],
  })],
  outDir: './build',
});
