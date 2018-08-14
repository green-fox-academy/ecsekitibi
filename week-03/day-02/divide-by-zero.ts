declare function require(path: string): any;
'use strict';
export { };
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

let myNumber: number = 100;
function divideByTen(number: number, divider: number) {
    if (divider === 0) {
        throw new Error('fail')
    }
    return number / divider;
}
try {
    console.log(divideByTen(myNumber, 0));
} catch (e) {
    console.log(e.message);
    
}

