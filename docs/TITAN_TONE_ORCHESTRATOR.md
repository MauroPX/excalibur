# TITAN — TONE ORCHESTRATOR
**Orquestador de tono y audiencia para textos del portafolio profesional**
Versión: 1.0 | Junio 2026 | Leonel Mauricio Gómez Ocampo · Staff Product Architect

> Este archivo no es contenido — es el sistema que audita y genera contenido.
> Cargar antes de escribir o revisar cualquier texto del portafolio.

---

## PROPÓSITO

Cualquier texto del portafolio (página web, caso de estudio, descripción de proyecto,
LinkedIn, bio, pitch) debe pasar por este orquestador antes de publicarse.

Dos usos:
- **Generación**: usar como contexto al pedirle a TITAN que escriba un texto nuevo.
- **Auditoría**: usar como checklist para revisar un texto existente antes de publicarlo.

---

## LAS 3 AUDIENCIAS Y SU MENTALIDAD

### Audiencia 1 — Cliente potencial / prospecto
**Perfil**: CTO, Director de Producto, Founder. Tiene un problema real y poco tiempo.
**Pregunta que tiene en mente**: "¿Puedo confiarle mi producto a esta persona? ¿Ha hecho esto antes?"
**Qué lo convence**: Un resultado medible. Un número real. Algo que reconoce de su propio contexto.
**Dónde lee esto**: Página de portafolio, casos de estudio, primera pantalla del sitio.
**Tiempo de atención**: 8 segundos en el primer párrafo. Si no enganchó, no sigue.

### Audiencia 2 — Reclutador / Hiring manager
**Perfil**: Engineering Manager, VP Product, HR Tech. Evalúa seniority y scope de impacto.
**Pregunta que tiene en mente**: "¿Esta persona toma decisiones o solo ejecuta? ¿Puede operar a nivel Staff?"
**Qué lo convence**: Decisiones documentadas. Impacto en el equipo. Sistemas construidos, no features aisladas.
**Dónde lee esto**: LinkedIn, CV, descripción de proyectos.
**Tiempo de atención**: Lee el resultado, luego busca el verbo de liderazgo, luego el alcance.

### Audiencia 3 — Comunidad técnica / pares
**Perfil**: Staff Engineers, Senior Designers, Tech Leads. Detectan el hype al instante.
**Pregunta que tiene en mente**: "¿Hay algo aquí que no haya visto antes? ¿El pensamiento es original y honesto?"
**Qué lo convence**: Profundidad real. Trade-offs honestos. Que admita lo que no funciona.
**Dónde lee esto**: GitHub, artículos técnicos, posts de comunidad, documentación pública.
**Tiempo de atención**: Lee hasta donde hay densidad. Para cuando hay marketing speak.

---

## ESTRUCTURA QUE FUNCIONA PARA LAS TRES SIMULTÁNEAMENTE

```
[RESULTADO PRIMERO]     → el cliente lee esto y para. Es suficiente para él.
[MECANISMO DESPUÉS]     → el reclutador lee hasta aquí. Ve la decisión y el scope.
[PROFUNDIDAD AL FINAL]  → la comunidad técnica va aquí. O al link del doc técnico.
```

**Regla**: El texto debe funcionar si el lector para en cualquier capa.
No depende de que lo lea completo para entender el valor.

---

## MATRIZ DE TRANSFORMACIÓN DE TONO

Cómo decir lo mismo para cada audiencia:

| Concepto técnico | Cliente | Reclutador | Comunidad |
|-----------------|---------|------------|-----------|
| BFL Protocol | "Proceso que garantiza que lo que entregamos funciona antes de que lo veas" | "Diseñé e implementé un protocolo de construcción adversarial en equipo multi-modelo" | "BFL con Blind Review Mode: el [INQUISITOR] audita sin saber el autor — elimina sesgo de autoridad" |
| Momentum Gate Lock | "El proyecto no avanza si la etapa anterior no está completa y documentada" | "Implementé gates de no-retorno que eliminaron regresiones en producción" | "Gate bloqueante con evidencia física firmada: sin artefacto → Momentum INCOMPLETE" |
| WCAG 2.2 AA irrevocable | "Tu producto es accesible por diseño, no por promesa — está en el código de construcción" | "Integré accesibilidad como gate técnico irrevocable en CI/CD, no como auditoría post-facto" | "axe-core en CI/CD + CONFORMANCE_STATEMENT firmada + NTC 5854. Zero issues AA en release. Sin excepción." |
| Consejo de 5 modelos | "No usamos IA a ciegas — cada decisión tiene revisión independiente" | "Orquesté un sistema de 5 agentes IA con roles fijos y protocolo adversarial" | "LLM Council: ARCHITECT (Claude) + INQUISITOR (DeepSeek-R1) + CRAFTSMAN (Qwen) + OBSERVER (Gemini 1M) + CONSULTANT (GPT-4o)" |
| Trazabilidad SPEC→código | "Podemos demostrar por qué existe cada cosa en el producto" | "Establecí trazabilidad completa entre requerimiento, diseño y código en producción" | "SPEC_ITEM_ID → BLUEPRINT_SPEC → código → VERSION_CERTIFICATE → INTEGRITY_SHIELD" |
| TITAN como sistema | "Un sistema que opera sin depender de una sola persona" | "Construí un sistema de ingeniería que el equipo opera de forma autónoma" | "TITAN v7.0: 56 archivos, 180+ comandos, 9 Hubs, BPM M0→M5 con Propagation Protocol automático" |

---

## VOCABULARIO POR AUDIENCIA

### Palabras que abren puertas

