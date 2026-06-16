# SETUP_PLAN.md — EX-v2-INFRA-001 — Setup base
# EXCALIBUR v2.0 | 2026-06-15

## 1. Limpieza de Legacy
- [ ] Eliminar `public/original/` (contenido estático v1.0)
- [ ] Eliminar `scripts/` (scripts de orquestación v1.0)
- [ ] Limpiar `src/app/page.tsx` del iframe

## 2. Actualización de Dependencias (package.json)
- [ ] Next.js 15.x (Downgrade de 16 si es necesario para estabilidad React 19)
- [ ] React 19.x
- [ ] @mui/material ^6.4.0
- [ ] next-intl ^3.x
- [ ] Eliminar TailwindCSS y sus configuraciones

## 3. Estructura de Directorios (Atomic Design)
- [ ] `src/components/atoms/`
- [ ] `src/components/molecules/`
- [ ] `src/components/organisms/`
- [ ] `src/components/templates/`
- [ ] `src/theme/`
- [ ] `src/i18n/messages/`
- [ ] `src/lib/`

## 4. Configuración Base
- [ ] `tsconfig.json`: `strict: true`
- [ ] `.env.local.example`: Definir variables base (ANTHROPIC_API_KEY, NEXT_PUBLIC_STRAI_URL, etc.)
- [ ] `src/theme/index.ts`: ThemeProvider placeholder

## 5. Validación
- [ ] `pnpm dev` corre sin errores
- [ ] `pnpm type-check` pasa
- [ ] `pnpm lint` pasa
- [ ] `pnpm build` genera el artefacto correctamente
