# EXPERIENCIA PROFESIONAL — PORTAFOLIO
# Leonel Mauricio Gómez Ocampo · Staff Product Architect
# Fuente: SSOT v2 | Procesado con TITAN_TONE_ORCHESTRATOR.md
# Versión: 1.0 | Junio 2026
#
# ESTRUCTURA DE CADA ENTRADA:
#   base:       texto técnico exacto (fuente de verdad interna)
#   cliente:    resultado primero, sin jerga, confianza rápida
#   reclutador: decisión + alcance + verbo de liderazgo
#   comunidad:  profundidad técnica + trade-offs honestos
#   normal:     accesible para cualquier persona, sin contexto previo
#
# audience_tag: cliente | reclutador | comunidad | normal | todos
# ─────────────────────────────────────────────────────────────────

---

## BIO PROFESIONAL

```yaml
audience_tag: todos
```

### base
Staff Product Architect con más de 10 años construyendo productos digitales
en sectores financiero, educativo, salud, logística y gobierno en Colombia,
Chile y Panamá. Creador de TITAN v7.0 — sistema de orquestación de IA
para ingeniería de producto con gobernanza, trazabilidad y calidad verificable.

### cliente
Diseño y construyo productos digitales que funcionan antes de que los veas —
con procesos que garantizan accesibilidad, seguridad y calidad desde el primer
sprint, no como auditoría al final. He trabajado con BBVA, FDN, Ecopetrol,
Colsanitas y más de 20 organizaciones en Colombia y LATAM.

### reclutador
Staff Product Architect con más de 10 años liderando el diseño y construcción
de productos digitales de alta complejidad en sectores regulados (fintech,
banca, salud, gobierno). Creé TITAN v7.0, un sistema de ingeniería con
orquestación multi-modelo que el equipo opera sin depender de mí.

### comunidad
10+ años construyendo en la intersección de producto, diseño de sistemas
y arquitectura de IA. Creador de TITAN v7.0: BPM M0→M5, Consejo BFL de
5 modelos con Blind Review, Zero Hallucination en 5 capas y Propagation
Protocol automático. Stack actual: Next.js 15, Strapi v5, Supabase,
Claude Sonnet 4.6, n8n, Vercel.

### normal
Llevo más de 10 años ayudando a empresas a construir productos digitales
que realmente funcionan — apps, portales, sistemas internos. Trabajo con
equipos de tecnología y diseño para que lo que construyen sea útil,
accesible y seguro.

---

## BBVA (2025 — 2026)

```yaml
audience_tag: cliente, reclutador, comunidad
sector: Banca · Fintech
rol: Staff UX/Product Architect
```

### base
- Auditoría estructural y diagnóstico UX/UI del modelo "Coach Mark" (pantalla dividida), resolviendo deficiencias en jerarquía visual y carga cognitiva.
- Diseño de ecosistema transnacional con flujos de interoperabilidad bancaria para la Sucursal Panamá (Proyecto Brickell): clientes gestionan cuentas multidivisa (USD) desde App GloMo y Senda.
- Estandarización de canales digitales mediante guías operativas de UX para el Módulo de Contratación (onboarding de cuentas, tarjetas y préstamos).
- Gobernanza de Comunicaciones No Comerciales (CNC) con modelo Radical Customer Perspective (RCP).
- Digitalización del 100% de contratación Pyme Inbound: Capital de Trabajo, seguros Mi Pyme Asegurada, firma electrónica y emisión en Acsel Web.
- Integración WCAG 2.1/2.2 AAA sobre lienzos "Clean Canvas" para reducción de fatiga visual.
- Automatización de guiones y documentación mediante Gemini Gems y Prompt Engineering: reducción del 60% en ciclos de creación de contenido.
- Diseño de protocolos para la red de transferencias inmediatas Bre-B mediante llaves del Banco de la República.
- Metodologías: Sistema GEMAS, Walkthrough Inmersivo, Content Framing, Scrum, SAFe.

### cliente
En BBVA diseñé el flujo que permite a clientes colombianos manejar cuentas
en dólares desde la misma app que usan para sus operaciones locales — sin
cambiar de canal, sin fricción. También digitalicé el 100% del proceso de
contratación para Pymes: lo que antes requería presencia física ahora se
completa con firma electrónica. El tiempo de creación de contenido operativo
bajó un 60% con automatización de prompts y Gemini.

