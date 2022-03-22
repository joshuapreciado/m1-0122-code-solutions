
var tasks = document.querySelector('.task-list');

tasks.addEventListener('click', handleTasks)

function handleTasks(event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target !== 'button') {
    event.target.closest('.task-list-item');
    console.log('.task-list-item');
    var taskitem = event.target.closest('.task-list-item');
    console.log('closest task-list-item', taskitem);
    taskitem.remove();
  }
}
