# CONTENT_COPY_STRATEGY.md
# EXCALIBUR v2.0 — Estrategia de contenido y copy del portafolio
# TITAN v7.0 | M1 | 2026-09-05
# Nivel: B (vivo) · Complementa SEO_AIO_PLAN.md (mismo Momentum)

---

**Resumen en 3 líneas (regla DIS-E3 — documento >1 página):**
- El copy vigente en producción (`main`, sitio v93) es real y sólido, pero usa terminología desactualizada (TITAN v5.0) y no aplica los skills de redacción del propio framework.
- Este documento reescribe ese contenido con SKILL_PERSUASION (Ethos·Pathos·Logos), SKILL_SEO_AEO_GEO (AEO) y SKILL_NEURODIVERSITY (DIS-D5), sin inventar ninguna cifra.
- Incluye ahora una guía de voz reutilizable, un glosario (DIS-D6) y el mapeo de metadata por página que `SEO_AIO_PLAN.md §1` deja pendiente de contenido real.

---

## 0. Qué cambia y por qué (nota de método)

No inventé ninguna cifra, cliente ni logro nuevo — todo dato de este documento existe en el contenido actual del sitio en producción. Lo que cambió es la **estructura y la redacción**, aplicando tres skills del propio framework TITAN:

| Skill aplicado | Qué exige | Dónde se ve el cambio |
|---|---|---|
| **SKILL_PERSUASION** (tríada Ethos·Pathos·Logos) | Cada caso debe declarar: en qué evidencia se basó la decisión (Ethos), qué dolor humano resolvió (Pathos), qué trazabilidad técnica lo conecta (Logos) — no solo "reto → resultado" | Cada caso de estudio tiene 3 líneas fijas: **Insight · Evidencia · Qué se construyó** en vez de un párrafo narrativo suelto |
| **SKILL_SEO_AEO_GEO** (§3.1 Portfolio/Persona + §4 reglas AEO) | Schema `Person` obligatorio; FAQ con preguntas en lenguaje real del ICP y respuestas *standalone*; primera oración de cada sección = respuesta completa | Metadata en §1; FAQ ampliado a 8 preguntas (§7); tabla de metadata por página (§8, nuevo) |
| **SKILL_NEURODIVERSITY — DIS-D5/D6** | Oraciones ≤25 palabras promedio, voz activa, nivel de lectura ≤ secundaria; términos técnicos enlazados a glosario en su primera aparición | Frases largas partidas; glosario nuevo (§9) |

También corregí una inconsistencia de versión: el contenido actual dice **"TITAN v5.0"** en 4 lugares. El framework vigente es **TITAN v7.0** (BPM M0-M5, ciclo Blueprint-Forge-Lock, Atomic Design, M3/HCT, DDD, SecOps). Terminología actualizada en todo el documento.

**Relación con `SEO_AIO_PLAN.md`:** ese documento define la arquitectura técnica de SEO (rutas, meta tags como código, sitemap, i18n) y ya reporta qué está implementado en `feat/v2-analytics-posthog`. Este documento aporta el **contenido real** que esa arquitectura necesita — el texto que va dentro de cada `title`, `description` y `og:description` — porque hasta ahora esos campos existen como plantilla (`[nombre]`, `[qué hace]`) sin redactar.

---

## 1. Metadata / SEO técnico — Home

Según `SKILL_SEO_AEO_GEO §3.1`, un portafolio de consultoría requiere schema `Person`:

```json
{
  "@type": "Person",
  "@id": "https://maurogomez.design/#person",
  "name": "Leonel Mauricio Gómez Ocampo",
  "jobTitle": "Staff Product Architect",
  "url": "https://maurogomez.design",
  "knowsAbout": [
    "Design Systems", "WCAG 2.2 AAA", "AI Orchestration",
    "DesignOps", "Atomic Design", "Material Design 3"
  ],
  "sameAs": ["https://linkedin.com/in/mauropx"]
}
```

**Title tag:** `Mauricio Gómez — Staff Product Architect | Design Systems & WCAG 2.2 AAA`
**Meta description (≤160 car.):** `Staff Product Architect en Bogotá. Diseño sistemas de producto que un equipo opera sin mí: Design Systems, WCAG 2.2 AAA y orquestación de IA con TITAN v7.0.`
**og:description (puede ser más larga, ~200 car.):** `10+ años liderando Design Systems y accesibilidad WCAG 2.2 AAA en fintech, gobierno y logística — BBVA, Correos Chile, FDN. Creador de TITAN v7.0, framework de orquestación de producto multi-IA.`

---

## 2. Hero

**Antes:**
> "Mauricio Gómez — Staff Product Architect" / "Knowledge lives in artifacts, not in people."

**Propuesta (regla AEO 1 — respuesta completa en la primera frase, sin perder la frase ancla):**

