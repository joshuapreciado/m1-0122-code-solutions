/* exported toObject */
function toObject(keyValuePair) {
  var objectTest = {
    [keyValuePair[0]]: keyValuePair[1]
  }
  return objectTest
}
