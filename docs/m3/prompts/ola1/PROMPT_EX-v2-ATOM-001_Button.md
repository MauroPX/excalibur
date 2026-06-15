# PROMPT BFL — EX-v2-ATOM-001 — Button
# Ola 1 | Rama: feat/v2-atoms | Nivel: ATOM
# Usar en: Claude Code (terminal)

---

## INICIO

```bash
git checkout v2 && git pull origin v2
git checkout -b feat/v2-atoms
claude
```

---

## FASE I — BLUEPRINT

### VS Code: abrir de referencia:
- docs/m2/spec/SPEC_DOCUMENT.md → seccion EX-v2-ATOM-001
- docs/m2/design/DESIGN_SPEC.md → seccion Button
- docs/m2/design/DESIGN_TOKENS.json

### Claude Code:
```
Genera el BLUEPRINT_SPEC.json para EX-v2-ATOM-001 — Button (ATOM).

Lee primero:
- docs/m2/spec/SPEC_DOCUMENT.md seccion EX-v2-ATOM-001
- docs/m2/design/DESIGN_SPEC.md seccion Button
- docs/m2/design/DESIGN_TOKENS.json

El BLUEPRINT_SPEC.json debe incluir:
- spec_ref: "EX-v2-ATOM-001"
- atomic_level: "atom"
- component_name: "Button"
- props_contract: [props tipadas en TypeScript, 0 any]
- variantes: ["filled", "outlined", "text", "cta"]
- states: ["default", "hover", "focus", "disabled", "loading"]
- wcag_criteria: ["1.4.3", "1.4.6", "2.4.7", "4.1.2"]
- bem_classes: [clases BEM exactas del DESIGN_SPEC]
- m3_tokens: [tokens que usa — verificar en DESIGN_TOKENS.json]
- spec_criteria: [todos los CA del SPEC_DOCUMENT para EX-v2-ATOM-001]
- fuera_de_alcance: [lo que NO hace este atomo]

Verificar BH-1 a BH-6 antes de mostrar:
BH-1: tokens existen en DESIGN_TOKENS.json
BH-2: criterios WCAG validos en WCAG 2.2
BH-3: APIs con version fijada
BH-4: props sin any
BH-5: scope es nivel atom
BH-6: sin PENDIENTE sin resolver

Guardar en: src/components/atoms/Button/Button.blueprint.json
```

```bash
git add src/components/atoms/Button/Button.blueprint.json
git commit -m "feat(bfl): EX-v2-ATOM-001 blueprint — Button atom GATE1 approved"
```

---

## FASE II — FORGE

### Claude Code:
```
FORGE para EX-v2-ATOM-001 — Button.

Lee src/components/atoms/Button/Button.blueprint.json

Construye:

1. src/components/atoms/Button/Button.tsx
   - MUI v6 base (import desde "@mui/material/Button")
   - Solo tokens M3: var(--md-sys-color-[role]) — 0 hex hardcoded
   - BEM exacto del Blueprint
   - TypeScript strict (0 any)
   - Props: las del blueprint_spec.props_contract
   - Variantes: ["filled", "outlined", "text", "cta"]
   - Estados: ["default", "hover", "focus", "disabled", "loading"]
   - WCAG: ["1.4.3", "1.4.6", "2.4.7", "4.1.2"]

2. src/components/atoms/Button/Button.test.tsx
   - Vitest + Testing Library + jest-axe
   - Un describe por variante
   - axe() en CADA render
   - Cubrir todos los CA del SPEC_DOCUMENT EX-v2-ATOM-001
   - Coverage objetivo: 100% del componente

3. src/components/atoms/Button/Button.stories.tsx
   - Storybook 8
   - Stories: Default, Outlined, Text, CTA, Loading, Disabled, AllVariants, DarkTheme, Mobile375, Espanol
   - parameters.a11y activo
   - parameters.titan: {spec_id: "EX-v2-ATOM-001", momentum: "M3-Ola1"}
   - args por defecto que muestren el estado mas representativo

4. src/components/atoms/Button/index.ts
   - barrel export: export {default as Button} from "./Button"

Lista los 12 items del GATE 2 con PASS/FAIL antes de declarar FORGE_SEAL:
1-BEM exacto, 2-solo tokens M3, 3-WCAG ["1.4.3", "1.4.6", "2.4.7", "4.1.2"],
4-logica aislada, 5-TypeScript strict, 6-tests completos,
7-sin dependencias extras, 8-sin colisiones CSS,
9-JSDoc en props, 10-Blind Review, 11-registry preparado, 12-ZH FH-1..6
```

