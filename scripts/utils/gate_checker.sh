#!/usr/bin/env bash
# ==============================================================================
# TITAN v7.0 — GATE CHECKER & PROPAGATION HARNESS
# Verificación automatizada de Gates (M0->M5) y Cierre de Gaps de Propagación
# ==============================================================================

set -e

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
DOCS_DIR="${REPO_ROOT}/docs"
MOMENTUM=${1:-"ALL"}

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

echo -e "${GREEN}======================================================================${NC}"
echo -e "${GREEN} 🚀 TITAN v7.0 — AUTOMATED GATE & PROPAGATION HARNESS ${NC}"
echo -e "${GREEN}======================================================================${NC}"
echo "Directorio Raíz: ${REPO_ROOT}"
echo "Evaluando Momentum: ${MOMENTUM}"
echo "----------------------------------------------------------------------"

check_file() {
    local file_path="$1"
    local desc="$2"
    if [ -f "${file_path}" ]; then
        echo -e "  [${GREEN}PASS${NC}] ${desc} -> ${file_path#${REPO_ROOT}/}"
    else
        echo -e "  [${RED}FAIL${NC}] FALTA: ${desc} -> ${file_path#${REPO_ROOT}/}"
        ERRORS=$((ERRORS + 1))
    fi
}

check_content() {
    local file_path="$1"
    local pattern="$2"
    local desc="$3"
    if [ -f "${file_path}" ] && grep -q "${pattern}" "${file_path}"; then
        echo -e "  [${GREEN}PASS${NC}] ${desc}"
    else
        echo -e "  [${YELLOW}WARN/FAIL${NC}] Contenido no hallado '${pattern}' en ${desc}"
        WARNINGS=$((WARNINGS + 1))
    fi
}

# --- GATE M0: FOUNDATION ---
check_gate_m0() {
    echo -e "
${YELLOW}--- VERIFICANDO GATE M0 (FOUNDATION & COMPLIANCE) ---${NC}"
    check_file "${DOCS_DIR}/m0/PROJECT_MANIFEST.md" "Project Manifest M0"
    check_file "${DOCS_DIR}/m0/GSD_TASK_CARD_M0.md" "GSD Task Card M0"
    check_file "${DOCS_DIR}/m0/adr/ADR-001-stack.md" "ADR-001 (Stack)"
    check_file "${DOCS_DIR}/m0/adr/ADR-002-design-system.md" "ADR-002 (Design System)"
    check_file "${DOCS_DIR}/m0/adr/ADR-003-backend.md" "ADR-003 (Backend)"
    check_file "${DOCS_DIR}/m0/adr/ADR-004-deploy.md" "ADR-004 (Deploy)"
    check_file "${DOCS_DIR}/m0/adr/ADR-005-ia-rag.md" "ADR-005 (IA/RAG)"
    check_file "${DOCS_DIR}/m0/compliance/QUALITY_POLICY.md" "Quality Policy"
    check_file "${DOCS_DIR}/m0/compliance/WCAG_COMMITMENT.md" "WCAG Commitment"
    check_file "${DOCS_DIR}/m0/security/SECURITY_POLICY.md" "Security Policy"
    check_file "${DOCS_DIR}/m0/security/THREAT_MODEL_v0.md" "Threat Model v0"
    check_file "${REPO_ROOT}/TITAN_PROJECT.yaml" "TITAN Project Config YAML"
}

# --- GATE M1: STRATEGY & INGESTION ---
check_gate_m1() {
    echo -e "
${YELLOW}--- VERIFICANDO GATE M1 (STRATEGY & DISCOVERY) ---${NC}"
    check_file "${DOCS_DIR}/m1/STRATEGY_BRIEF.md" "Strategy Brief M1"
    check_file "${DOCS_DIR}/m1/PRODUCT_BACKLOG.md" "Product Backlog"
    check_file "${DOCS_DIR}/m1/ROADMAP_v1.md" "Roadmap v1"
    check_file "${DOCS_DIR}/m1/CUSTOMER_JOURNEY_FULL.md" "Customer Journey Full"
    check_file "${DOCS_DIR}/m1/TASK_JOURNEY_MAPS.md" "Task Journey Maps"
    check_file "${DOCS_DIR}/m1/USER_TASKS_MATRIX.md" "User Tasks Matrix"
    check_file "${DOCS_DIR}/m1/SEO_AIO_PLAN.md" "SEO / AIO Plan"
    check_file "${DOCS_DIR}/m1/RISK_REGISTER.md" "Risk Register"
    check_file "${DOCS_DIR}/m1/THREAT_MODEL.md" "Threat Model M1"
    check_file "${DOCS_DIR}/m1/GSD_TASK_CARD_M1.md" "GSD Task Card M1"
}

