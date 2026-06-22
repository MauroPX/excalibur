# PROMPTS SPRINT D · E · F — i18n + Chromatic + Backend
# EXCALIBUR v2.0 | TITAN v7.0 | BFL Multi-IA
# Ejecutar: después de SPRINT C sealed

---

# SPRINT D — i18n APLICADO
# SPEC_ID: EX-v2-I18N-002
# Tiempo: 2-3h

---

## FASE II — FORGE [qwen2.5-coder:14b vía Aider]

```bash
aider --model ollama/qwen2.5-coder:14b \
      src/app/page.tsx \
      src/components/organisms/CasesSection/CasesSection.tsx \
      src/components/organisms/ContactSection/ContactSection.tsx
```

Prompt:
```
Aplicar next-intl en EXCALIBUR v2.0.
Los archivos en.json y es.json ya están completos — NO los modificar.

ARCHIVO 1: src/app/page.tsx

Es un Server Component. Usar getTranslations (no useTranslations).

Agregar al inicio:
import { getTranslations } from 'next-intl/server'
Convertir a async: export default async function HomePage()

Reemplazar los strings del hero con:
const t = await getTranslations('hero')
headline: t('title')
subheadline: t('subtitle')
ctaLabel: t('cta')
secondaryCtaLabel: t('ctaSecondary')

Los datos de casos (caseProjects), síntomas, roles y TITAN
NO se traducen vía i18n — son datos de contenido, no UI strings.

ARCHIVO 2: src/components/organisms/CasesSection/CasesSection.tsx

Agregar 'use client' si no lo tiene.
Importar: import { useTranslations } from 'next-intl'
En el componente: const t = useTranslations('cases')

Reemplazar:
- "Casos de estudio" → t('title')
- "No hay proyectos para los filtros seleccionados." → t('empty')
- El aria-live label del grid → t('title')

ARCHIVO 3: src/components/organisms/ContactSection/ContactSection.tsx

Importar: import { useTranslations } from 'next-intl'
En el componente: const t = useTranslations('contact')

Reemplazar:
- "Hablemos" → t('title')
- "Cuéntame sobre tu proyecto o desafío" → t('subtitle')
- "Canal de contacto" → t('channels.label')
- "LinkedIn"/"Email"/"GitHub" → t('channels.linkedin') etc
- "Formulario de contacto" → t('form.label')
- "Nombre"/"Email"/"Mensaje" → t('form.name') etc
- "Enviar"/"Enviando..." → t('form.submit') / t('form.submitting')
- "¡Mensaje enviado!" → t('form.success')
- "Te contactaré pronto." → t('form.successDetail')
- Mensajes de error → t('form.errors.nameRequired') etc

REGLAS:
- No cambiar ningún dato de contenido (solo strings de UI)
- No tocar los casos, métricas ni datos del portafolio
- Zero hardcoded strings de UI en español
```

## STATUS SPRINT D

```bash
cat > /tmp/validate_sprint_d.sh << 'EOF'
#!/bin/bash
echo "=== VALIDACIÓN SPRINT D — i18n ==="
PASS=0; FAIL=0

check() {
  if eval "$2" > /dev/null 2>&1; then
    echo "✅ $1"; ((PASS++))
  else
    echo "❌ $1"; ((FAIL++))
  fi
}

check "getTranslations en page.tsx" "grep -q 'getTranslations' src/app/page.tsx"
check "page.tsx async" "grep -q 'async function HomePage' src/app/page.tsx"
check "hero title desde t()" "grep -q \"t('title')\" src/app/page.tsx"
check "useTranslations en CasesSection" "grep -q 'useTranslations' src/components/organisms/CasesSection/CasesSection.tsx"
check "useTranslations en ContactSection" "grep -q 'useTranslations' src/components/organisms/ContactSection/ContactSection.tsx"
check "Sin 'Casos de estudio' hardcoded" "! grep -q 'Casos de estudio' src/components/organisms/CasesSection/CasesSection.tsx"
check "Sin 'Hablemos' hardcoded" "! grep -q 'Hablemos' src/components/organisms/ContactSection/ContactSection.tsx"
check "Sin 'Enviar' hardcoded" "! grep -q \"'Enviar'\" src/components/organisms/ContactSection/ContactSection.tsx"
check "pnpm build pasa" "pnpm build 2>/dev/null"

echo ""
echo "RESULTADO: $PASS/9 PASS · $FAIL FAIL"
[ $FAIL -eq 0 ] && echo "SPRINT_D: ✅ SEALED" || echo "SPRINT_D: ❌ BLOCKED"
EOF
bash /tmp/validate_sprint_d.sh
```

