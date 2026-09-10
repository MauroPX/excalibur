# Pendientes — Navegación + ajustes

> Generado 2026-09-09 al cierre de la sesión de i18n/theme/schema.org.
> Rama `v2` @ `210252f`. Producción: **https://excalibur-six-chi.vercel.app**
>
> La sesión 09-09 (2ª mitad) hizo **ajustes** (i18n real, theme de 6 esquemas,
> schema.org). **La navegación quedó para la siguiente tarea** — este documento
> es su checklist.

---

## 1. URLs — páginas de pruebas técnicas / diagnósticos

Base producción: `https://excalibur-six-chi.vercel.app`
ES sin prefijo · EN con prefijo `/en`. Todas responden **200** (verificado 09-09).

### Índice
| Página | ES | EN |
|---|---|---|
| Pruebas técnicas y diagnósticos (índice) | `/pruebas-tecnicas` | `/en/pruebas-tecnicas` |

### Pruebas técnicas (una por slug)
| Caso | ES | EN |
|---|---|---|
| FleetControl — Monitor de flota en tiempo real | `/pruebas-tecnicas/fleetcontrol` | `/en/pruebas-tecnicas/fleetcontrol` |
| BCS — Plataforma de Metas Financieras | `/pruebas-tecnicas/bcs` | `/en/pruebas-tecnicas/bcs` |
| Codesa — Estrategia de investigación UX (módulo de pagos) | `/pruebas-tecnicas/codesa` | `/en/pruebas-tecnicas/codesa` |
| Solidaria Portal — Diagnóstico autodirigido de 7 canales | `/pruebas-tecnicas/solidaria` | `/en/pruebas-tecnicas/solidaria` |

### Meta-caso (se lista junto a las pruebas técnicas)
| Caso | ES | EN |
|---|---|---|
| EXCALIBUR — este mismo sitio como caso de estudio | `/excalibur` | `/en/excalibur` |

### Casos de cliente (`/casos/[slug]`) — para referencia
`/casos/correos-chile` · `/casos/bbva` · `/casos/fdn` (incluye la sección
"Momentum 2") · `/casos/lasalle` · `/casos/fid-seguros` · `/casos/sured` ·
`/casos/parking-ruedaz` · `/casos/siclo-idpay` — cada uno con su `/en/casos/…`.

### Otras
`/metodologia` · `/en/metodologia` — índice de 35 marcos de trabajo (los chips
"Metodología aplicada" de cada caso enlazan a `#slug` aquí).
`/privacidad` · `/en/privacidad` — política legal (`noindex`).

---

## 2. Checklist — NAVEGACIÓN (la tarea que sigue)

### 2.1 No hay header/nav global 🔴
- **Síntoma:** `/metodologia`, `/pruebas-tecnicas`, `/excalibur`, `/privacidad`
  son **páginas huérfanas** — solo se llega escribiendo la URL, por los `nextCase`
  encadenados o por los chips de metodología dentro de un caso.
- **Falta:** un `<header>`/`<nav>` persistente (o al menos enlaces en el home) a:
  `Casos` (`/#casos`), `Pruebas técnicas` (`/pruebas-tecnicas`),
  `Metodología` (`/metodologia`), `EXCALIBUR` (`/excalibur`).
- Componente nuevo sugerido: `organisms/SiteHeader` (o extender la
  `.ex-controls-bar` del `layout.tsx`, que hoy solo tiene idioma + tema + contraste).
- i18n: namespace `nav` ya existe (`nav.tabs.*`) — añadir `nav.links.*`.

### 2.2 No hay footer 🔴
- **`/privacidad` no tiene NINGÚN enlace entrante** en todo el sitio.
- Falta `organisms/SiteFooter` con: enlace a `/privacidad`, LinkedIn
  (`https://www.linkedin.com/in/maurogooc/`), GitHub (`https://github.com/MauroPX`),
  email (`lemaogo@gmail.com`), © año.
- El `ContactSection` ya tiene los canales, pero no cubre `/privacidad`.

### 2.3 `AudienceCard` "Ver caso" está muerto 🟠
- `src/content/home/{es,en}.ts` → `SYMPTOM_CARDS` y `ROLE_CARDS` **ya traen
  `targetSlug`** (`fdn`, `correos-chile`, `fid-seguros`, `bbva`).
- `src/components/organisms/NavSystem/NavSystem.tsx:49,58` renderiza
  `<AudienceCard … />` **sin pasar `onClick` ni `targetSlug`** → el botón
  "Ver caso" / "See case" (`AudienceCard.tsx:84`) no hace nada.
