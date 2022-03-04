/* exported filterOutStrings */
function filterOutStrings(values) {
  var empty = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      empty.push(values[i]);
    }
  }
  return empty
}