## COMMIT SPRINT D

```bash
git add src/app/page.tsx \
        src/components/organisms/CasesSection/CasesSection.tsx \
        src/components/organisms/ContactSection/ContactSection.tsx

git commit -m "feat(i18n): EX-v2-I18N-002 aplicar next-intl en page + organismos

- page.tsx: getTranslations para hero strings
- CasesSection: useTranslations para UI strings
- ContactSection: useTranslations para form y labels
- Datos de contenido (casos, métricas) no se traducen
SPRINT_D: SEALED ✅"

git push origin v2
```

---

# SPRINT E — CHROMATIC BASELINE
# Tiempo: 15 minutos (manual)

---

## Instrucción directa (no necesita Aider):

**Paso 1:** Abrir en el browser:
```
chromatic.com → tu proyecto excalibur
```

**Paso 2:** Ir al último build → "Review changes"

**Paso 3:** Click "Accept all" para establecer el baseline

**Paso 4:** Verificar que el check de Chromatic queda verde en GitHub

## STATUS SPRINT E

```bash
cat > /tmp/validate_sprint_e.sh << 'EOF'
#!/bin/bash
echo "=== VALIDACIÓN SPRINT E — CHROMATIC ==="

# Verificar que todas las stories existen
ORGS="src/components/organisms"
ATOMS="src/components/atoms"
MOLS="src/components/molecules"
PASS=0; FAIL=0

check() {
  if eval "$2" > /dev/null 2>&1; then
    echo "✅ $1"; ((PASS++))
  else
    echo "❌ $1"; ((FAIL++))
  fi
}

# Átomos con stories
for comp in Badge Button Chip Icon Metric Tag ThemeToggle; do
  check "$comp stories" "test -f $ATOMS/$comp/$comp.stories.tsx"
done

# Moléculas con stories
for comp in AudienceCard MetricRow NavTab ProjectCard RoadmapSplitButton SkillBar TimelineStep; do
  check "$comp stories" "test -f $MOLS/$comp/$comp.stories.tsx"
done

# Organismos con stories
for comp in CasesSection ContactSection Hero InquisitorHUD NavSystem StackSection TitanRAGAgent TitanSection; do
  check "$comp stories" "test -f $ORGS/$comp/$comp.stories.tsx"
done

# Contar stories totales
TOTAL=$(find src -name "*.stories.tsx" | wc -l | tr -d ' ')
echo ""
echo "Total stories encontradas: $TOTAL"
echo "RESULTADO: $PASS/$((PASS+FAIL)) PASS · $FAIL FAIL"
[ $FAIL -eq 0 ] && echo "SPRINT_E: ✅ READY para Chromatic" || echo "SPRINT_E: ❌ Faltan stories"
EOF
bash /tmp/validate_sprint_e.sh
```

---

# SPRINT F — BACKEND M4
# Tiempo: 3-4h (manual con guía)

---

## F1. Railway — paso a paso

```
1. railway.app → New Project → Empty Project
2. + New → Database → PostgreSQL → Deploy
3. Esperar: PostgreSQL ✅ Running
4. PostgreSQL → Connect → copiar Postgres Connection String
```

## F2. Activar pgvector

```
Railway → PostgreSQL → Data → Query → ejecutar:

CREATE EXTENSION IF NOT EXISTS vector;
SELECT extversion FROM pg_extension WHERE extname = 'vector';
-- Debe mostrar la versión, ej: 0.7.0
```

## F3. Strapi v5

```bash
# Local — crear repo del CMS
npx create-strapi@latest excalibur-cms
# Seleccionar: TypeScript · PostgreSQL · skip cloud
cd excalibur-cms
git init && git add . && git commit -m "init: Strapi v5 excalibur-cms"
gh repo create MauroPX/excalibur-cms --private --push --source=.
```

```
Railway → + New → GitHub Repo → MauroPX/excalibur-cms

Variables de entorno en Railway (Strapi service):
  DATABASE_URL         = [la connection string del PostgreSQL]
  DATABASE_CLIENT      = postgres
  NODE_ENV             = production
  APP_KEYS             = [openssl rand -base64 32]
  API_TOKEN_SALT       = [openssl rand -base64 32]
  ADMIN_JWT_SECRET     = [openssl rand -base64 32]
  JWT_SECRET           = [openssl rand -base64 32]
  TRANSFER_TOKEN_SALT  = [openssl rand -base64 32]

Generar 5 secrets distintos:
```

