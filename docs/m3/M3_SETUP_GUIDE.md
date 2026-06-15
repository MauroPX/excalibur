# M3_SETUP_GUIDE.md
# EXCALIBUR v2.0 — Guia de Configuracion Completa para M3
# TITAN v7.0 | Instrucciones paso a paso
# Incluye: herramientas, plataformas, VS Code, terminal, Vercel, GitHub

---

# PARTE 1 — HERRAMIENTAS Y PLATAFORMAS REQUERIDAS

## Stack de herramientas M3

| Herramienta | Version | Rol en M3 | Donde instalar |
|---|---|---|---|
| Node.js | 20.x LTS | Runtime base | nodejs.org |
| pnpm | 9.x | Package manager | npm i -g pnpm |
| Git | 2.x | Control de versiones | git-scm.com |
| GitHub CLI | 2.x | PRs desde terminal | cli.github.com |
| Vercel CLI | latest | Deploy desde terminal | npm i -g vercel |
| Claude Code | 2.x | AI coding agent | claude.ai/code |
| VS Code | 1.90+ | Editor principal | code.visualstudio.com |

## Extensiones de VS Code requeridas

| Extension | ID | Para que sirve |
|---|---|---|
| ESLint | dbaeumer.vscode-eslint | Lint en tiempo real |
| Prettier | esbenp.prettier-vscode | Formato automatico |
| Tailwind (desactivar) | — | NO instalar — usamos MUI |
| TypeScript Importer | pmneo.tsimporter | Auto-imports TS |
| axe Accessibility Linter | deque-oss.axe-linter | A11Y en tiempo real |
| GitLens | eamodio.gitlens | Historial de cambios |
| Error Lens | usernamehw.errorlens | Errores inline |
| Material Icon Theme | PKief.material-icon-theme | Iconos de archivos |

## Cuentas y accesos necesarios

| Plataforma | Para que | URL |
|---|---|---|
| GitHub | Repo excalibur | github.com/MauroPX/excalibur |
| Vercel | Deploy rama v2 | vercel.com |
| Anthropic Console | ANTHROPIC_API_KEY | console.anthropic.com |
| Railway | Strapi + PostgreSQL | railway.app |
| Chromatic | Storybook visual diff | chromatic.com |

---

# PARTE 2 — CONFIGURACION INICIAL (una sola vez antes de Ola 0)

## Paso 1 — Clonar y configurar el repo local

### En terminal:
```bash
# Clonar el repo
git clone https://github.com/MauroPX/excalibur.git
cd excalibur

# Verificar que main existe y v2 existe
git branch -a
# Deberia mostrar: main, v2, remotes/origin/main, remotes/origin/v2

# Cambiar a v2 (la rama de trabajo)
git checkout v2

# Instalar dependencias (en v2 ya tiene el setup de Next.js 15)
pnpm install

# Verificar que todo corre
pnpm dev
# Abrir http://localhost:3000 — debe cargar la app base
```

### En VS Code:
```
1. Abrir VS Code
2. File > Open Folder > seleccionar la carpeta excalibur/
3. En la barra inferior izquierda: verificar que dice "v2" (rama activa)
4. Abrir terminal integrado: Ctrl+` (backtick)
5. Instalar extensiones listadas arriba (Extensions sidebar → buscar cada ID)
```

## Paso 2 — Configurar variables de entorno

### En terminal:
```bash
# Desde la raiz del proyecto
cp .env.local.example .env.local

# Editar el archivo con tus valores reales
# En VS Code: abrir .env.local y editar
```

### Contenido de .env.local:
```env
# Strapi v5 (Railway)
NEXT_PUBLIC_STRAPI_URL=https://tu-strapi.railway.app
STRAPI_READ_TOKEN=tu-token-strapi-aqui

# Claude API
ANTHROPIC_API_KEY=sk-ant-tu-key-aqui

# Sitio
NEXT_PUBLIC_SITE_URL=https://excalibur-v2.vercel.app
NEXT_PUBLIC_DEFAULT_LANG=en
```

### En Vercel (para el deploy automatico):
```
1. Ir a vercel.com > tu proyecto excalibur
2. Settings > Environment Variables
3. Agregar cada variable con scope "Preview" y "Production"
4. Para ANTHROPIC_API_KEY: marcar como "Sensitive" (se oculta en logs)
```

## Paso 3 — Conectar Vercel con la rama v2

### En terminal:
```bash
# Login en Vercel
vercel login

