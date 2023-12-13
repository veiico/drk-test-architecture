import { fileURLToPath } from "url";

/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig | TailwindConfig } */
const config = {
    arrowParens: "always",
    printWidth: 100,
    singleQuote: false,
    jsxSingleQuote: false,
    semi: true,
    trailingComma: "all",
    tabWidth: 4,
    plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
    tailwindConfig: fileURLToPath(new URL("../../tooling/tailwind/index.ts", import.meta.url)),
};

export default config;
