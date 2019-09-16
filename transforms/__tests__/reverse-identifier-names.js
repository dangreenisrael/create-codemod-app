const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const testCases = ['case-1', 'case-2'];
testCases.forEach(test => {
  defineTest(
    __dirname,
    'reverse-identifier-names',
    null,
    `reverse-identifier-names/${test}`
  );
});
