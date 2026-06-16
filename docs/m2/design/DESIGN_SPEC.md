# DESIGN_SPEC.md — EXCALIBUR v2.0

## ÁTOMOS

### Button
Componente base para interacciones.

**Variantes:**
- `filled`: Fondo sólido color primary.
- `outlined`: Borde primary, fondo transparente.
- `text`: Sin borde ni fondo.
- `cta`: Variante destacada (Call to Action).

**Tokens M3:**
- `color`: `var(--md-sys-color-primary)`
- `on-color`: `var(--md-sys-color-on-primary)`
- `surface`: `var(--md-sys-color-surface)`
- `on-surface`: `var(--md-sys-color-on-surface)`

**Clases BEM:**
- `.ex-button`
- `.ex-button--filled`
- `.ex-button--outlined`
- `.ex-button--text`
- `.ex-button--cta`
- `.ex-button--loading`
- `.ex-button--disabled`

**Estados:**
- `default`
- `hover`
- `focus`
- `disabled`
- `loading`