### Terminal paralela:
```bash
pnpm vitest src/components/atoms/Button --coverage
# Verificar: all tests pass | coverage 100%

# En Storybook (localhost:6006):
# Navegar a Atoms/Button
# Verificar tab Accessibility: 0 violations
```

```bash
git add src/components/atoms/Button/
git commit -m "feat(bfl): EX-v2-ATOM-001 forge — Button GATE2 12/12"
```

---

## FASE III — LOCK

### Claude Code:
```
LOCK para EX-v2-ATOM-001 — Button.

Genera src/components/atoms/Button/VERSION_CERTIFICATE.json:
{
  "spec_id": "EX-v2-ATOM-001",
  "component": "Button",
  "version": "1.0.0",
  "atomic_level": "atom",
  "titan_momentum": "M3",
  "ola": "1",
  "rama": "feat/v2-atoms",
  "fecha_lock": "[HOY YYYY-MM-DD]",
  "status": "LOCKED",
  "variantes": ["filled", "outlined", "text", "cta"],
  "states": ["default", "hover", "focus", "disabled", "loading"],
  "wcag_criteria": ["1.4.3", "1.4.6", "2.4.7", "4.1.2"],
  "wcag_verificados": true,
  "axe_violations": 0,
  "tests_passing": true,
  "coverage": "[valor real del ultimo test run]",
  "stories_completas": true,
  "chromatic_approved": false,
  "gate1_pass": true,
  "gate2_pass": true,
  "forge_seal_items": 12,
  "forge_seal_pass": 12,
  "dependents": [],
  "firmado": "Leonel Mauricio Gomez Ocampo",
  "notas": ""
}

Genera docs/m3/certificates/GSD_TASK_CARD_Button_[fecha].md
Describe el estado REAL del componente (no el ideal).

Dame las instrucciones exactas para actualizar:
- docs/m2/spec/TRACEABILITY_MATRIX.md: EX-v2-ATOM-001 → LOCKED
- docs/m3/certificates/COMPONENT_REGISTRY.json: agregar Button v1.0.0

LH-1: VERSION_CERTIFICATE no afirma mas que el codigo
LH-2: wcag_criteria son los verificados realmente
LH-3: dependents exactos (atom inicial = [])
LH-4: GSD describe el artefacto real
```

```bash
git add .
git commit -m "feat(bfl): EX-v2-ATOM-001 LOCK — Button v1.0.0 VERSION_CERTIFICATE"
gh pr create --base v2 --head feat/v2-atoms \
  --title "[LOCK] EX-v2-ATOM-001 — Button atom v1.0.0" \
  --body "EX-v2-ATOM-001 | Button | ATOM | Ola 1 | BFL 12/12 | axe 0 violations"
```

### Cuando CI/CD verde (7/7):
```bash
gh pr merge --squash
```

---

## AUDIT INDIVIDUAL

```
Audit individual EX-v2-ATOM-001 — Button.

Verifica cruzando VERSION_CERTIFICATE con codigo real:
1. coverage declarado = ultimo test run real
2. wcag_criteria implementados en Button.tsx (no solo declarados)
3. dependents en COMPONENT_REGISTRY correctos (deberia ser [] para atom)
4. TRACEABILITY_MATRIX muestra LOCKED con v1.0.0

Genera docs/m3/audit/AUDIT_EX-v2-ATOM-001.md
```

---

📍 SPEC_ID: EX-v2-ATOM-001 | Ola: 1 | Rama: feat/v2-atoms | Nivel: ATOM
