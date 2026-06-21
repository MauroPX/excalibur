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
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "storybook-static/**",
      "next-env.d.ts",
      "coverage/**",
      // Legacy v1 components — no son parte del sistema de diseño v2
      "src/components/InquisitorHUD.tsx",
      "src/components/StaffAtoms.tsx",
      "src/components/TitanRAGAgent.tsx",
      "src/stories/**",
    ],
  },
];

export default eslintConfig;
