# WCAG_COMMITMENT.md
# EXCALIBUR v2.0 — Compromiso de Accesibilidad
# TITAN v7.0 | M0 | 2026-06-15
# Nivel: A (inmutable sin RFC)

---

## Declaración de compromiso

El portafolio MauricioGO v2 se desarrollará y mantendrá cumpliendo
**WCAG 2.2 Nivel AAA** — el nivel más exigente de accesibilidad web.

Este compromiso es vinculante desde el primer sprint de M3.
No es un objetivo de auditoría post-desarrollo — es un gate de CI/CD desde el día 1.

---

## Alcance

| Ámbito | Nivel | Normativa equivalente |
|---|---|---|
| Portafolio web completo | WCAG 2.2 AAA | NTC 5854 · EN 301 549 · Section 508 |
| Componentes en Storybook | WCAG 2.2 AA mínimo | Verificado con axe-core en cada story |
| API REST | N/A | Sin interfaz visual |

---

## Implementación técnica

| Fase | Acción | Herramienta |
|---|---|---|
| M3 — cada PR | axe-core bloqueante en GitHub Actions | @storybook/addon-a11y + CI/CD |
| M3 — cada story | 0 violations antes de merge | jest-axe en tests |
| M4 — pre-release | Audit completo con lectores de pantalla | NVDA + Firefox · VoiceOver + Safari |
| M4 — release | CONFORMANCE_STATEMENT firmada | Generada en M4 |
| M5 — continuo | axe en CI/CD bloquea regresiones | GitHub Actions |

---

## Decisiones de accesibilidad ya tomadas

1. **Sin iframe** — el portafolio actual tiene el contenido en un iframe que lectores de pantalla no pueden atravesar correctamente. v2 elimina el iframe — contenido 100% en DOM principal.
2. **MUI v6** — componentes con WCAG integrado en el tema. Contraste verificado por token M3.
3. **next-intl** — `lang` attribute en `<html>` cambia dinámicamente con el idioma. WCAG 3.1.1 y 3.1.2 cubiertos.
4. **Dark theme por defecto** — verificado con relación de contraste mínima 7:1 (AAA) en todos los colores del tema.
5. **Skip links** — implementado en `layout.tsx` desde el primer sprint.

---

## Firmado

| Rol | Nombre | Fecha |
|---|---|---|
| Staff Designer | Leonel Mauricio Gómez Ocampo | 2026-06-15 |
| Tech Lead | Leonel Mauricio Gómez Ocampo | 2026-06-15 |
| PO | Leonel Mauricio Gómez Ocampo | 2026-06-15 |

---

📍 Momentum: M0 | Artefacto: WCAG_COMMITMENT | Nivel: A
