'use strict';
export {}


let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let percentage= '%';
let space = ' ';
let nothing = '';

for (let i= 0; i <= lineCount; i++) {
    for (let j = 0; j <= lineCount; j++) {
        if (i ==  0 || i == lineCount || j == 0 || j == lineCount) {
            nothing = nothing + percentage;
        } else {
            nothing = nothing + space;
        }
    }
    console.log(nothing);
    nothing = ''; 
}