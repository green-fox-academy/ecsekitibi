'use strict';

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let lineCount: number = 4;
let line = '';
for (let i = 0; i < lineCount; i ++) {
    line = line + '*';
    console.log(line);

}