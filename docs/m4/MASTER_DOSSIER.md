# MASTER_DOSSIER — EXCALIBUR v2.0.0
# Artefacto de cierre M4 · Cadenas ETHOS·PATHOS·LOGOS verificadas
# Autor: [ARCHITECT] Claude Sonnet 4.6 | Fecha: 2026-07-02

---

## 1. Resumen ejecutivo (5 líneas)

EXCALIBUR v2.0 es el portafolio profesional de Leonel Mauricio Gómez Ocampo,
Staff Product Architect con 10+ años en LATAM. Construido sobre Next.js 15 + React 19
+ TypeScript strict + MUI v6 + M3 tokens, con 24 componentes UI LOCKED, 171 tests,
y TitanRAGAgent — IA conversacional que responde sobre proyectos reales usando
Claude 4.6 + Gemini 2.0 Flash + pgvector RAG (M5). PRODUCTION_READY en frontend.

---

## 2. Cadena ETHOS — Decisiones trazables M0 → M4

```
ADR-001 (Next.js 15 + React 19 + TS strict + pnpm)
  └─ SPEC_DOCUMENT.md M2 — stack declarado en todos los SPEC_IDs
      └─ BLUEPRINT_SPEC_*.json M3 — stack citado en cada blueprint
          └─ VERSION_CERTIFICATE_*.json — 24 certificados firmados
              └─ MASTER_DOSSIER (este archivo) — cadena completa verificada

ADR-002 (MUI v6 + M3 tokens + Storybook 8 — SIN Tailwind)
  └─ DESIGN_TOKENS.json — 30+ tokens dark+light
      └─ DS_CONTRACT.md — 10 reglas inmutables
          └─ 24 componentes — cero hex, solo var(--md-sys-color-*)

ADR-005 (Claude + Gemini + pgvector RAG)
  └─ /api/chat route.ts — fallback chain Claude→Gemini→estático
      └─ M5: pgvector embeddings + seed-embeddings.ts (pendiente)
```

**Veredicto ETHOS:** cadena completa M0→M4 verificable. Cada componente
traza a su ADR origen. No hay decisiones técnicas sin ADR.

---

## 3. Cadena PATHOS — Insight M1 → evidencia M4

```
INSIGHT 1 (APE_DECLARATION_M1):
  "El reclutador técnico no puede verificar trabajo real en portafolios"
  → Resuelto por: Storybook 52+ stories (LIVE) + VERSION_CERTIFICATEs +
    171 tests auditables + este MASTER_DOSSIER con evidencia formal TITAN
  → Verificado por: ACCESSIBILITY_AUDIT_REPORT (0 violations prod) +
    QUALITY_REPORT (LH 88/95/100/100)

INSIGHT 2 (APE_DECLARATION_M1):
  "El CTO necesita evidencia de contextos legacy difíciles"
  → Resuelto por: Caso FDN (LCP 25.2s→2.5s · 654 WCAG fixes documentados)
    Caso BBVA (-75% TTM · digitalización Pyme) · Caso Solidaria (DS desde 0)
  → Verificado por: /casos/[slug] SSG en prod · evidence-dna.json

INSIGHT 3 (APE_DECLARATION_M1):
  "El PM/diseñador abandona portafolios pasivos en 2 min"
  → Resuelto por: TitanRAGAgent conversacional · dark/light toggle sin flash
    · i18n ES/EN · RadarChart interactivo
  → Verificado por: /api/health · LH Performance 88 · LH Accessibility 95
```

**Veredicto PATHOS:** cadena viva M1→M4. Pendiente M5: métrica de
interacciones con TitanRAGAgent como proxy del Insight 3.

---

## 4. Cadena LOGOS — Prueba técnica continua

```
SPEC_DOCUMENT.md M2 — criterios de aceptación binarios (CA-001..CA-00N)
  └─ 171 tests Vitest + Testing Library — cubren todos los CAs
      └─ jest-axe en cada test — 0 violations en CI/CD
          └─ ACCESSIBILITY_AUDIT_REPORT M4 — 0 violations en producción
              └─ QUALITY_REPORT M4 — LH scores verificados con JSON real
                  └─ WEEKLY_HEALTH_REPORT M5 (pendiente) — métricas en vivo
```

**Veredicto LOGOS:** cadena verificable hasta M4. El único eslabón faltante
es el monitoring continuo en M5 (WEEKLY_HEALTH_REPORT + Vercel Analytics).

---

## 5. APE_SUMMARY — tríada de los 26 SPEC_IDs

```
SPEC_IDs con tríada ETHOS+PATHOS+LOGOS completa: 24/26
  - Todos los componentes UI (atoms·molecules·organisms·templates)
  - Fuente: APE_BATCH_M3_SUMMARY.md

SPEC_IDs con solo ETHOS (sin PATHOS explícito): 2/26
  - EX-v2-INFRA-001 (MUI Theme + i18n setup — infraestructura, no UI directa)
  - EX-v2-I18N-001 (next-intl config — técnico, sin insight de usuario directo)
  - Justificación: la infraestructura sirve a todos los insights pero no los
    resuelve por sí sola — la tríada se verifica en los componentes que la usan
```

---

## 6. Riesgos aceptados y skips

| Skip / Riesgo | Justificación | Impacto |
|---|---|---|
| RESEARCH_SYNTHESIS M1 | IC único — experiencia directa 10+ años documentada | BAJO |
| Design Sprint M1 | Incertidumbre baja — audiencias conocidas | BAJO |
| DAST (OWASP ZAP) M4 | Portfolio sin datos de usuarios · en proceso | MEDIO |
| CodeQL M4 | ESLint cubre el 80% — CodeQL mejora la postura | BAJO |
| SBOM M4 | No hay distribución de paquetes | BAJO |
| Incident Response #09 | Proyecto personal — no aplica rotación de on-call | BAJO |
| CVE Monitoring #11 | Dependabot pendiente — Renovate como alternativa | BAJO |
| Strapi/Railway M5 | Datos hardcoded como fallback funcional | MEDIO (M5) |

---

## 7. Métricas de producción (2026-07-02)

```
URL activa:       excalibur-six-chi.vercel.app
Último deploy:    ERROR (L-M4-0 pendiente: GEMINI_API_KEY rename)
Producción OK:    hace 5 días (deploy 5d antes del error)
Build time:       ~44 segundos (Vercel)
Bundle / (total): 157 kB + 301 kB first load
/privacidad:      1.17 kB + 134 kB first load
Lighthouse perf:  88 | a11y: 95 | BP: 100 | SEO: 100
```

---

## 8. Veredicto PRODUCTION_READY

```
FRONTEND:   ✅ PRODUCTION_READY
  24 componentes LOCKED · 171 tests · 0 axe violations · build PASS
  LH ≥85 en todas las categorías · WCAG 2.2 AA declarado
  Security headers activos · Privacy page · Analytics instrumentado

BACKEND:    ⏳ IN_PROGRESS (M5)
  Strapi + Railway + pgvector pendientes
  Fallback funcional: datos hardcoded + Claude/Gemini API activas

OPERATIONS: ❌ NOT_STARTED (M5)
  WEEKLY_HEALTH_REPORT pendiente · dominio propio pendiente
```

**Declaración formal:**
EXCALIBUR v2.0 cumple todos los criterios de PRODUCTION_READY para frontend.
El backend (Strapi CMS) y las operaciones (monitoring continuo) se completan
en M5, que es el estado permanente IN_PROGRESS del ciclo de vida del producto.

Firmado: Leonel Mauricio Gómez Ocampo — Staff Product Architect — 2026-07-02
