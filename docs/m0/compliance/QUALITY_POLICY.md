# QUALITY_POLICY.md
# EXCALIBUR v2.0 — Política de Calidad
# TITAN v7.0 | M0 | 2026-06-15
# Nivel: A (inmutable sin RFC)

---

## Declaración

MauricioGO v2 se construye con calidad verificable, no declarada.
Cada artefacto tiene evidencia técnica que lo respalda.
El cumplimiento se demuestra en CI/CD — no en documentos sin código que lo soporte.

---

## Objetivos de calidad medibles

| Métrica | Objetivo | Medición |
|---|---|---|
| WCAG violations en CI/CD | 0 críticas antes de merge | axe-core GitHub Actions |
| TypeScript errors | 0 en `tsc --noEmit` | CI job type-check |
| Storybook stories por componente | Todos los estados obligatorios | PR checklist |
| Chromatic visual diff | Aprobado antes de merge | Chromatic CI |
| LCP en producción | < 1.5s | Vercel Analytics + Lighthouse CI |
| CLS | < 0.1 | Vercel Analytics |
| Cobertura de tests (cuando aplique) | ≥ 80% componentes críticos | Vitest coverage |
| Commits sin mensaje semántico | 0 en rama v2 | Conventional commits |

---

## Proceso de calidad por feature

```
feat/v2-{scope} creada desde v2
  ↓
Blueprint firmado (SPEC_ITEM referenciado)
  ↓
Forge: código + tests + stories completas
  ↓
axe-core: 0 violations
  ↓
Chromatic: visual diff aprobado
  ↓
PR con checklist BFL 12/12
  ↓
Lock: merge a v2
```

---

## Casos de estudio como evidencia de calidad

Los proyectos del portafolio incluyen evidencia real de calidad:

- **FDN**: LCP 25.2s → 2.5s (−90%). 654 fallas WCAG eliminadas.
- **Simón v2**: GATE 2 11/12. WCAG AAA. 9 componentes en LOCK con VERSION_CERTIFICATE.
- **Solidaria**: 212 tests. 0 violaciones axe. WCAG 2.2 AA. Storybook con Chromatic.

---

Firmado: Leonel Mauricio Gómez Ocampo — Staff Product Architect | 2026-06-15

📍 Momentum: M0 | Artefacto: QUALITY_POLICY | Nivel: A