```bash
# Ejecutar 5 veces, usar cada output para una variable:
openssl rand -base64 32
```

## F4. Configurar Strapi

```
https://[tu-app].up.railway.app/admin
→ Create first administrator (guardar credenciales)
→ Content-Type Builder → + Create new collection type

Crear: Project
Campos: client · sector · slug (UID) · context · problem · action · result
        metrics (JSON) · skills (JSON) · stack (JSON) · tags (JSON)
        repo_url · storybook_url · live_url · featured (Boolean)

→ Settings → Users & Permissions → Roles → Public
→ Project: find ✓ · findOne ✓ → Save

→ Settings → API Tokens → + Create
Name: excalibur-frontend · Type: Read-only · Duration: Unlimited
→ Save → COPIAR EL TOKEN
```

## F5. Conectar a Vercel

```
vercel.com → excalibur → Settings → Environment Variables

Agregar:
NEXT_PUBLIC_STRAPI_URL = https://[tu-app].up.railway.app
STRAPI_API_TOKEN       = [el token copiado]

→ Deployments → último → ··· → Redeploy
```

## F6. Poblar contenido en Strapi

```
Admin Strapi → Content Manager → Project → + Create new entry

Entrada 1 — FDN:
  client:  Financiera de Desarrollo Nacional
  sector:  GovTech
  slug:    fdn
  problem: LCP 25.2s y 654 fallas WCAG en portal Drupal 7
  action:  Migración Next.js 14 + Strapi v5 + Cloudflare WAF
  result:  LCP → 2.5s (-90%) · 654 fallas eliminadas · WCAG AAA
  metrics: [{"value":"-90%","label":"LCP"},{"value":"654","label":"fallas WCAG"}]
  tags:    ["GovTech","Next.js","WCAG","A11Y","Performance"]
  → Publish

Entrada 2 — Solidaria:
  client:  Solidaria Portal
  sector:  Insurtech
  slug:    solidaria
  problem: Sin DS, sin tests, sin accesibilidad verificable
  action:  Design System desde cero, 212 tests, Storybook Chromatic
  result:  0 axe violations, 212 tests verdes, DS en producción
  metrics: [{"value":"212","label":"tests"},{"value":"0","label":"violations"}]
  storybook_url: https://6a2d61bf2ded342d004f1b8f-gjmdfbfoac.chromatic.com
  repo_url: https://github.com/MauroPX/solidaria-portal
  → Publish

Entrada 3 — BBVA:
  client:  BBVA Colombia & Panamá
  sector:  Banca & Fintech
  slug:    bbva
  problem: Alta carga cognitiva en contratación Pyme, TTM 12 meses
  action:  Framework GEMAS, Proyecto Brickell, arquitectura Pyme
  result:  -75% TTM, digitalización 100% contratación Pyme, 2 países
  metrics: [{"value":"-75%","label":"TTM"},{"value":"100%","label":"digital"}]
  → Publish
```

## F7. Dominio

```
vercel.com → excalibur → Settings → Domains
→ Add Domain → maurogomez.design

DNS en tu registrar:
  A     @   76.76.21.21
  CNAME www cname.vercel-dns.com

Esperar propagación (5 min - 48h)
```

## STATUS SPRINT F

```bash
cat > /tmp/validate_sprint_f.sh << 'EOF'
#!/bin/bash
echo "=== VALIDACIÓN SPRINT F — BACKEND ==="
PASS=0; FAIL=0

check() {
  if eval "$2" > /dev/null 2>&1; then
    echo "✅ $1"; ((PASS++))
  else
    echo "❌ $1"; ((FAIL++))
  fi
}

# Verificar env vars configuradas
check "STRAPI_URL en .env.local" "grep -q 'NEXT_PUBLIC_STRAPI_URL' .env.local && grep -q 'railway.app' .env.local"
check "STRAPI_TOKEN en .env.local" "grep -q 'STRAPI_API_TOKEN' .env.local"

# Verificar que Strapi responde
STRAPI_URL=$(grep 'NEXT_PUBLIC_STRAPI_URL' .env.local | cut -d= -f2)
check "Strapi /api/projects responde" "curl -s '$STRAPI_URL/api/projects' | grep -q 'data'"
check "FDN en Strapi" "curl -s '$STRAPI_URL/api/projects?filters[slug][\$eq]=fdn' | grep -q 'fdn'"
check "Solidaria en Strapi" "curl -s '$STRAPI_URL/api/projects?filters[slug][\$eq]=solidaria' | grep -q 'solidaria'"
check "BBVA en Strapi" "curl -s '$STRAPI_URL/api/projects?filters[slug][\$eq]=bbva' | grep -q 'bbva'"

# Verificar /api/health
check "/api/health strapi=up" "curl -s 'http://localhost:3000/api/health' | grep -q '\"strapi\":\"up\"'"
check "/api/health claude=up" "curl -s 'http://localhost:3000/api/health' | grep -q '\"claude\":\"up\"'"
check "/api/health status=ok" "curl -s 'http://localhost:3000/api/health' | grep -q '\"status\":\"ok\"'"

# Verificar /api/chat con datos reales
check "/api/chat responde con FDN" "curl -s -X POST 'http://localhost:3000/api/chat' -H 'Content-Type: application/json' -d '{\"message\":\"cuéntame del proyecto FDN\"}' | grep -qi 'fdn\|wcag\|lcp'"

echo ""
echo "RESULTADO: $PASS/10 PASS · $FAIL FAIL"
[ $FAIL -eq 0 ] && echo "SPRINT_F: ✅ SEALED — Backend operativo" || echo "SPRINT_F: ❌ BLOCKED — $FAIL items"
EOF
bash /tmp/validate_sprint_f.sh
```

