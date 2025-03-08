import { defineConfig } from "eslint/config";
import globals from "globals";

import configsBase from "./base.js";

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
	...configsBase,
	{
		languageOptions: {
			globals: globals.node,
		},
	},
]);
