/* exported getValues */
function getValues(object) {
  values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
