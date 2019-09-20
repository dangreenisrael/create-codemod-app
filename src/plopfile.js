module.exports = function(plop) {
  const userAppRoot = process.env.PWD;
  // create your generators here
  plop.setGenerator('add-transform', {
    description: 'application controller logic',
    abortOnFail: true,
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name of transform',
      },
      {
        type: 'input',
        name: 'description',
        message: 'description of transform',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${userAppRoot}/transforms/{{dashCase name}}.js`,
        templateFile: 'plop-templates/transform.js',
      },
      {
        type: 'add',
        path: `${userAppRoot}/transforms/__tests__/{{dashCase name}}.js`,
        templateFile: 'plop-templates/__tests__/transform-test.js',
      },
      {
        type: 'add',
        path: `${userAppRoot}/transforms/__testfixtures__/{{dashCase name}}/case-1.input.js`,
        templateFile:
          'plop-templates/__testfixtures__/transform-tests/case-1.input.js',
      },
      {
        type: 'add',
        path: `${userAppRoot}/transforms/__testfixtures__/{{dashCase name}}/case-1.output.js`,
        templateFile:
          'plop-templates/__testfixtures__/transform-tests/case-1.output.js',
      },
      {
        type: 'add',
        path: `${userAppRoot}/transforms/__testfixtures__/{{dashCase name}}/case-2.input.js`,
        templateFile:
          'plop-templates/__testfixtures__/transform-tests/case-2.input.js',
      },
      {
        type: 'add',
        path: `${userAppRoot}/transforms/__testfixtures__/{{dashCase name}}/case-2.output.js`,
        templateFile:
          'plop-templates/__testfixtures__/transform-tests/case-2.output.js',
      },
      {
        type: 'modify',
        path: `${userAppRoot}/config/codemod-config.js`,
        pattern: /\/\* do not modify this line \*\//gi,
        templateFile: 'plop-templates/TRANSFORMER_INQUIRER_CHOICES.txt',
      },
    ],
  });
};
