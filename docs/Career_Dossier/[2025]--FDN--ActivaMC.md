Esta carpeta consolida la auditoría técnica, el cumplimiento normativo y la gestión de calidad del portal de la Financiera de Desarrollo Nacional (FDN) realizada por **ActivaMC** durante 2025\.

### **Consolidado Minucioso de la Carpeta**

La documentación se divide en cuatro pilares técnicos fundamentales:

#### **1\. Diagnóstico de Accesibilidad (WCAG 2.2 & NTC 5854\)**

> * **Estado de Cumplimiento**: El portal cuenta con una certificación de Sep 16, 2024, para el nivel **AA de WCAG 2.1**. Sin embargo, auditorías recientes de 2025 identifican un "riesgo legal activo" debido al incumplimiento de los nuevos criterios de **WCAG 2.2**.  
> * **Fallas Críticas Identificadas**:  
  * **Contraste (1.4.3)**: Texto gris sobre blanco insuficiente en la sección de Transparencia.  
  * **Navegación por Teclado (2.1.1)**: Operación parcial y falta de foco visible en el Home.  
  * **Atributos ARIA (4.1.2)**: Ausencia de etiquetas técnicas en el logotipo y menús.  
  * **Formularios (3.3.1)**: Identificación deficiente de errores en la página de contacto.  
> * **Segmentación por Grupo de Página**: El análisis detallado en Segmentacion\_Estructura\_Accesibilidad.xlsx muestra que la sección "la-fdn" tiene el mayor volumen de elementos que cumplen (31 en teclado), mientras que "atencion-ciudadania" presenta las mayores fallas críticas en texto alternativo.

#### **2\. Rendimiento y Web Vitals (LCP)**

> * **Largest Contentful Paint (LCP)**: Se reporta un problema crítico donde el contenido principal tarda más de **2,5 segundos** en cargar.  
  * **Escritorio**: Máximo de 85 URLs afectadas en Jun 2025; la URL de "Quiénes Somos" promedia **3,5 segundos**.  
  * **Móvil**: Registra hasta 80 URLs con carga lenta en Ago 2025\.  
> * **Recomendación Técnica**: Implementar carga prioritaria de texto antes que imágenes y estilos para evitar pantallas en blanco.

#### **3\. Auditoría SEO y Estructura de Enlaces**

> * **Tráfico Orgánico**: Las consultas principales están dominadas por la marca "fdn" (1,234 clics) y "financiera de desarrollo nacional" (897 clics).  
> * **Autoridad (Backlinks)**: El Home posee una autoridad significativa con **49,646 enlaces entrantes** desde 175 dominios distintos.  
> * **Interconectividad**: El mapa del sitio y las páginas de contratos son los nodos con más enlaces internos (más de 150 c/u).

#### **4\. Seguridad y Gestión Administrativa**

> * **Alerta de Seguridad**: Se documentó un error de certificado SSL auto-firmado (MOZILLA\_PKIX\_ERROR\_SELF\_SIGNED\_CERT) que bloquea el acceso seguro de los usuarios.  
> * **Ejecución de Servicios**: El consultor Mauricio Gómez entregó 40 horas de acompañamiento UX en Sep 2025, cubriendo la auditoría de 654 incidentes WCAG.

### ---

**Identificación del Proceso Realizado**

> El proceso seguido para generar esta información fue una **Auditoría Transversal de Calidad Digital** compuesta por las siguientes fases:

> 1. **Recolección de Datos Automática**: Uso de herramientas como Google Search Console para SEO, y Lighthouse/LCP para rendimiento.  
> 2. **Auditoría Normativa Manual**: Verificación punto a punto de los criterios WCAG 2.1/2.2 y la Resolución 1519 de MinTIC mediante lectores de pantalla y navegación por teclado.  
> 3. **Análisis de Brechas (Gap Analysis)**: Comparación entre la certificación vigente (2024) y las nuevas exigencias de accesibilidad para 2025/2026.  
> 4. **Planificación de Remediación**: Creación de una matriz de mejoras técnicas priorizadas (Alta/Media/Baja) para ser ejecutadas por el equipo de desarrollo.  
> 5. **Gestión de Cumplimiento**: Documentación de la entrega mediante actas y cuentas de cobro para formalizar el cierre de la consultoría UX/Accesibilidad.

