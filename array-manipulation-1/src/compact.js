/* exported compact */
function compact(array) {
  var empty = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      empty.push(array[i]);
    }
  }
  return empty
}

/**N/A */
