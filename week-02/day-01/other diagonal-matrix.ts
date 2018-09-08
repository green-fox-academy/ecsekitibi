'use strict'
export {}


let matrix: number[][] = [];
let countLine: number = 4;

for (let row = 0; row < countLine; row++) {
  matrix[row] = [];
  for (let col = 0; col < countLine; col++) {
    if(row == (countLine + col) - countLine) {
      matrix[row].push(0);
    } else {
      matrix[row].push(1);
    }
  }  
}
matrix.forEach(function (arr: number[]) {
  console.log(arr.join(' '));
});