# 🛡️ CAREER OS SSOT — SINGLE SOURCE OF TRUTH (LEONEL MAURICIO GÓMEZ OCAMPO)
Status: Active / Production Ready
Target Level: Staff Product Architect / E2E Platform Engineer
Última Actualización: 2026

---

## 🏗️ CAPA 1: KERNEL DE IDENTIDAD & ESTRATEGIA END-TO-END (0 A 1 → PRODUCCIÓN)

### 1.1 Propuesta Única de Valor (UVP)
Staff Product Architect e integrador transversal de negocio, diseño, desarrollo y operaciones con más de 10 años en el ecosistema digital. El trabajo no empieza en Figma ni ejecutando presupuestos asignados; empieza descubriendo oportunidades, estructurando la propuesta de valor y transformando ideas abstractas en productos viables y rentables (0 a 1). 

### 1.2 Matriz de Habilitación Técnica Secuencial (5 Pilares)
1. **Descubrimiento & Estrategia de Negocio:** Conversión de problemas e ideas en Business Cases sólidos, balanceando viabilidad financiera (ROI, CAPEX/OPEX), métricas de impacto y marcos regulatorios (MinTIC, CMF, PCI-DSS, Ley 1527) en reglas de negocio explícitas.
2. **Procesos & Workflows:** Diseño de diagramas de procesos BPMN 2.0 y flujos multi-actor para alinear operaciones y eliminar cuellos de botella desde el primer sprint.
3. **Arquitectura de Datos & APIs:** Creación de diagramas Entidad-Relación (10+ tablas), especificación de contratos OpenAPI/Swagger y configuración de bases de datos vectoriales (PostgreSQL pgvector) para motores RAG.
4. **Gobernanza & DesignOps:** Construcción de sistemas operativos de diseño en código (1,000+ filas, tokens M3/Carbon) para garantizar paridad técnica 1:1 entre arquitectura y producción.
5. **Compliance-as-Code & CI/CD:** Configuración de pipelines en GitHub Actions con pruebas de accesibilidad (axe-core) que bloquean despliegues ante fallos críticos de WCAG 2.2 AAA.

---

## 📜 CAPA 2: ARCHIVO CRONOLÓGICO Y EVIDENCIA TRAZABLE (DETALLE GRANULAR)

*Este registro contiene la especificación exacta de procesos de ingeniería, especificaciones técnicas y metodologías aplicadas sin alteraciones, en estricto orden cronológico inverso.*

### 2.1 FINANCIERA DE DESARROLLO NACIONAL (FDN) — ActivaMC (2026)
**Foco:** Migración Brownfield, Accesibilidad, IA y Rendimiento.
*   **Especificaciones Técnicas y Procesos de Ingeniería:**
    *   Reestructuración integral de la infraestructura del portal institucional (estrategia Brownfield) reemplazando un sistema Drupal 7 en riesgo crítico.
    *   Implementación del nuevo Stack Tecnológico (TITAN v5.0): Arquitectura Frontend en Next.js 14 con despliegue optimizado en Vercel, y Backend estructurado en un CMS Headless con Strapi v5.
    *   Modelado de base de datos relacional en PostgreSQL 16 utilizando la extensión pgvector para habilitar el soporte avanzado de Inteligencia Artificial.
    *   Configuración de infraestructura en la nube con Cloudflare, activando Web Application Firewall (WAF), administración DNS y almacenamiento R2 para activos digitales.
    *   Integración de Inteligencia Artificial conectando la API de Claude para el despliegue del motor RAG (Retrieval-Augmented Generation).
    *   Despliegue de pipelines de integración y entrega continua (CI/CD) en GitHub Actions con 7 trabajos automatizados, incorporando pruebas de accesibilidad axe-core que bloquean el despliegue ante fallos críticos.
    *   Diagnóstico técnico del estado Legacy detectando degradación de rendimiento (LCP de 25.2s y TTFB >1.5s) y fallas de jerarquía ARIA/aria-labelledby.
    *   Planificación de despliegue mediante un Runbook de 7 fases, incluyendo configuración de Design Tokens bajo especificaciones Material Design 3 y cambio de apuntamiento DNS.
*   **Metodologías:** Brownfield Strategy, Material Design 3, Atomic Design, Scrum, SAFe, Dual-Track Agile, Continuous Discovery Habits.

