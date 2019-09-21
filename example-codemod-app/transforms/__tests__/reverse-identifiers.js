const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const testCases = ['case-1', 'case-2'];
testCases.forEach(test => {
  defineTest(__dirname, 'reverse-identifiers', null, `reverse-identifiers/${test}`);
});
