'use strict'

const button = document.querySelector("button");

button.addEventListener('click', (event) => {
  event.setTimeout(() => {
    button.innerText = `2 seconds ellapsed`;
  }, 2000);
})