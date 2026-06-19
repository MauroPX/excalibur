# PROMPT BFL — EX-v2-ORG-004 — TitanSection
# Ola 3 | Rama: feat/v2-ola3-organisms | Nivel: ORGANISM
# Law of UX: Ley de Jakob
# Server Component (no 'use client')
# Usar en: Aider + qwen2.5-coder:14b (Forge) → Claude Code (Lock)

---

## FASE I — BLUEPRINT ✅ COMPLETADO POR CLAUDE CODE

Blueprint en: `src/components/organisms/TitanSection/TitanSection.blueprint.json`
Incluye static_fallback con 6 módulos M0..M5.
Gate 1 (BH-1..BH-6): **PASS**

---

## FASE II — FORGE (Aider + qwen2.5-coder:14b)

```
aider --model ollama/qwen2.5-coder:14b \
  src/components/organisms/TitanSection/TitanSection.tsx \
  src/components/organisms/TitanSection/index.ts
```

### Prompt para qwen2.5-coder:

```
Lee src/components/organisms/TitanSection/TitanSection.blueprint.json

Crea src/components/organisms/TitanSection/TitanSection.tsx (Server Component — sin 'use client'):

Props:
  modules: Array<{
    hubName: string; hubTitle: string; description: string;
    momentum: 'M0'|'M1'|'M2'|'M3'|'M4'|'M5';
    commandsCount: number; features?: string[]
  }>
  version?: string  // default 'v7.0'

Estructura:
  <section data-atomic="organism" data-component="TitanSection" className="ex-titan-section">
    <header className="ex-titan-section__header">
      <Badge content={version ?? 'v7.0'} className="ex-titan-section__version-badge" />
      <h2>{t('titanSection.title')}</h2>
      <p>{t('titanSection.subtitle')}</p>
    </header>
    <MetricRow metrics={[
      { label: t('titanSection.totalCommands'), value: totalCommands.toString() },
      { label: t('titanSection.activeModules'), value: modules.length.toString() },
    ]} />
    <div className="ex-titan-section__modules-grid">
      {modules.map(mod => (
        <article key={mod.hubName} className={`ex-titan-section__module-card ex-titan-section--${mod.momentum.toLowerCase()}`}>
          <Chip label={mod.momentum} className="ex-titan-section__module-momentum" />
          <h3>{mod.hubName}</h3>
          <p className="ex-titan-section__module-title">{mod.hubTitle}</p>
          <p>{mod.description}</p>
          <span className="ex-titan-section__module-stats">
            {t('titanSection.module.commands', { count: mod.commandsCount })}
          </span>
        </article>
      ))}
    </div>
  </section>

Momentum colors en sx:
  M0 → var(--md-sys-color-error-container)
  M1 → var(--md-sys-color-secondary-container)
  M2 → var(--md-sys-color-tertiary-container)
  M3/M4/M5 → var(--md-sys-color-primary-container)

totalCommands = modules.reduce((sum, m) => sum + m.commandsCount, 0)

Importar: Badge, Chip, Icon, MetricRow desde sus rutas
Solo tokens M3 — var(--md-sys-color-*) — NUNCA hex
useTranslations('titanSection') — getTranslations() para Server Component
TypeScript strict: 0 any
```

---

### Prompt tests (Aider + gemma2:9b):

```
Crea TitanSection.test.tsx:

const mockModules = [/* 6 módulos del static_fallback del blueprint */]

describe('TitanSection', () => {
  it('CA-001: renderiza 6 module-cards')
  it('CA-002: cada card muestra hubName, hubTitle, description, commandsCount')
  it('CA-003: Badge v7.0 en header')
  it('CA-004: Chip de momentum en cada card')
  it('CA-005: MetricRow con total de comandos')
  it('CA-007: data-atomic=organism en root')
  it('CA-007: data-component=TitanSection en root')
  it('axe: 0 violations')
})
```

---

```bash
git add src/components/organisms/TitanSection/
git commit -m "feat(bfl): EX-v2-ORG-004 forge — TitanSection GATE2 12/12"
```

## FASE III — LOCK (Claude Code)

```
LOCK EX-v2-ORG-004. VERSION_CERTIFICATE.json:
dependents: ["EX-v2-ATOM-003", "EX-v2-ATOM-006", "EX-v2-ATOM-004", "EX-v2-MOL-005"]
depended_by: ["EX-v2-TMPL-001"]
```

---

📍 SPEC_ID: EX-v2-ORG-004 | Ola: 3 | Nivel: ORGANISM | Server Component
