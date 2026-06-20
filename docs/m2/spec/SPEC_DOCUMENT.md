# SPEC_DOCUMENT.md — EXCALIBUR v2.0

## INFRAESTRUCTURA

### EX-v2-INFRA-001 — Setup base
**Estado:** IN_SPEC | **Prioridad:** P0

**Descripción:**
Setup inicial del proyecto con Next.js 15, React 19 y MUI v6.

**Criterios de Aceptación:**
- CA-001: Estructura de carpetas src/ establecida.
- CA-002: Dependencias actualizadas en package.json.
- CA-003: tsconfig.json configurado con strict mode.
- CA-004: Build de producción exitoso.

---

## ÁTOMOS

### EX-v2-ATOM-001 — Button
**Estado:** IN_SPEC | **Prioridad:** P0

**Descripción:**
Átomo de botón universal para el sistema EXCALIBUR. Soporta múltiples variantes y estados de carga.

**Criterios de Aceptación:**
- CA-001: Implementa variantes filled, outlined, text y cta.
- CA-002: Soporta estado 'loading' con spinner integrado.
- CA-003: Accesibilidad WCAG 2.2 AA (axe-core 0 violations).
- CA-004: Usa exclusivamente tokens de diseño M3.
- CA-005: BEM naming strict según DESIGN_SPEC.

### EX-v2-ATOM-002 — Tag
**Estado:** IN_SPEC | **Prioridad:** P1

**Descripción:**
Componente de etiqueta/badge para categorizar contenido (tecnologías, roles, estados).

**Criterios de Aceptación:**
- CA-001: Soporta múltiples colores (primary, secondary, error, success, info).
- CA-002: Soporta tamaños small, medium, large.
- CA-003: Accesibilidad WCAG 2.2 AA (contraste de texto).
- CA-004: Opción de incluir un icono pequeño a la izquierda.

### EX-v2-ATOM-003 — Badge
**Estado:** IN_SPEC | **Prioridad:** P1

**Descripción:**
Componente para mostrar indicadores numéricos, estados de alerta o puntos de notificación.

**Criterios de Aceptación:**
- CA-001: Soporta variantes 'dot' (punto) y 'standard' (con contenido).
- CA-002: Posicionamiento configurable (top-right por defecto).
- CA-003: Colores semánticos M3 (error, warning, success, info).
- CA-004: Accesibilidad: contraste adecuado y anuncios para lectores de pantalla.

### EX-v2-ATOM-004 — Icon
**Estado:** IN_SPEC | **Prioridad:** P1

**Descripción:**
Componente envoltorio para iconos del sistema, asegurando consistencia en tamaño y color.

**Criterios de Aceptación:**
- CA-001: Soporta tamaños predefinidos (xs, sm, md, lg, xl).
- CA-002: Colores vinculados a tokens M3.
- CA-003: Accesibilidad: etiquetas aria-label obligatorias para iconos funcionales.

### EX-v2-ATOM-005 — Metric
**Estado:** IN_SPEC | **Prioridad:** P1

**Descripción:**
Visualizador de métricas clave (números grandes con etiquetas).

**Criterios de Aceptación:**
- CA-001: Muestra valor numérico destacado.
- CA-002: Muestra etiqueta descriptiva.
- CA-003: Soporta colores de tendencia (positivo, negativo, neutro).

---

## MOLÉCULAS

### EX-v2-MOL-001 — NavTab
**Estado:** IN_SPEC | **Prioridad:** P0

**Descripción:**
Componente de navegación especializado que combina icono y etiqueta, optimizado para la selección de categorías en el portafolio.

**Criterios de Aceptación:**
- CA-001: Usa el átomo Icon (EX-v2-ATOM-004) internamente.
- CA-002: Soporta estados 'active' e 'inactive' con tokens M3.
- CA-003: Área de interacción accesible (Touch Target >= 44px).
- CA-004: Implementa subtexto opcional para descripción de síntomas/roles.

### EX-v2-MOL-002 — ProjectCard
**Estado:** IN_SPEC | **Prioridad:** P0