---

# SCRIPT MAESTRO DE AUDITORÍA — ESTADO GLOBAL

```bash
cat > /tmp/audit_excalibur_global.sh << 'EOF'
#!/bin/bash
echo ""
echo "╔══════════════════════════════════════════════════╗"
echo "║  EXCALIBUR v2.0 — AUDITORÍA GLOBAL              ║"
echo "║  TITAN v7.0 | $(date +%Y-%m-%d)                        ║"
echo "╚══════════════════════════════════════════════════╝"
echo ""

TOTAL=0; PASSED=0

run_sprint() {
  local NAME=$1; local SCRIPT=$2
  echo "━━━ $NAME ━━━"
  local RESULT=$(bash $SCRIPT 2>/dev/null | tail -3)
  echo "$RESULT"
  echo "$RESULT" | grep -q "SEALED" && ((PASSED++))
  ((TOTAL++))
  echo ""
}

run_sprint "SPRINT A — Tema"      /tmp/validate_sprint_a.sh
run_sprint "SPRINT B — Contenido" /tmp/validate_sprint_b.sh
run_sprint "SPRINT C — Visual"    /tmp/validate_sprint_c.sh
run_sprint "SPRINT D — i18n"      /tmp/validate_sprint_d.sh
run_sprint "SPRINT E — Storybook" /tmp/validate_sprint_e.sh
run_sprint "SPRINT F — Backend"   /tmp/validate_sprint_f.sh

echo "╔══════════════════════════════════════════════════╗"
echo "║  RESULTADO GLOBAL: $PASSED/$TOTAL sprints SEALED          ║"
if [ $PASSED -eq $TOTAL ]; then
  echo "║  ✅ EXCALIBUR v2.0 — PRODUCTION READY            ║"
else
  echo "║  ⚠️  $((TOTAL-PASSED)) sprint(s) pendientes de cerrar       ║"
fi
echo "╚══════════════════════════════════════════════════╝"
EOF
chmod +x /tmp/audit_excalibur_global.sh
```

Para auditoría completa en cualquier momento:
```bash
bash /tmp/audit_excalibur_global.sh
```

---

# RESUMEN DE EJECUCIÓN

```
SPRINT A  → Claude Code (Blueprint) + Aider qwen2.5-coder (Forge)
            + deepseek-r1 (Review) + validate_sprint_a.sh
            → MERGE → v2

SPRINT B  → Claude Code (Blueprint) + Aider qwen2.5-coder (Forge)
            + deepseek-r1 (Review) + validate_sprint_b.sh
            → MERGE → v2

SPRINT C  → Claude Code (Blueprint) + Aider qwen2.5-coder (ThemeToggle + Radar)
            + Aider qwen2.5 (6 stories) + deepseek-r1 (Review)
            + validate_sprint_c.sh → MERGE → v2

SPRINT D  → Claude Code (Blueprint) + Aider qwen2.5-coder (i18n)
            + validate_sprint_d.sh → MERGE → v2

SPRINT E  → Manual (Chromatic) + validate_sprint_e.sh

SPRINT F  → Manual (Railway + Strapi) + validate_sprint_f.sh

AUDITORÍA → bash /tmp/audit_excalibur_global.sh
            → 6/6 SEALED = PRODUCTION READY ✅
```
