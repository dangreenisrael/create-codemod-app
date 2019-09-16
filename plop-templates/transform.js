export default function transformer(file, api) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.Identifier)
    .forEach(node => {
      node = node;
    })
    .toSource();
}
