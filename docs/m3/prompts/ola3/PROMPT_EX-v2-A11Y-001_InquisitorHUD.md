# PROMPT BFL — EX-v2-A11Y-001 — InquisitorHUD
# Ola 3 | Rama: feat/v2-ola3-organisms | Nivel: ORGANISM
# Principio: Visibilidad del Estado del Sistema (a11y en tiempo real)
# 'use client' — DOM inspection + teclado
# Fresh build — el legacy fue eliminado en cleanup 2026-06-18
# Usar en: Aider + qwen2.5-coder:14b (Forge) → Claude Code (Lock)

---

## CONTEXTO

El `InquisitorHUD` original era un archivo en raíz `src/components/InquisitorHUD.tsx` que fue eliminado durante el cleanup de la sesión anterior (no estaba siendo importado por nada). Este es un fresh build desde el blueprint.

---

## FASE I — BLUEPRINT ✅ COMPLETADO POR CLAUDE CODE

Blueprint en: `src/components/organisms/InquisitorHUD/InquisitorHUD.blueprint.json`
Gate 1 (BH-1..BH-6): **PASS**

---

## FASE II — FORGE (Aider + qwen2.5-coder:14b)

```
aider --model ollama/qwen2.5-coder:14b \
  src/components/organisms/InquisitorHUD/InquisitorHUD.tsx \
  src/components/organisms/InquisitorHUD/index.ts
```

### Prompt para qwen2.5-coder:

```
Lee src/components/organisms/InquisitorHUD/InquisitorHUD.blueprint.json

Crea src/components/organisms/InquisitorHUD/InquisitorHUD.tsx:

'use client'

Props:
  enabled?: boolean  // fuerza visibilidad (para tests/storybook)

Estado interno:
  open: boolean (useState(props.enabled ?? false))
  atomicItems: Array<{ atomic: string; component: string; element: string }> (useState([]))
  missingAria: number (useState(0))

Condición de render:
  const isDev = process.env.NODE_ENV === 'development'
  const hasFlag = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('inquisitor') === '1'
  if (!isDev && !hasFlag && !enabled) return null

Scan del DOM (useEffect cuando open cambia a true):
  const nodes = document.querySelectorAll('[data-atomic]')
  const items = Array.from(nodes).map(el => ({
    atomic: el.getAttribute('data-atomic') ?? '',
    component: el.getAttribute('data-component') ?? '',
    element: el.tagName.toLowerCase(),
  }))
  const noAria = Array.from(nodes).filter(el =>
    !el.getAttribute('aria-label') && !el.getAttribute('role') &&
    !['div','span','section','article'].includes(el.tagName.toLowerCase())
  ).length
  setAtomicItems(items)
  setMissingAria(noAria)

Atajo de teclado (useEffect):
  document.addEventListener('keydown', e => {
    if (e.altKey && e.key === 'a') setOpen(prev => !prev)
  })
  return () => document.removeEventListener(...)

Estructura JSX:
  <>
    {/* Botón flotante toggle */}
    <Button
      variant="filled"
      onClick={() => setOpen(prev => !prev)}
      aria-label="Toggle InquisitorHUD (Alt+A)"
      aria-expanded={open}
      style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 9999 }}
    >
      <Icon iconName="BugReportOutlined" />
      {missingAria > 0 && <Badge content={missingAria} />}
    </Button>

    {/* Panel principal */}
    {open && (
      <div
        data-atomic="organism"
        data-component="InquisitorHUD"
        className="ex-inquisitor-hud"
        role="dialog"
        aria-modal="false"
        aria-label="InquisitorHUD — A11Y Inspector"
        style={{ position: 'fixed', bottom: 72, right: 16, zIndex: 9998,
                 width: 320, maxHeight: '60vh', overflow: 'auto' }}
      >
        <h2 className="ex-inquisitor-hud__section">
          Atomic Tree ({atomicItems.length})
        </h2>
        <ul className="ex-inquisitor-hud__section">
          {atomicItems.map((item, i) => (
            <li key={i} className="ex-inquisitor-hud__tree-item">
              <Badge content={item.atomic} />
              <span>{item.component} &lt;{item.element}&gt;</span>
            </li>
          ))}
        </ul>
        {missingAria > 0 && (
          <div className="ex-inquisitor-hud__section ex-inquisitor-hud__violation-row">
            <Badge content={missingAria} color="error" />
            <span>elementos sin aria-label/role</span>
          </div>
        )}
      </div>
    )}
  </>

Solo tokens M3 en sx para estilos no posicionales — var(--md-sys-color-*)
TypeScript strict: 0 any
```

---

### Prompt tests (Aider + gemma2:9b):

```
Crea InquisitorHUD.test.tsx:

describe('InquisitorHUD', () => {
  describe('condición de render', () => {
    it('CA-005: no renderiza en production sin flag ni enabled')
    it('CA-005: renderiza con enabled=true aunque no sea dev')
  })
  describe('toggle', () => {
    it('CA-001: botón toggle siempre visible cuando habilitado')
    it('CA-001: panel abre al click en toggle')
    it('CA-001: panel cierra al segundo click en toggle')
  })
  describe('Alt+A keyboard', () => {
    it('CA-001: Alt+A abre el panel')
    it('CA-001: Alt+A cierra el panel cuando ya está abierto')
  })
  describe('layout', () => {
    it('CA-006: panel tiene position:fixed')
    it('CA-007: data-component=InquisitorHUD en root del panel')
  })
  it('CA-008: axe 0 violations en el propio HUD')
})
```

---

```bash
git add src/components/organisms/InquisitorHUD/
git commit -m "feat(bfl): EX-v2-A11Y-001 forge — InquisitorHUD GATE2 12/12"
```

## FASE III — LOCK (Claude Code)

```
LOCK EX-v2-A11Y-001. VERSION_CERTIFICATE.json:
dependents: ["EX-v2-ATOM-001", "EX-v2-ATOM-003"]
depended_by: ["EX-v2-TMPL-001"]
notas: "Fresh build — legacy InquisitorHUD.tsx eliminado en cleanup 2026-06-18"
```

---

📍 SPEC_ID: EX-v2-A11Y-001 | Ola: 3 | Nivel: ORGANISM | DOM inspector + teclado Alt+A