### 2.2 BBVA — Consultoría Tercerizada (2025 - 2026)
**Foco:** Fintech Enterprise, Interoperabilidad y Automatización IA.
*   **Especificaciones Técnicas y Procesos de Ingeniería:**
    *   Auditoría estructural y diagnóstico UX/UI del modelo "Coach Mark" (pantalla dividida), solucionando deficiencias en jerarquía visual y carga cognitiva.
    *   Diseño de ecosistemas transnacionales creando flujos de interoperabilidad bancaria para productos de la Sucursal Panamá (Proyecto Brickell), permitiendo a clientes gestionar cuentas multidivisa (USD) desde canales locales (App GloMo y Senda).
    *   Estandarización de canales digitales mediante guías operativas de UX para el Módulo de Contratación de la App BBVA (onboarding de cuentas, tarjetas y préstamos).
    *   Gobernanza de Comunicaciones No Comerciales (CNC) mediante la implementación de un modelo de gestión basado en el enfoque Radical Customer Perspective (RCP).
    *   Digitalización del 100% de la contratación para el segmento Pyme Inbound, habilitando la contratación remota de Capital de Trabajo y seguros (Mi Pyme Asegurada) con firma electrónica y posterior emisión en Acsel Web.
    *   Optimización de accesibilidad y diseño inclusivo integrando pautas WCAG 2.1/2.2 AAA sobre lienzos de trabajo "Clean Canvas" para la reducción de fatiga visual.
    *   Creación de activos de Motion Graphics (Bento, Stickers, Microilustraciones) bajo el concepto visual "Blossom" para transmitir fluidez.
    *   Creación técnica automatizando la producción de guiones y documentación mediante Gemini Gems y Prompt Engineering, reduciendo los ciclos de creación de contenido en un 60%.
    *   Diseño de protocolos operacionales y flujos de usuario transaccionales para la red de transferencias inmediatas Bre-B a través de llaves del Banco de la República.
*   **Metodologías:** Sistema GEMAS, Walkthrough Inmersivo a pantalla completa, Content Framing, Scrum, SAFe (Scaled Agile Framework).

### 2.3 SI-CLO CONVENIOS — Consultoría Tercerizada (2025)
**Foco:** Originación de crédito y automatización de reglas de negocio.
*   **Especificaciones Técnicas y Procesos de Ingeniería:**
    *   Diseño y estandarización de la originación de crédito por Libranza, liderando la transición de matrices manuales en Excel hacia una plataforma automatizada.
    *   Configuración de modelo de datos con "Tabla Única" para la administración de maestros de organizaciones, diferenciando Clientes y Entidades con validaciones críticas de NIT único.
    *   Diseño de la interfaz (UI/UX) para un Wizard de Creación de Convenios estructurado en 6 pasos (Información General, Renovación, Responsables, Tipos de Contrato, Rubros y Documentos).
    *   Configuración del ciclo de vida y gestión de estados condicionales del sistema (Borrador, Pendiente, Activo, Vencido/Inactivo).
    *   Automatización de Reglas de Negocio filtrando tipos de contrato, rubros de ingresos/deducciones (Salud EPS, Reajustes) y carga de documentos (RUT, Cámara de Comercio) según el segmento del cliente (Pensionados, Docentes, Fuerzas Militares).
    *   Control de riesgo operativo mediante la definición de flujos de visación por pagaduría y automatización del cálculo de capacidad de crédito bajo la Ley 1527.
    *   Programación de rutinas de backend (Job Diario) para la detección automática de vencimientos y disparo de notificaciones de renovación.
*   **Metodologías:** Arquitectura UI/UX orientada a datos, Automatización de Reglas de Negocio.

### 2.4 FINANCIERA DE DESARROLLO NACIONAL (FDN) — ActivaMC (2025)
**Foco:** Auditoría Transversal y Cumplimiento Normativo.
*   **Especificaciones Técnicas y Procesos de Ingeniería:**
    *   Ejecución de Auditoría Transversal de Calidad Digital con recolección automática de datos vía Google Search Console y Lighthouse/LCP.
    *   Auditoría Normativa Manual punto a punto de criterios WCAG 2.1/2.2 y Resolución 1519 de MinTIC utilizando lectores de pantalla y navegación por teclado.
    *   Ejecución de Análisis de Brechas (Gap Analysis) y Planificación de Remediación técnica estructurada en matriz priorizada (Alta/Media/Baja).
    *   Detección de fallas críticas de accesibilidad: Contraste (1.4.3), Navegación por teclado (2.1.1), Atributos ARIA (4.1.2) en logotipo y menús, e identificación deficiente de errores en Formularios (3.3.1).
    *   Monitoreo de Rendimiento y Web Vitals identificando un Largest Contentful Paint (LCP) crítico superior a 2,5 segundos en 85 URLs de escritorio y 80 URLs móviles.
    *   Auditoría SEO de estructura de enlaces, interconectividad y backlinking (49,646 enlaces entrantes desde 175 dominios).
    *   Gestión de Seguridad documentando alertas de certificado SSL auto-firmado (MOZILLA_PKIX_ERROR_SELF_SIGNED_CERT) que bloquea accesos.
*   **Metodologías:** WCAG 2.1 y 2.2, NTC 5854, Planificación de Remediación.

### 2.5 FID SEGUROS CHILE — SmartJob (2024-2025)
**Foco:** Fintech/Seguros, Modelado de riesgos y Auditoría Arquitectónica.
*   **Especificaciones Técnicas y Procesos de Ingeniería:**
    *   Gestión técnica integral del ciclo de inspección y suscripción (1,109 inspecciones masivas valoradas en $15.8M USD), modelando flujos para inspecciones a domicilio, asistidas y autoinspección por video.
    *   Procesamiento automatizado de facturas, cuadre de cierres mensuales y auditoría de grandes volúmenes de datos en cargas masivas para control de errores de pólizas.
    *   Análisis funcional y definición de requisitos para la Épica 6 ("Consulta de Riesgos Hipotecarios"), estructurando flujos de búsqueda histórica de siniestros y recaudaciones para perfiles Broker y Backoffice.
    *   Simulación y modelado de ofertas económicas para seguros de vehículos motorizados (livianos y pesados), definiendo vigencias, comisiones, deducibles inteligentes y condiciones particulares (PAC/PAT).
    *   Establecimiento de procedimientos normados para la liquidación de siniestros, peritaje y cuantificación de pérdidas bajo la regulación de la Comisión para el Mercado Financiero (CMF).
    *   Ejecución de auditorías técnicas de rendimiento frontend y accesibilidad mediante herramientas automatizadas Lighthouse.
    *   Gobernanza de Handoff construyendo un sistema operativo de diseño en código de 1,002 filas y diagramación BPMN (4 actores).
    *   Migración técnica de OutSystems a React/MUI adaptando Carbon Design System.
