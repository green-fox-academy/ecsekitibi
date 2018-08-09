'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let starCount = 1;
let spaceCount = 3;
let output = '';

for (let i = 0; i < lineCount; i++) {
    output = '';
    for (let j = 0; j < spaceCount; j++) {
        output += ' ';
    }
    for (let k = 0; k < starCount; k++) {
        output += '*';
    }
    if (i < 3) {
        spaceCount--;
        starCount += 2;
    } else {
        spaceCount++;
        starCount -= 2;
    }
    console.log(output);



}