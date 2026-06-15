# ROADMAP_v1.md
# EXCALIBUR v2.0 — Plan de Trabajo + Olas de Features
# TITAN v7.0 | M1 | 2026-06-15
# Nivel: B (vivo — se actualiza en cada sprint)

---

## Estructura general

```
M0 ✅ SELLADO    → Fundación: ADRs + compliance + security
M1 ✅ SELLADO    → Estrategia: brief + audiencias + journeys + DNA + roadmap
M2               → Arquitectura: SPEC_DOCUMENT + DESIGN_SPEC + tokens + Storybook
M3               → Ejecución: 4 Olas de features con BFL por rama
M4               → Auditoría: WCAG audit + performance + release
M5               → Operaciones: monitoreo + iteraciones + DNA viva
```

---

## M3 — Las 4 Olas de Features

### Regla de olas
Las olas son secuenciales entre sí.
Dentro de cada ola las ramas son paralelas.
Ningún PR mergeа sin BFL 12/12 completado.

---

### 🌊 Ola 0 — Infraestructura base (~2-3 días)
*Secuencial. Desbloquea todo lo demás.*

| Rama | Feature | Depende de | BFL |
|---|---|---|---|
| feat/v2-setup | Next.js 15 + MUI v6 + TS strict + pnpm + src/ structure | nada | B→F→L |
| feat/v2-theme | titanThemeDark + titanThemeLight + tokens.ts + Roboto Flex | setup | B→F→L |
| feat/v2-i18n | next-intl + messages/es.json + messages/en.json + middleware | setup | B→F→L |
| feat/v2-strapi | API client + types.ts + fetch helpers + env vars | setup | B→F→L |

---

### 🌊 Ola 1 — Átomos + Moléculas (~2 días)
*Paralela. Requiere Ola 0 completa.*

| Rama | Feature | Componentes | BFL |
|---|---|---|---|
| feat/v2-atoms | Design Atoms | Button · Tag · Badge · Metric · Icon · Chip | B→F→L |
| feat/v2-molecules | Molecules base | NavTab · SkillBar · TimelineStep · MetricRow · ProjectCard preview | B→F→L |

---

### 🌊 Ola 2 — Secciones del portafolio (~1 semana)
*Paralela. Requiere Ola 1 completa.*

| Rama | Feature | Sección | Laws of UX | BFL |
|---|---|---|---|---|
| feat/v2-hero | Hero | Posición 1 — resultado primero + 1 CTA | Posición Serial + Hick | B→F→L |
| feat/v2-nav-system | NavSystem (A+B+C+D) | Posición 2 — inmediatamente después del hero | Miller + Proximidad | B→F→L |
| feat/v2-cases | Casos de estudio | Posición 3 — profundidad con 20 proyectos | Posición Serial (medio) | B→F→L |
| feat/v2-titan-section | TITAN v7.0 | Posición 4 — diferenciador técnico | Jakob | B→F→L |
| feat/v2-stack-section | Stack & Capas end-to-end | Posición 5 — radar + mapa de capas | Prägnanz | B→F→L |
| feat/v2-contact | Contacto | Posición 6 — último = segundo más recordado | Posición Serial | B→F→L |

---

### 🌊 Ola 3 — IA + A11Y + CI/CD (~3-4 días)
*Paralela. Requiere Ola 2 completa.*

| Rama | Feature | Descripción | BFL |
|---|---|---|---|
| feat/v2-inquisitor | InquisitorHUD nativo | Migración iframe→React + 5 modos A11Y | B→F→L |
| feat/v2-titan-rag | TitanRAGAgent v2 | Claude Sonnet 4.6 + pgvector + 20 proyectos | B→F→L |
| feat/v2-ci-a11y | CI/CD + A11Y gate | GitHub Actions + axe-core bloqueante | B→F→L |

---

## Jerarquía de secciones — decisión firme

```
1 → Hero                    (resultado + 1 CTA)
2 → NavSystem (4 tabs)      (Por síntoma / Por rol / IA / Explorar)
3 → Casos de estudio        (20 proyectos desde Strapi)
4 → TITAN v7.0              (features reales del framework)
5 → Stack & Capas           (radar de capacidades end-to-end)
6 → Contacto                (1 CTA claro)
```

