# WORKTEST_CASES.md
# EXCALIBUR v2.0 — Casos de pruebas técnicas (work tests)
# TITAN v7.0 | M1 | 2026-09-06
# Nivel: A (borrador — primer caso completo, 2 pendientes)
# Fuente: extracción real de la carpeta local `Casos--[WorkTest]`

---

**Resumen en 3 líneas (regla DIS-E3):**
- Estos son casos de **pruebas técnicas de procesos de selección**, no de clientes reales pagados — se etiquetan y se muestran por separado, según lo acordado en `CONTENT_COPY_STRATEGY.md §"pruebas vs experiencia"`.
- Ninguna métrica aquí es de negocio (no hubo negocio real) — son de **capacidad demostrada**: alcance resuelto, calidad técnica, criterio de decisión bajo restricción de tiempo.
- Primer caso completo: FleetControl. Solidaria y Codesa quedan como próximos — Solidaria por tamaño de repo, Codesa por volumen de PDFs (4 documentos + research de 7,191 líneas).

---

## Caso 1 — FleetControl (Monitor de Flota en Tiempo Real)

**Etiqueta:** 🔧 Prueba técnica — **Rol evaluado:** Design Engineer (UX/UI)

### Contexto de la prueba
Construir una SPA conectada a la API real de Traccar (plataforma de tracking GPS open-source) para monitorear la ubicación de un vehículo en tiempo real, incluyendo estados de carga, error y datos en vivo.

### Decisiones técnicas y su razón (evidencia real — no reconstruida, viene del propio README)

| Decisión | Por qué (tal como está documentado) |
|---|---|
| `<dl><dt><dd>` en la tarjeta de estado, no `<div>` anidados | Es la forma semánticamente correcta de pares etiqueta-valor — un lector de pantalla anuncia "Velocidad: 84.5 km/h" como una unidad coherente |
| Polling de 5s + interpolación con `requestAnimationFrame`, no WebSocket | Netlify Functions no soporta WebSockets nativos; la interpolación logra el mismo efecto visual (movimiento suave) sin la complejidad de un servidor adicional |
| Zustand en vez de Context | El polling actualiza 12 veces por minuto — con Context, cada actualización re-renderiza todo el árbol; con Zustand solo los componentes suscritos al slice exacto |
| Estado de error con "última posición conocida" | Cuando el polling falla, se mantiene el último dato conocido con opacidad reducida (0.6 + escala de grises), banner con `role="alert"` y foco automático en "Reintentar" — en vez de simplemente mostrar un error genérico |

### Accesibilidad lograda (WCAG 2.1 AA, verificado con axe DevTools)
Navegación 100% por teclado, `prefers-reduced-motion` en todas las animaciones, contraste mínimo 4.5:1 en ambos modos, `aria-live="polite"` en la tarjeta de estado, skip link al contenido principal.

### Uso de IA — declarado explícitamente (transparencia, no mérito oculto)
La IA (Claude Sonnet) generó el hook de autenticación base, el layout inicial y la función de interpolación de coordenadas. Correcciones manuales documentadas:
1. La IA generó la tarjeta de estado con `<div>` anidados → corregido a `<dl><dt><dd>` por semántica WCAG 1.3.1.
2. La IA movía el marcador con `setLatLng()` directo → reemplazado por interpolación `requestAnimationFrame` para movimiento suave.
3. La IA no implementó `prefers-reduced-motion` → añadido manualmente en cada animación.

*(Nota de método: este tipo de transparencia sobre uso de IA es un diferenciador real frente a otros candidatos — pocos lo documentan así. Vale la pena mantenerlo visible en el portafolio, no ocultarlo.)*

### Resultado verificable
Demo desplegada y funcional: `simon-v2-monitor.netlify.app` — app conectada a datos reales de Traccar (demo4), no mockup estático.

**og:description sugerida:** `Prueba técnica de Design Engineer: monitor GPS en tiempo real sobre Traccar, con decisiones documentadas (por qué polling y no WebSocket, por qué Zustand) y transparencia total sobre qué generó la IA y qué corregí manualmente.`

