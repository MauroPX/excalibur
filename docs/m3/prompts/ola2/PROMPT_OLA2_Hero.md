# PROMPT BFL — EX-v2-HERO-001 — Hero
# Ola 2 | Rama: feat/v2-hero | Nivel: ORGANISM
# Law of UX: Ley de Posicion Serial (primero) + Ley de Hick (1 CTA)
# Usar en: Claude Code (terminal)

---

## PREREQUISITO

```bash
# Verificar que Ola 1 esta completa (todos los atomos y moleculas en LOCK)
cat docs/m2/spec/TRACEABILITY_MATRIX.md | grep "IN_SPEC\|IN_BLUEPRINT"
# No debe haber resultados de Ola 0 y 1 — todos deben ser LOCKED

git checkout v2 && git pull origin v2
git checkout -b feat/v2-hero
claude
```

---

## DESCRIPCION

Primera seccion del portafolio. Resultado primero. 1 CTA.
Depende de: ['Button', 'MetricRow']
WCAG: ['1.3.1', '2.4.6', '1.4.6']

---

## FASE I — BLUEPRINT

### Claude Code:
```
Genera los BLUEPRINT_SPEC.json para EX-v2-HERO-001 — Hero (ORGANISM).

Lee:
- docs/m2/spec/SPEC_DOCUMENT.md secciones: EX-v2-HERO-001
- docs/m2/design/DESIGN_SPEC.md seccion Hero
- docs/m2/design/DESIGN_TOKENS.json
- docs/m1/TASK_JOURNEY_MAPS.md (para el journey de la audiencia que usa este organismo)
- src/components/atoms/ y src/components/molecules/ (atomos y moleculas disponibles)

Para cada SPEC_ID genera un BLUEPRINT_SPEC.json separado.
Criterios de aceptacion clave:
   1. H1 unico con resultado profesional (no nombre ni lista de roles)
   2. 1 CTA principal + 1 CTA secundario como texto/link
   3. MetricRow con 3 metricas verificables
   4. Disponible para proyectos Q3 2026 (reemplaza SELECTIVE ONBOARDING)
   5. Above-the-fold en 320/768/1440px sin scroll
   6. ES/EN con next-intl

Law of UX que gobierna este organismo:
   Ley de Posicion Serial (primero) + Ley de Hick (1 CTA)

Verificar BH-1 a BH-6 por cada Blueprint.
```

```bash
git add .
git commit -m "feat(bfl): EX-v2-HERO-001 blueprints — Hero GATE1 approved"
```

---

## FASE II — FORGE

### Claude Code:
```
FORGE para EX-v2-HERO-001 — Hero (ORGANISM).

Lee los BLUEPRINT_SPEC.json de cada SPEC_ID.

Construye UN archivo por componente de la lista.
Cada archivo incluye:

1. [Componente].tsx
   - Compone con: ['Button', 'MetricRow']
   - Datos desde Strapi via props (no fetch directo en el componente)
   - Solo tokens M3 — 0 hex
   - BEM del DESIGN_SPEC
   - TypeScript strict
   - ES/EN con next-intl (useTranslations)

2. [Componente].test.tsx
   - Test de integracion con contexto real (no mocks del componente)
   - Flujos de UX completos del TASK_JOURNEY_MAPS
   - axe en CADA render
   - play() functions donde aplique (addon-interactions)
   - Coverage >= 80%

3. [Componente].stories.tsx
   - Canvas contextual (no en negro/vacio)
   - Story por audiencia (C-level / Reclutador / Comunidad / Neutral)
   - Dark theme por defecto
   - Viewport stories: Mobile375, Desktop1440
   - ES y EN stories
   - play() que simula el flujo de interaccion

4. index.ts — barrel export

GATE 2: 12/12 PASS/FAIL antes de FORGE_SEAL.
```

### Terminal paralela:
```bash
pnpm dev                                    # verificar en localhost:3000
pnpm vitest src/components/organisms/Hero --coverage
# Verificar todos los CAs del SPEC_DOCUMENT
```

```bash
git add .
git commit -m "feat(bfl): EX-v2-HERO-001 forge — Hero GATE2 12/12"
```

---

## FASE III — LOCK

### Claude Code:
```
LOCK para EX-v2-HERO-001 — Hero.

Para cada SPEC_ID genera un VERSION_CERTIFICATE.json en su carpeta.
Incluir en cada certificado:
- dependents_from: ['Button', 'MetricRow']
- depended_by: [quien usa este organismo — ver ROADMAP_v1]
- wcag_criteria: ['1.3.1', '2.4.6', '1.4.6']
- fecha_lock: [HOY]
- coverage: [valor real]
- axe_violations: 0

Genera GSD_TASK_CARD para cada componente en docs/m3/certificates/

Actualizaciones:
- TRACEABILITY_MATRIX: EX-v2-HERO-001 → LOCKED
- COMPONENT_REGISTRY: agregar cada componente v1.0.0

LH-1 a LH-4 verificados.
```

```bash
git add .
git commit -m "feat(bfl): EX-v2-HERO-001 LOCK — Hero v1.0.0"
gh pr create --base v2 --head feat/v2-hero \
  --title "[LOCK] EX-v2-HERO-001 — Hero organism v1.0.0" \
  --body "EX-v2-HERO-001 | ORGANISM | Ola 2 | BFL 12/12 | Ley de Posicion Serial (primero) + Ley de Hick (1 CTA)"
# CI/CD 7/7 verde → merge
gh pr merge --squash
```

---

## AUDIT INDIVIDUAL (uno por SPEC_ID)

```
Audit individual para cada SPEC_ID de Hero:

Para EX-v2-HERO-001 uno por uno:
Verifica que VERSION_CERTIFICATE.json refleja el codigo real.
Genera docs/m3/audit/AUDIT_[SPEC_ID].md por cada uno.
```

---

📍 SPEC_IDs: EX-v2-HERO-001 | Ola: 2 | Nivel: ORGANISM
