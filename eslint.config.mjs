import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import storybook from "eslint-plugin-storybook";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...storybook.configs["flat/recommended"],
  {
    // ADR-002 — imports por módulo (tree-shaking), nunca el barrel de @mui/material
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@mui/material",
              message:
                "Usa el import por módulo: import Button from '@mui/material/Button' (ADR-002). Para APIs de tema: '@mui/material/styles'.",
            },
          ],
        },
      ],
    },
  },
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "storybook-static/**",
      "next-env.d.ts",
      "coverage/**",
      // Copia local v1 (gitignored, CONGELADO) — no la audita el sistema de diseño v2
      "excalibur-main_V1/**",
      // Legacy v1 components — no son parte del sistema de diseño v2
      "src/components/InquisitorHUD.tsx",
      "src/components/StaffAtoms.tsx",
      "src/components/TitanRAGAgent.tsx",
      "src/stories/**",
    ],
  },
];

export default eslintConfig;
