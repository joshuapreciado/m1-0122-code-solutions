var numberOfClicks = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickcounter = document.querySelector('.click-count');

$hotButton.addEventListener('click', handleClick);

function handleClick(event) {
  numberOfClicks++;
  var temperature;

  if (numberOfClicks < 4) {
    temperature = 'cold';
  } else if (numberOfClicks < 7) {
    temperature = 'cool';
  } else if (numberOfClicks < 10) {
    temperature = 'tepid';
  } else if (numberOfClicks < 13) {
    temperature = 'warm';
  } else if (numberOfClicks < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  $hotButton.className = 'hot-button ' + temperature;
  $clickcounter.textContent = 'Clicks: ' + numberOfClicks;
}
