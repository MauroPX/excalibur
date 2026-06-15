# BATTLECARD — TITAN v7.0 vs Herramientas del Mercado
Generada: 2026-06-14 · Autor: Leonel Mauricio Gómez Ocampo
Nivel IMMUTABILITY: Nivel C (snapshot — se versiona, no se edita in-place)

---

## 1. IDENTIDAD DE TITAN

| Campo | Valor |
|-------|-------|
| **Tipo** | Sistema de proceso de producto — no una herramienta |
| **Segmento objetivo** | Equipos de producto que construyen con IA y necesitan gobernanza real |
| **Propuesta de valor** | "El sistema que construye sistemas — y que opera sin el operador" |
| **Posición** | Por encima del stack de herramientas, no dentro de él |

---

## 2. LO QUE TITAN HACE QUE EL MERCADO NO HACE

### Proceso con gates irrevocables
El mercado (Jira, Linear, Notion) permite marcar DONE sin evidencia real. TITAN tiene **Momentum Gate Lock**: ningún equipo avanza al siguiente Momentum sin artefactos físicos firmados. El proceso no depende de la disciplina humana.

### Consejo adversarial de 5 modelos
Cursor y Copilot usan un modelo. TITAN usa 5 modelos con roles fijos y **Blind Review Mode**: el [INQUISITOR] audita sin saber quién construyó el artefacto. Un modelo no puede auditarse a sí mismo. El mercado no tiene equivalente.

### Trazabilidad SPEC→código
`SPEC_ITEM_ID → BLUEPRINT_SPEC → código → VERSION_CERTIFICATE → INTEGRITY_SHIELD`. Cada línea de código tiene una autorización verificable. En GitHub solo existe el PR description.

### Accesibilidad como gate, no como checklist
WCAG 2.2 AA es un gate **irrevocable** en BFL — no un paso opcional al final. `axe-core` corre en CI/CD. Sin CONFORMANCE_STATEMENT firmada no hay release. Ninguna herramienta del mercado lo enforce así.

### Compliance Colombia integrado
Ley 1581 + NTC 5854 no son documentos externos — son evidencias físicas dentro del proceso M0→M5, generadas y firmadas como parte del flujo normal de trabajo.

---

## 3. DEBILIDADES HONESTAS DE TITAN

| Debilidad | Por qué existe | Mitigación |
|-----------|---------------|------------|
| Curva de onboarding alta | 56 archivos, 180+ comandos, proceso completo | TITAN_RITUAL_GUIDE + pantalla `/titan` como punto de entrada |
| UX conversacional, no gráfica | Es un sistema de proceso, no un producto de UX | Se integra con IDEs y Claude.ai como interfaz |
| Requiere champion en el equipo | El valor se extrae con conocimiento del sistema | Propagation Protocol busca que el sistema se auto-sostenga |
| No plug-and-play con integraciones | n8n como capa de orquestación requiere setup | MEGA_10 documenta el proceso completo |

---

## 4. CÓMO GANAR FRENTE A LAS OBJECIONES FRECUENTES

**"Ya usamos Cursor y va muy bien"**
Cursor acelera la escritura de código. TITAN garantiza que ese código tenga spec, trazabilidad, accesibilidad verificada y no pueda ser modificado sin RFC. Son complementarios — TITAN usa Cursor como CRAFTSMAN en el Consejo BFL.

**"Jira hace lo mismo que los Momentums"**
Jira gestiona tickets. Los Momentums tienen gates bloqueantes: sin el artefacto físico firmado, el sistema no avanza. No es lo mismo cerrar un ticket que tener un SPEC_DOCUMENT con hash verificable.

**"Figma ya tiene gobernanza con branching"**
Figma branching controla versiones del archivo de diseño. TITAN controla versiones del componente vivo en código con COMPONENT_REGISTRY, CHANGE_RFC y VERSION_CERTIFICATE. El diseño y el código son la misma fuente de verdad.