# Vincular el proyecto (si no esta vinculado)
vercel link
# Seleccionar: MauroPX > excalibur

# Verificar que v2 es la rama de produccion de Vercel
vercel inspect
# Debe mostrar Production Branch: v2
```

### En Vercel dashboard (si hay que configurar):
```
1. vercel.com > excalibur > Settings > Git
2. Production Branch: v2
3. Guardar
4. Cada push a v2 = deploy automatico a produccion de Vercel
5. Cada push a feat/v2-* = preview URL automatica
```

## Paso 4 — Configurar Claude Code

### En terminal:
```bash
# Instalar Claude Code (si no esta instalado)
npm install -g @anthropic-ai/claude-code

# Verificar instalacion
claude --version

# Copiar CLAUDE.md a la raiz del proyecto (MUY IMPORTANTE)
cp docs/m3/claude-code/CLAUDE.md ./CLAUDE.md

# Iniciar Claude Code en el proyecto
cd excalibur/
claude
# Claude Code lee CLAUDE.md automaticamente al iniciar
```

### En VS Code:
```
1. Instalar extension "Claude Code" desde Extensions sidebar
   (buscar "Claude Code" de Anthropic)
2. Cmd/Ctrl + Shift + P > "Claude Code: Open Panel"
3. Se abre el panel de Claude Code en el sidebar
4. Verificar que dice "Reading CLAUDE.md..." al inicio
```

## Paso 5 — Configurar Storybook

### En terminal:
```bash
# Instalar dependencias de Storybook (ya incluidas en package.json de v2)
pnpm install

# Iniciar Storybook
pnpm storybook
# Abre http://localhost:6006

# Verificar que el toggle dark/light funciona
# Verificar que el addon-a11y esta en el panel inferior
```

## Paso 6 — Configurar Chromatic (una sola vez)

### En terminal:
```bash
# Instalar Chromatic
pnpm add -D chromatic

# Hacer el primer build de Storybook para Chromatic
npx chromatic --project-token=tu-chromatic-token
# Obtener el token en chromatic.com > tu proyecto > Manage > Token

# Para PRs automaticos, agregar a GitHub Actions (ya esta en v2.yml)
# Agregar CHROMATIC_PROJECT_TOKEN en GitHub Secrets:
# github.com/MauroPX/excalibur > Settings > Secrets > Actions > New
```

## Paso 7 — Inicializar COMPONENT_REGISTRY

### En terminal:
```bash
# Crear el registro inicial vacio
cat > docs/m3/certificates/COMPONENT_REGISTRY.json << EOF
{
  "_meta": {
    "version": "0.0.0",
    "product": "EXCALIBUR v2.0",
    "titan": "v7.0",
    "created": "2026-06-15",
    "last_updated": "2026-06-15",
    "total_components": 0,
    "locked": 0,
    "in_progress": 0
  },
  "components": {}
}
EOF

git add docs/m3/certificates/COMPONENT_REGISTRY.json
git commit -m "chore(m3): initialize COMPONENT_REGISTRY"
git push origin v2
```

---

# PARTE 3 — FLUJO DE TRABAJO DIARIO EN M3

## Como abrir el ambiente de trabajo cada dia

### Terminal (una sola vez al iniciar):
```bash
cd excalibur/

# 1. Actualizar desde origin
git checkout v2
git pull origin v2

# 2. Verificar que todo esta limpio
git status
# Debe decir: nothing to commit, working tree clean

# 3. Abrir los servidores de desarrollo
pnpm dev &              # Next.js en localhost:3000
pnpm storybook &        # Storybook en localhost:6006

