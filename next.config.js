const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const withCSS = require('./src/withCss'); // FIXME Own implementation used until this is fixed: https://github.com/zeit/next-plugins/issues/526

module.exports = withPlugins([ withCSS, withFonts ], {
  enableSvg: true,
  exportTrailingSlash: true, // Makes pages to be exported as index.html files
  env: { // Any of these vars can be accessed as process.env.{name}
    donateUrl: 'https://acel.me/donate',
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
