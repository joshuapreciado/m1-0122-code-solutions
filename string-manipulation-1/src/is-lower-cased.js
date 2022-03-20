/* exported isLowerCased */
function isLowerCased(word) {
  if (word >= word.toLowerCase()) {
    return true
  }
  else if (word >= word.toUpperCase()) {
    return false
  }
}
