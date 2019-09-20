#!/usr/bin/env node

const inquirer = require('inquirer');
const console = require('console');
const chalk = require('chalk');
async function getNameAndDescription() {
  const anwsers = await inquirer.prompt([
    { name: 'name', message: "what is the codemod's slug?" },
    { name: 'description', message: 'what will the codemod do?' },
  ]);
  return anwsers;
}

async function run() {
  const nodePlop = require('node-plop');
  const { name, description } = await getNameAndDescription();
  // load an instance of plop from a plopfile
  const plop = nodePlop(__dirname + `/../src/plopfile.js`);
  // get a generator by name
  const basicAdd = plop.getGenerator('add-transform');

  // run all the generator actions using the data specified
  const output = await basicAdd.runActions({ name, description });
  if (output.failures.length) {
    console.error(chalk.red('Codemod could NOT complete code generation'));
    console.log(output);
    process.exit(1);
  }
  console.log(output);
}

run();
