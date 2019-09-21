#!/usr/bin/env node
const path = require('path');
const rootDirectory = path.join(__dirname, '/..');
process.env.CODEMOD_DIRECTORY = rootDirectory;
require('create-codemod-app').run();
