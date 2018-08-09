'use strict'
export { }

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

let numbers = 5;
function sum(params: number) {

    let summed = 0;
    for (let i = 0; i <= params; i++) {
        summed += i;
    }
    
    return summed;
}
console.log(sum(numbers));
