# ROLES Y SKILLS — PORTAFOLIO
# Leonel Mauricio Gómez Ocampo · Staff Product Architect
# Versión: 1.0 | Junio 2026
# Procesado con: TITAN_TONE_ORCHESTRATOR.md + PORTAFOLIO_AUDIENCE_RULE.md
#
# ESTRUCTURA:
#   PARTE 1 — Roles de mercado que puedo cubrir (de más buscados a más emergentes)
#   PARTE 2 — Mapa de skills (de pensamiento a técnico)
# ─────────────────────────────────────────────────────────────────

---

# PARTE 1 — ROLES DE MERCADO

> Los roles están ordenados de mayor demanda actual a más emergentes/contemporáneos.
> Para cada uno: fit de experiencia, señal de seniority y tono por audiencia.

---

## TIER 1 — Alta demanda, fit directo y comprobable

---

### Staff Product Designer / Principal Designer

```yaml
audience_tag: reclutador, cliente
demanda_mercado: muy alta
fit: directo
señal_seniority: Design Systems + Research + liderazgo de proceso
```

**Por qué aplica:** 10+ años de diseño de producto end-to-end con Design Systems
propios, UX Research estructurado, accesibilidad WCAG como gate técnico y
liderazgo de proceso sobre equipos multidisciplinarios.

**Para reclutador:** He liderado el diseño completo de más de 20 productos
digitales en sectores regulados — desde el research inicial hasta la
CONFORMANCE_STATEMENT de accesibilidad en producción. No solo diseño
pantallas: diseño el sistema que hace que las pantallas sean correctas.

**Para cliente:** Diseño productos que cualquier persona puede usar —
incluyendo quienes tienen discapacidades visuales o motoras. Lo verifico
con herramientas automáticas y pruebas reales con lectores de pantalla,
no con una promesa en el brief.

---

### Senior / Staff Product Manager

```yaml
audience_tag: reclutador, cliente
demanda_mercado: muy alta
fit: directo
señal_seniority: Strategy Brief + OKRs + Discovery + roadmap con trade-offs
```

**Por qué aplica:** He gestionado el ciclo completo de producto en proyectos
de banca, gobierno y educación — desde la definición del problema (JTBD,
SSOT, Strategy Brief) hasta la medición post-lanzamiento (DORA, NPS,
conversión). Operate con Continuous Discovery como hábito, no como proyecto.

**Para reclutador:** Entrego roadmaps con trade-offs documentados, no listas
de deseos. Cada feature que priorizo tiene un EXPERIMENT_BRIEF antes y un
AB_RESULTS después. En BBVA lideré la digitalización del 100% de la
contratación Pyme — decisión estratégica con impacto medible, no solo
gestión de backlog.

**Para cliente:** Conozco la diferencia entre lo que los usuarios dicen que
quieren y lo que realmente necesitan. Lo valido con investigación, no con
intuición.

---

### Tech Lead / Engineering Manager

```yaml
audience_tag: reclutador, cliente
demanda_mercado: muy alta
fit: directo
señal_seniority: ADRs + BFL + CI/CD + mentoring + DORA
```

**Por qué aplica:** He diseñado y liderado la implementación técnica de
stacks completos — desde la decisión de arquitectura (ADR firmado) hasta
el pipeline CI/CD con 7 jobs automatizados. Opero con DORA como métrica
de salud del equipo y TITAN BFL como protocolo de construcción.

**Para reclutador:** En FDN pasé de un sistema Drupal 7 con LCP de 25 segundos
a un stack Next.js 14 + Strapi v5 con axe-core bloqueando el deploy ante
fallas de accesibilidad. Las decisiones están documentadas en ADRs firmados —
no en la cabeza de una persona.

**Para cliente:** El código que entrego tiene pruebas automáticas,
accesibilidad verificada y un proceso que detecta errores antes de que
lleguen a producción.

---

### UX Engineer / Design Engineer

```yaml
audience_tag: reclutador, comunidad
demanda_mercado: alta y creciente
fit: directo — este rol es exactamente lo que hago
señal_seniority: tokens M3 + Atomic Design + Storybook + axe-core en CI/CD
```

**Por qué aplica:** Vivo en la frontera entre diseño e ingeniería. Diseño
en Figma con variables y tokens, implemento en React/Next.js con los mismos
tokens, verifico accesibilidad con axe-core en el pipeline y documento con
Storybook. No entrego specs — entrego componentes.

