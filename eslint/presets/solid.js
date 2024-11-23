import pluginSolid from "eslint-plugin-solid";
import globals from "globals";

import configsBase from "./base.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
	...configsBase,
	pluginSolid.configs["flat/typescript"],
	{
		languageOptions: {
			globals: globals.browser,
		},
	},
];
