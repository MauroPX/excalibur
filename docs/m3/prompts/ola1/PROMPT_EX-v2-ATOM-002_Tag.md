# PROMPT BFL — EX-v2-ATOM-002 — Tag
# Ola 1 | Rama: feat/v2-atoms-tag | Nivel: ATOM

---

## FASE I — BLUEPRINT

### Claude Code:
```
Genera el BLUEPRINT_SPEC.json para EX-v2-ATOM-002 — Tag (ATOM).

Lee primero:
- docs/m2/spec/SPEC_DOCUMENT.md (sección EX-v2-ATOM-002 si existe, si no, crearla)
- docs/m2/design/DESIGN_SPEC.md (sección Tag si existe, si no, crearla)
- docs/m2/design/DESIGN_TOKENS.json

El BLUEPRINT_SPEC.json debe incluir:
- spec_ref: "EX-v2-ATOM-002"
- atomic_level: "atom"
- component_name: "Tag"
- props_contract: {
    label: { type: "string", required: true },
    color: { type: "'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info'", default: "'primary'" },
    size: { type: "'small' | 'medium' | 'large'", default: "'medium'" },
    icon: { type: "ReactNode", required: false }
  }
- variantes: ["filled", "outlined"]
- wcag_criteria: ["1.4.3", "1.4.6"]
- bem_classes: {
    block: "ex-tag",
    modifiers: { color: "ex-tag--[color]", size: "ex-tag--[size]" }
  }
- m3_tokens: [tokens de color dinámicos según el color prop]
```

---

## FASE II — FORGE

### Claude Code:
```
FORGE para EX-v2-ATOM-002 — Tag.

1. src/components/atoms/Tag/Tag.tsx (MUI Chip base o Box estilizado)
2. src/components/atoms/Tag/Tag.test.tsx (Vitest)
3. src/components/atoms/Tag/Tag.stories.tsx (Storybook 8)
4. src/components/atoms/Tag/index.ts
```

---

## FASE III — LOCK

Generar VERSION_CERTIFICATE.json y actualizar registros.
