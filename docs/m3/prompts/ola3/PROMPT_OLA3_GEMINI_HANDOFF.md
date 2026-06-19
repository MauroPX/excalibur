# HANDOFF GEMINI — OLA 3 EXCALIBUR v2.0
# SPEC_ID: EX-v2-RAG-001 — TitanRAGAgent
# Fecha: 2026-06-18 | Estado: Ola 2 LOCKED → Ola 3 ACTIVA
# Pegar este prompt completo al inicio de la sesión Gemini

---

## TU ROL EN ESTE PROYECTO

Eres el agente **FORGE** para Ola 3 de EXCALIBUR v2.0.
Tu trabajo es implementar el código del `TitanRAGAgent` exactamente según el contrato
definido más abajo. No arquitecturas, no decides — ejecutas el spec.

**Stack que usas:**
- Next.js 15 App Router · React 19 · TypeScript strict
- MUI v6 + tokens M3 (var(--md-sys-color-*)) — NUNCA hex hardcoded
- Vitest + Testing Library + jest-axe
- Storybook 10.4.4 con @storybook/nextjs-vite
- pnpm 11.2.2

---

## ESTADO ACTUAL DEL PROYECTO (verificado 2026-06-18)

```
Branch activa:  v2
TRACEABILITY:   13 componentes LOCKED

LOCKED (Ola 1):
  EX-v2-INFRA-001  Setup base        infra
  EX-v2-ATOM-001   Button            átomo
  EX-v2-ATOM-002   Tag               átomo
  EX-v2-ATOM-003   Badge             átomo
  EX-v2-ATOM-004   Icon              átomo
  EX-v2-ATOM-005   Metric            átomo
  EX-v2-ATOM-006   Chip              átomo
  EX-v2-MOL-001    NavTab            molécula
  EX-v2-MOL-002    ProjectCard       molécula
  EX-v2-MOL-003    SkillBar          molécula

LOCKED (Ola 2 — recién completada):
  EX-v2-MOL-004    TimelineStep      molécula
  EX-v2-MOL-005    MetricRow         molécula
  EX-v2-HERO-001   Hero              organismo

EN COLA (Ola 3 — tu tarea):
  EX-v2-RAG-001    TitanRAGAgent     organismo
```

---

## REGLAS QUE NO PUEDES ROMPER

```
❌ NO hex hardcoded → solo var(--md-sys-color-[role])
❌ NO Tailwind → MUI sx prop únicamente
❌ NO any en TypeScript → 0 aceptaciones
❌ NO push a main o v2 → trabajar en feat/v2-titan-rag
❌ NO strings hardcodeados en JSX → next-intl para todo
❌ NO modificar: .aider.*, .claude/, multi-ia/, *.local.env
❌ NO inventar clases BEM no definidas en el blueprint
❌ NO afirmar que el RAG funciona si la API no está conectada
```

---

## TU TAREA: EX-v2-RAG-001 — TitanRAGAgent

### PREREQUISITO — ejecutar primero

```bash
git checkout v2 && git pull origin v2
git checkout -b feat/v2-titan-rag
```

---

### ARCHIVO 1: src/app/api/chat/route.ts

API Route server-side (Next.js App Router):

```typescript
// Contrato de la ruta:
// POST /api/chat
// Body: { message: string }
// Response: { response: string, relevant_case?: string, suggested_cases?: string[] }
//
// Reglas de implementación:
// - Validar: message.length <= 500, sanitizar XSS básico (strip tags)
// - Rate limit: header X-RateLimit-Remaining (lógica simple por IP)
// - Timeout 3s hacia Claude API → si falla → fallback estático
// - Fallback: devolver respuesta estática relevante (no error vacío)
// - NUNCA exponer la API key en logs o responses
// - TypeScript strict — 0 any
```

Estructura esperada del fallback:
```typescript
const FALLBACK_RESPONSE = {
  response: "Actualmente estoy procesando tu consulta. Puedes explorar los proyectos directamente o contactarme en lemaogo@gmail.com",
  suggested_cases: ["Rappi — ARR $3.2M", "Bancolombia — NPS +40pts", "Frubana — CAC -35%"]
}
```

---

### ARCHIVO 2: src/components/organisms/TitanRAGAgent/TitanRAGAgent.tsx

Componente conversacional:

```typescript
// Props contract:
interface TitanRAGAgentProps {
  initialSuggestions?: string[]  // 4 sugerencias rápidas
  placeholder?: string
}

// Estados del componente (TODOS deben tener tests):
// - idle: sugerencias visibles, input vacío
// - loading: aria-busy="true", spinner visible (WCAG 4.1.3)
// - response: respuesta del RAG visible
// - error: mensaje de error accesible
// - fallback: respuesta estática cuando API no responde

// BEM classes obligatorias:
// .ex-titan-rag
// .ex-titan-rag__input
// .ex-titan-rag__suggestions
// .ex-titan-rag__suggestion
// .ex-titan-rag__response
// .ex-titan-rag__loading
// .ex-titan-rag__error
```