---

## Caso 2 — Solidaria Portal

**Etiqueta:** 🔍 Diagnóstico autodirigido (preparación de entrevista) — **no es prueba encargada ni cliente pagado**

### ⚠️ Nota de confidencialidad (aplicada en esta versión — ver §Gobernanza al final)
La fuente original (`GSD_TASK_CARD_M0_SNAPSHOT.md`) contiene información de un proceso de selección real: nombres de las personas que te entrevistaron, una cifra interna de conversión que un entrevistador te confirmó de forma confidencial ("635 solicitudes → 60 conversiones"), y el estado exacto de ese proceso. **Nada de eso está incluido abajo ni debe publicarse nunca.** Solo se usa lo verificable públicamente (los 7 dominios digitales, visitables por cualquiera) y tu propio trabajo técnico.

### Contexto real
Hiciste este diagnóstico por iniciativa propia — **Solidaria no lo encargó** — como preparación previa a una entrevista, para llegar con conocimiento real de sus canales digitales, su uso actual y sus condiciones técnicas, en vez de opiniones genéricas.

### Hallazgo (verificable visitando los sitios reales de Solidaria)
7 dominios digitales operando sin identidad ni sesión unificada: sitio principal, portal cliente, pasarela de pagos, dos trackers de siniestros distintos (hogar y autos), radicación de PQRS, y programa de lealtad — cada uno como una experiencia separada.

### Benchmark de industria (Ethos válido — fuente pública del gremio asegurador)
NPS estimado actual: 41 vs. objetivo propuesto de 65 en 12 meses. No es un dato confidencial de la entrevista ni una hipótesis sin sustento: son cifras puntuales publicadas por el gremio asegurador — una fuente de evidencia válida según el propio criterio de Ethos de TITAN (benchmark verificable de la industria). Se puede citar como tal, con la fuente del gremio declarada junto al dato.

### Qué se construyó (Logos)
Una migración conceptual de arquitectura monolítica (CMS Azure Blob sirviendo HTML + datos + lógica juntos) a una arquitectura desacoplada: core asegurador → API REST → Next.js, con Design System de componentes MD3 independiente del backend, y modo mock intercambiable por datos reales con un solo cambio de variable de entorno.

**Resultado verificable:** portal desplegado en producción (`solidaria-portal.vercel.app`), Design System documentado en Storybook/Chromatic, 212 tests con 0 violaciones axe, WCAG 2.2 AA. Metodología aplicada: TITAN v7.0 completo — M0 (Service Blueprint + Pain Points), M1 (User Tasks Matrix + Strategy Brief), M2 (Spec Document + tokens MD3), M3 (10 módulos, tests, CI/CD).

**og:description sugerida:** `Diagnóstico autodirigido de los 7 dominios digitales fragmentados de una aseguradora real, seguido de una migración conceptual completa a arquitectura desacoplada con Design System propio — 212 tests, 0 violaciones axe, WCAG 2.2 AA.`

*(Nota: la og:description evita nombrar a Solidaria directamente para no insinuar una relación con la empresa que no existió — decide con el resto del contenido si prefieres nombrarla igualmente, dado que la auditoría es de información pública.)*

---

## Caso 3 — BCS (Banco Caja Social) — Plataforma de Metas Financieras

**Etiqueta:** 🔧 Prueba técnica — **Rol evaluado:** Diseñador/a de Interfaz de Usuario UI · **Duración del brief:** 2 días calendario + sustentación de 30 min

### Contexto de la prueba (del brief real entregado por la empresa)
Banco Caja Social pidió diseñar el MVP de una plataforma para ayudar a personas de 25-40 años a organizar metas financieras e iniciarse en inversión personal. El brief exigía solo un archivo Figma editable, un Design System base y un prototipo navegable — **nada de código**.

