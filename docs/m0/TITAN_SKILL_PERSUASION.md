# TITAN_SKILL_PERSUASION.md
# Tríada Aristotélica como Capa de Profundidad en TITAN v7.0
# Trigger: /skill persuasion | auto-activa en cada Momentum Gate
# Encadena: BFL_PROTOCOL · ZERO_COMPLACENCY · CHAIN_MAP · FORENSIC_TOOLS
# Nivel: TRANSVERSAL — opera en M0→M5 sin reemplazar ningún artefacto existente
# Versión: 1.0 | 2026-06-24 | Estado: ACTIVE

---

# ════════════════════════════════════════════════════════════════
# PARTE 0: PROPÓSITO Y PROBLEMA QUE RESUELVE
# ════════════════════════════════════════════════════════════════

## El problema

Los gates actuales de TITAN verifican EXISTENCIA de artefactos.
Un PROJECT_MANIFEST firmado pasa GATE 1 aunque la decisión de stack
no tenga trazabilidad real. Un CUSTOMER_JOURNEY firmado pasa M1
aunque no capture el momento de abandono real del usuario.

El resultado: el proceso se cumple formalmente pero el equipo
construye sin entender profundamente qué resuelve ni para quién.

## Lo que agrega este skill

No reemplaza ningún artefacto existente.
Agrega una CAPA DE PROFUNDIDAD a cada gate — tres preguntas
que transforman un checkbox en una declaración de comprensión.

  ETHOS   → ¿En qué evidencia real se basa esta decisión?
  PATHOS  → ¿Qué insight humano revela este artefacto?
  LOGOS   → ¿Qué claridad técnica aporta lo anterior?

La diferencia entre un artefacto que existe y uno que entiende.

## Por qué las validaciones se saltan

El gate actual es binario: artefacto presente → PASS.
Sin preguntas de profundidad, el artefacto puede ser superficial
y seguir pasando. Este skill convierte el gate en una declaración
verificable que no puede ser superficial sin evidencia explícita.

---

# ════════════════════════════════════════════════════════════════
# PARTE 1: LA TRÍADA — DEFINICIÓN EXACTA EN CONTEXTO TITAN
# ════════════════════════════════════════════════════════════════

## ETHOS — La fuente de autoridad de la decisión

  No es: el documento que se generó
  Es:    en qué se basó la decisión que está en ese documento

  Evidencia de Ethos válida:
    → Investigación directa con N usuarios (entrevistas, tests)
    → Data cuantitativa de comportamiento real (analytics, métricas)
    → Decisión previa documentada en ADR/RFC con resultado conocido
    → Benchmark verificable de un caso análogo en la industria
    → Expertise técnico del equipo con evidencia demostrable
    → Regulación o estándar aplicable (WCAG, ISO, NTC) con artículo específico

  Evidencia de Ethos INVÁLIDA (no pasa el gate):
    → "Así lo decidió el PO" sin fundamento
    → "Es la mejor práctica" sin fuente
    → "Lo hemos hecho antes" sin resultado documentado
    → "El cliente lo pidió" sin validación de que resuelve el problema

## PATHOS — El insight humano que activa comprensión

  No es: el mapa del journey completado
  Es:    lo que el mapa revela sobre el momento real de quiebre

  Un insight de Pathos válido captura:
    → El usuario X intenta Y pero abandona en Z porque [causa específica]
    → La emoción en ese momento: frustración / urgencia / confusión / bloqueo
    → La consecuencia para el usuario si el problema no se resuelve
    → El contexto que hace que el problema exista (sistémico, cultural, técnico)

  Formato mínimo de un insight de Pathos:
    "El usuario [perfil] intenta [acción] para [objetivo real]
     pero abandona/falla en [punto específico] porque [causa raíz].
     Esto genera [emoción/consecuencia] y crea urgencia de [necesidad].
     → Escenario de uso derivado: [descripción]
     → Historia de usuario que nace: [historia]"

  Un CUSTOMER_JOURNEY sin al menos 3 insights con este formato
  no tiene Pathos — tiene un diagrama.

