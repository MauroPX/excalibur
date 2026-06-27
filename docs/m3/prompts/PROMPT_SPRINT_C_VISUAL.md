# PROMPT SPRINT C — VISUAL UX/UI + STORYBOOK
# EXCALIBUR v2.0 | TITAN v7.0 | BFL Multi-IA
# SPEC_ID: EX-v2-UX-001
# Ejecutar: después de SPRINT B sealed

---

## CONTEXTO

```
Objetivo:    Elevar el nivel visual y completar las 6 stories faltantes
Mejoras:     RadarChart real · ThemeToggle atom · Elevation en cards
             ContactSection con inverseSurface · Stories 6 organismos
Faltantes:   CasesSection · ContactSection · NavSystem · InquisitorHUD
             TitanSection · StackSection (sin stories)
```

---

## FASE I — BLUEPRINT [ARCHITECT = Claude Code]

```
Antes de ejecutar, leer:
cat src/components/organisms/StackSection/StackSection.tsx
cat src/components/organisms/ContactSection/ContactSection.tsx
cat src/components/organisms/TitanRAGAgent/TitanRAGAgent.stories.tsx
```

Verificar checks:

CC-01: ¿Recharts está instalado? → grep -r 'recharts' package.json
CC-02: ¿ThemeToggle no existe aún? → ls src/components/atoms/ThemeToggle/ 2>/dev/null
CC-03: ¿useColorMode está exportado desde ThemeRegistry? → grep 'useColorMode' src/theme/ThemeRegistry.tsx
CC-04: ¿Las stories existentes usan @storybook/nextjs-vite? → grep 'nextjs-vite' src/components/organisms/Hero/Hero.stories.tsx
CC-05: ¿StackSection importa SkillBar? → grep 'SkillBar' src/components/organisms/StackSection/StackSection.tsx

Si Recharts no está instalado:
```bash
pnpm add recharts
```

Generar BLUEPRINT_SPEC:
```json
{
  "spec_id": "EX-v2-UX-001",
  "components_new": ["ThemeToggle"],
  "components_updated": ["StackSection"],
  "stories_new": [
    "CasesSection.stories.tsx",
    "ContactSection.stories.tsx",
    "NavSystem.stories.tsx",
    "InquisitorHUD.stories.tsx",
    "TitanSection.stories.tsx",
    "StackSection.stories.tsx"
  ],
  "recharts_needed": true,
  "gate_1": "PASS",
  "signed_by": "ARCHITECT"
}
```

---

## FASE II — FORGE [CRAFTSMAN = qwen2.5-coder:14b vía Aider]

### Sub-tarea C1: ThemeToggle atom

```bash
aider --model ollama/qwen2.5-coder:14b \
      src/components/atoms/ThemeToggle/ThemeToggle.tsx \
      src/components/atoms/ThemeToggle/index.ts \
      src/components/atoms/ThemeToggle/ThemeToggle.test.tsx \
      src/components/atoms/ThemeToggle/ThemeToggle.stories.tsx
```

Prompt:
```
Crear el átomo ThemeToggle para EXCALIBUR v2.0.

ThemeToggle.tsx:
'use client'
- Importar useColorMode desde '@/theme/ThemeRegistry'
- Importar IconButton desde '@mui/material/IconButton'
- Props: ninguna (usa el contexto)
- data-atomic="atom" data-component="ThemeToggle"
- className="ex-theme-toggle"
- aria-label dinámico: 'Cambiar a modo claro' o 'Cambiar a modo oscuro'
- Mostrar un ícono SVG de sol (dark mode activo) o luna (light mode activo)
- Usar var(--md-sys-color-on-surface) para el color del ícono
- Usar var(--md-sys-color-surface-container) para el fondo hover

Los íconos deben ser SVG inline (no usar @mui/icons-material):
Sol: <svg viewBox="0 0 24 24" width="20" height="20">
     <circle cx="12" cy="12" r="5" fill="currentColor"/>
     [8 líneas de rayos cortos desde el centro]</svg>
Luna: <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/></svg>

ThemeToggle.test.tsx:
- Mockear useColorMode
- Test: renderiza sin errores
- Test: axe 0 violations
- Test: aria-label correcto según mode

ThemeToggle.stories.tsx:
- import desde '@storybook/nextjs-vite'
- Story Dark (default)
- Story Light
- parameters.titan.spec_id = 'EX-v2-ATOM-007'
```

### Sub-tarea C2: RadarChart en StackSection

```bash
aider --model ollama/qwen2.5-coder:14b \
      src/components/organisms/StackSection/StackSection.tsx
```

