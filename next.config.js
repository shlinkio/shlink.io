const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports = withCSS(
  withFonts({
    enableSvg: true,
    exportTrailingSlash: true, // Makes pages to be exported as index.html files
    env: { // Any of these vars can be accessed as process.env.{name}
      donateUrl: 'https://acel.me/donate',
      ga: 'UA-38351554-5'
    },
    experimental: {
      publicDirectory: true, // Makes all content in public dir to be served statically from the root
    }
  })
);
