import shlink from '@shlinkio/eslint-config-js-coding-standard';
import { defineConfig } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';

/* eslint-disable-next-line no-restricted-exports */
export default defineConfig(
  ...shlink,
  {
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },
  {
    files: ['**/*.astro'],
    extends: eslintPluginAstro.configs['flat/recommended'],
    settings: {
      'import/parsers': {
        'astro-eslint-parser': ['.astro'],
        espree: ['.js', '.mjs'],
      },
    },
    rules: {
      // Linter is throwing a false positive on the usage of `class` property when it should be className, but in astro
      // files, `class` is correct
      'react/no-unknown-property': ['error', { ignore: ['class'] }],
    },
  },
);
