import configsImport from "./eslint/configs/import.js";
import configsReact from "./eslint/configs/react.js";
import configsTypescript from "./eslint/configs/typescript.js";
import presetsBase from "./eslint/presets/base.js";
import presetsNode from "./eslint/presets/node.js";
import presetsReact from "./eslint/presets/react.js";
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
		node: presetsNode,
		react: presetsReact,
		solid: presetsSolid,
		webworker: presetsWebworker,
	},
};
