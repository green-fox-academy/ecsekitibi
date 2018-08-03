let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentTime: number = currentSeconds + 60 * currentMinutes + 3600 * currentHours;
console.log(86400 - currentTime);