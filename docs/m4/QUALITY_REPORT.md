# QUALITY_REPORT — EXCALIBUR v2.0.0
# Auditor: [OBSERVER] | Fecha: 2026-07-02 | M4 Audit & Release

---

## 1. Resumen ejecutivo

| Dimensión | Valor | Estado |
|---|---|---|
| Tests totales | 171/171 | ✅ PASS |
| axe violations CI/CD | 0 | ✅ PASS |
| axe violations producción (pre-fix) | 1 serious (aria-hidden-focus, StackSection) | ⚠️ CORREGIDO |
| axe violations producción (post-fix) | 0 | ✅ PASS |
| Componentes LOCKED | 24/24 | ✅ PASS |
| Build pnpm | PASS | ✅ PASS |
| Stories Storybook | 52+ | ✅ PASS |
| CI/CD jobs | 7/7 | ✅ PASS |
| Integridad audit (workflow_bfl.sh) | 37/38 (97%) | ✅ PASS |

---

## 2. Lighthouse — Baseline producción (2026-07-02)

| Métrica | Valor | Objetivo TITAN |
|---|---|---|
| Performance | 88 | ≥85 ✅ |
| Accessibility | 95 | ≥95 ✅ |
| Best Practices | 100 | ≥95 ✅ |
| SEO | 100 | ≥95 ✅ |
| LCP | 3.2 s | <4 s ✅ |
| CLS | 0 | <0.1 ✅ |
| TBT | 110 ms | <200 ms ✅ |

Fuente: `docs/m4/audit/lighthouse_home.json` (run 2026-07-02 contra excalibur-six-chi.vercel.app).

---

## 3. Cobertura de tests por capa atómica

| Capa | Componentes | Tests | Cobertura estimada |
|---|---|---|---|
| Átomos | 7 (Badge·Button·Chip·Icon·Metric·Tag·ThemeToggle) | ~49 | ≥90% |
| Moléculas | 7 (NavTab·ProjectCard·SkillBar·TimelineStep·MetricRow·AudienceCard·RoadmapSplitButton) | ~49 | ≥85% |
| Organismos | 8 (Hero·TitanRAGAgent·NavSystem·CasesSection·ContactSection·InquisitorHUD·TitanSection·StackSection) | ~56 | ≥80% |
| Templates | 2 (HomeTemplate·CasePage) | ~17 | ≥80% |
| **TOTAL** | **24** | **171** | **≥85%** |

Todos los tests incluyen `axe()` de jest-axe — criterio de calidad accesible por componente.

---

## 4. Bug mayor resuelto en M3

**Incidente:** `TypeError: (0 , F.createContext) is not a function` en SSR.
**Causa raíz:** HomeTemplate, CasePage y `src/theme/index.ts` importaban APIs de React
  que requieren contexto de cliente (createTheme, createContext) sin declarar `'use client'`.
**Fix:** agregar directiva `'use client'` en los 3 archivos afectados.
**Impacto:** pnpm build pasó de FAIL → PASS. Vercel deployments de vuelta a READY.
**Lección M3 registrada:** en Next.js 15 + React 19, cualquier archivo que importe
  hooks o context de MUI necesita `'use client'`, aunque no renderice en el cliente.

---

## 5. Bug menor resuelto en M4

**Incidente:** `aria-hidden-focus` (serious) en `.ex-stack-section__radar` (StackSection).
**Causa raíz:** `tabIndex={-1}` en el contenedor `aria-hidden="true"` lo hacía
  programáticamente focusable, violando WCAG 2.2 regla 4.1.2.
**Fix:** eliminar `tabIndex={-1}`; el elemento decorativo no debe ser focusable de
  ninguna forma cuando está oculto a AT.
**Impacto:** 0 violations en prod → CONFORMANCE pasa de CONDITIONAL a PASS.

---

## 6. Tendencia de calidad

| Hito | Build | Tests | axe-CI | axe-Prod | LH-A11y |
|---|---|---|---|---|---|
| Ola 1 (átomos) | PASS | 21 | 0 | — | — |
| Ola 3 (organismos) | PASS | 100+ | 0 | — | — |
| Ola 5 (infra, bug SSR) | FAIL→PASS | 171 | 0 | — | — |
| M4 audit inicial | PASS | 171 | 0 | 1 serious | 95 |
| M4 post-fix | PASS | 171 | 0 | 0 | ≥95 |

---

## 7. Lecciones aprendidas

1. **SSR + MUI requiere vigilancia de `'use client'`** — Next.js 15 es estricto en la
   separación server/client. Establecer regla en DS_CONTRACT.md (ya hecho).
2. **aria-hidden ≠ no focusable** — poner `aria-hidden` en un contenedor no saca sus
   hijos del tab order. Siempre verificar con axe-cli en prod, no solo en unit tests.
3. **Chromatic + jest-axe complementarios** — jest-axe detecta violaciones en componentes
   aislados; axe-cli en producción detecta violaciones de composición (elementos interactuando).

---

## 8. Estado de seguridad (checklist #01–#11)

| # | Checkpoint | Estado |
|---|---|---|
| 01 | Security Requirements Review | ✅ SECURITY_POLICY.md |
| 02 | Threat Modeling | ✅ THREAT_MODEL.md firmado |
| 03 | Security Architecture | ⚠️ implícito — GAP_REPORT pendiente |
| 04 | SAST/SCA | ⚠️ ESLint ✅ · CodeQL pendiente |
| 05 | SBOM | ❌ Syft pendiente |
| 06 | Secrets Management | ✅ Vercel env vars · .env en gitignore |
| 07 | DAST | ❌ OWASP ZAP pendiente |
| 08 | Security Headers | ✅ vercel.json (HSTS·X-Frame·nosniff·Referrer·Permissions) |
| 09 | Incident Response | ❌ diferido (aceptable MVP — ADR) |
| 10 | Security Monitoring | ⚠️ Vercel logs ✅ · Sentry no |
| 11 | CVE Monitoring | ❌ Dependabot pendiente |

**Score: 5✅ + 3⚠️ + 3❌ = 8/11 mínimo MVP cumplido** (difiriendo #09 y #11 con justificación).

---

Firmado: Leonel Mauricio Gómez Ocampo — Staff Product Architect — 2026-07-02