## LOGOS — La claridad técnica que emerge del Ethos y el Pathos

  No es: los tests que pasan o la cobertura de código
  Es:    la trazabilidad entre el insight humano y la decisión técnica

  Logos válido en TITAN:
    → El criterio de aceptación CA-003 existe PORQUE el usuario abandona
      en el paso Z (Pathos) y la decisión de resolverlo con [mecanismo]
      se basa en [fuente] (Ethos). El test prueba específicamente ese momento.
    → La arquitectura de [componente] tiene esta forma PORQUE el usuario
      necesita [capacidad] (Pathos) y el stack elegido lo soporta (Ethos).
    → El token M3 [nombre] tiene este valor PORQUE el usuario con
      [condición visual] necesita contraste mínimo [ratio] (Ethos: WCAG 1.4.3).

  Logos sin Ethos: código correcto construido por las razones equivocadas.
  Logos sin Pathos: código correcto que resuelve el problema incorrecto.
  Los tres juntos: producto que funciona, que importa, y que se puede defender.

---

# ════════════════════════════════════════════════════════════════
# PARTE 2: DECLARACIÓN APE POR MOMENTUM
# ════════════════════════════════════════════════════════════════

# APE = Autoridad · Profundidad · Evidencia
# Formato estructurado que reemplaza el simple PASS/FAIL
# Se genera UNA VEZ por Momentum como parte del GSD Task Card

## TEMPLATE APE — Uso obligatorio en cada Momentum Gate

```
APE_DECLARATION_M[#]:
─────────────────────────────────────────────────────────────────
MOMENTUM: [M#] | FECHA: [ISO] | FIRMADO POR: [rol]
─────────────────────────────────────────────────────────────────

ETHOS — Fuente de autoridad de las decisiones de este Momentum:
  Decisión 1: [nombre de la decisión]
    → Fuente: [investigación / data / ADR / estándar]
    → Evidencia: [link, referencia, número de usuarios, fecha]
    → Por qué esta fuente es válida: [1-2 líneas]

  Decisión 2: [nombre de la decisión]
    → Fuente: [...]
    → Evidencia: [...]
    → Por qué esta fuente es válida: [...]

  [Mínimo 2 decisiones con fuente en cada Momentum]

PATHOS — Insights humanos que fundamentan este Momentum:
  Insight 1:
    → Usuario: [perfil específico — no "el usuario"]
    → Intenta: [acción concreta]
    → Falla/abandona en: [punto específico del journey]
    → Causa raíz: [por qué — no síntoma]
    → Emoción en ese punto: [frustración / urgencia / confusión / bloqueo]
    → Consecuencia si no se resuelve: [impacto real]
    → Escenario de uso derivado: [descripción]
    → Historia de usuario que nace: "Como [usuario] quiero [acción]
       para [objetivo] — porque sin esto [consecuencia negativa]"

  Insight 2: [mismo formato]
  Insight 3: [mismo formato]

  [Mínimo 3 insights con formato completo en M1 y M2]
  [Mínimo 1 insight en M0, M3, M4, M5]

LOGOS — Trazabilidad entre insights y decisiones técnicas:
  Traza 1:
    → El [artefacto/criterio/componente] existe PORQUE:
    → Pathos: [referencia al insight — cuál, qué punto del journey]
    → Ethos: [referencia a la fuente de autoridad]
    → Evidencia técnica: [test / métrica / criterio de aceptación]
    → Verificable en: [archivo / ruta / comando]

  Traza 2: [mismo formato]

  [Mínimo 2 trazas completas por Momentum]

APE_STATUS:
  ETHOS:  [PASS / BLOCKED — razón]
  PATHOS: [PASS / BLOCKED — razón]
  LOGOS:  [PASS / BLOCKED — razón]
  APE_GATE_M[#]: [PASS / BLOCKED]
─────────────────────────────────────────────────────────────────
```

