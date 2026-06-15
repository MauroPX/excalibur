#!/bin/bash
# workflow.sh — EXCALIBUR v2.0
# Workflow Multi-IA integrado con ciclo BFL de TITAN v7.0
# 
# Uso: ./multi-ia/workflow.sh "EX-v2-ATOM-001" "Button" "atoms"
#   Arg 1: SPEC_ID     (ej: EX-v2-ATOM-001)
#   Arg 2: Componente  (ej: Button)
#   Arg 3: Nivel       (atoms | molecules | organisms | templates)
#
# Requiere:
#   - Ollama corriendo: ollama serve
#   - Modelos: qwen2.5-coder:14b · gemma2:9b · qwen2.5:14b · deepseek-r1:14b
#   - ANTHROPIC_API_KEY en el entorno (export ANTHROPIC_API_KEY=sk-ant-...)
#   - Claude Code instalado: npm install -g @anthropic-ai/claude-code
#   - Ejecutar desde la raíz del repo: ./multi-ia/workflow.sh ...

set -e

# ── ARGUMENTOS ──
SPEC_ID="${1}"
COMPONENT="${2}"
LEVEL="${3}"

if [ -z "$SPEC_ID" ] || [ -z "$COMPONENT" ] || [ -z "$LEVEL" ]; then
  echo ""
  echo "❌ ERROR: Faltan argumentos"
  echo ""
  echo "Uso: ./multi-ia/workflow.sh SPEC_ID Componente nivel"
  echo "Ej:  ./multi-ia/workflow.sh EX-v2-ATOM-001 Button atoms"
  echo ""
  echo "Niveles válidos: atoms | molecules | organisms | templates"
  echo ""
  exit 1
fi

# ── CONFIGURACIÓN ──
BASE_DIR="multi-ia"
CONTEXT="$BASE_DIR/PROJECT_CONTEXT.md"
RULES="$BASE_DIR/agent_rules.md"
SPEC_DOC="docs/m2/spec/SPEC_DOCUMENT.md"
TOKENS_FILE="docs/m2/design/DESIGN_TOKENS.json"
BLUEPRINT_FILE="src/components/$LEVEL/$COMPONENT/$COMPONENT.blueprint.json"
COMP_DIR="src/components/$LEVEL/$COMPONENT"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
LOG_FILE="$BASE_DIR/logs/workflow_${SPEC_ID}_${TIMESTAMP}.log"

# Crear directorios necesarios
mkdir -p "$BASE_DIR/logs"
mkdir -p "$BASE_DIR/outputs"
mkdir -p "$COMP_DIR"

# ── BANNER ──
echo ""
echo "╔══════════════════════════════════════════════════════╗"
echo "║  EXCALIBUR v2.0 — WORKFLOW MULTI-IA + BFL           ║"
echo "║  TITAN v7.0 | $(date +%Y-%m-%d\ %H:%M)                     ║"
echo "╚══════════════════════════════════════════════════════╝"
echo ""
echo "  SPEC_ID:    $SPEC_ID"
echo "  Componente: $COMPONENT"
echo "  Nivel:      $LEVEL"
echo "  Output:     $COMP_DIR"
echo ""

# ── VERIFICACIONES ──
echo "▶ Verificando prerequisitos..."

# Verificar que estamos en la rama correcta
CURRENT_BRANCH=$(git branch --show-current)
if [[ "$CURRENT_BRANCH" != feat/v2-* ]]; then
  echo ""
  echo "❌ ERROR: Debes estar en una rama feat/v2-* para ejecutar este workflow"
  echo "   Rama actual: $CURRENT_BRANCH"
  echo ""
  echo "   Crear la rama:"
  echo "   git checkout v2 && git pull origin v2"
  echo "   git checkout -b feat/v2-$(echo $LEVEL | cut -c1-4)-$(echo $COMPONENT | tr '[:upper:]' '[:lower:]')"
  echo ""
  exit 1
fi

# Verificar Ollama
if ! pgrep -x "ollama" > /dev/null; then
  echo "❌ ERROR: Ollama no está corriendo"
  echo "   Iniciar: ollama serve"
  exit 1
fi

# Verificar modelos de Ollama
REQUIRED_MODELS=("qwen2.5-coder:14b" "gemma2:9b" "qwen2.5:14b" "deepseek-r1:14b")
for model in "${REQUIRED_MODELS[@]}"; do
  if ! ollama list | grep -q "$(echo $model | cut -d: -f1)"; then
    echo "⚠️  Modelo no encontrado: $model"
    echo "   Descargar: ollama pull $model"
    echo "   (puede tardar varios minutos — ~8-10GB por modelo)"
  fi
done

