import shlink from '@shlinkio/eslint-config-js-coding-standard';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

/* eslint-disable-next-line no-restricted-exports */
export default tseslint.config(...shlink, {
  extends: eslintPluginAstro.configs.recommended,
});
