import { defineConfig } from "eslint/config";
import globals from "globals";

import configsReact from "../configs/react.js";
import configsBase from "./base.js";

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
	...configsBase,
	...configsReact,
	{
		languageOptions: {
			globals: globals.browser,
		},
	},
]);