### reclutador
Lideré el diseño de interoperabilidad bancaria transnacional para el
Proyecto Brickell (Panamá), integrando flujos multidivisa en los canales
digitales existentes sin interrumpir operaciones. Establecí el modelo de
gobernanza de comunicaciones no comerciales con enfoque RCP para toda la
unidad de canales digitales. Implementé automatización de producción de
contenido con Prompt Engineering que redujo los ciclos de creación en un
60%, liberando capacidad del equipo para trabajo de mayor valor.

### comunidad
Proyecto técnico más interesante de este período: el diseño de interoperabilidad
para Bre-B (red de transferencias inmediatas del Banco de la República).
Modelado de llaves de identificación, flujos de conciliación en tiempo real
y estados de transacción bajo la arquitectura de mensajería del BR.
WCAG 2.1/2.2 AAA implementado sobre "Clean Canvas" — no como capa adicional
sino como constraint de diseño desde el inicio. SAFe como marco de escalado
en un equipo distribuido Colombia-Panamá.

---

## FDN — ActivaMC · Proyecto de Modernización (2026)

```yaml
audience_tag: cliente, reclutador, comunidad
sector: Gobierno · GovTech
rol: Staff Product Architect · Tech Lead
```

### base
- Reestructuración integral del portal institucional (estrategia Brownfield): reemplazo de sistema Drupal 7 en riesgo crítico.
- Stack TITAN v5.0: Next.js 14 en Vercel + Strapi v5 (CMS Headless) + PostgreSQL 16 con pgvector.
- Cloudflare: WAF, administración DNS, almacenamiento R2.
- Integración API Claude para motor RAG (Retrieval-Augmented Generation).
- CI/CD en GitHub Actions con 7 jobs automatizados + axe-core que bloquea deploy ante fallos de accesibilidad.
- Diagnóstico legacy: LCP de 25.2s, TTFB >1.5s, fallas ARIA/aria-labelledby.
- Runbook de 7 fases: Design Tokens M3, cambio de apuntamiento DNS.
- Metodologías: Brownfield Strategy, Material Design 3, Atomic Design, Scrum, SAFe, Dual-Track Agile.

### cliente
El portal de la FDN estaba sobre Drupal 7 — una plataforma que dejó de
tener soporte en 2023, con tiempos de carga de 25 segundos y fallas
críticas de accesibilidad. Lo reconstruimos desde cero sin interrumpir
la operación, con un motor de inteligencia artificial que permite a los
usuarios encontrar información institucional de forma conversacional.
El pipeline de entrega no permite hacer deploy si hay un error de
accesibilidad — es una regla del sistema, no una promesa.

### reclutador
Lideré la migración Brownfield de infraestructura crítica de gobierno:
Drupal 7 EOL → Next.js 14 + Strapi v5 + PostgreSQL 16. Diseñé e
implementé el pipeline CI/CD con 7 jobs, incluyendo gate de accesibilidad
con axe-core que bloquea el deploy automáticamente ante fallas. Integré
un motor RAG con la API de Claude para búsqueda semántica institucional.
El proyecto pasó de LCP 25.2s a bajo 2.5s en producción.

### comunidad
Stack completo: Next.js 14 (App Router) + Strapi v5 headless + PostgreSQL 16
con pgvector para embeddings + Cloudflare WAF + R2 storage.
CI/CD en GitHub Actions — 7 jobs: lint → type-check → test → axe-core
accessibility gate → build → staging → prod. El job de accesibilidad es
bloqueante: falla axe-core = no hay deploy, sin override manual.
Motor RAG: Claude API + pgvector para búsqueda semántica sobre el corpus
institucional. Diagnóstico inicial: LCP 25.2s (crítico), TTFB >1.5s,
múltiples fallas aria-labelledby en componentes de navegación.

---

## FDN — ActivaMC · Auditoría Digital (2025)

```yaml
audience_tag: reclutador, comunidad
sector: Gobierno · GovTech
rol: Auditor Técnico Digital
```

