# PROMPT BFL — EX-v2-RAG-001 — TitanRAGAgent
# Ola 3 | Rama: feat/v2-titan-rag | TITAN v7.0
# Usar en: Claude Code (terminal)

---

## PREREQUISITO

```bash
# Verificar que Ola 2 esta completa (todos los organismos en LOCK)
cat docs/m2/spec/TRACEABILITY_MATRIX.md | grep -v "LOCKED"
# Solo deben quedar los de Ola 3 sin LOCK

git checkout v2 && git pull origin v2
git checkout -b feat/v2-titan-rag
claude
```

---

## DESCRIPCION

Agente conversacional con Claude Sonnet 4.6 + pgvector. 20 proyectos DNA.

---

## FASE I — BLUEPRINT

### Claude Code:
```
Genera el BLUEPRINT para EX-v2-RAG-001 — TitanRAGAgent.

Lee src/components/TitanRAGAgent.tsx (el original del main)
Lee docs/m2/api/API_CONTRACTS.md seccion POST /api/chat
Lee docs/m2/api/DATA_CONTRACT.json contrato DC-002 y DC-003
Lee docs/m2/spec/SPEC_DOCUMENT.md seccion EX-v2-RAG-001
Lee docs/m0/adr/ADR-005-ia-rag.md

El BLUEPRINT debe documentar:
- Diferencias entre la implementacion actual (main) y la v2
- Que se conserva, que se migra, que se reescribe
- Props contract TypeScript
- Estados del componente
- WCAG criteria que aplican
- Dependencias

Guardar en: src/components/organisms/TitanRAGAgent/
```

```bash
git add .
git commit -m "feat(bfl): EX-v2-RAG-001 blueprint — TitanRAGAgent GATE1"
```

---

## FASE II — FORGE

### Claude Code:
```
FORGE para EX-v2-RAG-001 — TitanRAGAgent.

Construir TitanRAGAgent v2:
1. src/app/api/chat/route.ts — API Route server-side:
   - Recibe: {message: string}
   - Valida: max 500 chars, sanitiza XSS
   - Rate limiting: 10 req/min/IP via headers
   - Busca en pgvector: similarity search sobre embeddings DNA
   - Llama a Claude Sonnet 4.6 con contexto recuperado
   - Timeout 3s: si falla → fallback estatico
   - Respuesta: {response, relevant_case, suggested_cases}

2. src/components/organisms/TitanRAGAgent/TitanRAGAgent.tsx:
   - Interface conversacional
   - 4 sugerencias rapidas en ES y EN
   - aria-busy en loading (WCAG 4.1.3)
   - Respuesta como texto plano (React escapa XSS)
   - Fallback visible si la API no responde

3. Tests:
   - Mock de la API route
   - Test del fallback cuando API falla
   - axe en todos los estados (default, loading, response, error, fallback)

GATE 2: 12/12 PASS/FAIL antes de FORGE_SEAL.
Para esta Ola los items de mayor riesgo son:
- Item 3 (WCAG): el panel de a11y debe ser el mas accesible del portafolio
- Item 6 (tests): cubrir todos los estados incluyendo fallback
- Item 12 (Zero Hallucination): no afirmar que el RAG funciona si no hay API real
```

```bash
pnpm vitest src/components/organisms/TitanRAGAgent --coverage
pnpm build  # verificar que el build completo funciona
git add .
git commit -m "feat(bfl): EX-v2-RAG-001 forge — TitanRAGAgent GATE2 12/12"
```

---

## FASE III — LOCK

### Claude Code:
```
LOCK para EX-v2-RAG-001 — TitanRAGAgent.

Genera VERSION_CERTIFICATE.json con los valores reales.
Nota importante: si el RAG no tiene la API real conectada, documentarlo
en el certificado como "chromatic_approved: false, api_connected: false"
No afirmar mas de lo que el codigo implementa (LH-1).

Genera GSD_TASK_CARD en docs/m3/certificates/
Actualiza TRACEABILITY_MATRIX y COMPONENT_REGISTRY.
```

```bash
git add .
git commit -m "feat(bfl): EX-v2-RAG-001 LOCK — TitanRAGAgent v1.0.0"
gh pr create --base v2 --head feat/v2-titan-rag \
  --title "[LOCK] EX-v2-RAG-001 — TitanRAGAgent v1.0.0" \
  --body "EX-v2-RAG-001 | Ola 3 | BFL 12/12"
gh pr merge --squash  # cuando CI 7/7 verde
```

---

## AUDIT INDIVIDUAL

```
Audit EX-v2-RAG-001 — TitanRAGAgent.
Verificar: el VERSION_CERTIFICATE refleja el estado real.
En particular para RAG: documentar si la API esta conectada o es fallback.
Genera docs/m3/audit/AUDIT_EX-v2-RAG-001.md
```

---

📍 SPEC_ID: EX-v2-RAG-001 | Ola: 3
