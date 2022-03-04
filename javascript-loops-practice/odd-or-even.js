/* exported oddOrEven */
function oddOrEven(numbers) {
  var empty = [];
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers % 2) === 0) {
      empty.push(numbers[i]);
      return 'odd'
    }
    else
    {
      empty.push(numbers[i]);
      return 'even'
    }
    return empty
  }
}
