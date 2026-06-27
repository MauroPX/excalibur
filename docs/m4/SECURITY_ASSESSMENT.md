# SECURITY_ASSESSMENT.md — EXCALIBUR v2.0.0
# TITAN v7.0 | M4 | 2026-06-26

## Controles implementados

| Control | Estado | Evidencia |
|---|---|---|
| API keys en variables de entorno | ✅ | Vercel env vars |
| Secrets fuera del repositorio | ✅ | .env.local en .gitignore |
| HTTPS en producción | ✅ | Vercel SSL automático |
| Input sanitization en /api/chat | ✅ | stripHtmlTags + maxLength 500 |
| Rate limiting implícito | ✅ | Timeout 3s por proveedor |
| SAST en CI/CD | ⚠️ | ESLint activo — CodeQL pendiente |
| DAST | ❌ | Pendiente OWASP ZAP |
| Headers de seguridad | ❌ | vercel.json no configurado |
| Dependabot | ❌ | No configurado |

## Riesgos aceptados para v2.0.0

| Riesgo | Nivel | Justificación |
|---|---|---|
| Sin DAST formal | BAJO | Portafolio personal sin datos de usuarios sensibles |
| Sin headers CSP | BAJO | Next.js provee protección base |
| GEMINI_API_KEY mal nombrada | BAJO | Fallback a Claude activo |

## Pendiente para v2.1.0
- vercel.json con headers de seguridad
- Dependabot activado
- OWASP ZAP contra producción

Firmado: Leonel Mauricio Gómez Ocampo — 2026-06-26