### base
- Auditoría Transversal de Calidad Digital con recolección automática vía Google Search Console y Lighthouse/LCP.
- Auditoría normativa WCAG 2.1/2.2 y Resolución 1519 MinTIC con lectores de pantalla y navegación por teclado.
- Gap Analysis y matriz de remediación priorizada (Alta/Media/Baja).
- Fallas críticas: contraste 1.4.3, navegación teclado 2.1.1, atributos ARIA 4.1.2, identificación de errores 3.3.1.
- LCP >2.5s en 85 URLs escritorio y 80 URLs móvil.
- SEO: 49,646 enlaces entrantes desde 175 dominios.
- Seguridad: certificado SSL auto-firmado (MOZILLA_PKIX_ERROR_SELF_SIGNED_CERT) bloqueando accesos.

### reclutador
Ejecuté la auditoría técnica completa del portal institucional de la FDN:
accesibilidad (WCAG 2.1/2.2 + Resolución 1519 MinTIC), rendimiento (LCP,
TTFB, Core Web Vitals en 165 URLs), SEO estructural y seguridad. Entregué
un Gap Analysis con matriz de remediación priorizada — este diagnóstico
fue la base técnica que justificó la decisión de reconstruir el sistema
en lugar de parcharlo. El hallazgo de seguridad (certificado SSL
auto-firmado bloqueando accesos) era un riesgo crítico no documentado.

### comunidad
Metodología de auditoría en 4 capas: (1) Lighthouse automatizado sobre
165 URLs, (2) revisión manual WCAG criterio por criterio con lector de
pantalla NVDA, (3) análisis de estructura SEO con Screaming Frog,
(4) revisión de seguridad HTTP headers. Hallazgo más crítico: aria-labelledby
referenciando IDs inexistentes en menús de navegación — falla de WCAG 4.1.2
que rompe la experiencia completa con tecnología asistiva. LCP promedio:
25.2s escritorio, peor caso 38s móvil.

---

## SI-CLO Convenios (2025)

```yaml
audience_tag: reclutador, comunidad
sector: Fintech · Crédito por Libranza
rol: Product Architect · UX/UI Lead
```

### base
- Estandarización de originación de crédito por Libranza: migración de matrices manuales en Excel a plataforma automatizada.
- Modelo de datos "Tabla Única" para administración de maestros de organizaciones (Clientes y Entidades, NIT único).
- Wizard de Creación de Convenios en 6 pasos: Información General, Renovación, Responsables, Tipos de Contrato, Rubros y Documentos.
- Ciclo de vida con estados condicionales: Borrador, Pendiente, Activo, Vencido/Inactivo.
- Automatización de reglas de negocio por segmento: Pensionados, Docentes, Fuerzas Militares.
- Flujos de visación por pagaduría y cálculo de capacidad de crédito bajo Ley 1527.
- Job Diario de detección de vencimientos y notificaciones de renovación.

### reclutador
Diseñé y especifiqué la migración de un proceso crítico de negocio —
originación de crédito por libranza — desde matrices manuales en Excel
hacia una plataforma automatizada. Modelé el sistema de datos, el ciclo
de vida de convenios con estados condicionales, las reglas de negocio por
segmento regulado (Ley 1527) y el Job Diario de vencimientos. El resultado
fue un proceso que antes requería intervención humana constante y que ahora
opera con automatización de reglas y notificaciones.

### comunidad
Decisión técnica más interesante: el modelo "Tabla Única" para maestros
de organizaciones. La alternativa (tabla separada por tipo de entidad)
habría requerido joins complejos en cada consulta del wizard. Con tabla
única + campo discriminador + validación de NIT único a nivel de constraint
de base de datos, las consultas del wizard son simples y la integridad está
garantizada por el motor, no por la lógica de aplicación. Los 6 pasos del
wizard mapean exactamente a las 6 entidades relacionadas en el modelo de datos.

---

## FID Seguros Chile (2024)

```yaml
audience_tag: reclutador, comunidad
sector: Seguros · Fintech
rol: Product Architect · Business Analyst
```

### base
- Gestión técnica del ciclo de inspección y suscripción: domicilio, asistida, autoinspección por video.
- Procesamiento de facturas, cuadre de cierres mensuales y auditoría de cargas masivas para control de errores de pólizas.
- Análisis funcional Épica 6: búsqueda histórica de siniestros y recaudaciones para perfiles Broker y Backoffice.
- Modelado de ofertas económicas: vehículos livianos y pesados, vigencias, comisiones, deducibles inteligentes, PAC/PAT.
- Procedimientos para liquidación de siniestros y peritaje bajo regulación CMF (Comisión para el Mercado Financiero de Chile).
- Auditorías técnicas de rendimiento frontend y accesibilidad con Lighthouse.
- Metodologías: Scrum, Design Sprint, Auditoría Arquitectónica en 3 Capas.

