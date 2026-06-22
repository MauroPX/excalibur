# PROMPT SPRINT A — TEMA COMPLETO + TOGGLE DARK/LIGHT
# EXCALIBUR v2.0 | TITAN v7.0 | BFL Multi-IA
# SPEC_ID: EX-v2-THEME-002
# Ejecutar en: Claude Code (Terminal 4)

---

## CONTEXTO PARA TODOS LOS AGENTES

```
Producto:    EXCALIBUR v2.0 — MauricioGO Portafolio
Repo:        ~/Desktop/excalibur (rama: v2 o feat activa)
Stack:       Next.js 15 · React 19 · TypeScript 5 strict · MUI v6
Estado:      26/26 componentes LOCKED · LIVE en Vercel
Problema:    Tema en light mode genérico · sin toggle · sin paleta real
Objetivo:    Dark como default · toggle persistente · sistema M3 completo
```

---

## FASE I — BLUEPRINT [ARCHITECT = Claude Code]

### Instrucción para Claude Code:

Eres el ARCHITECT del proyecto EXCALIBUR v2.0.
Tienes que diseñar el sistema de tema antes de escribir una línea de código.

Antes de empezar, leer:
```bash
cat src/theme/index.ts
cat src/theme/ThemeRegistry.tsx
cat src/app/globals.css
cat docs/m2/design/DESIGN_TOKENS.json
```

Luego responder estas preguntas de Blueprint (GATE 1):

**BH-1 — Tokens:** ¿Los tokens del DESIGN_TOKENS.json coinciden con los que usan los componentes en globals.css? Lista las discrepancias.

**BH-2 — Paleta dark:** La paleta dark correcta es:
```
primary:              #C4BEFF  (purple característico)
onPrimary:            #2B1F8F
primaryContainer:     #423496
onPrimaryContainer:   #E3DFFF
surface:              #0D0F1A  (casi negro)
surfaceContainerLow:  #161929
surfaceContainer:     #1A1D2E
surfaceContainerHigh: #252839
surfaceContainerHighest: #2F3244
onSurface:            #E8E8F5
onSurfaceVariant:     #A3A6B3
outline:              #4A4A6A
cta:                  #F7AF12  (dorado — máximo contraste)
```
¿Hay algún componente LOCKED que use tokens NO presentes en esta lista? Verificar en src/components/.

**BH-3 — Toggle:** El toggle necesita:
- localStorage para persistir preferencia
- Script inline en layout.tsx para evitar flash de tema al cargar
- data-theme en el <html> para que globals.css lo lea
- useColorMode() hook exportado para el futuro ThemeToggle atom

**BH-4 — Impacto:** ¿Qué componentes existentes se ven afectados por el cambio de paleta? Lista los que usan colores hardcodeados (no tokens).

**BH-5 — Scope:** Este sprint modifica SOLO:
```
src/theme/tokens.ts        (NUEVO)
src/theme/index.ts         (UPDATE)
src/theme/ThemeRegistry.tsx (UPDATE)
src/app/globals.css        (UPDATE)
src/app/layout.tsx         (UPDATE mínimo — solo script anti-flash)
```
NO modifica ningún componente en src/components/.

**BH-6 — Verificación:** Confirmar que pnpm build pasa después de los cambios.

Cuando tengas las respuestas a BH-1..BH-6, generar el BLUEPRINT_SPEC.json:

```json
{
  "spec_id": "EX-v2-THEME-002",
  "component_name": "ThemeSystem",
  "atomic_level": "infra",
  "domain": "design-system",
  "files_modified": [],
  "files_created": [],
  "dark_tokens_count": 0,
  "light_tokens_count": 0,
  "toggle_mechanism": "",
  "anti_flash_strategy": "",
  "components_affected": [],
  "hardcoded_colors_found": [],
  "gate_1": "PENDING",
  "signed_by": "ARCHITECT",
  "date": ""
}
```

Completar el JSON con los valores reales y marcar gate_1: "PASS" solo si BH-1..BH-6 pasan todos.

---

## FASE II — FORGE [CRAFTSMAN = qwen2.5-coder:14b vía Aider]

### Instrucción para Aider + qwen2.5-coder:14b:

```bash
# En Terminal 5 (o Terminal libre):
ollama serve  # si no está corriendo

# Iniciar Aider con qwen2.5-coder
aider --model ollama/qwen2.5-coder:14b \
      src/theme/tokens.ts \
      src/theme/index.ts \
      src/theme/ThemeRegistry.tsx \
      src/app/globals.css \
      src/app/layout.tsx
```

### Prompt para Aider:

```
Eres el CRAFTSMAN del proyecto EXCALIBUR v2.0.
Implementa el sistema de tema completo según estas especificaciones exactas.

ARCHIVO 1: Crear src/theme/tokens.ts

Crear el archivo con dos objetos exportados: darkTokens y lightTokens.
Cada objeto tiene exactamente estos campos (usar los valores exactos):

darkTokens = {
  primary: '#C4BEFF',
  onPrimary: '#2B1F8F',
  primaryContainer: '#423496',
  onPrimaryContainer: '#E3DFFF',
  secondary: '#6DD9B0',
  onSecondary: '#003828',
  secondaryContainer: '#005140',
  onSecondaryContainer: '#89F6CC',
  tertiary: '#EAB4D4',
  onTertiary: '#47213A',
  tertiaryContainer: '#613851',
  onTertiaryContainer: '#FFD8EE',
  error: '#E87575',
  onError: '#690005',
  errorContainer: '#93000A',
  onErrorContainer: '#FFDAD6',
  surface: '#0D0F1A',
  surfaceContainerLowest: '#080A12',
  surfaceContainerLow: '#161929',
  surfaceContainer: '#1A1D2E',
  surfaceContainerHigh: '#252839',
  surfaceContainerHighest: '#2F3244',
  onSurface: '#E8E8F5',
  onSurfaceVariant: '#A3A6B3',
  outline: '#4A4A6A',
  outlineVariant: '#2E2E4A',
  inverseSurface: '#E8E8F5',
  inverseOnSurface: '#0D0F1A',
  inversePrimary: '#5B4CF5',
  scrim: 'rgba(0,0,0,0.5)',
  cta: '#F7AF12',
  onCta: '#1A0F00',
}

lightTokens = {
  primary: '#5B4CF5',
  onPrimary: '#FFFFFF',
  primaryContainer: '#E3DFFF',
  onPrimaryContainer: '#160066',
  secondary: '#006B54',
  onSecondary: '#FFFFFF',
  secondaryContainer: '#89F6CC',
  onSecondaryContainer: '#002117',
  tertiary: '#7D4E6E',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#FFD8EE',
  onTertiaryContainer: '#330B27',
  error: '#BA1A1A',
  onError: '#FFFFFF',
  errorContainer: '#FFDAD6',
  onErrorContainer: '#410002',
  surface: '#FDFCFF',
  surfaceContainerLowest: '#FFFFFF',
  surfaceContainerLow: '#F3F3F7',
  surfaceContainer: '#EDEEF2',
  surfaceContainerHigh: '#E7E8EC',
  surfaceContainerHighest: '#E1E2E6',
  onSurface: '#1A1C1E',
  onSurfaceVariant: '#44474F',
  outline: '#74777F',
  outlineVariant: '#C4C6D0',
  inverseSurface: '#2F3033',
  inverseOnSurface: '#F2F0F4',
  inversePrimary: '#C4BEFF',
  scrim: 'rgba(0,0,0,0.3)',
  cta: '#C4830A',
  onCta: '#FFFFFF',
}

ARCHIVO 2: Actualizar src/theme/index.ts

Reemplazar completamente con:
- Import de darkTokens y lightTokens desde './tokens'
- Una función buildTheme(mode: 'dark' | 'light'): Theme
- Type Scale M3 completa (15 roles tipográficos)
- export const darkTheme = buildTheme('dark')
- export const lightTheme = buildTheme('light')
- export default darkTheme
- NO cambiar el export del roboto font

ARCHIVO 3: Actualizar src/theme/ThemeRegistry.tsx

Reemplazar completamente con:
- createContext ColorModeContext con { toggle: () => void, mode: 'dark' | 'light' }
- export useColorMode hook
- useState mode con default 'dark'
- useEffect que lee localStorage 'excalibur-theme' al montar
  Si no hay localStorage → leer prefers-color-scheme del OS
- toggle() que cambia mode y escribe en localStorage
- useEffect que escribe document.documentElement.setAttribute('data-theme', mode)
  cada vez que mode cambia
- ThemeProvider con darkTheme o lightTheme según mode
- CssBaseline incluido

ARCHIVO 4: Actualizar src/app/globals.css

Reemplazar los tokens actuales con los dark tokens completos en :root
Agregar selector [data-theme="light"] con los light tokens completos
Mantener el reset CSS y .sr-only al final

Las variables CSS deben coincidir exactamente con los nombres que ya usan
los componentes en src/components/ (var(--md-sys-color-primary), etc.)
Verificar que estos nombres coincidan: primary, on-primary, primary-container,
on-primary-container, secondary, on-secondary, secondary-container,
on-secondary-container, tertiary, on-tertiary, tertiary-container,
on-tertiary-container, error, on-error, error-container, on-error-container,
surface, surface-container-lowest, surface-container-low, surface-container,
surface-container-high, surface-container-highest, on-surface,
on-surface-variant, outline, outline-variant, inverse-surface,
inverse-on-surface, inverse-primary, scrim

ARCHIVO 5: Actualizar src/app/layout.tsx

Agregar ANTES del <body> este script inline para evitar flash de tema:
```
<script dangerouslySetInnerHTML={{__html: `(function(){
  var t=localStorage.getItem('excalibur-theme');
  if(!t){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';}
  document.documentElement.setAttribute('data-theme',t);
})();`}} />
```
Agregar suppressHydrationWarning en el tag <html>
No cambiar nada más del layout.

REGLAS OBLIGATORIAS:
- Zero any en TypeScript
- Zero hex hardcoded fuera de tokens.ts
- Todos los archivos con 'use client' donde se necesite
- ThemeRegistry es 'use client' — ThemeProvider necesita contexto de browser
- tokens.ts NO tiene 'use client' — es solo datos
- index.ts NO tiene 'use client' — createTheme es isomorfo
```