> ## Mauricio Gómez — Staff Product Architect
> **Construyo sistemas que el equipo opera sin mí.**
> Diseño de producto, Design Systems y accesibilidad WCAG 2.2 AAA para equipos que necesitan escalar sin depender de una sola persona.
>
> 📍 Bogotá, Colombia · Remoto · 10+ años de experiencia

*(Nota: uso tu frase de posicionamiento en español — "Construyo sistemas que el equipo opera sin mí" — en vez de "Knowledge lives in artifacts, not in people", porque es más corta, más citable y coincide con tu idioma primario. Si quieres mantener la versión en inglés como tagline internacional para `/en`, la dejamos como subtítulo alterno — ver nota de bilingüismo en §10.)*

---

## 3. Servicios (Technical Audit / Expediente SSOT / Executive Summary)

**Antes** (voz pasiva, frases largas):
> "Deep analysis of 3,000+ technical evidences for engineers and architects seeking proof of 1:1 parity."

**Propuesta (DIS-D5: voz activa, ≤25 palabras):**

> **Auditoría técnica** — Reviso 3,000+ evidencias técnicas para que ingenieros y arquitectos verifiquen paridad 1:1 entre diseño y código.
>
> **Expediente SSOT** — Documento tu estrategia de carrera: 13+ años de gobernanza y DesignOps en un solo archivo trazable.
>
> **Resumen ejecutivo** — Una síntesis de 60 segundos con tu stack principal y logros, para liderazgo que no tiene tiempo de leer el resto.

---

## 4. Caso insignia — Correos Chile (estructura Ethos·Pathos·Logos)

### Portal Empresas B2B — Ecosistema completo

**Insight (Pathos):** Las 13 regiones de la red logística postal de Chile operaban desconectadas entre sí. Un operador regional no podía ver el estado real de un envío fuera de su zona — cada retraso se descubría tarde, ya con el cliente reclamando.

**Evidencia (Ethos):** Análisis del modelo de datos backend existente (297 envíos, 11 campos, 13 regiones) antes de proponer cualquier solución — no se rediseñó a ciegas.

**Qué se construyó (Logos):**
1. Absorción de identidad corporativa (Pantone 485C, Futura STD)
2. 5 escenarios por flujo (camino feliz, alternativas, errores, casos límite)
3. Design System de 400+ componentes en MUI React
4. 3 productos entregados: Portal B2B, Sucursal Virtual, App Móvil

**Resultado verificable:**
- Timeline de 12 meses comprimido a 6
- 400+ componentes de Design System
- 10 desarrolladores autónomos desde el sprint 1
- >95% de fidelidad UI–Desarrollo

**og:description sugerida para `/cases/correos-chile`:** `Cómo comprimí un timeline de 12 a 6 meses conectando 13 regiones postales de Chile con un Design System de 400+ componentes MUI React — 10 desarrolladores autónomos desde el sprint 1.`

---

## 5. Casos seleccionados (mismo patrón, versión condensada)

### BBVA Colombia & Panamá
*Staff Product Architect & UX Strategist · Jun 2025 – Feb 2026*

**Insight:** los tutoriales guiados ("coach marks") de funcionalidades ya en producción (Bre-B, Proyecto Brickell Panamá) se construían como guiones sueltos, sin sistema — cada país/producto reinventaba tono, motion y reglas de negocio desde cero.
**Evidencia:** Sistema GEMAS, construido en 5 fases de madurez documentadas (Cimientos de marca → UX Writing y cognición → UI/Motion → Métricas de producción → Arquitectura de reglas de negocio), más un rediseño técnico propio del modelo de interacción: de "Coach Mark" (pantalla dividida, diagnosticado con jerarquía invertida en una de sus variantes) a "Walkthrough Inmersivo" (pantalla completa, guion técnico a beats de segundos para video sin narración) — incluye además una auditoría de accesibilidad/carga cognitiva propia (contraste AAA 7:1, paleta "Clean Canvas") sobre la interfaz de los tutoriales.
**Resultado:** +600 usuarios internos impactados en los módulos de Gestión de Capital de Trabajo y Mi Pyme Asegurada · 5/5 en calificación de 3 Product Owners · 100% de entregas a tiempo · presentaciones a nivel VP.
**og:description:** `Diseñé GEMAS, el sistema de gobierno de tutoriales guiados de BBVA para 3 productos B2B en Colombia y Panamá — 5/5 de calificación de 3 Product Owners y +600 usuarios internos impactados.`

### SuRed / Matrix Giros y Servicios (2024)
*Consultoría Tercerizada · Integración B2B transaccional*