### reclutador
Lideré el análisis funcional y diseño técnico de los flujos más complejos
del sistema de seguros: ciclo de inspección en 3 modalidades, modelo de
suscripción con deducibles inteligentes y condiciones particulares, y
liquidación de siniestros bajo regulación CMF. Trabajé directamente con
el regulador chileno como restricción de diseño, no como capa de cumplimiento.

### comunidad
El caso más técnicamente denso fue el modelado de deducibles inteligentes
para pólizas de vehículos: el deducible varía según la antigüedad del
vehículo, el tipo (liviano/pesado), la modalidad de pago (PAC/PAT) y el
perfil del asegurado. El modelo resultante tiene 4 dimensiones de variación
que el sistema calcula en tiempo real durante la cotización. La auditoría
en 3 capas (funcional, técnica, regulatoria) es la metodología que uso
cuando el dominio tiene compliance externo no negociable.

---

## Universidad de La Salle — Nivelics (2024)

```yaml
audience_tag: cliente, reclutador, comunidad
sector: EdTech · Educación Superior
rol: Staff Product Architect · Full-Stack Lead
```

### base
- UX: User Journeys, site maps y wireframes de baja fidelidad.
- UI: Design System en Figma con Variables, Tokens y Storybook.
- Arquitectura de datos para integración nativa con Clientify y Gruplac.
- Accesibilidad WCAG 2.2 AA/AAA: ARC Toolkit, axe DevTools, lectores de pantalla.
- IA: Prompt Engineering, Multi-LLM, flujos n8n.
- Stack: React/MUI, Next.js 14, Strapi v5, Angular Material.
- Analytics: GA4, Amplitude, Hotjar, SQL.
- Metodologías: Agile, Lean, Atomic Design, DDD, Accesibilidad Progresiva en 3 capas.

### cliente
Para Nivelics (Universidad de La Salle) construimos un producto educativo
que integra inteligencia artificial multi-modelo con un sistema de diseño
accesible verificado con lectores de pantalla reales. El producto cumple
WCAG 2.2 en nivel AAA — el más exigente — lo que significa que cualquier
persona puede usarlo, incluyendo quienes dependen de tecnología asistiva.

### reclutador
Lideré el diseño e implementación end-to-end de un producto EdTech:
desde el Design System en Figma con tokens y Storybook, hasta la
orquestación de flujos Multi-LLM con n8n. Establecí la arquitectura
de datos para integración con Clientify y Gruplac, y certifiqué
accesibilidad WCAG 2.2 AAA con herramientas automatizadas y pruebas
manuales con lectores de pantalla. Stack: Next.js 14 + Strapi v5 +
React/MUI + Angular Material.

### comunidad
Lo más interesante de este proyecto: la estrategia de Accesibilidad
Progresiva en 3 capas. Capa 1: semántica HTML correcta (sin ARIA donde
el HTML nativo lo resuelve). Capa 2: ARIA donde el HTML no alcanza
(componentes custom). Capa 3: testing con lector de pantalla real
(NVDA + Firefox, VoiceOver + Safari). La mayoría de los proyectos
hace la capa 1 y llama "accesible" al resultado. Las capas 2 y 3
son donde está la diferencia real.

---

## SuRed (2024)

```yaml
audience_tag: reclutador, comunidad
sector: Gaming · Fintech · B2B
rol: Product Architect · Integration Lead
```

### base
- Integración B2B transaccional: productos Baloto y Miloto en canales Matrix Giros y Servicios.
- Historias de Usuario Épicas: geolocalización, reportería contable, tirillas digitales PDF.
- Servicios REST para sorteos, apuestas, informes y pagos con ONJ (Operador Nacional de Juegos).
- Seguridad: JWT con expiración 60 min, SHA-256, SFTP/SSH, PCI-DSS.
- Validación de identidad contra servicios gubernamentales bajo SIPLAFT y Habeas Data.
- Conciliación automática diaria de doble chequeo de transacciones.
- Reportería con JasperReports (.jrxml).

### reclutador
Lideré la especificación técnica e integración B2B entre SuRed y el
Operador Nacional de Juegos: servicios REST para procesamiento de
apuestas, sorteos y pagos en tiempo real, con arquitectura de seguridad
PCI-DSS (JWT + SHA-256 + SFTP/SSH). Diseñé el proceso de conciliación
automática de doble chequeo que detecta discrepancias transaccionales
diariamente sin intervención humana.