*   **Metodologías:** Marcos Ágiles (Scrum, Épicas, Sprint Briefs), Design Sprint, Auditoría Arquitectónica en 3 Capas, Estandarización de Procesos.

### 2.6 UNIVERSIDAD DE LA SALLE — Nivelics (2023-2024)
**Foco:** EdTech, IA Multi-modelo y Accesibilidad AAA.
*   **Especificaciones Técnicas y Procesos de Ingeniería:**
    *   Diseño de Experiencia (UX) mediante el modelado avanzado de User Journeys, site maps y wireframes de baja fidelidad.
    *   Desarrollo de Interfaz (UI) fundamentado en la creación de un Design System en Figma, operando con Variables, Tokens y componentes en Storybook.
    *   Construcción de Arquitectura de Datos y Contenido, especificando los modelos de bases de datos para integraciones nativas con Clientify y Gruplac.
    *   Auditoría exhaustiva de Aseguramiento de Calidad y Accesibilidad confirmando certificaciones WCAG 2.2 AA/AAA mediante ARC Toolkit, axe DevTools y testeo con lectores de pantalla.
    *   Orquestación de IA y automatizaciones técnicas utilizando Prompt Engineering, integración de modelos Multi-LLM y flujos de n8n.
    *   Implementación de Stack Tecnológico Frontend empleando frameworks React/MUI, Next.js 14, Strapi v5 y Angular Material.
    *   Extracción y análisis de métricas de conversión gestionadas mediante GA4, Amplitude, Hotjar y comandos SQL.
*   **Metodologías:** Agile & Lean, Atomic Design, Domain-Driven Design (DDD), Estrategia de Accesibilidad Progresiva en 3 capas.

### 2.7 SURED — Consultoría Tercerizada (2024)
**Foco:** Integración transaccional B2B y Seguridad.
*   **Especificaciones Técnicas y Procesos de Ingeniería:**
    *   Liderazgo técnico en la integración B2B para la activación transaccional de los productos de juego Baloto y Miloto dentro de los canales digitales (App y Web) de Matrix Giros y Servicios (SuRed).
    *   Estructuración técnica de requerimientos mediante la redacción de Historias de Usuario Épicas (HUE), abarcando configuraciones de geolocalización, reportería contable y despliegue de tirillas digitales en PDF.
    *   Despliegue de servicios REST para la automatización de sorteos, apuestas, informes de consulta y procesamiento de pagos con el Operador Nacional de Juegos (ONJ).
    *   Implementación de arquitectura de seguridad transaccional mediante JSON Web Tokens (JWT) con expiración a los 60 minutos, cifrado de credenciales con algoritmos SHA-256 y protocolos seguros SFTP/SSH bajo estándares PCI-DSS.
    *   Configuración de integraciones técnicas para validación de identidad de clientes contra servicios gubernamentales de control bajo normativas SIPLAFT y Habeas Data.
    *   Programación de rutinas operativas para procesos de conciliación automática diaria de doble chequeo de transacciones e identificación de discrepancias.
    *   Desarrollo de scripts de reportería avanzada mediante JasperReports (.jrxml) y diseño vectorial (.ai) de líneas gráficas autorizadas.
*   **Metodologías:** Desarrollo Ágil (Scrum), Gestión de Proyectos mediante Casos de Negocio, SQA y Control de Calidad, Gestión Documental de Cambios.

### 2.8 CORREOS CHILE — FactorIT (2022-2023)
**Foco:** Logística B2B, Normalización de datos y automatización.
*   **Especificaciones Técnicas y Procesos de Ingeniería:**
    *   Estructuración de procesos de onboarding B2B corporativo para grandes cuentas (Sodimac, Imperial S.A.) mediante formularios estandarizados Ficha CL-01 y codificación jerárquica (Código Madre vs. Código Adicional).
    *   Procesamiento y optimización de flujos logísticos para la Carga Masiva de Datos, permitiendo la ingesta, normalización y validación geográfica de bases de datos de envíos estructuradas bajo la División Político-Administrativa (DPA) de Chile y códigos de actividad económica CIIU.
    *   Estandarización funcional de servicios definiendo trazabilidad, tipología de mercadería (Express) y configuraciones de facturación de portabilidad.
    *   Diseño e ingeniería UX/UI para el Portal Empresas, modelando flujos funcionales de autenticación, recuperación de accesos seguros y validaciones criptográficas de códigos OTP con manejo de estados condicionales.
    *   Mapeo e ingeniería de Casos de Uso estructurando escenarios Happy Path para el agendamiento masivo de solicitudes de retiro e impresión de etiquetas masivas.
    *   Aplicación de diseño visual siguiendo guías de pantones corporativos (CMYK), retículas de diagramación estructurales y fuentes de la marca.
    *   Construcción del Framework Merken (+400 componentes reactivos en React/MUI con tokens MD3) reduciendo el ciclo de 12 a 6 meses.
