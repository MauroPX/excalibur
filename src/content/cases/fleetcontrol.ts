/**
 * Contenido — Prueba técnica FleetControl (Design Engineer UX/UI).
 * Variante: evidencia-viva. Fuente verbatim: docs/m1/WORKTEST_CASES.md §Caso 1
 * + docs/m2/spec/CASE_PAGE_CONTENT_STRUCTURE.md §Variante A / FleetControl.
 * Cero reinterpretación de cifras.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const fleetControlCase: CasePageData = validateCaseData({
  slug: 'fleetcontrol',
  title: 'FleetControl — Monitor de flota en tiempo real',
  description:
    'Prueba técnica de Design Engineer: SPA conectada a la API real de Traccar (tracking GPS open-source) para monitorear un vehículo en tiempo real, con estados de carga, error y datos en vivo — sin backend propio y sin WebSocket disponible en el hosting.',
  tags: ['Design Engineer (UX/UI)', 'API de Traccar', 'Next.js', 'Zustand', 'WCAG 2.1 AA'],

  caseType: 'work-test',
  caseFormat: 'evidencia-viva',
  badge: { icon: '🔧', label: 'Prueba técnica' },
  entryRole: 'Design Engineer (UX/UI)',

  valor:
    'No acepté las restricciones de la IA como definitivas: cuando generó código que rompía semántica de accesibilidad o UX de movimiento, lo detecté y corregí con criterio propio, documentando cada corrección — la diferencia entre usar IA y saber cuándo no seguirla.',
  situacion:
    'Construir una SPA conectada a la API real de Traccar (plataforma de tracking GPS open-source, instancia demo4) para monitorear la ubicación de un vehículo en tiempo real, incluyendo estados de carga, error y datos en vivo. Restricción del hosting: Netlify Functions no soporta WebSockets nativos.',
  objetivo:
    'Demostrar decisiones de arquitectura frontend defendibles bajo restricciones reales (sin backend propio, sin WebSocket disponible) — no solo entregar una UI funcional.',
  accion: [
    {
      decision: 'Marcado de la tarjeta de estado',
      discarded: '<div> anidados (lo que generó la IA)',
      chosen: '<dl><dt><dd>',
      why: 'Semánticamente correcto para pares etiqueta-valor — un lector de pantalla anuncia "Velocidad: 84.5 km/h" como unidad coherente',
    },
    {
      decision: 'Actualización de posición en tiempo real',
      discarded: 'WebSocket nativo',
      chosen: 'Polling 5s + interpolación requestAnimationFrame',
      why: 'Netlify Functions no soporta WebSockets; la interpolación logra el mismo efecto visual (movimiento suave) sin la complejidad de un servidor adicional',
    },
    {
      decision: 'Manejo de estado global',
      discarded: 'React Context',
      chosen: 'Zustand',
      why: 'El polling actualiza 12 veces por minuto — con Context cada actualización re-renderiza todo el árbol; con Zustand solo los componentes suscritos al slice exacto',
    },
    {
      decision: 'Manejo de fallo de red',
      discarded: 'Error genérico',
      chosen: '"Última posición conocida" con opacidad reducida (0.6 + escala de grises) + role="alert" + foco automático en "Reintentar"',
      why: 'Preserva información útil en vez de solo mostrar que algo falló',
    },
  ],
  resultado:
    'Demo desplegada y funcional — app conectada a datos reales de Traccar, no un mockup estático. Accesibilidad WCAG 2.1 AA verificada con axe DevTools: navegación 100% por teclado, prefers-reduced-motion en todas las animaciones, contraste mínimo 4.5:1 en ambos modos, aria-live="polite" en la tarjeta de estado y skip link al contenido principal.',
  aprendizaje:
    'Corregir la IA con criterio propio no es un extra opcional — es la parte del trabajo que un candidato promedio se salta. Desde este caso, documentas explícitamente qué generó IA vs. qué corregiste tú en cada proyecto siguiente, no solo en pruebas.',

  metrics: [
    { value: '4', label: 'decisiones de arquitectura documentadas' },
    { value: '3', label: 'correcciones a la IA declaradas' },
    { value: 'AA', label: 'WCAG 2.1 — verificado con axe DevTools' },
    { value: '5 s', label: 'polling + interpolación rAF (sin WebSocket)' },
  ],
  timeline: [
    { company: 'FleetControl', role: 'Análisis de restricciones y decisiones de arquitectura', period: 'Prueba técnica' },
    { company: 'FleetControl', role: 'Implementación sobre la API de Traccar + corrección de la IA', period: 'Prueba técnica', isLast: true },
  ],
  techStack: [
    { skill: 'Next.js', level: 85, levelLabel: 'Aplicado' },
    { skill: 'Zustand', level: 82, levelLabel: 'Aplicado' },
    { skill: 'API de Traccar', level: 80, levelLabel: 'Aplicado' },
    { skill: 'WCAG 2.1 AA (axe DevTools)', level: 88, levelLabel: 'Aplicado' },
  ],

  accessLinks: [
    { kind: 'produccion', label: 'Demo en producción', href: 'https://simon-v2-monitor-rmxm.vercel.app/?demo=true' },
    { kind: 'preview', label: 'Preview (Capas 2+3)', href: 'https://simon-v2-monitor-rmxm-git-feat-capa-2-lemaogo-9238s-projects.vercel.app' },
    { kind: 'repo', label: 'Repositorio', href: 'https://github.com/MauroPX/simon-v2-monitor' },
    { kind: 'doc', label: 'Respuesta técnica (MD)', href: 'https://github.com/MauroPX/simon-v2-monitor/blob/feat/capa-2/docs/TECHNICAL_CHALLENGE_RESPONSE.md' },
    { kind: 'video', label: 'Recorrido en Loom', href: 'https://www.loom.com/share/dc3ef2ab5fb84e9b8c52709b26b8f915' },
  ],
  aiDeclared: {
    items: [
      'La IA (Claude Sonnet) generó el hook de autenticación base, el layout inicial y la función de interpolación de coordenadas.',
      'Corrección 1 — la IA generó la tarjeta de estado con <div> anidados → corregido a <dl><dt><dd> por semántica WCAG 1.3.1.',
      'Corrección 2 — la IA movía el marcador con setLatLng() directo → reemplazado por interpolación requestAnimationFrame para movimiento suave.',
      'Corrección 3 — la IA no implementó prefers-reduced-motion → añadido manualmente en cada animación.',
    ],
    source: {
      label: 'TECHNICAL_CHALLENGE_RESPONSE.md',
      href: 'https://github.com/MauroPX/simon-v2-monitor/blob/feat/capa-2/docs/TECHNICAL_CHALLENGE_RESPONSE.md',
    },
  },

  footerDisclaimer: 'Prueba técnica de selección — no un encargo remunerado.',
  nextCase: { slug: 'bcs', title: 'BCS — Plataforma de Metas Financieras', href: '/pruebas-tecnicas/bcs' },
})
