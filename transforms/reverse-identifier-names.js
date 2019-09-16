export default function transformer(file, api) {
  const j = api.jscodeshift;

  const reverse = path =>
    j(path).replaceWith(
      j.identifier(
        path.node.name
          .split('')
          .reverse()
          .join('')
      )
    );

  return j(file.source)
    .find(j.Identifier)
    .forEach(reverse)
    .toSource();
}
