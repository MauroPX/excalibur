# API_CONTRACTS.md
# EXCALIBUR v2.0 — Contratos de API Strapi → Next.js
# TITAN v7.0 | M2 | 2026-06-15
# Nivel: A (inmutable sin RFC)

---

## Base URL

```
Producción:  https://api.maurogomez.design
Staging:     https://api-staging.maurogomez.design (Railway)
Local:       http://localhost:1337
```

## Autenticación

Todos los endpoints de lectura pública son abiertos (sin auth).
El panel admin de Strapi usa JWT y está bloqueado a IP de Railway.

```typescript
// src/lib/strapi.ts
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL
const STRAPI_TOKEN = process.env.STRAPI_READ_TOKEN  // solo lectura

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${STRAPI_TOKEN}`,
}
```

---

## Contrato 1 — Proyectos

### GET /api/projects

Retorna la lista de proyectos para CasesSection y NavSystem.

**Query params:**
```
?populate=metrics,skills,tags
&filters[featured][$eq]=true       (solo proyectos destacados)
&sort=year_end:desc
&pagination[pageSize]=20
&locale=es                          (o 'en')
```

**Response:**
```typescript
interface ProjectsResponse {
  data: ProjectItem[]
  meta: { pagination: { total: number; page: number; pageSize: number } }
}

interface ProjectItem {
  id: number
  attributes: {
    slug: string                    // 'bbva-colombia-design-system'
    client: string                  // 'BBVA Colombia & Panamá'
    sector: string                  // 'Banca & Fintech'
    role: string                    // 'Staff Product Architect'
    year_start: number
    year_end: number | null
    summary: string                 // 1-2 líneas, resultado primero
    par_problem: string
    par_action: string
    par_result: string
    metrics: MetricItem[]           // [{label, value, unit}]
    skills: string[]
    stack: string[]
    audience_tags: AudienceTag[]    // ['cliente', 'reclutador']
    symptom_tags: string[]          // ['legacy', 'conversion', 'ia']
    role_tags: string[]             // ['product-manager', 'ux-designer']
    featured: boolean
    og_image?: string
  }
}
```

### GET /api/projects/:slug

Retorna un proyecto individual para CasePage /cases/[slug].

**Response:** Igual que `ProjectItem` con campo `content` adicional (markdown completo).

---

## Contrato 2 — Experiencia

### GET /api/experiences

Retorna el historial laboral para ExperienceTemplate y NavSystem Tab B.

**Query params:**
```
?sort=year_end:desc
&populate=skills
```

**Response:**
```typescript
interface ExperienceItem {
  id: number
  attributes: {
    company: string
    role: string
    year_start: number
    year_end: number | null         // null = posición actual
    description: string
    achievements: string[]
    skills: string[]
    audience_tags: AudienceTag[]
  }
}
```

---

## Contrato 3 — Skills

### GET /api/skills

Retorna skills para StackSection y NavSystem Tab D.

**Response:**
```typescript
interface SkillItem {
  id: number
  attributes: {
    name: string
    category: 'pensamiento' | 'diseno' | 'operaciones' | 'tecnico'
    level: number                   // 0-100 para SkillBar
    level_label: 'Senior' | 'Expert' | 'Lead'
    icon_name: string               // nombre del ícono MUI
  }
}
```

---

## Contrato 4 — TITAN Modules

### GET /api/titan-modules

Retorna los módulos de TITAN v7.0 para TitanSection.

**Response:**
```typescript
interface TitanModuleItem {
  id: number
  attributes: {
    version: string                 // 'v7.0'
    hub_name: string                // 'MEGA_01'
    hub_title: string               // 'Críticos'
    description: string
    momentum: string                // 'M0', 'M1'...
    commands_count: number
  }
}
```

---

## Contrato 5 — Chat (interno)

### POST /api/chat

Endpoint interno Next.js (no Strapi). Multi-provider con protocolo quota.

**Request:**
```typescript
{ message: string }               // max 500 chars, sanitizado
```

**Response:**
```typescript
{
  response: string
  suggested_cases?: string[]
  provider: 'claude' | 'gemini' | 'fallback'
}
```

**Códigos HTTP:**
- `200` — respuesta exitosa (cualquier provider)
- Los errores de provider se manejan internamente → siempre retorna 200

---

## Manejo de errores

```typescript
// src/lib/strapi.ts — wrapper estándar
async function fetchStrapi<T>(endpoint: string, params?: string): Promise<T> {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}${params ?? ''}`, {
    headers,
    next: { revalidate: 3600 },    // ISR: revalida cada hora
  })

  if (!res.ok) {
    // Fallback a datos estáticos si Strapi no responde
    throw new StrapiError(res.status, endpoint)
  }

  return res.json() as Promise<T>
}
```

---

## Cache y revalidación

| Endpoint | Estrategia | TTL |
|---|---|---|
| /api/projects | ISR (Incremental Static Regeneration) | 1 hora |
| /api/projects/:slug | ISR | 1 hora |
| /api/experiences | ISR | 24 horas |
| /api/skills | ISR | 24 horas |
| /api/titan-modules | ISR | 24 horas |
| /api/chat | Sin cache (siempre dinámico) | — |

---

📍 Momentum: M2 | Artefacto: API_CONTRACTS | Nivel: A
Firmado: Leonel Mauricio Gómez Ocampo — Staff Product Architect | 2026-06-15
