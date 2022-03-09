function handleClick(event) {
  console.log(event);
  console.log('button clicked');
  console.log(event.target);
}
var buttontest = document.querySelector('.click-button');
buttontest.addEventListener('click', handleClick);


function handleMouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var forhover = document.querySelector('.hover-button');
forhover.addEventListener('mouseover', handleMouseOver);


function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var buttond = document.querySelector('.double-click-button');
buttond.addEventListener('dblclick', handleDoubleClick);