**Descripción:**
Tarjeta de previsualización de proyectos que consolida metadatos, tags y métricas de impacto.

**Criterios de Aceptación:**
- CA-001: Muestra título, descripción corta y tags tecnológicos.
- CA-002: Incluye una métrica de impacto usando el átomo Metric (EX-v2-ATOM-005).
- CA-003: Efecto hover con elevación M3 y motor "Midnight Glass".
- CA-004: Accesibilidad: Enlace único claro para lectores de pantalla.

### EX-v2-MOL-003 — SkillBar
**Estado:** IN_SPEC | **Prioridad:** P1

**Descripción:**
Visualizador de competencia técnica con barra de progreso y etiquetas de nivel.

**Criterios de Aceptación:**
- CA-001: Muestra nombre de la habilidad e icono.
- CA-002: Barra de progreso animada con tokens de color primario.
- CA-003: Etiqueta de nivel (Senior, Expert, Lead).

### EX-v2-MOL-004 — TimelineStep
**Estado:** IN_SPEC | **Prioridad:** P1

**Descripción:**
Elemento de la cronología profesional que conecta hitos con evidencia PAR.

**Criterios de Aceptación:**
- CA-001: Indicador visual de línea de tiempo (punto + conector).
- CA-002: Muestra periodo, cargo y empresa.
- CA-003: Soporta expansión para mostrar detalles PAR.

### EX-v2-MOL-005 — MetricRow
**Estado:** IN_SPEC | **Prioridad:** P1

**Descripción:**
Fila horizontal optimizada para mostrar múltiples métricas clave en paralelo.

**Criterios de Aceptación:**
- CA-001: Distribución responsiva de átomos Metric.
- CA-002: Separadores visuales sutiles según DESIGN_SPEC.
- CA-003: Alineación consistente de etiquetas y valores.

### EX-v2-MOL-006 — AudienceCard
**Estado:** IN_SPEC | **Prioridad:** P0

**Descripción:**
Card de selección de audiencia para NavSystem (Tab A = síntomas, Tab B = roles). El usuario hace clic en la card que describe su situación o perfil y es llevado al caso de estudio relevante. Es el núcleo del sistema de navegación por intención.

**Dependencias atómicas:** EX-v2-ATOM-001 (Button), EX-v2-ATOM-002 (Tag), EX-v2-ATOM-004 (Icon)

**Criterios de Aceptación:**
- CA-001: Variante `symptom` muestra título de síntoma + descripción corta + ícono representativo.
- CA-002: Variante `role` muestra título de rol + descripción corta + ícono de rol.
- CA-003: CTA "Ver caso" usa Button atom (variante text o outlined).
- CA-004: Tag atom muestra etiqueta de audiencia (cliente / reclutador / comunidad).
- CA-005: Efecto hover con elevación M3 surface-container-high + transición 200ms.
- CA-006: Accesibilidad WCAG 2.2 AA: contraste, focus visible, role=article + aria-label.
- CA-007: Solo tokens M3, 0 hex hardcoded.
- CA-008: `data-atomic="molecule" data-component="AudienceCard"` en el root.
- CA-009: Clickable completo (no solo el botón) con teclado.
- CA-010: ES/EN con next-intl (useTranslations).

### EX-v2-MOL-007 — RoadmapSplitButton
**Estado:** IN_SPEC | **Prioridad:** P1

**Descripción:**
Botón split (acción primaria + dropdown) para seleccionar vistas del roadmap o fases del proyecto en NavSystem. Permite al usuario cambiar el contexto de visualización sin abandonar la sección.

**Dependencias atómicas:** EX-v2-ATOM-001 (Button), EX-v2-ATOM-004 (Icon)

