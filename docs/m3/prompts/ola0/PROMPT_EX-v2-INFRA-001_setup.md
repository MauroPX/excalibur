# PROMPT BFL — EX-v2-INFRA-001 — Setup base
# Ola 0 | Rama: feat/v2-setup | Nivel: N/A (infraestructura)
# Usar en: Claude Code (terminal) | Copiar y pegar el prompt de cada fase

---

## CONTEXTO PREVIO AL INICIO

Antes de ejecutar cada prompt, verificar en terminal:
```bash
git checkout v2 && git pull origin v2
git checkout -b feat/v2-setup
git branch  # verificar que estas en feat/v2-setup
claude      # iniciar Claude Code (lee CLAUDE.md automaticamente)
```

---

## FASE I — BLUEPRINT

### VS Code: abrir estos archivos de referencia:
- docs/m2/spec/SPEC_DOCUMENT.md (buscar EX-v2-INFRA-001)
- docs/m2/design/DESIGN_TOKENS.json
- docs/m2/design/DESIGN_SPEC.md

### Claude Code — copiar y pegar este prompt:
```
Lee docs/m2/spec/SPEC_DOCUMENT.md seccion EX-v2-INFRA-001
Lee docs/m0/adr/ADR-001-stack.md
Lee docs/m0/adr/ADR-002-design-system.md

Genera el plan de setup para Next.js 15 + MUI v6 en la rama v2.
El BLUEPRINT para infraestructura no es un JSON de componente
sino un SETUP_PLAN.md con los pasos exactos en orden.
```

### Despues del Blueprint:
```bash
git add .
git commit -m "feat(bfl): EX-v2-INFRA-001 blueprint — GATE1 approved"
```

---

## FASE II — FORGE

### Claude Code — copiar y pegar este prompt:
```
Ejecuta el setup de la rama v2:

1. Limpiar public/original/ y scripts/ del HTML estatico
2. Actualizar package.json:
   - next: 15.x
   - react: 19.x
   - @mui/material: ^6.4.0
   - @mui/system: ^6.4.0
   - @emotion/react: ^11.13.0
   - @emotion/styled: ^11.13.0
   - next-intl: ^3.x
   - Remover: tailwindcss (si esta)
3. Crear estructura src/:
   src/app/ | src/components/{atoms,molecules,organisms,templates}/
   src/theme/ | src/i18n/messages/ | src/lib/
4. Configurar tsconfig.json con strict: true
5. Crear .env.local.example con todas las variables
6. Crear layout.tsx base con MUI ThemeProvider placeholder
7. Crear page.tsx base (sin iframe)
8. Verificar: pnpm dev corre sin errores
```

### Verificacion en paralelo (terminal separada en VS Code):
```bash
pnpm type-check          # 0 errores TypeScript
pnpm lint                # 0 errores ESLint
pnpm test                # todos los tests pasan
pnpm build               # build exitoso
```

### Commit del Forge:
```bash
git add .
git commit -m "feat(bfl): EX-v2-INFRA-001 forge — GATE2 12/12"
```

---

## FASE III — LOCK

### Claude Code — copiar y pegar este prompt:
```
Ejecuta el LOCK para EX-v2-INFRA-001 — Setup base.

Commit el setup completo. No hay VERSION_CERTIFICATE para infraestructura. Generar SPRINT_INFRA_REPORT.md con el estado.

Genera:
1. VERSION_CERTIFICATE.json con los valores reales del build
2. GSD_TASK_CARD_Setup_base_[fecha].md en docs/m3/certificates/
3. Actualizaciones para TRACEABILITY_MATRIX y COMPONENT_REGISTRY

Verifica LH-1 a LH-4:
LH-1: VERSION_CERTIFICATE no afirma mas de lo que el codigo implementa
LH-2: wcag_criteria son los verificados realmente
LH-3: dependents en COMPONENT_REGISTRY exactos
LH-4: GSD Task Card describe el artefacto real
```

### Commit del Lock:
```bash
git add .
git commit -m "feat(bfl): EX-v2-INFRA-001 LOCK — Setup base v1.0.0"
```

### Abrir PR:
```bash
gh pr create \
  --base v2 \
  --head feat/v2-setup \
  --title "[LOCK] EX-v2-INFRA-001 — Setup base v1.0.0" \
  --body "SPEC_ID: EX-v2-INFRA-001
Componente: Setup base
Ola: 0

Checklist BFL completado:
- Blueprint GATE 1: aprobado
- Forge GATE 2: 12/12
- Lock: VERSION_CERTIFICATE generado
- CI/CD: pendiente verificacion"
```

### Verificar CI/CD en GitHub:
```
1. github.com/MauroPX/excalibur > Pull requests
2. Click en el PR de feat/v2-setup
3. Esperar 7 checks verdes: lint > type-check > unit-tests > axe-a11y > build > audit > deploy
4. Si alguno falla: leer el log en GitHub Actions, corregir, push
5. Cuando 7/7 verdes: gh pr merge --squash
```

---

## AUDIT INDIVIDUAL POST-LOCK

### Claude Code — ejecutar despues del merge:
```
Ejecuta el audit individual para EX-v2-INFRA-001 — Setup base.

Verifica cruzando el VERSION_CERTIFICATE.json con el codigo real:
1. Los valores de coverage son reales (no declarados)
2. Los wcag_criteria estan implementados en el codigo
3. El componente en COMPONENT_REGISTRY tiene los dependents correctos
4. La TRACEABILITY_MATRIX muestra LOCKED con version 1.0.0

Genera docs/m3/audit/AUDIT_EX-v2-INFRA-001_v2-setup.md
con PASS/FAIL por cada punto y evidencia real.
```

---

📍 SPEC_ID: EX-v2-INFRA-001 | Ola: 0 | Rama: feat/v2-setup
