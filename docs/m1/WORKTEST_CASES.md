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

## Insumo base — Investigación de dominio: Guidewire InsuranceSuite

**Etiqueta:** 📚 Investigación autodirigida (construcción de conocimiento de sector) — **no es prueba encargada, ni cliente, ni implementación entregada**

### Qué es esto y qué NO es (Ethos — hay que ser explícito para no generar una impresión falsa)
Este es el trabajo de investigación de dominio que hiciste **antes** de Solidaria, para entender a fondo cómo opera el software estándar de la industria aseguradora (Guidewire InsuranceSuite: PolicyCenter, ClaimCenter, BillingCenter, APD) — no porque hayas implementado un proyecto sobre Guidewire para un cliente, sino porque necesitabas entender los patrones reales del sector antes de entrar a una entrevista y a un diagnóstico real (Solidaria). Se documenta aquí, separado de los casos de prueba, precisamente para no dar a entender una experiencia de implementación que no existió. Es la base de conocimiento, no un entregable de cliente.

### Alcance de la investigación (consolidado, sin recortar el trabajo real que representa)

**1. Marco metodológico integrado** — cuatro capas conectadas explícitamente: Domain-Driven Design (estratégica, para modelar Bounded Contexts), Double Diamond (procesual, para el ciclo de vida del producto), Design Ops (operativa, para escalar configuración) y Service Blueprint (visual, para mapear la experiencia end-to-end).

**2. Arquitectura de dominio (DDD) de Guidewire InsuranceSuite** — mapeo de APD (Advanced Product Designer) como *bounded context* upstream (fuente única de verdad de coberturas, tarifas y reglas de suscripción) y de PolicyCenter, ClaimCenter y BillingCenter como consumidores downstream, sincronizados pero desacoplados.

**3. Ciclo de vida completo de una póliza, en 7 fases con sus APIs** — adquisición/cotización, suscripción/aprobación, emisión/binding, facturación/cobro, endosos, siniestros (FNOL a cierre) y renovación/retención — cada fase con las APIs involucradas (InsuranceNow, PolicyCenter Cloud, ClaimCenter Cloud, BillingCenter Cloud, ContactManager, APD), sus variables críticas y los roles que aprueban cada paso (UWClerk, UWManager, ClaimsAdjuster, ClaimsManager).

**4. Service Blueprints y Empathy Maps** — mapeo frontstage/backstage/soporte del flujo de emisión de pólizas, y estados emocionales de cliente (estrés/vulnerabilidad en un siniestro) y empleado (frustración por reglas de bloqueo opacas), con la intervención de diseño correspondiente a cada estado.

**5. Diagnóstico técnico propio, con riesgos y mitigaciones** — por ejemplo: manejo de concurrencia en ediciones simultáneas (campo `_revision`, error 409), riesgo de discrepancia entre prima cotizada y facturada en la sincronización PolicyCenter→BillingCenter, y uso de Kafka/Composite API para evitar acoplamiento fuerte entre sistemas.

**6. Matriz de competencias asociada** — Arquitectura de Producto (DDD, System Design), Ingeniería de Integración (orquestación de APIs, arquitectura orientada a eventos), Diseño de Producto/UX (Service Design, Double Diamond), Gobernanza/DevOps (trazabilidad, RACI, CI/CD) y Lógica de Negocio Avanzada (algoritmos de tarifa, reglas de suscripción, expresiones FEEL).

