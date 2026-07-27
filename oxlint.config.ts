// @ts-expect-error This lib does not expose type declarations
import { oxlint as shlink } from '@shlinkio/eslint-config-js-coding-standard';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [shlink],
  overrides: [
    {
      files: ['./*.config.ts'],
      rules: {
        'eslint/no-restricted-exports': 'off',
      },
    },
    {
      files: ['**/*.astro'],
      jsPlugins: ['eslint-plugin-astro'],
      rules: {
        // Linter is throwing a false positive on the usage of `class` property when it should be className, but in astro
        // files, `class` is correct
        'react/no-unknown-property': ['error', { ignore: ['class'] }],
      },
    },
  ],
});
