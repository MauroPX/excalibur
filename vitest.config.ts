import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    // e2e/ es Playwright (pnpm test:e2e), no vitest
    exclude: ['**/node_modules/**', '**/dist/**', '**/.next/**', 'e2e/**'],
    server: {
      deps: {
        inline: [/@mui\/material/, /@mui\/icons-material/],
      },
    },
  },
  ssr: {
    noExternal: [/@mui/],
  },
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
    },
  },
});
