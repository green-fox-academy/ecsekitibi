'use strict';
export {}

let linesCount: number = 4;
let space = '';



for (let i = 0; i < linesCount; i++) {
    for (let j = 4; j < 8; j++) {
        space = space + '*';
    }
     console.log(space);
}

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is