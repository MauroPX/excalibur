
const fs = require('fs');
const path = require('path');

const dnaPath = path.join(__dirname, '../src/data/evidence-dna.json');

/**
 *  MASTER DNA ARCHITECT v92.0
 * Format: PAR Method (Problem, Action, Result) + Skills/Methodologies.
 * Ensures concise Staff-level evidence with zero redundancy.
 */
const masterDna = [
  {
    "id": "BBVA_Master_Ecosystem",
    "year": "2024-2026",
    "client": "BBVA Colombia & Panamá",
    "sector": "Banca & Fintech",
    "context": "Orquestación de ecosistemas financieros transnacionales.",
    "par": {
      "problem": "Alta carga cognitiva y fragmentación en la contratación Pyme y flujos GloMo/SENDA.",
      "action": "Arquitectura de Diseño Estratégico, Proyecto Brickell (Interoperabilidad) y Sistema GEMAS.",
      "result": "Escalabilidad regional asegurada y transición a walkthroughs inmersivos interactivos."
    },
    "skills": ["Design Systems Architecture", "Product Strategy", "Figma Variables"],
    "methodologies": ["Radical Customer Perspective (RCP)", "Double Diamond", "SAFe"]
  },
  {
    "id": "FDN_Titan_Stack",
    "year": "2026",
    "client": "Financiera de Desarrollo Nacional",
    "sector": "Gobierno & Estrategia",
    "context": "Soberanía tecnológica y cumplimiento legal de accesibilidad.",
    "par": {
      "problem": "Deuda técnica en Drupal 7 y LCP crítico de 25s afectando cumplimiento NTC 5854.",
      "action": "Migración integral a TITAN Stack (Next.js 14 + Strapi v5) con gobernanza Cloudflare.",
      "result": "LCP < 2.5s y obtención del Certificado de Accesibilidad 2024 nivel AA/AAA."
    },
    "skills": ["Next.js 14", "Strapi v5", "Cloudflare WAF"],
    "methodologies": ["Brownfield Strategy", "Dual-Track Agile", "CI/CD Governance"]
  },
  {
    "id": "Correos_Chile_Merken",
    "year": "2023",
    "client": "Correos de Chile",
    "sector": "Logística & Ops",
    "context": "Automatización de diseño masivo para operación postal masiva.",
    "par": {
      "problem": "Time-to-Market lento (12 meses) y falta de estandarización en flujos masivos corporativos.",
      "action": "Creación del Merken Design System con 400+ componentes atómicos y Figma API.",
      "result": "Aceleración de entrega a 6 meses y normalización de estados para Sodimac/Imperial."
    },
    "skills": ["DesignOps", "Design Tokens", "Figma API"],
    "methodologies": ["Lean UX", "Atomic Design", "UCD"]
  },
  {
    "id": "SuRed_Fintech",
    "year": "2024",
    "client": "SuRed",
    "sector": "Banca & Fintech",
    "context": "Integración de productos nacionales en canales digitales.",
    "par": {
      "problem": "Necesidad de integrar Baloto/Miloto con alta seguridad y validación biométrica.",
      "action": "Implementación de JWT/SHA-256 y diseño de tiquete digital dinámico JasperReports.",
      "result": "Conciliación operativa automatizada y despliegue seguro en canales App/Web."
    },
    "skills": ["REST APIs", "JWT", "JasperReports"],
    "methodologies": ["Epic User Stories (HUE)", "PCI-DSS Standards"]
  },
  {
    "id": "TVS_Sanitario",
    "year": "2017",
    "client": "TVS+",
    "sector": "Salud & Life Sciences",
    "context": "Digitalización de flujos sanitarios y gestión de convenios.",
    "par": {
      "problem": "Complejidad en reglas de negocio por perfiles médicos y facturación de asegurados.",
      "action": "Diseño del Terminal Virtual Sanitario Plus y definición de flujos operativos E2E.",
      "result": "Implementación de agendas de alta disponibilidad y dashboards de facturación certificados."
    },
    "skills": ["React", "Figma", "WCAG 2.1 AA"],
    "methodologies": ["UCD", "Agile Product Design"]
  },
  {
    "id": "ADL_Digital_Labs",
    "year": "2021",
    "client": "ADL Labs",
    "sector": "Banca & Fintech",
    "context": "Innovación gamificada para el sector educativo.",
    "par": {
      "problem": "Baja retención de conocimientos en niveles educativos básicos digitales.",
      "action": "Diseño de ruta de aprendizaje gamificada y validación de campo con 46 estudiantes.",
      "result": "Incremento significativo en KPIs de retención y creación de arquetipos docentes."
    },
    "skills": ["User Insights", "Prototyping", "Data Analytics"],
    "methodologies": ["Gamificación", "Lean UX", "Dual Track"]
  },
  {
    "id": "Redeban_SAC",
    "year": "2017-2020",
    "client": "REDEBAN",
    "sector": "Banca & Fintech",
    "context": "Modernización de arquitectura financiera legacy.",
    "par": {
      "problem": "Dependencia de JSF 1.7 y falta de dashboards de conciliación en tiempo real.",
      "action": "Arquitectura de microservicios, integración FUSE ESB y Dashboard D3.js.",
      "result": "Soberanía sobre ambientes Docker y conciliación diaria optimizada para bancos."
    },
    "skills": ["Angular v9", "Spring Boot", "Docker", "D3.js"],
    "methodologies": ["DDD", "BPMN 2.0", "Kruchten 4+1"]
  },
  {
    "id": "Colsanitas_Avicena",
    "year": "2017",
    "client": "Colsanitas",
    "sector": "Salud & Life Sciences",
    "context": "Modernización de Historia Clínica Electrónica.",
    "par": {
      "problem": "Fricción operativa en la plataforma Avicena para médicos especialistas.",
      "action": "Sesiones de usabilidad e inmersión médica para rediseño funcional en Liferay DXP.",
      "result": "Migración estética exitosa y optimización de flujos de atención prioritaria."
    },
    "skills": ["Liferay DXP", "Axure RP", "UX Research"],
    "methodologies": ["Contextual Inquiry", "UCD"]
  },
  {
    "id": "Parking_Ruedaz",
    "year": "2021",
    "client": "Parking",
    "sector": "Logística & Ops",
    "context": "Estrategia omnicanal para gestión de parqueos.",
    "par": {
      "problem": "Falta de unificación en la experiencia de usuario B2C/B2B de la plataforma Ruedaz.",
      "action": "Mapeo de Customer Journeys (CUJ) y desarrollo de Ruedaz System Design.",
      "result": "Estrategia de comunicación unificada (Push/SMS) y mejora en NPS transaccional."
    },
    "skills": ["Figma", "User Journey", "System Design"],
    "methodologies": ["Service Blueprint", "Omnichannel UX"]
  },
  {
    "id": "ColegioMedico_CMC",
    "year": "2020",
    "client": "Colegio Médico Colombiano",
    "sector": "Salud & Life Sciences",
    "context": "Digitalización de trámites estatales críticos.",
    "par": {
      "problem": "Flujo manual e ineficiente para la expedición de la tarjeta profesional médica.",
      "action": "Modelado de Negocio (BPM) y diseño de arquitectura de datos para registro masivo.",
      "result": "Digitalización total del trámite y creación de la Guía de Estilo CMC."
    },
    "skills": ["BPMN", "Information Architecture", "Data Modeling"],
    "methodologies": ["Agile Documentation", "E2E Digitalization"]
  },
  {
    "id": "Ecopetrol_SSOT",
    "year": "2017",
    "client": "Ecopetrol",
    "sector": "Innovación Cross-Sector",
    "context": "Gobernanza de diseño para la estatal petrolera.",
    "par": {
      "problem": "Inconsistencia visual y técnica en múltiples aplicaciones de la entidad.",
      "action": "Creación de la Single Source of Truth (SSOT) digital y librería UI Atomic Design.",
      "result": "Estandarización de componentes agnósticos y cumplimiento WCAG 2.1 inicial."
    },
    "skills": ["Sketch", "Atomic Design", "Design Standards"],
    "methodologies": ["SSOT Governance", "UCD Roadmap"]
  },
  {
    "id": "ElTiempo_Editorial",
    "year": "2013-2015",
    "client": "El Tiempo",
    "sector": "Medios & Digital",
    "context": "Estrategia de contenidos y retención masiva.",
    "par": {
      "problem": "Bajo engagement en formatos informativos digitales masivos.",
      "action": "Diseño de formatos interactivos y prototipado de flujos de pauta publicitaria.",
      "result": "Mejora en métricas de retención mediante validación con perfiles demográficos."
    },
    "skills": ["UX Research", "Information Architecture", "Editorial UX"],
    "methodologies": ["User Testing", "Prototyping"]
  },
  {
    "id": "LaSalle_A11y",
    "year": "2024",
    "client": "Universidad de La Salle",
    "sector": "Educación & Academia",
    "context": "Accesibilidad universal en ecosistema académico.",
    "par": {
      "problem": "Falta de cumplimiento normativo WCAG en portales universitarios transaccionales.",
      "action": "Estructuración bajo Atomic Design para 18 categorías normativas (DOM/Aria/Contrast).",
      "result": "Nivel máximo WCAG 2.2 AAA alcanzado en componentes core del ecosistema."
    },
    "skills": ["WCAG 2.2 AAA", "Figma Variables", "React"],
    "methodologies": ["Accessibility First", "Design Sprints"]
  },
  {
    "id": "UdeA_Egresados",
    "year": "2017",
    "client": "Universidad de Antioquia",
    "sector": "Educación & Academia",
    "context": "Arquitectura de información para gestión de egresados.",
    "par": {
      "problem": "Taxonomía confusa y búsqueda ineficiente en el portal institucional.",
      "action": "Reestructuración de arquitectura de información y ejecución de pruebas UAT.",
      "result": "Sistema de búsqueda con 10+ filtros institucionales y alineación a manual de identidad."
    },
    "skills": ["IA Taxonomy", "UAT Testing", "Sketch"],
    "methodologies": ["Manual de Identidad", "ATDD"]
  },
  {
    "id": "SICLO_Convenios",
    "year": "2025",
    "client": "SI-CLO Convenios",
    "sector": "Banca & Fintech",
    "context": "Arquitectura de negocio para convenios financieros.",
    "par": {
      "problem": "Fragmentación en la creación de convenios y falta de trazabilidad por NIT.",
      "action": "Diseño de Wizard de 6 pasos con validaciones de negocio y tablas maestras dinámicas.",
      "result": "Unificación de Clientes/Entidades y control absoluto de reglas de negocio."
    },
    "skills": ["JSON Architecture", "Business Logic", "Product Design"],
    "methodologies": ["Data Governance", "Wizard UX"]
  },
  {
    "id": "Sinergia_DNP",
    "year": "2015",
    "client": "Sinergia / DNP",
    "sector": "Gobierno & Estrategia",
    "context": "Seguimiento al Plan Nacional de Desarrollo (PND).",
    "par": {
      "problem": "Dificultad en la visualización de indicadores gubernamentales masivos.",
      "action": "Diseño de tableros de control complejos y auditoría de errores en matrices QA.",
      "result": "Mejora en la trazabilidad de metas estatales para el Departamento Nacional de Planeación."
    },
    "skills": ["BPMN", "Axure RP", "QA Matrices"],
    "methodologies": ["Government Reporting", "Audit UX"]
  }
];

if (!fs.existsSync(path.dirname(dnaPath))) {
    fs.mkdirSync(path.dirname(dnaPath), { recursive: true });
}

fs.writeFileSync(dnaPath, JSON.stringify(masterDna, null, 2));
console.log('--- FINAL DNA v92.0: PAR METHOD CONSOLIDATED ---');
