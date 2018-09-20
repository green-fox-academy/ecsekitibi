'use strict'
export { }
// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(params: number) {
    let numbers = 1;
    for (let i = 1; i <= params; i++) {
        numbers = i * numbers;
    }
    return numbers;
}
console.log(factorio(6));
