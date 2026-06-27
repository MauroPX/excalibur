# PROMPT SPRINT B — CONTENIDO REAL
# EXCALIBUR v2.0 | TITAN v7.0 | BFL Multi-IA
# SPEC_ID: EX-v2-CONTENT-001
# Ejecutar en: Claude Code (Terminal 4) — después de SPRINT A sealed

---

## CONTEXTO

```
Problema:    page.tsx tiene Rappi/Bancolombia/Frubana — datos INVENTADOS
             /casos/[slug] tiene 3 casos que no existen en tu experiencia
             /api/chat responde con proyectos falsos
Objetivo:    Reemplazar TODO con datos reales de evidence-dna.json
Casos reales prioritarios: FDN · Solidaria · BBVA Colombia & Panamá
```

---

## FASE I — BLUEPRINT [ARCHITECT = Claude Code]

### Instrucción para Claude Code:

Antes de escribir una línea, leer los datos reales:

```bash
cat src/data/evidence-dna.json
cat src/app/page.tsx
cat src/app/casos/\[slug\]/page.tsx
cat src/app/api/chat/route.ts
```

Confirmar estos datos para el Blueprint:

**BC-01 — Casos reales a usar:**
```
Caso 1 — FDN (Financiera de Desarrollo Nacional)
  slug:        fdn
  cliente:     Financiera de Desarrollo Nacional
  sector:      GovTech / Gobierno
  problema:    LCP 25.2s + 654 fallas WCAG en portal Drupal 7
  acción:      Migración Next.js 14 + Strapi v5 + Cloudflare WAF
  resultado:   LCP 25.2s → 2.5s (-90%) · 654 fallas eliminadas · WCAG AAA
  métricas:    ["-90% LCP", "654 fallas eliminadas", "WCAG AAA", "2026"]
  tags:        GovTech · Next.js · WCAG · A11Y · Strapi · Cloudflare
  stack:       Next.js 14 · Strapi v5 · PostgreSQL · pgvector · Claude API
  síntomas:    legacy · a11y · performance
  roles:       staff-architect · tech-lead · design-engineer

Caso 2 — Solidaria Portal
  slug:        solidaria
  cliente:     Solidaria Portal
  sector:      Insurtech
  problema:    Sin DS · sin tests · sin accesibilidad verificable
  acción:      Design System desde cero · 212 tests · Storybook en Chromatic
  resultado:   0 axe violations · 212 tests verdes · DS en producción
  métricas:    ["212 tests", "0 violations", "DS en prod", "2025"]
  tags:        Design System · WCAG · Storybook · Insurtech · React
  stack:       React · MUI v6 · Storybook · Vitest · Chromatic
  repo_url:    https://github.com/MauroPX/solidaria-portal
  storybook:   https://6a2d61bf2ded342d004f1b8f-gjmdfbfoac.chromatic.com
  síntomas:    design-system · a11y
  roles:       staff-architect · designops

Caso 3 — BBVA Colombia & Panamá
  slug:        bbva
  cliente:     BBVA Colombia & Panamá
  sector:      Banca & Fintech
  problema:    Alta carga cognitiva en contratación Pyme · TTM 12 meses
  acción:      Framework GEMAS · Proyecto Brickell · Arquitectura Pyme end-to-end
  resultado:   -75% time-to-market · Digitalización 100% contratación Pyme
  métricas:    ["-75% TTM", "100% digital", "2 países", "2024-2026"]
  tags:        Banca · Fintech · SAFe · Design System · Figma
  stack:       SAFe Agile · Figma Variables · Design System · TITAN v7.0
  síntomas:    legacy · team-scaling · design-system
  roles:       staff-architect · product-manager
```

**BC-02 — Hero metrics reales:**
```
+10 años experiencia en producto digital
4 países (Colombia · Chile · Panamá · México)
20+ proyectos en producción
654 fallas WCAG eliminadas (el dato más impactante y verificable)
```