*   **Metodologías:** Diseño Centrado en el Usuario (UCD), Marcos Ágiles enfocados en Producto Mínimo Viable (MVP), Normalización de Procesos corporativos.

### 2.9 FINANCIERA DE DESARROLLO NACIONAL (FDN) — ActivaMC (2023)
**Foco:** Certificación de Accesibilidad y Sistemas de Diseño.
*   **Especificaciones Técnicas y Procesos de Ingeniería:**
    *   Establecimiento de lineamientos del Sistema de Diseño aplicando jerarquías tipográficas y sistemas de color con contrastes de 4.5:1.
    *   Certificación formal de accesibilidad web bajo el estándar internacional WCAG 2.1 nivel AA.
    *   Auditoría de Accesibilidad documentada mediante reportes CSV que identifican fallas de contraste de color (WCAG 1.4.3) en menús, botones e iconografía.
    *   Validación de código con reporte crítico de atributos ARIA (WCAG 4.1.2) debido a fallas de IDs inexistentes y roles no soportados en etiquetas HTML.
    *   Detección de errores críticos en arquitectura de formularios PQRS por carencia de nombres accesibles (aria-label) y ausencia de elementos hijos requeridos en componentes listbox.
    *   Empleo técnico de generadores de artefactos TITAN v4.1 para la estandarización de reportes y documentación de gestión.
*   **Metodologías:** Material Design, Scrum, Atomic Design, Diseño Centrado en Personas.

### 2.10 ADL DIGITAL LABS | Michael Page Colombia (2021)
**Foco:** UX Research (EdTech), Gamificación y Diseño de Producto.
*   **Especificaciones Técnicas y Procesos de Ingeniería:**
    *   Diseño de producto e ingeniería de interacción para la estructuración de la Ruta de Aprendizaje de un MVP EdTech (Pre-test, Exploración, Aclaración multimedia, Evaluación formal y Post-test).
    *   Mapeo de flujos complejos de navegación de usuario abarcando autenticación, splash video, mapas de progreso y pantallas de finalización de unidades pedagógicas para áreas de Matemáticas, Español y Habilidades Socioemocionales.
    *   Conducción de procesos de UX Research mediante la moderación de talleres de ideación, focus groups, entrevistas 1 a 1 con docentes y modelamiento de arquetipos de usuarios (Joven curioso, Innovador con experiencia, Cómodo tradicional).
    *   Benchmarking de Feedback analizando e implementando mecánicas multisensoriales de retroalimentación constructiva y celebraciones visuales.
    *   Validación técnica y usabilidad en campo coordinando pruebas piloto de 3 días con 46 estudiantes (Colegio Argelia) para la Unidad de Fracciones.
    *   Análisis estadístico de datos analíticos orientados a la calibración de ítems de evaluación de conocimiento pre/post test.
*   **Metodologías:** User-Centered Design (UCD), Lean UX, Prototipado Rápido, Gamificación, Dual Track Agile.

### 2.11 PARKING INTERNATIONAL | RUEDAZ (2020-2022)
**Foco:** Producto end-to-end (B2C/B2B), DesignOps y PLG.
*   **Especificaciones Técnicas y Procesos de Ingeniería:**
    *   Diseño de producto de extremo a extremo articulando flujos operacionales multiplataforma: App (Android/iOS), Web, Portal Corporativo, Parking Inside y Parking Attendant.
    *   Mapeo estratégico de la experiencia de usuario (CUJ) identificando momentos críticos (MOTs) y puntos de contacto (Frontstage/Backstage) para clientes recurrentes y modelos de fidelización B2B.
    *   Estandarización UI/UX estructurando el Ruedaz System Design, definiendo principios de navegación, consistencia visual y pautas de accesibilidad WCAG 2.1.
    *   Documentación técnica y lógica de Reglas de Negocio para procesos automatizados de registro, renovaciones de suscripción mensual y validación de cupones mediante escaneo OCR de facturas.
    *   Diseño de matrices de comunicación omnicanal coordinando mensajes automáticos transaccionales (Push notifications, SMS, E-mail, Pop-ups) segmentados por hitos del ciclo de vida.
    *   Establecimiento de KPIs de conversión, análisis de retorno de inversión (ROI en UX) y definición técnica del MVP Corporativo para la gestión de monederos virtuales y cortesías. Aumento del 90% en uso recurrente.
*   **Metodologías:** Product-Led Growth (PLG), UX Research (Generativa/Evaluativa), Design Thinking, Sprint Design, Jobs to be Done (JTBD), Scrum, DesignOps/DevOps, Atomic Design y Material Design.

