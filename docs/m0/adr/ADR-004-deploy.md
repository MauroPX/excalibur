# ADR-004 — Estrategia de Deploy
# EXCALIBUR v2.0 | TITAN v7.0 | 2026-06-15
# Estado: ACCEPTED | Nivel: A (inmutable sin RFC)

## Decisión
```
github.com/MauroPX/excalibur
  ├── main → Netlify (portafolio actual — operativo sin cambios)
  └── v2   → Vercel (reconstrucción completa)
```

## Reglas
- `main` no recibe features nuevas. Solo cherry-picks de fixes P0.
- `v2` se desarrolla con TITAN BFL. Cada `feat/v2-*` tiene preview URL propia en Vercel.
- Cuando `v2` esté en producción: dominio propio → Vercel. `main` queda como backup.

## Nomenclatura de ramas
```
feat/v2-{scope}    nueva feature
fix/v2-{scope}     corrección en v2
chore/v2-{scope}   infraestructura / config
docs/v2-{scope}    documentación
```

## Firmado
Leonel Mauricio Gómez Ocampo — Tech Lead | 2026-06-15
