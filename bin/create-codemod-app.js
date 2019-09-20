#!/usr/bin/env node

const inquirer = require('inquirer');
const console = require('console');
const chalk = require('chalk');

async function getPackageName() {
  const anwsers = await inquirer.prompt([
    { name: 'packageName', message: 'command name for this codemod app?' },
  ]);
  return anwsers.packageName;
}

async function run() {
  const nodePlop = require('node-plop');
  const packageName = await getPackageName();

  // load an instance of plop from a plopfile
  const plop = nodePlop(__dirname + `/../src/plop-new-codemod-app.js`);
  // get a generator by name
  const basicAdd = plop.getGenerator('add-new-codemod-app');

  // run all the generator actions using the data specified
  const output = await basicAdd.runActions({ packageName });
  if (output.failures.length) {
    console.error(chalk.red('Failed to generate codemod app'));
    console.log(output);
    process.exit(1);
  }
  console.log('Success!');
}

run();
