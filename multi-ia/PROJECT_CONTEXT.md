# PROJECT_CONTEXT.md — EXCALIBUR v2.0
# Contexto compartido para todos los agentes de IA
# Incluir al inicio de cada prompt del workflow.sh

---

## PRODUCTO

Nombre:       MauricioGO — Portafolio profesional Staff Product Architect
Repo:         github.com/MauroPX/excalibur
Rama trabajo: v2 (→ Vercel) | main v1.0 → Netlify (CONGELADO)
IC:           Leonel Mauricio Gómez Ocampo

---

## STACK TÉCNICO

Frontend:     Next.js 15 · App Router · React 19 · TypeScript 5 strict
DS:           MUI v6 · M3 Tokens · Storybook 8 · axe-core
Package mgr:  pnpm 11.2.2
Node:         24.15.0
i18n:         next-intl (ES + EN)
Backend:      Strapi v5 · PostgreSQL 16 + pgvector · Railway
IA:           Claude Sonnet 4.6 API
Deploy:       Vercel (v2) + GitHub Actions CI/CD 7 jobs
A11Y:         WCAG 2.2 AAA + NTC 5854 (axe-core bloqueante en CI/CD)

SIN: Tailwind (usar MUI sx prop) · SIN iframe · SIN barrel imports de MUI

---

## ESTRUCTURA DEL PROYECTO

```
src/
  app/                        Next.js App Router
  components/
    atoms/                    Button · Tag · Badge · Metric · Icon
    molecules/                NavTab · ProjectCard · SkillBar · TimelineStep · MetricRow
    organisms/                Hero · NavSystem · CaseStudy · TitanSection · InquisitorHUD · TitanRAGAgent
    templates/                PortfolioPage · CasePage
  theme/
    tokens.ts                 Variables CSS M3
    titanThemeDark.ts         Tema MUI dark (principal)
    titanThemeLight.ts        Tema MUI light
  i18n/
    messages/en.json
    messages/es.json
  lib/
    strapi.ts                 API client Strapi v5
    claude.ts                 Claude API client
    types.ts                  Tipos TypeScript compartidos
docs/
  m2/spec/SPEC_DOCUMENT.md       33 SPEC_IDs con criterios de aceptación
  m2/spec/TRACEABILITY_MATRIX.md Estado actual de cada SPEC_ID
  m2/design/DESIGN_TOKENS.json   Tokens M3 del portafolio
  m3/certificates/               VERSION_CERTIFICATEs + COMPONENT_REGISTRY
multi-ia/                         Este directorio — workflow multi-IA
```

---

## CONVENCIONES OBLIGATORIAS

```
BEM:           .bloque__elemento--modificador
Tokens M3:     NUNCA hex hardcoded → var(--md-sys-color-[role])
MUI imports:   import Button from '@mui/material/Button' (tree-shaking)
TypeScript:    strict: true — 0 any — 0 type assertions sin justificación
Commits:       feat(bfl): [SPEC_ID] descripción
Tests:         Vitest + Testing Library + jest-axe
i18n:          next-intl — nunca strings hardcodeados en JSX
```

---

## CICLO BFL

Cada componente pasa por:
  BLUEPRINT → BLUEPRINT_SPEC.json (define qué construir)
  FORGE     → código + tests + stories (construir)
  LOCK      → VERSION_CERTIFICATE.json (certificar)

Los SPEC_IDs tienen el formato: EX-v2-[AREA]-[###]
Ejemplo: EX-v2-ATOM-001 = Button atom

---

## STACK DE IAs EN ESTE PROYECTO

```
Claude Sonnet 4.6:    Blueprint + Lock + revisión crítica
qwen2.5-coder:14b:    Forge código (.tsx)
gemma2:9b:            Forge tests (.test.tsx)
qwen2.5:14b:          Forge docs MDX (.stories.tsx)
deepseek-r1:14b:      Orquestación + revisión final
```

---

## PROHIBICIONES (todos los agentes deben respetar)

```
NO hex hardcoded — solo tokens M3
NO Tailwind — MUI sx prop únicamente
NO any en TypeScript
NO push a main o v2 directamente
NO strings hardcodeados en JSX
NO modificar archivos de otros agentes (.aider.*, .claude/, etc.)
NO LOCK sin VERSION_CERTIFICATE.json
```

---

## SPEC_IDs ACTIVOS EN M3

Ver docs/m2/spec/TRACEABILITY_MATRIX.md para el estado actual.
El SPEC_ID activo se pasa como variable al workflow.sh.
