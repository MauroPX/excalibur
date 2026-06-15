# THREAT_MODEL.md
# EXCALIBUR v2.0 — Modelo de Amenazas Completo
# TITAN v7.0 | M1 | 2026-06-15
# Nivel: A (inmutable sin RFC) | Expansión de THREAT_MODEL_v0

---

## Superficie de ataque ampliada

| Componente | Superficie | Exposición |
|---|---|---|
| TitanRAGAgent | /api/chat — Claude API | Pública |
| Strapi v5 admin | Panel administrativo | Privada (Railway) |
| Strapi REST API | GET /api/projects, /api/experiences | Pública (solo lectura) |
| Vercel Deploy | Variables de entorno, preview URLs | Semi-privada |
| Dominio / DNS | Cloudflare WAF | Pública |
| GitHub repo | Código fuente excalibur | Público (rama v2) |
| pgvector embeddings | Datos de proyectos en PostgreSQL | Privada (Railway) |

---

## Amenazas STRIDE completas

| ID | Amenaza | Tipo STRIDE | Componente | Severidad | Mitigación | Estado |
|---|---|---|---|---|---|---|
| T-001 | API key leak en código o logs | Information Disclosure | ANTHROPIC_API_KEY | **Alta** | Server-side only. Nunca NEXT_PUBLIC_. Logs sin secrets. | Mitigado |
| T-002 | Abuso del endpoint /api/chat (DoS económico) | Denial of Service | /api/chat | **Alta** | Rate limiting 10 req/min/IP. Vercel Edge Middleware. | Mitigado |
| T-003 | Prompt injection en TitanRAGAgent | Tampering | Input del visitante | **Media** | System prompt fijo e inmutable. Sanitización de input. Max 500 chars. | Mitigado |
| T-004 | Acceso no autorizado al admin de Strapi | Elevation of Privilege | Strapi admin | **Media** | Auth Strapi + password fuerte + IP whitelist en Railway | Mitigado |
| T-005 | Dependencias con CVEs críticos | Tampering | npm packages | **Media** | pnpm audit en CI. 0 críticas antes de merge. Dependabot activo. | Mitigado |
| T-006 | Variables de entorno en cliente | Information Disclosure | Next.js build | **Alta** | Solo NEXT_PUBLIC_ para valores no sensibles. API key nunca expuesta. | Mitigado |
| T-007 | Preview URLs de Vercel accesibles públicamente | Information Disclosure | feat/v2-* branches | **Baja** | Las preview URLs son públicas por diseño (portafolio público). Aceptado. | Aceptado |
| T-008 | Scraping del contenido del portafolio | Information Disclosure | DOM / API REST | **Baja** | El contenido es público por diseño. robots.txt configurado. | Aceptado |
| T-009 | SQL injection via pgvector queries | Tampering | PostgreSQL | **Media** | Strapi usa ORM (no SQL raw). Parámetros siempre sanitizados. | Mitigado |
| T-010 | XSS en contenido generado por el agente | Tampering | TitanRAGAgent output | **Media** | Respuestas del agente renderizadas como texto plano, no HTML. React escapa automáticamente. | Mitigado |
| T-011 | Enumeración de proyectos via API | Information Disclosure | GET /api/projects | **Baja** | El contenido es público. Paginación activa. No hay datos sensibles. | Aceptado |
| T-012 | Expiración de dominio / hijacking DNS | Spoofing | DNS / Cloudflare | **Media** | Auto-renovación activa. Cloudflare como registrar. Alertas por email. | Mitigado |

---

## Riesgos aceptados documentados

| ID | Riesgo | Justificación | Fecha |
|---|---|---|---|
| R-001 | Contenido del portafolio es indexable | Es un portafolio público — la indexación es el objetivo | 2026-06-15 |
| R-002 | Preview URLs de Vercel son públicas | Portafolio público. No hay datos sensibles en previews | 2026-06-15 |
| R-003 | Sin autenticación de visitantes | No hay área privada en el portafolio | 2026-06-15 |
| R-004 | Código fuente visible en GitHub | La transparencia técnica es un diferenciador deliberado | 2026-06-15 |

---

## Controles de seguridad activos en CI/CD

```yaml
# GitHub Actions — jobs de seguridad
jobs:
  - type-check: tsc --noEmit (0 errores TypeScript)
  - lint: eslint (0 errores de lint)
  - audit: pnpm audit (0 vulnerabilidades críticas)
  - axe: axe-core (0 violations WCAG)
  - build: next build (build exitoso antes de deploy)
```

---

Firmado: Leonel Mauricio Gómez Ocampo — Tech Lead | 2026-06-15

📍 Momentum: M1 | Artefacto: THREAT_MODEL | Nivel: A | GATE BLOQUEANTE para M2
