#!/usr/bin/env node

const jiti = require("jiti");

const { appStart } = jiti(process.cwd(), {
  interopDefault: true,
  esmResolve: true,
})("./src/scripts/app-start.ts");

appStart();
