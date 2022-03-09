var numberOfClick = 0;
var buttonishot = document.querySelector('.hot-button');
var clickcounter = document.querySelector('.click-count');
function handleClick(event) {
  numberOfClick++;
  console.log(numberOfClick);
  clickcounter.textContent;
  if (numberOfClick.className < 4) {
    numberOfClick.className = "cold"
  } else if (numberOfClick.className < 7) {
    numberOfClick.className = "cool"
  } else if (numberOfClick.className < 10) {
    numberOfClick.className = "tepid"
  } else if (numberOfClick.className < 13) {
    numberOfClick.className = "warm"
  } else if (numberOfClick.className < 16) {
    numberOfClick.className = "hot"
  } else if (numberOfClick.className > 16) {
    numberOfClick.className = "nuclear"
  }
}
buttonishot.addEventListener('click', handleClick);
