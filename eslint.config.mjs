import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, prettier: prettierRecommended.plugins.prettier },
    extends: ["js/recommended", prettierRecommended, prettierConfig],
    languageOptions: { globals: globals.browser, sourceType: "module" },
  },
  {
    files: ["webpack.config.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        node: true,
      },
    },
  },
]);
