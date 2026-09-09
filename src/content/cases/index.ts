/**
 * Barrel de contenido de casos — bilingüe (Fase G, Opción 2).
 *
 * El contenido tipado (CasePageData) vive en:
 *   src/content/cases/es/**   — español (fuente, completo)
 *   src/content/cases/en/**   — inglés (traducción; lo que falte cae a `es`)
 *
 * Los slugs (URLs) son independientes del idioma. Los getters `get*Cases(locale)`
 * resuelven EN→ES por caso: un caso sin traducir todavía sirve su versión ES.
 *
 * Cada módulo llama validateCaseData() al cargarse → si un work-test|meta no
 * declara objetivo/aprendizaje/footerDisclaimer, el build revienta (R-2).
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import type { AppLocale } from '@/i18n/routing'

// ── ES (fuente) ──────────────────────────────────────────────────────────────
import { fleetControlCase } from './es/fleetcontrol'
import { bcsCase } from './es/bcs'
import { codesaCase } from './es/codesa'
import { solidariaWorkTestCase } from './es/solidaria'
import { excaliburCase } from './es/excalibur'
import { correosChileCase } from './es/clients/correos-chile'
import { bbvaCase } from './es/clients/bbva'
import { fdnCase } from './es/clients/fdn'
import { lasalleCase } from './es/clients/lasalle'
import { fidSegurosCase } from './es/clients/fid-seguros'
import { suredCase } from './es/clients/sured'
import { parkingRuedazCase } from './es/clients/parking-ruedaz'
import { sicloIdpayCase } from './es/clients/siclo-idpay'
import { fdnMomentum2 as fdnMomentum2Es } from './es/fdn-momentum-2'
import type { Momentum2Section } from './es/fdn-momentum-2'

// ── EN (traducción parcial — se rellena caso por caso) ───────────────────────
import { EN_CLIENT_CASES, EN_WORK_TEST_CASES, EN_META_CASE, enFdnMomentum2 } from './en'

// ── ES como objetos indexados ───────────────────────────────────────────────
const ES_WORK_TEST_CASES: Record<string, CasePageData> = {
  fleetcontrol: fleetControlCase,
  bcs: bcsCase,
  codesa: codesaCase,
  solidaria: solidariaWorkTestCase,
}
const ES_CLIENT_CASES: Record<string, CasePageData> = {
  'correos-chile': correosChileCase,
  bbva: bbvaCase,
  fdn: fdnCase,
  lasalle: lasalleCase,
  'fid-seguros': fidSegurosCase,
  sured: suredCase,
  'parking-ruedaz': parkingRuedazCase,
  'siclo-idpay': sicloIdpayCase,
}

const mergeByLocale = (
  es: Record<string, CasePageData>,
  en: Record<string, CasePageData>,
  locale: AppLocale,
): Record<string, CasePageData> =>
  locale === 'en' ? { ...es, ...en } : es

/** Casos de cliente (/casos/[slug]) para el locale dado; EN cae a ES por caso. */
export const getClientCases = (locale: AppLocale) =>
  mergeByLocale(ES_CLIENT_CASES, EN_CLIENT_CASES, locale)

/** Work-tests (/pruebas-tecnicas/[slug]) para el locale dado; EN cae a ES. */
export const getWorkTestCases = (locale: AppLocale) =>
  mergeByLocale(ES_WORK_TEST_CASES, EN_WORK_TEST_CASES, locale)

/** Meta-caso (/excalibur) para el locale dado. */
export const getMetaCase = (locale: AppLocale): CasePageData =>
  locale === 'en' ? EN_META_CASE ?? excaliburCase : excaliburCase

/** Sección FDN Momentum 2 (dentro de /casos/fdn) para el locale dado. */
export const getFdnMomentum2 = (locale: AppLocale): Momentum2Section =>
  locale === 'en' ? enFdnMomentum2 ?? fdnMomentum2Es : fdnMomentum2Es

// ── Slugs (independientes del idioma) ───────────────────────────────────────
export const WORK_TEST_SLUGS = Object.keys(ES_WORK_TEST_CASES)
export const CLIENT_CASE_SLUGS = Object.keys(ES_CLIENT_CASES)

// ── Compat: exports ES directos (stories, tests, componentes sin locale) ─────
export const WORK_TEST_CASES = ES_WORK_TEST_CASES
export const CLIENT_CASES = ES_CLIENT_CASES
export const META_CASE = excaliburCase
export const fdnMomentum2 = fdnMomentum2Es
export {
  fleetControlCase, bcsCase, codesaCase, solidariaWorkTestCase, excaliburCase,
  correosChileCase, bbvaCase, fdnCase, lasalleCase, fidSegurosCase,
  suredCase, parkingRuedazCase, sicloIdpayCase,
}
export type { Momentum2Section }
