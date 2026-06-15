# SECURITY_POLICY.md
# EXCALIBUR v2.0 — Política de Seguridad
# TITAN v7.0 | M0 | 2026-06-15
# Nivel: A (inmutable sin RFC)

---

## Alcance

Portafolio público. No procesa datos personales de usuarios.
El único secreto crítico es la `ANTHROPIC_API_KEY` para el TitanRAGAgent.

---

## Principios

1. **Secrets nunca en el repositorio** — `.env.local` en `.gitignore`. Variables de entorno solo en Vercel dashboard.
2. **ANTHROPIC_API_KEY protegida** — solo accesible desde API Routes de Next.js (server-side). Nunca expuesta al cliente (`NEXT_PUBLIC_`).
3. **Rate limiting en /api/chat** — máximo 10 requests/minuto por IP para proteger la API key de abuso.
4. **Cloudflare WAF** — en producción, igual que FDN. Protección DDoS + bot management.
5. **Dependencias auditadas** — `pnpm audit` en cada PR. 0 vulnerabilidades críticas antes de merge.
6. **Content Security Policy** — headers configurados en `next.config.ts` desde el primer sprint.

---

## Datos del TitanRAGAgent

El agente solo accede a:
- DNA de proyectos (datos públicos del portafolio)
- No accede a datos personales del visitante
- No persiste conversaciones
- No almacena inputs del usuario

---

## Respuesta a incidentes

Si se detecta exposición de la API key:
1. Revocar inmediatamente en console.anthropic.com
2. Generar nueva key
3. Actualizar en Vercel dashboard
4. Commit `fix/v2-security-rotate-key` documentando el incidente

---

Firmado: Leonel Mauricio Gómez Ocampo — Tech Lead | 2026-06-15

📍 Momentum: M0 | Artefacto: SECURITY_POLICY | Nivel: A
