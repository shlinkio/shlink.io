import { writeFileSync } from 'fs';
import { PurgeCSS } from 'purgecss';

const purgecss = new PurgeCSS();
const result = await purgecss.purge({
  css: ['./build/_astro/*.css'],
  content: ['./build/**/*.js', './build/**/*.html'],
  safelist: {
    standard: [/algolia/, /algolia-(.*)/, /ds-(.*)/],
    deep: [/algolia-(.*)/],
  },
});

result.forEach(({ css, file }) => {
  // eslint-disable-next-line no-undef
  writeFileSync(file, Buffer.from(css));
});
