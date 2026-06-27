# PRODUCTION_READINESS_CHECKLIST — EXCALIBUR v2.0.0
# TITAN v7.0 | M4 | 2026-06-26
# Firmado: Staff Product Architect

---

## Frontend
- [x] pnpm build PASS sin errores
- [x] 171/171 tests pasando
- [x] 0 axe violations en componentes
- [x] TypeScript strict — 0 errores de tipos
- [x] Storybook 52+ stories publicadas en Chromatic
- [x] i18n ES/EN funcionando
- [x] Tema dark/light con toggle
- [x] 'use client' en todos los Client Components

## Contenido
- [x] Casos reales: FDN · Solidaria · BBVA (no placeholders)
- [x] Métricas reales en Hero
- [x] SYSTEM_PROMPT con datos reales en /api/chat

## APIs
- [x] /api/chat: Claude → Gemini → fallback (chain activo)
- [x] /api/health: respondiendo en producción
- [ ] STRAPI_API_TOKEN: pendiente Railway
- [ ] GEMINI_API_KEY: variable mal nombrada en Vercel (Gemini_API_Key)

## Infraestructura
- [x] Vercel deploy automático desde rama v2
- [x] CI/CD 7 jobs activos en GitHub Actions
- [x] .vercelignore con storybook-static excluido
- [x] TITAN_PROJECT.yaml con Consejo configurado
- [ ] Dominio propio: pendiente
- [ ] @vercel/analytics: no instalado
- [ ] @vercel/speed-insights: no instalado

## Seguridad
- [x] ANTHROPIC_API_KEY en Vercel (no en código)
- [x] .env.local en .gitignore
- [ ] DAST_REPORT: pendiente OWASP ZAP
- [ ] Headers de seguridad: pendiente vercel.json

## Accesibilidad
- [x] axe-core en CI/CD
- [x] WCAG_COMMITMENT.md firmado
- [ ] ACCESSIBILITY_AUDIT_REPORT formal: pendiente axe-cli prod
- [ ] WCAG_CONFORMANCE_STATEMENT: pendiente post-audit

## SCORE: 18/24 checks PASS (75%)
## ESTADO: PARTIAL_READY — funcional en producción con gaps documentados
## Firmado: Leonel Mauricio Gómez Ocampo — 2026-06-26
