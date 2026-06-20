# PROMPT BFL — EX-v2-ORG-003 — CasesSection
# Ola 3 | Rama: feat/v2-ola3-organisms | Nivel: ORGANISM
# Law of UX: Ley de Posición Serial (medio) + Ley de Zeigarnik
# 'use client' — filtrado interactivo
# Usar en: Aider + qwen2.5-coder:14b (Forge) → Claude Code (Lock)

---

## FASE I — BLUEPRINT ✅ COMPLETADO POR CLAUDE CODE

Blueprint en: `src/components/organisms/CasesSection/CasesSection.blueprint.json`
Gate 1 (BH-1..BH-6): **PASS**

---

## FASE II — FORGE (Aider + qwen2.5-coder:14b)

```
aider --model ollama/qwen2.5-coder:14b \
  src/components/organisms/CasesSection/CasesSection.tsx \
  src/components/organisms/CasesSection/index.ts
```

### Prompt para qwen2.5-coder:

```
Lee src/components/organisms/CasesSection/CasesSection.blueprint.json

Crea src/components/organisms/CasesSection/CasesSection.tsx:

'use client'

Props:
  projects: Array<{
    slug: string; title: string; description: string;
    tags: string[]; metric?: { value: string; label: string };
    symptomTags: string[]; roleTags: string[]; audienceTags: string[]
  }>
  totalCount?: number

Estado interno:
  activeSymptoms: string[] (useState([]))
  activeRoles: string[] (useState([]))

Lógica de filtrado:
  filteredProjects = projects.filter(p =>
    (activeSymptoms.length === 0 || p.symptomTags.some(t => activeSymptoms.includes(t))) &&
    (activeRoles.length === 0 || p.roleTags.some(t => activeRoles.includes(t)))
  )

Chips de filtro (SYMPTOM_TAGS y ROLE_TAGS del blueprint):
  toggle activo/inactivo al click; variant="filled" cuando activo, "outlined" cuando inactivo

Grid de ProjectCards:
  max 20; si totalCount > 20 mostrar Button "Ver todos los casos"

Estado vacío:
  cuando filteredProjects.length === 0: mensaje i18n casesSection.empty

aria-live="polite" en el contenedor del grid para anunciar cambios

Reglas:
- Solo tokens M3 — var(--md-sys-color-*) — NUNCA hex
- BEM: ex-cases-section, __filters, __grid, __card-wrapper, __empty-state, __load-more
- data-atomic="organism" data-component="CasesSection" en <section> root
- useTranslations('casesSection')
- TypeScript strict: 0 any
```

---

### Prompt tests (Aider + gemma2:9b):

```
Crea CasesSection.test.tsx:

describe('CasesSection', () => {
  it('CA-001: grid responsivo con clases correctas')
  it('CA-002: chips de filtro symptomTags visibles')
  it('CA-002: chips de filtro roleTags visibles')
  it('CA-003: click en chip filtra ProjectCards')
  it('CA-003: click en chip activo lo desactiva — restaura lista')
  it('CA-005: estado vacío cuando filtro sin resultados')
  it('CA-007: aria-live=polite en grid container')
  it('CA-008: data-atomic=organism en root')
  it('CA-008: data-component=CasesSection en root')
  it('axe: 0 violations sin filtros')
  it('axe: 0 violations con filtros activos')
})
```

---

```bash
git add src/components/organisms/CasesSection/
git commit -m "feat(bfl): EX-v2-ORG-003 forge — CasesSection GATE2 12/12"
```

## FASE III — LOCK (Claude Code)

```
LOCK EX-v2-ORG-003. VERSION_CERTIFICATE.json:
dependents: ["EX-v2-MOL-002", "EX-v2-ATOM-006", "EX-v2-ATOM-001"]
depended_by: ["EX-v2-TMPL-001"]
```

---

📍 SPEC_ID: EX-v2-ORG-003 | Ola: 3 | Nivel: ORGANISM | depended_by: HomeTemplate
