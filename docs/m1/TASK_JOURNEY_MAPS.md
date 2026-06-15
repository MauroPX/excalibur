# TASK_JOURNEY_MAPS.md
# EXCALIBUR v2.0 — Journey Maps por Audiencia
# TITAN v7.0 | M1 | 2026-06-15
# Nivel: B

---

## Journey 1 — C-level con problema sin nombre (T-01, T-02, T-03)

```
ENTRADA: LinkedIn / Google / referido
    ↓
HERO (< 5 segundos)
  → Lee: "Construyo sistemas que el equipo opera sin mí"
  → Ve: una métrica de impacto (ej: −90% LCP · FDN)
  → Decide: ¿esto me suena a lo que necesito?
    ↓ SÍ
NAV SYSTEM — Tab A: Por síntoma
  → Ve cards: "Mi producto no convierte" / "Necesito modernizar un legacy"
             / "Quiero integrar IA sin riesgos" / "Diseño y código no coinciden"
  → Hace clic en la card que describe su problema
    ↓
CASO DE ESTUDIO relevante
  → Lee el PAR: Problema → Acción → Resultado
  → Ve métricas verificables: LCP, TTM, tests, fallas resueltas
  → Ve stack real usado
  → Decide: ¿quiero hablar con esta persona?
    ↓ SÍ
CONTACTO
  → Abre modal → envía mensaje o copia el email
  → ÉXITO ✅
```

**Puntos de fricción a eliminar:**
- El hero no puede tener 3 CTAs compitiendo — un solo CTA principal
- La card de síntoma debe mostrar evidencia real, no solo el problema
- El caso de estudio debe cargar en < 1s — viene de Strapi via SSR

---

## Journey 2 — Reclutador con label de rol (T-04, T-05, T-06)

```
ENTRADA: LinkedIn Easy Apply / Job Board / ATS
    ↓
HERO (< 5 segundos)
  → Lee el título: "Staff Product Architect"
  → Ve el tagline de resultado
  → Busca el CV o la experiencia
    ↓
NAV SYSTEM — Tab B: Por rol
  → Ve la tarjeta featured: "No tengo claro qué perfil necesito"
  → Ve el grid de roles: UX Designer / Product Manager / React Dev / Tech Lead...
  → Hace clic en el rol que busca
    ↓
RESULTADO del rol
  → Lee: "Lo que entrego: DS con gobernanza real, WCAG AAA, sin drift diseño-código"
  → Ve los casos de estudio asociados a ese rol
    ↓
CV / EXPERIENCIA
  → Descarga CV V1 (human-first) o V2 (ATS killer)
  → Ve el timeline de experiencia 10+ años
  → ÉXITO ✅
```

**Puntos de fricción a eliminar:**
- "Expediente SSOT" / "Master Dossier" / "Executive One-Pager" son nombres
  internos que un reclutador no entiende — renombrar a "CV Técnico" / "CV Ejecutivo"
- El timeline debe mostrar año, empresa, rol, resultado — sin jerga TITAN

---

## Journey 3 — Comunidad técnica explorando TITAN (T-07, T-08, T-09, T-10)

```
ENTRADA: Twitter/X / GitHub / comunidad de producto / conferencia
    ↓
NAV SYSTEM — Tab D: Explorar
  → Selecciona: "Profundidad técnica"
  → Ve radar de capacidades por capa
  → Ve el flujo end-to-end M0→M5
    ↓
TITAN SECTION
  → Lee las features reales: BFL Protocol, Consejo 5 modelos, Blind Review
  → Ve el BPM M0→M5 explicado
  → Ve la compatibilidad: Claude / ChatGPT / Gemini / Cursor / Ollama
    ↓
CASOS DE ESTUDIO técnicos
  → Abre Simón v2: ve GATE 2 11/12, ATOMIC_SPEC, VERSION_CERTIFICATE
  → Abre Solidaria: ve 212 tests, Storybook en Chromatic, WCAG 2.2 AA
  → Abre "View Code": ve el repo excalibur
  → ÉXITO ✅
```

---

## Journey 4 — Visitante neutral con el agente IA (T-11, T-12)

```
ENTRADA: cualquier canal
    ↓
HERO
  → No entiende bien el título pero la métrica le llama la atención
    ↓
NAV SYSTEM — Tab C: Cuéntame tu caso
  → Ve el chat: "Cuéntame qué necesitas o qué está pasando en tu equipo"
  → Elige una sugerencia rápida o escribe libremente
    ↓
TITAN RAG AGENT
  → Procesa la situación → busca en pgvector los 20 proyectos
  → Responde: "Tu situación se parece al caso de FDN:
    tenían el mismo problema de LCP crítico y..."
  → Sugiere: "¿Quieres ver el caso completo?"
    ↓
CASO DE ESTUDIO
  → ÉXITO ✅
```

---

## Jerarquía de secciones — Laws of UX aplicadas

```
1. HERO                     ← Ley de Posición Serial (primero = más recordado)
   └── Resultado primero     ← Ley de Jakob (los visitantes leen el primero)
   └── 1 CTA principal       ← Ley de Hick (menos opciones = decisión más rápida)

2. NAV SYSTEM (4 tabs)      ← Ley de Miller (7±2 — 4 tabs es seguro)
   ├── Por síntoma (A)       ← Ley de Proximidad (problema + solución juntos)
   ├── Por rol (B)
   ├── Cuéntame con IA (C)
   └── Explorar (D)

3. CASOS DE ESTUDIO         ← Efecto de Posición Serial (el medio es profundidad)
   └── 20 proyectos desde Strapi
   └── PAR + métricas + stack + links

4. TITAN v7.0               ← Ley de Jakob (esperan ver el diferenciador aquí)
   └── Features reales, no marketing

5. STACK & CAPAS            ← Ley de Prägnanz (simplicidad — radar de capacidades)
   └── End-to-end por capa

6. CONTACTO                 ← Ley de Posición Serial (último = segundo más recordado)
   └── 1 CTA claro
```

**Irrevocable por Laws of UX:**
- El hero nunca tiene más de 1 CTA principal
- El nav system va inmediatamente después del hero (F-pattern — zona caliente)
- El contacto siempre al final
- Nunca más de 4 tabs en el nav system (Ley de Miller)

---

📍 Momentum: M1 | Artefacto: TASK_JOURNEY_MAPS | Nivel: B
