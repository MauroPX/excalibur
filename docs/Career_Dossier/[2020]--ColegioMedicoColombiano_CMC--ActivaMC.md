# **Pestaña 1**

Basado en los archivos de la carpeta del **Colegio Médico Colombiano (CMC)**, se presenta la consolidación detallada de procesos, habilidades y metodologías aplicadas:

### **1\. Procesos Realizados**

> Se identifica la estructuración completa de un ecosistema digital para la gestión gremial:

> * **Modernización de Trámites Estatales:** Digitalización del flujo operativo para la expedición de la **Tarjeta Profesional Médica** y la gestión del **Servicio Social Obligatorio (SSO)**.  
> * **Modelado de Negocio (BPM):** Creación de diagramas de procesos para la administración de plazas, validación de información y estados de solicitud (en trámite, rechazado, aceptado).  
> * **Diseño de Experiencia de Usuario (UX/UI):** Desarrollo de flujos de registro, verificación biométrica facial, carga de documentos de soporte y perfiles profesionales.  
> * **Arquitectura de Información:** Organización de datos de alta densidad que integran información de Ministerios, Secretarías de Salud, egresados y entidades académicas.  
> * **Estandarización de Producto:** Creación de una **Guía de Estilo** para uniformar interfaces en Web, iOS y Android, facilitando la usabilidad y accesibilidad.

### **2\. Skills y Habilidades Técnicas**

> * **Arquitectura y Backend:**  
  * **Java / Spring Boot:** Implementación de microservicios (servicios atómicos) y lógica de negocio orientada a objetos.  
  * **Docker:** Homologación de ambientes (Dev, Staging, Prod) mediante contenedores.  
> * **Frontend y Diseño:**  
  * **Angular (v9) / TypeScript:** Desarrollo de interfaces basadas en componentes y librerías **D3.js** para visualización de gráficas y estadísticas.  
  * **Material Design:** Aplicación rigurosa del sistema de diseño de Google (Stickersheets).  
  * **Herramientas de Prototipado:** Experto en **Sketch**, **Overflow** y **Axure** para la creación de blueprints y flujos de interacción.  
> * **Gestión de Datos:**  
  * Manejo de **JSON**, **SQL (T-SQL)**, y análisis de datos para reportes de monitoreo y trazabilidad.

### **3\. Metodologías Aplicadas**

> * **Diseño Estratégico y Madurez:** Enfoque de "70% Pensar, 30% Ejecutar", integrando **Design Thinking** (Double Diamond) y procesos de diseño colaborativo.  
> * **Desarrollo Ágil:** Uso de marcos de trabajo como **Scrum** (Product/Sprint Backlogs) y **DevOps** para la integración y entrega continua (CI/CD).  
> * **Arquitectura de Software:** Aplicación de **Domain-Driven Design (DDD)** para lógicas complejas y arquitectura multi-capa con bajo acoplamiento.  
> * **Calidad y Soporte:** Implementación de procesos de trazabilidad (logs), monitoreo de rendimiento y definición de SLAs de aplicaciones.

Fuentes:

