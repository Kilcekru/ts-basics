import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
	...tseslint.configs.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
		rules: {
			"@typescript-eslint/no-misused-promises": [
				"error",
				{ checksVoidReturn: false }, // return Promise<void> should be allowed where void is expected
			],
			"@typescript-eslint/no-namespace": "off", // namespace usage in modules can make sense
			"@typescript-eslint/no-unnecessary-type-constraint": "off", // inside tsx file 'extends unknown' is necessary, otherwise <T> would be parsed as react tag
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					ignoreRestSiblings: true, // necessary to "omit" properties from an object
					argsIgnorePattern: "^_", // allow args and vars starting with _ for rare exceptions when it is needed
					varsIgnorePattern: "^_",
				},
			],
			"@typescript-eslint/require-await": "off", // functions implementing a type sometimes have to return Promise even without await. async is easier than multiple Promise.resolve
		},
	},
];
