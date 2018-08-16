// Given a string, compute recursively a new string where all the 'x' chars have been removed.

'use strict';
export { };

function xReplaceY(inputString: string, letterX: string): string {
  if (inputString.indexOf(letterX) === -1) {
    return inputString
  } else {
    inputString = inputString.replace(letterX, '')
    return xReplaceY(inputString, letterX);
  }
}

console.log(xReplaceY('xanax', 'x'));