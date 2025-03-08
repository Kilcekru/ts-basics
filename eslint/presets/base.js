import eslintJs from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";

import configsImport from "../configs/import.js";
import configsTypescript from "../configs/typescript.js";

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
	},
	eslintJs.configs.recommended,
	...configsTypescript,
	...configsImport,
	eslintConfigPrettier,
	{
		languageOptions: {
			ecmaVersion: 2022,
			parserOptions: {
				ecmaFeatures: { impliedStrict: true },
			},
		},
		rules: {
			"no-console": "error", // don't allow usage of console
		},
	},
]);