- **Fix:** en `NavSystem`, envolver la card en `<Link href={\`/casos/${card.targetSlug}\`}>`
  (usar `Link` de `@/i18n/navigation`) o pasar `onClick={() => router.push(...)}`.
  Dato listo, solo falta cablear el componente.

### 2.4 Tab "Explorar" / "Explore" sin enlaces 🟠
- `NavSystem.tsx:72-77` (panel 3) pinta `featuredProjects` como `<strong>` + `<p>`
  planos, sin `<a>`. Debería enlazar a `/casos/[slug]` o `/pruebas-tecnicas/[slug]`.
- Hoy `featuredProjects` ni siquiera se pasa desde `HomeTemplate` → el tab sale vacío.

### 2.5 Verificar deep-links de anclas
- Breadcrumb de `CasePage` apunta a `/#casos`. Confirmar que el `id="casos"`
  existe en el home (la sección de `CasesSection`) y que el scroll funciona.
- Chips de metodología → `/metodologia#<slug>` con `scrollMarginTop`. OK en código,
  validar en prod tras el próximo deploy.

---

## 3. Checklist — AJUSTES pendientes

### 3.1 URL canónica rota 🔴 (SEO)
- `NEXT_PUBLIC_SITE_URL` en Vercel = `https://excalibur-v2.vercel.app`, pero
  **ese dominio devuelve 404 en todas las rutas**. El sitio vivo es
  `https://excalibur-six-chi.vercel.app`.
- Efecto: **todos** los `<link rel="canonical">`, los `og:url` y los `url`/`@id`
  de schema.org apuntan a un dominio muerto.
- **Fix (Vercel → Settings → Environment Variables):** poner
  `NEXT_PUBLIC_SITE_URL=https://excalibur-six-chi.vercel.app` (o adjuntar un
  dominio real y usar ese). Redeploy. Sin cambio de código.

### 3.2 Purga de historial (PII) — usuario 🟠
- `git filter-repo` de 2 blobs (PDF BBVA + volcado SI-CLO). Comandos en
  `ESTADO_2026-09-09.md §3.2`. Bloqueado para Claude Code. Backup bundle en `/tmp`.

### 3.3 Revisión fina de traducciones EN 🟡
- Casos reconciliados (bbva / fid-seguros / correos-chile / lasalle) traducidos
  por subagente. Repasar que los matices sobrevivan: "por alcance" (no
  "certificado"), "429,53 UF", "~1.000 filas", "1.169 OI / 822 realizadas".

### 3.4 `InquisitorHUD` i18n 🟢 (dev-only)
- 5 strings ES sin cablear; namespace `inquisitor` ya existe en `messages/*.json`.
- No se monta en producción (`enabled={process.env.NODE_ENV === 'development'}`),
  así que no afecta al sitio vivo. Cerrar por consistencia.

### 3.5 CLAUDE.md — bloque `ESTADO ACTUAL` desfasado 🟢
- El *code fence* del top dice "Fase G en curso" y `v2 @ 9e4610c`. La subsección
  de abajo ya está al día (§5). Alinear el fence: `v2 @ 210252f`, Fase G CERRADA.

### 3.6 De sesiones anteriores (siguen abiertos)
- **Chromatic CI** falla siempre (TurboSnap webpack vs Storybook Vite) —
  `continue-on-error`, no bloquea.
- **Evidence Explorer** de 24 proyectos (v1 `evidence.json`) — no portado a v2.
- **Cobertura**: La Salle 2017-20 (Dacartec), PROCOLOMBIA, FSFB, Colsanitas,
  El Tiempo — proyectos reales reducidos a 1 línea. Material en `Backup_Proyectos`.
- **Gaps menores**: link a Drive de Siclo, CV descargable (PDF).

---

## 4. Orden sugerido para la tarea de navegación

1. **3.1** (env var canónica) — 2 min, alto impacto SEO, sin código.
2. **2.1 + 2.2** — `SiteHeader` + `SiteFooter` (un BFL cada uno). Cierra las
   páginas huérfanas y el enlace a `/privacidad`.
3. **2.3** — cablear `targetSlug` en `NavSystem` (fix pequeño, dato ya existe).
4. **2.4** — enlaces reales en el tab "Explorar" + pasar `featuredProjects`.
5. **2.5** — validar anclas en prod.
6. Resto de **§3** según prioridad.