### Cómo se usó realmente
No es un insumo de un solo caso — es una base de conocimiento de dominio (sobre todo para modelar con DDD) que aplica de forma transversal a todo trabajo en o adyacente al sector asegurador:
- **Solidaria** — te dio el vocabulario y los patrones reales (bounded contexts, ciclo de vida de póliza, roles de suscripción, lógica de siniestros) antes del diagnóstico; explica por qué pudiste identificar rápido la fragmentación de 7 dominios digitales y proponer una migración a arquitectura desacoplada sin partir de cero. Ver [[WORKTEST_CASES.md#Caso 2 — Solidaria Portal]].
- **FID Seguros (Chile)** — mismo dominio de negocio (seguros generales), reforzando el modelado DDD usado en la migración de OutSystems a MUI React.
- **BBVA — Pymes Inbound** — el tramo de contratación de seguros dentro de la digitalización E2E de Capital de Trabajo comparte el mismo lenguaje de dominio (coberturas, suscripción, emisión).
- **Procesos de entrevista en el sector asegurador** — base de conocimiento previa para llegar con criterio de dominio a conversaciones técnicas con aseguradoras (sin nombrar aquí ningún proceso específico en curso, por la misma regla de confidencialidad de §Gobernanza: no se declara nombre de empresa ni estado de un proceso de selección activo).

**og:description sugerida (si se muestra en portafolio):** `Investigación de dominio propia sobre Guidewire InsuranceSuite (el estándar de la industria aseguradora): arquitectura DDD, ciclo de vida de póliza en 7 fases y Service Blueprints — la base de conocimiento previa a mi diagnóstico de Solidaria, no una implementación de cliente.`

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
Demo desplegada y funcional — app conectada a datos reales de Traccar (demo4), no mockup estático. Evidencia pública (ver también §Publicación pública):
- Producción: `simon-v2-monitor-rmxm.vercel.app/?demo=true`
- Preview (Capas 2+3): `simon-v2-monitor-rmxm-git-feat-capa-2-lemaogo-9238s-projects.vercel.app`
- Repositorio: `github.com/MauroPX/simon-v2-monitor`
- Documentación técnica: `github.com/MauroPX/simon-v2-monitor/blob/feat/capa-2/docs/TECHNICAL_CHALLENGE_RESPONSE.md`
- Video (Loom): `loom.com/share/dc3ef2ab5fb84e9b8c52709b26b8f915`

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

## Caso 4 — [Codesa] Test — Estrategia de Investigación UX (Módulo de Pagos)

**Etiqueta:** 🔧 Prueba técnica — **Rol evaluado:** Diseñador/a UX Nivel 3 · **Plazo:** 7 días calendario (entrega 7 de julio 2026)

### Contexto de la prueba (del brief real)
Una entidad financiera reporta que su módulo de pagos tiene solo 28% de finalización y no existe investigación previa sobre por qué. El brief pedía explícitamente **estrategia de investigación, no pantallas ni prototipos**: análisis del problema, estrategia de investigación con metodologías justificadas, enfoque de priorización y recomendaciones. El uso de IA era una de 7 competencias evaluadas, con declaración obligatoria de qué herramienta se usó, en qué parte del proceso, y cómo se validó.

### Qué se entregó y qué se decidió mostrar (Ethos — honestidad sobre el propio proceso)
La entrega completa tiene 139 páginas, pero no todo tiene el mismo nivel de calidad ni el mismo propósito, y aquí se documenta así en vez de presentarlo como un bloque uniforme:
- **~120 páginas de research crudo** (recolección inicial de datos vía IA): esto fue un insumo de trabajo interno, no un entregable pulido — tiene formato de citas roto, estadísticas duplicadas y fragmentos de proceso sin limpiar. No se usa como evidencia de portafolio; se documenta su existencia por transparencia, no su contenido.
- **17 páginas finales ("Entregable 1 — Documento Estratégico de Investigación UX")**: el entregable real, estructurado y de alta calidad, que es la base de este caso.

### El entregable real (Logos)
Un documento estratégico completo: tabla de actores/supuestos/riesgos, 5 hipótesis fundamentadas en marcos teóricos (Self-Determination Theory, Calm Technology, Design with Intent de Dan Lockton), selección de metodología mixta (analítica de funnel vía PostHog/Amplitude, grabación de sesiones con Hotjar, análisis heurístico, 5 entrevistas contextuales vía Dovetail, 5 pruebas de usabilidad moderadas vía Maze, encuesta CES), priorización con Opportunity Solution Tree + RICE modificado con ejes de Confianza e Inclusión, perfil de participantes inclusivo (gama baja Android, conectividad rural, baja visión, baja alfabetización digital), plan de ejecución de 4 fases día a día, recomendaciones diferenciadas por audiencia, esquema de tracking analítico, y métricas de éxito estilo OKR.

### Uso de IA — declarado explícitamente tal como aparece en la entrega
Herramienta: "TITAN Research Intelligence Skill v5.1". Etapas donde se usó: clasificación de datos, Evidence Cards, formulación de hipótesis, estructuración del plan, diseño del tracking plan. Validación declarada: "triangulación con marcos teóricos... revisión iterativa... coherencia interna vía IDs de trazabilidad". Principio ético declarado explícitamente en el documento: "cero alucinaciones — no se presentó ningún dato como real sin declarar que era una proyección". Cierre del propio documento: *"El TITAN Skill no reemplazó el criterio humano: lo estructuró, lo aceleró y lo mantuvo alineado con la evidencia. Cada decisión que presentamos aquí pasó por el filtro del skill y por la validación del equipo."*

**og:description sugerida:** `Prueba técnica de investigación UX (7 días, sin pantallas pedidas): estrategia completa con 5 hipótesis fundamentadas en marcos teóricos, metodología mixta y priorización RICE+Inclusión — con declaración transparente de uso de IA como parte evaluada del proceso.`

*(Nota de método — por qué se documenta así: el brief pedía transparencia sobre IA como competencia evaluada, así que mostrar la declaración de uso de IA tal cual aparece en la entrega es coherente y no debilita el caso — al contrario, es evidencia de proceso honesto. Lo que sí debilitaría el caso es presentar las ~120 páginas de research sin editar como si fueran el entregable: por eso el caso se construye solo sobre las 17 páginas finales, y el research crudo se menciona como paso de trabajo, no como resultado.)*

---

## Publicación pública — evidencia de autoría (LinkedIn + fecha)

**Por qué esto importa:** estas pruebas implicaron investigación y trabajo real. Publicarlas con URL propia y fecha, declarando explícitamente que son ejercicios de evaluación y no un encargo remunerado, deja un registro público de autoría — quien lo lea después sabe, por tus propias palabras y con timestamp, que esto no fue trabajo cedido a la empresa evaluadora. *(Nota: esto ayuda a dejar evidencia pública de autoría, pero no es asesoría legal — no soy abogado. Si te preocupa el uso indebido de un caso puntual, vale la pena revisar los términos que aceptaste al tomar esa prueba específica, sobre todo si hubo algún acuerdo firmado.)*

Fórmula común para el texto de LinkedIn de cada caso: **(1)** qué era el reto, **(2)** que fue una prueba de selección — no un encargo pagado, **(3)** qué decidiste y por qué, **(4)** el link.

### Caso 1 — FleetControl
- **Estado:** ✅ listo para publicar — URLs verificadas.
- Producción: `simon-v2-monitor-rmxm.vercel.app/?demo=true` · Preview: `simon-v2-monitor-rmxm-git-feat-capa-2-lemaogo-9238s-projects.vercel.app` · Repo: `github.com/MauroPX/simon-v2-monitor` · Video: `loom.com/share/dc3ef2ab5fb84e9b8c52709b26b8f915`
- **Texto sugerido:**
  > Prueba técnica de Design Engineer: construir un monitor de flota en tiempo real sobre la API real de Traccar (GPS open-source). Ejercicio de evaluación de un proceso de selección, no un encargo remunerado — lo comparto por las decisiones que documenté en el camino: por qué polling + interpolación en vez de WebSocket, por qué Zustand y no Context, y qué generó la IA vs. qué corregí yo manualmente (documentado explícitamente, no oculto). Demo, repo y video técnico en los comentarios.

### Caso 2 — Solidaria Portal
- **Estado:** ✅ listo para publicar — URLs completas, con demo navegable.
- **Nota (distinta a los otros 3 casos):** aquí NO aplica la fórmula "prueba de selección, no encargo remunerado" — es un diagnóstico que hiciste por iniciativa propia antes de una entrevista. El texto debe decir eso. Aplica también el filtro de confidencialidad de la sección de Gobernanza (no revela nombres de entrevistadores, cifras internas ni estado del proceso).
- **Cómo recorrerlo:** portal en producción con demo guiada — botón "¿Cómo funciona?" (tour) en la landing; login con `maria@ejemplo.com` + OTP `123456`; tour automático dentro del portal por pólizas, siniestros, PQRS y pagos.
- **Evolución V1 → V2 (documentada y trazable, no un rediseño — la misma arquitectura evolucionando por capas):**

| Versión | URL | Commit | Contenido |
|---|---|---|---|
| V1 — baseline sellada | `solidaria-portal-c424owwv2-lemaogo-9238s-projects.vercel.app` | `c75a74f` | Landing + Auth SSO + Portal básico + Storybook inicial (7 componentes) |
| V2 — producción actual | `solidaria-portal.vercel.app` | `812ff9b` | + Material Symbols, logo oficial, tour guiado, login rediseñado, detalle de póliza, tokens dark mode |

- **Rutas de feature (V2, todas bajo `solidaria-portal.vercel.app`):** `/` (landing con tour) · `/login` (SSO + OTP) · `/mis-polizas` (dashboard) · `/mis-polizas/POL-HOG-2024-4521` (detalle) · `/cotizar/hogar` y `/cotizar/mascotas` (cotizador 4 pasos) · `/siniestros/reportar` y `/siniestros/consultar` (tracker unificado, reemplaza los 2 trackers fragmentados del hallazgo original) · `/pqrs/radicar` y `/pqrs/consultar` (4 tipos, Defensor del Consumidor SFC visible) · `/pagos` y `/pagos/confirmacion` (PSE + tarjeta).
- **Sistema de diseño:** Storybook/Chromatic en `6a2d61bf2ded342d004f1b8f-gjmdfbfoac.chromatic.com` — 8 átomos con overview, tokens, guidelines de uso, criterios WCAG 2.2 AA y skeleton para lazy load. Tokens de color generados algorítmicamente desde el azul de marca (#004173) en espacio HCT de Material Design 3, con contraste AA verificado en light y dark mode.
- **Repositorio:** privado (`github.com/MauroPX/solidaria-portal`) — no se enlaza como acceso público, solo se menciona que existe y está versionado.
- **Arquitectura desacoplada (ya verificable, no solo declarada):** el portal corre hoy sobre datos mock — conectar el backend real de Solidaria sería un cambio de variable de entorno, el frontend no cambia.
- **Texto sugerido (LinkedIn):**
  > Antes de una entrevista con una aseguradora real, hice mi propio diagnóstico: audité sus 7 canales digitales (sitio, portal cliente, pasarela de pagos, 2 trackers de siniestros distintos, PQRS, programa de lealtad) — todos operando como experiencias separadas, sin identidad unificada. No fue un encargo, fue preparación propia. Construí una propuesta de arquitectura desacoplada para demostrarlo: Design System con tokens generados algorítmicamente en HCT/MD3, 212 tests, 0 violaciones de accesibilidad, WCAG 2.2 AA. Portal navegable y Storybook en los comentarios.

### Caso 3 — BCS
- **Estado:** ✅ listo para publicar — URLs verificadas.
- App: `bcs-frontend-web-app.vercel.app` · Storybook: `bcs-frontend-web-app.vercel.app/storybook/?path=/docs/bienvenida-introducción--docs`
- **Texto sugerido:**
  > Prueba técnica de Diseño de Interfaz para Banco Caja Social (2 días, solo pedían un archivo Figma). Ejercicio de evaluación de un proceso de selección, no un encargo remunerado — entregué eso más un Design System de 34 roles M3 en 6 esquemas de color, un monorepo con Storybook/Chromatic, y una auditoría automática de 66 verificaciones de contraste WCAG. App y Storybook en los comentarios.

### Caso 4 — Codesa
- **Estado:** ⏳ pendiente — falta definir qué se publica (sin URL de app; a decidir si se cita solo el documento estratégico final, sin link ejecutable, dado que el brief no pedía código ni pantallas).

---

## Gobernanza — filtro de confidencialidad (aplicar a Codesa y BCS también)

Antes de publicar cualquier caso derivado de un proceso de selección real, filtrar siempre:
1. **Nombres de personas** que entrevistaron o evaluaron — nunca van, así sean mencionados con elogio.
2. **Datos internos compartidos verbalmente/por confianza** durante el proceso (cifras de negocio, conversión, roadmap interno) — si el entrevistador te lo confió, no es tuyo para publicar.
3. **Estado del proceso de selección** (cuántos candidatos, en qué ronda, si avanzaste o no) — es información del proceso, no del trabajo técnico.
4. **Hipótesis propias vs. datos confirmados** — toda cifra que no sea 100% pública o de tu propio cálculo debe declararse explícitamente como supuesto, nunca presentarse como dato verificado.

Lo que sí es publicable sin restricción: el trabajo técnico en sí (código, decisiones, arquitectura, resultados de tests/accesibilidad) y cualquier hallazgo basado en información pública verificable (sitios web reales, reguladores, LinkedIn público).

---

📍 Momentum: M1 | Artefacto: WORKTEST_CASES | Nivel: A (borrador, 4/4 casos completos + 1 insumo base de investigación)
Fuente: `Casos--[WorkTest]` (carpeta local conectada 2026-09-06)
Generado: Claude Code (rol Arquitecto) | 2026-09-06
