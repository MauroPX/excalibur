/**
 * Traducciones EN de los casos — Fase G. Se rellenan caso por caso: cada archivo
 * exporta la misma forma `CasePageData` que su gemelo en `../es/`. Lo que falte
 * aquí lo resuelve el barrel `../index.ts` sirviendo la versión ES.
 *
 * Para activar un caso: crear `./clients/<slug>.ts` (o `./<slug>.ts` para
 * work-test/meta) y añadirlo al Record correspondiente abajo.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import type { Momentum2Section } from '../es/fdn-momentum-2'

export const EN_CLIENT_CASES: Record<string, CasePageData> = {
  // 'correos-chile': correosChileCaseEn,
}

export const EN_WORK_TEST_CASES: Record<string, CasePageData> = {
  // fleetcontrol: fleetControlCaseEn,
}

export const EN_META_CASE: CasePageData | undefined = undefined

export const enFdnMomentum2: Momentum2Section | undefined = undefined
