// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let a : number = 2.5;
let b : number = 3.5;
let c : number = 5.5;

let surfaceArea: number = (a * b + b * c + a * c) * 2;
let volume: number = a * b * c;

console.log(surfaceArea);
console.log(volume);