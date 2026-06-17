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

