# Create Codemod App

This is a CRA (Create React App) style app for creating codemod libraries that function in a similar way to the `react-codemod` project. In fact, we use a slightly modified version of
their codemod runner. As such, this project is licensed under 2 licenses. Everything not
in the `src/facebook-codemod-runner` is under the MIT license, whereas everything in that
folder is under the facebook 'BSD+patents' license.

This is a fancy wrapper for [jscodeshift](https://github.com/facebook/jscodeshift) which is itself a fancy wrapper for [recast](https://github.com/benjamn/recast).

If you are just getting into codemods, I would highly recommend starting with the [AST Explorer sandbox](https://astexplorer.net/#/gist/43af797d62b981aa1552c08ebe45b994/0e876140d9bed83f87158fd2d11ced3266c5111a)

## How to use it.

Much like CRA, you go to the directory you want to create your codemod app in and run

```shell
npx create-codemod-app;
```

You will be prompted to answer some questions about your app, and we will generate everything
for you in a directory with the name you chose for the app.

Assuming you called it `my-codemod-app`, and you chose to generate a codemode called `reverse-identifiers`, you will now have a directory structure that looks like this:

```
.
├── bin
│   └── run-codemod.js
├── config
│   └── codemod-config.js
├── package-lock.json
├── package.json
└── transforms
    ├── __testfixtures__
    │   └── reverse-identifiers
    │       ├── case-1.input.js
    │       ├── case-1.output.js
    │       ├── case-2.input.js
    │       └── case-2.output.js
    ├── __tests__
    │   └── reverse-identifiers.js
    └── reverse-identifiers.js
```

The `transforms` directory is where all of your codemod transforms will live as[jscodeshift](https://github.com/facebook/jscodeshift#unit-testing) relies on it, `config/codemod-config.js` is where the codemod runner will look for codemods, and the `bin/run-codemod.js` file is what is run when you call `my-codemod-app` from anywhere on your machine. All of this is setup for you during the install process (unless you opt out in the prompts). 

Unless you are an advanced user, it is recommended only to edit the files in `transforms/*` and `transforms/__test_fixtures/*/* directory`.


To add another codemod, simply run `npm run generate-codemod`

## Customizing your codemods

Every time you run `npm run generate-codemod` you will get new, noop codemod like this:

```javascript
module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.Identifier)
    .forEach(node => {
      node = node;
    })
    .toSource();
};
```

Out of the box, you can run `my-codemod` from any directory and you get facebook's `react-codemod` cli. This will let you choose which codemods to run.

In the `example-codemod-app` directory of this repo, you will find a working example that actually reverses all identifiers. This is the 'hello world' example from [AST Explorer](https://astexplorer.net/#/gist/43af797d62b981aa1552c08ebe45b994/0e876140d9bed83f87158fd2d11ced3266c5111a)

## Issues and Pull requests

This is a new project and all contributions are welcome.

If you have a bug to report or something is unclear, please feel free to open an issue.

If you would like to add a feature, please open up an issue first to discuss it.

Thanks and happy coding 😊