# Verificar BLUEPRINT_SPEC.json (debe existir — lo genera Claude Code en el Blueprint)
if [ ! -f "$BLUEPRINT_FILE" ]; then
  echo ""
  echo "❌ ERROR: No encontré $BLUEPRINT_FILE"
  echo ""
  echo "   El BLUEPRINT_SPEC.json lo genera Claude Code en la Fase I."
  echo "   Ejecuta primero el prompt de Blueprint en Claude Code:"
  echo "   → docs/m3/prompts/ola*/PROMPT_${SPEC_ID}_${COMPONENT}.md (Fase I)"
  echo ""
  exit 1
fi

# Verificar SPEC en SPEC_DOCUMENT
if ! grep -q "$SPEC_ID" "$SPEC_DOC"; then
  echo "❌ ERROR: $SPEC_ID no encontrado en $SPEC_DOC"
  exit 1
fi

echo "  ✅ Rama: $CURRENT_BRANCH"
echo "  ✅ Ollama corriendo"
echo "  ✅ BLUEPRINT_SPEC.json existe"
echo "  ✅ SPEC_ID en SPEC_DOCUMENT"
echo ""

# ── EXTRAER SPEC DEL SPEC_DOCUMENT ──
echo "▶ Extrayendo SPEC de SPEC_DOCUMENT..."
# Extraer el bloque del SPEC_ID hasta el siguiente ##
SPEC_CONTENT=$(awk "/^###? ${SPEC_ID}/,/^###? EX-v2-/" "$SPEC_DOC" | head -n -1)
echo "$SPEC_CONTENT" > "$BASE_DIR/outputs/spec_${SPEC_ID}.txt"
echo "  ✅ SPEC extraído"
echo ""

# ── PASO 1: ORQUESTACIÓN (deepseek-r1:14b) ──
echo "▶ PASO 1/6 — Orquestación con deepseek-r1:14b..."
echo "  Descomponiendo $SPEC_ID en 4 subtareas BFL..."

ORQUEST_PROMPT="$(cat $CONTEXT $RULES)

---

Eres un Tech Lead senior del proyecto EXCALIBUR v2.0.
Tienes el siguiente SPEC para construir:

SPEC_ID: $SPEC_ID
Componente: $COMPONENT
Nivel atómico: $LEVEL

SPEC del componente:
$(cat $BASE_DIR/outputs/spec_${SPEC_ID}.txt)

BLUEPRINT_SPEC.json:
$(cat $BLUEPRINT_FILE)

Descompón la fase FORGE de este SPEC en 4 prompts especializados:

### IMPLEMENTADOR
[Prompt detallado para qwen2.5-coder:14b que implemente $COMPONENT.tsx
siguiendo exactamente el BLUEPRINT_SPEC.json. Incluir: props tipadas,
variantes, estados, tokens M3 correctos, BEM exacto del blueprint,
TypeScript strict. Sin explicaciones — solo el código.]

### TESTER
[Prompt detallado para gemma2:9b que genere $COMPONENT.test.tsx
con Vitest + Testing Library + jest-axe. Un test por CA del SPEC.
axe() en cada render. Coverage objetivo: >= 80%.]

### DOCUMENTADOR
[Prompt detallado para qwen2.5:14b que genere $COMPONENT.stories.tsx
para Storybook 8. Una story por estado del blueprint. Dark theme.
parameters.titan con el SPEC_ID. Canvas contextual.]

### REVISOR
[Prompt detallado para revisar el código generado por coherencia con
el BLUEPRINT_SPEC.json, tokens M3, WCAG, TypeScript strict y BEM.]"

echo "$ORQUEST_PROMPT" | ollama run deepseek-r1:14b > "$BASE_DIR/outputs/plan_${SPEC_ID}.txt" 2>&1
echo "  ✅ Plan generado en: $BASE_DIR/outputs/plan_${SPEC_ID}.txt"
echo ""

# Extraer prompts del plan
extract_block() {
  local file="$1"
  local header="$2"
  awk "/^### ${header}/,/^### /" "$file" | head -n -1 | tail -n +2
}

extract_block "$BASE_DIR/outputs/plan_${SPEC_ID}.txt" "IMPLEMENTADOR" > "$BASE_DIR/outputs/impl_prompt.txt"
extract_block "$BASE_DIR/outputs/plan_${SPEC_ID}.txt" "TESTER" > "$BASE_DIR/outputs/test_prompt.txt"
extract_block "$BASE_DIR/outputs/plan_${SPEC_ID}.txt" "DOCUMENTADOR" > "$BASE_DIR/outputs/doc_prompt.txt"
extract_block "$BASE_DIR/outputs/plan_${SPEC_ID}.txt" "REVISOR" > "$BASE_DIR/outputs/review_prompt.txt"