**BC-03 — Síntomas reales (NavSystem):**
```
Síntoma A: "Mi sistema es inaccesible" → fdn
Síntoma B: "El TTM es demasiado largo" → bbva
Síntoma C: "No tenemos Design System" → solidaria
Síntoma D: "Nuestra plataforma es legacy" → fdn
```

**BC-04 — Roles reales:**
```
Rol A: "Soy CTO / Founder" → bbva (escala técnica)
Rol B: "Soy reclutador" → solidaria (track record DS + tests)
Rol C: "Soy PM / PO" → bbva + fdn (metodología + resultados)
Rol D: "Soy líder de ingeniería" → fdn (migración técnica)
```

**BC-05 — SYSTEM_PROMPT actualizado:**
```
Eres el asistente de portafolio de Leonel Mauricio Gómez Ocampo,
Staff Product Architect con 10+ años.
Casos reales verificables:
- FDN (GovTech): LCP 25.2s→2.5s (-90%), 654 fallas WCAG eliminadas, certificado WCAG AAA 2024
- Solidaria Portal (Insurtech): Design System con 212 tests, 0 axe violations, Storybook en Chromatic
- BBVA Colombia & Panamá (Banca): -75% time-to-market, digitalización 100% contratación Pyme
- Correos Chile / Merken: DS 400+ componentes, TTM 12→6 meses
Cuando alguien pregunte por proyectos, menciona métricas reales con estos números exactos.
```

Generar el BLUEPRINT_SPEC.json para BC:
```json
{
  "spec_id": "EX-v2-CONTENT-001",
  "files_to_modify": [
    "src/app/page.tsx",
    "src/app/casos/[slug]/page.tsx",
    "src/app/api/chat/route.ts"
  ],
  "slugs_old": ["rappi", "bancolombia", "frubana"],
  "slugs_new": ["fdn", "solidaria", "bbva"],
  "hero_metrics_real": true,
  "system_prompt_updated": true,
  "gate_1": "PASS",
  "signed_by": "ARCHITECT"
}
```

---

## FASE II — FORGE [CRAFTSMAN = qwen2.5-coder:14b vía Aider]

```bash
aider --model ollama/qwen2.5-coder:14b \
      src/app/page.tsx \
      src/app/casos/\[slug\]/page.tsx \
      src/app/api/chat/route.ts
```

### Prompt para Aider:

```
Eres el CRAFTSMAN de EXCALIBUR v2.0.
Reemplaza los datos placeholder con los datos reales del portafolio.

ARCHIVO 1: src/app/page.tsx

Reemplazar heroData con:
{
  headline: 'Staff Product Architect',
  subheadline: 'Diseño, construyo y escalo productos digitales que el equipo opera sin mí.',
  ctaLabel: 'Ver casos de estudio',
  ctaHref: '#casos',
  secondaryCtaLabel: 'Hablar con TITAN',
  secondaryCtaHref: '#titan',
  metrics: [
    { value: '+10', label: 'años de experiencia' },
    { value: '4', label: 'países' },
    { value: '20+', label: 'proyectos en producción' },
    { value: '654', label: 'fallas WCAG eliminadas' },
  ],
}

Reemplazar symptomCards con:
[
  { title: 'Mi sistema es inaccesible', description: 'Auditoría WCAG 2.2 y eliminación de fallas de accesibilidad con evidencia técnica verificable.', tag: 'cliente', targetSlug: 'fdn' },
  { title: 'El TTM es demasiado largo', description: 'Frameworks de entrega que redujeron el time-to-market hasta un 75% en proyectos bancarios.', tag: 'cliente', targetSlug: 'bbva' },
  { title: 'No tenemos Design System', description: 'Construcción de DS desde cero con gobernanza, tests y Chromatic en producción.', tag: 'cliente', targetSlug: 'solidaria' },
  { title: 'Nuestra plataforma es legacy', description: 'Migración brownfield sin interrupciones. LCP de 25s a 2.5s en producción real.', tag: 'cliente', targetSlug: 'fdn' },
]

Reemplazar roleCards con:
[
  { title: 'Soy CTO / Founder', description: 'Escalabilidad técnica end-to-end. BBVA: -75% TTM. Correos Chile: TTM 12→6 meses.', tag: 'cliente', targetSlug: 'bbva' },
  { title: 'Soy reclutador', description: '212 tests · 0 violations · DS en prod · 4 países · 10 años. Todo verificable.', tag: 'reclutador', targetSlug: 'solidaria' },
  { title: 'Soy PM / PO', description: 'TITAN v7.0: metodología de M0 a M5 sin pérdida de contexto entre etapas.', tag: 'comunidad', targetSlug: 'bbva' },
  { title: 'Soy líder de ingeniería', description: 'Next.js 15 + Strapi v5 + pgvector. LCP -90% con evidencia técnica.', tag: 'cliente', targetSlug: 'fdn' },
]

Reemplazar caseProjects con:
[
  {
    slug: 'fdn',
    title: 'FDN — LCP -90% y WCAG AAA',
    description: 'Migración del portal institucional de Drupal 7 a Next.js 14. LCP de 25.2s a 2.5s. 654 fallas WCAG eliminadas. Certificado WCAG AAA 2024.',
    tags: ['GovTech', 'Next.js', 'WCAG', 'A11Y', 'Performance'],
    symptomTags: ['legacy', 'a11y', 'performance'],
    roleTags: ['staff-architect', 'tech-lead', 'design-engineer'],
    audienceTags: ['cliente'],
    metric: { value: '-90%', label: 'LCP' },
  },
  {
    slug: 'solidaria',
    title: 'Solidaria — Design System 0 violations',
    description: 'Design System desde cero con gobernanza real. 212 tests, 0 axe violations, Storybook en Chromatic con baseline establecido.',
    tags: ['Design System', 'WCAG', 'Storybook', 'Insurtech'],
    symptomTags: ['design-system', 'a11y'],
    roleTags: ['staff-architect', 'designops'],
    audienceTags: ['cliente', 'reclutador'],
    metric: { value: '212', label: 'tests · 0 violations' },
  },
  {
    slug: 'bbva',
    title: 'BBVA — Time-to-market -75%',
    description: 'Arquitectura de producto para BBVA Colombia & Panamá. Framework GEMAS + Proyecto Brickell. Digitalización 100% del proceso de contratación Pyme.',
    tags: ['Banca', 'Fintech', 'SAFe', 'Design System'],
    symptomTags: ['legacy', 'team-scaling', 'design-system'],
    roleTags: ['staff-architect', 'product-manager'],
    audienceTags: ['cliente'],
    metric: { value: '-75%', label: 'time-to-market' },
  },
]

Reemplazar titanModules con datos reales (los 6 momentums M0-M5):
[
  { hubName: 'Foundation', hubTitle: 'M0 — Visión y estructura', description: 'Diagnóstico, ADRs y gobernanza del proyecto. Sin M0 no hay base sólida.', momentum: 'M0', commandsCount: 12 },
  { hubName: 'Strategy', hubTitle: 'M1 — Backlog y roadmap', description: 'Customer journeys, backlog priorizado y mapa de riesgos.', momentum: 'M1', commandsCount: 10 },
  { hubName: 'Architecture', hubTitle: 'M2 — Spec y contratos', description: 'SPEC_DOCUMENT, DESIGN_TOKENS y contratos de API. Sin M2 no hay Forge.', momentum: 'M2', commandsCount: 11 },
  { hubName: 'Execution', hubTitle: 'M3 — BFL + CI/CD', description: 'Sprints BFL con Blueprint→Forge→Lock. 26/26 componentes LOCKED en este portafolio.', momentum: 'M3', commandsCount: 26 },
  { hubName: 'Intelligence', hubTitle: 'M4 — RAG y backend', description: 'Strapi v5 + pgvector + Claude API. La IA conoce cada proyecto del portafolio.', momentum: 'M4', commandsCount: 8 },
  { hubName: 'Operations', hubTitle: 'M5 — Monitoreo y mejora', description: 'Observabilidad, alertas y ciclos de mejora continua.', momentum: 'M5', commandsCount: 6 },
]

ARCHIVO 2: src/app/casos/[slug]/page.tsx

Reemplazar el objeto CASES con estos tres casos reales.
Usar la misma estructura CasePageData que ya existe.
Slugs: fdn · solidaria · bbva
Datos completos de cada caso según el BC-01 del Blueprint.

ARCHIVO 3: src/app/api/chat/route.ts

Reemplazar SOLO estas dos constantes (no tocar nada más):

const SYSTEM_PROMPT =
  'Eres el asistente de portafolio de Leonel Mauricio Gómez Ocampo, ' +
  'Staff Product Architect con 10+ años en Colombia, Chile, Panamá y México. ' +
  'Casos reales verificables con métricas exactas: ' +
  'FDN (GovTech): LCP 25.2s→2.5s (-90%), 654 fallas WCAG eliminadas, certificado WCAG AAA 2024. ' +
  'Solidaria Portal (Insurtech): Design System con 212 tests, 0 axe violations, Storybook en Chromatic. ' +
  'BBVA Colombia & Panamá (Banca): -75% time-to-market, digitalización 100% contratación Pyme, 2 países. ' +
  'Correos Chile/Merken: Design System 400+ componentes, TTM 12→6 meses. ' +
  'Responde en español. Menciona métricas reales con los números exactos cuando sea relevante. ' +
  'Sé conciso y profesional.'

const SUGGESTED_CASES = [
  'FDN — LCP -90% y WCAG AAA',
  'Solidaria — 212 tests · 0 violations',
  'BBVA — Time-to-market -75%',
]

REGLAS:
- No cambiar nada más en route.ts — solo esas dos constantes
- No cambiar la estructura de los tipos CasePageData
- Los slugs nuevos son: fdn · solidaria · bbva
- Los slugs viejos rappi · bancolombia · frubana deben desaparecer completamente
```

