# LEONEL MAURICIO GÓMEZ OCAMPO
**Staff Product Architect · Construyo sistemas que el equipo opera sin mí**
WCAG 2.2 AAA · TITAN v7.0 · Multi-LLM Orchestration

Bogotá, Colombia · +57 317 614 4465 · lemaogo@gmail.com
linkedin.com/in/mauropx · maurogo.netlify.app
Disponible inmediato · Híbrido o remoto global · COT/EST · Handoffs asíncronos en inglés

---

## QUIÉN SOY

He reducido el time-to-market un 75%, eliminado 654 fallas críticas de accesibilidad
en producción y construido un sistema donde 5 modelos de IA se auditan entre sí antes
de que una línea de código llegue al repositorio.

Llevo 10 años cubriendo el ciclo completo — desde el diagnóstico del negocio hasta el
deploy con CI/CD — en banca, fintech, seguros, gobierno, salud y logística en Colombia,
Chile y Panamá. No diseño pantallas: diseño el sistema que hace que las pantallas sean
correctas, accesibles y verificables.

Creé TITAN v7.0, un framework de gobernanza de producto con orquestación multi-modelo
que uso en producción. El diseño y el código son la misma fuente de verdad — lo que se
aprueba en Figma es exactamente lo que sale a producción, sin drift.

---

## IMPACTO MEDIBLE

| Empresa | Resultado |
|---------|-----------|
| **FDN** | LCP de 25.2s → 2.5s (−90%). 654 fallas WCAG 2.2 eliminadas. Sistema accesible certificado. |
| **BBVA** | −75% time-to-market para 1.1M de usuarios. Digitalización del 100% de contratación Pyme. |
| **FID Seguros** | +70% eficiencia en CX. 1,109 inspecciones de alto valor gestionadas técnicamente. |
| **Correos Chile** | Ciclo de entrega de 12 → 6 meses con Design System de +400 componentes. |
| **Ruedaz** | +90% uso recurrente. Ecosistema de 5 plataformas con un solo sistema de diseño. |
| **Redeban** | Modernización de sistema de Tesorería ($48.9M COP) sin interrumpir operaciones. |
| **Colsanitas** | Interoperabilidad con Historia Clínica Digital — 58 variables clínicas integradas. |
| **TITAN v7.0** | −80% carga operativa en documentación. Compliance-as-Code integrado al pipeline. |

---

## EXPERIENCIA

### Consultor Accesibilidad & Arquitecto de Producto
**Financiera de Desarrollo Nacional (FDN) — ActivaMC** · Feb 2026
*Stack: Next.js 14 · Strapi v5 · PostgreSQL 16 + pgvector · Vercel · Cloudflare WAF/R2 · Claude API*

El portal tenía un LCP de 25 segundos, 654 fallas de accesibilidad y un certificado SSL
auto-firmado bloqueando accesos. Rediseñé la arquitectura completa sin apagar el sistema.

- Diagnóstico técnico bajo WCAG 2.2 y Resolución 1519 MinTIC — 654 incidentes en 7 secciones críticas.
- Arquitectura progresiva en 3 capas: DOM semántico nativo → menú de accesibilidad con 8 modos → asistente RAG con IA para navegación por voz.
- Pipeline CI/CD con axe-core como gate bloqueante: falla de accesibilidad = no hay deploy.
- LCP 25.2s → 2.5s. Cloudflare WAF + DNS + R2 configurado.
- Runbook de 7 fases para migración Drupal 7 → Next.js 14 + Strapi v5 + PostgreSQL 16.

---

### Consultor Diseño de Producto UX & Arquitectura de Datos
**SI-CLO / IDPay** · Oct 2025
*Plataforma SaaS fintech regulada · Originación de crédito por Libranza · Ley 1527*

Reemplacé matrices manuales en Excel por un sistema automatizado de gestión de convenios
que opera sin intervención humana en el 90% del ciclo.

- Especificación de arquitectura de datos: 10 tablas, diagrama ER, requisitos OpenAPI/Swagger.
- Wizard de 6 pasos con lógica condicional por segmento (Pensionados, Docentes, FF.MM.).
- Job Diario automático para detección de vencimientos y notificaciones — cero seguimiento manual.
- Cálculo automático de capacidad de crédito bajo Ley 1527.

---

### Staff Product Architect & Estratega UX
**BBVA Colombia & Panamá** · Jun 2025 – Feb 2026
*Productos: App GloMo · Senda · Sucursal Panamá (Proyecto Brickell) · App BBVA Módulo Contratación*