# ── PASO 2: IMPLEMENTACIÓN (qwen2.5-coder:14b) ──
echo "▶ PASO 2/6 — Forge código con qwen2.5-coder:14b..."

IMPL_INPUT="$(cat $RULES)

BLUEPRINT_SPEC.json del componente:
$(cat $BLUEPRINT_FILE)

DESIGN_TOKENS disponibles:
$(cat $TOKENS_FILE)

$(cat $BASE_DIR/outputs/impl_prompt.txt)"

echo "$IMPL_INPUT" | ollama run qwen2.5-coder:14b > "$BASE_DIR/outputs/code_${COMPONENT}.txt" 2>&1
echo "  ✅ Código generado en: $BASE_DIR/outputs/code_${COMPONENT}.txt"
echo ""

# ── PASO 3: TESTS (gemma2:9b) ──
echo "▶ PASO 3/6 — Forge tests con gemma2:9b..."

TEST_INPUT="$(cat $RULES)

SPEC del componente (criterios de aceptación a cubrir):
$(cat $BASE_DIR/outputs/spec_${SPEC_ID}.txt)

Código del componente generado:
$(cat $BASE_DIR/outputs/code_${COMPONENT}.txt)

$(cat $BASE_DIR/outputs/test_prompt.txt)"

echo "$TEST_INPUT" | ollama run gemma2:9b > "$BASE_DIR/outputs/tests_${COMPONENT}.txt" 2>&1
echo "  ✅ Tests generados en: $BASE_DIR/outputs/tests_${COMPONENT}.txt"
echo ""

# ── PASO 4: DOCUMENTACIÓN (qwen2.5:14b) ──
echo "▶ PASO 4/6 — Forge docs con qwen2.5:14b..."

DOC_INPUT="$(cat $RULES)

Código del componente:
$(cat $BASE_DIR/outputs/code_${COMPONENT}.txt)

SPEC_ID para el parámetro titan: $SPEC_ID

$(cat $BASE_DIR/outputs/doc_prompt.txt)"

echo "$DOC_INPUT" | ollama run qwen2.5:14b > "$BASE_DIR/outputs/stories_${COMPONENT}.txt" 2>&1
echo "  ✅ Stories generadas en: $BASE_DIR/outputs/stories_${COMPONENT}.txt"
echo ""

# ── PASO 5: REVISIÓN (deepseek-r1:14b) ──
echo "▶ PASO 5/6 — Revisión con deepseek-r1:14b..."

REVIEW_INPUT="$(cat $CONTEXT $RULES)

SPEC_ID: $SPEC_ID
BLUEPRINT_SPEC.json:
$(cat $BLUEPRINT_FILE)

Código generado ($COMPONENT.tsx):
$(cat $BASE_DIR/outputs/code_${COMPONENT}.txt)

Tests generados ($COMPONENT.test.tsx):
$(cat $BASE_DIR/outputs/tests_${COMPONENT}.txt)

Stories generadas ($COMPONENT.stories.tsx):
$(cat $BASE_DIR/outputs/stories_${COMPONENT}.txt)

$(cat $BASE_DIR/outputs/review_prompt.txt)

Actúa como senior developer crítico. Revisa:
1. ¿El código implementa EXACTAMENTE el BLUEPRINT_SPEC.json?
2. ¿Hay hex hardcoded en vez de tokens M3?
3. ¿Hay any en TypeScript?
4. ¿Los tests cubren TODOS los CA del SPEC?
5. ¿axe() está en CADA test?
6. ¿Las stories tienen dark theme y parameters.titan?
7. ¿El BEM es exacto al blueprint?
8. ¿Hay lógica de negocio en un átomo? (si es atom)

Formato de salida:
[CRÍTICO] — descripción — archivo:componente
[MEDIO]   — descripción — archivo:componente
[BAJO]    — descripción — archivo:componente
✅ Sin issues: escribe exactamente 'FORGE_REVIEW_PASS'"

echo "$REVIEW_INPUT" | ollama run deepseek-r1:14b > "$BASE_DIR/outputs/review_${SPEC_ID}.txt" 2>&1

# Verificar si la revisión pasó
if grep -q "FORGE_REVIEW_PASS" "$BASE_DIR/outputs/review_${SPEC_ID}.txt"; then
  echo "  ✅ Revisión PASS — sin issues críticos"
  REVIEW_STATUS="PASS"
