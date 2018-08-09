'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(fullNames: string[]) {
    let newNames = fullNames.map(function (animals: string) {
        return animals += 'a';
    })

    return newNames;
} 
console.log(appendA(far));