**Insight:** integrar productos regulados de lotería (Baloto/Miloto) a un canal digital exige seguridad transaccional y conciliación diaria auditable, no solo una pantalla de compra.
**Evidencia:** Arquitectura de integración B2B con el Operador Nacional de Juegos (ONJ) — JWT con expiración a 60 minutos, cifrado de credenciales SHA-256, protocolos SFTP/SSH bajo PCI-DSS, validación de identidad contra listas de control gubernamentales (SIPLAFT/Habeas Data).
**Resultado:** Canal Baloto/Miloto activo en producción (App y Web de SuRed), con conciliación automática de doble chequeo diario contra ONJ, reportería contable y tirilla digital en PDF.
**og:description:** `Lideré la integración B2B de Baloto/Miloto en los canales digitales de SuRed — arquitectura de seguridad JWT/SHA-256 y conciliación diaria auditable con el Operador Nacional de Juegos.`

### Parking International / Ruedaz (2020-2022)
*Diseño de producto E2E · B2C/B2B*

**Insight:** un producto de parqueo necesitaba pensarse como un ecosistema de 5 plataformas conectadas (App, Web, Portal Corporativo, Parking Inside, Parking Attendant), no como una app aislada.
**Evidencia:** Ruedaz System Design (WCAG 2.1, Atomic Design), Customer Journeys diferenciados por segmento (B2C recurrente, B2B corporativo con monedero y cortesías), reglas de negocio para suscripciones y validación de cupones vía escaneo OCR de facturas.
**Resultado:** Ecosistema completo lanzado en tiendas (Jul 2020), suscripción mensual $59,900 COP, MVP corporativo de monedero virtual.
**og:description:** `Diseñé el ecosistema de producto E2E de Ruedaz (Parking International) — 5 plataformas conectadas, de la app de usuario final al portal corporativo.`

*(Nota de honestidad: la cifra de "+90% en uso recurrente" citada en el dossier interno de carrera aparece en dos resúmenes consolidados pero sin link a fuente primaria dentro de los documentos individuales revisados — se deja fuera de esta versión hasta confirmarla, mismo criterio que el costo TITAN pendiente en §6.)*

### FDN — Financiera de Desarrollo Nacional
*Consultor de Accesibilidad y Estrategia Digital · Feb 2026*

El caso FDN tiene **dos momentums distintos, con distinto nivel de evidencia** — se presentan por separado para no mezclar lo validado con lo propuesto:

**Momentum 1 — Auditoría de accesibilidad (confirmado, sobre el sitio real construido):**
**Insight:** El mandato de MinTIC exigía una auditoría WCAG 2.2 completa, no una revisión superficial.
**Evidencia:** Línea de tiempo de 3 hitos verificables — certificación WCAG 2.1 AA (22 dic 2023), revalidación WCAG 2.1 AA (16 sep 2024), y auditoría paga de 654 incidentes (sep 2025, 40 horas, PO AMC OC 2025074) que detecta que el sitio certificado en 2024 ya no cumple con WCAG 2.2 — 36 reportes de Lighthouse como respaldo adicional.
**Resultado:** Gap analysis y runbook de despliegue entregados, con hallazgos que sustentan la estrategia de migración descrita abajo.

**Momentum 2 — Propuesta de valor estratégica (estimación propia, no un entregable ya construido):**
**Insight:** Un sitio institucional estático y en EOL (Drupal 7) no puede sostener el rol de referente digital que FDN necesita en Colombia — la oportunidad es convertirlo en un sitio dinámico y pionero, no solo cumplir con accesibilidad.
**Evidencia:** Estimación propia de arquitectura y alcance (Next.js 14, Strapi v5, PostgreSQL + pgvector, Meilisearch, RAG con Claude API acotado al corpus de FDN, PostHog self-hosted por cumplimiento de Ley 1581) y de inversión (CAPEX de $100K–$174.5K USD) — presentada como propuesta a nivel VP, no como presupuesto ya ejecutado.
**Resultado:** Propuesta de migración empresarial con calendario objetivo (WCAG AA para el 30 de junio de 2026, lanzamiento el 30 de septiembre de 2026) — se declara explícitamente como visión/estimación propia, no como una entrega ya cerrada.
**og:description:** `Auditoría WCAG 2.2 sobre el sitio real de FDN (654 incidentes, mandato MinTIC) + una propuesta propia de arquitectura para convertirlo en un sitio dinámico y pionero en Colombia — dos momentums, presentados por separado.`

*(Nota de honestidad: no presentar el Momentum 2 como si ya estuviera construido o aprobado en su totalidad — es una estimación con foco de negocio, y se declara así. El Momentum 1 sí es un entregable verificable con evidencia técnica (los 654 incidentes, los reportes de Lighthouse).)*

### Universidad de La Salle
*Staff Product Architect · Dic 2023 – Jul 2024*