Prompt:
```
Actualizar StackSection.tsx para reemplazar el placeholder con un RadarChart real.

Importar de recharts:
import { RadarChart, Radar, PolarGrid, PolarAngleAxis,
         PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts'

El RadarChart debe:
- Usar var(--md-sys-color-primary) para el fill del Radar con opacity 0.3
- Usar var(--md-sys-color-primary) para el stroke del Radar
- Mostrar las 5 categorías en los ángulos: frontend, backend, design, process, ai
- Agrupar las skills por categoría y calcular el promedio
- Mantener la tabla sr-only que ya existe (no eliminarla)
- Remover el Box aria-hidden con el texto placeholder
- Agregar aria-hidden="true" al ResponsiveContainer del RadarChart
- El breakdown por categoría debajo del radar permanece igual

Los datos para el radar:
const radarData = categories.map(cat => ({
  category: cat,
  level: Math.round(
    skills.filter(s => s.category === cat)
          .reduce((sum, s) => sum + s.level, 0) /
    Math.max(skills.filter(s => s.category === cat).length, 1)
  )
}))

No cambiar la interfaz StackSkill ni StackSectionProps.
No cambiar el data-atomic ni data-component.
```

### Sub-tarea C3: 6 Stories de organismos

```bash
aider --model ollama/qwen2.5:14b \
      src/components/organisms/CasesSection/CasesSection.stories.tsx \
      src/components/organisms/ContactSection/ContactSection.stories.tsx \
      src/components/organisms/NavSystem/NavSystem.stories.tsx \
      src/components/organisms/InquisitorHUD/InquisitorHUD.stories.tsx \
      src/components/organisms/TitanSection/TitanSection.stories.tsx \
      src/components/organisms/StackSection/StackSection.stories.tsx
```

Prompt:
```
Crear las 6 stories faltantes para EXCALIBUR v2.0.
Reglas absolutas para todas:
- import type { Meta, StoryObj } from '@storybook/nextjs-vite'
- parameters.backgrounds.default = 'dark'
- parameters.a11y.config.rules con color-contrast enabled
- parameters.titan con spec_id del componente
- Datos reales del portafolio (no lorem ipsum ni "test data")

CasesSection.stories.tsx:
- spec_id: 'EX-v2-ORG-003'
- Story Default: 3 proyectos reales (fdn, solidaria, bbva)
- Story Empty: projects=[] para mostrar empty state
- Story Filtered: con filtros symptomTags activos

ContactSection.stories.tsx:
- spec_id: 'EX-v2-ORG-006'
- Story Default: canal linkedin por defecto
- Story Email: canal email activo
- No incluir story de "enviado" (es estado interno)

NavSystem.stories.tsx:
- spec_id: 'EX-v2-ORG-002'
- Story TabA: síntomas visibles
- Story TabB: roles visibles
- symptomCards: los 4 síntomas reales del portafolio
- roleCards: los 4 roles reales

InquisitorHUD.stories.tsx:
- spec_id: 'EX-v2-A11Y-001'
- Story Enabled: enabled=true (muestra el panel al hacer Alt+A)
- Story Disabled: enabled=false (no renderiza nada)
- NOTA: el panel es fixed — añadir decorator con Box de altura mínima

TitanSection.stories.tsx:
- spec_id: 'EX-v2-ORG-004'
- Story Default: 6 módulos M0-M5 con datos reales
- version='v7.0'
- Los datos deben reflejar los comandos reales de cada momentum

StackSection.stories.tsx:
- spec_id: 'EX-v2-ORG-005'
- Story Default: skills reales del portafolio (React, TypeScript, MUI, etc)
- Story AIFocused: skills con categoría 'ai' al frente
```

---

## FASE III — BLIND REVIEW [INQUISITOR = deepseek-r1:14b]

```bash
find src/components/atoms/ThemeToggle \
     src/components/organisms -name "*.stories.tsx" \
     src/components/organisms/StackSection/StackSection.tsx | \
xargs cat | \
ollama run deepseek-r1:14b "$(cat << 'PROMPT'
INQUISITOR BLIND REVIEW — Sprint C EXCALIBUR v2.0

CC-01: ¿ThemeToggle tiene data-atomic='atom' y data-component='ThemeToggle'?
CC-02: ¿ThemeToggle tiene aria-label dinámico según el mode?
CC-03: ¿ThemeToggle NO importa de @mui/icons-material?
CC-04: ¿ThemeToggle usa useColorMode() del contexto?
CC-05: ¿StackSection usa ResponsiveContainer de recharts?
CC-06: ¿StackSection mantiene la tabla sr-only con aria-label?
CC-07: ¿RadarChart tiene aria-hidden='true'?
CC-08: ¿Las 6 nuevas stories importan de @storybook/nextjs-vite?
CC-09: ¿Las 6 stories tienen parameters.backgrounds.default='dark'?
CC-10: ¿Las 6 stories tienen parameters.titan con spec_id?
CC-11: ¿Las 6 stories tienen parameters.a11y.config?
CC-12: ¿Ninguna story usa datos inventados (lorem ipsum, test text)?
CC-13: ¿Ninguna story usa @storybook/react?
CC-14: ¿ThemeToggle.test.tsx tiene axe() llamado?

SPRINT_C_REVIEW: PASS o FAIL — [items]
PROMPT
)"
```

