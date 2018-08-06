'use strict';
export {}

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let space : string = '';
let star : string = '*';

for (let i = 0; i < lineCount; i++) {
    for (let j = i; j < lineCount; j++) {
        space += ' ';
    }
    console.log( space + star );
    star += '**';
    space = '';
    
}


