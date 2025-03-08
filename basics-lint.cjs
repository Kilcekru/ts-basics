#!/usr/bin/env node
const Path = require("node:path");
const path = Path.dirname(require.resolve("eslint/package.json"));
require(Path.join(path, "bin/eslint.js"));