# --- GATE M2: SPECIFICATION & DESIGN TOKENS ---
check_gate_m2() {
    echo -e "
${YELLOW}--- VERIFICANDO GATE M2 (ARCHITECTURE & DESIGN) ---${NC}"
    check_file "${DOCS_DIR}/m2/spec/SPEC_DOCUMENT.md" "SPEC Document M2"
    check_file "${DOCS_DIR}/m2/spec/TRACEABILITY_MATRIX.md" "Traceability Matrix"
    check_file "${DOCS_DIR}/m2/design/DESIGN_TOKENS.json" "Design Tokens M3 JSON"
    check_file "${DOCS_DIR}/m2/design/DESIGN_SPEC.md" "Design Spec MD"
    check_file "${DOCS_DIR}/m2/design/DS_CONTRACT.md" "Design System Contract"
    check_file "${DOCS_DIR}/m2/api/API_CONTRACTS.md" "API Contracts"
    check_file "${DOCS_DIR}/m2/api/SCHEMA_SPEC.json" "Schema Spec JSON"
    check_file "${DOCS_DIR}/m2/arch/ARCHITECTURE_RECORD.md" "Architecture Record"
}

# --- GATE M3: BFL EXECUTION & COMPONENTS ---
check_gate_m3() {
    echo -e "
${YELLOW}--- VERIFICANDO GATE M3 (BFL EXECUTION & COMPONENT REGISTRY) ---${NC}"
    check_file "${DOCS_DIR}/m3/certificates/COMPONENT_REGISTRY.json" "Component Registry JSON"
    
    # Validar presencia de certs en componentes en src/components
    local components_dir="${REPO_ROOT}/src/components"
    if [ -d "${components_dir}" ]; then
        echo "  Verificando paquetes atómicos en src/components..."
        for comp_dir in $(find "${components_dir}" -mindepth 2 -maxdepth 2 -type d); do
            local comp_name=$(basename "${comp_dir}")
            if [[ "${comp_name}" != "IdentidadProfesional.tsx" && "${comp_name}" != "messages" ]]; then
                check_file "${comp_dir}/VERSION_CERTIFICATE.json" "Certificado BFL ${comp_name}"
            fi
        done
    fi
}

# --- GATE M4: AUDIT & RELEASE READINESS ---
check_gate_m4() {
    echo -e "
${YELLOW}--- VERIFICANDO GATE M4 (AUDIT & RELEASE READINESS) ---${NC}"
    check_file "${DOCS_DIR}/EXCALIBUR_AUDITORIA_TITAN_COMPLETA.md" "Auditoría TITAN Completa"
    check_file "${REPO_ROOT}/vercel.json" "Vercel Deploy Config"
    check_content "${REPO_ROOT}/package.json" "vitest" "Suite de Tests Vitest en package.json"
}

# --- GATE M5: OPERATIONS & MLOPS CONSOLIDATED ---
check_gate_m5() {
    echo -e "
${YELLOW}--- VERIFICANDO GATE M5 (OPERATIONS & CONSOLIDATED MLOPS) ---${NC}"
    check_file "${REPO_ROOT}/TITAN/TITAN_SKILL_MLOPS.md" "TITAN Skill MLOps"
    check_file "${REPO_ROOT}/TITAN/TITAN_v7_0_MLOPS_CONSOLIDATED.md" "TITAN MLOps Consolidated v3.0"
    check_file "${REPO_ROOT}/TITAN/TITAN_PROPAGATION_PROTOCOL.md" "TITAN Propagation Protocol"
}

case "${MOMENTUM}" in
    M0) check_gate_m0 ;;
    M1) check_gate_m1 ;;
    M2) check_gate_m2 ;;
    M3) check_gate_m3 ;;
    M4) check_gate_m4 ;;
    M5) check_gate_m5 ;;
    ALL)
        check_gate_m0
        check_gate_m1
        check_gate_m2
        check_gate_m3
        check_gate_m4
        check_gate_m5
        ;;
    *)
        echo -e "${RED}Momentum no válido: ${MOMENTUM}. Use M0, M1, M2, M3, M4, M5 o ALL.${NC}"
        exit 1
        ;;
esac

echo -e "
======================================================================"
if [ ${ERRORS} -eq 0 ]; then
    echo -e "${GREEN} ✅ HARNESS EXECUTION PASS: 0 Gaps Críticos detectados en ${MOMENTUM}.${NC}"
    if [ ${WARNINGS} -gt 0 ]; then
        echo -e "${YELLOW} ⚠️  ${WARNINGS} advertencias menores pendientes.${NC}"
    fi
    exit 0
else
    echo -e "${RED} ❌ HARNESS EXECUTION FAIL: ${ERRORS} Gaps o brechas detectadas en ${MOMENTUM}.${NC}"
    exit 1
fi
