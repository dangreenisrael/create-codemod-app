module.exports.validateSlug = function(string) {
  const regex = RegExp(/^[a-z]{1}[a-z0-9-]+$/);
  if (regex.test(string)) {
    return true;
  }
  return 'Only lowercase letters, numbers, and dashes are allowed. Must start with a letter';
};

module.exports.validateSentence = function(string) {
  const regex = RegExp(/^[\w]{1}[\w-\ _]+$/);
  if (regex.test(string)) {
    return true;
  }
  return 'Only letters, numbers, dashes, spaces, and underscodes are allowed. Must start with a leter';
};
