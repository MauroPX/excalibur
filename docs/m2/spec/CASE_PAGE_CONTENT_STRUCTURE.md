# CASE_PAGE_CONTENT_STRUCTURE.md
# EXCALIBUR v2.0 — Estructura de información para páginas de caso (2 variantes, 1 interfaz)
# TITAN v7.0 | Fase 2/5 — GSD_TASK_CARD_M1_CASE_STRUCTURE
# Para ejecución por Code — usa los tokens reales de src/app/globals.css (--md-sys-color-*), NO una paleta nueva.

---

## Backbone narrativo: STAR-L (Situación → Tarea → Acción → Resultado → Aprendizaje)

**Verificado, no asumido:** Google no prescribe oficialmente STAR, CAR ni SOAR — evalúa autenticidad y contenido, no el formato ([fuente](https://igotanoffer.com/blogs/tech/google-behavioral-interview)). STAR es el más usado en la industria en general, pero tiene una debilidad documentada: "ignora la importancia de hablar de QUÉ APRENDISTE, que suele ser la parte más importante de la respuesta" ([fuente](https://igotanoffer.com/en/advice/star-method-product-manager-interview)). Por eso existen variantes STAR-L ("Learned") y STAR-LA ("Learned + Applied"). Se adopta STAR-L aquí — el "Aprendizaje" es exactamente donde vive tu patrón de "entré con un rol y terminé descubriendo el proceso completo": sin ese campo, la página termina en el resultado y pierde la pieza que más pesa según esta evidencia.

Cada caso, sin importar la variante, se organiza sobre STAR — no como checklist genérico, sino porque corrige el problema real detectado: la página decía "hice X" (el hecho consumado) en vez de "el objetivo era Y, tenía estas opciones, elegí X por esta razón" (la decisión mostrada como decisión).

- **Situación** — el contexto de la prueba/proyecto, tal como llegó (ya existe como "Contexto").
- **Tarea (Objetivo)** — *campo nuevo, obligatorio.* Qué buscabas demostrar o lograr — distinto del brief literal. Sin esto, la Acción no tiene contra qué evaluarse.
- **Acción** — no una lista de "qué hice", sino **opción(es) consideradas → opción elegida → por qué**. La evidencia de las alternativas ya existe en los docs actuales (enterrada dentro de la columna "Por qué" de cada tabla de decisiones) — aquí se saca a la superficie explícitamente.
- **Resultado** — el resultado verificable (ya existe).
- **Aprendizaje (Learned)** — *campo nuevo, obligatorio, cierra el caso.* Qué te llevaste que cambió cómo abordas el siguiente proyecto — no una moraleja genérica, algo específico y aplicado después. Aquí es donde vive el patrón de "entré con un rol y terminé descubriendo el proceso E2E completo".

`Valor` (el Insight de la sección anterior) sigue yendo primero, como gancho — STAR-L es el cuerpo que lo sostiene con evidencia y lo cierra con reflexión aplicada, no lo reemplaza.

---

## Principio: 1 interfaz, 2 variantes de contenido

```
caseFormat: 'evidencia-viva' | 'documento-estrategico'
```

Comparten (misma interfaz, mismos tokens/componentes):
- Header: badge de tipo de caso + título + dek + grid de metadata (rol, duración/período, tipo de brief)
- **`Valor` — un campo obligatorio, inmediatamente después del header, antes de cualquier detalle metodológico.** Es la frase de Insight (APE: Autoridad·Profundidad·Evidencia): qué demuestra este caso sobre cómo trabajas, no qué se construyó. Sin esto, la página es una recapitulación de proceso, no algo que convierta para quien la lee por primera vez. El resto del contenido (metodología, fases, tablas) es la Evidencia que sostiene ese Valor — nunca al revés.
- Bloque "Uso de IA declarado" (mismo componente visual en ambas variantes, cuando aplica)
- Footer con disclaimer de tipo de caso (prueba técnica no remunerada / autodiagnóstico propio / estimación propia — según corresponda)

Difieren solo en el cuerpo:
- `evidencia-viva` → bloque de acceso (URLs) en vez de secciones numeradas
- `documento-estrategico` → secciones numeradas en vez de bloque de acceso

---

## Variante A — `evidencia-viva`

### Caso: FleetControl
```
badge: "🔧 Prueba técnica" | rol: "Design Engineer (UX/UI)"
Valor: "No acepté las restricciones de la IA como definitivas: cuando generó código que rompía
        semántica de accesibilidad o UX de movimiento, lo detecté y corregí con criterio propio,
        documentando cada corrección — la diferencia entre usar IA y saber cuándo no seguirla."

Tarea (Objetivo): Demostrar decisiones de arquitectura frontend defendibles bajo restricciones
        reales (sin backend propio, sin WebSocket disponible) — no solo entregar una UI funcional.

Acción (opciones consideradas → elegida → por qué):
  | Decisión | Opción(es) descartada(s) | Elegida | Por qué |
  |---|---|---|---|
  | Marcado de la tarjeta de estado | `<div>` anidados (lo que generó la IA) | `<dl><dt><dd>` | Semánticamente correcto para pares etiqueta-valor — un lector de pantalla anuncia "Velocidad: 84.5 km/h" como unidad coherente |
  | Actualización de posición en tiempo real | WebSocket nativo | Polling 5s + interpolación `requestAnimationFrame` | Netlify Functions no soporta WebSockets; la interpolación logra el mismo efecto visual sin servidor adicional |
  | Manejo de estado global | React Context | Zustand | El polling actualiza 12x/min — con Context se re-renderiza todo el árbol; con Zustand solo los componentes suscritos al slice exacto |
  | Manejo de fallo de red | Error genérico | "Última posición conocida" con opacidad reducida + `role="alert"` + foco automático | Preserva información útil en vez de solo mostrar que algo falló |

Aprendizaje: Corregir la IA con criterio propio no es un extra opcional — es la parte del
        trabajo que un candidato promedio se salta. Desde este caso, documentas explícitamente
        qué generó IA vs. qué corregiste tú en cada proyecto siguiente, no solo en pruebas.

bloque de acceso:
  producción: simon-v2-monitor-rmxm.vercel.app/?demo=true
  preview: simon-v2-monitor-rmxm-git-feat-capa-2-lemaogo-9238s-projects.vercel.app
  repo: github.com/MauroPX/simon-v2-monitor
  video: loom.com/share/dc3ef2ab5fb84e9b8c52709b26b8f915
  doc técnica: github.com/.../TECHNICAL_CHALLENGE_RESPONSE.md
accesibilidad: WCAG 2.1 AA — teclado, prefers-reduced-motion, contraste 4.5:1, aria-live
uso de IA declarado: 3 correcciones documentadas (ver fuente)
footer: "Prueba técnica de selección — no un encargo remunerado."
```

### Caso: Solidaria Portal
```
badge: "🔍 Diagnóstico autodirigido (preparación de entrevista)"
Valor: "Nadie me pidió esto. Antes de una entrevista, audité los 7 canales digitales de una
        aseguradora real y construí la propuesta de arquitectura que resuelve la fragmentación
        que encontré — la diferencia entre presentarme a una entrevista y presentarme con la
        solución ya diseñada."
Tarea (Objetivo): Llegar a la entrevista con conocimiento real del sector y una propuesta
        concreta, no con opiniones genéricas sobre "transformación digital".
Acción: reformatear como tabla Opción descartada → Elegida → Por qué, extrayendo de la
        migración conceptual ya documentada (monolito CMS Azure Blob vs. arquitectura
        desacoplada core→API REST→Next.js) — ver docs/m1/WORKTEST_CASES.md Caso 2.
Aprendizaje: Ir más allá del mandato (que aquí ni siquiera existía — era una entrevista, no
        un encargo) es lo que diferencia presentarse con un diagnóstico de presentarse con
        una solución. Este patrón — mirar el proceso completo aunque el rol pedido sea más
        estrecho — se repite en el Momentum 2 de FDN.
bloque de acceso:
  producción: solidaria-portal.vercel.app
  cómo recorrerlo: botón "¿Cómo funciona?" en landing → tour guiado; login maria@ejemplo.com + OTP 123456 → tour automático
  tabla V1→V2: V1 (c75a74f, baseline) vs V2 (812ff9b, producción actual) — ver docs/m1/WORKTEST_CASES.md
  rutas de feature: /, /login, /mis-polizas, /mis-polizas/POL-HOG-2024-4521, /cotizar/hogar, /cotizar/mascotas,
                     /siniestros/reportar, /siniestros/consultar, /pqrs/radicar, /pqrs/consultar, /pagos, /pagos/confirmacion
  design system: 6a2d61bf2ded342d004f1b8f-gjmdfbfoac.chromatic.com
  repo: privado, mencionar que existe sin enlazar acceso
hallazgo: 7 dominios digitales sin identidad unificada (verificable públicamente)
benchmark: NPS 41→65, fuente pública del gremio asegurador
footer: "Diagnóstico por iniciativa propia — no fue un encargo." (⚠️ disclaimer DISTINTO al de prueba técnica)
gobernanza: aplicar filtro de confidencialidad — sin nombres de entrevistadores, sin cifras internas, sin estado de proceso
```

### Caso: BCS
```
badge: "🔧 Prueba técnica" | rol: "Diseñador/a de Interfaz de Usuario UI" | duración: "2 días + sustentación 30 min"
Valor: "El brief pedía una pantalla en Figma. Entregué el sistema que sostiene esa pantalla a
        escala — 34 roles × 6 esquemas, verificados automáticamente — porque diseñar una
        interfaz y diseñar la capacidad de producir cientos de ellas son problemas distintos,
        y solo el segundo escala con un equipo."
Tarea (Objetivo): Demostrar que el alcance mínimo pedido (Figma + prototipo) no es el techo de
        lo que se puede/debe entregar cuando el problema real es de sistema, no de pantalla.
Acción: reformatear como tabla — ej. Opción descartada: "solo Figma, sin verificación de
        contraste" → Elegida: "monorepo + script de auditoría de 66 verificaciones automáticas
        contra el export oficial de Material Theme Builder" → Por qué: un error de contraste
        detectado manualmente no escala a 6 esquemas × 34 roles — ver docs/m1/WORKTEST_CASES.md
        Caso 3 (incluye el error propio corregido, mantenerlo — es evidencia de disciplina).
Aprendizaje: Un sistema que no se verifica automáticamente no escala más allá de quien lo creó.
        Desde este caso, cualquier design system que entregues incluye su propio script de
        verificación — no depende de que alguien revise a mano.
bloque de acceso:
  app: bcs-frontend-web-app.vercel.app
  storybook: bcs-frontend-web-app.vercel.app/storybook/?path=/docs/bienvenida-introducción--docs
dónde se superó el alcance: 34 roles M3 × 6 esquemas, monorepo, 66 verificaciones de contraste automatizadas
disciplina de proceso: cero alucinación, error propio corregido y declarado
footer: "Prueba técnica de selección — no un encargo remunerado."
```

---

## Variante B — `documento-estrategico`

### Caso: Codesa
```
badge: "🔧 Prueba técnica" | rol: "Diseño UX Nivel 3" | plazo: "7 días" | formato pedido: "Documento — sin código"
Valor: "Ante un problema sin investigación previa, no adiviné causas — planteé 5 hipótesis
        falsables, cada una anclada a un marco de comportamiento real, y declaré con total
        transparencia dónde y cómo usé IA en el proceso. La disciplina de investigación
        importa tanto como el hallazgo."
Tarea (Objetivo): Diseñar una estrategia de investigación defendible para un problema sin
        datos previos, no adivinar la causa del 28% de finalización.
Acción (la "Acción" aquí es metodológica, no de código — misma lógica de opciones):
  | Decisión | Opción(es) descartada(s) | Elegida | Por qué |
  |---|---|---|---|
  | Cómo evaluar cada hipótesis | Una sola técnica (ej. solo entrevistas) | Metodología mixta (funnel + heurístico + entrevistas + usabilidad + CES) | Cada hipótesis requiere un tipo de evidencia distinto — un solo método no cubre las 5 |
  | Cómo priorizar hallazgos | RICE estándar | RICE + ejes de Confianza e Inclusión | El dominio (pagos, población vulnerable) exige ejes que el RICE original no contempla |
Aprendizaje: Un framework estándar (RICE) no siempre alcanza — a veces la disciplina correcta
        es extenderlo con criterio propio, y declarar esa extensión explícitamente en vez de
        forzar el problema dentro del framework original.
nota de honestidad: ~120 páginas de research crudo (no mostrado) vs. 17 páginas de entregable final (base de esta página)
secciones numeradas:
  01 — El problema (28% de finalización, sin investigación previa)
  02 — 5 hipótesis + marco teórico (Self-Determination Theory, Calm Technology, Design with Intent)
  03 — Metodología mixta (tabla: método → herramienta → qué evidencia aporta)
  04 — Participantes representativos (chips: Android gama baja, conectividad rural, baja visión, baja alfabetización digital)
  05 — Priorización (OST + RICE + ejes propios: Confianza, Inclusión)
  06 — Ejecución en 4 fases
bloque de IA declarada: TITAN Research Intelligence Skill v5.1 — etapas, validación, cita de cierre (ver docs/m1/WORKTEST_CASES.md Caso 4)
footer: "Prueba técnica de selección — no un encargo remunerado."
```

### Caso: FDN — Momentum 2 (Propuesta de arquitectura)
```
badge: "📐 Estimación propia — no construido ni aprobado en su totalidad"
Valor: "Entré a auditar accesibilidad. Al mirar el proceso completo, encontré la causa raíz
        (un sitio estático en fin de vida) y propuse la arquitectura que la resuelve — la
        diferencia entre cumplir el mandato y resolver el problema que el mandato no
        mencionaba."
Tarea (Objetivo): Ir más allá de "cumplir el mandato de auditoría" y proponer la arquitectura
        que resuelve la causa raíz de los 654 incidentes, no solo documentarlos.
Acción:
  | Decisión | Opción(es) descartada(s) | Elegida | Por qué |
  |---|---|---|---|
  | Alcance de la propuesta | Solo remediar los 654 incidentes puntuales en Drupal 7 | Migración completa a Next.js/Strapi/RAG | Drupal 7 está en EOL — remediar incidentes sin migrar es reparar un sistema que de todas formas hay que reemplazar |
Aprendizaje: Un mandato técnico acotado (auditar) casi siempre esconde un problema más grande
        (una arquitectura al final de su vida útil). Este es el mismo patrón que en Solidaria
        y que define cómo abordas cualquier encargo: mirar el sistema completo, no solo la
        tarea pedida.
nota de honestidad: distinto del Momentum 1 (auditoría WCAG, sí confirmada) — esto es una propuesta de valor, no un entregable cerrado
secciones numeradas:
  01 — Por qué (un sitio estático en EOL no sostiene el rol de referente digital que necesita FDN)
  02 — Arquitectura propuesta (Next.js 14, Strapi v5, PostgreSQL+pgvector, Meilisearch, RAG con Claude API acotado al corpus FDN, PostHog self-hosted por Ley 1581)
  03 — Inversión estimada (CAPEX $100K–$174.5K USD) — presentada como propuesta, no presupuesto ejecutado
  04 — Calendario objetivo (WCAG AA 30 jun 2026, lanzamiento 30 sep 2026)
enlace cruzado: "Basado en los hallazgos de la auditoría real (Momentum 1) →"
footer: "Propuesta de arquitectura — estimación propia, no un entregable ya construido o aprobado."
```

---

## Reglas de gobernanza a respetar en la construcción (recordatorio para Code)
- Usa `src/app/globals.css` (`--md-sys-color-*`) — no inventar paleta nueva.
- No tocar `ProjectCard` (LOCKED, `EX-v2-MOL-002`) — el badge/caseType necesita un componente nuevo o una extensión propia con blueprint.
- El footer/disclaimer de cada caso NO es opcional ni intercambiable entre casos — cada uno tiene su propia frase exacta (prueba técnica ≠ autodiagnóstico ≠ estimación propia).
- Fuente de contenido: `docs/m1/WORKTEST_CASES.md` y `docs/m1/CONTENT_COPY_STRATEGY.md` (ya en el repo, rama `v2`) — usar tal cual, no reinterpretar cifras ni agregar datos no presentes ahí.
