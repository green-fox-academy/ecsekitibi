'use strict'

let newClass = document.getElementsByTagName('p');
if (newClass[3].classList.contains('dolphin')) {
  newClass[0].innerText = 'pear';
}

if (newClass[0].classList.contains('apple')) {
  newClass[2].innerText = 'dog';
}

newClass[0].classList.add('red');

newClass[1].style.borderRadius = '20px';
