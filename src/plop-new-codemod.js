module.exports = function(plop) {
  const userAppRoot = process.env.PWD;
  // create your generators here
  plop.setGenerator('add-transform', {
    description: 'application controller logic',
    abortOnFail: true,
    actions: [
      {
        type: 'add',
        path: `${userAppRoot}/transforms/{{dashCase name}}.js`,
        templateFile: 'new-codemod-templates/transform.js',
      },
      {
        type: 'add',
        path: `${userAppRoot}/transforms/__tests__/{{dashCase name}}.js`,
        templateFile: 'new-codemod-templates/__tests__/transform-test.js',
      },
      {
        type: 'add',
        path: `${userAppRoot}/transforms/__testfixtures__/{{dashCase name}}/case-1.input.js`,
        templateFile:
          'new-codemod-templates/__testfixtures__/transform-tests/case-1.input.js',
      },
      {
        type: 'add',
        path: `${userAppRoot}/transforms/__testfixtures__/{{dashCase name}}/case-1.output.js`,
        templateFile:
          'new-codemod-templates/__testfixtures__/transform-tests/case-1.output.js',
      },
      {
        type: 'add',
        path: `${userAppRoot}/transforms/__testfixtures__/{{dashCase name}}/case-2.input.js`,
        templateFile:
          'new-codemod-templates/__testfixtures__/transform-tests/case-2.input.js',
      },
      {
        type: 'add',
        path: `${userAppRoot}/transforms/__testfixtures__/{{dashCase name}}/case-2.output.js`,
        templateFile:
          'new-codemod-templates/__testfixtures__/transform-tests/case-2.output.js',
      },
    ],
  });
};