### comunidad
El constraint más interesante de este proyecto fue PCI-DSS + SIPLAFT
como restricciones simultáneas. PCI-DSS obliga a cifrar credenciales
y usar protocolos seguros. SIPLAFT (sistema contra lavado de activos)
obliga a validar identidad contra registros gubernamentales en cada
transacción. El diseño de la arquitectura de seguridad tuvo que satisfacer
ambos simultáneamente: JWT de 60 min (PCI), consulta SIPLAFT asíncrona
con timeout de 3s para no degradar la experiencia del sorteo (UX),
log inmutable de cada validación (auditoría).

---

## Correos Chile (2023)

```yaml
audience_tag: reclutador, comunidad
sector: Logística · B2B
rol: UX/Product Architect
```

### base
- Onboarding B2B corporativo: formularios Ficha CL-01 para grandes cuentas (Sodimac, Imperial S.A.).
- Procesamiento logístico: ingesta, normalización y validación geográfica por División Político-Administrativa (DPA) de Chile + CIIU.
- Estandarización de trazabilidad, tipología Express y configuraciones de facturación.
- Portal Empresas: autenticación, recuperación de accesos y validaciones OTP con estados condicionales.
- Casos de Uso: agendamiento masivo de retiros e impresión de etiquetas.
- Diseño visual: pantones corporativos CMYK, retículas y fuentes de marca.

### reclutador
Diseñé el Portal Empresas de Correos Chile — el canal B2B para clientes
corporativos como Sodimac e Imperial. El trabajo más complejo fue el sistema
de carga masiva de datos: normalización geográfica automática usando la
División Político-Administrativa oficial de Chile para validar que cada
dirección de envío existe y es operable por la red logística. Sin esta
validación, los envíos masivos llegaban con errores de dirección que
se detectaban solo al momento de la entrega.

### comunidad
El caso técnico más rico: el sistema de validación geográfica para
carga masiva. La DPA de Chile tiene 16 regiones → 56 provincias → 346
comunas. El cliente carga un Excel con miles de direcciones. El sistema
debe validar que cada par (dirección, comuna) es geográficamente
consistente con la DPA oficial, enriquecer con el código CIIU del
remitente y generar el manifiesto logístico. Lo hicimos con una tabla
de lookup normalizada y validación por lotes con reporte de errores
por fila — no rechazar el archivo completo si hay errores parciales.

---

## ADL Digital Labs (2021)

```yaml
audience_tag: cliente, reclutador, comunidad
sector: EdTech · Innovación Educativa
rol: UX Research Lead · Product Designer
```

### base
- Diseño de Ruta de Aprendizaje MVP EdTech: Pre-test, Exploración, Aclaración multimedia, Evaluación y Post-test.
- Flujos de navegación: autenticación, splash video, mapas de progreso, finalización de unidades (Matemáticas, Español, Habilidades Socioemocionales).
- UX Research: talleres de ideación, focus groups, entrevistas 1-a-1 con docentes.
- Arquetipos: Joven curioso, Innovador con experiencia, Cómodo tradicional.
- Validación en campo: prueba piloto 3 días, 46 estudiantes, Colegio Argelia, Unidad de Fracciones.
- Análisis estadístico de ítems de evaluación pre/post test.
- Metodologías: UCD, Lean UX, Prototipado Rápido, Gamificación, Dual Track Agile.

### cliente
Diseñamos una plataforma educativa validada con 46 estudiantes reales
en un colegio de Bogotá antes de iterar. No con encuestas — con prueba
de campo de 3 días, observando cómo los estudiantes interactuaban con
el producto sin que nadie les explicara cómo usarlo. Esa validación
temprana evitó rediseños costosos después del lanzamiento.

### reclutador
Conduje el proceso completo de UX Research para un MVP EdTech:
desde la definición de arquetipos de usuario (3 perfiles de docentes
y estudiantes) hasta la coordinación de una prueba piloto de 3 días
con 46 estudiantes en condiciones reales de aula. Los datos de la
prueba alimentaron directamente el análisis estadístico de calibración
de ítems de evaluación — no fue research decorativo, fue research
que cambió el producto.

