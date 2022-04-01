/* exported tail */
function tail(array) {
  var empty = [];
  for (i = 1; i < array.length; i++) {
    empty.push(array[i]);
  }
  return empty
}