**Criterios de Aceptación:**
- CA-001: Acción primaria (label configurable) + flecha dropdown separados visualmente.
- CA-002: Dropdown muestra lista de opciones; cierra al seleccionar o click fuera.
- CA-003: Opción seleccionada se refleja en el label del botón primario.
- CA-004: Soporte de teclado: Enter abre dropdown, ArrowUp/Down navega, Escape cierra.
- CA-005: Accesibilidad: aria-expanded, aria-haspopup, aria-controls correctos.
- CA-006: Solo tokens M3, 0 hex hardcoded.
- CA-007: `data-atomic="molecule" data-component="RoadmapSplitButton"` en el root.
- CA-008: ES/EN con next-intl.

---

## ORGANISMOS

### EX-v2-ORG-002 — NavSystem
**Estado:** IN_SPEC | **Prioridad:** P0

**Descripción:**
Sistema de navegación de 4 tabs que organiza el portafolio por intención de audiencia. Es el segundo elemento visible después del Hero. Tab A = por síntoma, Tab B = por rol, Tab C = TitanRAGAgent (IA), Tab D = explorar (radar de stack). Client Component interactivo.

**Laws of UX:** Ley de Miller (7±2 ítems por tab) + Ley de Proximidad

**Dependencias:** EX-v2-MOL-001 (NavTab), EX-v2-MOL-006 (AudienceCard), EX-v2-RAG-001 (TitanRAGAgent)

**Criterios de Aceptación:**
- CA-001: 4 NavTabs accesibles con iconos + etiquetas (A/B/C/D).
- CA-002: Tab A muestra grid de AudienceCards tipo `symptom` (mín. 4 cards).
- CA-003: Tab B muestra grid de AudienceCards tipo `role` (mín. 4 cards).
- CA-004: Tab C embebe TitanRAGAgent completo (atom EX-v2-RAG-001).
- CA-005: Tab D muestra vista explorar (lista de proyectos destacados o radar placeholder).
- CA-006: Cambio de tab sin recarga de página (React state o URL hash).
- CA-007: Accesibilidad: role=tablist, role=tab, aria-selected, aria-controls.
- CA-008: Responsivo: tabs en fila horizontal (desktop) / scroll horizontal (mobile).
- CA-009: `data-atomic="organism" data-component="NavSystem"` en root.
- CA-010: ES/EN con next-intl.
- CA-011: 0 hex hardcoded, solo tokens M3.
- CA-012: Animación de transición entre tabs (fade 150ms).

### EX-v2-ORG-003 — CasesSection
**Estado:** IN_SPEC | **Prioridad:** P0

**Descripción:**
Sección de los 20 casos de estudio del portafolio. Grid filtrable por etiquetas de síntoma, rol y audiencia. Carga datos desde Strapi (ISR 1h) con fallback a `evidence-dna.json`. Es la sección de mayor profundidad del portafolio.

**Laws of UX:** Ley de Posición Serial (posición media) + Ley de Zeigarnik

**Dependencias:** EX-v2-MOL-002 (ProjectCard), EX-v2-ATOM-006 (Chip filtros), EX-v2-ATOM-001 (Button)

**Criterios de Aceptación:**
- CA-001: Grid responsivo: 1 col (320px) / 2 col (768px) / 3 col (1440px).
- CA-002: Chips de filtro por `symptom_tags` y `role_tags` (Chip atom).
- CA-003: Filtros actualizan la lista sin reload (React state).
- CA-004: Muestra máximo 20 ProjectCards; si hay más, botón "Ver todos".
- CA-005: Estado vacío: mensaje claro cuando no hay proyectos para el filtro.
- CA-006: Carga ISR desde `/api/projects` con fallback a `evidence-dna.json`.
- CA-007: Accesibilidad: aria-live para actualización de lista al filtrar.
- CA-008: `data-atomic="organism" data-component="CasesSection"` en root.
- CA-009: ES/EN con next-intl.
- CA-010: 0 hex hardcoded.

### EX-v2-ORG-004 — TitanSection
**Estado:** IN_SPEC | **Prioridad:** P1

**Descripción:**
Showcase de los módulos de TITAN v7.0. Muestra los 6 hubs (M0→M5) con título, descripción y recuento de comandos. Diferenciador técnico del portafolio que demuestra el sistema de trabajo del IC.

