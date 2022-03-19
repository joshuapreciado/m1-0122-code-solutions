/* exported compact */
function compact(array) {
  var empty = [];
  for (var i = 0; i < array.length; i++); {
    if (typeof array[i] !== false) {
      empty.push(array[i])
    }
    else if (array[i] === null) {
      empty.push(array[i]);
    }
    else if (array[i] === NaN) {
      empty.push(array[i]);
    }
    else if (array[i] === 0 && array[i] === -0) {
      empty.push(array[i]);
    }
    else if (array[i] === undefined) {
      empty.push(array[i]);
    }
    else if (typeof array[i] !== 'string') {
      empty.push(array[i]);
    }
    else if (array[i] < empty) {
      empty.push(array[i]);
    }
  }
  return empty
}
