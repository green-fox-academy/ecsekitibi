'use strict'

let newImage = document.getElementsByTagName('img');
console.log('original image:', newImage[0].getAttribute('src'));

newImage[0].setAttribute('src', 'https://img.cutenesscdn.com/640/ppds/ea56b370-b90a-40ef-a728-8bd8d0d430b5.jpg');
newImage[0].setAttribute('style', 'width:600px', 'height:400px');

let newLink = document.getElementsByTagName('a');
newLink[0].setAttribute('href', 'https://greenfoxacademy.com');

let myButton = document.getElementsByClassName('this-one')
myButton[0].disabled = true;
myButton[0].innerText = 'Dont click me!'