---

## FASE III — BLIND REVIEW [INQUISITOR = deepseek-r1:14b]

### Instrucción para Ollama + deepseek-r1:14b:

```bash
# En terminal libre, después de que Aider termine:
cat src/theme/tokens.ts \
    src/theme/index.ts \
    src/theme/ThemeRegistry.tsx \
    src/app/globals.css \
    src/app/layout.tsx | \
ollama run deepseek-r1:14b "$(cat << 'PROMPT'
Eres el INQUISITOR del proyecto EXCALIBUR v2.0.
Audita los archivos de tema en modo BLIND REVIEW.
No sabes quién los escribió. Tu lealtad es solo al checklist.

Verifica CADA item. Responde con PASS o FAIL y la evidencia:

TH-01: ¿tokens.ts exporta darkTokens Y lightTokens con exactamente 30+ campos cada uno?
TH-02: ¿index.ts tiene buildTheme(mode) que genera el tema correcto para cada mode?
TH-03: ¿ThemeRegistry.tsx tiene useColorMode() hook exportado?
TH-04: ¿ThemeRegistry.tsx lee localStorage 'excalibur-theme' en useEffect?
TH-05: ¿ThemeRegistry.tsx tiene fallback a prefers-color-scheme si no hay localStorage?
TH-06: ¿ThemeRegistry.tsx escribe data-theme en document.documentElement?
TH-07: ¿globals.css tiene :root con dark tokens Y [data-theme="light"] con light tokens?
TH-08: ¿globals.css tiene TODOS los tokens que usan los componentes (--md-sys-color-*)?
TH-09: ¿layout.tsx tiene script anti-flash antes del body?
TH-10: ¿layout.tsx tiene suppressHydrationWarning en html?
TH-11: ¿Zero hex hardcoded fuera de tokens.ts?
TH-12: ¿Zero 'any' en TypeScript?

Al final escribe exactamente:
SPRINT_A_REVIEW: PASS (si todos son PASS)
SPRINT_A_REVIEW: FAIL — [lista de items que fallaron] (si alguno falla)
PROMPT
)"
```