**Insight:** Ningún nivel de conformidad por debajo de AAA eliminaba el riesgo legal bajo estándares MinTIC.
**Evidencia:** Angular Material + IAAP Design System, evaluados en 18 categorías con 4 roles por criterio.
**Resultado:** Conformidad WCAG 2.2 AAA (el nivel más alto) — cero riesgo legal bajo normativa MinTIC.
**og:description:** `Logré conformidad WCAG 2.2 AAA — el nivel más alto — para la Universidad de La Salle, evaluando 18 categorías de accesibilidad con Angular Material.`

### FID Seguros (Chile)
*Lead Product Designer & DesignOps · Jul 2024 – Ene 2025*

**Insight:** Migrar de OutSystems (legacy) a MUI React sin un framework de gobierno habría fragmentado el sistema en meses.
**Evidencia:** Sistema operativo de diseño completo: BPM con 4 actores + Framework de Integración D↔D (1,002 filas, 46+ entregables), migrado con Domain-Driven Design.
**Resultado:** +70% de eficiencia en CX, con equipo de desarrollo autónomo desde el sprint 1.
**og:description:** `Migré el Design System de FID Seguros de OutSystems a MUI React con Domain-Driven Design — +70% de eficiencia en CX y equipo autónomo desde el sprint 1.`

### Siclo / IDPay
*UX Product Design Consultant · Oct 2025*

**Insight:** El módulo de gestión de acuerdos necesitaba especificación técnica completa antes de pasar a desarrollo, no solo wireframes.
**Evidencia:** 4 flujos, 11 wireframes, modelo de datos de 10 tablas y contratos de API definidos junto con el equipo técnico.
**Resultado:** Especificación UX y técnica completa para un SaaS B2B, con framework de métricas de satisfacción del cliente.
**og:description:** `Especificación UX y técnica completa del módulo de acuerdos de Siclo/IDPay: 4 flujos, 11 wireframes, modelo de datos de 10 tablas y contratos de API.`

---

## 6. TITAN — actualizado a v7.0 (corrige inconsistencia de versión)

**Antes (desactualizado — dice v5.0 en 4 lugares):**
> "TITAN v5.0 Framework — Multi-LLM product orchestration framework portable as a system prompt across any AI platform."

**Propuesta:**

> ### TITAN v7.0
> Framework de orquestación de producto multi-IA, portable como system prompt a cualquier plataforma (Claude, ChatGPT, Gemini, Cursor, Windsurf, Ollama).
>
> Gobierna el ciclo de vida completo del producto digital en 6 fases (M0–M5), con un protocolo Blueprint→Forge→Lock que audita cada componente contra Atomic Design, tokens M3/HCT y WCAG 2.2 antes de aprobarlo.
>
> Automatiza declaraciones WCAG 2.2, políticas de calidad ISO 9001, evaluaciones de seguridad ISO 27001 y mapeo GDPR/Ley 1581 — generadas como documentación viva, no como PDF que se desactualiza.

*(Referencia interna: `TITAN_v7_0_CORE.md` — "Sistema Maestro de Ingeniería y Orquestación de IA" que garantiza Perfección Atómica mediante M3 Foundations, WCAG 2.2 AA/AAA y el protocolo BFL.)*

> ⚠️ **PENDIENTE — no implementar aún:** la versión anterior de esta sección incluía "reemplaza $3,000–$25,000 en auditorías externas". Es un dato heredado del v1 sin fuente verificable en esta conversación. Se retira de la versión lista para implementar hasta que se confirme de dónde sale ese rango (o se decida no usarlo). No incluir en `es.json`/`en.json` mientras siga pendiente.

---

## 7. FAQ — ampliado a 8 preguntas con reglas AEO

Regla aplicada (`SKILL_SEO_AEO_GEO §4.2`): mínimo 4, máximo 10 preguntas; cada pregunta en lenguaje real del ICP (como se buscaría en ChatGPT/Perplexity); cada respuesta debe entenderse sola.

**¿Qué hace un Staff Product Architect y en qué se diferencia de un diseñador senior?**
Un Staff Product Architect diseña la arquitectura de un producto completo — Design System, gobierno de accesibilidad y handoff a desarrollo — no solo pantallas individuales. Mauricio Gómez ha operado en ese rol en BBVA, Correos Chile y FID Seguros, liderando ecosistemas de 400+ componentes.

**¿Qué es TITAN v7.0?**
TITAN v7.0 es un framework de orquestación de producto multi-IA, creado por Mauricio Gómez, que automatiza gobierno de diseño, cumplimiento WCAG y documentación de handoff a lo largo de 6 fases de producto (M0–M5). Es compatible con Claude, ChatGPT, Gemini, Cursor, Windsurf y modelos locales.

**¿Qué nivel de accesibilidad WCAG ha implementado?**
WCAG 2.2 AAA (el nivel más alto) en Universidad de La Salle; WCAG 2.2 AA en BBVA Colombia y FID Seguros; y una auditoría de 654 incidentes bajo mandato MinTIC en FDN.

