const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withMDX = require('@next/mdx')();
const withSass = require('@zeit/next-sass');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const exportMapForPath = (path) => ({
  page: '/documentation/[...slug]',
  query: {
    slug: path.split('/').splice(2),
  },
});

module.exports = withPlugins([ withSass, withFonts, withMDX ], {
  enableSvg: true,
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
  async exportPathMap(defaultPathMap) {
    delete defaultPathMap['/documentation/[...slug]'];

    const docsPaths = [
      '/documentation/install-docker-image',
      '/documentation/install-dist-file',
      '/documentation/serve-with-swoole',
      '/documentation/classic-web-server',
      '/documentation/multiple-domains',
      '/documentation/real-time-updates',
      '/documentation/geolite-license-key',
      '/documentation/long-running-tasks',
      '/documentation/command-line-interface',
      '/documentation/api-docs',
      '/documentation/api-docs/authentication',
      '/documentation/api-docs/error-management',
      '/documentation/shlink-web-client',
      '/documentation/shlink-web-client/installation',
      '/documentation/shlink-web-client/serve-in-sub-path',
      '/documentation/shlink-web-client/pre-configuring-servers',
      '/documentation/integrations',
      '/documentation/integrations/short-menu-mac',
      '/documentation/integrations/short-menu-ios',
    ];

    return {
      ...defaultPathMap,
      ...docsPaths.reduce((acc, path) => ({ ...acc, [path]: exportMapForPath(path) }), {}),
    };
  },
});