| Cliente | Reclutador | Comunidad |
|---------|------------|-----------|
| funciona, entrega, garantiza | diseñé, implementé, lideré | construí, documenté, enforce |
| sin sorpresas | a nivel Staff | zero-complacency |
| tu equipo puede operar esto | impacto en N personas | trazabilidad verificable |
| antes de que lo veas | decisión técnica documentada | gate irrevocable |
| resultado medible | scope ampliado | evidencia física con hash |

### Palabras que cierran puertas (evitar sin contexto)

| ❌ Para cliente | ❌ Para reclutador | ❌ Para comunidad |
|----------------|-------------------|------------------|
| BFL, SPEC_ITEM, INQUISITOR | "hice features" | "best practices" |
| framework, protocolo (sin explicar) | lista de herramientas | "optimicé la UX" |
| metodología, proceso TITAN | "participé en" | todo es perfecto |
| tokens, atomic design | "apoyé al equipo" | sin gaps honestos |

---

## EJEMPLO DE TRANSFORMACIÓN COMPLETA

### Texto original (tono técnico interno)
> "TITAN implementa el protocolo BFL con Blind Review Mode y Anti-rationalization table
> para garantizar Zero Hallucination en el Consejo de 5 expertos con roles fijos."

### Versión portafolio (estructura en 3 capas)
> Construí un sistema donde cinco modelos de IA se auditan entre sí — el que revisa
> no sabe quién construyó. *(resultado — capa cliente)*
>
> Lo diseñé así porque un modelo solo no puede auditarse a sí mismo: el sesgo de
> autoridad es invisible. Definí roles fijos (Arquitecto, Inquisidor, Artesano,
> Observador, Consultor) con un protocolo de revisión ciega antes de cada entrega. *(mecanismo — capa reclutador)*
>
> Técnicamente: BFL Protocol con Blind Review Mode en FORGE. El [INQUISITOR]
> (DeepSeek-R1) recibe el artefacto sin metadatos de autoría. Veto irrevocable si
> detecta violación. Anti-rationalization table con 7 excusas rechazadas sin debate. *(profundidad — capa comunidad)*

---

## CHECKLIST DE AUDITORÍA DE TEXTO

Antes de publicar cualquier texto del portafolio, verificar:

### Capa 1 — Cliente (primeras 2 oraciones)
- [ ] ¿Hay un resultado concreto en las primeras 2 oraciones?
- [ ] ¿Se puede entender sin saber qué es TITAN?
- [ ] ¿Hay un número, métrica o evidencia tangible?
- [ ] ¿Está libre de jerga interna (BFL, SPEC_ITEM, Momentum)?

### Capa 2 — Reclutador (párrafo completo)
- [ ] ¿Hay un verbo de decisión/liderazgo? (diseñé, implementé, construí, lideré)
- [ ] ¿Se menciona el alcance? (equipo de N, N proyectos, N meses)
- [ ] ¿Queda claro que fue una decisión, no solo una ejecución?
- [ ] ¿Se diferencia "construí un sistema" de "usé una herramienta"?

### Capa 3 — Comunidad (detalle técnico)
- [ ] ¿Hay profundidad técnica real, no buzzwords?
- [ ] ¿Se admite al menos un trade-off o limitación?
- [ ] ¿Los términos técnicos son precisos y verificables?
- [ ] ¿Hay un link o referencia al documento técnico completo?

### Universal (toda audiencia)
- [ ] ¿El texto funciona si el lector para en la primera oración?
- [ ] ¿El texto funciona si el lector para en el primer párrafo?
- [ ] ¿El texto funciona si lo lee completo?
- [ ] ¿Tiene alguna afirmación que no puedes demostrar? → eliminar

---

## INSTRUCCIÓN PARA GENERACIÓN DE NUEVO TEXTO

Al pedirle a TITAN (o a cualquier modelo) que genere texto para el portafolio,
incluir este bloque como contexto:

```
CONTEXTO DE AUDIENCIA:
  Audiencias: Cliente potencial + Reclutador/Hiring manager + Comunidad técnica
  Estructura: Resultado primero → mecanismo después → profundidad al final
  Tono: directo, orientado al resultado, honesto con limitaciones
  Prohibido: jerga interna sin explicar, afirmaciones sin evidencia, todo es perfecto

TEXTO A GENERAR: [descripción de qué se necesita]
CONCEPTO TÉCNICO BASE: [qué aspecto de TITAN o del trabajo se quiere comunicar]
RESULTADO REAL QUE SE PUEDE MENCIONAR: [métrica, impacto, evidencia concreta]
```

---

## INSTRUCCIÓN PARA AUDITORÍA DE TEXTO EXISTENTE

Al pedirle a TITAN que revise un texto ya escrito:

```
AUDITORÍA DE TONO — PORTAFOLIO
Audiencias: Cliente + Reclutador + Comunidad técnica
Usar el TITAN_TONE_ORCHESTRATOR como referencia.

TEXTO A AUDITAR:
[pegar el texto]

PREGUNTAS:
1. ¿Funciona para las 3 audiencias con la estructura en capas?
2. ¿Qué palabras son jerga interna que hay que traducir?
3. ¿Hay afirmaciones sin evidencia?
4. ¿Qué cambiarías en las primeras 2 oraciones para el cliente?
5. ¿Qué cambiarías en el cuerpo para el reclutador?
6. ¿Qué detalle técnico falta o sobra para la comunidad?
```

---

*TITAN_TONE_ORCHESTRATOR.md — v1.0 — Junio 2026*
*Nivel IMMUTABILITY: Nivel B — se versiona al cambiar el posicionamiento o las audiencias objetivo*
*Owner: Staff Product Architect (Hub 1) · Se carga antes de cualquier generación o auditoría de texto del portafolio*
