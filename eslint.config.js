import shlink from '@shlinkio/eslint-config-js-coding-standard';
import eslintPluginAstro from 'eslint-plugin-astro';

/* eslint-disable-next-line no-restricted-exports */
export default [
  ...shlink,
  ...eslintPluginAstro.configs.recommended,

  {
    files: ['**/*.astro'],
    rules: {
      // Linter is throwing a false positive on the usage of `class` property when it should be className, but in astro
      // files, `class` is correct
      'react/no-unknown-property': ['error', { ignore: ['class'] }],

      // Disable eslint-plugin-import rules in astro files, as they throw an error
      // See https://github.com/import-js/eslint-plugin-import/issues/3058
      'import/no-unresolved': 'off',
      'import/named': 'off',
      'import/namespace': 'off',
      'import/default': 'off',
      'import/export': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-duplicates': 'off',
    },
  },
];
