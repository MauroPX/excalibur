# EXCALIBUR v2.0 — PASO A PASO COMPLETO (ACTUALIZADO)
# Mac · Multi-IA (Claude Code + Ollama + Aider) · Deploy en Vercel
# TITAN v7.0 | M3 — Ejecución BFL

---

## VERSIONES CONFIRMADAS EN TU MAC

```
Git:         2.39.5 ✅
Node:        v24.15.0 ✅
pnpm:        11.2.2 ✅
GitHub CLI:  2.93.0 ✅
Vercel CLI:  54.12.2 ✅
Claude Code: 2.1.176 ✅
Ollama:      instalado ✅
```

---

## PARTE 1 — SETUP INICIAL (una sola vez)

### 1.1 — Ir al repo en tu Mac y copiar archivos

```bash
# Abrir Terminal (Cmd + Espacio → Terminal)

# Ir al repo (ya lo tienes clonado)
cd ~/Proyectos/excalibur   # o donde lo tengas clonado
# Si no sabes dónde está:
find ~ -name "excalibur" -type d 2>/dev/null | head -5
```

### 1.2 — Verificar el estado del repo

```bash
git status
# Debe decir: On branch main, nothing to commit

git branch -a
# Debe mostrar: main (y remotes/origin/main)
# La rama v2 la creamos en el siguiente paso
```

### 1.3 — Ejecutar el script de setup completo

El script crea la rama v2, agrega toda la documentación M0→M3
y hace el commit inicial. Ejecutar desde la raíz del repo:

```bash
# Dar permisos de ejecución al script
chmod +x excalibur_setup.sh

# Ejecutar (el script está en la raíz del repo)
bash excalibur_setup.sh
```

**Output esperado al final:**
```
✅ TODO LISTO
Tag v1.0:    github.com/MauroPX/excalibur/releases/tag/v1.0
Rama v2:     github.com/MauroPX/excalibur/tree/v2
Rama activa: v2
```

**Verificar en GitHub:**
```
github.com/MauroPX/excalibur → rama v2 debe existir
github.com/MauroPX/excalibur/tags → v1.0 debe existir
```

### 1.4 — Copiar los archivos multi-IA al repo

Tienes 3 archivos nuevos que van en la carpeta `multi-ia/` del repo:
- `multi-ia/PROJECT_CONTEXT.md`
- `multi-ia/agent_rules.md`
- `multi-ia/workflow.sh`

```bash
# Crear carpeta multi-ia en el repo
mkdir -p multi-ia

# Copiar los archivos (están en la carpeta que te entregué)
cp /ruta/a/los/outputs/multi-ia/* multi-ia/

# Dar permisos al script
chmod +x multi-ia/workflow.sh

# Copiar el CLAUDE.md fusionado a la raíz
cp /ruta/a/los/outputs/CLAUDE.md ./CLAUDE.md

# Verificar
ls multi-ia/
# Debe mostrar: PROJECT_CONTEXT.md  agent_rules.md  workflow.sh

# Commit de los archivos multi-IA
git add multi-ia/ CLAUDE.md
git commit -m "feat(multi-ia): workflow.sh + PROJECT_CONTEXT + agent_rules + CLAUDE.md fusionado"
git push origin v2
```

### 1.5 — Verificar los modelos de Ollama

```bash
# Verificar que Ollama está instalado
ollama --version

# Ver qué modelos tienes descargados
ollama list

# Si falta alguno, descargarlo (puede tardar ~20-30 min cada uno):
ollama pull qwen2.5-coder:14b   # ~8.5GB — para código
ollama pull gemma2:9b            # ~5.4GB — para tests
ollama pull qwen2.5:14b          # ~8.2GB — para docs/stories
ollama pull deepseek-r1:14b      # ~8.5GB — para orquestar

# Verificar que Ollama sirve correctamente
ollama serve &
curl http://localhost:11434/api/tags
# Debe devolver JSON con los modelos instalados
```

