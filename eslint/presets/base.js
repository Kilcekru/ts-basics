import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

import configsImport from "../configs/import.js";
import configsTypescript from "../configs/typescript.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
	pluginJs.configs.recommended,
	...configsTypescript,
	...configsImport,
	eslintConfigPrettier,
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
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
];
