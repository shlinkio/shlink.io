const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withMDX = require('@next/mdx')();
const withSass = require('@zeit/next-sass');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = withPlugins([ withSass, withFonts, withMDX ], {
  enableSvg: true,
  trailingSlash: true,
  exportTrailingSlash: true, // Makes pages to be exported as index.html files
  env: { // Any of these vars can be accessed as process.env.{name}
    donateUrl: 'https://slnk.to/donate',
    ga: 'UA-38351554-5',
  },
  experimental: {
    publicDirectory: true, // Makes all content in public dir to be served statically from the root
  },
  webpack(config) {
    config.optimization.minimizer = config.optimization.minimizer || [];
    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;
  },
});
