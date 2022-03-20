/* exported isUpperCased */
function isUpperCased(word) {
  if (word <= word.toUpperCase()) {
    return true
  }
  else if (word <= word.toLowerCase()) {
    return false
  }
}
