/**
 * Caso de cliente — FDN · Financiera de Desarrollo Nacional (ActivaMC, 2023-2026).
 * MOMENTUM 1 (confirmado): auditoría de accesibilidad y rendimiento sobre el sitio real.
 * El Momentum 2 (propuesta de arquitectura, estimación propia) se renderiza como
 * SECCIÓN aparte en la página /casos/fdn — ver src/content/cases/fdn-momentum-2.ts (R-8).
 *
 * Reconciliación (C7): NIVEL = WCAG 2.1 AA (cert 2023, revalidada 2024). NO "AAA"
 * (la AAA es de Universidad de La Salle). La auditoría 2025 detecta la brecha a 2.2.
 *
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 (FDN, 2 momentums) / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §2 / CAREER OS SSOT CAPA 2.1/2.4/2.9/3.2.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const fdnCase: CasePageData = validateCaseData({
  slug: 'fdn',
  title: 'FDN — Auditoría de accesibilidad y rendimiento',
  description:
    'Auditoría WCAG 2.2 y de Core Web Vitals del portal institucional de la Financiera de Desarrollo Nacional (mandato MinTIC), sobre un sitio en Drupal 7 (EOL). 654 incidentes técnicos, 40 horas de consultoría (OC AMC 2025074). Incluye una propuesta propia de migración (Momentum 2).',
  tags: ['GovTech', 'WCAG 2.1 / 2.2', 'Accesibilidad', 'Core Web Vitals', 'Auditoría'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'Entré a auditar accesibilidad. Al mirar el proceso completo, encontré la causa raíz (un sitio estático en fin de vida) y propuse la arquitectura que la resuelve — la diferencia entre cumplir el mandato y resolver el problema que el mandato no mencionaba.',
  situacion:
    'El mandato de MinTIC exige una auditoría WCAG 2.2 completa sobre un portal institucional construido en Drupal 7, ya en fin de vida (EOL).',
  objetivo:
    'No solo documentar incidentes — identificar y proponer la solución a la causa raíz.',
  accion: [
    {
      decision: 'Alcance de la respuesta a los 654 incidentes',
      discarded: 'Remediar los 654 incidentes puntuales sobre Drupal 7',
      chosen: 'Proponer una migración completa (Next.js / Strapi / RAG) además de entregar el gap analysis',
      why: 'Drupal 7 está en EOL — remediar sin migrar repara un sistema que de todas formas hay que reemplazar',
    },
  ],
  resultado:
    'Momentum 1 (confirmado): certificación WCAG 2.1 AA (22 dic 2023) → revalidación WCAG 2.1 AA (16 sep 2024) → auditoría paga de 654 incidentes (sep 2025, 40 h, OC AMC 2025074) que detecta que el sitio certificado ya no cumple con WCAG 2.2. LCP degradado de 25.2s a un objetivo <2.5s, 85 URLs de escritorio y 80 móviles afectadas. Entregables: 36 reportes de Lighthouse, gap analysis priorizado y runbook de despliegue. La propuesta de migración (Momentum 2) se presenta por separado como estimación propia.',
  aprendizaje:
    'Un mandato técnico acotado (auditar) casi siempre esconde un problema más grande (una arquitectura al final de su vida útil). Es el mismo patrón que en el diagnóstico de Solidaria.',

  methodology: [
    { slug: 'wcag-audit', label: 'Auditoría WCAG 2.1 / 2.2' },
    { slug: 'ntc-5854', label: 'NTC 5854 · Resolución 1519' },
    { slug: 'core-web-vitals', label: 'Core Web Vitals' },
  ],

  metrics: [
    { value: '-90%', label: 'objetivo LCP (25.2s → <2.5s)' },
    { value: '654', label: 'incidentes técnicos auditados (2025)' },
    { value: 'AA', label: 'WCAG 2.1 certificado 2023 · reval. 2024' },
    { value: '40 h', label: 'consultoría (OC AMC 2025074)' },
  ],
  timeline: [
    { company: 'FDN', role: 'Certificación WCAG 2.1 AA', period: 'Dic 2023' },
    { company: 'FDN', role: 'Revalidación WCAG 2.1 AA', period: 'Sep 2024' },
    { company: 'FDN', role: 'Auditoría de 654 incidentes + Core Web Vitals', period: 'Sep 2025' },
    { company: 'FDN', role: 'Gap analysis priorizado + runbook de despliegue', period: 'Sep 2025', isLast: true },
  ],
  techStack: [
    { skill: 'WCAG 2.1 / 2.2 · NTC 5854', level: 95, levelLabel: 'Experto' },
    { skill: 'axe DevTools · Lighthouse · NVDA / JAWS', level: 92, levelLabel: 'Experto' },
    { skill: 'Core Web Vitals (LCP / TTFB)', level: 88, levelLabel: 'Avanzado' },
    { skill: 'Gap analysis + runbook', level: 85, levelLabel: 'Avanzado' },
  ],

  nextCase: { slug: 'lasalle', title: 'Universidad de La Salle — WCAG 2.2 AAA' },
})
