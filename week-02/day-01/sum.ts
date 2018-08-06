'use strict'
export {}

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result


function sum(params:number) {
    
    let numbers = 0;
    for (let i = 0; i <= params; i++)  {
        numbers = numbers + i;
    
    }
    return numbers;
}
console.log(sum(12));