---

## STATUS DE VALIDACIÓN — SPRINT C

```bash
cat > /tmp/validate_sprint_c.sh << 'EOF'
#!/bin/bash
echo "=== VALIDACIÓN SPRINT C — VISUAL + STORIES ==="
PASS=0; FAIL=0

check() {
  if eval "$2" > /dev/null 2>&1; then
    echo "✅ $1"; ((PASS++))
  else
    echo "❌ $1"; ((FAIL++))
  fi
}

# ThemeToggle
TT="src/components/atoms/ThemeToggle"
check "ThemeToggle.tsx existe" "test -f $TT/ThemeToggle.tsx"
check "ThemeToggle.test.tsx existe" "test -f $TT/ThemeToggle.test.tsx"
check "ThemeToggle.stories.tsx existe" "test -f $TT/ThemeToggle.stories.tsx"
check "ThemeToggle index.ts existe" "test -f $TT/index.ts"
check "data-atomic atom" "grep -q 'data-atomic.*atom' $TT/ThemeToggle.tsx"
check "useColorMode importado" "grep -q 'useColorMode' $TT/ThemeToggle.tsx"
check "aria-label dinámico" "grep -q 'aria-label' $TT/ThemeToggle.tsx"

# StackSection RadarChart
SS="src/components/organisms/StackSection/StackSection.tsx"
check "recharts importado" "grep -q 'recharts' $SS"
check "ResponsiveContainer usado" "grep -q 'ResponsiveContainer' $SS"
check "tabla sr-only mantenida" "grep -q 'sr-only' $SS"
check "aria-hidden en radar" "grep -q 'aria-hidden' $SS"

# 6 stories de organismos
ORGS="src/components/organisms"
for comp in CasesSection ContactSection NavSystem InquisitorHUD TitanSection StackSection; do
  check "$comp.stories.tsx existe" "test -f $ORGS/$comp/$comp.stories.tsx"
  check "$comp usa nextjs-vite" "grep -q 'nextjs-vite' $ORGS/$comp/$comp.stories.tsx"
  check "$comp backgrounds dark" "grep -q 'dark' $ORGS/$comp/$comp.stories.tsx"
  check "$comp parameters titan" "grep -q 'titan' $ORGS/$comp/$comp.stories.tsx"
done

# Tests
check "pnpm test pasa" "pnpm test 2>/dev/null"
check "pnpm build pasa" "pnpm build 2>/dev/null"

echo ""
echo "RESULTADO: $PASS/$((PASS+FAIL)) PASS · $FAIL FAIL"
if [ $FAIL -eq 0 ]; then
  echo "SPRINT_C: ✅ SEALED"
else
  echo "SPRINT_C: ❌ BLOCKED — $FAIL items"
fi
EOF
chmod +x /tmp/validate_sprint_c.sh
bash /tmp/validate_sprint_c.sh
```

---

## COMMIT AL CERRAR

```bash
git add src/components/atoms/ThemeToggle/ \
        src/components/organisms/StackSection/StackSection.tsx \
        src/components/organisms/CasesSection/CasesSection.stories.tsx \
        src/components/organisms/ContactSection/ContactSection.stories.tsx \
        src/components/organisms/NavSystem/NavSystem.stories.tsx \
        src/components/organisms/InquisitorHUD/InquisitorHUD.stories.tsx \
        src/components/organisms/TitanSection/TitanSection.stories.tsx \
        src/components/organisms/StackSection/StackSection.stories.tsx

git commit -m "feat(ux): EX-v2-UX-001 ThemeToggle + RadarChart + 6 stories

- ThemeToggle atom: dark/light switch con useColorMode
- StackSection: RadarChart real con Recharts + tabla sr-only
- 6 stories nuevas: CasesSection/Contact/NavSystem/Inquisitor/Titan/Stack
- Todos con @storybook/nextjs-vite + parameters.titan + a11y
SPRINT_C: SEALED ✅"

git push origin v2
```