### comunidad
La decisión de diseño más difícil: cómo hacer que el feedback de
errores en matemáticas fuera constructivo sin ser condescendiente.
Investigamos mecánicas multisensoriales de retroalimentación en
plataformas de gamificación (Duolingo, Khan Academy, Prodigy) y
diseñamos un sistema propio: el feedback de error tiene 3 capas —
(1) qué salió mal, (2) por qué, (3) un micro-hint sin dar la respuesta.
La validación con los 46 estudiantes mostró que la capa 3 era la
más usada y la que más impactaba el post-test.

---

## Parking y Ruedaz (2021)

```yaml
audience_tag: reclutador, comunidad
sector: Movilidad · B2C · B2B
rol: Staff Product Designer · System Design Lead
```

### base
- Producto end-to-end: App Android/iOS, Web, Portal Corporativo, Parking Inside, Parking Attendant.
- CUJ (Customer User Journey) con MOTs y touchpoints Frontstage/Backstage.
- Ruedaz System Design: principios de navegación, consistencia visual, WCAG 2.1.
- Reglas de negocio: registro, renovaciones de suscripción mensual, validación de cupones con OCR de facturas.
- Comunicación omnicanal: Push, SMS, Email, Pop-ups segmentados por ciclo de vida.
- KPIs de conversión, ROI en UX, MVP Corporativo para monederos y cortesías.
- Metodologías: PLG, UX Research, Design Thinking, Sprint Design, JTBD, Scrum, DesignOps/DevOps, Atomic Design, Material Design.

### reclutador
Diseñé el ecosistema completo de Ruedaz: 5 plataformas (App, Web, Portal
Corporativo, Parking Inside, Parking Attendant) con un solo System Design
que garantiza consistencia visual y de interacción entre todas. Establecí
los KPIs de conversión y calculé el ROI en UX para justificar las
decisiones de diseño ante el negocio. El sistema de comunicación omnicanal
(Push + SMS + Email + Pop-ups) está segmentado por 8 hitos del ciclo de
vida del cliente — no es broadcasting, es comunicación contextual.

### comunidad
El reto técnico más interesante: el sistema de validación de cupones
mediante OCR de facturas. El usuario fotografía su factura de parqueo,
el sistema extrae el valor y aplica el descuento en el monedero. Diseñé
el flujo UX asumiendo que el OCR falla el 20% del veces: el diseño
tiene 3 estados de resultado (éxito, falla recuperable, falla definitiva)
y cada estado tiene una acción clara. El fallback es ingreso manual
con validación de formato — nunca un dead end.

---

## PQEB — ActivaMC (2020)

```yaml
audience_tag: comunidad
sector: Salud Mental · Bienestar
rol: QA Engineer · UX Designer
```

### base
- QA e ingeniería: revisión estructural y funcional de componentes core (Header, Home, Categorías, Filtros, Búsqueda, Artículos).
- Crossbrowsing: Chrome, Firefox, Safari, Edge en Windows, Mac, Android, iOS.
- Clasificación de incidencias: EEI (Especificaciones erróneas), EDL (Error de diseño lógico), ICI (Interfaz inconsistente).
- UX: Test Emocional con lógicas de puntuación y condicionales de resultados.
- Estados de interfaz: Login, Registro, Botón de Pánico, WhatsApp.
- Frontend: CSS avanzado (@font-face, grid layouts), grilla de 12 columnas (825px).
- Metodologías: Agile/Scrum, Atomic Design, UCD, BPM.

### comunidad
El sistema de clasificación de incidencias (EEI/EDL/ICI) fue el aporte
más duradero de este proyecto: una taxonomía que permite distinguir si
un bug es un error en la especificación original, un error en la lógica
de diseño, o una inconsistencia de interfaz. Esa distinción cambia quién
lo resuelve y cómo se prioriza — no todos los bugs son iguales.

---

## Colegio Médico Colombiano — ActivaMC (2020)

```yaml
audience_tag: reclutador, comunidad
sector: GovTech · Salud · Gremial
rol: Product Architect · Full-Stack Lead
```

