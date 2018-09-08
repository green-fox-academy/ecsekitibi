'use strict';
export {}

let massInKg: number = 81.2;
let heightInM: number = 1.78;

// Print the Body mass index (BMI) based on these values

let BMI = massInKg / (Math.pow(heightInM, 2));
console.log(BMI);