### 2.12 PORQUE QUIERO ESTAR BIEN (PQEB) — ActivaMC (2020)
**Foco:** Salud Mental, Medición y Arquitectura de Test.
*   **Especificaciones Técnicas y Procesos de Ingeniería:**
    *   Estructuración de procesos para la medición de consulta entre contenidos y test, conversion, KPI’s.
    *   Aseguramiento de Calidad (QA) e ingeniería de software ejecutando la revisión estructural y funcional de componentes core (Header, Home, Categorías, Filtros, Búsqueda y Artículos).
    *   Validación técnica de Crossbrowsing y compatibilidad multiplataforma testeando la estabilidad en navegadores sobre dispositivos múltiples.
    *   Auditoría, depuración y clasificación técnica de incidencias con nomenclatura de ingeniería (EEI: Especificaciones erróneas, EDL: Error de diseño lógico, ICI: Interfaz inconsistente).
    *   Diseño de Experiencia de Usuario (UX) modelando la arquitectura de flujos interactivos para un Test Emocional integrado con lógicas subyacentes de puntuación y condicionales de resultados.
    *   Definición de estados de interfaz de usuario para flujos críticos de Login, Registro y pasarelas de ayuda inmediata (Botón de Pánico, WhatsApp).
    *   Diseño Front-end e Interfaz (UI), Design System categorizado: estructurando hojas de estilo CSS avanzados, sistemas de cuadrículas e integración de fuentes web.
*   **Metodologías:** Agile / Scrum, Atomic Design, User-Centered Design (UCD), BPM para flujos de navegación.

### 2.13 COLEGIO MÉDICO COLOMBIANO (CMC) — ActivaMC (2020-2021)
**Foco:** Modernización ecosistema gremial (Salud), BPM, Biometría.
*   **Especificaciones Técnicas y Procesos de Ingeniería:**
    *   Estructuración de la arquitectura de la solución para la modernización del ecosistema digital gremial, automatizando los trámites estatales de expedición de la Tarjeta Profesional Médica y el Servicio Social Obligatorio (SSO).
    *   Modelado de procesos de negocio (BPM) estructurando diagramas de flujo operativos para la administración de plazas y estados de validación transaccional de documentos de soporte (diplomas, actas, servicio militar).
    *   Diseño de experiencia de usuario integrando flujos de registro digital con protocolos técnicos de verificación biométrica e identificación facial.
    *   Estandarización de interfaz mediante la creación de un sistema de diseño y Guía de Estilo unificada para Web, iOS y Android usando componentes de Material Design en Sketch.
    *   Desarrollo Backend orientado a objetos, implementando microservicios y servicios atómicos reutilizables basados en el framework Spring Boot (Java).
    *   Orquestación de infraestructura mediante contenedores Docker para la homologación estricta de ambientes de desarrollo, certificación y producción.
    *   Desarrollo Frontend basado en componentes reutilizables utilizando Angular (v9) con TypeScript y librerías D3.js para la visualización de analíticas y reportes.
*   **Metodologías:** Diseño Estratégico (70% Pensar, 30% Ejecutar), Design Thinking (Double Diamond), Desarrollo Ágil (Scrum), DevOps (CI/CD pipelines), Domain-Driven Design (DDD), Arquitectura Multi-capa.

### 2.14 DACARTEC INTERNATIONAL SERVICES (2017-2020)
*Múltiples Proyectos de Modernización, Microservicios y QA.*

*   **REDEBAN (2017):** Modernización de aplicaciones legadas sustituyendo código obsoleto (Java Server Faces 1.7) por arquitecturas modernas basadas en microservicios con Spring Boot en el backend y Angular (v9) con TypeScript en el frontend. Modernización de sistema de Tesorería por $48.9M COP. Diseño UX/UI (SAC) con D3.js. Modelado BPM para conciliación diaria (Planillas 154, 117, 117-1). Infraestructura DevOps Docker, LDAP RedHat y FUSE ESB.
*   **COLSANITAS (2017):** Migración total del ecosistema digital (Portal Web y App móvil) a Liferay DXP. Interoperabilidad con Historia Clínica Digital (Avicena), mapeando 58 variables clínicas y administrativas. Capa de interoperabilidad basada en microservicios, Portlets, JBoss, Oracle y Java. QA liderando pruebas en Device Farm.
*   **ECOPETROL (2017):** Arquitectura de la Información (SSOT) para el ecosistema digital institucional. Diseño de librerías UI atómicas en Figma/Sketch. Traducción de UI a código técnico (tokens de diseño, CSS, SASS). Implementación rigurosa de WCAG 2.1 (A y AA).
*   **PROCOLOMBIA (2017):** Arquitectura de ecosistema digital de turismo. Levantamiento técnico de Promailing, Banco de Imágenes, E-learning y sistema CDB. Diseño de SSO unificado integrado con CRM (NEO), LDAP y CMS/LMS (Drupal/Moodle). Service Blueprints por roles.
*   **UNIVERSIDAD DE ANTIOQUIA UdeA (2017):** Plataforma de Egresados y Portal. Redacción de Casos de Uso (CU-HU01 a 04). Arquitectura de Información para 26 unidades académicas y programas SNIES. Aseguramiento de calidad (QA) y ATDD.
*   **TVS TERMINAL VIRTUAL SANITARIO (2017):** Terminal Virtual Sanitario Plus (TVS+) para Fundación Santa Fe. Casos de uso B2B (Asegurado, Clínica, Aseguradora). Reglas de negocio para validación en tiempo real y saldo decreciente SOAT (Decreto 2423, CIE10).
*   **UNIVERSIDAD DE LA SALLE (2017):** Rediseño integral (+1,000 páginas). Diseño responsivo PWA. Desarrollo en Angular 8. Backend en IBM WebSphere Portal 8.5, SOAP/REST. QA JMeter (1,000 usuarios).
*   **OLD MUTUAL (2017):** SDLC enfocado en modernización de Portal de Clientes. Definición de Historias de Usuario, Pruebas de Usabilidad y prototipos en Axure RP consumiendo servicios REST.
*   **OTROS PROYECTOS DACARTEC:**
    *   **MIVE:** Migración de componentes de interfaz legacy a nuevas arquitecturas.
    *   **Acueducto:** Diseño UI servicios públicos, normalización tabular.
    *   **Aseguradora Solidaria (Pre-v2):** Arquitectura UX para seguros, flujos suscripción.
    *   **Dacartec:** Prototipado servicios internos QA.
    *   **El_Libertador:** UX para sector inmobiliario/financiero.
    *   **Fundación_social:** Portales de responsabilidad social.
    *   **Latampopst:** Interfaces para logística y distribución responsiva.
    *   **Servientrega:** UX ecosistema logístico y carga masiva.

