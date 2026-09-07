/**
 * Contenido — Prueba técnica Codesa (Diseñador UX Nivel 3 — estrategia de investigación).
 * Variante: documento-estrategico. estado: 'parcial' (decisión de publicación abierta —
 * se muestra el entregable final de 17 páginas, no las ~120 de research crudo).
 * Fuente verbatim: docs/m1/WORKTEST_CASES.md §Caso 4
 * + docs/m2/spec/CASE_PAGE_CONTENT_STRUCTURE.md §Variante B / Codesa.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const codesaCase: CasePageData = validateCaseData({
  slug: 'codesa',
  title: 'Codesa — Estrategia de investigación UX (módulo de pagos)',
  description:
    'Prueba técnica de Diseño UX Nivel 3: una entidad financiera reporta que su módulo de pagos tiene 28% de finalización y no existe investigación previa. El brief pedía estrategia de investigación — no pantallas ni prototipos — con declaración obligatoria de uso de IA como una de 7 competencias evaluadas. Plazo: 7 días calendario.',
  tags: ['UX Research', 'Estrategia de investigación', 'RICE + Inclusión', 'Declaración de IA', 'Fintech'],

  caseType: 'work-test',
  caseFormat: 'documento-estrategico',
  badge: { icon: '🔧', label: 'Prueba técnica' },
  entryRole: 'Diseñador/a UX Nivel 3',

  estado: 'parcial',
  estadoNota:
    'Publicación con decisión abierta. El caso se construye solo sobre las 17 páginas del entregable estratégico final. Las ~120 páginas de research crudo (recolección inicial vía IA, con formato de citas roto y estadísticas duplicadas) se mencionan como paso de trabajo, no como resultado. Sin URL de app: el brief no pedía código ni pantallas.',

  valor:
    'Ante un problema sin investigación previa, no adiviné causas — planteé 5 hipótesis falsables, cada una anclada a un marco de comportamiento real, y declaré con total transparencia dónde y cómo usé IA en el proceso. La disciplina de investigación importa tanto como el hallazgo.',
  situacion:
    'Una entidad financiera reporta 28% de finalización en su módulo de pagos y no hay investigación previa sobre por qué. El brief pedía explícitamente estrategia de investigación con metodologías justificadas, enfoque de priorización y recomendaciones — nada de pantallas ni prototipos. El uso de IA era una de 7 competencias evaluadas, con declaración obligatoria de qué herramienta se usó, en qué parte del proceso y cómo se validó.',
  objetivo:
    'Diseñar una estrategia de investigación defendible para un problema sin datos previos, no adivinar la causa del 28% de finalización.',
  accion: [
    {
      decision: 'Cómo evaluar cada hipótesis',
      discarded: 'Una sola técnica (ej. solo entrevistas)',
      chosen: 'Metodología mixta (funnel + heurístico + entrevistas + usabilidad + CES)',
      why: 'Cada hipótesis requiere un tipo de evidencia distinto — un solo método no cubre las 5',
    },
    {
      decision: 'Cómo priorizar hallazgos',
      discarded: 'RICE estándar',
      chosen: 'RICE + ejes de Confianza e Inclusión',
      why: 'El dominio (pagos, población vulnerable) exige ejes que el RICE original no contempla',
    },
  ],
  resultado:
    'Un documento estratégico de 17 páginas: tabla de actores/supuestos/riesgos, 5 hipótesis fundamentadas en marcos teóricos, selección de metodología mixta, priorización con Opportunity Solution Tree + RICE modificado, perfil de participantes inclusivo, plan de ejecución de 4 fases día a día, recomendaciones diferenciadas por audiencia, esquema de tracking analítico y métricas de éxito estilo OKR.',
  aprendizaje:
    'Un framework estándar (RICE) no siempre alcanza — a veces la disciplina correcta es extenderlo con criterio propio, y declarar esa extensión explícitamente en vez de forzar el problema dentro del framework original.',

  methodology: [
    { slug: 'self-determination-theory', label: 'Self-Determination Theory' },
    { slug: 'calm-technology', label: 'Calm Technology' },
    { slug: 'design-with-intent', label: 'Design with Intent (Lockton)' },
    { slug: 'ost-rice-extendido', label: 'OST + RICE extendido' },
  ],

  sections: [
    {
      num: '01',
      title: 'El problema',
      body: '28% de finalización en el módulo de pagos de una entidad financiera, sin investigación previa sobre la causa.',
    },
    {
      num: '02',
      title: '5 hipótesis + marco teórico',
      body: 'Cinco hipótesis falsables, cada una anclada a un marco de comportamiento real: Self-Determination Theory, Calm Technology y Design with Intent (Dan Lockton).',
    },
    {
      num: '03',
      title: 'Metodología mixta',
      body: 'Un método por tipo de evidencia requerido — ningún método cubre las 5 hipótesis solo.',
      table: {
        headers: ['Método', 'Herramienta', 'Qué evidencia aporta'],
        rows: [
          ['Analítica de funnel', 'PostHog / Amplitude', 'Dónde exactamente cae la finalización'],
          ['Grabación de sesiones', 'Hotjar', 'Fricciones observadas sin moderación'],
          ['Análisis heurístico', 'Evaluación experta', 'Problemas de interfaz sin usuarios'],
          ['Entrevistas contextuales (5)', 'Dovetail', 'Motivaciones y bloqueos percibidos'],
          ['Pruebas de usabilidad moderadas (5)', 'Maze', 'Dónde se traban en una tarea real'],
          ['Encuesta CES', 'CES post-tarea', 'Esfuerzo percibido cuantificado'],
        ],
      },
    },
    {
      num: '04',
      title: 'Participantes representativos',
      body: 'Perfil inclusivo orientado a los contextos más excluidos del producto.',
      chips: ['Android gama baja', 'Conectividad rural', 'Baja visión', 'Baja alfabetización digital'],
    },
    {
      num: '05',
      title: 'Priorización',
      body: 'Opportunity Solution Tree + RICE modificado con ejes propios de Confianza e Inclusión.',
    },
    {
      num: '06',
      title: 'Plan de ejecución en 4 fases',
      body: 'Plan día a día en 4 fases, con recomendaciones diferenciadas por audiencia, esquema de tracking analítico y métricas de éxito estilo OKR.',
    },
  ],
  aiDeclared: {
    items: [
      'Herramienta: «TITAN Research Intelligence Skill v5.1».',
      'Etapas donde se usó: clasificación de datos, Evidence Cards, formulación de hipótesis, estructuración del plan, diseño del tracking plan.',
      'Validación declarada: triangulación con marcos teóricos, revisión iterativa y coherencia interna vía IDs de trazabilidad.',
      'Principio ético del documento: «cero alucinaciones — no se presentó ningún dato como real sin declarar que era una proyección».',
      'Cierre del propio documento: «El TITAN Skill no reemplazó el criterio humano: lo estructuró, lo aceleró y lo mantuvo alineado con la evidencia. Cada decisión que presentamos aquí pasó por el filtro del skill y por la validación del equipo.»',
    ],
    source: {
      label: 'docs/m1/WORKTEST_CASES.md — Caso 4',
      href: 'https://github.com/MauroPX/excalibur/blob/v2/docs/m1/WORKTEST_CASES.md',
    },
  },

  metrics: [
    { value: '5', label: 'hipótesis falsables con marco teórico' },
    { value: '6', label: 'métodos en la estrategia mixta' },
    { value: '17 pág.', label: 'entregable estratégico final' },
    { value: '28%', label: 'finalización de partida (problema a investigar)' },
  ],
  timeline: [
    { company: 'Codesa', role: 'Encuadre del problema + 5 hipótesis + marco teórico', period: '7 días' },
    { company: 'Codesa', role: 'Metodología mixta + priorización + plan de 4 fases', period: '7 días', isLast: true },
  ],
  techStack: [
    { skill: 'Research mixto (funnel · heurístico · entrevistas · usabilidad · CES)', level: 86, levelLabel: 'Aplicado' },
    { skill: 'Priorización OST + RICE extendido', level: 84, levelLabel: 'Aplicado' },
    { skill: 'Marcos de comportamiento (SDT · Calm Tech · DwI)', level: 82, levelLabel: 'Aplicado' },
  ],

  footerDisclaimer: 'Prueba técnica de selección — no un encargo remunerado.',
  nextCase: { slug: 'solidaria', title: 'Solidaria Portal — Diagnóstico autodirigido', href: '/pruebas-tecnicas/solidaria' },
})
