# **Pestaña 1**

La carpeta **\[2023\]--FDN--ActivaMC** contiene documentación técnica y reportes de auditoría enfocados en la **accesibilidad web** y el **sistema de diseño** de la Financiera de Desarrollo Nacional (FDN).

A continuación, se presenta un resumen detallado de los hallazgos y lineamientos encontrados:

### **1\. Lineamientos y Certificación**

> * **Sistema de Diseño (FDN System Design Guide.docx):** Define procesos para crear "experiencias humanas" estandarizadas. Incluye:  
  * **Marcos de trabajo**: Uso de Material Design, Scrum, Atomic Design y Diseño Centrado en Personas.  
  * **Principios**: Enfoque en accesibilidad (WCAG 2.1), consistencia, reusabilidad y control del usuario.  
  * **Especificaciones**: Define jerarquías tipográficas y sistemas de color con contrastes mínimos de 4.5:1 para cumplir niveles AA.  
> * **Certificación de Accesibilidad (documento certificacion fdn dic 2023.docx):** Documento fechado en Dec 22, 2023, que avala el cumplimiento de estándares **WCAG 2.1 AA** en el sitio web principal.  
  * Verifica texto alternativo en imágenes, contraste de color y navegación lineal consistente.

### **2\. Auditoría de Accesibilidad (Informes CSV)**

> Varios archivos detallan problemas detectados entre Sep 18, 2023 y Sep 19, 2023, categorizados principalmente como **Serios** o **Críticos**:

> * **Problemas de Contraste (WCAG 1.4.3 \- Serio):** Detectados en múltiples secciones como "Transparencia", "Sala de Prensa" y el "Home".  
  * Afecta a menús, botones de "Conoce más", iconos de redes sociales y textos informativos.  
  * **Causa común**: El color de fondo no se determina correctamente por estar solapado por otros elementos o imágenes.  
> * **Atributos ARIA (WCAG 4.1.2 \- Crítico/Serio):**  
  * **IDs inexistentes**: Atributos aria-labelledby o aria-describedby que apuntan a elementos que no están en la página (común en el pie de página de "Atención al ciudadano").  
  * **Roles no soportados**: Uso de etiquetas ARIA en elementos div o mat-card que no tienen un rol válido asignado.  
> * **Formularios (PQRS):** El flujo de solicitudes presenta errores críticos de accesibilidad por falta de nombres accesibles en campos de entrada y falta de elementos hijos requeridos en listas desplegables.

### **3\. Otros Recursos**

> * **Archivos Complementarios**: La carpeta incluye una matriz de trazabilidad (**MATRIZ\_RTM\_TOTAL\_SIN\_OMISIONES.md**) que registra evidencias de gestión de datos y certificaciones para diversos proyectos, incluyendo "Enterprise\_Accessibility \[2026\]".  
> * **Herramientas**: Se menciona el uso de generadores de artefactos y reportes (**TITAN v4.1**) para estandarizar la entrega de documentación técnica y de gestión.

Fuentes:

> * [FDN System Design Guide.docx](https://drive.google.com/open?id=1HI0WbA9ZXKbUcaQv_ADaM9ZT9z5wV0GC)  
> * [FDN System Design Guide.docx](https://drive.google.com/open?id=1W7DgdWhu_6VHfxeWsoUQ8jPetSAI3CWM)  
> * [documento certificacion fdn dic 2023.docx](https://drive.google.com/open?id=1peZbrSlQxpaCnnwwIlaamHpHYA-so16v)  
> * [FDN\_Productos-Servicios-Workflow-19-09-2023.csv](https://drive.google.com/open?id=1HrYziqFQ0oXBHvWA6brree9UPA-NKWFA)  
> * [FDN\_Transparencia\_Workflow-19-09-2023.csv](https://drive.google.com/open?id=1CPyt5iUVdVIbcadsiEACQqL_KXroDfqq)  
> * [FDN Workflow-18-09-2023.csv](https://drive.google.com/open?id=1dBQYyMl6dtLxW5pZ5XiWxRz4LNSo3jIe)  
> * [FDN\_Sala-de-Prensa\_Workflow-19-09-2023.csv](https://drive.google.com/open?id=1T5OVZig0nYNky8R84b8eMQVRA8wPl1wg)  
> * [FDN\_Atencion-a-la-ciudadania\_Workflow-19-09-2023.csv](https://drive.google.com/open?id=1o8bJVz4KzfXyQ0oLutObXSz9LiazxCKX)  
> * [FDN Workflow-18-09-2023.csv](https://drive.google.com/open?id=175oKJNM0W78p4cdnF_1H8cGy91pPU-z4)  
> * [FDN\_PQRS\_Workflow-19-09-2023.csv](https://drive.google.com/open?id=1Bn2eb3klzRqkcgbD55gE1mD_NWdlGjf7)  
> * [FDN\_Participa\_Workflow-19-09-2023.csv](https://drive.google.com/open?id=1NNPtLhjo7RAN3F7YOT2WFzJsSxNo4r_U)  
> * [FDN\_Transparencia\_Workflow-19-09-2023.csv](https://drive.google.com/open?id=1HC9KIqkFWe8aBdFBgR71iAGVZBDPgcAX)  
> * [MATRIZ\_RTM\_TOTAL\_SIN\_OMISIONES.md](https://drive.google.com/open?id=1n2dudmPWTVuVF-PE2mRFmmKPNYhYSYoN)  
> * [files.zip](https://drive.google.com/open?id=1SnFz88N2p4bgGjO9XlYI3Jfv9vVGPwEZ)

# **Pestaña 2**

La carpeta seleccionada se titula **\[2023\]--FDN--ActivaMC** y contiene varios archivos CSV y DOCX relacionados con la Financiera de Desarrollo Nacional (FDN), principalmente enfocados en la **accesibilidad web (WCAG 2.1 AA)** y el **Sistema de Diseño** de la entidad.

A continuación, se presenta un resumen por tipo de contenido:1. Guía de Diseño y Certificación

* **FDN System Design Guide.docx:** Documento sobre el Sistema de Diseño de FDN, el cual se basa en la estandarización de procesos y reglas para la lógica del producto, incluyendo decisiones de negocio, normativa y accesibilidad.  
  * Menciona que el objetivo es diseñar **experiencias humanas** y crear productos que sean **perceptibles, operables, entendibles y robustos**.  
  * Recomienda las **Pautas de Accesibilidad (WCAG) 2.1 del W3C** en niveles A, AA o AAA.  
  * Detalla las etapas del proceso de trabajo: **Ideación/Descubrimiento, Construcción/Definición, Lanzamiento/Desarrollar y Aprender/Entregar**.  
  * Sugiere marcos de trabajo como Diseño Centrado en Personas, Scrum, Atomic Design y Material Design (IO/UI).  
* **documento certificacion fdn dic 2023.docx:** Certifica que la página web de FDN (**www.fdn.com.co**) cumple con los **estándares AA de la Guía de Accesibilidad de Contenidos Web (WCAG) versión 2.1**.  
  * Destaca el cumplimiento en criterios como:  
    * Elementos no textuales con **texto alternativo (aria-label y atributo alt)**.  
    * Texto con contraste de color suficiente y posibilidad de **ampliación hasta el 200%**.  
    * Código ordenado con lenguaje de marcado bien utilizado, estructura organizada y **navegación consistente**.  
    * Control de contenidos con movimientos temporizados (banners).

2\. Informes de Problemas de Accesibilidad (CSV)

Los archivos CSV parecen ser informes de accesibilidad (workflow) que detallan problemas encontrados en varias secciones del sitio web de FDN. La gran mayoría de los problemas reportados son de severidad **"serious"** y se centran en dos tipos de incumplimiento de la norma **WCAG 2.1 (pauta 1.4.3 y 4.1.2)**:

* **Problemas de Contraste de Color (WCAG 1.4.3):** Es el problema más recurrente. La descripción del problema es que el contraste entre el color de primer plano y el fondo no cumple con los umbrales de la relación de contraste WCAG 2 AA. La solución más común propuesta es arreglar los elementos donde el color de fondo no pudo ser determinado (porque está solapado por otro elemento, es un pseudo-elemento, o es una imagen de fondo).  
* **Problemas de Atributos ARIA (WCAG 4.1.2):**  
  * **`aria-allowed-attr` (Serio):** Atributos ARIA no son compatibles con el rol del elemento (ej. `aria-labelledby` en un `div` o `mat-card` sin un rol válido).  
  * **`aria-valid-attr-value` (Crítico):** Atributos ARIA (como `aria-labelledby` o `aria-describedby`) referencian IDs de elementos que no existen en la página.  
  * **`aria-required-children` (Crítico):** Elementos con un rol ARIA que requiere roles de hijos no los contienen (ej. `mat-form-field` con rol `listbox` sin hijos `group` u `option`).

---

**Páginas afectadas reportadas en los CSV:**

* **Productos y Servicios / Estructuración y Banca de Inversión:** Muestra problemas de contraste y atributos ARIA en elementos de navegación, textos y tarjetas de proyectos.  
* **Sala de Prensa / Comunicados:** Detalla problemas de contraste en elementos de navegación y noticias, y problemas críticos de atributos ARIA.  
* **Participa:** Muestra problemas de contraste en la sección de atención al ciudadano y problemas críticos de atributos ARIA.  
* **Transparencia / Información de la entidad:** Identifica problemas de contraste en elementos de navegación y de "Atención al ciudadano", y problemas críticos de atributos ARIA.  
* **Atención al Público / Solicitud (PQRS):** Reporta problemas de contraste en botones y campos de formulario, además de problemas críticos en roles de ARIA y nombres de campos.  
* **Atención al Ciudadano / Contáctenos:** Señala problemas de contraste en la navegación y la información de contacto, incluyendo iconos con contraste insuficiente.  
* **Página Principal (`https://www.fdn.com.co/`):** Presenta problemas de contraste en la navegación, contenido de las tarjetas de exploración y la sección del Defensor del Consumidor Financiero.

# **Pestaña 3**

La carpeta **\[2023\]--FDN--ActivaMC** contiene documentación técnica y reportes de auditoría de la Financiera de Desarrollo Nacional (FDN), centrados en la **accesibilidad web** y el **sistema de diseño**.

A continuación, un resumen detallado por tipo de contenido:

### **1\. Lineamientos y Certificación**

* **Sistema de Diseño (FDN System Design Guide.docx)**: Documento de Jul 2021 que estandariza procesos para crear "experiencias humanas".  
  * **Marcos de trabajo**: Emplea Material Design, Scrum, Atomic Design y Diseño Centrado en Personas.  
  * **Principios**: Prioriza la accesibilidad (WCAG 2.1), consistencia, reusabilidad y el control del usuario.  
  * **Especificaciones**: Define jerarquías tipográficas y sistemas de color con contrastes mínimos de 4.5:1 para cumplir niveles AA.  
* **Certificación de Accesibilidad (documento certificacion fdn dic 2023.docx)**: Avala que el sitio **www.fdn.com.co** cumple con los estándares **WCAG 2.1 AA**.  
  * **Hallazgos**: Valida el uso de texto alternativo (aria-label/alt), ampliación de texto hasta 200%, navegación lineal consistente y control de banners temporizados.  
  * **Fecha de revisión**: Dec 22, 2023\.

### **2\. Auditoría de Accesibilidad (Informes CSV)**

Varios reportes detallan problemas detectados entre Sep 18, 2023 y Sep 19, 2023, categorizados principalmente como **Serios** o **Críticos**:

* **Contraste de Color (WCAG 1.4.3 \- Serio)**: Es la falla más frecuente en secciones como "Transparencia", "Sala de Prensa" y el "Home".  
  * **Afectación**: Impacta menús, botones de "Conoce más", iconos y textos informativos.  
  * **Causa**: El fondo no se determina correctamente por solapamiento de elementos o imágenes de fondo.  
* **Atributos ARIA (WCAG 4.1.2 \- Crítico/Serio)**:  
  * **IDs inexistentes**: Atributos `aria-labelledby` o `aria-describedby` referencian elementos ausentes en la página (común en el pie de página).  
  * **Roles no soportados**: Uso de etiquetas ARIA en elementos `div` o `mat-card` sin un rol válido asignado.  
* **Formularios y PQRS**: El flujo de solicitudes presenta errores críticos por falta de nombres accesibles en campos (`aria-label`) y ausencia de elementos hijos requeridos en listas desplegables (`listbox` sin `option`).

### **3\. Páginas Web Afectadas**

Los reportes identifican fallas específicas en:

* **Productos y Servicios**: Problemas de contraste en tarjetas de proyectos.  
* **PQRS**: Errores críticos en la estructura de formularios de contacto.  
* **Atención al Ciudadano**: Iconos con contraste insuficiente (ej. idiomas, búsqueda).  
* **Home**: Fallas en la sección del Defensor del Consumidor Financiero.

