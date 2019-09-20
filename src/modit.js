const fs = require('fs');
const j = require('jscodeshift');

module.exports = function addCodeModToConfig(filePath, slug, description) {
  const newElement = `
{
  name: "${description}",
  value: "${slug}"
}
`;
  const source = fs.readFileSync(filePath, 'utf8');
  const newSource = j(source)
    .find(j.AssignmentExpression)
    .forEach(node => {
      const leftProp = node.value.left.property;
      if (leftProp && leftProp.name === 'TRANSFORMER_INQUIRER_CHOICES') {
        const elements = node.value.right.elements;
        elements.push(newElement);
      }
    })
    .toSource();
  fs.writeFileSync(filePath, newSource);
};
