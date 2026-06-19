# PROMPT BFL — EX-v2-ORG-006 — ContactSection
# Ola 3 | Rama: feat/v2-ola3-organisms | Nivel: ORGANISM
# Law of UX: Ley de Posición Serial (último) + Ley de Hick (1 CTA)
# 'use client' — clipboard API
# Usar en: Aider + qwen2.5-coder:14b (Forge) → Claude Code (Lock)

---

## FASE I — BLUEPRINT ✅ COMPLETADO POR CLAUDE CODE

Blueprint en: `src/components/organisms/ContactSection/ContactSection.blueprint.json`
Gate 1 (BH-1..BH-6): **PASS**

---

## FASE II — FORGE (Aider + qwen2.5-coder:14b)

```
aider --model ollama/qwen2.5-coder:14b \
  src/components/organisms/ContactSection/ContactSection.tsx \
  src/components/organisms/ContactSection/index.ts
```

### Prompt para qwen2.5-coder:

```
Lee src/components/organisms/ContactSection/ContactSection.blueprint.json

Crea src/components/organisms/ContactSection/ContactSection.tsx:

'use client'

Props:
  email: string
  calendarUrl?: string
  headline?: string
  subtext?: string

Estado interno:
  copied: boolean (useState(false))

handleCopyEmail:
  navigator.clipboard.writeText(email)
    .then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000) })

Estructura JSX:
  <section data-atomic="organism" data-component="ContactSection" className="ex-contact-section">
    <h2 className="ex-contact-section__headline">
      {headline ?? t('contact.headline')}
    </h2>
    <p className="ex-contact-section__subtext">
      {subtext ?? t('contact.subtext')}
    </p>
    <div className="ex-contact-section__cta-group">
      {calendarUrl && (
        <Button
          variant="cta"
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('contact.cta.calendar')}
        </Button>
      )}
      <Button
        variant="text"
        className="ex-contact-section__email-copy"
        onClick={handleCopyEmail}
        aria-describedby="copy-feedback"
      >
        <Icon iconName="EmailOutlined" />
        {t('contact.cta.email')}
      </Button>
    </div>
    <span
      id="copy-feedback"
      role="status"
      aria-live="polite"
      className="ex-contact-section__copy-feedback"
    >
      {copied ? t('contact.email.copied') : ''}
    </span>
  </section>

Solo tokens M3 — var(--md-sys-color-*) — NUNCA hex
useTranslations('contact') de next-intl
TypeScript strict: 0 any
BEM exacto del blueprint
```

---

### Prompt tests (Aider + gemma2:9b):

```
Crea ContactSection.test.tsx:

describe('ContactSection', () => {
  it('CA-001: CTA Agendar reunión visible cuando calendarUrl presente')
  it('CA-001: CTA no renderiza sin calendarUrl')
  it('CA-002: click en Copiar email llama navigator.clipboard.writeText')
  it('CA-002: feedback "Copiado!" visible tras click')
  it('CA-002: feedback desaparece después de 2s')
  it('CA-004: aria-live=polite en feedback span')
  it('CA-005: data-atomic=organism en root')
  it('CA-005: data-component=ContactSection en root')
  it('axe: 0 violations con calendarUrl')
  it('axe: 0 violations sin calendarUrl')
})
```

---

```bash
git add src/components/organisms/ContactSection/
git commit -m "feat(bfl): EX-v2-ORG-006 forge — ContactSection GATE2 12/12"
```

## FASE III — LOCK (Claude Code)

```
LOCK EX-v2-ORG-006. VERSION_CERTIFICATE.json:
dependents: ["EX-v2-ATOM-001", "EX-v2-ATOM-004"]
depended_by: ["EX-v2-TMPL-001"]
```

---

📍 SPEC_ID: EX-v2-ORG-006 | Ola: 3 | Nivel: ORGANISM | clipboard API + aria-live
