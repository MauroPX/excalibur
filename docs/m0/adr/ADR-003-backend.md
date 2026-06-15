# ADR-003 — Backend y Datos
# EXCALIBUR v2.0 | TITAN v7.0 | 2026-06-15
# Estado: ACCEPTED | Nivel: A (inmutable sin RFC)

## Decisión
**Strapi v5 + PostgreSQL 16 + pgvector → Railway**
Headless CMS desacoplado. REST API consumida desde Next.js.

## Content Types

| Tipo | Campos clave |
|---|---|
| Project | id, client, sector, year, role, par{problem,action,result}, metrics[], skills[], stack[], featured |
| Experience | company, role, period, summary_es, summary_en, tags[] |
| TitanModule | version, hub_name, hub_title, description_es, description_en, momentum |
| Translation | section, key, es, en |

## RAG
pgvector activo. Claude Sonnet 4.6 API para embeddings y respuestas.
DNA completa: 20 proyectos → poblar desde SSOT en M1.

## Variables de entorno requeridas
```env
NEXT_PUBLIC_STRAPI_URL=https://api.maurogomez.design
ANTHROPIC_API_KEY=sk-ant-...
NEXT_PUBLIC_DEFAULT_LANG=en
DATABASE_URL=postgresql://...
PGVECTOR_ENABLED=true
```

## Firmado
Leonel Mauricio Gómez Ocampo — Tech Lead | 2026-06-15