### base
- Modernización del ecosistema digital gremial: expedición digital de Tarjeta Profesional Médica y Servicio Social Obligatorio (SSO).
- BPM: flujos operativos para administración de plazas y validación de documentos (diplomas, actas, servicio militar).
- UX: flujos de registro digital con verificación biométrica e identificación facial.
- Design System y Guía de Estilo unificada para Web, iOS y Android (Material Design + Sketch).
- Backend: microservicios y servicios atómicos reutilizables con Spring Boot (Java).
- Infraestructura: contenedores Docker para homologación dev/staging/prod.
- Frontend: Angular v9 + TypeScript + D3.js para analíticas.
- Metodologías: Design Thinking (Double Diamond), Scrum, DevOps CI/CD, DDD, Arquitectura Multi-capa.

### reclutador
Lideré el diseño arquitectónico e implementación del sistema de expedición
digital de la Tarjeta Profesional Médica en Colombia — un proceso que antes
requería presencia física y semanas de trámite. Diseñé la arquitectura
multi-capa con microservicios Spring Boot, orquestación Docker y pipeline
CI/CD, más el Design System multiplataforma (Web, iOS, Android) y el flujo
de verificación biométrica. Este proyecto digitalizó un proceso regulado
con impacto en todos los médicos que se gradúan en Colombia.

### comunidad
La verificación biométrica fue el componente más complejo: integración
con el sistema de identificación facial del proveedor + validación contra
los registros de la universidad emisora del diploma + consulta al Ministerio
de Educación para verificar el acta de grado. Tres sistemas externos con
latencias diferentes, formatos diferentes y SLAs diferentes. Diseñé el
flujo UX asumiendo que cualquier de los tres puede fallar: cada estado
de falla tiene una ruta de recuperación manual auditada. Spring Boot
como orquestador de las 3 llamadas con circuit breaker por servicio.

---

## Universidad de La Salle — Dacartec (2017)

```yaml
audience_tag: comunidad
sector: Educación Superior · GovTech
rol: Full-Stack Engineer · UX Lead
```

### base
- Rediseño integral: zona pública y privada, sitemap de más de 1,000 páginas, matriz de inventario de contenidos.
- Diseño UX/UI en Sketch: más de 200 vistas (HD, Tablet, Móvil), componentes PWA.
- Frontend: Angular 8 + TypeScript + SASS/LESS + HTML5.
- Backend: IBM WebSphere Portal 8.5, WCM, SOAP/REST, LDAP, Azure.
- QA: JMeter para 1,000 usuarios concurrentes, gestión de incidencias en Mantis.
- Accesibilidad W3C WCAG 2.1 y estrategia SEO.
- Metodologías: Material Design, HCD, ANSI/IEEE Std 828-1990, Evaluación Heurística.

### comunidad
El proyecto más demandante en términos de escala de diseño: 200+ vistas
para un sitio universitario con 1,000+ páginas de contenido. La solución
fue un sistema de componentes parametrizados en Sketch (antes de que
Figma tuviera variables) donde cada vista se construía ensamblando
componentes — no diseñando desde cero. Las pruebas JMeter para
1,000 usuarios concurrentes en WebSphere Portal revelaron cuellos de
botella en la capa de sesión que resolvimos con configuración de caché
a nivel de portal, no a nivel de aplicación.

---

## Ecopetrol (2017)

```yaml
audience_tag: reclutador, comunidad
sector: Energía · Enterprise
rol: UX/UI Engineer · DesignOps Lead
```

### base
- Arquitectura de Información y SSOT para el ecosistema digital institucional.
- Librerías UI con cientos de componentes modulares en Figma, Sketch y Axure RP bajo Atomic Design.
- UI/UX Engineering: tokens de diseño, CSS/SASS/LESS, grillas de 12 columnas.
- WCAG 2.1 Niveles A y AA.
- Menús y flujos de navegación complejos: laterales, verticales, responsivos, estados de interacción.
- Metodologías: DesignOps, Diseño Centrado en Personas, Atomic Design, Material Design, Dual Track Scrum, Lean UX.

### reclutador
Para Ecopetrol establecí la Fuente Única de Verdad del ecosistema
digital institucional: arquitectura de información, sistema de tokens
de diseño y librería de cientos de componentes Atomic Design que los
equipos de desarrollo usaron como referencia de implementación.
La escala del proyecto (empresa de 10,000+ empleados, decenas de
sistemas internos) requirió diseñar DesignOps desde cero — procesos
para que equipos distribuidos pudieran contribuir al sistema sin romperlo.

