const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withMDX = require('@next/mdx')();
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = withPlugins([ withFonts, withMDX ], {
  enableSvg: true,
  trailingSlash: true, // Makes pages to be exported as index.html files
  env: { // Any of these vars can be accessed as process.env.{name}
    donateUrl: 'https://slnk.to/donate',
    ga: 'UA-38351554-5',
  },
  experimental: {
    publicDirectory: true, // Makes all content in public dir to be served statically from the root
  },
  webpack(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(new CssMinimizerPlugin({}));

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