else
  CRITICAL_COUNT=$(grep -c "\\[CRÍTICO\\]" "$BASE_DIR/outputs/review_${SPEC_ID}.txt" || echo "0")
  echo "  ⚠️  Revisión encontró issues (${CRITICAL_COUNT} críticos)"
  echo "  Ver: $BASE_DIR/outputs/review_${SPEC_ID}.txt"
  REVIEW_STATUS="ISSUES"
fi
echo ""

# ── PASO 6: COPIAR ARCHIVOS AL PROYECTO ──
echo "▶ PASO 6/6 — Copiando archivos a $COMP_DIR..."

# Extraer solo el código de cada output (quitar explicaciones de Ollama)
# Los modelos a veces agregan texto antes y después del código

# Función para extraer bloque de código TypeScript
extract_code() {
  local input_file="$1"
  # Intentar extraer bloque ```typescript ... ``` o ```tsx ... ```
  # Si no hay bloques, tomar todo el contenido
  if grep -q '```typescript\|```tsx\|```ts' "$input_file"; then
    awk '/```(typescript|tsx|ts)/,/```/' "$input_file" | grep -v '```' 
  else
    cat "$input_file"
  fi
}

extract_code "$BASE_DIR/outputs/code_${COMPONENT}.txt" > "$COMP_DIR/${COMPONENT}.tsx"
extract_code "$BASE_DIR/outputs/tests_${COMPONENT}.txt" > "$COMP_DIR/${COMPONENT}.test.tsx"
extract_code "$BASE_DIR/outputs/stories_${COMPONENT}.txt" > "$COMP_DIR/${COMPONENT}.stories.tsx"

# Crear barrel export
cat > "$COMP_DIR/index.ts" << BARREL
export { default as $COMPONENT } from './$COMPONENT'
export type { ${COMPONENT}Props } from './$COMPONENT'
BARREL

echo "  ✅ $COMP_DIR/$COMPONENT.tsx"
echo "  ✅ $COMP_DIR/$COMPONENT.test.tsx"
echo "  ✅ $COMP_DIR/$COMPONENT.stories.tsx"
echo "  ✅ $COMP_DIR/index.ts"
echo ""

# ── RESULTADO FINAL ──
echo "╔══════════════════════════════════════════════════════╗"
echo "║  WORKFLOW COMPLETADO                                 ║"
echo "╚══════════════════════════════════════════════════════╝"
echo ""
echo "  SPEC_ID:     $SPEC_ID"
echo "  Componente:  $COMPONENT"
echo "  Revisión:    $REVIEW_STATUS"
echo ""
echo "  📁 Archivos generados en: $COMP_DIR/"
echo ""

if [ "$REVIEW_STATUS" = "ISSUES" ]; then
  echo "  ⚠️  ACCIÓN REQUERIDA antes del FORGE_SEAL:"
  echo "  1. Abrir: $BASE_DIR/outputs/review_${SPEC_ID}.txt"
  echo "  2. Revisar los issues [CRÍTICO]"
  echo "  3. Corregir en $COMP_DIR/ manualmente o con Claude Code"
  echo "  4. Volver a ejecutar: pnpm lint && pnpm type-check && pnpm test"
  echo ""
fi

echo "  PRÓXIMOS PASOS (FORGE_SEAL → LOCK):"
echo ""
echo "  1. Revisar los archivos generados en VS Code"
echo "     code $COMP_DIR/"
echo ""
echo "  2. Verificar en Storybook"
echo "     pnpm storybook → http://localhost:6006"
echo "     Navegar a: $(echo $LEVEL | sed 's/./\u&/')/$COMPONENT"
echo "     Verificar tab 'Accessibility': 0 violations"
echo ""
echo "  3. Correr tests"
echo "     pnpm vitest $COMP_DIR/$COMPONENT.test.tsx --coverage"
echo ""
echo "  4. Si todo pasa — Iniciar LOCK con Claude Code:"
echo "     claude"
echo "     → Copiar prompt FASE III del archivo:"
echo "     → docs/m3/prompts/ola*/PROMPT_${SPEC_ID}_${COMPONENT}.md"
echo ""
echo "  5. Después del LOCK:"
echo "     python3 docs/m3/audit/audit_individual.py $SPEC_ID $COMPONENT $LEVEL"
echo ""

# ── LOG ──
{
  echo "=== WORKFLOW LOG ==="
  echo "Fecha: $(date)"
  echo "SPEC_ID: $SPEC_ID"
  echo "Componente: $COMPONENT"
  echo "Nivel: $LEVEL"
  echo "Rama: $CURRENT_BRANCH"
  echo "Revisión: $REVIEW_STATUS"
  echo "Archivos generados:"
  ls -la "$COMP_DIR/"
} > "$LOG_FILE"

echo "  📋 Log guardado en: $LOG_FILE"
echo ""
