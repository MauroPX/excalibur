#  Ecosistema EXCALIBUR: Arquitectura de Soberanía

Este documento detalla la arquitectura de software que permite la coexistencia de un portafolio de alta fidelidad con inteligencia dinámica AI.

## 🏛️ Patrón Iframe Sovereignty
Para evitar que los estilos de frameworks modernos (Next.js/Tailwind) contaminen un diseño certificado pixel-perfect, el ecosistema utiliza un aislamiento por Iframe:

- **Capa 0 (Iframe)**: Aloja el `index_clean.html`, un entorno puramente estático pero enriquecido dinámicamente por el orquestador.
- **Capa 1 (React Context)**: Aloja los agentes inteligentes y el HUD de gobernanza, inyectados mediante `zIndex` supremo sobre el Iframe.

## 🤖 Deep RAG Cortex
La inteligencia del sistema no es generativa pura; es **Forense**.
- **Data Source**: 24 archivos de texto extraídos de PDFs originales.
- **Retrieval**: El Agente Titan consulta el `evidence-dna.json` para entregar respuestas basadas exclusivamente en la trayectoria real documentada.
- **Orquestación**: Un sistema de estados en React asegura que la conversación fluya sin bloqueos, permitiendo la navegación directa a través del Iframe mediante el objeto `window`.

---
*Arquitectura diseñada para la resiliencia y la veracidad de los datos.*