**Para reclutador:** He construido Design Systems completos con gobernanza
real: COMPONENT_REGISTRY, CHANGE_RFC, VERSION_CERTIFICATE. Cada componente
que sale a producción tiene un BFL completo (Blueprint → Forge con Blind
Review → Lock con evidencia firmada).

**Para comunidad:** Stack de DS: Figma con variables → DESIGN_TOKENS.json
como SSOT → React/MUI con tokens CSS → Storybook para documentación →
axe-core como gate en CI/CD → CONFORMANCE_STATEMENT como evidencia de
accesibilidad. Nada de esto es decorativo.

---

### Full-Stack Product Engineer

```yaml
audience_tag: reclutador, cliente
demanda_mercado: muy alta
fit: directo
señal_seniority: end-to-end ownership + CI/CD + RAG + compliance
```

**Por qué aplica:** He diseñado, implementado y desplegado productos
completos — frontend, backend, base de datos, infraestructura y pipeline.
Con compliance regulatorio (PCI-DSS, WCAG, Ley 1581) integrado desde el
inicio, no como capa final.

**Para reclutador:** En el proyecto FDN: Next.js 14 (frontend) + Strapi v5
(CMS headless) + PostgreSQL 16 con pgvector (base de datos + embeddings) +
Claude API (RAG) + Cloudflare WAF (seguridad) + GitHub Actions con 7 jobs
(CI/CD). End-to-end con ownership completo.

**Para cliente:** Un solo punto de responsabilidad para todo el stack.
No hay "eso es problema del backend" ni "eso es problema del diseño".

---

## TIER 2 — Alta demanda, fit con contexto de IA y sistemas

---

### AI Product Manager / AI Product Lead

```yaml
audience_tag: reclutador, cliente
demanda_mercado: alta, creciendo 143% YoY según LinkedIn 2026
fit: directo — he diseñado e implementado productos con IA real
señal_seniority: RAG + Multi-LLM + governance + TIRFC
```

**Por qué aplica:** He integrado IA como componente funcional de productos
reales — no como demo. Motor RAG con Claude API en FDN, orquestación
Multi-LLM con n8n en Nivelics, automatización de contenido con Gemini Gems
en BBVA. Con protocolo de governance (MLOps, model drift, prompt versioning).

**Para reclutador:** Diseño productos de IA con governance: el modelo no
va a producción sin MLOPS_PLAN, thresholds de drift definidos y A/B testing
en shadow mode. No es IA como feature — es IA como sistema con
responsabilidad de operación.

**Para cliente:** Integro inteligencia artificial en tu producto de forma
que puedas explicarle a tu junta directiva cómo funciona, por qué toma
las decisiones que toma y cómo lo apagas si hay un problema.

---

### AI Systems Architect / AI Orchestration Lead

```yaml
audience_tag: reclutador, comunidad
demanda_mercado: emergente, alta demanda en 2026
fit: directo — TITAN es exactamente esto
señal_seniority: Consejo BFL multi-modelo + LTP Pattern + TITAN v7.0
```

**Por qué aplica:** Diseñé y opero TITAN v7.0 — un sistema de orquestación
de 5 modelos de IA con roles fijos, protocolo adversarial, Blind Review
y Chain of Custody completa. Es el rol que el mercado está empezando a
buscar bajo distintos nombres.

**Para reclutador:** Construí un sistema donde Claude actúa como Arquitecto,
DeepSeek-R1 como Inquisidor (revisión ciega), Qwen 2.5 como Artesano del
código, Gemini 2.0 Pro (1M tokens) como Observador de contexto y GPT-4o
como Consultor de estándares. Cada rol tiene un dominio, un protocolo y
una forma de veto. El sistema lleva 2 años operando sin regresiones críticas.

**Para comunidad:** LTP Pattern (Large-to-Precision): Gemini analiza el
repo completo → CONTEXT_BRIEF.json con confidence_score → Gate 0.5 →
Claude ejecuta con contexto comprimido. La abstracción de modelos es via
LiteLLM + TITAN_PROJECT.yaml — sin hardcoding de ningún modelo específico.

---

### Platform Engineer / DevOps/MLOps Lead

```yaml
audience_tag: reclutador, comunidad
demanda_mercado: muy alta
fit: parcial-directo (no es mi rol primario pero opero este nivel)
señal_seniority: CI/CD 7 jobs + Docker + Cloudflare + DORA Elite
```

**Por qué aplica:** He diseñado e implementado pipelines CI/CD completos,
infraestructura con Cloudflare WAF + R2, contenedores Docker para paridad
de ambientes y MLOps para modelos en producción. Con DORA como marco de
medición.

