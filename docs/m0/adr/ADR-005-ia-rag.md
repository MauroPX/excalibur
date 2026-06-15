# ADR-005 — IA y RAG
# EXCALIBUR v2.0 | TITAN v7.0 | 2026-06-15
# Estado: ACCEPTED | Nivel: A (inmutable sin RFC)

## Decisión
**Claude Sonnet 4.6 API + pgvector + Strapi como fuente de verdad**

## Flujo RAG
```
Visitante → TitanRAGAgent (React)
  → /api/chat (Next.js Route)
  → pgvector similarity search (20 proyectos embebidos)
  → Claude Sonnet 4.6 con contexto recuperado
  → Respuesta con proyecto relevante + métricas + links
```

## DNA — 20 proyectos
BBVA · FDN · Solidaria · Simón v2 · Correos Chile · FID Seguros · Nivelics ·
Ruedaz · Redeban · Colsanitas · PROCOLOMBIA · Ecopetrol · SI-CLO · ADL Labs ·
SuRed · TVS+ · Old Mutual · Skandia · Dacartec · TITAN v7.0 (entrada propia)

## Fallback
Si Claude API no responde → el agente muestra los 3 proyectos más relevantes
por sector de forma estática. Zero downtime.

## Firmado
Leonel Mauricio Gómez Ocampo — Tech Lead + Staff Architect | 2026-06-15
