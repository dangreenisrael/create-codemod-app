module.exports = function(plop) {
  const currentDir = process.env.PWD;
  // create your generators here
  plop.setGenerator('add-new-codemod-app', {
    description: 'Create new codemod app',
    abortOnFail: true,
    actions: [
      {
        type: 'add',
        path: `${currentDir}/{{packageName}}/.gitignore`,
        templateFile: 'new-codemod-app-templates/gitignore.txt',
      },
      {
        type: 'add',
        path: `${currentDir}/{{packageName}}/package.json`,
        templateFile: 'new-codemod-app-templates/package.json.txt',
      },
      {
        type: 'add',
        path: `${currentDir}/{{packageName}}/bin/run-codemod.js`,
        templateFile: 'new-codemod-app-templates/bin/run-codemod.js',
      },
      {
        type: 'add',
        path: `${currentDir}/{{packageName}}/config/codemod-config.js`,
        templateFile: 'new-codemod-app-templates/config/codemod-config.js',
      },
    ],
  });
};
