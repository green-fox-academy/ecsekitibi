/*
Here is an image inspector, but the buttons are not implemented yet, that will
be your task!
  - the nav buttons(up, down, left, right) move the background by 10px
    - the zoom buttons increase / decrease the image by 20 %
      - attach only two event listeners to the nav element
        - one for navigation
          - one for zooming
*/

const nav = document.querySelector('nav');
const zoom = document.querySelector('.zoom');
const picture = document.querySelector('.img-inspector');

let x = 0;
let y = 0;
let size = 100;

nav.addEventListener('click', (event) => {
  if (event.target.dataset.direction === "up") {
    y -= 10;
    picture.style.backgroundPositionY = `${y}px`
  } else if (event.target.dataset.direction === "down") {
    y += 10;
    picture.style.backgroundPositionY = `${y}px`
  } else if (event.target.dataset.direction === "left") {
    x -= 10;
    picture.style.backgroundPositionX = `${x}px`
  } else if (event.target.dataset.direction === "right") {
    x += 10;
    picture.style.backgroundPositionX = `${x}px`
  } else if (event.target.dataset.direction === "in") {
    size *= 1.2;
    picture.style.backgroundSize = `${size}%`;
  } else if (event.target.dataset.direction === "out") {
    size *= 0.8;
    picture.style.backgroundSize = `${size}%`;
  }
});