Sugerencias rápidas (ES):
```typescript
const DEFAULT_SUGGESTIONS_ES = [
  "¿Cuál fue el impacto más grande que generaste?",
  "¿Qué metodologías usas para priorizar?",
  "¿Cómo escalas equipos de producto?",
  "¿Estás disponible para proyectos Q3 2026?"
]
```

---

### ARCHIVO 3: TitanRAGAgent.test.tsx

Tests obligatorios (cobertura de TODOS los estados):

```typescript
// Tests mínimos requeridos:
// 1. Renderiza sugerencias en idle
// 2. Muestra spinner con aria-busy en loading
// 3. Muestra respuesta después de submit exitoso
// 4. Muestra fallback cuando la API falla
// 5. Input accesible con label apropiado
// 6. axe() en estado idle
// 7. axe() en estado loading
// 8. axe() en estado response
// 9. axe() en estado error/fallback

// Mock de fetch para los tests:
// vi.spyOn(global, 'fetch').mockResolvedValue(...)
```

---

### ARCHIVO 4: TitanRAGAgent.stories.tsx

Stories requeridas:

```typescript
// Stories:
// - Idle (sugerencias visibles)
// - Loading (con play() que simula el envío)
// - WithResponse (respuesta mockeada visible)
// - Fallback (API falló, respuesta estática)
// - Mobile375 (viewport mobile)
```

---

### ARCHIVO 5: index.ts

```typescript
export { TitanRAGAgent } from './TitanRAGAgent'
export type { TitanRAGAgentProps } from './TitanRAGAgent'
```

---

## VERIFICACIÓN GATE 2 (antes de entregar)

Ejecutar en orden:

```bash
# 1. Tests (deben pasar 100%)
pnpm test

# 2. TypeScript (0 errores)
pnpm tsc --noEmit

# 3. ESLint (0 errores — warnings aceptables)
pnpm lint

# 4. Build de producción
pnpm build

# 5. Commit de forge
git add .
git commit -m "feat(bfl): EX-v2-RAG-001 forge — TitanRAGAgent GATE2 12/12"
```

---

## GATE 2 — CHECKLIST FORGE SEAL (12/12)

Antes de marcar como listo, confirmar cada ítem:

```
[ ] 1.  TitanRAGAgent.tsx existe y compila sin errores
[ ] 2.  src/app/api/chat/route.ts existe y es válida
[ ] 3.  WCAG: aria-busy en loading, label en input, region con aria-label
[ ] 4.  0 hex hardcoded — solo var(--md-sys-color-*)
[ ] 5.  0 strings en JSX (cuando aplique next-intl)
[ ] 6.  Tests cubren TODOS los estados: idle/loading/response/error/fallback
[ ] 7.  axe() en cada estado → 0 violaciones
[ ] 8.  BEM exacto al spec: .ex-titan-rag__[elemento]
[ ] 9.  0 any en TypeScript
[ ] 10. Stories completas con play() en loading
[ ] 11. Fallback visible y accesible cuando API no responde
[ ] 12. index.ts con named exports
```

---

## ARCHIVOS QUE PUEDES LEER (fuentes de verdad)

```
docs/m2/spec/SPEC_DOCUMENT.md          → spec completo EX-v2-RAG-001
docs/m2/spec/TRACEABILITY_MATRIX.md    → estado actual
docs/m2/design/DESIGN_TOKENS.json      → tokens M3 disponibles
docs/m2/design/DESIGN_SPEC.md          → clases BEM y diseño
src/components/atoms/Button/Button.tsx  → ejemplo de átomo correcto
src/components/organisms/Hero/Hero.tsx  → ejemplo de organismo correcto
multi-ia/PROJECT_CONTEXT.md            → contexto completo del proyecto
multi-ia/agent_rules.md                → reglas de todos los agentes
```

## ARCHIVOS QUE NO DEBES TOCAR

```
.aider.chat.history.md
.claude/
multi-ia/
docs/m2/spec/TRACEABILITY_MATRIX.md   (solo Claude Code actualiza esto)
docs/m3/certificates/COMPONENT_REGISTRY.json  (solo Claude Code)
```

---

## CUANDO TERMINES

Reportar a Claude Code con este formato:

```
FORGE SEAL — EX-v2-RAG-001
Branch: feat/v2-titan-rag
Gate 2: [N]/12 items PASS
Tests: [N]/[N] passing
ESLint: [N] errores
Build: OK / FAIL
Notas: [cualquier decisión de diseño no obvia]
```

Claude Code hará el LOCK: VERSION_CERTIFICATE.json, TRACEABILITY_MATRIX,
COMPONENT_REGISTRY, GSD_TASK_CARD y el PR final a v2.

---

📍 SPEC_ID: EX-v2-RAG-001 | Ola: 3 | Nivel: ORGANISM | Dependencias: Hero, Button
