import { Linter } from "eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

declare const _default: {
	configs: {
		import: Linter.Config[];
		react: Linter.Config[];
		typescript: Linter.Config[];
	};
	presets: {
		base: Linter.Config[];
		browser: Linter.Config[];
		node: Linter.Config[];
		react: Linter.Config[];
		serviceworker: Linter.Config[];
		solid: Linter.Config[];
		webworker: Linter.Config[];
	};
	globals: typeof globals;
	defineConfig: typeof defineConfig;
	globalIgnores: typeof globalIgnores;
};

export default _default;