**Laws of UX:** Ley de Jakob (familiaridad con cards)

**Dependencias:** EX-v2-ATOM-003 (Badge versión), EX-v2-ATOM-006 (Chip momentum), EX-v2-ATOM-004 (Icon), EX-v2-MOL-005 (MetricRow)

**Criterios de Aceptación:**
- CA-001: Grid de cards de módulos TITAN (una por hub M0..M5).
- CA-002: Cada card muestra: hub_name, hub_title, description, commands_count, momentum Badge.
- CA-003: Badge atom muestra versión "v7.0" destacada.
- CA-004: Chip atom muestra momentum (M0/M1/.../M5) con color semántico.
- CA-005: MetricRow con métricas globales de TITAN (total comandos, módulos activos).
- CA-006: Carga desde `/api/titan-modules` con fallback estático.
- CA-007: `data-atomic="organism" data-component="TitanSection"` en root.
- CA-008: ES/EN con next-intl.
- CA-009: 0 hex hardcoded, solo tokens M3.

### EX-v2-ORG-005 — StackSection
**Estado:** IN_SPEC | **Prioridad:** P1

**Descripción:**
Visualización de capacidades técnicas y de producto. Radar chart de 4 dimensiones (pensamiento, diseño, operaciones, técnico) + lista de skills por capa. Demuestra la amplitud end-to-end del IC.

**Laws of UX:** Ley de Prägnanz (forma simple y clara)

**Dependencias:** EX-v2-MOL-003 (SkillBar), EX-v2-ATOM-004 (Icon), EX-v2-ATOM-006 (Chip)

**Criterios de Aceptación:**
- CA-001: Radar chart con 4 ejes: Pensamiento / Diseño / Operaciones / Técnico.
- CA-002: Radar usa Recharts (ya en dependencias) con tokens M3 para colores.
- CA-003: Lista de SkillBars agrupadas por categoría debajo del radar.
- CA-004: Chips de categoría para filtrar los SkillBars mostrados.
- CA-005: Carga desde `/api/skills` con fallback a datos estáticos.
- CA-006: Responsivo: radar 320px (simplificado) / 768px+ (completo).
- CA-007: `data-atomic="organism" data-component="StackSection"` en root.
- CA-008: ES/EN con next-intl.
- CA-009: 0 hex hardcoded.

### EX-v2-ORG-006 — ContactSection
**Estado:** IN_SPEC | **Prioridad:** P1

**Descripción:**
Última sección del portafolio. 1 CTA principal de contacto + métodos alternativos (email, calendario). Posición serial: lo último = segundo más recordado. Conversión directa a reunión o mensaje.

**Laws of UX:** Ley de Posición Serial (último elemento = muy recordado)

**Dependencias:** EX-v2-ATOM-001 (Button), EX-v2-ATOM-004 (Icon)

**Criterios de Aceptación:**
- CA-001: 1 CTA principal "Agendar reunión" (Button variant=cta) + link a Calendly/Cal.com.
- CA-002: Email como alternativa (copy al portapapeles con feedback visual).
- CA-003: Mensaje breve de propuesta de valor (no un formulario largo).
- CA-004: Accesibilidad: focus en CTA al llegar a la sección (Intersection Observer opcional).
- CA-005: `data-atomic="organism" data-component="ContactSection"` en root.
- CA-006: ES/EN con next-intl.
- CA-007: 0 hex hardcoded, solo tokens M3.

### EX-v2-A11Y-001 — InquisitorHUD
**Estado:** IN_SPEC | **Prioridad:** P1

**Descripción:**
Overlay de auditoría de accesibilidad en tiempo real. Se activa con atajo de teclado (Alt+A). Muestra el árbol de `data-atomic` + `data-component` del DOM, resalta elementos sin roles ARIA, y marca violaciones axe-core en producción-like. Migración fresh desde el componente legacy eliminado.

**Dependencias:** EX-v2-ATOM-001 (Button toggle), EX-v2-ATOM-003 (Badge contador)

