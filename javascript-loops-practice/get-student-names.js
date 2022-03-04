/* exported getStudentNames */
function getStudentNames(students) {
  var empty = [];
  for (var i = 0; i < students.length; i++) {
    empty.push(students[i].name);
  }
  return empty
}