> * [CMC Vision General.pptx](https://drive.google.com/open?id=191cENbDzAlfz2EokR1GQ9CH1FMkCm-KR)  
> * [CMC FlowDoctor.overflow](https://drive.google.com/open?id=1nZmF0HCFfziJdi0BVbF_oI8op4ecpBew)  
> * [\[2026\] Proyecto full resumen Version Uno](https://drive.google.com/open?id=1_nP1OhmDXOC4UQy04wdqE34jKXJQl6Q4vMv5m3SA8Vs)  
> * [CMC BPM.sketch](https://drive.google.com/open?id=1L0Hp8O0ygCdMHLpfzOYVrMkDChg5NLZH)  
> * [CMC SystemDesign Stickersheet.sketch](https://drive.google.com/open?id=1sV2fkkoFyERqBGTyTM9XYyJ8faAMOUkm)  
> * [CMC-design-stickersheet.sketch](https://drive.google.com/open?id=1z09Ci7rjY-r5E6org7I6vbCLVPfx6WXF)  
> * [CMC Diseño Arquietctura.pptx](https://drive.google.com/open?id=1KGCXRDiZ0_Fnz1fX_oMrAWe53uSuV3ke)  
> * [CONSOLIDACION\_TOTAL\_MINUCIOSA.md](https://drive.google.com/open?id=1ZuaXI0rtI9iWIes2jB0kYPZHiI6IZu9v)

# **Pestaña 2**

El contenido de la carpeta se centra en el **Colegio Médico Colombiano (CMC)** y abarca temas de **visión general del producto, diseño de arquitectura, sistemas de diseño, y flujos de procesos (BPM)**, con un enfoque en la modernización tecnológica y la gestión de servicios para profesionales de la salud.

Los documentos detallan:

1. **Visión General del Producto y Objetivos (CMC Vision General.pptx)**:  
   * Propone un proceso de administración técnica de servicios para la construcción de aplicaciones del CMC.  
   * Los objetivos principales son: **Estandarizar**, **Mejorar Procesos** y **Soluciones**, y gestionar información a través del CMC.  
   * Busca una evolución en la infraestructura, arquitectura, consumo y visualización de servicios, siguiendo mejores prácticas y el uso de nuevas tecnologías.  
   * La necesidad tecnológica se basa en la actualización y el mantenimiento de servicios, e integrar aplicaciones externas ya que no existe un proceso que asegure la integración adecuada con estándares de diseño, desarrollo y documentación.  
   * Se busca integrar información del **Servicio Social Obligatorio (SSO)**, egresados de entidades académicas, y entidades públicas/privadas (Ministerio de Salud, Ministerios, Secretarías de Salud).  
   * El proceso de diseño y madurez se basa en un enfoque donde el 70% es "Pensar" y el 30% es "Ejecutar", abarcando desde la idea/requerimiento hasta los planes de servicio y soporte.  
   * Se mencionan los requisitos de negocio, de usuario y funcionales como parte del proceso de diseño.  
2. **Diseño de Arquitectura y Tecnología (CMC Diseño Arquitectura.pptx)**:  
   * La arquitectura propuesta es **multi-capa modificada** con capas de presentación, negocio, y acceso a servicios.  
   * Será orientada a objetos en el *backend* y por componentes en el *frontend*, buscando una comunicación de capas con bajo acoplamiento.  
   * Se utilizarán los *frameworks* **Spring Boot** para el *backend* (servicios atómicos y reutilizables) y **Angular** para el *frontend* (presentación y conexión), usando también TypeScript.  
   * Se plantean **tres ambientes** (producción, certificación y desarrollo/pruebas) para aislar el ambiente productivo y se sugiere el uso de **Docker** para la homologación de ambientes.  
3. **Sistemas de Diseño y Elementos (CMC SystemDesign Stickersheet.sketch y CMC-design-stickersheet.sketch)**:  
   * Estos archivos de Sketch (un formato de diseño) contienen la **Guía de Estilo** para el CMC, la cual busca definir herramientas, recursos y orientación para la creación de productos basados en la estandarización de materiales para WEB, iOS y Android, facilitando la usabilidad y accesibilidad.  
   * Incluyen elementos de diseño de interfaz (UI) como paletas de colores, estilos de tipografía, elevación, estados y componentes de Material Design.  
4. **Flujos y Procesos de Negocio (CMC FlowDoctor.overflow y CMC BPM.sketch)**:  
   * Detallan procesos clave como el **Servicio Social Obligatorio (SSO)** y la **Expedición de Tarjetas Profesionales (TP)**.  
   * **Proceso del Profesional de la Salud (SSO y TP)**: Se ilustra un flujo de usuario que incluye etapas de verificación de información personal, toma de *selfie*, documentos de soporte (identificación, SSO, diplomas, actas de grado, servicio militar), e identificación facial.  
     * Incluye la administración de información de contacto, residencia, formación académica, y laboral.  
     * Para el **SSO**, se muestra la consulta de plazas, la postulación (máximo 5 plazas) y la información detallada de la plaza.  
   * **Procesos de Administración**: Se visualiza la administración de entidades (Educación, Públicas/Privadas, Ministerios), usuarios, tarjetas profesionales (filtrado por universidad/nivel/programa) y la gestión de plazas SSO (creación, edición, eliminación, aprobación).  
   * Se describen los pasos para la legalización y aprobación de plazas por parte de Direcciones Departamentales/Distritales de Salud.  
   * También se incluye una sección de **Estadísticas y Reportes** sobre solicitudes activas, tarjetas expedidas y plazas.  
   * El documento de BPM modela las etapas del proceso, flujos de información y responsables, incluyendo la gestión de plazas, solicitudes y el estado del proceso.