---

# ════════════════════════════════════════════════════════════════
# PARTE 3: INTEGRACIÓN POR MOMENTUM — DÓNDE Y CÓMO SE ACTIVA
# ════════════════════════════════════════════════════════════════

## M0 — ONBOARDING (Fundación del Ethos)

  CUÁNDO SE ACTIVA: después de firmar PROJECT_MANIFEST y ADR-001..005

  ETHOS en M0 — Las decisiones de este Momentum se basan en:
    → ¿Por qué este stack? [ADR-001 debe tener fuente — no solo decisión]
    → ¿Por qué este DS strategy? [ADR-002 con benchmark o evidencia]
    → ¿Por qué este backend? [ADR-003 con caso análogo o requerimiento]
    → ¿Por qué este deploy? [ADR-004 con criterio verificable]
    → ¿Por qué esta IA/RAG approach? [ADR-005 con evaluación documentada]

  PATHOS en M0 — Mínimo 1 insight:
    → ¿Quién sufre el problema que este producto resuelve HOY?
    → ¿Qué hace esa persona cuando el problema ocurre?
    → ¿Qué emoción genera ese momento?
    → Este insight es el ancla emocional del producto —
      si no existe, el equipo construye sin saber para quién.

  LOGOS en M0:
    → El THREAT_MODEL tiene amenazas específicas PORQUE el usuario
      identificado en Pathos tiene ese contexto de riesgo
    → La WCAG_COMMITMENT existe PORQUE hay usuarios reales con
      [condición] que usan el producto [evidencia o estimación]

  APE_GATE_M0:
    BLOQUEANTE si: ADR sin fuente de autoridad explícita
    BLOQUEANTE si: no existe ningún insight de usuario en el Momentum
    ADVERTENCIA si: LOGOS no traza ninguna decisión técnica a un insight

  Artefacto generado: APE_DECLARATION_M0.md en docs/m0/

---

## M1 — DISCOVERY (El Momentum del Pathos)

  CUÁNDO SE ACTIVA: antes de firmar STRATEGY_BRIEF y ROADMAP_v1

  Este es el Momentum más crítico para Pathos.
  El CUSTOMER_JOURNEY_FULL no pasa sin al menos 3 insights completos.

  ETHOS en M1 — ¿En qué se basan las decisiones estratégicas?
    → ¿Las audiencias A1-A4 vienen de investigación real o de suposición?
      Si son suposición → declarar como hipótesis en STRATEGY_BRIEF
      Si son investigación → especificar N, método, fecha
    → ¿El ROADMAP_v1 se basa en data de comportamiento o en prioridades
      del stakeholder? Ambas son válidas — pero deben estar declaradas.
    → ¿El THREAT_MODEL viene de análisis STRIDE sobre el producto real
      o de una plantilla genérica? Especificar.

  PATHOS en M1 — Mínimo 3 insights completos:
    El USER_TASKS_MATRIX debe ir más allá de "usuario hace tarea".
    Para cada tarea crítica identificar:
      → El momento exacto donde el usuario actual falla
      → La causa raíz (no el síntoma)
      → La emoción en ese punto
      → Lo que el usuario hace como workaround (si existe)
      → El costo de ese workaround (tiempo, dinero, frustración)

    Los insights de Pathos de M1 alimentan directamente:
      → Los escenarios de uso de M2 (DESIGN_SPEC)
      → Las historias de usuario del PRODUCT_BACKLOG
      → Los criterios de aceptación del SPEC_DOCUMENT
      Sin insights sólidos de M1, M2 y M3 construyen hipótesis.

  LOGOS en M1:
    → Cada épica del ROADMAP_v1 debe trazar a mínimo 1 insight de Pathos
    → Cada audiencia del STRATEGY_BRIEF debe trazar a mínimo 1 fuente de Ethos
    → El THREAT_MODEL debe trazar cada amenaza a un actor real
      identificado en el mapeo de audiencias

  APE_GATE_M1:
    BLOQUEANTE si: USER_TASKS_MATRIX sin momentos de abandono documentados
    BLOQUEANTE si: CUSTOMER_JOURNEY_FULL sin causa raíz en los puntos de fricción
    BLOQUEANTE si: audiencias declaradas sin ninguna fuente (investigación o hipótesis)
    BLOQUEANTE si: ninguna épica del ROADMAP traza a un insight de usuario
    ADVERTENCIA si: todos los insights vienen de una sola fuente (riesgo de sesgo)

  Artefacto generado: APE_DECLARATION_M1.md en docs/m1/

  NOTA DE ENCADENAMIENTO:
    Los insights de M1 se propagan automáticamente a M2.
    El SPEC_DOCUMENT en M2 debe referenciar al menos 3 insights de
    APE_DECLARATION_M1.md en sus criterios de aceptación.
    Sin esa referencia → GATE bloqueante en M2.

