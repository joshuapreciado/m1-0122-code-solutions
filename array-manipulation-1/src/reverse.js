/* exported reverse */
function reverse(array) {
  var empty = [];

  for (var i = array.length - 1; i > - 1; i--) {
    empty.push(array[i]);
  }
  return empty;
}
