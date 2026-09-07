/**
 * Índice de metodología — destino de los chips `methodology` de cada caso
 * (enlazan a /metodologia#<slug>). Cada entrada tiene un `slug` estable que
 * debe coincidir con el usado en src/content/cases/**.
 *
 * Base de conocimiento previa: la investigación autodirigida sobre Guidewire
 * InsuranceSuite (no es un caso — ver docs/m1/WORKTEST_CASES.md §Insumo base).
 */

export interface MethodologyEntry {
  slug: string
  label: string
  /** grupo temático para agrupar en la página */
  group: 'Narrativa y decisión' | 'Sistemas de diseño' | 'Investigación y comportamiento' | 'Arquitectura y datos' | 'Accesibilidad' | 'Producto y crecimiento'
  body: string
}

export const METHODOLOGY_ENTRIES: MethodologyEntry[] = [
  // ── Narrativa y decisión ──────────────────────────────────────────────────
  {
    slug: 'star-l',
    label: 'STAR-L (Situación · Tarea · Acción · Resultado · Aprendizaje)',
    group: 'Narrativa y decisión',
    body: 'Backbone de cada caso. La "L" (Learned) cierra con el aprendizaje aplicado después — la pieza que STAR clásico se salta. La "Acción" se muestra como decisión (opciones descartadas → elegida → por qué), no como lista de tareas.',
  },
  {
    slug: 'decisiones-como-decisiones',
    label: 'Decisión → opciones descartadas → por qué',
    group: 'Narrativa y decisión',
    body: 'Cada decisión técnica se documenta con la(s) alternativa(s) que se descartó y el motivo. Sin las alternativas, una decisión no se puede evaluar como tal.',
  },
  {
    slug: 'content-framing',
    label: 'Content Framing (Situación + Impacto + Acción)',
    group: 'Narrativa y decisión',
    body: 'Estructura de diseño de contenido usada en BBVA para mensajes transaccionales: primero la situación, luego el impacto para la persona, luego la acción o solución.',
  },
  {
    slug: 'walkthrough-inmersivo',
    label: 'Walkthrough Inmersivo',
    group: 'Narrativa y decisión',
    body: 'Evolución del tutorial pasivo ("Coach Mark" a pantalla dividida) a un recorrido a pantalla completa donde el usuario avanza solo si interactúa — "aprender haciendo", con baja carga cognitiva (1 acción por pantalla).',
  },
  {
    slug: 'historias-epicas',
    label: 'Historias de Usuario Épicas (HUE)',
    group: 'Narrativa y decisión',
    body: 'Estructuración de requerimientos técnicos como épicas antes de bajar a features y criterios de aceptación — usado para liderar integraciones B2B end-to-end (SuRed).',
  },

  // ── Sistemas de diseño ────────────────────────────────────────────────────
  {
    slug: 'atomic-design',
    label: 'Atomic Design',
    group: 'Sistemas de diseño',
    body: 'Átomos → moléculas → organismos → plantillas → páginas, con atributos data-atomic para trazabilidad. Base de los Design Systems de Correos Chile (Merkén), La Salle, Ruedaz y de este propio sitio.',
  },
  {
    slug: 'design-tokens-m3',
    label: 'Design Tokens (Material Design 3)',
    group: 'Sistemas de diseño',
    body: 'Roles de color M3 generados desde una fuente única y auditados en CI — cero hex hardcodeado. Un solo lugar donde cambia el color de todo el sistema.',
  },
  {
    slug: 'design-tokens-hct',
    label: 'Tokens de color en espacio HCT',
    group: 'Sistemas de diseño',
    body: 'Generación algorítmica de la paleta desde un color de marca en el espacio HCT de Material Design 3, con contraste AA verificado en light y dark (Solidaria, desde #004173).',
  },
  {
    slug: 'material-design-3',
    label: 'Material Design 3 (HCT)',
    group: 'Sistemas de diseño',
    body: 'Sistema de 34+ roles de color por esquema, verificado campo a campo contra el export oficial de Material Theme Builder (BCS: 66 verificaciones automáticas en 6 esquemas).',
  },
  {
    slug: 'contrast-audit',
    label: 'Auditoría de contraste automatizada',
    group: 'Sistemas de diseño',
    body: 'Un script que corre todas las verificaciones de contraste (pares oficiales × esquemas) en CI. Un error detectado a mano no escala a decenas de roles × esquemas.',
  },
  {
    slug: 'sistema-gemas',
    label: 'Sistema GEMAS (5 fases de madurez)',
    group: 'Sistemas de diseño',
    body: 'Marca → UX writing y cognición → UI/motion → métricas de producción → arquitectura de reglas de negocio. Gobierna la producción de tutoriales guiados para cualquier producto/segmento futuro (BBVA).',
  },
  {
    slug: 'bfl-blueprint-forge-lock',
    label: 'Ciclo BFL (Blueprint → Forge → Lock)',
    group: 'Sistemas de diseño',
    body: 'Cada componente pasa por un blueprint (contrato + gates), un forge (código + tests + stories) y un lock (certificado de versión). Bloquea merges sin CI verde.',
  },

  // ── Investigación y comportamiento ────────────────────────────────────────
  {
    slug: 'self-determination-theory',
    label: 'Self-Determination Theory',
    group: 'Investigación y comportamiento',
    body: 'Marco de motivación (autonomía, competencia, relación) usado para anclar hipótesis de investigación y para redactar mensajes de error que no culpan al usuario (Codesa).',
  },
  {
    slug: 'calm-technology',
    label: 'Calm Technology',
    group: 'Investigación y comportamiento',
    body: 'Principios para que la tecnología reclame la mínima atención necesaria — aplicado al diseño de un flujo de pago de baja fricción.',
  },
  {
    slug: 'design-with-intent',
    label: 'Design with Intent (Dan Lockton)',
    group: 'Investigación y comportamiento',
    body: 'Patrones de diseño para influir en el comportamiento de forma explícita y ética — ej. bloqueo de UI post-clic para evitar el doble cobro (Codesa).',
  },
  {
    slug: 'ost-rice-extendido',
    label: 'Opportunity Solution Tree + RICE extendido',
    group: 'Investigación y comportamiento',
    body: 'Priorización con OST + RICE, extendido con ejes propios de Confianza e Inclusión cuando el dominio (pagos, población vulnerable) lo exige. La extensión se declara, no se disimula.',
  },
  {
    slug: 'jtbd',
    label: 'Jobs to be Done',
    group: 'Investigación y comportamiento',
    body: 'Modelar lo que la persona intenta lograr, no la solución que pide — usado para diferenciar Customer Journeys por segmento (Ruedaz: B2C recurrente vs. B2B corporativo).',
  },

  // ── Arquitectura y datos ─────────────────────────────────────────────────
  {
    slug: 'ddd',
    label: 'Domain-Driven Design',
    group: 'Arquitectura y datos',
    body: 'Modelar el dominio (bounded contexts, lenguaje ubicuo) antes de tocar la UI. Base de la migración de FID Seguros y del diagnóstico de Solidaria. La investigación de Guidewire InsuranceSuite fue el insumo previo para dominar los patrones del sector asegurador.',
  },
  {
    slug: 'ddd-bounded-contexts',
    label: 'DDD — Bounded Contexts (seguros)',
    group: 'Arquitectura y datos',
    body: 'Aplicación específica de DDD al dominio asegurador: APD como contexto upstream (fuente de verdad de coberturas y reglas), PolicyCenter/ClaimCenter/BillingCenter como consumidores downstream, sincronizados pero desacoplados. Insumo: investigación autodirigida sobre Guidewire InsuranceSuite.',
  },
  {
    slug: 'arquitectura-desacoplada',
    label: 'Arquitectura desacoplada (core → API REST → frontend)',
    group: 'Arquitectura y datos',
    body: 'Separar el core de negocio, la API y el frontend para que conectar el backend real sea un cambio de variable de entorno, no una reescritura (Solidaria).',
  },
  {
    slug: 'bpmn',
    label: 'BPMN 2.0',
    group: 'Arquitectura y datos',
    body: 'Modelado de procesos de negocio con actores explícitos antes de diseñar pantallas — ej. cotizadores y suscripción automatizada con 4 actores (FID Seguros).',
  },
  {
    slug: 'design-sprint',
    label: 'Design Sprint',
    group: 'Arquitectura y datos',
    body: 'Dinámica intensiva de 3-5 días para prototipar y alinear variables de diseño con el modelo de dominio (FID Seguros).',
  },
  {
    slug: 'modelo-datos-er',
    label: 'Modelo de datos ER',
    group: 'Arquitectura y datos',
    body: 'Una especificación de UX no está terminada sin su modelo de datos: diagrama entidad-relación revisado junto al equipo técnico (Siclo/IDPay: 10 tablas).',
  },
  {
    slug: 'openapi',
    label: 'Contratos OpenAPI',
    group: 'Arquitectura y datos',
    body: 'Definir los contratos de API (OpenAPI/Swagger) como parte del entregable de diseño, no después — elimina la fricción entre diseño y backend.',
  },
  {
    slug: 'reglas-negocio',
    label: 'Motor de reglas de negocio',
    group: 'Arquitectura y datos',
    body: 'Reemplazar matrices manuales en Excel por un motor con reglas parametrizadas y validaciones (Siclo/IDPay: Ley 1527, cálculo de capacidad de pago, tope de colocación).',
  },
  {
    slug: 'seguridad-transaccional',
    label: 'Seguridad transaccional (JWT / SHA-256)',
    group: 'Arquitectura y datos',
    body: 'En canales de dinero regulado, la seguridad es el producto: JWT con expiración corta, credenciales firmadas SHA-256, validación de identidad contra listas de control (SuRed).',
  },
  {
    slug: 'conciliacion-sftp',
    label: 'Conciliación SFTP de doble chequeo',
    group: 'Arquitectura y datos',
    body: 'Proceso automático diario que cruza los consolidados transaccionales de ambas partes y tipifica las discrepancias (códigos 10/20/30) sin intervención manual (SuRed).',
  },

  // ── Accesibilidad ────────────────────────────────────────────────────────
  {
    slug: 'wcag-audit',
    label: 'Auditoría WCAG 2.1 / 2.2',
    group: 'Accesibilidad',
    body: 'Auditoría manual punto a punto con lectores de pantalla (NVDA/JAWS) y navegación por teclado, más herramientas automáticas (axe DevTools, Lighthouse), con gap analysis priorizado (FDN: 654 incidentes).',
  },
  {
    slug: 'wcag-aaa',
    label: 'WCAG 2.2 AAA',
    group: 'Accesibilidad',
    body: 'Cuando el riesgo es legal, "cumplir el mínimo" (AA) sigue siendo riesgo. La Salle: AAA evaluando 18 categorías con 4 roles por criterio.',
  },
  {
    slug: 'ntc-5854',
    label: 'NTC 5854 · Resolución 1519 de MinTIC',
    group: 'Accesibilidad',
    body: 'Marco normativo colombiano de accesibilidad para entidades públicas — se audita junto con WCAG, no como un checklist aparte.',
  },
  {
    slug: 'core-web-vitals',
    label: 'Core Web Vitals como criterio de accesibilidad',
    group: 'Accesibilidad',
    body: 'LCP, CLS e INP se tratan como parte de la experiencia accesible, no solo como métricas de rendimiento (FDN: LCP de 25.2s a un objetivo <2.5s).',
  },

  // ── Producto y crecimiento ───────────────────────────────────────────────
  {
    slug: 'ucd',
    label: 'Diseño Centrado en el Usuario (UCD)',
    group: 'Producto y crecimiento',
    body: 'Estudiar el dato real y los escenarios (happy path, alternativos, errores, edge cases) antes de abrir Figma — diagnosticar antes de diseñar evita el retrabajo (Correos Chile).',
  },
  {
    slug: 'plg',
    label: 'Product-Led Growth',
    group: 'Producto y crecimiento',
    body: 'El producto como principal motor de adquisición y retención — con KPIs de conversión y análisis de ROI en UX (Ruedaz: +90% de uso recurrente).',
  },
]

