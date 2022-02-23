var number1 = 96;
var number2 = 6;
var number3 = 9;
var maximumValue = Math.max(number1, number2, number3);
console.log('maximumValue:', maximumValue);

var heroes = ['Superman', 'Batman', 'Spiderman', 'Deadpool'];
var randomNumber = Math.random(3);
var randomNumber = (randomNumber * heroes.length);
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library =
[
    {
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell'
    },
    {
      title: 'Brave New World',
      author: 'Aldous Huxley'
    }
  ];
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
}

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

library.push(js);

library.unshift(css);

library.splice(1, js);

console.log('library:', library);


var fullName = 'Joshua Preciado';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