**"Es demasiado proceso para un equipo pequeño"**
TITAN escala con el proyecto. M0→M2 es suficiente para un MVP. Los gates pesados (DAST, CONFORMANCE_STATEMENT, MIGRATION_DOC) solo activan en M3→M4. Un equipo de 2 personas puede operar TITAN en modo MVP sin activar Enterprise.

**"¿Por qué no simplemente usar Claude directamente?"**
Claude solo es el [ARCHITECT] en el Consejo. Sin el [INQUISITOR] (DeepSeek-R1), el [CRAFTSMAN] (Qwen 2.5 Coder), el [OBSERVER] (Gemini 2.0 Pro) y el [CONSULTANT] (GPT-4o), no hay revisión adversarial, no hay Blind Review y no hay Chain of Custody. Claude sin TITAN es un asistente muy bueno. Claude con TITAN es el sistema nervioso del producto.

---

## 5. NUESTRA VENTAJA DEMOSTRABLE

| Afirmación | Evidencia verificable |
|------------|----------------------|
| "Tenemos trazabilidad de cada decisión" | ADR firmados + TRACEABILITY_MATRIX.md + SPEC_ITEM_ID en cada PR |
| "Accesibilidad es un gate, no una promesa" | `axe-core` en CI/CD + CONFORMANCE_STATEMENT + NTC 5854 |
| "El proceso opera sin el fundador" | Propagation Protocol (script Python) + TITAN_RITUAL_GUIDE + GSD auto en LOCK |
| "Usamos IA con gobernanza" | TITAN_PROJECT.yaml + `/swarm status` PASS + INTEGRITY_SHIELD.json por componente |
| "Cumplimos con Colombia" | Ley 1581 + NTC 5854 como evidencias físicas en M4 |

---

## 6. LENGUAJE QUE USAMOS

**Usamos:**
- "Sistema de proceso de producto"
- "Gobernanza integrada"
- "Evidencia verificable"
- "Gate irrevocable"
- "Trazabilidad SPEC→código"
- "El sistema que opera sin el operador"

**Evitamos:**
- "Metodología ágil" (muy genérico)
- "Framework" a secas (suena a otra herramienta más)
- "Best practices" (sin evidencia es humo)
- "IA para todo" (TITAN orquesta IA, no es IA)

---

## 7. SEÑALES DE QUE EL PROSPECTO ES EL CLIENTE CORRECTO

- Ha tenido un bug crítico en producción por código sin revisión
- Tiene deuda técnica de accesibilidad acumulada
- Su equipo de diseño y código trabajan con versiones diferentes del DS
- Ha necesitado demostrar cumplimiento (Ley 1581, WCAG) y no tenía evidencias
- Quiere escalar el equipo pero teme que el proceso no escale con él
- Usa Claude/Cursor pero siente que no hay control sobre lo que se construye

---

## 8. COMPETIDORES DIRECTOS E INDIRECTOS

| Competidor | Tipo | Nuestra ventaja clara |
|------------|------|----------------------|
| Cursor + Copilot | Herramienta de código IA | No tienen Consejo adversarial ni trazabilidad de proceso |
| Jira + Notion | Gestión de proyecto | Sin gates bloqueantes, sin evidencias físicas verificables |
| Figma + Tokens Studio | Diseño + tokens | Sin gobernanza de componente en código, sin CHANGE_RFC |
| Consultoras de proceso | Servicio externo | TITAN es interno al equipo, no externo y caro |
| Storybook + Chromatic | DS en código | Sin BFL, sin Blind Review, sin SPEC_ITEM_ID |

---

## 9. CUÁNDO NO SOMOS LA SOLUCIÓN CORRECTA

- Equipo de 1 persona construyendo un prototipo rápido para validar → **usa Cursor directamente**
- Proyecto con fecha límite en 2 semanas sin posibilidad de onboarding → **no hay tiempo para M0**
- Empresa con proceso ISO certificado externo que no puede cambiarse → **integración posible pero compleja**

---

*TITAN v7.0 — BATTLECARD_MERCADO_v1.0.md*
*Próxima revisión: cuando haya un competidor nuevo relevante o cambio de posicionamiento*
*Owner: Staff Product Architect (Hub 1)*