/** Insumo base — no es un caso. Investigación de dominio sobre Guidewire InsuranceSuite. */
export const GUIDEWIRE_INSUMO = {
  title: 'Insumo base — Investigación de dominio: Guidewire InsuranceSuite',
  tag: '📚 Investigación autodirigida (construcción de conocimiento de sector)',
  disclaimer:
    'No es una prueba encargada, ni un cliente, ni una implementación entregada. Es la base de conocimiento de dominio construida antes de entrar a entrevistas y diagnósticos reales del sector asegurador (Solidaria, FID Seguros).',
  points: [
    'Marco metodológico integrado de 4 capas conectadas: Domain-Driven Design (estratégica), Double Diamond (procesual), Design Ops (operativa) y Service Blueprint (visual).',
    'Arquitectura de dominio (DDD) de Guidewire: APD (Advanced Product Designer) como bounded context upstream — fuente única de coberturas, tarifas y reglas — y PolicyCenter / ClaimCenter / BillingCenter como consumidores downstream, sincronizados pero desacoplados.',
    'Ciclo de vida completo de una póliza en 7 fases con sus APIs: cotización, suscripción/aprobación, emisión/binding, facturación/cobro, endosos, siniestros (FNOL a cierre) y renovación/retención — con los roles que aprueban cada paso.',
    'Service Blueprints y Empathy Maps: mapeo frontstage/backstage/soporte del flujo de emisión y estados emocionales de cliente y empleado, con la intervención de diseño para cada estado.',
    'Diagnóstico técnico propio con riesgos y mitigaciones: concurrencia en ediciones simultáneas (campo _revision, error 409), discrepancia prima cotizada vs. facturada en la sincronización PolicyCenter→BillingCenter, y uso de Kafka / Composite API para evitar acoplamiento fuerte.',
  ],
}
