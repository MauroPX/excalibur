/**
 * Barrel de contenido de casos — work-tests + meta-caso + sección FDN-Momentum-2.
 *
 * El contenido de cada caso vive aquí como dato tipado (CasePageData), NO en i18n:
 * la traducción EN es una tarea de copywriting aparte (Fase G). i18n cubre solo el
 * "chrome" compartido (labels de sección, navegación, disclaimers genéricos).
 *
 * Cada módulo llama validateCaseData() al cargarse → si un caso work-test|meta no
 * declara objetivo/aprendizaje/footerDisclaimer, el build de Next.js revienta (R-2).
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { fleetControlCase } from './fleetcontrol'
import { bcsCase } from './bcs'
import { codesaCase } from './codesa'
import { solidariaWorkTestCase } from './solidaria'
import { excaliburCase } from './excalibur'

/** Los 4 work-tests, en orden de navegación (ruta /pruebas-tecnicas/[slug]). */
export const WORK_TEST_CASES: Record<string, CasePageData> = {
  fleetcontrol: fleetControlCase,
  bcs: bcsCase,
  codesa: codesaCase,
  solidaria: solidariaWorkTestCase,
}

/** Slugs de work-test — para generateStaticParams y sitemap (Fase E). */
export const WORK_TEST_SLUGS = Object.keys(WORK_TEST_CASES)

/** Meta-caso — ruta propia /excalibur, no /pruebas-tecnicas. */
export const META_CASE = excaliburCase

export { fleetControlCase, bcsCase, codesaCase, solidariaWorkTestCase, excaliburCase }
export { fdnMomentum2 } from './fdn-momentum-2'
export type { Momentum2Section } from './fdn-momentum-2'
