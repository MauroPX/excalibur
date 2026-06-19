# CLAUDE.md — EXCALIBUR v2.0
# MauricioGO Portafolio — Staff Product Architect
# TITAN v7.0 | Actualizar al cerrar cada ola
# Se carga automáticamente en cada sesión de Claude Code

---

## CONTEXTO DEL PROYECTO

```
Producto:    MauricioGO Portafolio v2 (desacoplado)
Repo:        github.com/MauroPX/excalibur
Rama activa: v2 → Vercel | main v1.0 → Netlify (CONGELADO — NO TOCAR)
IC:          Leonel Mauricio Gómez Ocampo — Staff Product Architect
TITAN:       v7.0
Stack:       Next.js 15 · React 19 · TypeScript 5 strict · MUI v6 · pnpm
Backend:     Strapi v5 · PostgreSQL 16 + pgvector · Railway
Deploy:      Vercel (v2) · GitHub Actions CI/CD (7 jobs)
Node:        24.15.0 | pnpm: 11.2.2
```

---

## ESTADO ACTUAL (actualizar al iniciar cada sesión)

```
Momentum:    M3 — Execution (Sprints BFL)
Ola activa:  Ola 2 (Molecules)
Feature:     Ola 2 Molecules (5/7 LOCKED)
SPEC_ID:     EX-v2-MOL-006
Último LOCK: MetricRow — 2026-06-17
```

---

## ARCHIVOS CLAVE

```
TRACEABILITY:       docs/m2/spec/TRACEABILITY_MATRIX.md
SPEC_DOCUMENT:      docs/m2/spec/SPEC_DOCUMENT.md
DESIGN_TOKENS:      docs/m2/design/DESIGN_TOKENS.json
DESIGN_SPEC:        docs/m2/design/DESIGN_SPEC.md
COMPONENT_REG:      docs/m3/certificates/COMPONENT_REGISTRY.json
PROMPTS BFL:        docs/m3/prompts/ola{0-3}/
AUDIT SCRIPTS:      docs/m3/audit/audit_individual.py · audit_ola.py
MULTI-IA:           multi-ia/PROJECT_CONTEXT.md · agent_rules.md · workflow.sh
CI/CD:              .github/workflows/v2.yml
```

---

## ADRs ACTIVOS (inmutables sin RFC)

```
ADR-001: Next.js 15 + React 19 + TypeScript strict + pnpm
ADR-002: MUI v6 + M3 Tokens + Storybook 8 + axe-core — SIN TAILWIND
ADR-003: Strapi v5 + PostgreSQL 16 + pgvector — Railway
ADR-004: main CONGELADO v1.0 | v2 → Vercel
ADR-005: Claude Sonnet 4.6 API + pgvector RAG
```

---

## CONVENCIONES OBLIGATORIAS

```
BEM:         .bloque__elemento--modificador (exacto al DESIGN_SPEC)
Tokens:      NUNCA hex hardcoded → var(--md-sys-color-[role])
Imports:     @mui/material/Button (tree-shaking — no barrel)
TypeScript:  strict: true — 0 any, 0 type assertions sin justificación
Tests:       Vitest + Testing Library + jest-axe en cada componente
Coverage:    >= 80% en organismos críticos
Commits:     feat(bfl): [SPEC_ID] descripción — conventional commits
i18n:        next-intl — NUNCA strings hardcodeados en JSX
Stories:     Storybook 8 — estados obligatorios según nivel atómico
```

---

## RUTAS DEL PROYECTO

```
Átomos:         src/components/atoms/
Moléculas:      src/components/molecules/
Organismos:     src/components/organisms/
Templates:      src/components/templates/
Tema MUI:       src/theme/
i18n:           src/i18n/messages/
API lib:        src/lib/strapi.ts | src/lib/claude.ts | src/lib/types.ts
Tests:          src/components/**/*.test.tsx
Stories:        src/components/**/*.stories.tsx
Multi-IA:       multi-ia/
```

---

## PROHIBICIONES (guardianes del proyecto)

```
❌ NO hex hardcoded — solo tokens M3 de DESIGN_TOKENS.json
❌ NO merge sin CI/CD 7/7 verde
❌ NO saltarse BLUEPRINT_SPEC.json antes de codear
❌ NO lógica de negocio en átomos
❌ NO Tailwind — usar MUI sx prop (ADR-002)
❌ NO push directo a main ni a v2 — siempre feat/v2-*
❌ NO strings hardcodeados en JSX — next-intl para todo
❌ NO LOCK sin VERSION_CERTIFICATE.json generado
❌ NO override del job axe-core — si falla se corrige
❌ NO modificar .aider.chat.history.md ni archivos de otros agentes
```

---

## CICLO BFL — RECORDATORIO RÁPIDO

