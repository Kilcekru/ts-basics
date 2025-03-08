import { defineConfig } from "eslint/config";
import pluginImport from "eslint-plugin-import";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
	{
		name: pluginImport.flatConfigs.recommended.name,
		plugins: pluginImport.flatConfigs.recommended.plugins,
		settings: pluginImport.flatConfigs.typescript.settings,
		rules: {
			"import/first": "error", // Ensure all imports appear before other statements.
			"import/default": "error", // Ensure a default export is present, given a default import.
			"import/export": "error", // Forbid any invalid exports, i.e. re-export of the same name.
			"import/no-duplicates": "error", // Forbid repeated import of the same module in multiple places.
			"import/no-extraneous-dependencies": ["error"], // Forbid the use of extraneous packages.
			"import/no-relative-packages": "error", // Forbid importing packages through relative paths.
			"import/no-self-import": "error", // Forbid a module from importing itself.
			"import/no-cycle": ["error", { ignoreExternal: true }], // Forbid a module from importing a module with a dependency path back to itself.
		},
	},
	{
		name: "simple-import-sort/all",
		plugins: { "simple-import-sort": pluginSimpleImportSort },
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
		},
	},
]);
