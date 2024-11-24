import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

import configsImport from "../configs/import.js";
import configsTypescript from "../configs/typescript.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
	},
	pluginJs.configs.recommended,
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
];