---

## FASE IV — VERIFICACIÓN TÉCNICA [CRAFTSMAN = Claude Code]

### En Claude Code — después del BLIND REVIEW:

```bash
# Verificar TypeScript
pnpm type-check

# Verificar build
pnpm build

# Verificar que los tokens están disponibles en el browser
# (visual — abrir localhost:3000 y verificar que el fondo es oscuro)
pnpm dev
```

---

## STATUS DE VALIDACIÓN — SPRINT A

Ejecutar al cerrar el sprint:

```bash
cat > /tmp/validate_sprint_a.sh << 'EOF'
#!/bin/bash
echo "=== VALIDACIÓN SPRINT A — TEMA ==="
PASS=0; FAIL=0

check() {
  if eval "$2" > /dev/null 2>&1; then
    echo "✅ $1"; ((PASS++))
  else
    echo "❌ $1"; ((FAIL++))
  fi
}

check "tokens.ts existe" "test -f src/theme/tokens.ts"
check "darkTokens exportado" "grep -q 'export const darkTokens' src/theme/tokens.ts"
check "lightTokens exportado" "grep -q 'export const lightTokens' src/theme/tokens.ts"
check "primary dark es #C4BEFF" "grep -q 'C4BEFF' src/theme/tokens.ts"
check "surface dark es #0D0F1A" "grep -q '0D0F1A' src/theme/tokens.ts"
check "buildTheme en index.ts" "grep -q 'buildTheme' src/theme/index.ts"
check "darkTheme exportado" "grep -q 'export const darkTheme' src/theme/index.ts"
check "lightTheme exportado" "grep -q 'export const lightTheme' src/theme/index.ts"
check "useColorMode exportado" "grep -q 'export.*useColorMode' src/theme/ThemeRegistry.tsx"
check "localStorage en ThemeRegistry" "grep -q 'localStorage' src/theme/ThemeRegistry.tsx"
check "data-theme en ThemeRegistry" "grep -q 'data-theme' src/theme/ThemeRegistry.tsx"
check "globals.css dark tokens" "grep -q '0D0F1A' src/app/globals.css"
check "globals.css light selector" "grep -q 'data-theme.*light' src/app/globals.css"
check "script anti-flash en layout" "grep -q 'excalibur-theme' src/app/layout.tsx"
check "suppressHydrationWarning" "grep -q 'suppressHydrationWarning' src/app/layout.tsx"
check "zero any en tokens.ts" "! grep -q ': any' src/theme/tokens.ts"
check "zero any en index.ts" "! grep -q ': any' src/theme/index.ts"
check "zero hex en ThemeRegistry" "! grep -qE '#[0-9A-Fa-f]{6}' src/theme/ThemeRegistry.tsx"
check "pnpm type-check pasa" "pnpm type-check 2>/dev/null"
check "pnpm build pasa" "pnpm build 2>/dev/null"

echo ""
echo "RESULTADO: $PASS/20 checks PASS · $FAIL FAIL"
if [ $FAIL -eq 0 ]; then
  echo "SPRINT_A: ✅ SEALED — listo para merge"
else
  echo "SPRINT_A: ❌ BLOCKED — corregir $FAIL items antes del merge"
fi
EOF
chmod +x /tmp/validate_sprint_a.sh
bash /tmp/validate_sprint_a.sh
```

**Criterio de cierre:** 20/20 PASS → merge a v2 → siguiente sprint.

---

## COMMIT AL CERRAR

```bash
git add src/theme/ src/app/globals.css src/app/layout.tsx
git commit -m "feat(theme): EX-v2-THEME-002 sistema dark/light completo

- tokens.ts: darkTokens + lightTokens con 30+ variables M3
- index.ts: buildTheme() con Type Scale completa
- ThemeRegistry: toggle persistente con localStorage + data-theme
- globals.css: dark por defecto + [data-theme=light] override
- layout.tsx: script anti-flash + suppressHydrationWarning

Dark palette: #C4BEFF primary · #0D0F1A surface · #F7AF12 CTA
Light palette: #5B4CF5 primary · #FDFCFF surface · #C4830A CTA
SPRINT_A: SEALED ✅"

git push origin v2
```
