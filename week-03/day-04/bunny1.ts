'use strict'
export { }
// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively 
// (without loops or multiplication).

function numberOfEars (n: number) {
    if(n > 0) {
    return 2 + numberOfEars(n - 1);
    } else {
        return 0;
    }
}
console.log(numberOfEars(10));

