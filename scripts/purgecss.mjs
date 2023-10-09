import { PurgeCSS } from 'purgecss';
import { writeFileSync } from 'fs';

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
  writeFileSync(file, Buffer.from(css));
});
