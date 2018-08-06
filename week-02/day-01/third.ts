'use strict'
export {}
// -  Create a variable named `magicNumbers`
//    with the following content: `[1, 3, 5, 7]`
// -  Print the third element of `magicNumbers`

let magicNumbers = [1,3,5,7];
function printThird(params:number[]) {
    console.log(params[2]);
}
printThird(magicNumbers);