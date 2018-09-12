'use strict';

let container = document.getElementsByTagName('p')
let newLine = document.getElementsByClassName('animals')
console.log(container);
for (let i = 0; i < container.length - 1; i++) {
  container[i].innerHTML = newLine[0].innerText
}
container[3].innerHTML = newLine[0].innerHTML

/*
console.log('innerHTML:', container.innerHTML);
console.log('textContent:', container.textContent);
container.innerHTML = 'goat rabbit cat dog';
*/