module.exports = {
  css: [ './out/**/*.css' ],
  content: [ './out/**/*.js', './out/**/*.html' ],
  whitelistPatterns: [ /hljs/, /hljs-(.*)/, /algolia/, /algolia-(.*)/, /ds-(.*)/ ],
  whitelistPatternsChildren: [ /algolia-(.*)/ ],
};
