/* exported filterOutNulls */
function filterOutNulls(values) {
  var empty = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      empty.push(values[i]);
    }
  }
  return empty
}
