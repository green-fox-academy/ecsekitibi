'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

console.log('apple');
setTimeout(() => { console.log('pear'); }, 1000);
setTimeout(() => { console.log('melon'); }, 3000);
setTimeout(() => { console.log('grapes'); }, 5000);

let fruitArray = [apple, pear, melon, grapes];

fruitArray.forEach(elem, index => {
  let timeout = 0;
  if (index === 0) {
    timeout = 0;
  } else if (index === 1) {
    timeout = 1000;
  } else if (index === 2) {
    timeout = 3000;
  } else {
    timeout = 5000;
  }
})