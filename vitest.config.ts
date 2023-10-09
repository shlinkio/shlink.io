import { defineConfig } from 'vitest/config';

// eslint-disable-next-line no-restricted-exports
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './config/setupTests.ts',
  },
});
