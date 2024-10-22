import shlink from '@shlinkio/eslint-config-js-coding-standard';
import eslintPluginAstro from 'eslint-plugin-astro';

/* eslint-disable-next-line no-restricted-exports */
export default [
  ...shlink,
  ...eslintPluginAstro.configs.recommended,

  // Linter is throwing a false positive on the usage of `class` property when it should be className, but in astro
  // files, `class` is correct
  {
    files: ['**/*.astro'],
    rules: {
      'react/no-unknown-property': 'off',
    },
  },
];