### comunidad
El reto de DesignOps a esta escala: cómo mantener consistencia cuando
hay múltiples equipos usando el mismo sistema de diseño. Establecimos
un modelo de gobierno de tres niveles: (1) tokens que nadie modifica
sin aprobación central, (2) componentes atómicos que los equipos pueden
extender pero no romper, (3) organismos y templates que cada equipo
construye usando los niveles 1 y 2. Fue el primer sistema de gobierno
de design system que diseñé — muchas de las ideas llegaron a TITAN
años después.

---

## El Tiempo Casa Editorial (2013)

```yaml
audience_tag: reclutador, comunidad
sector: Media · Editorial
rol: UX Researcher · Information Architect
```

### base
- Arquitectura de Información para ElTiempo.com y marcas aliadas (Revista Aló, ADN, Canal ET).
- Eye-tracking: fijaciones, LookZones, tiempos de ejecución (T.O.T), modelos mentales.
- Wireframes en Axure RP para flujos de registro y pasarelas de pago de suscripciones.
- QA: matrices de testing crossbrowsing en navegadores legados y modernos.
- Metodologías: Pruebas de Usabilidad en Campo, Evaluación Heurística, Benchmarking.

### reclutador
En El Tiempo usé eye-tracking como herramienta de investigación para
el rediseño de uno de los portales de noticias más visitados de Colombia.
Los datos de fijaciones oculares revelaron que los usuarios nunca llegaban
al contenido debajo del fold en la homepage — no por desinterés, sino
porque la arquitectura visual creaba una barrera perceptual. Ese hallazgo
cambió la estructura de la página principal.

### comunidad
El eye-tracking como método tiene una limitación que aprendí aquí: mide
dónde mira el usuario, no por qué. Las LookZones mostraban que el logo
recibía más fijaciones que cualquier elemento editorial — un dato
sorprendente que solo se explica cuando combinas eye-tracking con
entrevistas: los usuarios miraban el logo para orientarse, no por interés.
La combinación de métodos (cuantitativo + cualitativo) es lo que da
el insight útil, no el método solo.

---

## SÍNTESIS DE CAPACIDADES

```yaml
audience_tag: todos
```

### base
Diseño de producto · Arquitectura de sistemas · Ingeniería frontend · UX Research ·
Design Systems · Accesibilidad (WCAG 2.1/2.2) · IA aplicada (RAG, Multi-LLM, n8n) ·
CI/CD · Seguridad (PCI-DSS, SIPLAFT, JWT) · Compliance regulatorio Colombia y Chile ·
TITAN v7.0 (BFL Protocol, Consejo multi-modelo, Propagation Protocol)

### cliente
Construyo productos que funcionan para todos los usuarios — incluyendo los
que usan lectores de pantalla o tienen conexiones lentas. Lo que entrego
tiene accesibilidad verificada, rendimiento medido y un proceso de
construcción que no deja espacio para sorpresas en producción.

### reclutador
10+ años operando en la intersección de producto, diseño de sistemas y
arquitectura técnica. He liderado proyectos en banca, gobierno, salud,
educación y logística — siempre con compliance regulatorio como constraint
de diseño, no como auditoría post-facto. Creo sistemas que el equipo
opera sin depender de mí.

### comunidad
Stack principal 2025-2026: Next.js 15 · Strapi v5 · PostgreSQL + pgvector ·
Claude Sonnet 4.6 · n8n · Vercel · Cloudflare. Metodologías con las que
opero a diario: TITAN BFL, Atomic Design, DDD, Shape Up, Continuous
Discovery, WCAG 2.2 como gate técnico. Lo que no uso: frameworks de
accesibilidad decorativos, metodologías sin evidencia verificable, IA
sin protocolo de revisión.

### normal
Trabajo con empresas para construir sus productos digitales — desde el
diseño hasta el código — garantizando que funcionen bien, sean accesibles
para todas las personas y cumplan con las normas legales. He trabajado
con bancos, universidades, empresas de seguros y entidades de gobierno
en Colombia y otros países de LATAM.

---

*EXPERIENCIA_PORTAFOLIO_BASE.md — v1.0 — Junio 2026*
*Fuente: SSOT Repositorio Maestro de Experiencia Profesional v2*
*Procesado con: TITAN_TONE_ORCHESTRATOR.md + PORTAFOLIO_AUDIENCE_RULE.md*
*Nivel IMMUTABILITY: Nivel B — actualizar al agregar nueva experiencia*
*Owner: Leonel Mauricio Gómez Ocampo · Staff Product Architect*
