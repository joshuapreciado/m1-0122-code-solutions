/* exported countdown */
function countdown(number) {
  var numbers = [];
  var number = number;
  while (number >= 0) {
    numbers.push(number);
    number--;
  }
  return numbers
}
