import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
// import mdxMermaid from 'mdx-mermaid'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx({
    // remarkPlugins: [mdxMermaid],
  })],
  outDir: './build',
});
