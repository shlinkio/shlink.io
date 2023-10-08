import { getViteConfig } from 'astro/config';

// eslint-disable-next-line no-restricted-exports
export default getViteConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './config/setupTests.ts',
  },
});
