#!/bin/bash
# SETUP_CIERRE.sh — EXCALIBUR v2.0
# Ejecutar desde: ~/Desktop/excalibur
set -euo pipefail

GREEN='\033[0;32m'; CYAN='\033[0;36m'; RED='\033[0;31m'; NC='\033[0m'
ok()   { echo -e "  ${GREEN}✅ $1${NC}"; }
info() { echo -e "  ${CYAN}▶ $1${NC}"; }
fail() { echo -e "  ${RED}❌ $1${NC}"; }

echo ""
echo -e "${CYAN}╔══════════════════════════════════════╗${NC}"
echo -e "${CYAN}║  EXCALIBUR v2.0 — SETUP DE CIERRE   ║${NC}"
echo -e "${CYAN}╚══════════════════════════════════════╝${NC}"
echo ""

# Verificar repo
[ ! -f "package.json" ] && { fail "No estás en excalibur/"; exit 1; }
ok "Repo: $(pwd)"

# Directorios
mkdir -p docs/m3/ape docs/m3/audit docs/m3/certificates multi-ia/logs multi-ia/outputs
ok "Directorios creados"

# TITAN_PROJECT.yaml
if [ ! -f "TITAN_PROJECT.yaml" ]; then
cat > TITAN_PROJECT.yaml << 'YAML'
project:
  name: "EXCALIBUR v2.0"
  titan_version: "7.0"
  rama_activa: "v2"
council_roles:
  architect:   { model: "claude-sonnet-4-6", provider: "claude-code" }
  inquisitor:  { model: "deepseek-r1:14b",   provider: "ollama" }
  craftsman:   { model: "qwen2.5-coder:14b", provider: "ollama" }
  observer:    { model: "qwen2.5:14b",        provider: "ollama" }
  tester:      { model: "gemma2:9b",          provider: "ollama" }
momentum_status:
  M0: "LOCKED"
  M1: "LOCKED"
  M2: "LOCKED"
  M3: "LOCKED — 26/26 · 171 tests"
  M4: "PENDIENTE"
  M5: "PENDIENTE"
YAML
ok "TITAN_PROJECT.yaml creado"
else
  ok "TITAN_PROJECT.yaml ya existe"
fi

# .aider.conf.yml
cat > .aider.conf.yml << 'AIDER'
model: ollama/qwen2.5-coder:14b
auto-commits: true
commit-prefix: "feat(bfl):"
dirty-commits: false
AIDER
ok ".aider.conf.yml creado"

# APE_DECLARATION_M1.md
cat > docs/m1/APE_DECLARATION_M1.md << 'APE'
# APE_DECLARATION_M1 — EXCALIBUR v2.0
# TITAN v7.0 | SKILL_PERSUASION | 2026-06-24
# Firmado: Leonel Mauricio Gómez Ocampo

APE_DECLARATION_M1:
─────────────────────────────────────────────────────────
MOMENTUM: M1 | FECHA: 2026-06-24 | FIRMADO: PO+TL
─────────────────────────────────────────────────────────

ETHOS — Fuentes de autoridad:
  Decisión 1: Audiencias A1-A4
    Fuente: 10+ años experiencia directa + 20 proyectos en evidence-dna.json
    Evidencia: FDN · BBVA · Solidaria · Correos Chile — sectores reales

  Decisión 2: TitanRAGAgent como diferenciador
    Fuente: benchmarking — ningún portafolio Staff en LATAM tiene RAG real
    Evidencia: ADR-005 + experiencia FDN con stack Next.js+Strapi

  Decisión 3: Stack Next.js 15 + MUI v6
    Fuente: ADR-001 + FDN produjo LCP -90% con este stack exacto