```
BLUEPRINT → BLUEPRINT_SPEC.json + Gate 1 (BH-1 a BH-6)
FORGE     → código + tests + stories + Gate 2 (12/12 items)
LOCK      → VERSION_CERTIFICATE.json + COMPONENT_REGISTRY update
            + TRACEABILITY_MATRIX LOCKED + GSD_TASK_CARD + PR merged
```

---

## 🤝 ECOSISTEMA MULTI-IA — ROLES Y CONVIVENCIA

Este proyecto usa múltiples IAs con roles fijos por fase BFL:

### Tabla de roles por fase

| Fase BFL | Herramienta | Modelo | Rol |
|---|---|---|---|
| Blueprint | Claude Code (tú) | Claude Sonnet 4.6 | Arquitecto — define SPEC, valida tokens M3, redacta BLUEPRINT_SPEC.json |
| Forge — código | Aider + Ollama | qwen2.5-coder:14b | Ejecutor — implementa el .tsx exactamente según el Blueprint |
| Forge — tests | Aider + Ollama | gemma2:9b | Tester — genera .test.tsx con jest-axe, cubre todos los CA |
| Forge — docs MDX | Aider + Ollama | qwen2.5:14b | Documentador — genera stories + MDX con decisiones de diseño |
| Lock — revisión | Claude Code (tú) | Claude Sonnet 4.6 | Auditor — verifica LH-1..LH-4, genera VERSION_CERTIFICATE.json |
| Orquestación | workflow.sh | deepseek-r1:14b | Tech Lead — descompone features en prompts para cada agente |

### Reglas de convivencia entre agentes

1. **Aislamiento de ramas:** NUNCA trabajar en `main` o `v2` directamente.
   Siempre crear: `git checkout -b feat/v2-{scope}` antes de cualquier tarea.

2. **Respeto a archivos de otros agentes:** NO modificar ni eliminar:
   - `.aider.chat.history.md` (historial de Aider)
   - `.claude/` (sesiones de Claude Code)
   - `multi-ia/` (archivos del workflow Multi-IA)
   - `*.local.env` (variables locales de cada agente)

3. **Commits atómicos:** Un commit por cambio funcional exitoso.
   Formato: `feat(bfl): [SPEC_ID] descripción`

4. **Fuente de verdad compartida:** Antes de cualquier cambio, leer:
   - `AGENTS.md` — estado actual del proyecto
   - `MEMORY.md` — decisiones recientes
   - `docs/m2/spec/TRACEABILITY_MATRIX.md` — qué está LOCKED

5. **Coordinación:** Si hay commits de otra IA en la última hora,
   detener y preguntar antes de sobrescribir o refactorizar.

6. **Workflow completo:** Para features nuevas usar:
   ```bash
   ./multi-ia/workflow.sh "EX-v2-ATOM-001 — Button atom"
   ```
   Esto activa deepseek-r1 para orquestar + qwen/gemma para ejecutar.

### Cuándo usar cada herramienta

```
Claude Code (tú):
  ✅ Blueprint — definir SPEC, validar tokens, redactar BLUEPRINT_SPEC.json
  ✅ Lock — auditar, generar VERSION_CERTIFICATE.json, actualizar TRACEABILITY
  ✅ Revisión crítica de código generado por otros agentes
  ✅ Resolución de conflictos y decisiones de arquitectura
  ✅ Cualquier tarea que requiera razonamiento complejo

Aider + qwen2.5-coder:14b (Ollama):
  ✅ Forge código — implementar .tsx desde BLUEPRINT_SPEC.json
  ✅ Tareas repetitivas de código (barrel exports, tipos, helpers)
  ✅ Debugging de errores TypeScript/ESLint
  ✅ Cuando Claude Code consume demasiado contexto en repos grandes

Aider + gemma2:9b (Ollama):
  ✅ Generación de tests — .test.tsx con Vitest + Testing Library + jest-axe
  ✅ Cobertura de criterios de aceptación CA-001..CA-00N

Aider + qwen2.5:14b (Ollama):
  ✅ Documentación MDX — stories + decisiones de diseño
  ✅ README y docs técnicas

workflow.sh (deepseek-r1:14b):
  ✅ Orquestar features complejas — descompone en 4 subtareas
  ✅ Revisión final de seguridad y coherencia
```

---

## FORMATO DE INTERACCIÓN (Claude Code)

- Explicar brevemente el plan antes de ejecutar herramientas de escritura
- Si hay error o ambigüedad: detener y preguntar — no asumir
- Antes de commits grandes: mostrar el diff y pedir aprobación
- Usar `/compact` cuando el contexto supere el 60% del budget

---

## RECUPERACIÓN DE SESIÓN

```
Último trabajo:  Implementación de Button (EX-v2-ATOM-001) LOCKED v1.0.0
Próximo paso:    Seleccionar siguiente componente de Ola 1 (Tag/Badge)
Bloqueadores:    Ninguno
```