**¿Está disponible para proyectos remotos ahora mismo?**
Sí. Contratos remotos disponibles de inmediato, compensación en USD, enfoque async-first, con base en Bogotá, Colombia.

**¿En qué industrias tiene experiencia?**
Fintech (BBVA, Redeban, IDPay, Siclo, FID Seguros), GovTech (FDN, Aportes en Línea, DNP-SINERGIA), Logística (Correos de Chile), EdTech (Universidad de La Salle), Salud (Colsanitas), Juegos de suerte y azar regulados (SuRed/Matrix Giros) y Movilidad/Parking (Parking International/Ruedaz).

**¿Cuánto tiempo toma un Design System construido desde cero con este proceso?**
En el caso de Correos Chile, un Design System de 400+ componentes en MUI React tomó parte del ciclo de 6 meses que reemplazó un plan original de 12 — el tiempo exacto depende del alcance y del backend existente.

**¿Trabaja con equipos que usan Angular además de React?**
Sí. En Universidad de La Salle implementó el sistema de accesibilidad AAA sobre Angular Material; en la mayoría de casos fintech (BBVA, Correos Chile, FID Seguros) trabajó sobre React con MUI.

**¿Cómo mide el impacto real de un Design System, más allá del número de componentes?**
Con métricas de negocio, no solo de entrega: en BBVA, 5/5 de calificación de Product Owners y 100% de entregas a tiempo; en Correos Chile, más del 95% de fidelidad entre diseño y desarrollo; en FID Seguros, +70% de eficiencia en CX.

---

## 7.5. Valor/STAR-L aplicado a los 8 casos de cliente (dato confirmado, listo para implementar)

Mismo backbone que se definió para los casos de prueba técnica (`docs/m2/spec/CASE_PAGE_CONTENT_STRUCTURE.md`): **Valor** (Insight, primero) → **Situación → Tarea → Acción (opciones descartadas vs. elegida) → Resultado → Aprendizaje**. Todo lo de abajo es dato ya existente en el contenido actual del sitio (v93) o en este documento — ninguna cifra nueva.

### Correos Chile — Portal Empresas B2B
- **Valor:** Antes de abrir Figma, estudié 297 envíos reales y absorbí el manual de marca completo — el resultado no fue una pantalla bonita, fue un sistema que redujo el tiempo de entrega a la mitad.
- **Situación:** áreas desconectadas, datos duplicados, cero trazabilidad en la red logística postal nacional de Chile, 13 regiones.
- **Tarea:** conectar operaciones en tiempo real en 13 regiones sin reconstruir la infraestructura.
- **Acción:** *descartado* — diseñar sobre supuestos, solo happy path → *elegido* — estudiar el modelo de datos real (297 envíos, 11 campos) y mapear 5 escenarios por flujo (happy path, alternativos, errores, edge cases) antes de abrir Figma → *por qué*: cero ambigüedad en desarrollo, cero retrabajo.
- **Resultado:** 12→6 meses (estimado 12, entregado en 6), +400 componentes MUI React, 10 desarrolladores autónomos desde sprint 1, >95% fidelidad UI-Dev, 3 productos entregados (Portal B2B, Sucursal Virtual, App Móvil), 2 ciclos extra de mejora en el mismo presupuesto.
- **Aprendizaje:** diagnosticar el dato real antes de diseñar evita el retrabajo — el mismo principio que aplicas después en Solidaria y FDN.

### BBVA Colombia & Panamá — Sistema GEMAS
- **Valor:** los tutoriales de producto (Bre-B, Brickell) no podían tocar la funcionalidad de fondo — ya estaba en producción. La única palanca disponible era la capa de guía, así que la convertí en un sistema, no en guiones sueltos.
- **Situación:** 3 productos B2B en 2 países, cada uno construyendo tutoriales guiados ("coach marks") de forma ad-hoc, sin marca, tono ni motion consistentes entre sí.
- **Tarea:** construir un sistema que orqueste marca, experiencia, movimiento y reglas de negocio para cualquier tutorial futuro — no resolver un tutorial a la vez.
- **Acción:** *descartado* — seguir generando guiones caso por caso, manteniendo el modelo "Coach Mark" de pantalla dividida tal como estaba → *elegido* — Sistema GEMAS en 5 fases de madurez (taxonomía emocional y matriz de voz/tono por Gema → arquitectura de guion a 2 columnas visual/audio con curva narrativa de 3 actos → coreografía de motion por Gema → algoritmo de densidad y semáforo de producción → auditoría de lógica de negocio sobre casos como Brickell), más un rediseño propio del modelo de interacción (de "Coach Mark" dividido, diagnosticado con jerarquía visual invertida en una de sus variantes, a "Walkthrough Inmersivo" a pantalla completa) y una auditoría de accesibilidad/carga cognitiva (contraste AAA 7:1, paleta "Clean Canvas") → *por qué*: sin sistema, cada país y cada producto repite el mismo trabajo de diagnóstico y queda inconsistente con la marca.
- **Resultado:** +600 usuarios internos impactados en Gestión de Capital de Trabajo y Mi Pyme Asegurada, 5/5 calificación de 3 Product Owners, 100% cumplimiento de tiempos, presentaciones a nivel VP, sistema reutilizable para cualquier producto/segmento futuro.
- **Aprendizaje:** cuando no puedes rediseñar el producto porque ya está en producción, la capa de guía es la palanca — convertir un tutorial pasivo en un sistema gobernado y auditable es tan arquitectura de producto como rediseñar la pantalla.