**Para reclutador:** CI/CD en GitHub Actions con 7 jobs: lint → type-check
→ unit tests → axe-core accessibility gate → build → staging deploy →
production deploy. El job de accesibilidad es bloqueante — falla axe-core
= no hay deploy, sin posibilidad de override manual.

---

### Accessibility Lead / Inclusive Design Specialist

```yaml
audience_tag: reclutador, cliente
demanda_mercado: alta y regulada (Ley Europea de Accesibilidad 2025)
fit: directo
señal_seniority: WCAG 2.2 AAA + NTC 5854 + axe-core en CI/CD + CONFORMANCE_STATEMENT
```

**Por qué aplica:** He certificado accesibilidad WCAG 2.2 en niveles AA y
AAA en proyectos reales con lectores de pantalla, pruebas de navegación
por teclado y auditorías punto a punto. No como checklist — como gate
técnico irrevocable en el pipeline.

**Para cliente:** La accesibilidad no es opcional desde junio 2025 en la
UE, y Colombia tiene la NTC 5854 para el sector público. Lo que entrego
viene con CONFORMANCE_STATEMENT firmada y evidencia auditable — no con
una promesa de que "debería funcionar".

---

## TIER 3 — Roles emergentes / contemporáneos / los "seudos"

---

### Context Engineer

```yaml
audience_tag: comunidad
demanda_mercado: emergente (Karpathy 2025, creciente en 2026)
fit: directo — esto es lo que hago con el LTP Pattern de TITAN
nota: el título es nuevo, la disciplina es real
```

**Por qué aplica:** Diseño cómo los modelos de IA reciben contexto: qué
información incluir, qué comprimir, qué descartar y cómo estructurar el
handoff entre modelos con ventanas de contexto diferentes. El LTP Pattern
de TITAN es context engineering aplicado.

**Para comunidad:** CONTEXT_BRIEF.json como artefacto formal de handoff
entre Gemini (contexto masivo) y Claude (ejecución de precisión). Campos:
`relevant_files`, `current_state`, `next_action`, `confidence_score`.
Gate 0.5 valida que el brief es coherente antes de que Claude ejecute.
Si el confidence_score < 0.7 → Gemini regenera el brief.

---

### AI-Augmented Product Builder

```yaml
audience_tag: cliente, reclutador
demanda_mercado: muy emergente — el rol que el mercado aún no sabe nombrar
fit: directo
nota: según análisis de mercado 2026, es "la persona que convierte intención vaga en producto funcionando, con IA como herramienta primaria"
```

**Por qué aplica:** No uso IA como asistente de escritura. La uso como
herramienta primaria de producción: diseño con IA, especifico con IA,
construyo con IA, audito con IA. El humano hace todo el pensamiento;
la IA hace todo el escribir. TITAN es el sistema que hace eso de forma
gobernada y trazable.

**Para cliente:** Entrego más rápido que un equipo convencional porque
orquesto múltiples modelos especializados en paralelo — pero con el mismo
nivel de rigor que un proceso de ingeniería enterprise.

**Para reclutador:** No soy un "usuario avanzado de ChatGPT". Construí el
sistema de gobernanza que permite usar IA en producción con trazabilidad
completa, revisión adversarial y zero-hallucination en 5 capas.

---

### Digital Transformation Architect

```yaml
audience_tag: cliente, reclutador
demanda_mercado: alta en sector financiero, gobierno y salud en LATAM
fit: directo — BBVA, FDN, Colsanitas, Colegio Médico, Ecopetrol
señal_seniority: Brownfield + compliance + stakeholder management en sectores regulados
```

**Por qué aplica:** He liderado modernizaciones de sistemas legados en
sectores regulados — banca, gobierno, salud — donde el constraint no es
técnico sino regulatorio, político y operacional. La arquitectura tiene
que convencer a la junta directiva, al regulador y al equipo técnico
al mismo tiempo.

**Para cliente:** Sé cómo modernizar sin apagar. He migrado sistemas
críticos sin interrumpir operaciones — con runbooks de 7 fases, rollback
documentado y stakeholders informados en cada paso.

---

### Prompt Systems Engineer

```yaml
audience_tag: comunidad
demanda_mercado: emergente, con salarios que ya superan $100K USD según mercado 2026
fit: directo — TITAN tiene prompt versioning como práctica formal
nota: el título es temporalmente hype, la disciplina es real y duradera
```

