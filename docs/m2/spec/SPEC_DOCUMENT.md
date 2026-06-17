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

