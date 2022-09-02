import withPlugins from 'next-compose-plugins';
import withFonts from 'next-fonts';
import mdx from '@next/mdx';
import remarkGfm from 'remark-gfm'

const withMDX = mdx({
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [remarkGfm],
  }
});

export default withPlugins([ withFonts, withMDX ], {
  enableSvg: true,
  trailingSlash: true, // Makes pages to be exported as index.html files
  swcMinify: true, // This will make compiled assets to be minified via SWC instead of webpack plugin
  env: { // Any of these vars can be accessed as process.env.{name}
    donateUrl: 'https://slnk.to/donate',
    ga: 'UA-38351554-5',
  },
  experimental: {
    publicDirectory: true, // Makes all content in public dir to be served statically from the root
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
