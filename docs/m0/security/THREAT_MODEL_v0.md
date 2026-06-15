# THREAT_MODEL_v0.md
# EXCALIBUR v2.0 — Modelo de Amenazas Inicial
# TITAN v7.0 | M0 | 2026-06-15
# Nivel: A (inmutable sin RFC) | Versión: v0 (M0) — se expande en M1

---

## Superficie de ataque

| Componente | Superficie |
|---|---|
| TitanRAGAgent | /api/chat — llamada a Claude API |
| Strapi v5 | API REST de contenido |
| Vercel Deploy | Branch deployments + environment variables |
| Dominio | DNS + SSL |

---

## Amenazas identificadas (STRIDE simplificado)

| ID | Amenaza | Componente | Severidad | Mitigación |
|---|---|---|---|---|
| T-001 | API key leak en código | ANTHROPIC_API_KEY | Alta | Solo en server-side. Nunca NEXT_PUBLIC_. |
| T-002 | Abuso del endpoint /api/chat | TitanRAGAgent | Media | Rate limiting 10 req/min/IP |
| T-003 | Prompt injection via input del visitante | TitanRAGAgent | Media | Sanitización de input. System prompt fijo. |
| T-004 | Acceso no autorizado al admin de Strapi | Strapi v5 | Media | Auth Strapi + IP whitelist en Railway |
| T-005 | Dependencias con CVEs | npm packages | Baja | pnpm audit en CI. 0 críticas antes de merge |
| T-006 | Exposición de variables de entorno en el cliente | Next.js | Alta | Solo variables NEXT_PUBLIC_ sin secretos |

---

## Riesgos aceptados

| ID | Riesgo | Justificación |
|---|---|---|
| R-001 | Contenido del portafolio es público | Es un portafolio público por diseño |
| R-002 | Sin autenticación de visitantes | No aplica — no hay área privada |

---

Firmado: Leonel Mauricio Gómez Ocampo — Tech Lead | 2026-06-15

📍 Momentum: M0 | Artefacto: THREAT_MODEL_v0 | Nivel: A
