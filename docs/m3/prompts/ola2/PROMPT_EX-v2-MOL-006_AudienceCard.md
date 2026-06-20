# PROMPT BFL — EX-v2-MOL-006 — AudienceCard
# Ola 2 | Rama: feat/v2-ola2-close | Nivel: MOLECULE
# Law of UX: Ley de Proximidad + Serial Position
# Usar en: Aider + qwen2.5-coder:14b (Forge) → Claude Code (Lock)

---

## PREREQUISITO

```bash
git checkout feat/v2-ola2-close
# Verificar que EX-v2-MOL-005 MetricRow está LOCKED
grep "MetricRow" docs/m2/spec/TRACEABILITY_MATRIX.md | grep LOCKED
```

---

## FASE I — BLUEPRINT ✅ COMPLETADO POR CLAUDE CODE

Blueprint en: `src/components/molecules/AudienceCard/AudienceCard.blueprint.json`
Gate 1 (BH-1..BH-6): **PASS**

---

## FASE II — FORGE (Aider + qwen2.5-coder:14b)

```
aider --model ollama/qwen2.5-coder:14b \
  src/components/molecules/AudienceCard/AudienceCard.tsx \
  src/components/molecules/AudienceCard/index.ts
```

### Prompt para qwen2.5-coder:

```
Lee src/components/molecules/AudienceCard/AudienceCard.blueprint.json

Crea src/components/molecules/AudienceCard/AudienceCard.tsx:

Props (TypeScript strict — 0 any):
  type: 'symptom' | 'role'
  title: string
  description: string
  iconName?: string
  tag?: 'cliente' | 'reclutador' | 'comunidad' | 'normal'
  targetSlug?: string
  onClick?: () => void

Estructura JSX:
  <article
    data-atomic="molecule"
    data-component="AudienceCard"
    className="ex-audience-card ex-audience-card--{type}"
    role="article"
    aria-label={t('audienceCard.{type}.ariaLabel', { title })}
    onClick={onClick}
    onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick?.()}
    tabIndex={0}
  >
    <Icon iconName={iconName} className="ex-audience-card__icon" />
    <h3 className="ex-audience-card__title">{title}</h3>
    <p className="ex-audience-card__description">{description}</p>
    {tag && <Tag label={tag} className="ex-audience-card__tag" />}
    <Button variant="text" className="ex-audience-card__cta">
      {t('audienceCard.cta')}
    </Button>
  </article>

Reglas:
- Importar: Button desde '@/components/atoms/Button', Tag desde '@/components/atoms/Tag', Icon desde '@/components/atoms/Icon'
- sx SIEMPRE con tokens M3: var(--md-sys-color-*) — NUNCA hex
- hover: backgroundColor var(--md-sys-color-surface-container-high), transition 200ms
- useTranslations('audienceCard') de next-intl
- TypeScript strict: 0 any, 0 type assertions sin justificación
- BEM exacto del blueprint: ex-audience-card, ex-audience-card__icon, __title, __description, __tag, __cta
- Modificadores: ex-audience-card--symptom, ex-audience-card--role

Crea src/components/molecules/AudienceCard/index.ts:
  export { default as AudienceCard } from './AudienceCard'
  export type { AudienceCardProps } from './AudienceCard'
```

---

### Prompt tests (Aider + gemma2:9b):

```
aider --model ollama/gemma2:9b \
  src/components/molecules/AudienceCard/AudienceCard.test.tsx
```

```
Lee src/components/molecules/AudienceCard/AudienceCard.blueprint.json
Lee src/components/molecules/AudienceCard/AudienceCard.tsx

Crea src/components/molecules/AudienceCard/AudienceCard.test.tsx con Vitest + Testing Library + jest-axe:

describe('AudienceCard', () => {
  describe('variante symptom', () => {
    it('CA-001: renderiza título y descripción de síntoma')
    it('CA-003: CTA button visible')
    it('CA-006: axe 0 violations en render symptom')
  })
  describe('variante role', () => {
    it('CA-002: renderiza título y descripción de rol')
    it('CA-006: axe 0 violations en render role')
  })
  describe('interacción', () => {
    it('CA-009: onClick se llama al hacer click en la card')
    it('CA-009: onClick se llama al presionar Enter')
    it('CA-009: onClick se llama al presionar Space')
  })
  describe('data attributes', () => {
    it('CA-008: data-atomic=molecule en root')
    it('CA-008: data-component=AudienceCard en root')
  })
  describe('tag opcional', () => {
    it('CA-004: Tag se renderiza cuando tag prop presente')
    it('Tag no se renderiza sin prop tag')
  })
})

Reglas:
- axe() en CADA describe con render
- Mock de useTranslations: vi.mock('next-intl', () => ({ useTranslations: () => (key: string) => key }))
- Coverage objetivo: 95%+
```