### 1.6 — Instalar Aider

```bash
# Instalar Aider (si no lo tienes)
pip install aider-chat

# Verificar
aider --version

# Configurar Aider para usar Ollama (para las fases de Forge)
# Aider lo leerá de las variables de entorno
export OLLAMA_API_BASE=http://localhost:11434
```

### 1.7 — Conectar Vercel a la rama v2

```bash
# Login en Vercel (si no está autenticado)
vercel login
# Se abre el browser → Continue with GitHub → autorizar

# Vincular el proyecto
cd excalibur/   # estar en la raíz del repo
vercel link
# Responder:
# ? Set up "excalibur"? → Y
# ? Which scope? → tu cuenta
# ? Found project "excalibur". Link to it? → Y

# Verificar que v2 es la rama de producción
vercel inspect
# Buscar: Production Branch
# Si dice "main": ir a vercel.com → proyecto → Settings → Git → cambiar a "v2"
```

**En vercel.com (interface web):**
```
1. vercel.com → tu proyecto excalibur
2. Settings → Git → Production Branch → cambiar "main" por "v2" → Save
3. Settings → Environment Variables → agregar:
   ANTHROPIC_API_KEY = sk-ant-... (tipo: Sensitive)
   NEXT_PUBLIC_STRAPI_URL = https://tu-strapi.railway.app
   NEXT_PUBLIC_DEFAULT_LANG = en
   NEXT_PUBLIC_SITE_URL = https://excalibur-v2.vercel.app
```

### 1.8 — Agregar secrets en GitHub

Para que el CI/CD funcione automáticamente:

```
github.com/MauroPX/excalibur → Settings → Secrets and variables → Actions
→ New repository secret:

VERCEL_TOKEN        = (en vercel.com → Account → Settings → Tokens → Create)
ANTHROPIC_API_KEY   = sk-ant-...
NEXT_PUBLIC_STRAPI_URL = https://tu-strapi.railway.app
```

### 1.9 — Instalar dependencias del proyecto

```bash
# Estando en la rama v2
git checkout v2
pnpm install

# Verificar que el proyecto corre
pnpm dev
# Abrir: http://localhost:3000
# Ctrl+C para detener
```

### 1.10 — Abrir VS Code

```bash
# Desde la raíz del repo
code .
```

**En VS Code, instalar extensiones:**
```
Cmd + Shift + X → buscar e instalar:
- ESLint (dbaeumer.vscode-eslint)
- axe Accessibility Linter (deque-oss.axe-linter)
- Error Lens (usernamehw.errorlens)
- GitLens (eamodio.gitlens)
- Material Icon Theme (PKief.material-icon-theme)
```

---

## PARTE 2 — AMBIENTE DE TRABAJO DIARIO

### Abrir el ambiente cada mañana (en este orden exacto)

**Terminal 1 — Ollama:**
```bash
ollama serve
# Dejar corriendo en background
# Output: Listening on 127.0.0.1:11434
```

**VS Code — Abrir el proyecto:**
```bash
cd ~/Proyectos/excalibur
code .
```