Lideré la digitalización del 100% de la contratación Pyme en Colombia y el diseño del
primer ecosistema transnacional de BBVA que permite gestionar cuentas en dólares desde
canales colombianos.

- Framework operativo "Sistema GEMAS" (5 fases): eliminó cuellos de botella y habilitó firma electrónica para Capital de Trabajo y seguros.
- Orquestación de IA con Gemini Gems y Prompt Engineering: −60% en ciclos manuales de producción de contenido.
- Interoperabilidad bancaria transnacional: flujos multidivisa USD para Sucursal Panamá desde App GloMo y Senda.
- Protocolo Bre-B: flujos de transferencias inmediatas mediante llaves del Banco de la República.
- WCAG 2.1/2.2 AAA sobre lienzos "Clean Canvas" desde el primer sprint, no como auditoría final.

---

### Lead Product Designer & Arquitecto DesignOps
**SmartJob / FID Seguros Chile** · Jul 2024 – Ene 2025
*Regulación CMF Chile · React/MUI · Carbon Design System · DDD*

Construí el sistema operativo de diseño que permitió al equipo de ingeniería operar con
autonomía desde el Sprint 1, sin depender del diseñador para cada decisión.

- Sistema de handoff de 1,002 filas con BPM de 4 actores — autonomía de ingeniería desde Sprint 1.
- Migración OutSystems → React/MUI con Domain-Driven Design y Carbon Design System.
- Gestión técnica de 1,109 inspecciones (Pérdida Total y Responsabilidad Civil) con modelado de deducibles inteligentes por tipo de vehículo, vigencia y PAC/PAT.
- Automatización de procesamiento de facturas y cuadre de cierres mensuales para control de pólizas.

---

### Staff Product Architect · Ecosistema Digital
**Universidad de La Salle / Nivelics** · Dic 2023 – Jul 2024
*Stack: Next.js 14 · Strapi v5 · React/MUI · PostgreSQL · Clientify · Gruplac · n8n · Multi-LLM*

Primer producto EdTech de la Universidad con certificación WCAG 2.2 AAA — el nivel más
exigente — verificado con lectores de pantalla reales, no solo con herramientas automáticas.

- Certificación WCAG 2.2 AAA mediante guía operacional de 18 categorías: ARC Toolkit + axe DevTools + NVDA + VoiceOver.
- Design System con Atomic Design: Next.js 14 + Strapi v5 + React/MUI, sin deuda técnica al deploy.
- Arquitectura de datos para integración nativa con Clientify y Gruplac.
- Orquestación Multi-LLM con n8n para automatización de flujos pedagógicos.
- Métricas de conversión en GA4, Amplitude y Hotjar.

---

### Product Design Lead · Ecosistemas B2B
**Factor IT / Correos Chile** · Abr 2022 – Jul 2023
*Clientes: Sodimac · Imperial S.A. · Framework Merken · Material Design 3*

Reduje el ciclo de entrega del proyecto principal de 12 a 6 meses construyendo un Design
System que los equipos de ingeniería podían implementar sin esperar al diseñador.

- Framework Merken: +400 componentes reactivos en React/MUI con tokens semánticos M3.
- Validación geográfica automática bajo División Político-Administrativa de Chile (DPA2018) + CIIU para carga masiva de datos de envío.
- Onboarding B2B corporativo: formularios Ficha CL-01 con autenticación OTP y recuperación segura de accesos.

---

### Senior UX Product Designer · Mobility SuperApp
**Parking International / Ruedaz** · Dic 2020 – Feb 2022
*Ecosistema: App Android/iOS · Web · Admin · Parking Attendant · 5 plataformas*

Diseñé 5 canales distintos con un solo sistema de diseño. El resultado fue +90% de uso
recurrente medido vía Product-Led Growth.

- Arquitectura multi-plataforma end-to-end: lógica de Monedero Corporativo y validación de cupones por OCR con 3 estados de resultado (sin dead ends).
- Comunicación omnicanal segmentada por 8 hitos del ciclo de vida (Push, SMS, Email, Pop-ups).
- ROI en UX documentado como argumento de negocio para cada decisión de diseño.

---

### Product Designer & UX Researcher · EdTech
**ADL Digital Labs** · 2021
*MVP: Matemáticas · Español · Habilidades Socioemocionales · 46 estudiantes en campo*

Validamos el producto con 46 estudiantes reales en un colegio de Bogotá antes de iterar
— 3 días de prueba en campo, no encuestas.

