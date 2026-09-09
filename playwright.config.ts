import { defineConfig, devices } from '@playwright/test'

/**
 * E2E de accesibilidad — axe-core sobre el sitio construido (SSG + runtime).
 * Complementa a jest-axe (que corre por componente aislado): esto audita las
 * páginas reales renderizadas, con el tema, i18n y el DOM completo.
 *
 * `pnpm test:e2e`  — build + start + corre e2e/*.spec.ts en Chromium.
 * CI: job dedicado en .github/workflows/v2.yml (gate bloqueante, 0 violaciones AA).
 */
const PORT = 3100
const BASE_URL = `http://localhost:${PORT}`

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: {
    command: `pnpm build && pnpm exec next start -p ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
})