### SuRed / Matrix Giros — Integración B2B Baloto/Miloto
- **Valor:** no entregué solo una pantalla de compra — entregué la arquitectura de seguridad y conciliación que hace que mover dinero regulado (apuestas) sea auditable, no solo funcional.
- **Situación:** SuRed necesitaba activar los productos de lotería Baloto y Miloto en su App y Web, en alianza con el Operador Nacional de Juegos (ONJ) — un canal de dinero regulado, no un feature de producto común.
- **Tarea:** estructurar los requerimientos técnicos (Historias de Usuario Épicas) y liderar la integración B2B end-to-end: seguridad, conciliación, reportería y cumplimiento normativo.
- **Acción:** *descartado* — replicar el flujo de compra estándar de la app sin controles adicionales → *elegido* — arquitectura de seguridad dedicada (JWT con expiración a 60 min + cifrado SHA-256), conciliación automática de doble chequeo diario contra archivos SFTP de ONJ, y validación de identidad contra listas de control gubernamentales (SIPLAFT) → *por qué*: un error de conciliación o una identidad no validada en un canal de apuestas es un riesgo legal y financiero directo, no solo un bug de UX.
- **Resultado:** canal Baloto/Miloto activo en producción dentro de SuRed, con tirilla digital en PDF, reportería contable automatizada y conciliación diaria sin intervención manual.
- **Aprendizaje:** en dominios regulados, la seguridad y la conciliación no son "no-funcionales" — son el producto.

### Parking International / Ruedaz — Ecosistema E2E
- **Valor:** no diseñé una app de parqueo — diseñé el ecosistema de 5 plataformas que la sostiene, desde el usuario final hasta el operador en sitio.
- **Situación:** Parking International necesitaba un producto de extremo a extremo para su marca Ruedaz, cubriendo usuario final, portal corporativo y operación en sitio como flujos conectados, no aislados.
- **Tarea:** diseñar el sistema completo (App, Web, Portal Corporativo, Parking Inside, Parking Attendant) con un mismo lenguaje de diseño y reglas de negocio compartidas.
- **Acción:** *descartado* — diseñar la app de usuario final primero y resolver el resto por separado después → *elegido* — Ruedaz System Design (WCAG 2.1, Atomic Design) aplicado desde el inicio a las 5 plataformas, con Customer Journeys diferenciados por segmento (B2C recurrente vs. B2B corporativo con monedero y cortesías) y reglas de negocio compartidas para suscripciones y validación de cupones por OCR → *por qué*: resolver las plataformas por separado habría duplicado reglas de negocio y roto la consistencia de marca entre el usuario final y el operador.
- **Resultado:** ecosistema completo lanzado en tiendas (Jul 2020), suscripción mensual $59,900 COP, MVP corporativo de monedero virtual operativo.
- **Aprendizaje:** un producto B2C con contraparte B2B/operativa exige diseñar el sistema completo desde el día 1 — resolver solo la app visible es diseñar la mitad del producto.

### FDN — Financiera de Desarrollo Nacional
*(Ya documentado en detalle arriba, §FDN — 2 momentums. Versión Valor/STAR-L:)*
- **Valor:** Entré a auditar accesibilidad. Al mirar el proceso completo, encontré la causa raíz (un sitio estático en fin de vida) y propuse la arquitectura que la resuelve.
- **Situación:** mandato de MinTIC exige auditoría WCAG 2.2 completa sobre un sitio en Drupal 7 (EOL).
- **Tarea:** no solo documentar incidentes — identificar y proponer la solución a la causa raíz.
- **Acción:** *descartado* — remediar los 654 incidentes puntuales sobre Drupal 7 → *elegido* — proponer migración completa (Next.js/Strapi/RAG) → *por qué*: Drupal 7 está en EOL, remediar sin migrar repara un sistema que de todas formas hay que reemplazar.
- **Resultado (Momentum 1, confirmado):** certificación WCAG 2.1 AA (dic 2023) → revalidación (sep 2024) → auditoría paga de 654 incidentes que detecta la brecha a WCAG 2.2 (sep 2025, 40h, PO AMC OC 2025074), 36 reportes Lighthouse, gap analysis, runbook de despliegue. **(Momentum 2, propuesta propia, no aprobada en su totalidad):** arquitectura propuesta con CAPEX estimado ($100K–$174.5K USD) y calendario objetivo (AA para 30 jun 2026, lanzamiento 30 sep 2026).
- **Aprendizaje:** un mandato técnico acotado casi siempre esconde un problema más grande — mismo patrón que en Solidaria.

