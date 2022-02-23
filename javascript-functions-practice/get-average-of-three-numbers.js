/* exported getAverageOfThreeNumbers */
function getAverageOfTwoNumbers(x, y) {
  return (x + y) / 2;
}

function getAverageOfThreeNumbers(x, y, z) {
  return (x + y + z) / 3;
}

function getRightTriangleArea(base, height) {
  return (base * height) / 2;
}

function getSquareOfNumber(number) {
  return (number * number);
}

function getSumOfSquares(x, y) {
  var x = x * x;
  var y = y * y;
  return x + y;
}

function getAreaOfCircle(radius) {
  return (Math.PI * radius * radius);
}

function getFirstElement(array) {
  return array[0];
}

function getSecondElement(array) {
  return array[1];
}

function getElementAtIndex(array, index) {
  return array[index];
}

function getLengthOfArray(array) {
  return array.length;
}

function getLastElement(array) {
  return array[array.length - 1];
}

function getFirstCharacter(string) {
  return string[0]
}

function getSecondCharacter(string) {
  return string[1]
}

function getCharacterAtIndex(string, index) {
  return string[index];
}

function getLengthOfString(string) {
  return string.length;
}

function getLastCharacter(string) {
  return string[string.length - 1];
}

function getLastNameOfPerson(person) {
  var lea = {
    firstName: 'Lea',
    lastName: 'Verou'
  };
  return person.lastName;
}

function getFullNameOfPerson(person) {
  var lea = {
    firstName: 'Lea',
    lastName: 'Verou'
  };
  return person = person.firstName + ' ' + person.lastName;
}

function getDescriptionOfPerson(person) {
  var lea = {
    name: 'Lea Verou',
    occupation: 'software developer',
    birthPlace: 'Lesbos, Greece'
  };
  return person = name + ' ' + occupation + ' ' + birthPlace;
}

function getFirstInitialOfPerson(person) {
  var lea = {
    firstName: 'Lea',
    lastName: 'Verou'
  };
  return person.firstName[0];
}

function getInitialsOfPerson(person) {
  var lea = {
    firstName: 'Lea',
    lastName: 'Verou'
  };
  return person = person.firstName[0] + person.lastName[0];
}

function getPropertyValue(object, key) {
  var lea = {
    name: 'Lea Verou',
    occupation: 'software developer',
    birthPlace: 'Lesbos, Greece'
  };
  return object[key];
}
