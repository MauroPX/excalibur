# RISK_REGISTER.md
# EXCALIBUR v2.0 — Registro de Riesgos del Proyecto
# TITAN v7.0 | M1 | 2026-06-15
# Nivel: B (vivo — se actualiza en cada momentum)

---

## Escala de evaluación

| Probabilidad | Valor | Impacto | Valor |
|---|---|---|---|
| Alta | 3 | Crítico | 3 |
| Media | 2 | Alto | 2 |
| Baja | 1 | Bajo | 1 |

**Score = Probabilidad × Impacto** | Umbral de acción: ≥ 4

---

## Registro activo

| ID | Riesgo | Categoría | P | I | Score | Estado | Mitigación | Owner |
|---|---|---|---|---|---|---|---|---|
| R-001 | ANTHROPIC_API_KEY agotada en producción → TitanRAGAgent falla | Técnico | 2 | 3 | **6** | MITIGADO | Fallback chain Claude → Gemini → estático. Protocolo quota 429/529/5xx | TL |
| R-002 | Railway (Strapi) down → portafolio sin datos dinámicos | Infraestructura | 1 | 3 | **3** | MONITOREAR | SSR con fallback a datos estáticos JSON. Health check en CI/CD | TL |
| R-003 | Merge a v2 sin CI/CD 7/7 verde | Proceso | 2 | 3 | **6** | MITIGADO | GitHub Actions bloquea merge. Branch protection en v2 | TL |
| R-004 | `main` (Netlify) cae durante construcción de v2 | Negocio | 1 | 3 | **3** | ACEPTADO | main está congelado y estable. Fixes urgentes via cherry-pick | PO |
| R-005 | Proyectos DNA incompletos (7 de 20 actualmente) | Datos | 3 | 2 | **6** | EN PROGRESO | Completar evidence-dna.json antes de feat/v2-strapi | TL |
| R-006 | WCAG violations bloqueando merge | Calidad | 2 | 2 | **4** | MITIGADO | axe-core en CI/CD job 4. Preview en Storybook con a11y: error | TL |
| R-007 | Deuda técnica de archivos legacy v1 en src/ | Técnico | 1 | 2 | **2** | RESUELTO | InquisitorHUD, StaffAtoms, TitanRAGAgent v1 eliminados en limpieza Ola 4 | TL |
| R-008 | TypeScript strict rompiendo componentes en PRs | Técnico | 2 | 2 | **4** | MITIGADO | tsc --noEmit en job 2. 0 any sin justificación | TL |
| R-009 | next-intl sin configurar → portafolio solo en español | Producto | 2 | 2 | **4** | PENDIENTE | feat/v2-i18n antes de merge final a v2 | TL |
| R-010 | Chromatic sin CHROMATIC_PROJECT_TOKEN → job 7 falla | CI/CD | 1 | 2 | **2** | RESUELTO | Secret creado en GitHub el 2026-06-19 | TL |
| R-011 | MUI v6 → v7 deprecation sin ADR | Técnico | 1 | 2 | **2** | MONITOREAR | Pinned a ^6.x en package.json. ADR-002 inmutable | TL |
| R-012 | Strapi v5 sin configurar → datos estáticos en producción | Infraestructura | 2 | 2 | **4** | PENDIENTE | feat/v2-strapi + Railway setup antes de M4 | TL |

---

## Riesgos resueltos / cerrados

| ID | Riesgo | Resolución | Fecha |
|---|---|---|---|
| R-C01 | eslint-config-next incompatible con ESLint 9 flat config | FlatCompat bridge instalado | 2026-06-18 |
| R-C02 | @mui/icons-material v9 incompatible con @mui/material v6 | Downgrade a ^6.4.0 | 2026-06-19 |
| R-C03 | storybook-static/ sin .gitignore → commits innecesarios | Agregado a .gitignore | 2026-06-18 |
| R-C04 | SendIcon de @mui/icons-material falla en jsdom | Reemplazado por SVG inline | 2026-06-18 |
| R-C05 | styled(Box) pierde prop polimórfico `component` en TS strict | Cambiado a styled('section') | 2026-06-19 |

---

## Riesgos aceptados formalmente

| ID | Riesgo | Justificación | Firmado |
|---|---|---|---|
| RA-001 | Contenido del portafolio indexable | Portafolio público — indexación es el objetivo | PO 2026-06-15 |
| RA-002 | Preview URLs de Vercel públicas | No hay datos sensibles en previews | TL 2026-06-15 |
| RA-003 | Sin autenticación de visitantes | No hay área privada en el portafolio | PO 2026-06-15 |
| RA-004 | Código fuente visible en GitHub | Transparencia técnica es diferenciador deliberado | PO 2026-06-15 |

---

📍 Momentum: M1→M3 | Artefacto: RISK_REGISTER | Nivel: B
Última actualización: 2026-06-19 | Owner: Leonel Mauricio Gómez Ocampo