**Criterios de Aceptación:**
- CA-001: Toggle con atajo Alt+A + botón flotante en esquina inferior derecha.
- CA-002: Overlay lista todos los `data-atomic` presentes en el DOM actual.
- CA-003: Resalta en rojo los elementos sin `aria-label` o `role` apropiado.
- CA-004: Panel colapsable con recuento de violaciones por tipo.
- CA-005: Solo visible en desarrollo (`process.env.NODE_ENV === 'development'`) o con flag `?inquisitor=1`.
- CA-006: No afecta el layout del portafolio (position: fixed, z-index alto).
- CA-007: `data-atomic="organism" data-component="InquisitorHUD"` en root del HUD.
- CA-008: Accesible: el propio HUD cumple WCAG 2.2 AA.

---

## OLA 4 — TEMPLATES

### EX-v2-TMPL-001 — HomeTemplate
**Estado:** IN_SPEC | **Prioridad:** P0

**Descripción:**
Template completo de la página de inicio del portafolio. Orquesta todos los organismos en el orden correcto de flujo narrativo: Hero → NavSystem → CasesSection → TitanSection → StackSection → ContactSection. Incluye InquisitorHUD condicional (solo en dev). Server Component con secciones client-side incrustadas.

**Dependencias:**
EX-v2-HERO-001 · EX-v2-ORG-002 · EX-v2-ORG-003 · EX-v2-ORG-004 · EX-v2-ORG-005 · EX-v2-ORG-006 · EX-v2-A11Y-001

**Criterios de Aceptación:**
- CA-001: Renderiza 6 organismos en orden: Hero → NavSystem → CasesSection → TitanSection → StackSection → ContactSection.
- CA-002: `data-atomic="template" data-component="HomeTemplate"` en el `<main>` root.
- CA-003: InquisitorHUD montado con `enabled={process.env.NODE_ENV === 'development'}`.
- CA-004: Cada sección tiene `id` semántico para scroll/deeplink: `#hero`, `#nav`, `#casos`, `#titan`, `#stack`, `#contacto`.
- CA-005: SkipLink `<a href="#main-content">` visible al focus para WCAG 2.4.1.
- CA-006: Landmark `<main id="main-content">` envuelve todo el contenido.
- CA-007: 0 hex hardcoded. Solo tokens M3.
- CA-008: Server Component — solo marca `use client` cuando lo requieran los organismos internos.
- CA-009: Props tipados — recibe datos desde `page.tsx` de Next.js (no hace fetch directo).

### EX-v2-TMPL-002 — CasePage
**Estado:** IN_SPEC | **Prioridad:** P1

**Descripción:**
Template de página de detalle de un caso de estudio. Muestra el case study completo con header del proyecto, métricas clave, timeline del proceso, stack usado y CTA de siguiente caso. Recibe props desde el route handler de Next.js App Router.

**Dependencias:**
EX-v2-MOL-002 (ProjectCard) · EX-v2-MOL-004 (TimelineStep) · EX-v2-MOL-005 (MetricRow) · EX-v2-MOL-003 (SkillBar) · EX-v2-ATOM-001 (Button) · EX-v2-ATOM-002 (Tag)

**Criterios de Aceptación:**
- CA-001: Header con título, descripción y tags del proyecto.
- CA-002: Sección de métricas clave usando MetricRow (mínimo 3 métricas).
- CA-003: Timeline del proceso con TimelineStep (mínimo 3 pasos).
- CA-004: Stack técnico con SkillBar por cada tecnología usada.
- CA-005: CTA "Siguiente caso" (Button cta) + link "Volver a casos" (Button text).
- CA-006: `data-atomic="template" data-component="CasePage"` en el `<main>` root.
- CA-007: SkipLink + `<main id="main-content">`.
- CA-008: Breadcrumb nav con `aria-label="Breadcrumb"` para WCAG 2.4.8.
- CA-009: 0 hex hardcoded. Solo tokens M3.
- CA-010: Server Component — recibe `caseData: CasePageData` como prop.
