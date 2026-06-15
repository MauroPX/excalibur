# agent_rules.md — EXCALIBUR v2.0
# Reglas obligatorias para TODOS los agentes de IA
# Se inyecta al inicio de cada prompt del workflow.sh

---

## REGLAS GENERALES

1. Lees PROJECT_CONTEXT.md antes de generar cualquier cosa.
2. Solo generas lo que se te pide en tu rol — ni más ni menos.
3. Si algo del SPEC es ambiguo, preguntas antes de asumir.
4. Tu output va directo a archivos del proyecto — debe ser código limpio.
5. Nunca generas código que viole las convenciones de PROJECT_CONTEXT.md.

---

## REGLAS NEXT.JS 15 (breaking changes a tener en cuenta)

```typescript
// ✅ App Router — NO Pages Router
// ✅ Server Components por defecto
// ✅ 'use client' solo donde hay estado o eventos del browser
// ✅ Async en Server Components
// ❌ NO useRouter de next/router — usar next/navigation
// ❌ NO getServerSideProps ni getStaticProps — usar fetch en RSC
// ❌ NO next/head — usar metadata export en layout.tsx
```

---

## REGLAS MUI v6 CON REACT 19

```typescript
// ✅ import Button from '@mui/material/Button'  (tree-shaking)
// ✅ import { styled } from '@mui/material/styles'
// ✅ sx prop para estilos inline
// ❌ NO import { Button } from '@mui/material'  (barrel — rompe tree-shaking)
// ❌ NO makeStyles (deprecated en MUI v6)
// ❌ NO withStyles (deprecated en MUI v6)

// ✅ Tokens M3 siempre:
sx={{ color: 'var(--md-sys-color-primary)' }}
// ❌ Nunca hex:
sx={{ color: '#C4BEFF' }}
```

---

## REGLAS TYPESCRIPT STRICT

```typescript
// ✅ Props siempre tipadas con interface o type
// ✅ 0 any — usar unknown si no se conoce el tipo
// ✅ Return types explícitos en funciones públicas
// ✅ Generics cuando aplica
// ❌ NO as any
// ❌ NO @ts-ignore sin justificación documentada
// ❌ NO type assertions innecesarias (as SomeType)
```

---

## REGLAS DE TESTING (Vitest + Testing Library + jest-axe)

```typescript
// ✅ describe por variante o estado del componente
// ✅ axe() en CADA render — no solo en el happy path
// ✅ Un test por criterio de aceptación del SPEC_DOCUMENT
// ✅ Datos reales del portafolio en los tests (no "test text")
// ✅ userEvent sobre fireEvent cuando sea posible
// ❌ NO snapshots — tests de comportamiento únicamente
// ❌ NO test.only en el commit final

// Ejemplo de test con axe:
import { axe, toHaveNoViolations } from 'jest-axe'
expect.extend(toHaveNoViolations)

it('no tiene violaciones de accesibilidad', async () => {
  const { container } = render(<Button variant="filled">Continuar</Button>)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

---

## REGLAS DE STORYBOOK 8

```typescript
// ✅ Una story por estado del componente (no solo Default)
// ✅ Dark theme por defecto en parameters
// ✅ parameters.a11y activo siempre
// ✅ parameters.titan con el SPEC_ID
// ✅ Canvas contextual (el componente en un contexto real, no flotando en negro)
// ❌ NO storyName deprecated — usar export const name

// Estructura mínima de una story:
export default {
  title: 'Átomos/Button',
  component: Button,
  parameters: {
    backgrounds: { default: 'dark' },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-ATOM-001', momentum: 'M3-Ola1' }
  }
}
```

---

## REGLAS DE i18n (next-intl)

```typescript
// ✅ Usar useTranslations() en Client Components
// ✅ Usar getTranslations() en Server Components
// ✅ Todas las keys en messages/en.json Y messages/es.json
// ❌ NO strings hardcodeados en JSX
// ❌ NO texto en español dentro del código TypeScript

// Ejemplo correcto:
const t = useTranslations('hero')
return <h1>{t('result')}</h1>

// Ejemplo incorrecto:
return <h1>Construyo sistemas que el equipo opera sin mí</h1>
```

---

## REGLAS BEM (según DESIGN_SPEC)

```scss
// ✅ .bloque__elemento--modificador
// ✅ Máximo 3 niveles de anidación
// ✅ BEM exacto al DESIGN_SPEC del componente
// ❌ NO inventar clases BEM no documentadas en DESIGN_SPEC
// ❌ NO usar id="..." para estilos
// ❌ NO inline styles excepto vía sx prop de MUI

// Ejemplos correctos:
.button {}
.button--filled {}
.button--loading {}
.button__icon {}
.button__spinner {}
```

---

## FORMATO DE OUTPUT ESPERADO

### Para IMPLEMENTADOR (qwen2.5-coder:14b):
```
Genera solo el código. Sin explicaciones largas.
Archivos a generar: [Componente].tsx + index.ts
Formato: TypeScript puro, sin comentarios de ejemplo.
```

### Para TESTER (gemma2:9b):
```
Genera solo el archivo de tests.
Archivo: [Componente].test.tsx
Un describe por estado/variante.
axe() en cada test.
```

### Para DOCUMENTADOR (qwen2.5:14b):
```
Genera solo el archivo de stories.
Archivo: [Componente].stories.tsx
Una story por estado del Blueprint.
```

### Para REVISOR (deepseek-r1:14b o Claude):
```
Lista numerada de issues.
Formato: [CRITICO/MEDIO/BAJO] — descripción del problema — archivo:línea
Si no hay issues: "✅ Sin issues encontrados"
```