---

## FASE III — BLIND REVIEW [INQUISITOR = deepseek-r1:14b]

```bash
cat src/app/page.tsx \
    src/app/casos/\[slug\]/page.tsx \
    src/app/api/chat/route.ts | \
ollama run deepseek-r1:14b "$(cat << 'PROMPT'
Eres el INQUISITOR de EXCALIBUR v2.0. Blind Review de contenido.

Verifica cada item. PASS o FAIL con evidencia:

BC-01: ¿page.tsx NO contiene las palabras 'rappi', 'bancolombia', 'frubana'?
BC-02: ¿page.tsx contiene los slugs 'fdn', 'solidaria', 'bbva'?
BC-03: ¿El hero metric '-90% LCP' está presente en page.tsx?
BC-04: ¿El hero metric '654' está presente en page.tsx?
BC-05: ¿symptomCards referencias slugs fdn/solidaria/bbva (no rappi etc)?
BC-06: ¿casos/[slug]/page.tsx tiene el caso 'fdn' con LCP 25.2s→2.5s?
BC-07: ¿casos/[slug]/page.tsx tiene el caso 'solidaria' con 212 tests?
BC-08: ¿casos/[slug]/page.tsx tiene el caso 'bbva' con -75% TTM?
BC-09: ¿casos/[slug]/page.tsx NO contiene 'rappi', 'bancolombia', 'frubana'?
BC-10: ¿route.ts SYSTEM_PROMPT menciona FDN con LCP -90%?
BC-11: ¿route.ts SYSTEM_PROMPT menciona Solidaria con 212 tests?
BC-12: ¿route.ts SYSTEM_PROMPT menciona BBVA con -75% TTM?
BC-13: ¿route.ts SUGGESTED_CASES son fdn/solidaria/bbva (no rappi etc)?
BC-14: ¿Los datos de cada caso son internamente consistentes (no se contradicen)?
BC-15: ¿Zero datos inventados — cada métrica tiene respaldo en el BLUEPRINT?

Al final escribe exactamente:
SPRINT_B_REVIEW: PASS
o
SPRINT_B_REVIEW: FAIL — [items que fallaron]
PROMPT
)"
```