# 4. En una terminal separada: abrir Claude Code
claude
```

### VS Code:
```
1. Abrir excalibur/ en VS Code
2. Verificar rama en barra inferior: "v2"
3. Abrir 3 terminales integradas (Ctrl+` > "+"):
   Terminal 1: pnpm dev (Next.js)
   Terminal 2: pnpm storybook (Storybook)
   Terminal 3: libre para comandos git/claude
```

---

# PARTE 4 — CICLO BFL INDIVIDUAL: PASO A PASO

## Como ejecutar un ciclo BFL completo para una feature

## FASE 0 — Crear la feature branch

### Terminal:
```bash
# Siempre desde v2 actualizado
git checkout v2
git pull origin v2

# Crear la rama de la feature (ejemplo: Button)
git checkout -b feat/v2-atoms-button

# Verificar que estas en la rama correcta
git branch
# Debe mostrar: * feat/v2-atoms-button
```

### VS Code:
```
1. Barra inferior izquierda > click en el nombre de rama
2. Seleccionar "feat/v2-atoms-button" de la lista
3. O: Ctrl+Shift+P > "Git: Checkout to..." > escribir el nombre
```

---

## FASE I — BLUEPRINT

### En Claude Code (terminal):
```
Prompt estandar de inicio de Blueprint:

"Vamos a iniciar el BLUEPRINT para [SPEC_ID] — [Nombre del componente].

Lee estos archivos antes de responder:
- docs/m2/spec/SPEC_DOCUMENT.md (seccion [SPEC_ID])
- docs/m2/design/DESIGN_SPEC.md (seccion del componente)
- docs/m2/design/DESIGN_TOKENS.json

Luego genera el BLUEPRINT_SPEC.json para [Componente] con:
- spec_ref: [SPEC_ID]
- atomic_level: [atom/molecule/organism]
- props contract tipado (TypeScript, 0 any)
- states[]: todos los estados del SPEC_ITEM
- spec_criteria[]: todos los CA del SPEC_DOCUMENT
- M3 tokens declarados (verificar que existen en DESIGN_TOKENS.json)
- fuera_de_alcance documentado
- BEM classes segun DESIGN_SPEC

Verifica los 6 checks BH antes de mostrar el JSON:
BH-1: tokens existen en DESIGN_TOKENS.json
BH-2: criterios WCAG son validos en WCAG 2.2
BH-3: APIs con version fijada en package.json
BH-4: props tipadas sin any
BH-5: scope no excede nivel atomico declarado
BH-6: sin marcadores PENDIENTE sin resolver

Si alguno falla, corrijo antes de mostrar el JSON final."
```

### Guardar el BLUEPRINT:
```bash
# Claude Code genera el JSON en pantalla
# Copiarlo y guardarlo:
mkdir -p src/components/atoms/Button/
# Crear el archivo manualmente en VS Code
# o pedirle a Claude Code que lo escriba directamente:
# "Escribe el BLUEPRINT_SPEC.json en src/components/atoms/Button/BLUEPRINT_SPEC.json"
```

### Commit del Blueprint:
```bash
git add src/components/atoms/Button/BLUEPRINT_SPEC.json
git commit -m "feat(bfl): EX-v2-ATOM-001 blueprint — Button atom GATE1 approved"
```

---

## FASE II — FORGE

### En Claude Code (terminal):
```
Prompt estandar de Forge:

"Ahora ejecutamos el FORGE para EX-v2-ATOM-001 — Button.

Lee el BLUEPRINT_SPEC.json en src/components/atoms/Button/

Construye EXACTAMENTE lo que describe el Blueprint:
1. Button.tsx — componente React con MUI v6
   - Solo tokens M3 del DESIGN_TOKENS.json (0 hardcoded)
   - BEM exacto del DESIGN_SPEC
   - TypeScript strict (0 any)
   - Importar: import Button from '@mui/material/Button' (tree-shaking)
   - Estados: filled, outlined, text, cta, loading, disabled

2. Button.test.tsx — tests con Vitest + Testing Library + jest-axe
   - Un test por estado del BLUEPRINT_SPEC.states[]
   - axe en cada render
   - Cobertura de todos los CA del SPEC_DOCUMENT
   - Coverage objetivo: 100% del componente

3. Button.stories.tsx — Storybook 8
   - Una story por estado: Default, Outlined, Text, CTA, Loading, Disabled
   - AllVariants story
   - Parametros: a11y activo, dark theme por defecto
   - El panel TITAN en parameters: {titan: {spec_id: 'EX-v2-ATOM-001'}}

4. index.ts — barrel export
   export { default as Button } from './Button'

Verifica los 12 items del GATE 2 antes de terminar:
1-BEM exacto, 2-solo tokens M3, 3-WCAG implementado,
4-logica aislada, 5-TypeScript strict, 6-tests completos,
7-bundle sin dependencias extras, 8-sin colisiones CSS,
9-JSDoc en props publicas, 10-Blind Review mental,
11-COMPONENT_REGISTRY preparado, 12-Zero Hallucination FH-1 a FH-6

Lista los 12 con check o X antes de declarar FORGE_SEAL."
```

### Verificar en VS Code mientras Claude Code trabaja:
```
1. Abrir src/components/atoms/Button/ en el Explorer
2. Ver los archivos crearse en tiempo real
3. El linter ESLint muestra errores en rojo inmediatamente
4. Abrir Storybook (localhost:6006) para ver el componente
5. La tab de Accesibilidad en Storybook muestra el resultado de axe
```

### Correr tests manualmente:
```bash
# En terminal separada
pnpm vitest src/components/atoms/Button/Button.test.tsx --coverage
# Debe mostrar: all tests passed | coverage >= 80%
```

### Commit del Forge:
```bash
git add src/components/atoms/Button/
git commit -m "feat(bfl): EX-v2-ATOM-001 forge — Button implementation GATE2 12/12"
```

---

## FASE III — LOCK

### En Claude Code (terminal):
```
Prompt estandar de Lock:

"Ejecutamos el LOCK para EX-v2-ATOM-001 — Button.

Genera los siguientes archivos:

1. src/components/atoms/Button/VERSION_CERTIFICATE.json
   Contenido:
   {
     "spec_id": "EX-v2-ATOM-001",
     "component": "Button",
     "version": "1.0.0",
     "atomic_level": "atom",
     "titan_momentum": "M3",
     "ola": "1",
     "rama": "feat/v2-atoms-button",
     "fecha_lock": "2026-06-[DD]",
     "status": "LOCKED",
     "spec_ref": "docs/m2/spec/SPEC_DOCUMENT.md#EX-v2-ATOM-001",
     "blueprint_ref": "src/components/atoms/Button/BLUEPRINT_SPEC.json",
     "wcag_criteria": ["1.4.3", "1.4.6", "2.4.7", "4.1.2"],
     "wcag_verificados": true,
     "axe_violations": 0,
     "tests_passing": true,
     "coverage": "[valor real del test run]",
     "stories_completas": true,
     "chromatic_approved": false,
     "gate1_pass": true,
     "gate2_pass": true,
     "forge_seal_items": 12,
     "forge_seal_pass": 12,
     "firmado": "Leonel Mauricio Gomez Ocampo",
     "notas": ""
   }

2. docs/m3/certificates/GSD_TASK_CARD_Button_[fecha].md
   Con el estado real del componente: que se construyo, que pasa,
   cuantos tests, cobertura real, axe violations reales.

Luego dame las instrucciones para actualizar:
- docs/m2/spec/TRACEABILITY_MATRIX.md: EX-v2-ATOM-001 → LOCKED
- docs/m3/certificates/COMPONENT_REGISTRY.json: agregar Button v1.0.0

Verifica LH-1 a LH-4 antes de generar:
LH-1: VERSION_CERTIFICATE no afirma mas de lo que el codigo implementa
LH-2: wcag_criteria son los verificados realmente, no los declarados
LH-3: dependents en COMPONENT_REGISTRY es exacto
LH-4: GSD Task Card describe el artefacto real, no el ideal"
```

### Actualizar TRACEABILITY_MATRIX:
```bash
# Abrir en VS Code: docs/m2/spec/TRACEABILITY_MATRIX.md
# Cambiar la fila de EX-v2-ATOM-001:
# Status: IN_SPEC → LOCKED
# Componente: Button/
# Version: v1.0.0
# Tests: X/X passing

git add docs/m2/spec/TRACEABILITY_MATRIX.md
git add docs/m3/certificates/COMPONENT_REGISTRY.json
git add src/components/atoms/Button/VERSION_CERTIFICATE.json
git commit -m "feat(bfl): EX-v2-ATOM-001 LOCK — Button v1.0.0 VERSION_CERTIFICATE"
```

### Abrir el PR:
```bash
# Con GitHub CLI
gh pr create   --base v2   --head feat/v2-atoms-button   --title "[LOCK] EX-v2-ATOM-001 — Button atom v1.0.0"   --body "## SPEC_ID: EX-v2-ATOM-001
## Componente: Button (atom)
## Ola: 1

### Checklist BFL
- [x] Blueprint GATE 1 aprobado (BH-1 a BH-6)
- [x] Forge GATE 2: 12/12 items
- [x] Tests: X/X passing | Coverage: X%
- [x] axe-core: 0 violations
- [x] Stories: Default/Outlined/Text/CTA/Loading/Disabled/AllVariants
- [x] VERSION_CERTIFICATE.json generado
- [x] COMPONENT_REGISTRY actualizado
- [x] TRACEABILITY_MATRIX: LOCKED

### Preview URL
[URL generada por Vercel automaticamente]"
```

### Verificar CI/CD en GitHub:
```
1. Ir a github.com/MauroPX/excalibur/pulls
2. Click en el PR recien creado
3. Ver los checks corriendo: lint, type-check, unit-tests, axe-a11y, build, audit, deploy
4. Esperar que todos sean verdes
5. Si alguno falla: leer el log, corregir en la rama, hacer push
   git add . && git commit -m "fix(bfl): correccion lint Button" && git push
6. Cuando 7/7 verdes: hacer merge del PR
   gh pr merge --squash
```

---

# PARTE 5 — AUDIT INDIVIDUAL POST-LOCK

## Que hacer despues de cada LOCK

### En Claude Code (terminal):
```
Prompt de audit individual:

"Ejecuta el audit individual para el LOCK de [Componente] — [SPEC_ID].

Verifica cruzando VERSION_CERTIFICATE.json con el codigo real:
1. ¿Los wcag_criteria declarados estan realmente implementados en el codigo?
2. ¿El coverage declarado coincide con el ultimo test run?
3. ¿Las stories declaradas como completas existen realmente en el archivo .stories.tsx?
4. ¿El componente en COMPONENT_REGISTRY tiene los dependents correctos?
5. ¿La TRACEABILITY_MATRIX muestra LOCKED con la version correcta?

Genera un resumen de audit en docs/m3/audit/AUDIT_[SPEC_ID]_[fecha].md
con: PASS / FAIL por cada punto y evidencia real."
```

### Checklist manual post-LOCK:
```bash
# En terminal — verificar cada punto
pnpm tsc --noEmit                          # 0 errores TypeScript
pnpm lint                                  # 0 errores ESLint
pnpm vitest --coverage --reporter=verbose  # tests passing + coverage
pnpm build                                 # build exitoso

# Storybook: abrir localhost:6006
# Navegar a la story del componente
# Click en tab "Accessibility"
# Verificar: 0 violations, 0 incomplete
```

---

# PARTE 6 — AUDIT GLOBAL POR OLA

## Cuando ejecutar: al cerrar cada ola (todas sus features en LOCK)

### En Claude Code (terminal):
```
Prompt de audit de ola:

"Ejecuta el audit global de Ola [N] — EXCALIBUR v2.0.

Lee estos archivos:
- docs/m2/spec/TRACEABILITY_MATRIX.md
- docs/m2/spec/SPEC_DOCUMENT.md
- docs/m3/certificates/COMPONENT_REGISTRY.json
- Todos los VERSION_CERTIFICATE.json de la ola

Verifica el encadenamiento:
1. ¿Todos los SPEC_IDs de la Ola N estan en LOCKED en la TRACEABILITY?
2. ¿Cada LOCKED tiene su VERSION_CERTIFICATE.json en src/components/?
3. ¿El COMPONENT_REGISTRY tiene todos los componentes de la ola?
4. ¿Los dependents entre componentes son correctos?
   (ej: Hero depende de Button y MetricRow — estan registrados?)
5. ¿0 SPEC_IDs de la ola siguen en IN_SPEC o IN_BLUEPRINT?
6. ¿El CI/CD tiene verde en todos los PRs mergeados de la ola?

Genera docs/m3/audit/OLA_[N]_AUDIT_REPORT.md con:
- Resumen: X/Y features en LOCK (X%)
- Tabla de encadenamiento (SPEC_ID → componente → version → status)
- Gaps detectados (si hay)
- Veredicto: OLA [N] SELLADA / INCOMPLETA

Si esta sellada, genera docs/m3/audit/OLA_[N]_CERTIFICATE.md"
```

---

# PARTE 7 — SPRINT REPORTS POR OLA

## Como generar el SPRINT_REPORT al cerrar cada ola

### En Claude Code:
```
Prompt de Sprint Report:

"Genera el SPRINT_[N]_REPORT.md para la Ola [N] de EXCALIBUR v2.0.

Datos a incluir (busca los valores reales en los archivos):
- Features completadas: [lista de SPEC_IDs en LOCKED]
- Features pendientes: [las que no llegaron a LOCK]
- Tests totales: [suma de todos los tests de la ola]
- Coverage promedio: [promedio de los VERSION_CERTIFICATE.json]
- axe violations en produccion: 0 (si CI/CD paso)
- DORA Lead Time: [fecha primer commit feat → fecha merge]
- DORA Deploy Frequency: [cuantos merges a v2 en la ola]
- Deuda tecnica detectada: [items del backlog que surgieron]
- Proxima ola: [lista de SPEC_IDs de la siguiente ola]

Nivel C (snapshot inmutable — no cambia una vez generado)
Guardar en: docs/m3/SPRINT_[N]_REPORT.md"
```

---

# PARTE 8 — CERTIFICACION FINAL M3 → M4

## Cuando ejecutar: todos los P0 de SPEC_DOCUMENT en LOCKED

### En Claude Code:
```
Prompt de certificacion M3:

"Ejecuta la certificacion final de M3 — EXCALIBUR v2.0.

Lee todos estos archivos:
- docs/m2/spec/TRACEABILITY_MATRIX.md
- docs/m3/certificates/COMPONENT_REGISTRY.json
- docs/m3/audit/OLA_0_AUDIT_REPORT.md
- docs/m3/audit/OLA_1_AUDIT_REPORT.md
- docs/m3/audit/OLA_2_AUDIT_REPORT.md
- docs/m3/audit/OLA_3_AUDIT_REPORT.md
- docs/m3/SPRINT_1_REPORT.md ... SPRINT_4_REPORT.md

Verifica el Gate M3 → M4:
□ 100% de SPEC_IDs P0 en LOCKED en TRACEABILITY_MATRIX
□ Todos los VERSION_CERTIFICATE.json firmados
□ COMPONENT_REGISTRY con todos los 33 componentes
□ 4 OLA_AUDIT_REPORT.md generados
□ 4 SPRINT_REPORT.md generados
□ 0 violations WCAG en axe-core (CI/CD)
□ Coverage >= 80% en organismos criticos
□ SAST/SCA: 0 issues criticos en todos los PRs
□ Sentry activo en staging
□ PostHog activo con los 10 eventos
□ DORA metrics documentados

Genera docs/m3/GSD_TASK_CARD_M3.md con:
- Estado de cada item del Gate
- Tabla de cobertura: P0 LOCKED / P1 LOCKED / P2 LOCKED
- DORA metrics reales de M3
- Veredicto: GATE M3 PASS o GAPS DETECTADOS

Si PASS, genera docs/m3/M3_RELEASE_CERTIFICATE.md con la firma."
```

---

# PARTE 9 — COMANDOS DE REFERENCIA RAPIDA

## Git
```bash
git checkout v2 && git pull origin v2           # actualizar base
git checkout -b feat/v2-[scope]                  # nueva feature
git add . && git commit -m "feat(bfl): [msg]"   # commit convencional
git push -u origin feat/v2-[scope]              # push primera vez
git push                                          # push subsecuente
gh pr create --base v2 --head feat/v2-[scope]   # crear PR
gh pr merge --squash                              # merge cuando CI verde
```

## pnpm
```bash
pnpm dev                    # Next.js localhost:3000
pnpm storybook              # Storybook localhost:6006
pnpm test                   # Vitest run once
pnpm test:ui                # Vitest con UI localhost:51204
pnpm test:coverage          # Vitest con coverage report
pnpm vitest [archivo]       # test de un archivo especifico
pnpm lint                   # ESLint
pnpm type-check             # tsc --noEmit
pnpm build                  # next build
pnpm audit                  # pnpm audit --audit-level critical
```

## Vercel
```bash
vercel                      # deploy preview de la rama actual
vercel --prod               # deploy produccion (solo rama v2)
vercel env pull             # bajar variables de entorno de Vercel
vercel logs                 # ver logs de produccion
vercel inspect              # ver estado del proyecto
```

## GitHub CLI
```bash
gh pr list                  # ver PRs abiertos
gh pr status                # estado del PR de la rama actual
gh pr checks                # ver los checks del CI/CD
gh pr view --web            # abrir PR en el browser
gh run list                 # ver runs de GitHub Actions
gh run view [id]            # ver detalles de un run
```

## Claude Code
```bash
claude                      # iniciar Claude Code (lee CLAUDE.md auto)
claude --help               # ver opciones disponibles
/compact                    # comprimir historial cuando contexto lleno
/status                     # ver estado de la sesion
```
