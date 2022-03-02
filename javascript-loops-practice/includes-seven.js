/* exported includesSeven */
function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 7) {
      return false
    }
    else {
      return true
    }
  }
}
