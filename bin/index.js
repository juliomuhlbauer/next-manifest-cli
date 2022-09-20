#!/usr/bin/env node

const jiti = require("jiti")();

const package = require("../package.json");

require("dotenv").config();

const filePath = process.env.ISDEV
  ? "./src/index.ts"
  : `./node_modules/${package.name}/src/index.ts`;

const { run } = jiti(filePath);

run();