### 2.15 ACTIVA MC - PROYECTOS GUBERNAMENTALES Y CORPORATIVOS (2014-2021)
*Además de FDN, CMC y PQEB detallados arriba.*

*   **SINERGIA DNP (2015):** Gestión técnica de requerimientos SDLC para centralizar el Plan Nacional de Desarrollo (PND). Historias de Usuario para roles gubernamentales. UxD para tableros de control y semáforos de cumplimiento. Auditoría accesibilidad NTC 5854 (A, AA).
*   **OTROS PROYECTOS ACTIVAMC:**
    *   **[2015] -- hipotecaria:** Automatización reglas de crédito hipotecario.
    *   **[2020] -- Acción Fiduciaria:** Modernización de procesos fiduciarios.
    *   **[2020] -- FDN Diagnóstico Website:** Auditoría inicial e infraestructura.
    *   **[2021] -- BU APP:** Desarrollo móvil usuario final.
    *   **[2021] -- FDN_Designsystem:** Sistema de diseño y gobernanza UI.
    *   **[2021] -- IQ:** Ingeniería de producto e interacción.
    *   **[2021] -- Lopez_y_Asociados:** Consultoría y arquitectura de información.
    *   **[2021] -- Ofelia:** Flujos interactivos.
    *   **[2021] -- Javeriana:** Educación Superior: UX Research.
    *   **[2022] -- BSC:** Diseño de interfaces corporativas.

### 2.16 VULCAN STUDIOS (2015-2016)
**Foco:** Diseño Ágil, UI Systems, Consultoría Creativa.
*   **Especificaciones Técnicas y Procesos de Ingeniería:**
    *   **UI Systems & Components:** Creación de librerías de diseño, iconografía (todoOK, ICONS) y normalización visual para escalabilidad (Easyfly, Pinbus).
    *   **Diseño Ágil (Lean UX):** Entrega acelerada de prototipos funcionales y diseño de interacción centrado en el usuario.
    *   **Arquitectura de Interfaz:** Estandarización de flujos de reserva (Easyfly) y optimización de conversión de compra (Pinbus).
    *   **Consultoría Técnica:** Levantamiento de requerimientos y diseño UI para plataformas de seguridad social (Aportes en línea, SOI Data).
*   **LISTA GRANULAR VULCAN STUDIOS (14 Proyectos):**
    *   **aportes_en_linea:** Modelado de formularios de alta criticidad (seguridad social).
    *   **Appsco:** Arquitectura de navegación portales de emprendimiento.
    *   **Barsmarts:** UX técnica para LMS y flujos interactivos.
    *   **Centro_Historico:** Arquitectura de Información turística geográfica.
    *   **Conadic:** Normalización de flujos operativos digitales.
    *   **CPC (Consejo Privado de Competitividad):** Sistema de procesos, cruce de datos informes.
    *   **Crossroad:** Prototipado alta fidelidad y estados de interacción.
    *   **CSI PageTables:** Ingeniería de tablas de datos y normalización.
    *   **Daater:** Diseño centrado en usuario, búsqueda avanzada y datos masivos.
    *   **DLOC:** Creación de sistemas base y UI Kits.
    *   **Easyfly:** Arquitectura flujos conversión B2C reserva.
    *   **Mutual:** Arquitectura UX seguros y pólizas.
    *   **Pinbus:** Optimización funnels de compra transporte intermunicipal.
    *   **Quantum:** Consultoría estructuración componentes Atomic.
    *   **SOI_Data:** Interfaces reportes financieros.
    *   **todoOK:** Sistema de diseño completo, librería e iconos.

