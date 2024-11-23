# @kilcekru/ts-basics

Provides opiniated basic configuration for typescript and eslint.

- [Setup](#setup)
- [tsconfig](#tsconfig)
- [eslint](#eslint)
	- [Presets](#presets)
	- [Configs](#configs)
	- [Eslint and typescript](#eslint-and-typescript)
	- [Performance](#performance)

## Setup

Install ts-basics and the peer-dependency to typescript.\
`npm i -D @kilcekru/ts-basics typescript@5.6`

The peer dependency on typescript has a range of >=5.4 <5.7.\
There is an upper bound on the typescript, because 5.7 is not yet supported by the used version of typescript-eslint.\
ts-basics includes all needed packages for eslint, so no need to install anything there, unless you want to extend the config.

## tsconfig

There are multiple flavours available:
- `tsconfig-base`: base configuration, does not set module, moduleResolution, target, lib.
- `tsconfig-browser-app`: for browser, no jsx config (es2023 is used, support for older browsers not given)
- `tsconfig-browser-library`: for browser, no jsx config (enables declaration files)
- `tsconfig-node-app`: for node >=20.11
- `tsconfig-node-library`: for node >=20.11 (enables declaration files)
- `tsconfig-react-app`: for browser using react
- `tsconfig-react-library`: for browser using react (enables declaration files)
- `tsconfig-solid-app`: for browser using solidJs
- `tsconfig-solid-library`: for browser using solidjs (enables declaration files)
- `tsconfig-webworker-app`: for browser webworkers
- `tsconfig-webworker-library`: for browser webworkers (enables declaration files)

To use one of those flavours, just extend your tsconfig from it:  
This will give you the basic configuration, but does not specify any paths.  
You still have to add `include`, `outDir`,...

*Example*:
```json
{
	"extends": "@kilcekru/ts-basics/tsconfig-node-app.json",
	"compilerOptions": {
		"outDir": "dist",
	},
	"include": [
		"src/**/*"
	]
}
```

## eslint

Eslint 9.15 is currently used.\
All provided presets and configs only support flat config files. [See eslint.org configuration](https://eslint.org/docs/latest/use/configure/configuration-files)

### Presets

There are multiple presets available:
- `base`: base config, no globals defined. [See eslint.org globals](https://eslint.org/docs/latest/use/configure/language-options#specifying-globals)\
  Includes plugins eslint, typescript-eslint, eslint-plugin-import, eslint-plugin-simple-import-sort, eslint-config-prettier and customizations.
- `node`: globals set for nodejs
- `react`: globals set for browser, includes plugins eslint-plugin-react, eslint-plugin-react-hooks.
- `solid`: golabls set for browser, includes plugin eslint-plugin-solid.
- `webworker`: globals set for webworker

To use it just include the presets in your eslint config.\
You can do custom overrides by adding plugins / settings after ts-basics.

*Example*:
```js
// eslint.config.mjs
import tsBasics from "@kilcekru/ts-basics";

export default [
	...tsBasics.presets.react,
	{
		ignores: ["**/dist/"], // tell eslint to ignore all files within folders called dist
	},
];
```

### Configs

Cou can also do your own base config and just include parts of the config.\
Multiple configs are available:
- `import`: Includes plugins eslint-plugin-import, eslint-plugin-simple-import-sort & configuration.
- `react`: Includes plugins eslint-plugin-react, eslint-plugin-react-hooks & configuration.
- `typescript`: Includes plugin typescript-eslint & configuration.

*Example*:
```js
// eslint.config.mjs
import pluginJs from "@eslint/js";
import tsBasics from "@kilcekru/ts-basics";

export default [
	pluginJs.configs.recommended,
	...tsBasics.configs.typescript,
];
```

### Eslint and typescript
typescript-eslint is configured with projectservice enabled. [See typescript-eslint.io projectservice](https://typescript-eslint.io/packages/parser/#projectservice)\
This should work out of the box but if you have problems, read the typescript-eslint docs to configure service options or projects.

### Performance
Eslint gets exponential slower on bigger projects.  
If you use it in a big monorepo & experience speed or OOM problems, create a separate eslint.config.mjs for each package.  
Linting each package will be faster and use less memory than linting everything at once.