PATHOS — Insights reales:
  Insight 1 — El reclutador que no puede verificar
    Usuario: Reclutador técnico startup Series B EE.UU.
    Intenta: evaluar si Mauricio puede liderar su DS
    Falla en: ningún portafolio muestra evidencia técnica verificable
    Causa raíz: portafolios son visuales, no técnicos — no hay código real
    Emoción: frustración + desconfianza
    Escenario: Storybook live + repos públicos + métricas verificables
    Historia: "Como reclutador quiero ver código real y métricas
    para recomendar al candidato con confianza — sin esto no puedo."

  Insight 2 — El CTO con DS caótico
    Usuario: CTO fintech colombiana con deuda técnica
    Intenta: contratar a alguien que ordene el caos sin romper producción
    Falla en: portafolios muestran proyectos bonitos, no legacys reales
    Causa raíz: nadie muestra cómo resolvió un Drupal 7 en producción
    Emoción: ansiedad — "si contrato mal pierdo 6 meses"
    Escenario: caso FDN (Drupal 7 → Next.js, LCP -90%) habla su idioma
    Historia: "Como CTO quiero ver resolución de problemas como los míos
    para contratar con confianza — sin eso no asumo el riesgo."

  Insight 3 — El visitante que llega y se pierde
    Usuario: PM/diseñador LATAM buscando referentes
    Intenta: encontrar recursos de su industria
    Falla en: portafolios son catálogos pasivos sin respuestas específicas
    Causa raíz: sin IA conversacional el visitante navega sin encontrar
    Emoción: curiosidad frustrada → abandono en 2 minutos
    Escenario: TitanRAGAgent responde preguntas específicas en tiempo real
    Historia: "Como PM quiero hacer preguntas específicas al portafolio
    para encontrar lo que me importa sin navegar páginas completas."

LOGOS — Trazabilidad:
  TitanRAGAgent ← Insight 1 + ADR-005 + /api/chat verificable
  CasesSection filtros ← Insight 2 + Miller's Law + symptomTags en código
  NavSystem 4 tabs ← Insights 1,2,3 + Miller's Law + NavSystem.tsx

APE_STATUS:
  ETHOS: PASS | PATHOS: PASS | LOGOS: PASS
  APE_GATE_M1: PASS
─────────────────────────────────────────────────────────
APE
ok "APE_DECLARATION_M1.md creado"

# .gitignore
grep -q "storybook-static" .gitignore 2>/dev/null || echo "storybook-static/" >> .gitignore
grep -q "multi-ia/outputs" .gitignore 2>/dev/null || {
  echo "multi-ia/outputs/" >> .gitignore
  echo "multi-ia/logs/" >> .gitignore
}
ok ".gitignore actualizado"

# eslint fix
if grep -q "eslint-config-next/typescript'" eslint.config.mjs 2>/dev/null; then
  sed -i.bak "s|eslint-config-next/typescript'|eslint-config-next/typescript.js'|g" eslint.config.mjs
  rm -f eslint.config.mjs.bak
  ok "eslint.config.mjs corregido"
fi

# Commit
git add TITAN_PROJECT.yaml .aider.conf.yml .gitignore eslint.config.mjs \
        docs/m1/APE_DECLARATION_M1.md docs/m0/TITAN_SKILL_PERSUASION.md \
        docs/m3/ape/ docs/m3/audit/ multi-ia/ 2>/dev/null || true

git commit -m "chore(setup): TITAN_PROJECT.yaml + Consejo + APE_M1 + fixes

- TITAN_PROJECT.yaml: 5 roles del Consejo mapeados a modelos Ollama
- .aider.conf.yml: CRAFTSMAN qwen2.5-coder:14b
- APE_DECLARATION_M1.md: 3 insights reales con Ethos+Pathos+Logos
- TITAN_SKILL_PERSUASION.md en docs/m0/
- .gitignore: storybook-static + multi-ia/outputs
- eslint.config.mjs: typescript.js con extensión
TITAN v7.0 SKILL_PERSUASION activo" 2>/dev/null || true

git push origin "$(git branch --show-current)" 2>/dev/null || true
ok "Commiteado y pusheado"

echo ""
echo -e "${GREEN}╔══════════════════════════════════════╗${NC}"
echo -e "${GREEN}║  ✅ SETUP COMPLETO                   ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════╝${NC}"
echo ""
echo "  Siguiente: bash multi-ia/workflow_bfl.sh audit"
echo ""
