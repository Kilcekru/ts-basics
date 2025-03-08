import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

import configsImport from "./eslint/configs/import.js";
import configsReact from "./eslint/configs/react.js";
import configsTypescript from "./eslint/configs/typescript.js";
import presetsBase from "./eslint/presets/base.js";
import presetsBrowser from "./eslint/presets/browser.js";
import presetsNode from "./eslint/presets/node.js";
import presetsReact from "./eslint/presets/react.js";
import presetsServiceworker from "./eslint/presets/serviceworker.js";
import presetsSolid from "./eslint/presets/solid.js";
import presetsWebworker from "./eslint/presets/webworker.js";

export default {
	configs: {
		import: configsImport,
		react: configsReact,
		typescript: configsTypescript,
	},
	presets: {
		base: presetsBase,
		browser: presetsBrowser,
		node: presetsNode,
		react: presetsReact,
		serviceworker: presetsServiceworker,
		solid: presetsSolid,
		webworker: presetsWebworker,
	},
	globals,
	defineConfig,
	globalIgnores,
};