- Ruta de Aprendizaje: Pre-test → Exploración → Aclaración multimedia → Evaluación → Post-test.
- Arquetipos de usuario definidos desde investigación primaria (focus groups, entrevistas 1-a-1 con docentes).
- Sistema de feedback de error en 3 capas: qué salió mal → por qué → micro-hint sin dar la respuesta.
- Análisis estadístico pre/post test para calibración de ítems de evaluación.

---

### Senior UX Designer & Arquitecto de Procesos
**Dacartec** · Oct 2017 – Jul 2020
*Clientes: Redeban · Univ. La Salle · Colsanitas · PROCOLOMBIA · Ecopetrol · TVS · Old Mutual*

- **Redeban:** Modernización de sistema de Tesorería ($48.9M COP). JSF 1.7 → microservicios Spring Boot + Angular 9. Docker para paridad Dev/Staging/Prod. D3.js para visualización financiera.
- **Univ. La Salle:** Portal de +1,000 páginas sobre IBM WebSphere Portal 8.5 + Angular 8. JMeter para 1,000 usuarios concurrentes.
- **Colsanitas:** Migración a Liferay DXP 6.2. Interoperabilidad con Historia Clínica Digital Avicena — 58 variables clínicas. QA en Device Farm Android/iOS.
- **PROCOLOMBIA:** SSO global integrado con CRM NEO, LDAP, Drupal y Moodle para ecosistema de turismo.
- **Ecopetrol:** Librería UI de cientos de componentes bajo Atomic Design. SSOT del ecosistema institucional. WCAG 2.1 AA.

---

## TITAN v7.0 — Sistema propio de gobernanza de producto

Diseñé y opero TITAN v7.0: un framework de orquestación multi-modelo para ingeniería
de producto con gobernanza, trazabilidad y calidad verificable.

**Lo que lo diferencia del mercado:**
- Consejo de 5 modelos de IA con roles fijos y Blind Review: el que audita no sabe quién construyó.
- Momentum Gate Lock: ningún equipo avanza sin evidencia física firmada — el proceso no depende de la disciplina humana.
- Trazabilidad SPEC→código: cada línea tiene un SPEC_ITEM que la autorizó, un VERSION_CERTIFICATE y un INTEGRITY_SHIELD.
- Zero Hallucination en 5 capas (Blueprint · Forge · Lock · Runtime · Documentos).
- Propagation Protocol: cambiar una entidad propaga automáticamente a 8+ archivos del sistema.

**En producción:** 56 archivos · 180+ comandos · 9 Hubs · BPM M0→M5 · Portabilidad Claude/ChatGPT/Gemini/Cursor/Ollama.

---

## STACK

**IA & Automatización:** Claude Sonnet 4.6 · Gemini 2.0 Pro · DeepSeek-R1 · GPT-4o · Qwen 2.5 · n8n · LiteLLM · RAG · Agentic Workflows

**Frontend:** Next.js 15 · React 19 · Angular · TypeScript · Material Design 3 · Atomic Design · Storybook · CSS/SASS/BEM

**Backend & Datos:** Strapi v5 · PostgreSQL + pgvector · REST/OpenAPI · Spring Boot · Docker · Microservicios

**Infraestructura:** Vercel · Cloudflare WAF/DNS/R2 · GitHub Actions CI/CD · Supabase · Railway

**Accesibilidad & QA:** axe-core · ARC Toolkit · axe DevTools · NVDA · VoiceOver · Lighthouse · JMeter

**Normativa:** WCAG 2.2 AAA · NTC 5854 · Res. 1519 MinTIC · ISO 9001/27001 · PCI-DSS · SIPLAFT · Ley 1527 · CMF Chile

**Proceso:** TITAN v7.0 · SAFe · Scrum · Shape Up · DDD · BPMN 2.0 · PLG · DesignOps · Brownfield Strategy

---

## EDUCACIÓN Y FORMACIÓN

- Publicidad y Mercadeo Creativo — Escuela de Artes y Letras, Bogotá
- UXPM (UX Certified) · Scrum Master · Google UX Design & Data Analytics
- Interaction Design Foundation (IxDF) · Customer Experience — Uniandes
- En proceso: IAAP CPACC (Accessibility Core Competencies)
- **Inglés:** Documentación técnica, especificaciones de producto y comunicación asíncrona. Disponible para roles con handoffs en inglés.

---

*Casos de estudio detallados y referencias disponibles bajo solicitud.*
*Portafolio: maurogo.netlify.app*
