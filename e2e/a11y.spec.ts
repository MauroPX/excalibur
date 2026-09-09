import { test, expect, type Page } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

/**
 * Auditoría de accesibilidad E2E sobre las páginas reales renderizadas.
 * - axe-core con tags WCAG 2.0/2.1 A + AA → gate bloqueante (0 violaciones).
 * - Chequeo de responsive: sin scroll horizontal del <body> a 390px.
 *
 * Complementa a jest-axe (por componente aislado). Aquí se audita el DOM
 * completo con tema, i18n y composición real de cada ruta.
 */

const ROUTES = [
  '/es',
  '/en',
  '/es/metodologia',
  '/es/excalibur',
  '/es/privacidad',
  '/es/pruebas-tecnicas',
  ...['fleetcontrol', 'bcs', 'codesa', 'solidaria'].map((s) => `/es/pruebas-tecnicas/${s}`),
  ...[
    'correos-chile', 'bbva', 'fdn', 'lasalle',
    'fid-seguros', 'sured', 'parking-ruedaz', 'siclo-idpay',
  ].map((s) => `/es/casos/${s}`),
]

const WCAG_AA = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']

async function analyze(page: Page) {
  return new AxeBuilder({ page }).withTags(WCAG_AA).analyze()
}

for (const route of ROUTES) {
  test.describe(route, () => {
    test('axe-core: 0 violaciones WCAG 2.1 AA', async ({ page }) => {
      await page.goto(route, { waitUntil: 'networkidle' })
      const { violations } = await analyze(page)
      expect(
        violations,
        violations.map((v) => `${v.id} (${v.impact}) — ${v.nodes.length} nodo(s): ${v.help}`).join('\n'),
      ).toEqual([])
    })

    test('responsive: sin scroll horizontal del body a 390px', async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 })
      await page.goto(route, { waitUntil: 'networkidle' })
      const overflow = await page.evaluate(() => {
        const el = document.documentElement
        return { scrollW: el.scrollWidth, clientW: el.clientWidth }
      })
      expect(overflow.scrollW, `scrollWidth ${overflow.scrollW} > clientWidth ${overflow.clientW}`)
        .toBeLessThanOrEqual(overflow.clientW + 1)
    })
  })
}
