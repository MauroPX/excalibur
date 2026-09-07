import type { CasePageData } from './types'

/**
 * Validación de contenido en build-time — R-2 del blueprint EX-v2-TMPL-002 v1.1.0.
 *
 * Los módulos de `src/content/cases/*.ts` la invocan al cargarse. Si un caso
 * `work-test` o `meta` no declara `objetivo`, `aprendizaje` y `footerDisclaimer`,
 * el build de Next.js (SSG) revienta con un error explícito — nunca un fallo
 * silencioso en runtime. Un caso `client` (o sin `caseType`) pasa siempre:
 * los campos v1.1.0 son opcionales y retrocompatibles.
 *
 * Fuente: docs/m2/spec/CASE_PAGE_CONTENT_STRUCTURE.md §194-197
 *         (el footer/disclaimer NO es opcional ni intercambiable entre casos).
 */
export function validateCaseData(data: CasePageData): CasePageData {
  const type = data.caseType ?? 'client'
  if (type === 'client') return data

  const missing: string[] = []
  if (!data.objetivo?.trim()) missing.push('objetivo')
  if (!data.aprendizaje?.trim()) missing.push('aprendizaje')
  if (!data.footerDisclaimer?.trim()) missing.push('footerDisclaimer')

  if (missing.length > 0) {
    throw new Error(
      `[EX-v2-TMPL-002 v1.1.0 · R-2] El caso "${data.slug}" (caseType="${type}") ` +
        `debe declarar: ${missing.join(', ')}. ` +
        `Son campos obligatorios para casos work-test y meta — ` +
        `el disclaimer es propio de cada caso y no se hereda de otro.`,
    )
  }
  return data
}