### 2.17 CASA EDITORIAL EL TIEMPO (2013-2014)
**Foco:** Arquitectura de Información y UX Research (Eye-tracking).
*   **Especificaciones Técnicas y Procesos de Ingeniería:**
    *   **Arquitectura de Información:** Diseño de taxonomías masivas y jerarquías visuales para el rediseño de ElTiempo.com, Revista Aló, ADN y Canal ET.
    *   **Investigación de Usuarios (UX Research):** Medición técnica mediante Eye-tracking (análisis de LookZones, fijaciones oculares y tiempos de ejecución de tarea - T.O.T) y análisis de modelos mentales.
    *   **Prototipado Avanzado:** Construcción de wireframes de alta fidelidad y prototipado funcional en Axure RP para flujos críticos de suscripciones y pasarelas de pago.
    *   **Aseguramiento de Calidad (QA):** Ejecución de matrices de testing multiplataforma (crossbrowsing) en navegadores legados y modernos.

---

## 🔬 CAPA 3: LOS 6 CASOS DE ESTUDIO INDUSTRIALES (DEEP DIVE)

### 3.1 Guidewire Cloud (APD) — Arquitectura de Producto End-to-End
*   **Visión Estratégica:** Arquitectura de *Bounded Contexts* (DDD) donde Advanced Product Designer (APD v2026.03) actúa como contexto *upstream* y PolicyCenter/ClaimCenter/BillingCenter como *downstream*. Reducción del ciclo de lanzamiento de meses a semanas.
*   **System Design:** Orquestación con Kafka Event Streaming, Guidewire Integration Platform (GWIP), y Jutro Digital Platform. Lógica de validación con FEEL (Friendly Enough Expression Language).
*   **Contratos de API:** Restricciones estrictas REST v2 con campos Mandatory/Optional y tipologías S/D/C (Static from APD / Dynamic / Calculated).
*   **Metodologías:** Double Diamond (Conceptualize, Visualize, Finalize), Service Blueprinting E2E, Empathy Maps para flujos FNOL (First Notice of Loss). Generación asíncrona de documentos para evitar bloqueos UI.

### 3.2 Portal FDN — Migración y Cumplimiento de Accesibilidad Digital
*   **Estrategia:** Migración *Brownfield Zero Downtime* (cambio DNS TTL 300s). Inversión $0 en parchar el monolito Drupal 7 legado con 654 incidencias WCAG.
*   **Arquitectura API-First:** Next.js 14 (App Router, SSR), Strapi v5 (Headless, 8 Content Types bilingües), PostgreSQL 16 con `pgvector`. WAF y Cloudflare R2 para almacenamiento de PDFs con URLs permanentes (Transparencia Ley 1712).
*   **Motor RAG & Analítica:** Integración de Claude API (Anthropic) restringido al corpus documental. Analítica con PostHog Self-hosted para cumplir Habeas Data (Ley 1581).
*   **Interface Mode PROGRESSIVE (3 Capas):** Capa Nativa, Capa Preferencias y Capa Agéntica (Navegación por voz).
*   **Pipeline CI/CD:** 7 jobs bloqueantes en GitHub Actions (lint, axe, unit, e2e, lighthouse, sast, deploy) garantizando 0 violaciones WCAG 2.2 AA. LCP optimizado de 25.2s a <2.5s.

### 3.3 Solidaria Portal — Ecosistema Unificado del Cliente (Aseguradora Solidaria)
*   **Estrategia:** Desacoplar arquitectura monolítica de Azure Blob Storage integrando 7 dominios digitales. NPS objetivo de 41 a 65.
*   **System Design:** Next.js 16, Zustand, Tailwind reemplazado por tokens MD3 CSS Modules. Autenticación SSO con NextAuth.js v5 (email, celular, póliza).
*   **Material Design 3 HCT:** Generación algorítmica de tokens desde color fuente `#004173` usando `@material/material-color-utilities`.
*   **Accesibilidad y Neurodiversidad (COGA / UDL 3.0):** Máximo 1 acción primaria por viewport (TDAH-D3), Stepper siempre visible (TDAH-D4), máximo 68 caracteres/línea y `prefers-reduced-motion` global.
*   **Tests y Entorno:** Desarrollo *Backend-agnostic* usando MSW (Mock Service Worker). Suite TDD con Vitest + Testing Library + axe. E2E con Playwright. Capa UI independiente en Chromatic/Storybook.

### 3.4 simon-v2-monitor (FleetControl - Monitoreo GPS)
*   **Estrategia:** SPA para telemetría IoT de API Traccar. Arquitectura BFF (Backend for Frontend) Serverless con Netlify Functions para manejar CORS y cookies de sesión `JSESSIONID`.
*   **Trade-offs (System Design):** Polling (5s) + interpolación de movimiento a 60 FPS (Framer Motion / `requestAnimationFrame`) vs WebSockets, optimizando la infraestructura serverless.
*   **Accesibilidad Semántica:** Estructura HTML `<dl>`, `<dt>`, `<dd>` para la Status Card, facilitando el anuncio correcto de pares clave-valor en lectores de pantalla.
*   **Resiliencia:** Patrón "Última Posición Conocida" (Graceful Degradation): atenuación a opacidad 0.6 + escala de grises ante fallas de red, con `role="alert"` focalizado.
*   **Calidad:** 57/57 tests pasando, TypeScript Strict (0 errores), `jest-axe` en el pipeline, y ADRs documentados.

