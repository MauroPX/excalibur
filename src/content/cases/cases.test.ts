import { describe, it, expect } from 'vitest'
import {
  WORK_TEST_CASES,
  WORK_TEST_SLUGS,
  META_CASE,
  fdnMomentum2,
} from './index'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

const allCases = [...Object.values(WORK_TEST_CASES), META_CASE]

describe('contenido de casos — work-tests + meta', () => {
  it('los 4 work-tests están presentes y sus claves coinciden con su slug', () => {
    expect(WORK_TEST_SLUGS.sort()).toEqual(['bcs', 'codesa', 'fleetcontrol', 'solidaria'])
    for (const [key, data] of Object.entries(WORK_TEST_CASES)) {
      expect(data.slug).toBe(key)
    }
  })

  it('cada caso work-test|meta pasa la validación R-2 (objetivo + aprendizaje + footerDisclaimer)', () => {
    for (const data of allCases) {
      expect(() => validateCaseData(data)).not.toThrow()
      expect(data.objetivo?.trim()).toBeTruthy()
      expect(data.aprendizaje?.trim()).toBeTruthy()
      expect(data.footerDisclaimer?.trim()).toBeTruthy()
    }
  })

  it('R-4: cada footerDisclaimer es propio — el de Solidaria NO es el de prueba técnica', () => {
    const prueba = 'Prueba técnica de selección — no un encargo remunerado.'
    expect(WORK_TEST_CASES.fleetcontrol.footerDisclaimer).toBe(prueba)
    expect(WORK_TEST_CASES.bcs.footerDisclaimer).toBe(prueba)
    expect(WORK_TEST_CASES.codesa.footerDisclaimer).toBe(prueba)
    expect(WORK_TEST_CASES.solidaria.footerDisclaimer).toBe('Diagnóstico por iniciativa propia — no fue un encargo.')
    expect(META_CASE.footerDisclaimer).not.toBe(prueba)
  })

  it('badge y caseType coinciden con la variante esperada', () => {
    expect(WORK_TEST_CASES.fleetcontrol.caseFormat).toBe('evidencia-viva')
    expect(WORK_TEST_CASES.fleetcontrol.accessLinks?.length).toBeGreaterThan(0)

    expect(WORK_TEST_CASES.codesa.caseFormat).toBe('documento-estrategico')
    expect(WORK_TEST_CASES.codesa.sections?.length).toBe(6)
    expect(WORK_TEST_CASES.codesa.estado).toBe('parcial')
    expect(WORK_TEST_CASES.codesa.estadoNota?.trim()).toBeTruthy()

    expect(WORK_TEST_CASES.solidaria.badge?.label).toBe('Diagnóstico autodirigido')
    expect(META_CASE.caseType).toBe('meta')
  })

  it('evidencia-viva ⇒ sin `sections`; documento-estrategico ⇒ sin `accessLinks` (R-6)', () => {
    for (const data of allCases) {
      if ((data.caseFormat ?? 'evidencia-viva') === 'documento-estrategico') {
        expect(data.accessLinks ?? []).toHaveLength(0)
        expect((data.sections ?? []).length).toBeGreaterThan(0)
      } else {
        expect(data.sections ?? []).toHaveLength(0)
      }
    }
  })

  it('todo accessLink apunta a una URL absoluta https', () => {
    for (const data of allCases) {
      for (const link of data.accessLinks ?? []) {
        expect(link.href).toMatch(/^https:\/\//)
      }
    }
  })

  it('las cifras verbatim clave no se reinterpretaron', () => {
    // FleetControl — 3 correcciones a la IA, polling 5s
    expect(WORK_TEST_CASES.fleetcontrol.metrics).toContainEqual({ value: '3', label: 'correcciones a la IA declaradas' })
    // BCS — 34 × 6 y 66 verificaciones
    expect(WORK_TEST_CASES.bcs.metrics).toContainEqual({ value: '34 × 6', label: 'roles M3 × esquemas de color' })
    expect(WORK_TEST_CASES.bcs.metrics).toContainEqual({ value: '66', label: 'verificaciones de contraste automáticas' })
    // Codesa — 28% de partida, 5 hipótesis, 17 páginas
    expect(WORK_TEST_CASES.codesa.metrics).toContainEqual({ value: '28%', label: 'finalización de partida (problema a investigar)' })
    // Solidaria — 7 dominios, 212 tests, NPS 41→65
    expect(WORK_TEST_CASES.solidaria.metrics).toContainEqual({ value: '7', label: 'dominios digitales auditados (verificable públicamente)' })
  })
})

describe('FDN — Momentum 2 (sección, no página)', () => {
  it('tiene ancla propia, badge de estimación propia y disclaimer propio', () => {
    expect(fdnMomentum2.anchorId).toBe('momentum-2-propuesta')
    expect(fdnMomentum2.badge.label).toMatch(/Estimación propia/)
    expect(fdnMomentum2.footerDisclaimer).toBe(
      'Propuesta de arquitectura — estimación propia, no un entregable ya construido o aprobado.',
    )
    // disclaimer DISTINTO al del caso de cliente y al de prueba técnica (R-4 / R-8)
    expect(fdnMomentum2.footerDisclaimer).not.toBe('Prueba técnica de selección — no un encargo remunerado.')
  })

  it('enlaza de vuelta al Momentum 1 y trae 4 secciones numeradas', () => {
    expect(fdnMomentum2.crossLink.href).toBe('#momentum-1')
    expect(fdnMomentum2.sections.map((s) => s.num)).toEqual(['01', '02', '03', '04'])
    expect(fdnMomentum2.accion).toHaveLength(1)
  })
})