**Por qué aplica:** TITAN tiene prompt versioning formal (Nivel A en
IMMUTABILITY), templates de sistema por agente con contratos de
INPUT_SCHEMA/OUTPUT_SCHEMA, y un protocolo anti-racionalización para
detectar cuando un prompt produce outputs sesgados. No es "escribir
buenos prompts" — es ingeniería de sistemas de prompts.

---

# PARTE 2 — MAPA DE SKILLS

> Organizado de pensamiento (más abstracto) a técnico (más concreto).
> La columna vertebral es TITAN — cada skill tiene su evidencia en el sistema.

---

## CAPA 1 — PENSAMIENTO ESTRATÉGICO

```yaml
audience_tag: cliente, reclutador
```

| Skill | Nivel | Evidencia en TITAN/proyectos |
|-------|-------|------------------------------|
| Systems thinking | Expert | TITAN v7.0: 9 Hubs encadenados, BPM M0→M5, Propagation Protocol |
| Product strategy | Expert | Strategy Brief M1, OKRs, TIRFC, Ecosystem Intelligence Engine |
| Problem framing | Expert | DPC (Diagnóstico·Plan·Confirmación) como protocolo obligatorio |
| Decision documentation | Expert | ADRs firmados, Chairman Mode, Anti-rationalization table |
| Trade-off analysis | Expert | Hub Maturity Framework niveles 1-5, BFL GATE 1 y 2 |
| Domain-Driven Design | Expert | Bounded contexts en FDN, CMC, SuRed, Nivelics |
| Risk modeling | Expert | THREAT_MODEL en M1, STRIDE, PASTA, RISK_REGISTER |
| Stakeholder alignment | Expert | BBVA (Colombia-Panamá), FDN (gobierno), Colegio Médico (gremial) |

---

## CAPA 2 — DISEÑO DE SISTEMAS Y PROCESOS

```yaml
audience_tag: reclutador, comunidad
```

| Skill | Nivel | Evidencia en TITAN/proyectos |
|-------|-------|------------------------------|
| BPM (Business Process Modeling) | Expert | TITAN M0→M5 completo, SI-CLO Convenios, Colegio Médico, Redeban |
| Service Blueprint | Expert | MEGA_04, PROCOLOMBIA, Correos Chile, Parking Ruedaz |
| Design System Architecture | Expert | TITAN DS Governance v2, M3 HCT, Ecopetrol DS, Ruedaz System Design |
| Atomic Design | Expert | Clasificación obligatoria GATE 1 BFL, 5 niveles, data-atomic en DOM |
| Immutability & versioning | Expert | COMPONENT_REGISTRY, CHANGE_RFC, VERSION_CERTIFICATE, SemVer |
| Information Architecture | Expert | El Tiempo (eye-tracking), PROCOLOMBIA (1000+ páginas), UdeA, Ecopetrol |
| Journey Mapping | Expert | CUJ, MOTs, Frontstage/Backstage, Blueprint analógico+digital |
| ResearchOps | Avanzado | RESEARCH_SCREENER, SYNTHESIS, USER_TASKS_MATRIX, panel de participantes |

---

## CAPA 3 — UX RESEARCH Y VALIDACIÓN

```yaml
audience_tag: reclutador, comunidad
```

| Skill | Nivel | Evidencia en TITAN/proyectos |
|-------|-------|------------------------------|
| JTBD (Jobs to be Done) | Expert | Protocolo en M1, ADL EdTech, SuRed, PROCOLOMBIA |
| Usability testing | Expert | ADL (46 estudiantes, campo), El Tiempo (eye-tracking), Old Mutual |
| Design Sprint (GV) | Expert | SKILL_DESIGN_SPRINT: 5 días completos, Decider, 5 usuarios mínimo |
| Continuous Discovery | Expert | Hábito semanal en M5, EXPERIMENT_BRIEF antes de cada A/B |
| Heuristic evaluation | Expert | 34 heurísticas en MEGA_08, FDN auditoría, FID Seguros Chile |
| Ethnographic research | Avanzado | ADL Digital Labs (talleres de ideación, focus groups con docentes) |
| Quantitative analysis | Avanzado | GA4, Amplitude, Hotjar, SQL — Nivelics, FDN SEO (49K+ backlinks) |
| Eye-tracking | Avanzado | El Tiempo (LookZones, fijaciones, TOT) |

---

## CAPA 4 — INTELIGENCIA ARTIFICIAL APLICADA

```yaml
audience_tag: reclutador, comunidad
```

