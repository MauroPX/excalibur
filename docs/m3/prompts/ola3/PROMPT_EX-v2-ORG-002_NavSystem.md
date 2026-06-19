# PROMPT BFL — EX-v2-ORG-002 — NavSystem
# Ola 3 | Rama: feat/v2-ola3-organisms | Nivel: ORGANISM
# Law of UX: Ley de Miller (7±2) + Ley de Proximidad
# 'use client' — componente interactivo
# Usar en: Aider + qwen2.5-coder:14b (Forge) → Claude Code (Lock)

---

## PREREQUISITO

```bash
git checkout v2 && git pull origin v2
git checkout -b feat/v2-ola3-organisms

# Verificar que MOL-006 + MOL-007 están LOCKED antes de este
grep "AudienceCard\|RoadmapSplitButton" docs/m3/certificates/COMPONENT_REGISTRY.json
```

---

## FASE I — BLUEPRINT ✅ COMPLETADO POR CLAUDE CODE

Blueprint en: `src/components/organisms/NavSystem/NavSystem.blueprint.json`
Gate 1 (BH-1..BH-6): **PASS**

---

## FASE II — FORGE (Aider + qwen2.5-coder:14b)

```
aider --model ollama/qwen2.5-coder:14b \
  src/components/organisms/NavSystem/NavSystem.tsx \
  src/components/organisms/NavSystem/index.ts
```

### Prompt para qwen2.5-coder:

```
Lee src/components/organisms/NavSystem/NavSystem.blueprint.json

Crea src/components/organisms/NavSystem/NavSystem.tsx:

'use client'

Props (TypeScript strict):
  symptomCards: Array<{ title: string; description: string; iconName?: string; tag?: string; targetSlug?: string }>
  roleCards: Array<{ title: string; description: string; iconName?: string; tag?: string; targetSlug?: string }>
  featuredProjects?: Array<{ slug: string; title: string; summary: string; tags: string[] }>
  defaultTab?: 'A' | 'B' | 'C' | 'D'

Tabs:
  A = 'Por síntoma' (iconName: TroubleshootOutlined) → grid de AudienceCard symptom
  B = 'Por rol' (iconName: WorkOutlined) → grid de AudienceCard role
  C = 'Pregúntale a TITAN' (iconName: SmartToyOutlined) → TitanRAGAgent
  D = 'Explorar' (iconName: ExploreOutlined) → lista featuredProjects

Estructura JSX:
  <section
    data-atomic="organism"
    data-component="NavSystem"
    className="ex-nav-system"
  >
    <div role="tablist" aria-label={t('navSystem.ariaLabel')} className="ex-nav-system__tabs-bar">
      {['A','B','C','D'].map(tab => (
        <NavTab
          key={tab}
          role="tab"
          id={`tab-${tab}`}
          aria-selected={activeTab === tab}
          aria-controls={`panel-${tab}`}
          iconName={TABS[tab].iconName}
          label={t(`navSystem.tab.${tab.toLowerCase()}`)}
          active={activeTab === tab}
          onClick={() => setActiveTab(tab)}
        />
      ))}
    </div>

    {/* Panel A */}
    <div role="tabpanel" id="panel-A" aria-labelledby="tab-A"
         hidden={activeTab !== 'A'} className="ex-nav-system__tab-panel">
      <div className="ex-nav-system__cards-grid ex-nav-system--tab-a">
        {symptomCards.map((card, i) => (
          <AudienceCard key={i} type="symptom" {...card} />
        ))}
      </div>
    </div>

    {/* Panel B - igual con roleCards type="role" */}
    {/* Panel C - <TitanRAGAgent /> */}
    {/* Panel D - lista de featuredProjects */}
  </section>

Reglas:
- useState para activeTab (default: props.defaultTab ?? 'A')
- Importar NavTab, AudienceCard, TitanRAGAgent desde sus rutas
- Animación entre tabs: opacity transition 150ms en el panel visible
- Solo tokens M3 — var(--md-sys-color-*) — NUNCA hex
- useTranslations('navSystem') de next-intl
- TypeScript strict: 0 any
- BEM exacto: ex-nav-system, __tabs-bar, __tab-panel, __cards-grid

Crea src/components/organisms/NavSystem/index.ts:
  export { default as NavSystem } from './NavSystem'
  export type { NavSystemProps } from './NavSystem'
```

---

### Prompt tests (Aider + gemma2:9b):

```
aider --model ollama/gemma2:9b \
  src/components/organisms/NavSystem/NavSystem.test.tsx
```

```
Crea NavSystem.test.tsx:

const mockSymptomCards = [
  { title: 'Producto no convierte', description: 'Desc', tag: 'cliente', targetSlug: 'bbva' },
  { title: 'Necesito escalar equipo', description: 'Desc', tag: 'cliente', targetSlug: 'boa' },
]
const mockRoleCards = [
  { title: 'CPO / Head of Product', description: 'Desc', tag: 'reclutador' },
  { title: 'CTO / Tech Lead', description: 'Desc', tag: 'reclutador' },
]

describe('NavSystem', () => {
  it('CA-001: renderiza 4 NavTabs')
  it('CA-001: tabs tienen role=tab y aria-selected correcto')
  it('CA-002: Tab A activo por defecto — symptomCards visibles')
  it('CA-002: Tab B click — roleCards visibles')
  it('CA-004: Tab C click — TitanRAGAgent visible')
  it('CA-006: cambio de tab no recarga página')
  it('CA-007: tablist con aria-label')
  it('CA-008: responsivo — className en las variantes de tab presente')
  it('CA-009: data-atomic=organism en root')
  it('CA-009: data-component=NavSystem en root')
  it('axe: 0 violations Tab A')
  it('axe: 0 violations Tab B')
})
```

---

### Verificación Forge:

```bash
pnpm vitest src/components/organisms/NavSystem --coverage
pnpm tsc --noEmit
```

```bash
git add src/components/organisms/NavSystem/
git commit -m "feat(bfl): EX-v2-ORG-002 forge — NavSystem GATE2 12/12"
```

---

## FASE III — LOCK (Claude Code)

```
LOCK EX-v2-ORG-002 NavSystem. Genera VERSION_CERTIFICATE.json con:
dependents: ["EX-v2-MOL-001", "EX-v2-MOL-006", "EX-v2-RAG-001"]
depended_by: ["EX-v2-TMPL-001"]
wcag_criteria: ["1.3.1", "2.1.1", "2.4.3", "2.4.7", "4.1.2", "4.1.3"]
Actualiza TRACEABILITY_MATRIX y COMPONENT_REGISTRY.
```

```bash
git add .
git commit -m "feat(bfl): EX-v2-ORG-002 LOCK — NavSystem v1.0.0"
```

---

📍 SPEC_ID: EX-v2-ORG-002 | Ola: 3 | Nivel: ORGANISM | Cliente: sí | depended_by: HomeTemplate
