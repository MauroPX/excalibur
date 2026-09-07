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
import { correosChileCase } from './clients/correos-chile'
import { bbvaCase } from './clients/bbva'
import { fdnCase } from './clients/fdn'
import { lasalleCase } from './clients/lasalle'
import { fidSegurosCase } from './clients/fid-seguros'
import { suredCase } from './clients/sured'
import { parkingRuedazCase } from './clients/parking-ruedaz'
import { sicloIdpayCase } from './clients/siclo-idpay'

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

/**
 * Casos de cliente (experiencia profesional pagada) — ruta /casos/[slug].
 * Orden = orden de navegación (nextCase encadena en ciclo). Taxonomía separada
 * de los work-tests: sin cruces de contenido ni URLs. Ver [[case-taxonomy]].
 */
export const CLIENT_CASES: Record<string, CasePageData> = {
  'correos-chile': correosChileCase,
  bbva: bbvaCase,
  fdn: fdnCase,
  lasalle: lasalleCase,
  'fid-seguros': fidSegurosCase,
  sured: suredCase,
  'parking-ruedaz': parkingRuedazCase,
  'siclo-idpay': sicloIdpayCase,
}

/** Slugs de casos de cliente — para generateStaticParams y sitemap. */
export const CLIENT_CASE_SLUGS = Object.keys(CLIENT_CASES)

export { fleetControlCase, bcsCase, codesaCase, solidariaWorkTestCase, excaliburCase }
export {
  correosChileCase,
  bbvaCase,
  fdnCase,
  lasalleCase,
  fidSegurosCase,
  suredCase,
  parkingRuedazCase,
  sicloIdpayCase,
}
export { fdnMomentum2 } from './fdn-momentum-2'
export type { Momentum2Section } from './fdn-momentum-2'
