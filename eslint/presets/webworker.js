import globals from "globals";

import configsBase from "./base.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
	...configsBase,
	{
		languageOptions: {
			globals: globals.worker,
		},
	},
];
