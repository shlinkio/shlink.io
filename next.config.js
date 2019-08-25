const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports = withCSS(
  withFonts({
    enableSvg: true,
    env: {
      donateUrl: 'https://acel.me/donate'
    }
  })
);
