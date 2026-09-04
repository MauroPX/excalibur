# GSD TASK CARD - PORTAFOLIO RECONCILIACIÓN (V1 -> V2)

## PROJECT: EXCALIBER v2.0
**ID:** SYNC-001
**MOMENTUM:** M1 (Refactor / Consolidation)
**STATUS:** IN_PROGRESS
**REASON:** Inyección de datos heredados del portafolio original para asegurar coherencia profesional.

---

### OBJETIVO
Unificar la identidad y experiencia técnica de v1 con el sistema de diseño y arquitectura de v2 mediante una migración manual y consciente.

### REQUERIMIENTOS ACAPICADOS (Checklist)
- [ ] **Mapping Identificado:** Mapeo de los 3 roles clave identificados en `SYNC_ANALYSIS.md`.
- [ ] **Timeline Reconstruido:** Trazabilidad visual del crecimiento profesional basado en el CV original.
  *   **Acción:** El desarrollo de la línea de tiempo debe resaltar hitos de impacto (métrica, tecnología y rol).
- [ ] **Identidad Profesional:** Incorporar las categorías de habilidades v2 con los datos prácticos de v1.

### ESPECIFICACIONES DE DISEÑO (M3)
- **Componente:** Listado Dinámico de Identidad Professional.
- **BEM:** `.experience__timeline--vertical` / `.identidad_card`
- **Tokens:** Uso exclusivo de `primary-text`, `secondary-info` y `status-tag`.
- **A11y:** Navegación por teclado sin foco perdido, contraste 4.5:1 en texto regular y lectores de pantalla compatibles con ARIA roles.

---

### TAREAS DE EJECUCIÓN (Acciones)
| ID | Acción | Resultado Esperado | Registro |
| :--- | :--- | :--- | :--- |
| **A-01** | Extraer datos de competencia del `USER_TASKS_Matrix`. | Mapeo de roles e hitos. | Registro en `sync_report.md` |
| **A-02** | Construir el componente Timeline profesional. | Visualización cronológica de la carrera técnica. | Código y Design a producción. |
| **A-03** | Sincronizar las tarjetas de Rol/RC. | Actualización de los hitos del portafolio v2. | Registro en `sync_report.md` |

### VALIDACIÓN DE ÉXITO (Gate)
1.  **UX Review:** El usuario puede navegar la línea de tiempo y entender el crecimiento profesional sin fricción.
2.  **QA Check:** Los enlaces a los documentos/acciones funcionan correctamente.
3.  **Technical Audit:** Cero inconsistencias en las reglas de BEM y tokens M3.

---

**STATUS: IN_PROGRESS (Refactorización Activa)**
**PRIORIDAD:** CRITICAL (Impacto en Identidad Profesional)
