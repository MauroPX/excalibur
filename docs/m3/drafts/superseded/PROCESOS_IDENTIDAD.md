# Procesos de Identidad Profesional (Sync v1-v2)

## 0. Objetivo del Proceso
Garantizar que la identidad profesional del portafolio sea rescatada, validada y proyectada en el sistema v2 sin perder la tracción y profundidad identificadas en la versión original.

---

## 1. Flujo de Sincronización (M3 - Refactor)

| Fase | Acción Técnica | Método y Herramientas |
| :--- | :--- | :--- |
| **Análisis** | Auditoría de Identidad v1 | Lectura de `USER_TASKS_MATRIX` e identificación de hitos profesionales. |
| **Sincronización** | Inyección de Contexto v2 | Mapeo de datos a las nuevas tarjetas M3 (Identidad, Roles, Experiencia). |
| **Refactorizado** | Actualización de Reportes | Sincronización del `RESPONDE_ACTUAL` con los nuevos niveles de competencia. |

---

## 2. Protocolo de Recontextualización (T-04, T-06)

Cada dato extraído de la versión v1 debe seguir el **Principio de Identificación M3** antes de su integración en el nuevo sistema:

*   **Acción A: Descompresión de Historia:** El pasado no se copia, se resume. Extraemos los hitos relevantes y eliminamos cualquier detalle administrativo que no aporte a la identidad profesional v2.
*   **Acción B: Formalización de Roles:** Cada experiencia debe ser categorizada según su aplicación (Gestión, Desarrollo, Innovación) para alimentar el nuevo sistema de categorías del portafolio.

---

## 3. Registro de Datos Activo (Sync Status)

| Identificador | Datos Recuperados v1 | Estrategia de Inyección v2 | Estado |
| :--- | :--- | :--- | :--- |
| **Rol Profesional** | T-04 (Roles identificados) | Tarjetas de IDENTIDAD con etiquetas M3. | 🔄 EN_PROCESO |
| **Trayectoria Histórica** | T-06 (Línea de tiempo) | Componente de Experiencia Cronológica v2. | 🔍 PENDIENTE |
| **Acceso RP** | T-01, T-02 | Accesos directos a estudios de caso reales y métricas. | 💾 VALIDADO |

---

## 4. Acciones de Validación (Gate)
Para asegurar que la identidad profesional no se vea degradada durante el proceso:

1.  **Auditoría de Identidad:** Revisión por el IC para asegurar que cada t-acción corresponde a una habilidad real del portafolio v2.
2.  **Validación de Contexto:** Cada ID recuperado debe ser validado mediante su impacto en la experiencia del reclutador (UX).
3.  **Sincronización Final:** El proceso no se considera completado hasta que el `SYNC_ANALISIS` coincida con el registro actualizado en el portafolio v2.

---

## 5. Protocolo de Seguridad y Accesibilidad (E3)

*   **Cero Ruido:** Cualquier dato extraído debe ser procesado para eliminar redundancias antes de su inclusión en la visualización v2.
(Recién identidad profesional, no repetición de tareasv1).
*   **Acceso A11y:** Todo nuevo componente de Identidad Profesional (Timeline, Tarjetas) debe cumplir con el estándar WCAG 2.2 AA y ser compatible con la navegación por teclado-es-de-la-viña.

---
**Registro de Ejecución v2**
Identificado: Todos los Roles y Trayectorias identificadas en la t-matrix original.
Sincronizado: Procesos de extracción e inyección de datos.
Validado: El flujo de identidad profesional cumple con el diseño M3.
Aprobado por: Análisis de éxito parcial (T-04, T-06).
Acción Siguiente: Implementación del sistema de badges y tarjetas profesionales v2.
