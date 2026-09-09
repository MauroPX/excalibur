# **Pestaña 1**

Basado en los archivos de la carpeta **\[2024\]--LaSalle--Nivelics**, se presenta una consolidación minuciosa de la arquitectura del proyecto, procesos, competencias y metodologías identificadas:

### **1\. Procesos Realizados (Flujo de Trabajo)**

> El proyecto sigue un ciclo de vida estructurado para la creación del ecosistema digital de la Universidad de La Salle:

> * **Análisis y Alineación**: Definición de problemas, objetivos de negocio y alineación de la triada de producto.  
> * **Diseño de Experiencia (UX)**: Creación de *User Journeys*, mapas de sitios, arquitectura de información y prototipado de baja fidelidad (*Wireframes*).  
> * **Diseño de Interfaz (UI)**: Implementación de un *Design System* basado en diseño atómico, gestión de elevaciones, capas de estado y sistemas de mallas (*Grids*).  
> * **Arquitectura de Datos y Contenido**: Clasificación de programas académicos, grupos de investigación y semilleros, incluyendo la definición de modelos de datos para integraciones (e.g., Clientify, Gruplac).  
> * **Aseguramiento de Calidad (QA) y Accesibilidad**: Auditorías de cumplimiento WCAG 2.2 y pruebas de rendimiento (*Vitals*).  
> * **Validación**: Pruebas de plantillas y validación de contenido en tres etapas secuenciales.

### **2\. Metodologías Identificadas**

> Se evidencia el uso de marcos de trabajo ágiles y técnicos de alto nivel:

> * **Agile & Lean**: Implementación de *Design Sprints*, *Scrum*, y metodologías *Lean UX* para reducir el *Time-to-Market*.  
> * **Diseño Atómico (Atomic Design)**: Estructuración del sistema en átomos, bloques y plantillas (*Templates*) para asegurar escalabilidad.  
> * **Arquitectura de Información (IA)**: Organización jerárquica de nodos transversales (Facultades, Programas, Investigación) y sistemas de navegación principal y de usuario.  
> * **Domain-Driven Design (DDD)**: Aplicación parcial en la arquitectura de negocio y sistemas de información.  
> * **Estrategia de Accesibilidad Progresiva**: Enfoque en tres capas (DOM semántico, menú de personalización y asistente RAG con IA).

### **3\. Skills y Herramientas Técnicas**

> El perfil del responsable y los requerimientos del proyecto incluyen:

> * **Diseño de Producto**: *Product Design*, *Service Blueprint*, *Interaction Design* (IxD) y *Visual Design*.  
> * **Sistemas de Diseño**: Experto en **Figma** (Variables y Tokens avanzados), **Storybook**, **Material Design 3** (MD3), Carbon DS y Angular Material.  
> * **Accesibilidad (A11y)**: Especialista en **WCAG 2.2 AA/AAA**, uso de herramientas como ARC Toolkit, axe DevTools y pruebas con lectores de pantalla.  
> * **Analítica y Métricas**: Manejo de **Google Analytics 4** (GA4), Amplitude, Hotjar y SQL para el análisis de conversiones y ROI.  
> * **IA e Innovación**: *Prompt Engineering*, orquestación de modelos Multi-LLM y automatización con **n8n**.  
> * **Tecnologías Frontend**: Conocimientos en **React/MUI**, Next.js 14, Strapi v5 y lógica UI condicional.

### **4\. Consolidado de Estructura de Contenido**

> * **Oferta Académica**: Detalle de pregrados, posgrados y educación continua con atributos específicos (costos, sedes, modalidades y contactos).  
> * **Ecosistema de Investigación**: Clasificación exhaustiva de grupos y semilleros por facultades (e.g., Ciencias Agropecuarias, Ingeniería, Hábitat).  
> * **Componentes Atómicos**: Definición de elementos transversales como *Input Autocomplete*, *Status Badges*, *Carruseles* multimedia y formularios de conversión.

Fuentes:

> * [BuildingStandar\_\[LaSalle\].xlsx](https://drive.google.com/open?id=1MZuC7BiDUJ14Awm1208tKBWKJ2npf3ev)  
> * [Invitación Proceso de Selección Product Designer | ACL Tecnología](https://mail.google.com/mail/u/0/#all/19d9d7b0cb46117c)  
> * [\[Structure\]\_\[LaSalle\].xlsx](https://drive.google.com/open?id=1zcqCd6ZSx19fO0hXqpNrxe3Rb32gV1ni)

# **Pestaña 2**

El contenido de la carpeta que seleccionaste, según los archivos de Excel adjuntos, se centra en la **estructura, reglas, contenido y diseño de un proyecto web para una institución académica (LaSalle)**, abarcando la oferta de programas, la gestión de investigación y las directrices de diseño y experiencia de usuario.

A continuación, un resumen de los puntos clave:1. Estructura y Reglas del Contenido ()

La estructura del sitio se define por reglas de administración de contenido y una lista de elementos a gestionar:

* **Reglas Generales de Administración:**  
  * Se permite crear, editar y eliminar contenido para elementos transversales.  
  * Se pueden configurar formularios de contacto (asignando un correo y unidad académica) y formularios de inscripción (conectados a Clientify y programas académicos).  
  * Las preguntas frecuentes pueden asignarse a secciones o páginas específicas.  
  * Existe una funcionalidad de búsqueda con autocompletar.  
* **Listas de Contenido Administrable (Nodos):**  
  * Incluye elementos como Banners, Facultades, Programas Académicos, Grupos de investigación, Semilleros de investigación, Líneas de investigación (alimentadas por Gruplac), Áreas de investigación, *Empty States*, Preguntas frecuentes, *Forms*, *Contributors*, *News*, Galería, Videos, Podcast, y los menús de Navegación Principal y de Usuario.  
* **Contenido de Páginas:** Se puede crear, editar y cambiar el orden del contenido en páginas específicas como Facultades, Programas Académicos, e Investigación.

2\. Oferta Académica y Unidades ()

Se detalla la oferta académica por unidad, tipo de programa y ubicación:

* **Unidades Académicas Principales:**  
  * Facultad Economía, Empresa y Desarrollo Sostenible (FEEDS)  
  * Escuela de Ciencias Básicas y Aplicadas  
  * Escuela de Humanidades  
  * Facultad Ciencia de la Salud  
  * Facultad Ciencias de la Educación  
  * Escuela de Negocios  
  * Facultad Arquitectura, Diseño y Urbanismo  
  * Facultad Ingeniería  
  * Facultad Ciencias Agropecuarias  
* **Tipos de Programas:** Pregrado, Licenciatura Pregrado, Especialización, Maestría y Doctorado.  
* **Detalles por Programa:** Nombre del programa, duración (semestres), costo (pesos/USD), modalidad (presencial, virtual, a distancia), jornada (diurno/nocturno), sede (Bogotá o Yopal), dirección, teléfono y correo electrónico de contacto (para formulario).

Además, se listan los programas específicos por categorías (Cursos, Diplomados, Doctorados, Idiomas, Maestrías, Posgrados/Especializaciones y Pregrados).3. Investigación ()

Se establece una estructura para la gestión de investigación, que incluye:

* **Filtros de Búsqueda:** Grupos de investigación, Semilleros de investigación, Líneas de Investigación, Proyectos de Investigación y *TAGS*.  
* **Lista Detallada de:**  
  * **Grupos de Investigación:** Agrupados por áreas como Ciencias Administrativas, Agropecuarias, Básicas, Salud, Educación, Hábitat, Económicas, Filosofía/Humanidades, Formación Lasallista e Ingeniería.  
  * **Semilleros:** También clasificados por áreas de las Ciencias.  
  * **Líneas de Investigación:** Como Ambiente y Sustentabilidad, Biodiversidad, Ciudadanía Ética y Política, Estudios de Paz, entre otras.

4\. Estándares y Procesos de Diseño ()

Se define un proceso de trabajo y estándares de diseño:

* **Proceso de Diseño (*Step by Step*):** Incluye etapas como Experiencia de Usuario (Análisis, Prototipado, *Wireframes*), Interfaz de Usuario (*Design System*), Interacción y Validación (*Templates*).  
* **Sistema de Diseño (*Design System*):** Se especifican directrices y elementos clave:  
  * Accesibilidad (WCAG 2.2 y Diseño Accesible).  
  * Construcción de componentes.  
  * Uso de colores, tipografía, *Layouts & Grids*, iconografía y elevaciones.  
* **Micropublicaciones (*Microcopys*):** Se proveen ejemplos de textos de apoyo para funcionalidades clave (e.g., búsqueda, autenticación, cookies, oferta académica).

5\. Estructura de Plantillas (*Templates*) ()

Se definen plantillas de contenido y elementos a nivel atómico:

* **Plantillas Clave:** Home (*Landing Template*), Búsqueda, Oferta Académica (*DashBoard*), Estructura de Programas y Facultades.  
* **Elementos Atómicos (*ATOMS*):** Se detallan los componentes de contenido como Iconos, *Overline*, Encabezados (H1, H2), Resúmenes, Contribuidores, Fechas, Multimedia (Carrusel, Videos, Podcast), Cuerpo de texto y opciones de interacción (votos, compartición, descargas).  
* **Estructura de Páginas (*Page\_structure*):** Se establecen los elementos básicos de metadatos para cada página, incluyendo Contexto, Título, Autor, Fecha, Meta descripción, Palabras clave e Imágenes (con Atributo ALT obligatorio).

