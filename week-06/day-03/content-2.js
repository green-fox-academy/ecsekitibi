'use strict'

let newLines = document.getElementsByTagName('li')
let newArray = ['apple', 'banana', 'cat', 'dog']
for (let i = 0; i < newLines.length; i++) {
  newLines[i].innerText = newArray[i]

}
let newBackgroundColor = document.getElementsByTagName('ul')
newBackgroundColor[0].setAttribute('style', 'background-color: limegreen')