---

## M2 — ARCHITECTURE (El Momentum del Logos)

  CUÁNDO SE ACTIVA: antes de firmar SPEC_DOCUMENT y DESIGN_SPEC

  Este es el Momentum más crítico para Logos.
  El SPEC_DOCUMENT no pasa sin trazabilidad explícita a M1.

  ETHOS en M2:
    → Cada decisión de arquitectura (stack, API design, data model)
      debe citar la fuente que la justifica:
      ADR del Momentum correspondiente + criterio técnico verificable
    → Los DESIGN_TOKENS deben tener fuente de contraste verificada:
      "Token primary #C4BEFF tiene ratio 7.2:1 contra surface #0D0F1A
       verificado con [herramienta] — cumple WCAG 1.4.6 AAA"
    → El API_CONTRACTS.md debe citar el estándar o patrón en que se basa
      (REST / GraphQL / OpenAPI version / JSONAPI spec)

  PATHOS en M2:
    → Cada SPEC_ITEM debe tener una línea "Origen del insight":
      "Este componente existe porque el usuario [perfil] falla en [punto]
       (APE_M1 Insight [N]). Sin él, [consecuencia] persiste."
    → Los escenarios de uso del DESIGN_SPEC deben derivar directamente
      de los momentos de abandono identificados en APE_DECLARATION_M1
    → Un SPEC_ITEM sin origen en un insight de M1 es una hipótesis —
      debe declararse como tal en el SPEC_DOCUMENT con riesgo documentado

  LOGOS en M2 — La trazabilidad completa:
    → Cada criterio de aceptación (CA-###) debe ser verificable:
      "CA-003: el formulario muestra el error en menos de 300ms
       PORQUE el usuario abandona cuando no recibe feedback (APE_M1 Insight 2)
       verificable con: test de performance + jest-axe"
    → El BLUEPRINT_SPEC.json en cada componente debe referenciar
      el insight de Pathos que justifica su existencia
    → La TRACEABILITY_MATRIX debe incluir columna "Origen APE":
      spec_id · componente · nivel · insight_origen · fuente_ethos · estado

  APE_GATE_M2:
    BLOQUEANTE si: SPEC_DOCUMENT sin referencias a APE_DECLARATION_M1
    BLOQUEANTE si: criterios de aceptación sin evidencia de cómo se verifican
    BLOQUEANTE si: DESIGN_TOKENS sin fuente de contraste verificada
    BLOQUEANTE si: más del 30% de SPEC_ITEMs sin origen en insight de M1
    ADVERTENCIA si: SPEC_ITEMs marcados como hipótesis sin plan de validación

  Artefacto generado: APE_DECLARATION_M2.md en docs/m2/

---

## M3 — EXECUTION (Los tres pilares en cada ciclo BFL)

  CUÁNDO SE ACTIVA: en cada LOCK de componente — integrado en GATE 2

  En M3 la tríada opera al nivel del componente individual.
  Cada BLUEPRINT_SPEC.json debe responder las tres preguntas.

  ETHOS en M3 — Por componente:
    → "Este componente existe porque el insight [N] de APE_M1 lo requiere"
    → "La decisión de implementarlo con [patrón/librería] se basa en [ADR-N]"
    → "El contrato de API fue validado por [rol] el [fecha]"
    → Sin esta declaración en el BLUEPRINT_SPEC → GATE 1 BLOCKED

  PATHOS en M3 — Por componente:
    → "El usuario [perfil] interactúa con este componente en el momento
       donde antes abandonaba (APE_M1 Insight [N])"
    → "El estado [loading/error/empty] existe porque el usuario
       experimenta [emoción] cuando [condición] — sin este estado
       el usuario infiere que el sistema falló"
    → "El color [token] en el estado error usa [ratio] porque el usuario
       con [condición visual] debe poder identificarlo sin ambigüedad"
    → Un componente sin un estado mapeado a una emoción de usuario
      tiene Pathos incompleto — puede existir pero no resuelve

  LOGOS en M3 — El test como prueba de la tríada:
    → Cada test de Vitest/jest-axe debe tener un comentario de una línea:
      "// CA-003: verifica que el usuario no abandone en el paso Z (APE_M1 Insight 2)"
    → El FORGE_SEAL no se puede dar si los tests no cubren los estados
      de Pathos identificados en el BLUEPRINT_SPEC
    → La cobertura ≥ 85% es LOGOS mínimo — pero la trazabilidad de cada
      test a un insight es LOGOS profundo

  ÍTEM 16 del Atomic Audit Checklist (nuevo — se agrega a los 15 existentes):
    [ ] 16. APE_TRACEABILITY:
            ¿El BLUEPRINT_SPEC.json tiene declarado el insight de origen (Pathos)?
            ¿Tiene declarada la fuente de la decisión (Ethos)?
            ¿Al menos 1 test traza explícitamente a ese insight (Logos)?
            Si NO → GATE 2 BLOCKED. No existe FORGE_SEAL parcial.

  Artefacto generado:
    APE_COMPONENT_[nombre].json en docs/m3/ape/ por cada componente LOCKED
    APE_SPRINT_REPORT_[N].md en docs/m3/ al cerrar cada sprint

---

## M4 — AUDIT & RELEASE (Verificación de la tríada completa)

  CUÁNDO SE ACTIVA: como paso E0 antes de la Forensic Audit Sequence

  En M4 se verifica que la tríada se sostuvo durante todo M3.

  ETHOS en M4 — ¿Las decisiones de arquitectura se cumplieron?
    → ¿Los ADRs firmados en M0 se respetaron en la implementación?
    → ¿Hay desviaciones? Si las hay → RFC documentado o deuda técnica declarada
    → ¿El CONFORMANCE_STATEMENT puede respaldarse con evidencia real?
      No "cumplimos WCAG" — "cumplimos WCAG 1.4.3 verificado con axe-cli
      el [fecha] sobre [URL] — 0 violations críticas — evidencia en [archivo]"

  PATHOS en M4 — ¿Los usuarios reales validan los insights de M1?
    → ¿Se hizo alguna prueba con usuarios reales desde M1?
    → Si no → declarar como deuda de validación en RELEASE_NOTES
    → El ACCESSIBILITY_AUDIT_REPORT debe incluir:
      "Los [N] criterios auditados cubren los escenarios de usuario
       identificados en APE_DECLARATION_M1 Insights [lista]"
    → Si el audit encuentra un problema que el insight de M1 debería
      haber detectado → documentar como gap de Pathos en el POSTMORTEM

  LOGOS en M4 — La RTM como prueba final:
    → generate_full_rtm.py debe producir una columna APE_ORIGIN en la RTM
    → El MASTER_DOSSIER debe incluir sección APE_SUMMARY:
      "De los [N] SPEC_ITEMs: [X] con Ethos verificado · [Y] con Pathos
       trazado · [Z] con Logos completo · [W] declarados como hipótesis"
    → Un producto con más del 20% de hipótesis sin validar
      no puede declarar PRODUCTION_READY sin plan de validación post-launch

  APE_GATE_M4:
    BLOQUEANTE si: CONFORMANCE_STATEMENT sin evidencia específica
    BLOQUEANTE si: RTM sin columna APE_ORIGIN
    ADVERTENCIA si: más del 20% de SPEC_ITEMs son hipótesis sin validar
    ADVERTENCIA si: no hubo ninguna prueba con usuarios reales desde M1

  Artefacto generado: APE_SUMMARY_M4.md en docs/m4/ — sección del MASTER_DOSSIER

---

## M5 — OPERATIONS (La tríada en el tiempo)

  CUÁNDO SE ACTIVA: mensualmente como parte de WEEKLY_HEALTH_REPORT

  En M5 la tríada se convierte en sistema de alerta temprana.

  ETHOS en M5:
    → ¿Las decisiones de M0 siguen siendo válidas con los datos de operación?
    → ¿Algún ADR debe revisarse dado el comportamiento real del sistema?
    → monitor_telemetry.py debe incluir: ETHOS_DRIFT_ALERT si una
      decisión de arquitectura produce resultados contrarios a su fundamento

  PATHOS en M5:
    → ¿El comportamiento real de los usuarios valida los insights de M1?
    → ¿Hay nuevos momentos de abandono que M1 no identificó?
    → SIGNAL_LOG.md debe capturar: nuevos insights de usuario descubiertos
      en operación → alimentan el próximo ciclo (nueva iteración de M1)
    → Si el WEEKLY_HEALTH_REPORT muestra abandono en un punto que
      APE_M1 no cubrió → PATHOS_GAP_DETECTED → trigger para nueva Discovery

  LOGOS en M5:
    → DORA_UPDATE debe trazar cada métrica a una decisión de M2:
      "Deployment frequency mejoró PORQUE [ADR-004] redujo fricción en deploy"
    → Los POSTMORTEM deben trazar cada P0/P1 a la decisión que lo causó
      y al insight que debería haberlo anticipado

  Artefacto generado:
    APE_OPERATIONS_[mes].md en docs/m5/ — sección del WEEKLY_HEALTH_REPORT

---

# ════════════════════════════════════════════════════════════════
# PARTE 4: INTEGRACIÓN EN EL BFL_PROTOCOL
# ════════════════════════════════════════════════════════════════

## Ítem 16 — APE_TRACEABILITY (se agrega al Atomic Audit Checklist)

Posición: después del ítem 15 (Neurodiversidad)
Nivel: BLOQUEANTE — sin excepción

```
[ ] 16. APE_TRACEABILITY (SKILL_PERSUASION — auto-activa):
    APE-1: ¿El BLUEPRINT_SPEC.json tiene "insight_origin" declarado?
           → Referencia al insight de APE_DECLARATION_M1 que justifica el componente
           → Si el componente es infra sin usuario directo → declarar "ETHOS_ONLY"
    APE-2: ¿Los estados del componente mapean a emociones de usuario?
           → Al menos 1 estado (error/empty/loading/success) con Pathos declarado
           → Excepción: componentes puramente técnicos (tokens, tipos) → "PATHOS_NA"
    APE-3: ¿Al menos 1 test tiene comentario de trazabilidad APE?
           → Formato: "// APE: verifica [insight] — [criterio WCAG/CA si aplica]"
           → Los tests axe cuentan automáticamente como APE-3 (Pathos implícito)

    PASS si los 3 ítems son PASS o tienen excepción justificada.
    BLOCKED si cualquier ítem es FAIL sin justificación.
```

## Actualización del GATE 1 — BLUEPRINT

Se agrega al output BLUEPRINT_SPEC.json:

```json
{
  "component_name": "[nombre]",
  "atomic_level": "[nivel]",
  "ape_traceability": {
    "ethos_source": "[ADR-N / investigación / benchmark / estándar]",
    "ethos_evidence": "[referencia verificable]",
    "pathos_insight_ref": "[APE_DECLARATION_M1 Insight N]",
    "pathos_user": "[perfil específico del usuario]",
    "pathos_moment": "[momento del journey donde este componente interviene]",
    "pathos_emotion": "[emoción que resuelve o que causaría su ausencia]",
    "logos_ca_ref": "[CA-### que verifica este componente]",
    "logos_test_file": "[ruta al test que traza al insight]"
  },
  "gate_1": "PENDING"
}
```

## Actualización del GATE 2 — FORGE SEAL

El checklist pasa de 15 a 16 ítems.
16/16 obligatorio. 15/16 no existe.

## Actualización del INTEGRITY_SHIELD.json

Se agrega:
```json
{
  "ape_ethos": "PASS",
  "ape_pathos": "PASS",
  "ape_logos": "PASS",
  "ape_gate": "PASS",
  "insight_origin": "[referencia al APE_DECLARATION_M1]"
}
```

---

# ════════════════════════════════════════════════════════════════
# PARTE 5: POR QUÉ ESTO IMPIDE QUE SE SALTEN LAS VALIDACIONES
# ════════════════════════════════════════════════════════════════

## El problema actual

```
ANTES (sin este skill):
  ¿Existe CUSTOMER_JOURNEY_FULL? → SI → PASS M1
  El documento puede estar vacío de insights reales.
  El gate se cumple formalmente pero sin profundidad.
```

## La solución

```
DESPUÉS (con este skill):
  ¿Existe CUSTOMER_JOURNEY_FULL? → SI → verificar APE_DECLARATION_M1
  ¿APE_DECLARATION_M1 tiene 3+ insights con formato completo? → SI → PASS
  ¿Cada insight tiene: usuario + acción + punto de fallo + causa raíz +
   emoción + escenario derivado + historia de usuario? → SI → PATHOS PASS
  ¿Cada insight traza a mínimo 1 épica del ROADMAP? → SI → LOGOS PASS
  Si cualquier respuesta es NO → GATE BLOCKED con razón específica.
```

## Por qué no se puede puentear

La declaración APE no es un checkbox — es texto que debe ser coherente.
Un INQUISITOR en Blind Review puede verificar si:
  → El usuario descrito en el insight existe en el USER_TASKS_MATRIX
  → El punto de fallo descrito está en el CUSTOMER_JOURNEY_FULL
  → El escenario derivado aparece en el PRODUCT_BACKLOG
  → El test de Logos cubre el criterio que el insight genera

Si cualquiera de esas trazas falta → el insight no es real.
Y sin insights reales → Pathos BLOCKED → M1 no cierra.
Y sin M1 cerrado → SPEC_DOCUMENT en M2 no puede tener trazabilidad completa.
Y sin trazabilidad en M2 → BLUEPRINT_SPEC en M3 no tiene APE_TRACEABILITY.
Y sin APE_TRACEABILITY → GATE 2 BLOCKED por ítem 16.

La cadena es ininterrumpible porque cada eslabón cita al anterior.

---

# ════════════════════════════════════════════════════════════════
# PARTE 6: COMANDOS
# ════════════════════════════════════════════════════════════════

  /skill persuasion              → Cargar este skill
  /ape status [M#]               → Ver APE_DECLARATION del Momentum
  /ape generate [M#]             → Generar template APE_DECLARATION para el Momentum
  /ape check [componente]        → Verificar APE_TRACEABILITY de un componente
  /ape insight new               → Guiar la captura de un nuevo insight con formato completo
  /ape insight validate [N]      → Verificar que el insight N tiene todos los campos
  /ape gate [M#]                 → Ejecutar APE_GATE del Momentum y mostrar resultado
  /ape summary                   → APE_SUMMARY de todo el proyecto (todos los Momentums)
  /ape propagate [M1] [M2]       → Verificar que los insights de M1 aparecen en M2
  /ape drift                     → Detectar si hay insights en M5 que contradicen M1

---

# ════════════════════════════════════════════════════════════════
# PARTE 7: ANTI-RATIONALIZATION TABLE (extensión del BFL)
# ════════════════════════════════════════════════════════════════

Las siguientes excusas son rechazadas sin debate por [INQUISITOR]:

┌─────────────────────────────────────────────────────┬─────────────────────────────────────────┐
│ EXCUSA                                              │ RESPUESTA DEL INQUISITOR                │
├─────────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ "El insight está implícito en el journey"           │ BLOCKED. Implícito no es trazable.      │
│ "El usuario es obvio — todos saben quién es"        │ BLOCKED. Declarar el perfil o BLOCKED.  │
│ "La emoción no aplica a componentes técnicos"       │ BLOCKED. Declarar PATHOS_NA con razón.  │
│ "El Ethos es la experiencia del equipo"             │ BLOCKED. La experiencia no es evidencia │
│                                                     │ sin un resultado documentado.           │
│ "El test cubre el caso — eso es suficiente Logos"   │ BLOCKED. El test sin comentario APE     │
│                                                     │ no prueba que cubre el insight correcto.│
│ "Esto ralentiza el proceso"                         │ BLOCKED. Un proceso rápido que construye│
│                                                     │ lo incorrecto es más lento que uno     │
│                                                     │ profundo que construye lo correcto.     │
│ "El cliente no pidió esto"                          │ BLOCKED. El cliente pidió que el        │
│                                                     │ producto funcione. APE garantiza eso.  │
└─────────────────────────────────────────────────────┴─────────────────────────────────────────┘

---

# ════════════════════════════════════════════════════════════════
# PARTE 8: ENCADENAMIENTO CON EL SISTEMA TITAN
# ════════════════════════════════════════════════════════════════

  SKILL_PERSUASION activa automáticamente:
    → ZERO_COMPLACENCY: los insights sin profundidad disparan ZC-2
    → ZERO_HALLUCINATION: las fuentes de Ethos se verifican con ZH
    → FORENSIC_TOOLS: audit_deep_detail.py incluye APE_COVERAGE en el reporte
    → CHAIN_MAP: APE_GATE de cada Momentum se agrega a los gates existentes
    → BFL_PROTOCOL: ítem 16 es parte permanente del Atomic Audit Checklist

  SKILL_PERSUASION NO reemplaza:
    → Ningún artefacto existente
    → Ningún gate existente
    → Ningún rol del Consejo

  SKILL_PERSUASION AGREGA:
    → Una declaración de profundidad por Momentum (APE_DECLARATION)
    → Un ítem al Atomic Audit Checklist (ítem 16)
    → Tres campos al BLUEPRINT_SPEC.json (ape_traceability)
    → Tres campos al INTEGRITY_SHIELD.json (ape_ethos/pathos/logos)
    → Una columna a la TRACEABILITY_MATRIX (ape_origin)
    → Una sección al MASTER_DOSSIER (APE_SUMMARY)

─────────────────────────────────────────────────────────────────
📍 Momentum: TRANSVERSAL M0→M5
✅ Generado: TITAN_SKILL_PERSUASION.md
→ Siguiente: agregar ítem 16 en TITAN_v7_0_BFL_PROTOCOL.md
             + campo ape_traceability en BLUEPRINT_SPEC template
🔒 Gate: revisión del [INQUISITOR] antes de activar en proyectos activos
─────────────────────────────────────────────────────────────────
