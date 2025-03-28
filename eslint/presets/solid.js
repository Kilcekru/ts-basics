import { defineConfig } from "eslint/config";
import pluginSolid from "eslint-plugin-solid";
import globals from "globals";

import configsBase from "./base.js";

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
	...configsBase,
	pluginSolid.configs["flat/typescript"],
	{
		languageOptions: {
			globals: globals.browser,
		},
	},
]);