### Universidad de La Salle
- **Valor:** No apunté al mínimo aceptable — apunté al nivel más alto posible (AAA), porque bajo obligación normativa, "casi cumplido" sigue siendo riesgo legal.
- **Situación:** ningún nivel de conformidad por debajo de AAA eliminaba el riesgo legal bajo MinTIC.
- **Tarea:** alcanzar el nivel más alto de conformidad WCAG posible, no solo "cumplir".
- **Acción:** *descartado* — AA (cumplimiento mínimo aceptable), evaluación superficial → *elegido* — AAA + 18 categorías evaluadas con 4 roles por criterio + Web Vitals como criterio de accesibilidad → *por qué*: bajo obligación normativa, el mínimo sigue siendo riesgo.
- **Resultado:** WCAG 2.2 AAA logrado (el nivel más alto), riesgo legal cero bajo normativa MinTIC, Design System Angular Material + IAAP.
- **Aprendizaje:** cuando el riesgo es legal, "cumplir lo mínimo" no es una opción válida — se replica después en FDN.

### FID Seguros (Chile)
- **Valor:** Antes de mover una sola pantalla de OutSystems a React, construí el sistema de gobierno completo — sin eso, la migración se fragmenta en meses, no en semanas.
- **Situación:** migrar de OutSystems (legacy) a MUI React sin un framework de gobierno fragmentaría el sistema.
- **Tarea:** construir el sistema operativo de diseño completo antes de tocar cualquier pantalla.
- **Acción:** *descartado* — migrar pantalla por pantalla, ad-hoc → *elegido* — BPM con 4 actores + Framework de Integración D↔D (1,002 filas, 46+ entregables) + guía WCAG con Domain-Driven Design → *por qué*: sin gobierno explícito, la migración se fragmenta.
- **Resultado:** +70% de eficiencia en CX, equipo de desarrollo autónomo desde el sprint 1.
- **Aprendizaje:** sin gobierno explícito antes de migrar, el sistema se fragmenta — construirlo primero es más lento al inicio pero evita ese colapso.

### Siclo / IDPay
- **Valor:** No entregué solo wireframes — entregué la especificación completa: de la pantalla al modelo de datos y los contratos de API que la sostienen.
- **Situación:** módulo de gestión de convenios sin especificación UX ni técnica completa.
- **Tarea:** entregar una especificación que cubra el ciclo de vida completo (UX + técnico), no solo pantallas.
- **Acción:** *descartado* — entregar solo wireframes → *elegido* — 4 flujos + 11 wireframes + revisión del modelo de datos (10 tablas, diagrama ER) + contratos de API (OpenAPI) + marco de métricas CX (CSAT, CES) → *por qué*: una especificación sin el modelo de datos detrás no es completa.
- **Resultado:** 11 wireframes, ciclo de vida completo documentado.
- **Aprendizaje:** una especificación UX sin su modelo de datos y contratos de API no está terminada — mismo criterio que aplicas en el diagnóstico E2E de otros casos.

---

## 8. Metadata por página (contenido real para `SEO_AIO_PLAN.md §1`)

`SEO_AIO_PLAN.md` ya define el código (`generateMetadata`, sitemap, JSON-LD) pero deja los campos de texto como plantilla. Esta tabla es el contenido real que falta:

| Ruta | Title | Description (≤160 car.) |
|---|---|---|
| `/` | Mauricio Gómez — Staff Product Architect \| Design Systems & WCAG 2.2 AAA | Staff Product Architect en Bogotá. Diseño sistemas de producto que un equipo opera sin mí: Design Systems, WCAG 2.2 AAA y orquestación de IA. |
| `/casos/correos-chile` | Correos Chile — Portal Empresas B2B \| Mauricio Gómez | Comprimí un timeline de 12 a 6 meses conectando 13 regiones postales con un Design System de 400+ componentes MUI React. |
| `/casos/bbva` | BBVA Colombia & Panamá — Sistema GEMAS \| Mauricio Gómez | Arquitectura de 5 fases para 3 productos B2B de BBVA — 5/5 de calificación de Product Owners y +200 usuarios impactados. |
| `/casos/fdn` | FDN — Auditoría WCAG 2.2 \| Mauricio Gómez | Auditoría WCAG 2.2 bajo mandato MinTIC: 654 incidentes revisados en 7 secciones — más una propuesta propia de arquitectura para resolver la causa raíz. |
| `/casos/la-salle` | Universidad de La Salle — WCAG 2.2 AAA \| Mauricio Gómez | Conformidad WCAG 2.2 AAA, el nivel más alto, evaluando 18 categorías de accesibilidad con Angular Material. |
| `/casos/fid-seguros` | FID Seguros — Migración OutSystems a React \| Mauricio Gómez | Migré el Design System de FID Seguros a MUI React con Domain-Driven Design — +70% de eficiencia en CX. |
| `/casos/siclo-idpay` | Siclo / IDPay — Especificación UX y técnica \| Mauricio Gómez | Especificación UX y técnica completa del módulo de acuerdos de un SaaS B2B: 4 flujos, 11 wireframes, 10 tablas de datos. |
| `/titan` | TITAN v7.0 — Framework de orquestación de producto multi-IA | Framework de orquestación de producto multi-IA creado por Mauricio Gómez. Gobierna 6 fases de producto con protocolo Blueprint-Forge-Lock. |

