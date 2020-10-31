module.exports = {
  css: [ './out/**/*.css' ],
  content: [ './out/**/*.js', './out/**/*.html' ],
  safelist: {
    standard: [ /hljs/, /hljs-(.*)/, /algolia/, /algolia-(.*)/, /ds-(.*)/ ],
    deep: [ /algolia-(.*)/ ],
  },
};