**Esta jerarquía no cambia sin un nuevo ADR.**
Está fundamentada en Laws of UX documentadas en TASK_JOURNEY_MAPS.md.

---

## Casos de estudio en el portafolio — lista completa

Toda la experiencia del profesional entra como evidencia.
Los proyectos con repo propio tienen evidencia TITAN verificable.

| # | Proyecto | Sector | Rol | Evidencia TITAN | Repo / Link |
|---|---|---|---|---|---|
| 01 | BBVA Colombia & Panamá | Banca & Fintech | Staff Product Architect | PAR + métricas + Sistema GEMAS | — |
| 02 | FDN | GovTech | Consultor A11Y + Arquitecto | 654 fallas WCAG · LCP −90% · RAG | — |
| 03 | Solidaria Portal | Insurtech | Staff Product Architect | 212 tests · 0 axe · Storybook Chromatic | github.com/MauroPX/solidaria-portal |
| 04 | Simón v2 Monitor | Movilidad / IoT | Design Engineer | GATE 2 11/12 · WCAG AAA · 9 componentes LOCK | github.com/MauroPX/simon-v2-monitor |
| 05 | Correos Chile (Merken) | Logística | Design Lead | +400 componentes · TTM 12→6 meses | — |
| 06 | FID Seguros Chile | Insurtech | Lead Product Designer | 1,109 inspecciones · Carbon DS · DDD | — |
| 07 | Nivelics / UniLaSalle | EdTech | Staff Architect | WCAG 2.2 AAA · Multi-LLM · n8n | — |
| 08 | Ruedaz | Mobility SuperApp | Senior UX Designer | 5 plataformas · +90% recurrente · PLG | — |
| 09 | Redeban | Fintech | Senior UX + Procesos | $48.9M COP · microservicios · Docker | — |
| 10 | Colsanitas | HealthTech | UX Designer | 58 variables clínicas · Liferay DXP | — |
| 11 | PROCOLOMBIA | GovTech | UX Designer | SSO global · CRM NEO · LDAP | — |
| 12 | Ecopetrol | Oil & Gas | UX Designer | DS institucional · WCAG 2.1 AA | — |
| 13 | SI-CLO / IDPay | Fintech | Consultor UX + Datos | Ley 1527 · wizard 6 pasos · Job Diario | — |
| 14 | ADL Digital Labs | EdTech | Product Designer | 46 estudiantes · validación campo | — |
| 15 | SuRed | Fintech | (DNA) | JWT · SHA-256 · JasperReports | — |
| 16 | TVS+ | Salud | (DNA) | Terminal Virtual Sanitario · CIE10 | — |
| 17 | Old Mutual / Skandia | Seguros | Senior UX | Portal clientes · contratos financieros | — |
| 18 | Dacartec (base) | Multi-sector | Senior UX | 7 clientes enterprise 2017-2020 | — |
| 19 | Universidad La Salle | Educación | Frontend Architect | IBM WebSphere · +1000 páginas · LDAP | — |
| 20 | TITAN v7.0 | Framework propio | Autor | 56 archivos · 180+ comandos · BFL | proyecto.knowledge |

---

## Roles y skills — entrada al portafolio desde NavSystem tab B

Los roles no se presentan como un menú de servicios.
Se presentan como **etapas de un mismo proyecto**:

```
Pensamiento     → Staff Product Architect · Digital Transformation Architect
Diseño          → Staff Product Designer · UX Engineer · Accessibility Lead
Operaciones     → AI Product Manager · AI Orchestration Lead · DesignOps Lead
Técnico         → Full-Stack Engineer · Tech Lead · Platform Engineer
```

**El diferenciador**: una sola persona opera las 4 capas en secuencia.
Sin cambiar de persona. Sin pérdida de contexto. Con evidencia en cada paso.

---

📍 Momentum: M1 | Artefacto: ROADMAP_v1 | Nivel: B (vivo)
