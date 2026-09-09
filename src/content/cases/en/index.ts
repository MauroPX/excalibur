/**
 * Traducciones EN de los casos — Fase G. Cada archivo exporta la misma forma
 * `CasePageData` que su gemelo en `../es/` (mismo nombre de const). El barrel
 * `../index.ts` mezcla EN sobre ES por locale.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import type { Momentum2Section } from '../es/fdn-momentum-2'

import { correosChileCase } from './clients/correos-chile'
import { bbvaCase } from './clients/bbva'
import { fdnCase } from './clients/fdn'
import { lasalleCase } from './clients/lasalle'
import { fidSegurosCase } from './clients/fid-seguros'
import { suredCase } from './clients/sured'
import { parkingRuedazCase } from './clients/parking-ruedaz'
import { sicloIdpayCase } from './clients/siclo-idpay'
import { fleetControlCase } from './fleetcontrol'
import { bcsCase } from './bcs'
import { codesaCase } from './codesa'
import { solidariaWorkTestCase } from './solidaria'
import { excaliburCase } from './excalibur'
import { fdnMomentum2 } from './fdn-momentum-2'

export const EN_CLIENT_CASES: Record<string, CasePageData> = {
  'correos-chile': correosChileCase,
  bbva: bbvaCase,
  fdn: fdnCase,
  lasalle: lasalleCase,
  'fid-seguros': fidSegurosCase,
  sured: suredCase,
  'parking-ruedaz': parkingRuedazCase,
  'siclo-idpay': sicloIdpayCase,
}

export const EN_WORK_TEST_CASES: Record<string, CasePageData> = {
  fleetcontrol: fleetControlCase,
  bcs: bcsCase,
  codesa: codesaCase,
  solidaria: solidariaWorkTestCase,
}

export const EN_META_CASE: CasePageData | undefined = excaliburCase

export const enFdnMomentum2: Momentum2Section | undefined = fdnMomentum2
