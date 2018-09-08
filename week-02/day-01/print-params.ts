'use strict'
export { }
// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

let numbers = [10, 87, 3, 4, 5, 6];

function printParams(params: number[]) {
    for (let i = 0; i < params.length; i++) {
        console.log(params[i]);
    }
}
printParams(numbers);