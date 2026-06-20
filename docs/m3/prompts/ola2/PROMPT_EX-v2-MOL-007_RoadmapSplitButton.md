# PROMPT BFL — EX-v2-MOL-007 — RoadmapSplitButton
# Ola 2 | Rama: feat/v2-ola2-close | Nivel: MOLECULE
# Law of UX: Ley de Hick (reducir opciones visibles)
# Usar en: Aider + qwen2.5-coder:14b (Forge) → Claude Code (Lock)

---

## PREREQUISITO

```bash
git checkout feat/v2-ola2-close
# AudienceCard (EX-v2-MOL-006) debe estar LOCKED antes de este
```

---

## FASE I — BLUEPRINT ✅ COMPLETADO POR CLAUDE CODE

Blueprint en: `src/components/molecules/RoadmapSplitButton/RoadmapSplitButton.blueprint.json`
Gate 1 (BH-1..BH-6): **PASS**

---

## FASE II — FORGE (Aider + qwen2.5-coder:14b)

```
aider --model ollama/qwen2.5-coder:14b \
  src/components/molecules/RoadmapSplitButton/RoadmapSplitButton.tsx \
  src/components/molecules/RoadmapSplitButton/index.ts
```

### Prompt para qwen2.5-coder:

```
Lee src/components/molecules/RoadmapSplitButton/RoadmapSplitButton.blueprint.json

Crea src/components/molecules/RoadmapSplitButton/RoadmapSplitButton.tsx:

Props (TypeScript strict — 0 any):
  options: Array<{ label: string; value: string }>
  selectedValue: string
  onChange: (value: string) => void
  primaryLabel?: string

Estructura JSX:
  <div
    data-atomic="molecule"
    data-component="RoadmapSplitButton"
    className="ex-roadmap-split"
    role="group"
    aria-label={t('roadmapSplit.ariaLabel')}
  >
    <Button
      variant="filled"
      className="ex-roadmap-split__primary"
      onClick={() => selectedOption && onChange(selectedOption.value)}
    >
      {selectedOption?.label ?? primaryLabel}
    </Button>
    <Button
      variant="filled"
      className="ex-roadmap-split__arrow"
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-controls="roadmap-dropdown"
      onClick={() => setOpen(prev => !prev)}
    >
      <Icon iconName={open ? 'ExpandLess' : 'ExpandMore'} />
    </Button>
    {open && (
      <ul
        role="listbox"
        id="roadmap-dropdown"
        className="ex-roadmap-split__dropdown"
      >
        {options.map(opt => (
          <li
            key={opt.value}
            role="option"
            aria-selected={opt.value === selectedValue}
            className="ex-roadmap-split__option"
            onClick={() => { onChange(opt.value); setOpen(false) }}
          >
            {opt.label}
          </li>
        ))}
      </ul>
    )}
  </div>

Reglas:
- useState para open (boolean)
- useEffect para cerrar al click fuera (useRef en root div + document.addEventListener)
- Teclado: ArrowDown/ArrowUp en listbox, Escape cierra y regresa foco al trigger
- Solo tokens M3 en sx — var(--md-sys-color-*) — NUNCA hex
- useTranslations('roadmapSplit') de next-intl
- TypeScript strict: 0 any

Crea src/components/molecules/RoadmapSplitButton/index.ts:
  export { default as RoadmapSplitButton } from './RoadmapSplitButton'
  export type { RoadmapSplitButtonProps } from './RoadmapSplitButton'
```

---

### Prompt tests (Aider + gemma2:9b):

```
aider --model ollama/gemma2:9b \
  src/components/molecules/RoadmapSplitButton/RoadmapSplitButton.test.tsx
```

```
Crea RoadmapSplitButton.test.tsx con Vitest + Testing Library + jest-axe:

const defaultOptions = [
  { label: 'Ola 1 — Átomos', value: 'ola1' },
  { label: 'Ola 2 — Moléculas', value: 'ola2' },
  { label: 'Ola 3 — Organismos', value: 'ola3' },
]

describe('RoadmapSplitButton', () => {
  it('CA-001: renderiza botón primario y flecha')
  it('CA-002: dropdown abre al click en flecha')
  it('CA-002: dropdown cierra al seleccionar opción')
  it('CA-002: dropdown cierra al click fuera')
  it('CA-003: label del primario se actualiza al seleccionar')
  it('CA-004: ArrowDown navega opciones')
  it('CA-004: Escape cierra dropdown')
  it('CA-005: aria-expanded=false cuando cerrado')
  it('CA-005: aria-expanded=true cuando abierto')
  it('CA-007: data-atomic=molecule en root')
  it('CA-007: data-component=RoadmapSplitButton en root')
  it('axe: 0 violations en estado cerrado')
  it('axe: 0 violations en estado abierto')
})
```

---

### Verificación Forge:

```bash
pnpm vitest src/components/molecules/RoadmapSplitButton --coverage
pnpm tsc --noEmit
pnpm lint src/components/molecules/RoadmapSplitButton/
```

```bash
git add src/components/molecules/RoadmapSplitButton/
git commit -m "feat(bfl): EX-v2-MOL-007 forge — RoadmapSplitButton GATE2 12/12"
```

---

## FASE III — LOCK (Claude Code)

```
LOCK EX-v2-MOL-007 RoadmapSplitButton.

Genera VERSION_CERTIFICATE.json en src/components/molecules/RoadmapSplitButton/
con spec_id: "EX-v2-MOL-007", version: "1.0.0", atomic_level: "molecule",
dependents: ["EX-v2-ATOM-001", "EX-v2-ATOM-004"],
depended_by: ["EX-v2-ORG-003"]

Actualiza TRACEABILITY_MATRIX y COMPONENT_REGISTRY.
```

```bash
git add .
git commit -m "feat(bfl): EX-v2-MOL-007 LOCK — RoadmapSplitButton v1.0.0"
```

---

📍 SPEC_ID: EX-v2-MOL-007 | Ola: 2 | Nivel: MOLECULE | depended_by: CasesSection
