# PROMPT BFL — EX-v2-ORG-005 — StackSection
# Ola 3 | Rama: feat/v2-ola3-organisms | Nivel: ORGANISM
# Law of UX: Ley de Prägnanz (forma simple — radar legible)
# 'use client' — filtrado de chips + radar interactivo
# Usar en: Aider + qwen2.5-coder:14b (Forge) → Claude Code (Lock)

---

## FASE I — BLUEPRINT ✅ COMPLETADO POR CLAUDE CODE

Blueprint en: `src/components/organisms/StackSection/StackSection.blueprint.json`
IMPORTANTE: RadarChart requiere aria-hidden + tabla sr-only para a11y.
Gate 1 (BH-1..BH-6): **PASS**

---

## FASE II — FORGE (Aider + qwen2.5-coder:14b)

```
aider --model ollama/qwen2.5-coder:14b \
  src/components/organisms/StackSection/StackSection.tsx \
  src/components/organisms/StackSection/index.ts
```

### Prompt para qwen2.5-coder:

```
Lee src/components/organisms/StackSection/StackSection.blueprint.json

Crea src/components/organisms/StackSection/StackSection.tsx:

'use client'

Props:
  skills: Array<{
    name: string;
    category: 'pensamiento'|'diseno'|'operaciones'|'tecnico';
    level: number;  // 0-100
    levelLabel: 'Senior'|'Expert'|'Lead';
    iconName?: string
  }>

Estado interno:
  activeCategory: string | null (useState(null)) — null = mostrar todas

Radar data:
  radarData = [{
    subject: t('stackSection.category.pensamiento'),
    value: avg de skills donde category === 'pensamiento',
    fullMark: 100
  }, /* idem para diseno, operaciones, tecnico */]

Estructura JSX:
  <section data-atomic="organism" data-component="StackSection" className="ex-stack-section">
    <h2>{t('stackSection.title')}</h2>
    <p>{t('stackSection.subtitle')}</p>

    {/* Radar con a11y */}
    <div className="ex-stack-section__radar-wrapper">
      <RadarChart aria-hidden="true" width={340} height={280} data={radarData} cx="50%" cy="50%">
        <PolarGrid stroke="var(--md-sys-color-outline-variant)" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--md-sys-color-on-surface)' }} />
        <Radar dataKey="value" stroke="var(--md-sys-color-primary)"
               fill="var(--md-sys-color-primary)" fillOpacity={0.2} />
      </RadarChart>
      {/* Tabla accesible oculta visualmente */}
      <table className="sr-only" aria-label={t('stackSection.radar.ariaLabel')}>
        <thead><tr><th>Categoría</th><th>Nivel promedio</th></tr></thead>
        <tbody>{radarData.map(r => <tr key={r.subject}><td>{r.subject}</td><td>{r.value}</td></tr>)}</tbody>
      </table>
    </div>

    {/* Chips de filtro por categoría */}
    <div className="ex-stack-section__filter-chips">
      {['pensamiento','diseno','operaciones','tecnico'].map(cat => (
        <Chip key={cat} label={t(`stackSection.category.${cat}`)}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              variant={activeCategory === cat ? 'filled' : 'outlined'} />
      ))}
    </div>

    {/* Lista de SkillBars */}
    <div className="ex-stack-section__skills-list">
      {filteredSkills.map((skill, i) => (
        <SkillBar key={i} name={skill.name} level={skill.level}
                  levelLabel={skill.levelLabel} iconName={skill.iconName} />
      ))}
    </div>
  </section>

filteredSkills = skills.filter(s => !activeCategory || s.category === activeCategory)

Importar: { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'
Importar: SkillBar, Chip, Icon desde sus rutas
Solo tokens M3 — var(--md-sys-color-*) — NUNCA hex
useTranslations('stackSection') de next-intl
TypeScript strict: 0 any
```

---

### Prompt tests (Aider + gemma2:9b):

```
Crea StackSection.test.tsx:

const mockSkills = [
  { name: 'Product Strategy', category: 'pensamiento', level: 95, levelLabel: 'Lead' },
  { name: 'Figma', category: 'diseno', level: 90, levelLabel: 'Expert' },
  { name: 'Next.js', category: 'tecnico', level: 85, levelLabel: 'Expert' },
  { name: 'CI/CD', category: 'operaciones', level: 80, levelLabel: 'Senior' },
]

describe('StackSection', () => {
  it('CA-001: RadarChart con aria-hidden=true')
  it('CA-002: tabla sr-only con datos del radar')
  it('CA-003: SkillBars de todas las categorías por defecto')
  it('CA-004: click en chip filtra SkillBars por categoría')
  it('CA-004: click en chip activo lo desactiva — muestra todas')
  it('CA-007: data-atomic=organism en root')
  it('CA-007: data-component=StackSection en root')
  it('axe: 0 violations — estado sin filtro')
  it('axe: 0 violations — estado con filtro activo')
})
```

---

```bash
git add src/components/organisms/StackSection/
git commit -m "feat(bfl): EX-v2-ORG-005 forge — StackSection GATE2 12/12"
```

## FASE III — LOCK (Claude Code)

```
LOCK EX-v2-ORG-005. VERSION_CERTIFICATE.json:
dependents: ["EX-v2-MOL-003", "EX-v2-ATOM-004", "EX-v2-ATOM-006"]
depended_by: ["EX-v2-TMPL-001"]
```

---

📍 SPEC_ID: EX-v2-ORG-005 | Ola: 3 | Nivel: ORGANISM | Recharts radar + a11y tabla sr-only
