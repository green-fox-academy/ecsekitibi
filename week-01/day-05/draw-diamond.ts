'use strict';
export {}
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
let space = ' ';
let star = '*';
let star2 = '*';
let doubleSpace = '  ';


for (let i = 0; i < lineCount/2; i++) {
    for (let j = i; j < (lineCount / 2 - 1 ); j++) {
        space += ' ';
    }
    console.log( space + star );
    if (lineCount % 2 == 0 && i == lineCount/2 - 1) {
        console.log( space + star );
    }
    star += '**';
    space = ' ';
}

for (let k = 2; k < (lineCount/2 + 1); k++) {
    for (let l = k; l < lineCount/2; l++) {
        star2 += '**';
    }
    console.log( doubleSpace + star2 );
    doubleSpace += ' ';
    star2 = '*';
}