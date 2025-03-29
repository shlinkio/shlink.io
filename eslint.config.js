import shlink from '@shlinkio/eslint-config-js-coding-standard';
import { defineConfig } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';

/* eslint-disable-next-line no-restricted-exports */
export default defineConfig(
  shlink,

  // react-external-link states is a ESM ("type": "module"), but then exposes a CommonJS module as its main entry point.
  // This works around that.
  {
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },

  {
    files: ['**/*.astro'],
    extends: eslintPluginAstro.configs.recommended,
    settings: {
      // eslint-plugin-import needs to know what parser to use for certain file types
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
