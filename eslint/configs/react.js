import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
	pluginReact.configs.flat.recommended,
	{
		// flat config for react hooks (not yet provided by eslint-plugin-react-hooks).
		name: "react-hooks/recommended",
		plugins: {
			"react-hooks": {
				meta: { name: "eslint-plugin-react-hooks", version: "5.0.0" },
				rules: pluginReactHooks.rules,
			},
		},
		rules: {
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "error",
		},
	},
	{
		settings: {
			react: { version: "detect" },
		},
		rules: {
			"react/prop-types": "off", // Doesn't play well with Utility Types, props need to be typed anyway.
		},
	},
];
