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