### 3.5 CODESA — Rediseño de Pagos (Investigación Nivel 3)
*   **Estrategia:** Aumentar la conversión del módulo de pagos del 28% al >60%, reducir tickets de soporte en un 30% usando TITAN RESEARCH INTELLIGENCE v7.0 (8 etapas encadenadas).
*   **Observabilidad Técnica:** Service Blueprint de Observabilidad. Trazabilidad causal con `trace_id` RUM, dual dispatch a PostHog/Amplitude, sanitización PII (SHA-256) y Circuit Breakers para fallas de pasarela.
*   **Resiliencia y Patrones:** *Outbox Pattern* ("Pago Borrador") para guardar el estado ante fallos de red en dispositivos Android Go (2G/3G).
*   **Accesibilidad Humana:** Aplicación de *Self-Determination Theory* (Autonomía, Competencia, Relación) en la redacción de errores. *Calm Technology* y *Design with Intent* (bloqueo UI post-clic para evitar doble cobro).

### 3.6 EXCALIBUR v2 & SIMON v2 MONITOR
*   **EXCALIBUR v2:** Ecosistema de portafolio Sovereign Architecture. Protege la paridad 1:1 en una capa `iframe` aislada. Usa PostgreSQL 16 `pgvector` y Claude API para un motor RAG forense que inyecta evidencia mediante el método PAR. Integración del A11y ARC Engine para auditar el DOM estructural en tiempo real. Configuración de Ola 6: i18n con `next-intl`.
*   **SIMON v2 (Gestión Activos):** Next.js 15, MUI v6, React 19. Arquitectura de Estado Compartido. Uso de ciclos BFL (Blueprint-Forge-Lock). Debouncing de búsquedas e internacionalización regional.

---

## 🏛️ CAPA 4: MARCOS DE PROPIEDAD INTELECTUAL Y GOBERNANZA

### 4.1 TITAN v7.0 (Sistema Maestro de Ingeniería y Orquestación)
*   **Los 6 Momentums:**
    *   `M0 Onboarding` (Project Manifest, ADRs)
    *   `M1 Discovery` (UX Research, Threat Model)
    *   `M2 Architecture` (SPEC, BFL Blueprints)
    *   `M3 Execution` (Baby Steps, CI/CD)
    *   `M4 Audit` (WCAG Audit, DAST)
    *   `M5 Operations` (Telemetría, TIRFC)
*   **Protocolo BFL (Blueprint → Forge → Lock):** Pipeline inmutable. Atómica lógica y prevención de colisiones → Implementación + Test WCAG → Checksum y versionado.
*   **The Swarm (IA Multi-Agente):** 5 modelos de gobernanza (Architect, Inquisitor, Craftsman, Observer, Consultant) con derecho a veto absoluto. Regla *Zero Complacency* (prohibición de adjetivos de falsa validación de la IA si el código tiene vulnerabilidades).

---

## 🔍 CAPA 5: DIRECTORIO DE PALABRAS CLAVE Y MATRIZ BOOLEANA

### 5.1 Diccionario Técnico Consolidado
*   **Frameworks & Code:** Next.js 16/15/14, React 19, Angular (v8-14), Spring Boot (Java), TypeScript Strict, MUI v6, Node.js, D3.js, Strapi v5 Headless, Leaflet.
*   **Infraestructura & Cloud:** Docker, Vercel, Railway, Cloudflare (WAF, R2, DNS), GitHub Actions (CI/CD), IBM WebSphere, JBoss, Liferay DXP, FUSE ESB.
*   **Data & IA:** PostgreSQL 16, pgvector, Claude API (RAG), Gemini Gems, DeepSeek, n8n, Prompt Engineering, Meilisearch v1, REST/SOAP/OpenAPI/Swagger, JSON Web Tokens (JWT).
*   **A11y & Normativas:** WCAG 2.1/2.2 AAA, axe-core, ARC Toolkit, NTC 5854, Res. 1519 MinTIC, CMF Chile, PCI-DSS, Habeas Data (Ley 1581), Ley 1527.
*   **Metodologías:** BFL Protocol, DDD (Domain-Driven Design), SAFe, Dual-Track Agile, PLG (Product-Led Growth), Continuous Discovery, BPMN 2.0, System Design.

### 5.2 Búsquedas Booleanas (Targeting)
*   **Staff / Principal Architect:** `("Staff Product Architect" OR "Principal Product Architect") AND ("Design Systems" OR "DDD") AND ("OpenAPI" OR "Swagger" OR "ERD") AND ("WCAG" OR "axe-core")`
*   **AI Product Designer:** `("AI Product Designer" OR "LLM Integration") AND ("RAG" OR "pgvector") AND ("Prompt Engineering" OR "n8n") AND ("Next.js" OR "React")`
*   **Design Systems / DesignOps:** `("Design Systems Engineer" OR "DesignOps Lead") AND ("Tokens" OR "Style Dictionary") AND ("Storybook" OR "MUI") AND ("TypeScript")`
*   **Accessibility Architect:** `("Accessibility Architect" OR "A11y Compliance") AND ("WCAG 2.2" OR "WCAG AAA") AND ("axe-core" OR "CI/CD") AND ("NTC 5854")`

---

