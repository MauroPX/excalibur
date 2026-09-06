La carpeta **\[2025\]--SI-CLO\_Convenios** documenta de forma minuciosa el diseño, la arquitectura de datos y las reglas comerciales del sistema **SI-CLO**, enfocado en la **Gestión Integral de Convenios de Libranza**.

### **1\. Detalle Minucioso de la Estructura (UI/UX y Datos)**

> El sistema centraliza la administración de organizaciones y sus acuerdos comerciales mediante los siguientes componentes:

> * **Gestión de Organizaciones (Maestros)**:  
  * **Tabla Única**: Utiliza la tabla organizaciones para unificar Clientes y Entidades, diferenciándolos por el campo tipo\_organizacion.  
  * **Validaciones Críticas**: El NIT debe ser único y el campo "Segmento" es obligatorio solo para Clientes (ej: Pensionados, Docentes, Fuerzas Militares).  
  * **Vínculo de Personas**: Permite asociar personas a organizaciones con cargos específicos (ej: Gerente Comercial), validando que la combinación de documento y correo sea única.  
> * **Wizard de Creación de Convenios (6 Pasos)**:  
  1. **Info General**: Selección de Cliente/Entidad y asignación automática del segmento.  
  2. **Renovación**: Configura periodicidad y mes de renovación (ej: Anual en Mar).  
  3. **Responsables**: Asigna roles (Comercial, Legal) a personas vinculadas.  
  4. **Tipos de Contrato**: Define aplicabilidad, si es sujeto a crédito y antigüedad mínima (ej: 12 meses).  
  5. **Rubros**: Configura ingresos (sumar) y deducciones (restar) como Salud EPS o Reajuste.  
  6. **Documentos**: Carga de archivos requeridos (RUT, Cámara de Comercio).  
> * **Gestión de Estados y Ciclo de Vida**:  
  * **Borrador**: Guardado parcial para evitar pérdida de datos.  
  * **Pendiente**: Espera aprobación tras completar campos obligatorios.  
  * **Activo**: Convenio vigente; los documentos se bloquean para edición.  
  * **Vencido/Inactivo**: Cambio de estado automático por fecha o manual por administrador.

### **2\. Identificación del Proceso Realizado**

> El proceso documentado corresponde al **Diseño y Estandarización de la Originación de Crédito por Libranza**. Se identifica una transición de un manejo manual (basado en matrices de Excel) hacia un **Sistema de Información (SI-CLO)** automatizado que realiza:

> * **Automatización de Reglas de Negocio**: Sustituye la consulta manual en la "Matriz Comercial" por una lógica programada que filtra tipos de contrato, rubros y documentos según el segmento del cliente.  
> * **Control de Riesgo y Operación**:  
  * **Visación**: Define flujos específicos para obtener el aval de la pagaduría (ej: Alcaldía de Barranquilla vía web vs. Bucaramanga presencial).  
  * **Cálculo de Capacidad**: Aplica la metodología de la Ley 1527: (Ingreso Computable \- Descuentos de LEY) / 2 \- Otros Descuentos.  
  * **Validación de Riesgo**: Restringe el otorgamiento a clientes con riesgo "Z" y establece montos máximos (generalmente $100M).  
> * **Gestión Post-Creación**: Incluye un "Job Diario" para detectar vencimientos y disparar notificaciones automáticas de renovación.

Fuentes:

> * [\[SI\_CLO}--Convenio & \[Libranzas\] \-- Match\_Panels \[DB--UI\].png.pdf](https://drive.google.com/open?id=1I1WhxddlJOkEsnamoxpXzuhbONo6GIry)  
> * [SI \- CLO Estructura Datos UI.xlsx](https://drive.google.com/open?id=1PzekXEhjUY2eo_sFKlMtc8RyGcKWgqGE)  
> * [2.2. Flujo 2 \- Creación y Gestión de Convenios.png](https://drive.google.com/open?id=1yLuJja9jVlfjbP6HFY_YWnpmGOT9LH0A)  
> * [3.2. Flujo UI \- Formulario Nueva Organización.png](https://drive.google.com/open?id=1uP4fUWFCZJaacJ0Tt_3IgY5ro50_Tyud)  
> * [1\. Flujo Administración de Maestros (Organizaciones y Personas).png](https://drive.google.com/open?id=1Y2edjuN-4lzUAE76xlDNfkoEQ3mKJg_N)  
> * [2\. Flujo Creación de Convenio (El Wizard).png](https://drive.google.com/open?id=1XV1FhNk3rwCK2vJgs9H7d6Ym6nTRA9Vt)  
> * [Screenshot 2025-11-12 at 12.05.00 PM.png](https://drive.google.com/open?id=1Zje47eVo7varjutbcXeCfBrc6NNs-tEB)  
> * [Screenshot 2025-11-12 at 12.04.10 PM.png](https://drive.google.com/open?id=11yqHhFLF1NeM4jMbCByiTIy-ElGfR9cr)  
> * [Screenshot 2025-11-12 at 12.03.47 PM.png](https://drive.google.com/open?id=1oufWE8PSyrbQ0QoII8NMPksZV8Y4ht4g)  
> * [Screenshot 2025-11-12 at 12.04.41 PM.png](https://drive.google.com/open?id=1882GWRN59O0KphOQ44AqL5cL8K0u_3DY)  
> * [3.7. Flujo UI \- Formulario Convenio (Retomando Borrador).png](https://drive.google.com/open?id=1QNPodGLtnvCBDMwosjJ3nqnSXb5brgrx)  
> * [3\. Flujo UI \- Gestión de Convenio (Aprobación, Rechazo y Notificación).png](https://drive.google.com/open?id=16INnxn0cGTfgeb_UuP6_0RPg4wAzdiD3)  
> * [2.4. Flujo 4- Cambio de Estado Automático del Convenio (Backend Job).png](https://drive.google.com/open?id=1vX992eJYifKcMqAGZO0WCSDv0_Bd9XmW)  
> * [\[SI-CLO\] \- Flujo de Datos y UI.png](https://drive.google.com/open?id=1sHCLYbp2PO29oJh7UbI8QEZJi8N8T6ca)  
> * [Matriz Comercial de Convenios Libranza finauro.xlsm \- Matriz Comercial.csv](https://drive.google.com/open?id=1xsX0xVgjnkcKlvhuKXhawBXDxxgbVWEL)  
> * [Matriz Comercial de Convenios Libranza finauro.xlsm \- Matriz Comercial.csv](https://drive.google.com/open?id=1TuexLBUUZNDd6jPLnvK-KFRKCAXPvUnE)  
> * [COMUNICADO Cotizador de libranza.png](https://drive.google.com/open?id=1EHlDSjdmh1Hfy5jRZ1zR3qW8Vw9xeIC-)