Fuentes:

> * [FDN | Certificado accesibilidad 2025](https://mail.google.com/mail/u/0/#all/198e353628821ac7)  
> * [Certificado de accesibilidad 2024.pdf](https://drive.google.com/open?id=1-QAJkY1pkYvHtyXj19RpDj6e3wCU9pJf)  
> * [De 12 a 6 meses en un flagship. ¿Así de rápido necesitan reinventarse? \[MauroGO\_ProductDEsign\]](https://mail.google.com/mail/u/0/#all/19ddfc6d9a92b309)  
> * [Matriz\_Accesibilidad\_WCAG\_NTC5854.xlsx](https://drive.google.com/open?id=136XNQV59g5waxqbqBzMujunM6zh2acWG)  
> * [Segmentacion\_Estructura\_Accesibilidad.xlsx](https://drive.google.com/open?id=1ydq6FOk15kSz5dGlNX-2N4rbgIOuPLsJ)  
> * [Ordenador Problema con LCP.xlsx](https://drive.google.com/open?id=1QFIqkVLKz0zsYn2CQG5GjOhsRS8B7AST)  
> * [Moviles Problema con LCP.xlsx](https://drive.google.com/open?id=1QbusurHexrEu87zli9mDutW-xAqH_f4q)  
> * [Análisis y resultados Accesibilidad 2025 \_ FDN.pptx](https://drive.google.com/open?id=1hDsWEI7jFDxB7QrUGOqgK_LbG6ieLbKf)  
> * [Rendimiento\_Paginas.xlsx](https://drive.google.com/open?id=1YVI9Wp0ZDSsDLw7149eiQr8i1qlxLplU)  
> * [Paginas externas.xlsx](https://drive.google.com/open?id=1KPAHFSLS4g9GUQjCLVKqgEYcFKDp_bEC)  
> * [Consolidado\_Completo\_Web\_Dashboard.xlsx](https://drive.google.com/open?id=1EaINccF1F3MIkE5KaU69fhMg9ArK0cHD)  
> * [Paginas internas.xlsx](https://drive.google.com/open?id=1-_iabAIam7w8RkG2Q0t3iXVe2nEvQi6n)  
> * [Screenshot 2025-09-09 at 11.13.48 AM.png](https://drive.google.com/open?id=1DnZBlAp9DxdYIWBs6aQoZ_MaFLh0-Qt5)  
> * [AMC OC 2025074 Mauricio Gómez UX septiembre 2025](https://mail.google.com/mail/u/0/#all/19a9846f7d82e12e)  
> * [Pantallazos Google Search Console.docx](https://drive.google.com/open?id=1gGAbZMMtb7n5w7hUUKo98MWgwQ6bziBn)  
> * [Checklist\_WCAG\_NTC\_Top20.xlsx](https://drive.google.com/open?id=1JUFM5iBf32b6G8QjAEs33CHbSV-rFHRl)  
> * [Auditoria\_100URLs\_WCAG\_NTC\_Tadwis.xlsx](https://drive.google.com/open?id=1_PxC-xDo3jKFlY2p5qP5zj4YB1O9hGLa)  
> * [Consolidado\_WCAG\_NTC\_Anexo\_100URLs.xlsx](https://drive.google.com/open?id=1pJ1wgkS2xyKy07LKWj-ngsbKh_aiX66e)  
> * [FDN Doc-Certificacion\_comparativa legal\_accesibilidad.xlsx](https://drive.google.com/open?id=1oW1-s4t0E3GLEvzL41XAQN24LIfh-3JC)