---

## STATUS DE VALIDACIÓN — SPRINT B

```bash
cat > /tmp/validate_sprint_b.sh << 'EOF'
#!/bin/bash
echo "=== VALIDACIÓN SPRINT B — CONTENIDO ==="
PASS=0; FAIL=0

check() {
  if eval "$2" > /dev/null 2>&1; then
    echo "✅ $1"; ((PASS++))
  else
    echo "❌ $1"; ((FAIL++))
  fi
}

# page.tsx
check "Sin 'rappi' en page.tsx" "! grep -qi 'rappi' src/app/page.tsx"
check "Sin 'bancolombia' en page.tsx" "! grep -qi 'bancolombia' src/app/page.tsx"
check "Sin 'frubana' en page.tsx" "! grep -qi 'frubana' src/app/page.tsx"
check "FDN en caseProjects" "grep -q 'fdn' src/app/page.tsx"
check "Solidaria en caseProjects" "grep -q 'solidaria' src/app/page.tsx"
check "BBVA en caseProjects" "grep -q 'bbva' src/app/page.tsx"
check "Hero metric -90%" "grep -q '\-90%' src/app/page.tsx"
check "Hero metric 654" "grep -q '654' src/app/page.tsx"

# casos/[slug]
PAGE="src/app/casos/\[slug\]/page.tsx"
check "Caso FDN existe" "grep -q 'fdn' '$PAGE'"
check "Caso Solidaria existe" "grep -q 'solidaria' '$PAGE'"
check "Caso BBVA existe" "grep -q 'bbva' '$PAGE'"
check "Sin rappi en casos" "! grep -qi 'rappi' '$PAGE'"
check "LCP -90% en FDN" "grep -q '90' '$PAGE'"
check "212 tests en Solidaria" "grep -q '212' '$PAGE'"
check "-75% TTM en BBVA" "grep -q '75' '$PAGE'"

# route.ts
check "SYSTEM_PROMPT con FDN" "grep -q 'FDN' src/app/api/chat/route.ts"
check "SYSTEM_PROMPT con Solidaria" "grep -q 'Solidaria' src/app/api/chat/route.ts"
check "SYSTEM_PROMPT con BBVA" "grep -q 'BBVA' src/app/api/chat/route.ts"
check "SUGGESTED_CASES actualizados" "! grep -q 'Rappi\|ARR' src/app/api/chat/route.ts"

# build
check "pnpm build pasa" "pnpm build 2>/dev/null"

echo ""
echo "RESULTADO: $PASS/21 PASS · $FAIL FAIL"
if [ $FAIL -eq 0 ]; then
  echo "SPRINT_B: ✅ SEALED"
else
  echo "SPRINT_B: ❌ BLOCKED — corregir $FAIL items"
fi
EOF
chmod +x /tmp/validate_sprint_b.sh
bash /tmp/validate_sprint_b.sh
```

---

## COMMIT AL CERRAR

```bash
git add src/app/page.tsx \
        "src/app/casos/[slug]/page.tsx" \
        src/app/api/chat/route.ts

git commit -m "content: EX-v2-CONTENT-001 casos reales FDN·Solidaria·BBVA

Reemplaza placeholders Rappi/Bancolombia/Frubana con datos reales:
- FDN: LCP -90% · 654 fallas WCAG eliminadas · certificado AAA
- Solidaria: 212 tests · 0 violations · Storybook Chromatic
- BBVA: -75% TTM · digitalización Pyme · 2 países

Hero metrics: +10 años · 4 países · 20+ proyectos · 654 fallas
SYSTEM_PROMPT: datos reales con métricas exactas
SUGGESTED_CASES: fdn · solidaria · bbva
SPRINT_B: SEALED ✅"

git push origin v2
```
