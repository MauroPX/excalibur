#!/bin/bash
# workflow_bfl.sh — EXCALIBUR v2.0 — Auditoría global
PHASE="${1:-audit}"
GREEN='\033[0;32m'; RED='\033[0;31m'; YELLOW='\033[1;33m'; CYAN='\033[0;36m'; NC='\033[0m'
pass() { echo -e "  ${GREEN}OK $1${NC}"; }
fail() { echo -e "  ${RED}NO $1${NC}"; }
warn() { echo -e "  ${YELLOW}WW $1${NC}"; }
PASS=0; FAIL=0; WARN=0
chk() {
  local name="$1" cmd="$2" type="${3:-fail}"
  if bash -c "$cmd" > /dev/null 2>&1; then
    pass "$name"; PASS=$((PASS+1))
  else
    if [ "$type" = "warn" ]; then warn "$name"; WARN=$((WARN+1))
    else fail "$name"; FAIL=$((FAIL+1)); fi
  fi
}
echo ""
echo "AUDITORIA EXCALIBUR v2.0 — $(date +%Y-%m-%d)"
echo ""
echo "--- CONSEJO ---"
chk "TITAN_PROJECT.yaml" "test -f TITAN_PROJECT.yaml"
chk "CLAUDE.md" "test -f CLAUDE.md"
chk ".aider.conf.yml" "test -f .aider.conf.yml"
chk "Ollama activo" "curl -s http://localhost:11434/api/tags" warn
chk "deepseek-r1:14b" "ollama list 2>/dev/null | grep -q deepseek-r1" warn
chk "qwen2.5-coder:14b" "ollama list 2>/dev/null | grep -q qwen2.5-coder" warn
chk "gemma2:9b" "ollama list 2>/dev/null | grep -q gemma2" warn
echo ""
echo "--- TEMA ---"
chk "src/theme/tokens.ts" "test -f src/theme/tokens.ts"
chk "Token C4BEFF dark" "grep -q C4BEFF src/theme/tokens.ts"
chk "Surface 0D0F1A dark" "grep -q 0D0F1A src/theme/tokens.ts"
chk "ThemeRegistry toggle" "grep -q localStorage src/theme/ThemeRegistry.tsx"
chk "globals.css dark" "grep -q 0D0F1A src/app/globals.css"
chk "globals.css data-theme" "grep -q data-theme src/app/globals.css"
chk "layout anti-flash" "grep -q excalibur-theme src/app/layout.tsx"
echo ""
echo "--- CONTENIDO ---"
chk "Sin Rappi" "! grep -qi rappi src/app/page.tsx"
chk "Sin Bancolombia" "! grep -qi bancolombia src/app/page.tsx"
chk "Caso FDN" "grep -q fdn src/app/page.tsx"
chk "Caso Solidaria" "grep -q solidaria src/app/page.tsx"
chk "Caso BBVA" "grep -q bbva src/app/page.tsx"
chk "SYSTEM_PROMPT FDN" "grep -q FDN src/app/api/chat/route.ts"
echo ""
echo "--- APE SKILL_PERSUASION ---"
chk "TITAN_SKILL_PERSUASION.md" "test -f docs/m0/TITAN_SKILL_PERSUASION.md"
chk "APE_DECLARATION_M1.md" "test -f docs/m1/APE_DECLARATION_M1.md"
chk "APE_GATE_M1 PASS" "grep -q 'APE_GATE_M1: PASS' docs/m1/APE_DECLARATION_M1.md"
echo ""
echo "--- COMPONENTES ---"
LOCKED=0
for d in src/components/atoms/*/ src/components/molecules/*/ src/components/organisms/*/ src/components/templates/*/; do
  if [ -f "${d}VERSION_CERTIFICATE.json" ]; then
    S=$(python3 -c "import json; print(json.load(open('${d}VERSION_CERTIFICATE.json')).get('status','?'))" 2>/dev/null || echo "?")
    [ "$S" = "LOCKED" ] && LOCKED=$((LOCKED+1))
  fi
done
chk "26 LOCKED ($LOCKED)" "[ $LOCKED -ge 26 ]"
chk "pnpm build" "pnpm build 2>/dev/null"
echo ""
echo "--- STORYBOOK ---"
chk "Sin @storybook/react" "! grep -r '@storybook/react' src/components/ 2>/dev/null"
for org in CasesSection ContactSection NavSystem InquisitorHUD TitanSection StackSection; do
  chk "$org stories" "test -f src/components/organisms/$org/$org.stories.tsx"
done
echo ""
echo "--- i18n ---"
chk "en.json" "test -f src/i18n/messages/en.json"
chk "es.json" "test -f src/i18n/messages/es.json"
chk "getTranslations page.tsx" "grep -q getTranslations src/app/page.tsx"
echo ""
echo "--- BACKEND ---"
chk "STRAPI_URL Railway" "grep -q railway.app .env.local 2>/dev/null" warn
chk ".github/workflows/v2.yml" "test -f .github/workflows/v2.yml"
chk ".vercelignore stories" "grep -q stories .vercelignore"
echo ""
TOTAL=$((PASS+FAIL+WARN))
PCT=$((PASS*100/TOTAL))
echo "=============================="
echo "RESULTADO: $PASS PASS / $FAIL FAIL / $WARN WARN"
echo "INTEGRIDAD: $PCT% ($PASS/$TOTAL)"
echo ""
[ $FAIL -eq 0 ] && echo "PRODUCTION READY" || echo "$FAIL GAPS CRITICOS PENDIENTES"
echo ""
echo "--- SPRINTS PENDIENTES ---"
grep -qi 'rappi\|bancolombia\|frubana' src/app/page.tsx 2>/dev/null && echo "SPRINT_B: contenido placeholder en produccion — URGENTE"
test -f src/theme/tokens.ts || echo "SPRINT_A: tema dark/light toggle pendiente"
grep -q getTranslations src/app/page.tsx 2>/dev/null || echo "SPRINT_D: i18n no aplicado en page.tsx"
test -f src/components/atoms/ThemeToggle/ThemeToggle.tsx || echo "SPRINT_C: ThemeToggle + RadarChart + 6 stories"
grep -q railway.app .env.local 2>/dev/null || echo "SPRINT_F: Railway + Strapi pendiente"
echo ""
mkdir -p docs/m3/audit
echo "Auditoria: $(date) | $PASS PASS $FAIL FAIL $WARN WARN | $PCT%" > "docs/m3/audit/AUDIT_$(date +%Y%m%d).md"
echo "Reporte guardado en docs/m3/audit/"
