La carpeta **\[2026\]--FDN--ActivaMC** contiene la documentación estratégica y técnica para el proyecto de transformación digital de la **Financiera de Desarrollo Nacional (FDN)**.

La estructura completa de la información se divide en los siguientes ejes principales:

### **1\. Marco Estratégico y Legal**

> * **Objetivo**: Migración total y reestructuración del portal (estrategia *Brownfield*) para cumplir con la accesibilidad digital.  
> * **Hitos Críticos**:  
  * **Mar 2026**: Inicio del proyecto y publicación de la Declaración Transitoria.  
  * **Jun 30, 2026**: Fecha límite para cumplimiento **WCAG 2.1 Nivel AA** (Res. 1519 de 2020).  
  * **Sep 30, 2026**: Lanzamiento final (Go-Live).  
> * **Presupuesto (CAPEX)**: Entre $100,000 y $174,500 USD.

### **2\. Arquitectura y Stack Tecnológico (TITAN v5.0)**

> El nuevo portal reemplaza un sistema **Drupal 7** en riesgo crítico.

> * **Frontend**: Next.js 14 con despliegue en Vercel.  
> * **Backend/CMS**: Strapi v5 (Headless).  
> * **Base de Datos**: PostgreSQL 16 con extensión pgvector para soporte de IA.  
> * **Infraestructura**:  
  * **Cloudflare**: WAF activo, DNS y almacenamiento R2 para activos y documentos.  
  * **IA**: Claude API para implementación de motor RAG.  
> * **CI/CD**: Pipeline en GitHub Actions con 7 trabajos automatizados, incluyendo pruebas de accesibilidad (axe-core) que bloquean el despliegue si hay fallos críticos.

### **3\. Diagnóstico del Estado Actual (Legacy)**

> Análisis de rendimiento y accesibilidad realizados en **Feb 2026** sobre el portal actual:

> * **Rendimiento Crítico**:  
  * **Sección Participa**: LCP de **25.2s** (Performance: 25/100).  
  * **Problemas Comunes**: Respuesta lenta del servidor (TTFB \> 1.5s), imágenes sin optimizar y bloqueo del hilo principal.  
> * **Hallazgos de Accesibilidad**:  
  * **Productos y Servicios**: 117 incidencias (73 críticas).  
  * **Atención Ciudadanía**: 94 incidencias (47 críticas).  
  * **La FDN**: 83 incidencias (47 críticas).  
  * **General**: Ausencia de jerarquía ARIA correcta, errores en aria-labelledby y falta de contraste en textos sobre imágenes.

### **4\. Plan de Ejecución (Runbook)**

> El proceso se divide en 7 fases:

> * **Fase 1 (M0–M1)**: Setup de infraestructura, cuentas (Vercel, Railway, Cloudflare) y repositorios.  
> * **Fase 2 (M2)**: Definición de *Design Tokens* basados en Material Design 3 y firma de documentos técnicos.  
> * **Fase 3 (M3)**: Sprints de desarrollo y migración de contenidos.  
> * **Fase 4–5 (M4)**: Auditoría WCAG final y **Go-Live** mediante cambio de DNS (apuntamiento a Vercel).  
> * **Fase 6–7**: Post-lanzamiento, monitoreo de 72 horas y operación continua.

### **5\. Audiencias y Objetivos de Éxito**

> Se definieron 10 perfiles con un **Task Success Rate (TSR)** objetivo ≥ 85%:

> * **Prioridad P0**: Inversionistas (nacionales e internacionales), Ciudadanos (Ley 1712\) y Entes de control.  
> * **Accesibilidad**: Perfiles específicos para personas con discapacidad visual, auditiva, motora y cognitiva, asegurando compatibilidad con lectores de pantalla (NVDA, JAWS) y navegación por teclado.

Fuentes:

> * [FDN ProjectManifest v2 completo.docx](https://drive.google.com/open?id=1_JvVmtaLZHAbwh_787IrZjARbpo4EFDd)  
> * [FDN Deploy Runbook v1.docx](https://drive.google.com/open?id=16-MZHVRxhrB5c-Qc_PRnfRWIqUij3iCP)  
> * [6-Sec-participa--Part-1--Mov.pdf](https://drive.google.com/open?id=1Rweovs0SFQIzZf1AvNQdxZ1hIw4SPMfq)  
> * [3-Sec-Productos--Part-1--Mov.pdf](https://drive.google.com/open?id=127Y_9nqKq1tgxqR9KjUdMsCYUWweZ8V3)  
> * [3-Sec-Productos--Part-1--HD.pdf](https://drive.google.com/open?id=1s3fg-osjX0twu29w7TJjAOsu9Wnmd6Lq)  
> * [5-Sec-transparencia--Part-1--Mov.pdf](https://drive.google.com/open?id=1hKyWgbkqgpfepyZFb7po8m0yBw81vkdR)  
> * [productos\_servicios-sincontextoX\#--\[accessscan\].pdf](https://drive.google.com/open?id=1cWyf9cAfF97VCIZFuxG248dLJqQ28f9j)  
> * [atencion\_a\_la\_ciudadania--\[accesscan\].pdf](https://drive.google.com/open?id=1POJO-KLCY9onOU8DbT-mfxkY71PlzC0k)  
> * [lafdn--\[accesscan\].pdf](https://drive.google.com/open?id=1k78pI8j21kF5LA2g7BuBLRIMdbOclK2W)  
> * [3-Sec-Productos--Part-3--Mov.pdf](https://drive.google.com/open?id=1XmxhpD7LX9lREq3sh-2QAxSFZHqb9Ru5)  
> * [FDN--\[Revision\_Manual\]--1-a-1.pdf](https://drive.google.com/open?id=1J505y8ryAsvwKiyuAGefrIv3sEEqZTEM)