### Dónde superaste el alcance pedido (Logos)
El brief solo pedía Figma. Construiste, además:
- Un Design System de 34 roles M3 en **6 esquemas** (light/dark × base/medium-contrast/high-contrast) desde 3 seeds HCT independientes (Primary `#0063A7`, Secondary `#2D4550`, Tertiary `#97D3B8`).
- Un monorepo real (`tokens`, `ui-atoms`, `web-app`) con Storybook desplegado en Chromatic y CI en GitHub Actions.
- Un script de auditoría de contraste que corre **66 verificaciones automáticas** (11 pares oficiales M3 × 6 esquemas), exigiendo AA en base/medium-contrast y AAA en los esquemas high-contrast — verificado campo a campo contra el export oficial de Material Theme Builder.

### Disciplina de proceso (Ethos — evidencia de cómo trabajas, no solo qué entregaste)
El propio checklist de proyecto declara desde el inicio "ejercicio de evaluación/portafolio, no engagement real con BCS" y aplica una regla de **cero alucinación**: todo dato de mercado/regulatorio se cita con fuente verificable (Ley 1328 de 2009, Estatuto Tributario AFC/FPV) o se marca `[VERIFICAR]` si no se pudo confirmar. Cuando una verificación independiente (script Python con `materialyoucolor`) reveló que un diagnóstico propio inicial era incorrecto, quedó corregido y declarado como tal — no se ocultó el error.

### Metodología aplicada
TITAN v7.0 completo: M0 (contexto + DPC), M1 (Tech Watch Report + Evidence Cards + Benchmark contra Nequi, Tyba, Trii, Daviplata, Mint, Betterment, YNAB, Robinhood, Wealthfront), M2 (Opportunity Brief + 3 iteraciones de wireframes hasta la especificación final de 7 vistas con IDs de trazabilidad), M3/M4 (ciclo Blueprint→Forge→Lock sobre el Design System real).

**og:description sugerida:** `Prueba técnica de Banco Caja Social (2 días, solo Figma pedido): entregué eso más un Design System de 34 roles en 6 esquemas, un monorepo con Storybook/Chromatic, y una auditoría automática de 66 verificaciones de contraste WCAG.`

*(Nota de confidencialidad: el brief en sí es el documento estándar que la empresa entrega a cada candidato — no es información privada de una conversación de entrevista, así que es seguro citarlo textualmente. No encontré nombres de evaluadores ni retroalimentación confidencial en estos archivos — a diferencia de Solidaria, aquí no hubo que filtrar nada.)*

---

## Caso 4 — [Codesa] Test (pendiente de estructurar — el más grande)

4 PDFs (documento estratégico, pitch deck, la prueba original, tu entrega final) + un research propio de 7,191 líneas + una aplicación completa construida como parte de la entrega (`llm-council`, con backend y frontend). Requiere una pasada de extracción de PDFs dedicada — no lo hice todavía para no gastar la sesión en una lectura completa sin confirmar antes que quieres ese nivel de detalle para este caso.

---

## Gobernanza — filtro de confidencialidad (aplicar a Codesa y BCS también)

Antes de publicar cualquier caso derivado de un proceso de selección real, filtrar siempre:
1. **Nombres de personas** que entrevistaron o evaluaron — nunca van, así sean mencionados con elogio.
2. **Datos internos compartidos verbalmente/por confianza** durante el proceso (cifras de negocio, conversión, roadmap interno) — si el entrevistador te lo confió, no es tuyo para publicar.
3. **Estado del proceso de selección** (cuántos candidatos, en qué ronda, si avanzaste o no) — es información del proceso, no del trabajo técnico.
4. **Hipótesis propias vs. datos confirmados** — toda cifra que no sea 100% pública o de tu propio cálculo debe declararse explícitamente como supuesto, nunca presentarse como dato verificado.

Lo que sí es publicable sin restricción: el trabajo técnico en sí (código, decisiones, arquitectura, resultados de tests/accesibilidad) y cualquier hallazgo basado en información pública verificable (sitios web reales, reguladores, LinkedIn público).

---

📍 Momentum: M1 | Artefacto: WORKTEST_CASES | Nivel: A (borrador, 3/4 casos completo — Codesa pendiente)
Fuente: `Casos--[WorkTest]` (carpeta local conectada 2026-09-06)
Generado: Claude Code (rol Arquitecto) | 2026-09-06
