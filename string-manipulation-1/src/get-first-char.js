/* exported getFirstChar */
function getFirstChar(string) {
  var empty = [];
  for (var i = 0; i < string.length; i++) {
    empty.push(string[0]);
  }
  return empty[0];
}
