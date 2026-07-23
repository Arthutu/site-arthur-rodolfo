import eslint from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import astro from "eslint-plugin-astro";

export default [
    {
        ignores: ["dist/**", "node_modules/**", ".astro/**", ".wrangler/**"],
    },
    eslint.configs.recommended,
    ...astro.configs["flat/recommended"],
    {
        files: ["**/*.ts", "**/*.astro/*.js"],
        languageOptions: {
            parser: tsParser,
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        rules: tsPlugin.configs.recommended.rules,
    },
    {
        files: ["**/*.ts", "**/*.astro"],
        rules: {
            "no-undef": "off",
        },
    },
    {
        files: ["**/*.d.ts"],
        rules: {
            "@typescript-eslint/triple-slash-reference": "off",
        },
    },
    {
        files: ["**/*.astro"],
        languageOptions: {
            parserOptions: {
                parser: tsParser,
                extraFileExtensions: [".astro"],
            },
        },
    },
];