---

### Prompt stories (Aider + qwen2.5:14b):

```
aider --model ollama/qwen2.5:14b \
  src/components/molecules/AudienceCard/AudienceCard.stories.tsx
```

```
Crea src/components/molecules/AudienceCard/AudienceCard.stories.tsx para Storybook 10:

Stories obligatorias:
- Default (symptom, cliente)
- RoleCard (role, reclutador)
- SinIcono (sin iconName)
- ConTag (con tag=comunidad)
- SinCTA (sin onClick)
- AllVariants (ambas en grid 2 col)
- DarkTheme
- Mobile375

parameters.titan: { spec_id: 'EX-v2-MOL-006', momentum: 'M3-Ola2' }
parameters.a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } }

Decorator: NextIntlClientProvider con messages ficticios { audienceCard: { cta: 'Ver caso', symptom: { ariaLabel: '{title}' }, role: { ariaLabel: '{title}' } } }
```

---

### Verificación Forge:

```bash
pnpm vitest src/components/molecules/AudienceCard --coverage
pnpm tsc --noEmit
pnpm lint src/components/molecules/AudienceCard/
```

GATE 2 — 12 items PASS/FAIL:
1. BEM exacto ✓/✗
2. Solo tokens M3 ✓/✗
3. WCAG 1.3.1, 1.4.3, 2.1.1, 2.4.7, 4.1.2 ✓/✗
4. Sin lógica de negocio ✓/✗
5. TypeScript strict ✓/✗
6. Tests completos (CA-001..CA-010) ✓/✗
7. Sin dependencias extras ✓/✗
8. Sin colisiones CSS ✓/✗
9. Props documentadas ✓/✗
10. data-atomic + data-component ✓/✗
11. i18n useTranslations ✓/✗
12. axe 0 violations ✓/✗

```bash
git add src/components/molecules/AudienceCard/
git commit -m "feat(bfl): EX-v2-MOL-006 forge — AudienceCard GATE2 12/12"
```

---

## FASE III — LOCK (Claude Code)

```
LOCK EX-v2-MOL-006 AudienceCard.

Genera src/components/molecules/AudienceCard/VERSION_CERTIFICATE.json:
{
  "spec_id": "EX-v2-MOL-006",
  "component": "AudienceCard",
  "version": "1.0.0",
  "atomic_level": "molecule",
  "titan_momentum": "M3",
  "ola": "2",
  "rama": "feat/v2-ola2-close",
  "fecha_lock": "YYYY-MM-DD",
  "status": "LOCKED",
  "variants": ["symptom", "role"],
  "states": ["default", "hover", "focus", "active"],
  "wcag_criteria": ["1.3.1", "1.4.3", "2.1.1", "2.4.7", "4.1.2"],
  "wcag_verificados": true,
  "axe_violations": 0,
  "tests_passing": true,
  "coverage": "[valor real]",
  "stories_completas": true,
  "chromatic_approved": false,
  "gate1_pass": true,
  "gate2_pass": true,
  "forge_seal_items": 12,
  "forge_seal_pass": 12,
  "dependents": ["EX-v2-ATOM-001", "EX-v2-ATOM-002", "EX-v2-ATOM-004"],
  "depended_by": ["EX-v2-ORG-002"],
  "firmado": "Leonel Mauricio Gomez Ocampo",
  "notas": "Card de audiencia para NavSystem Tabs A y B"
}

Actualiza:
- docs/m2/spec/TRACEABILITY_MATRIX.md: EX-v2-MOL-006 → LOCKED 1.0.0
- docs/m3/certificates/COMPONENT_REGISTRY.json: agregar EX-v2-MOL-006

LH-1..LH-4 verificados.
```

```bash
git add .
git commit -m "feat(bfl): EX-v2-MOL-006 LOCK — AudienceCard v1.0.0"
```

---

📍 SPEC_ID: EX-v2-MOL-006 | Ola: 2 | Nivel: MOLECULE | depended_by: NavSystem