**En VS Code, abrir 4 terminales** (Ctrl+` para abrir terminal, "+" para nueva):

```bash
# Terminal 1: Next.js dev server
git checkout v2 && git pull origin v2
pnpm dev
# → http://localhost:3000

# Terminal 2: Storybook
pnpm storybook
# → http://localhost:6006

# Terminal 3: Tests en modo watch
pnpm vitest --watch
# → Tests corren automáticamente al guardar

# Terminal 4: Claude Code + Git (libre para comandos)
claude
# Lee CLAUDE.md automáticamente al iniciar
```

**Verificar el CLAUDE.md al iniciar Claude Code:**
```
Debes ver en la primera línea de Claude Code:
"Reading CLAUDE.md... ✓ EXCALIBUR v2.0"

Si no aparece, verificar:
ls CLAUDE.md   # debe existir en la raíz
```

---

## PARTE 3 — CICLO BFL CON MULTI-IA (paso a paso por feature)

### PASO 0 — Crear la feature branch

```bash
# En Terminal 4 (salir de Claude Code con Ctrl+C si está abierto)
git checkout v2
git pull origin v2
git checkout -b feat/v2-atoms   # o el scope correspondiente
git branch
# Debe mostrar: * feat/v2-atoms
```

**En VS Code — verificar la rama:**
```
Barra inferior izquierda → debe decir: ⎇ feat/v2-atoms
```

---

### FASE I — BLUEPRINT (Claude Code hace esto)

**Abrir el prompt correspondiente en VS Code:**
```
VS Code Explorer → docs/m3/prompts/ola1/PROMPT_EX-v2-ATOM-001_Button.md
```

**En Terminal 4 — iniciar Claude Code:**
```bash
claude
# Esperar que cargue: "Reading CLAUDE.md..."
```

**Actualizar el estado en CLAUDE.md antes de empezar:**
```
En CLAUDE.md (raíz del repo), editar:
  Ola activa:  Ola 1
  Feature:     feat/v2-atoms
  SPEC_ID:     EX-v2-ATOM-001
  Último LOCK: ninguno aún
Guardar: Cmd+S
```

**En Claude Code — copiar y pegar el prompt de FASE I:**
```
Del archivo PROMPT_EX-v2-ATOM-001_Button.md, sección "FASE I — BLUEPRINT"
Copiar el bloque del prompt y pegarlo en Claude Code
```

**Claude Code genera el BLUEPRINT_SPEC.json.**

**Verificar los 6 checks BH antes de continuar:**
```
Claude Code debe listar BH-1 a BH-6 con PASS o FAIL.
Si alguno es FAIL: corregir antes de avanzar al FORGE.
```

**Commit del Blueprint:**
```bash
# En Terminal 4 (salir de Claude Code con Ctrl+C)
git add src/components/atoms/Button/Button.blueprint.json
git commit -m "feat(bfl): EX-v2-ATOM-001 blueprint — Button atom GATE1 approved"
git push origin feat/v2-atoms
```

---

### FASE II — FORGE (workflow.sh + Ollama hacen esto)

**En Terminal 4 — ejecutar el workflow:**
```bash
# Asegurarse de que Ollama está corriendo (Terminal 1)
# Luego ejecutar:
./multi-ia/workflow.sh "EX-v2-ATOM-001" "Button" "atoms"
```

**Output esperado paso a paso:**
```
▶ PASO 1/6 — Orquestación con deepseek-r1:14b...
  ✅ Plan generado

▶ PASO 2/6 — Forge código con qwen2.5-coder:14b...
  ✅ Código generado

▶ PASO 3/6 — Forge tests con gemma2:9b...
  ✅ Tests generados

▶ PASO 4/6 — Forge docs con qwen2.5:14b...
  ✅ Stories generadas

▶ PASO 5/6 — Revisión con deepseek-r1:14b...
  ✅ FORGE_REVIEW_PASS  (o lista de issues a corregir)

▶ PASO 6/6 — Copiando archivos...
  ✅ src/components/atoms/Button/Button.tsx
  ✅ src/components/atoms/Button/Button.test.tsx
  ✅ src/components/atoms/Button/Button.stories.tsx
  ✅ src/components/atoms/Button/index.ts
```

**⚠️ Si la revisión muestra [CRÍTICO]:**
```bash
# Ver los issues:
cat multi-ia/outputs/review_EX-v2-ATOM-001.txt

# Corregir en VS Code los archivos afectados
# O usar Claude Code para corregir:
claude
# "Revisa src/components/atoms/Button/Button.tsx y corrige: [pegar el issue]"
```

**Verificar el código en VS Code:**
```
Abrir src/components/atoms/Button/ en el Explorer
Revisar visualmente Button.tsx:
  - ¿Hay hex hardcodeados? → reemplazar por tokens M3
  - ¿Hay any? → corregir el tipo
  - ¿El BEM es correcto? → comparar con DESIGN_SPEC
```

**Verificar en Storybook (localhost:6006):**
```
Navegar a: Átomos → Button
Click en tab "Accessibility" → debe decir "0 violations"
Probar el toggle dark/light → debe verse bien en ambos
Verificar las stories: Filled, Outlined, Text, CTA, Loading, Disabled, AllVariants
```

**Correr los tests:**
```bash
# En Terminal 3 (o en Terminal 4):
pnpm vitest src/components/atoms/Button/Button.test.tsx --coverage

# Output esperado:
# ✓ Button.test.tsx (X tests)
# Coverage: X% lines | X% functions
```

**Si todos los tests pasan, verificar GATE 2 (12/12):**
```bash
# En Terminal 4 — con Claude Code:
claude
# Pegar: "Verifica el GATE 2 (12 items) para EX-v2-ATOM-001 — Button.
#         Lee src/components/atoms/Button/ completo y lista 12/12 PASS o FAIL."
```

**Commit del Forge:**
```bash
git add src/components/atoms/Button/
git commit -m "feat(bfl): EX-v2-ATOM-001 forge — Button GATE2 12/12"
git push origin feat/v2-atoms
```

---

### FASE III — LOCK (Claude Code + scripts hacen esto)

**En Claude Code — prompt de Lock:**
```bash
claude
# Copiar y pegar el prompt de FASE III del archivo:
# docs/m3/prompts/ola1/PROMPT_EX-v2-ATOM-001_Button.md → sección "FASE III — LOCK"
```

**Claude Code genera:**
- `src/components/atoms/Button/VERSION_CERTIFICATE.json`
- `docs/m3/certificates/GSD_TASK_CARD_Button_[fecha].md`

**Actualizar manualmente en VS Code:**
```
1. docs/m2/spec/TRACEABILITY_MATRIX.md:
   Buscar EX-v2-ATOM-001 → cambiar Status de "IN_SPEC" a "LOCKED"

2. docs/m3/certificates/COMPONENT_REGISTRY.json:
   Agregar Button con versión 1.0.0 (Claude Code te da las instrucciones exactas)
```

**Commit del Lock:**
```bash
git add .
git commit -m "feat(bfl): EX-v2-ATOM-001 LOCK — Button v1.0.0 VERSION_CERTIFICATE"
git push origin feat/v2-atoms
```

**Abrir el PR:**
```bash
gh pr create \
  --base v2 \
  --head feat/v2-atoms \
  --title "[LOCK] EX-v2-ATOM-001 — Button atom v1.0.0" \
  --body "## SPEC_ID: EX-v2-ATOM-001
## Componente: Button (atom)
## Ola: 1

### Checklist BFL completo
- [x] Blueprint: GATE 1 aprobado (BH-1..BH-6)
- [x] Forge: GATE 2 12/12
- [x] Lock: VERSION_CERTIFICATE.json generado
- [x] TRACEABILITY_MATRIX: LOCKED
- [x] COMPONENT_REGISTRY: actualizado

### CI/CD
Esperando verificación automática de 7 jobs."
```

**Verificar CI/CD en GitHub:**
```
1. github.com/MauroPX/excalibur → Pull requests → click en el PR
2. Ver los 7 checks corriendo:
   lint → type-check → unit-tests → axe-a11y → build → security-audit → deploy
3. Cuando todos sean ✅ verdes:
   gh pr merge --squash
```

**Si un job falla:**
```bash
# Ver el log en GitHub (click en el job que falló)
# O desde terminal:
gh run list                # ver los runs
gh run view [id]           # ver detalles del run que falló

# Corregir el problema en la rama
# Push el fix:
git add . && git commit -m "fix(bfl): EX-v2-ATOM-001 corregir [descripción]" && git push
# El CI/CD corre automáticamente en cada push
```

---

### AUDIT INDIVIDUAL (después de cada merge)

```bash
# Ejecutar el script de audit
python3 docs/m3/audit/audit_individual.py EX-v2-ATOM-001 Button atoms

# Output esperado:
# === AUDIT: EX-v2-ATOM-001 — Button ===
# ✅ VERSION_CERTIFICATE.json existe
# ✅ Componente .tsx existe
# ✅ Tests existen
# ✅ Stories existen
# ✅ Barrel export existe
# ✅ status LOCKED
# ✅ axe_violations = 0
# ✅ tests_passing = true
# VEREDICTO: PASS
# Reporte: docs/m3/audit/AUDIT_EX-v2-ATOM-001_[fecha].json
```

---

## PARTE 4 — AUDIT DE OLA (cuando toda la ola está en LOCK)

```bash
# Al terminar todos los SPEC_IDs de una ola:
python3 docs/m3/audit/audit_ola.py 1   # para Ola 1

# Output esperado:
# === AUDIT OLA 1 ===
# ✅ EX-v2-ATOM-001 | Button
# ✅ EX-v2-ATOM-002 | Tag
# ...
# OLA 1 SELLADA ✅ (10/10)
```

---

## PARTE 5 — VER EL DEPLOY EN VERCEL

Vercel despliega automáticamente en cada push:

```
Rama v2         → URL de producción
feat/v2-*       → Preview URL automática (aparece en el PR de GitHub)
```

**Ver el deploy:**
```bash
vercel ls              # listar deployments
vercel inspect         # estado del proyecto
vercel logs            # logs de producción
```

**En vercel.com:**
```
Dashboard → excalibur → Deployments
→ Cada deployment tiene su URL propia
→ Producción: excalibur-v2.vercel.app (o tu dominio)
→ Preview PR: excalibur-[hash]-mauropx.vercel.app
```

---

## PARTE 6 — COMANDOS DE REFERENCIA RÁPIDA

### Git
```bash
git checkout v2 && git pull origin v2          # actualizar base
git checkout -b feat/v2-[scope]                 # nueva feature
git status                                       # qué cambié
git log --oneline -5                            # últimos commits
git add . && git commit -m "feat(bfl): msg"    # commit
git push                                         # push
gh pr create --base v2 --head feat/v2-[scope]  # crear PR
gh pr status                                     # estado del PR
gh pr merge --squash                             # merge cuando CI verde
```

### pnpm
```bash
pnpm dev                    # Next.js → localhost:3000
pnpm storybook              # Storybook → localhost:6006
pnpm vitest --watch         # tests en tiempo real
pnpm vitest [archivo] --coverage  # test específico + coverage
pnpm lint                   # ESLint
pnpm type-check             # TypeScript
pnpm build                  # build de producción
pnpm audit                  # vulnerabilidades
```

### Ollama
```bash
ollama serve                # iniciar servidor
ollama list                 # ver modelos instalados
ollama pull qwen2.5-coder:14b   # descargar modelo
ollama run qwen2.5-coder:14b    # probar modelo manualmente
```

### Workflow Multi-IA
```bash
# Ejecutar ciclo Forge completo para un componente:
./multi-ia/workflow.sh "EX-v2-ATOM-001" "Button" "atoms"
./multi-ia/workflow.sh "EX-v2-MOL-002" "ProjectCard" "molecules"
./multi-ia/workflow.sh "EX-v2-HERO-001" "Hero" "organisms"
```

### Audit
```bash
# Audit individual (después de cada LOCK):
python3 docs/m3/audit/audit_individual.py EX-v2-ATOM-001 Button atoms

# Audit de ola (al cerrar una ola completa):
python3 docs/m3/audit/audit_ola.py 0    # Ola 0
python3 docs/m3/audit/audit_ola.py 1    # Ola 1
python3 docs/m3/audit/audit_ola.py all  # todas
```

### Claude Code
```bash
claude                  # iniciar (lee CLAUDE.md automáticamente)
/compact                # comprimir historial cuando contexto lleno
/status                 # estado de la sesión
Ctrl+C                  # salir de Claude Code
```

### Vercel
```bash
vercel ls               # ver deployments
vercel logs             # logs de producción
vercel inspect          # estado del proyecto
vercel env pull         # bajar variables de entorno
```

---

## PARTE 7 — TABLA RESUMEN: QUÉ HACE CADA IA EN M3

| Fase | Quién | Cómo se invoca | Qué produce |
|---|---|---|---|
| Blueprint | Claude Code | `claude` → prompt FASE I | BLUEPRINT_SPEC.json |
| Forge — Orquestación | workflow.sh → deepseek-r1 | `./multi-ia/workflow.sh` | Plan con 4 prompts |
| Forge — Código | workflow.sh → qwen2.5-coder | automático | [Componente].tsx |
| Forge — Tests | workflow.sh → gemma2 | automático | [Componente].test.tsx |
| Forge — Stories | workflow.sh → qwen2.5 | automático | [Componente].stories.tsx |
| Forge — Revisión | workflow.sh → deepseek-r1 | automático | review_[SPEC_ID].txt |
| Lock | Claude Code | `claude` → prompt FASE III | VERSION_CERTIFICATE.json |
| Audit individual | Python | `python3 audit_individual.py` | AUDIT_[SPEC_ID].json |
| Audit de ola | Python | `python3 audit_ola.py [N]` | OLA_N_AUDIT.json |

---

## PARTE 8 — FLUJO COMPLETO EN UN DIAGRAMA

```
MAÑANA: Abrir el ambiente
┌─────────────────────────────┐
│  1. ollama serve (Terminal) │
│  2. code . (VS Code)        │
│  3. pnpm dev (Terminal 1)   │
│  4. pnpm storybook (T2)     │
│  5. pnpm vitest --watch (T3)│
│  6. claude (T4)             │
└─────────────────────────────┘
           ↓
FASE 0: Crear branch
┌─────────────────────────────┐
│  git checkout v2             │
│  git checkout -b feat/v2-*  │
└─────────────────────────────┘
           ↓
FASE I: BLUEPRINT (Claude Code)
┌─────────────────────────────┐
│  Abrir PROMPT_[SPEC_ID].md  │
│  Pegar en Claude Code       │
│  → BLUEPRINT_SPEC.json ✅   │
│  git commit (Blueprint)     │
└─────────────────────────────┘
           ↓
FASE II: FORGE (workflow.sh)
┌─────────────────────────────┐
│  ./multi-ia/workflow.sh ... │
│  → deepseek-r1 orquesta     │
│  → qwen2.5-coder codea      │
│  → gemma2 testea            │
│  → qwen2.5 documenta        │
│  → deepseek-r1 revisa       │
│  Verificar en VS Code       │
│  Verificar en Storybook     │
│  pnpm vitest --coverage     │
│  git commit (Forge)         │
└─────────────────────────────┘
           ↓
FASE III: LOCK (Claude Code)
┌─────────────────────────────┐
│  Pegar prompt FASE III      │
│  → VERSION_CERTIFICATE.json │
│  → TRACEABILITY: LOCKED     │
│  → COMPONENT_REGISTRY       │
│  git commit (Lock)          │
│  gh pr create               │
│  Esperar CI/CD 7/7 verde    │
│  gh pr merge --squash       │
└─────────────────────────────┘
           ↓
AUDIT INDIVIDUAL
┌─────────────────────────────┐
│  python3 audit_individual.py│
│  → AUDIT_[SPEC_ID].json ✅  │
└─────────────────────────────┘
           ↓
Repetir para el siguiente SPEC_ID
```

---

📍 Estado: M0 LOCKED · M1 LOCKED · M2 LOCKED · M3 listo para ejecutar
→ Primer comando: `cd ~/Proyectos/excalibur && bash excalibur_setup.sh`
→ Luego: `./multi-ia/workflow.sh "EX-v2-INFRA-001" "Setup" "infra"`
