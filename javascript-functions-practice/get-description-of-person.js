/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var lea = {
    name: 'Lea Verou',
    occupation: 'software developer',
    birthPlace: 'Lesbos, Greece'
  };
  return person = person.name + " is " + "a "+ person.occupation + " from " + person.birthPlace + '.';
}