| Skill | Nivel | Evidencia en TITAN/proyectos |
|-------|-------|------------------------------|
| LLM Orchestration | Expert | TITAN Consejo BFL: 5 modelos, roles fijos, LiteLLM abstraction |
| RAG (Retrieval-Augmented Generation) | Expert | FDN: Claude API + pgvector + PostgreSQL 16 |
| Prompt Engineering | Expert | TITAN prompt versioning Nivel A, Gemini Gems en BBVA (-60% ciclos) |
| Multi-LLM workflows | Expert | TITAN + n8n, Nivelics Multi-LLM, BBVA Gemini automation |
| MLOps / LLMOps | Avanzado | Model drift detection, A/B shadow mode, thresholds de alerta |
| AI Governance | Expert | Zero Hallucination 5 capas, Anti-rationalization table, TIRFC AI_MODEL_UPGRADE |
| Context Engineering | Expert | LTP Pattern: Gemini→CONTEXT_BRIEF→Gate 0.5→Claude |
| AI Agent Design | Expert | Contratos AGENTE con INPUT/OUTPUT_SCHEMA, RETRY_POLICY, FALLBACK |

---

## CAPA 5 — ACCESIBILIDAD E INCLUSIÓN

```yaml
audience_tag: reclutador, cliente, comunidad
```

| Skill | Nivel | Evidencia en TITAN/proyectos |
|-------|-------|------------------------------|
| WCAG 2.1/2.2 (AA y AAA) | Expert | Gate irrevocable BFL, CONFORMANCE_STATEMENT, FDN, Nivelics, BBVA |
| NTC 5854 (Colombia) | Expert | Sinergia-DNP, FDN, compliance dashboard TITAN |
| axe-core en CI/CD | Expert | FDN: job bloqueante en GitHub Actions, Nivelics: axe DevTools |
| Screen reader testing | Expert | NVDA + Firefox, VoiceOver + Safari — FDN auditoría manual punto a punto |
| Neurodiversity design | Avanzado | TITAN SKILL_NEURODIVERSITY: 7 tipos, UDL 3.0, CLT, gate BFL ítem 15 |
| Universal Design | Avanzado | SKILL_UNIVERSAL_DESIGN: M3 + Apple HIG + 19 criterios UD |
| Keyboard navigation | Expert | FDN (WCAG 2.1.1), Sinergia-DNP (NTC 5854 navegación teclado) |
| Color contrast audit | Expert | FDN (contraste 1.4.3), M3 HCT color system como garantía de contraste |

---

## CAPA 6 — INGENIERÍA FRONTEND

```yaml
audience_tag: reclutador, comunidad
```

| Skill | Nivel | Evidencia en TITAN/proyectos |
|-------|-------|------------------------------|
| React / Next.js | Expert | FDN (Next.js 14), Nivelics (Next.js 14), Parking Ruedaz |
| TypeScript | Avanzado | Zero `any` como regla TITAN CRAFTSMAN, Dacartec (Angular + TS), Redeban |
| Material Design 3 / HCT | Expert | TITAN DS Governance v2: Reference→System→Component tokens |
| CSS / SASS / BEM extendido | Expert | TITAN BEM con namespace de producto, Ecopetrol, CMC, Dacartec |
| Atomic Design en código | Expert | data-atomic en DOM, COMPONENT_REGISTRY, 5 niveles implementados |
| Storybook | Avanzado | Nivelics DS, componentes con estados y variantes documentados |
| Performance (Core Web Vitals) | Expert | FDN: LCP 25.2s → <2.5s, TTFB, Lighthouse ≥ 85 como gate TITAN |
| Angular | Avanzado | Dacartec (Angular 8), CMC (Angular v9 + D3.js), Redeban |

---

## CAPA 7 — INGENIERÍA BACKEND E INFRAESTRUCTURA

```yaml
audience_tag: reclutador, comunidad
```

