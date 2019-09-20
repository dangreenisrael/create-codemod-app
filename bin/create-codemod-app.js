#!/usr/bin/env node

const inquirer = require('inquirer');
const console = require('console');
const chalk = require('chalk');
const { execSync } = require('child_process');
const { validateSlug } = require('./utils');
async function getPackageName() {
  const anwsers = await inquirer.prompt([
    {
      name: 'packageName',
      message: 'command name for this codemod app?',
      validate: validateSlug,
    },
  ]);
  return anwsers.packageName;
}

async function getShouldLink(packageName) {
  const anwsers = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'link',
      message: `Would you like to create a global '${packageName}' command for running codemods? (this uses npm link)`,
    },
  ]);
  return anwsers.link;
}

async function getShouldGenerateCodemod() {
  const anwsers = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'generateCodemod',
      message: 'Would you like to generate a codemod?',
    },
  ]);
  return anwsers.generateCodemod;
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
  console.log('\nSetting up the app and running `npm install`\n');
  execSync(`cd ${packageName}; npm install`, { stdio: 'inherit' });
  const shouldLink = await getShouldLink(packageName);
  if (shouldLink) {
    execSync(`cd ${packageName}; npm link;`, { stdio: 'inherit' });
    console.log(
      chalk.green(`\nWe have added a global '${packageName}' command for you\n`)
    );

    const shouldGenerateCodemod = await getShouldGenerateCodemod();
    if (shouldGenerateCodemod) {
      execSync(`cd ${packageName}; npm run generate-codemod;`, {
        stdio: 'inherit',
      });
    }
  }
  console.log(
    chalk.green(`\n\n Everything is setup in the '${packageName}' directory`)
  );
}

run();
