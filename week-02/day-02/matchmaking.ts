'use strict';
export { }
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function matchPeople(girlNames: string[], boyNames: string[]) {
    let matches: string[] = [];

    girlNames.map((girl, index) => {
        matches.push(girlNames[index]);
        matches.push(boyNames[index]);
    });

    console.log(matches);
    return matches;
};

matchPeople(girls, boys);