| Skill | Nivel | Evidencia en TITAN/proyectos |
|-------|-------|------------------------------|
| Strapi v5 (CMS headless) | Expert | FDN, Nivelics — Content Types, permisos, API REST |
| PostgreSQL / pgvector | Avanzado | FDN (PostgreSQL 16 + pgvector para RAG), SI-CLO (modelo "Tabla Única") |
| REST API design | Expert | SuRed (ONJ), FDN (RAG endpoints), CMC (microservicios Spring Boot) |
| GitHub Actions CI/CD | Expert | FDN: 7 jobs automatizados con axe-core gate bloqueante |
| Cloudflare (WAF, DNS, R2) | Avanzado | FDN: WAF activo, administración DNS, storage R2 |
| Docker | Avanzado | CMC (homologación dev/staging/prod), Redeban, Colsanitas |
| JWT / seguridad transaccional | Expert | SuRed (JWT 60min + SHA-256 + PCI-DSS), TITAN SECOPS RLS/CORS |
| Spring Boot / Java | Intermedio | CMC (microservicios), Redeban (migración JSF → Spring Boot) |
| n8n (automatización) | Expert | TITAN MEGA_10: 5 workflows, Message Gateway, integración Notion |

---

## CAPA 8 — GOBERNANZA, COMPLIANCE Y SEGURIDAD

```yaml
audience_tag: reclutador, cliente
```

| Skill | Nivel | Evidencia en TITAN/proyectos |
|-------|-------|------------------------------|
| TITAN BFL Protocol | Expert | 56 archivos, 180+ comandos, protocolo en producción |
| Spec-Driven Development | Expert | SPEC_ITEM_ID→BLUEPRINT→código→VERSION_CERTIFICATE en todo proyecto |
| Security by design | Expert | THREAT_MODEL en M1, STRIDE, RLS/CORS desde M0, DAST en M4 |
| PCI-DSS | Avanzado | SuRed: JWT + SHA-256 + SFTP/SSH + conciliación automática |
| SIPLAFT / Habeas Data | Avanzado | SuRed: validación de identidad contra registros gubernamentales |
| Ley 1581 Colombia | Expert | TITAN compliance dashboard, DATA_PROCESSING_MAP, PRIVACY_POLICY gate |
| ISO 9001 (base) | Avanzado | TITAN SKILL_COMPLIANCE Track 2, QUALITY_POLICY firmada en M0 |
| CMF Chile (regulación seguros) | Intermedio | FID Seguros: liquidación de siniestros bajo normativa CMF |
| SAFe / Scrum a escala | Expert | BBVA (SAFe), FDN, Nivelics — múltiples squads coordinados |

---

## CAPA 9 — HERRAMIENTAS Y STACK ACTUAL

```yaml
audience_tag: reclutador, comunidad
```

**Diseño:** Figma (variables, tokens, prototipos, Dev Mode) · Sketch · Axure RP · InVision

**Código:** Next.js 15 · React 19 · TypeScript · Angular · Strapi v5 · PostgreSQL · Python (scripts)

**IA y automatización:** Claude Sonnet 4.6 · Gemini 2.0 Pro · DeepSeek-R1 · GPT-4o · Qwen 2.5 · n8n · LiteLLM

**Infraestructura:** Vercel · Cloudflare · Railway · Docker · GitHub Actions · Supabase

**Accesibilidad:** axe-core · ARC Toolkit · axe DevTools · NVDA · VoiceOver · Lighthouse

**Analytics:** PostHog · GA4 · Amplitude · Hotjar · Google Search Console

**Proceso:** TITAN v7.0 · Notion · Linear · Shape Up · Continuous Discovery

---

## RESUMEN EJECUTIVO DE SKILLS

```yaml
audience_tag: todos
```

**Para cliente:** Puedo diseñar el producto, construirlo, desplegarlo y
operarlo — con accesibilidad verificada, seguridad integrada y un proceso
que no depende de que yo esté disponible el día que algo falla.

**Para reclutador:** T-shaped con raíces en diseño de sistemas, ramas en
ingeniería frontend, IA aplicada y gobernanza de proceso. Opero a nivel
Staff en la intersección producto-diseño-ingeniería. He creado el sistema
(TITAN) que uso para trabajar — eso dice más que cualquier lista de
herramientas.

**Para comunidad:** No soy un especialista que hace una cosa bien.
Soy un generalista con profundidad en 3 dominios: sistemas de diseño con
gobernanza real, orquestación de IA multi-modelo, y compliance técnico
en sectores regulados. El mapa de arriba es honesto — donde digo
"Intermedio", lo digo.

**Para todos:** El stack cambia. El pensamiento sistémico no.

---

*ROLES_Y_SKILLS_PORTAFOLIO.md — v1.0 — Junio 2026*
*Fuentes: SSOT v2 + TITAN v7.0 + análisis de mercado laboral tech 2026*
*Nivel IMMUTABILITY: Nivel B — actualizar semestralmente o ante cambio de posicionamiento*
*Owner: Leonel Mauricio Gómez Ocampo · Staff Product Architect*
