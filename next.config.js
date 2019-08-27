const withFonts = require('next-fonts');
const withCSS = require('./src/withCss'); // FIXME Own implementation used until this is fixed: https://github.com/zeit/next-plugins/issues/526

module.exports = withCSS(
  withFonts({
    enableSvg: true,
    exportTrailingSlash: true, // Makes pages to be exported as index.html files
    env: { // Any of these vars can be accessed as process.env.{name}
      donateUrl: 'https://acel.me/donate',
      ga: 'UA-38351554-5',
    },
    experimental: {
      publicDirectory: true, // Makes all content in public dir to be served statically from the root
    },
  })
);