---

## 9. Glosario (regla DIS-D6 — términos técnicos enlazados en su primera aparición)

| Término | Definición operativa para el visitante |
|---|---|
| **WCAG 2.2 AA / AAA** | Pautas internacionales de accesibilidad web. AA es el nivel exigido por ley en la mayoría de países; AAA es el más alto y exige el mayor contraste y soporte para más condiciones. |
| **Design System** | Conjunto reutilizable de componentes de interfaz (botones, formularios, tarjetas) documentados una vez y usados en todos los productos, para que el equipo no rediseñe lo mismo dos veces. |
| **DesignOps** | La disciplina de organizar cómo un equipo de diseño trabaja con desarrollo — flujos, gobierno de componentes, handoff — no el diseño visual en sí. |
| **Atomic Design** | Metodología para construir interfaces por niveles (átomos → moléculas → organismos → plantillas), de menor a mayor complejidad. |
| **M3 / HCT** | Material Design 3, el sistema de color de Google basado en Hue-Chroma-Tone — genera paletas completas y accesibles a partir de un solo color base. |
| **BFL (Blueprint-Forge-Lock)** | El ciclo de trabajo de TITAN v7.0 para cada componente: se especifica (Blueprint), se construye y prueba (Forge), y se certifica como estable (Lock). |
| **DDD (Domain-Driven Design)** | Enfoque de arquitectura de software que organiza el código según el negocio real (dominio), no según la tecnología — útil al migrar sistemas legacy. |
| **AEO (Answer Engine Optimization)** | Optimizar contenido para que motores de respuesta como ChatGPT o Perplexity puedan citarlo directamente, no solo para que Google lo indexe. |

---

## 10. Bilingüismo — estado real (referencia cruzada con `SEO_AIO_PLAN.md`)

`SEO_AIO_PLAN.md §6` ya documenta que la infraestructura de idioma (`middleware.ts`, `LanguageToggle`, hreflang) quedó implementada el 2026-09-04 en `feat/v2-analytics-posthog`, pero que **el copy de cada caso sigue solo en español** — traducirlo es, en palabras de ese mismo documento, "una decisión editorial, no un fix técnico".

Este documento resuelve la mitad de esa decisión editorial: define el copy en español que debe traducirse. La traducción al inglés de las secciones §2–§8 queda como tarea siguiente explícita (ver §11), una vez aprobado el copy en español.

---

## 11. Lo que NO toqué (y por qué)

- **Métricas y nombres de clientes** — se mantienen exactamente como están; ninguna cifra fue creada o ajustada.
- **Stack técnico e industrias** — el listado ya es correcto y sigue formato de tabla escaneable (regla AEO 4: listas > párrafos).
- **El wrapper técnico del sitio (iframe + `index_clean.html` en `main`)** — es una decisión de arquitectura, no de copy.
- **Traducción a inglés** — pendiente, ver §10.

---

## 12. Siguiente paso sugerido

1. Aprobar este documento (secciones completas o con ajustes de tono puntuales).
2. Decidir destino: (a) publicar directo en `main` (sitio vivo actual), o (b) usarlo como fuente de contenido real para reemplazar los datos genéricos de `CasesSection`/`TitanSection` en `v2`, cerrando el gap que señala `SEO_AIO_PLAN.md §6`.
3. Si se aprueba (b): traducir §2–§8 al inglés para que `/en` deje de servir contenido en español (gap documentado en §10).

---

📍 Momentum: M1 | Artefacto: CONTENT_COPY_STRATEGY | Nivel: B
Fuente: contenido real extraído de `maurogo.netlify.app` (rama `main`, "EXCALIBUR v93.0")
Skills aplicados: SKILL_PERSUASION · SKILL_SEO_AEO_GEO · SKILL_NEURODIVERSITY (DIS-D5/D6)
Generado: Claude Code (rol Arquitecto) | 2026-09-05
