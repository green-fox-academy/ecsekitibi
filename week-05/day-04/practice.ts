'use strict'
declare function require(path: string): any;
export { }

const fs = require('fs');
const charEncoding = 'utf-8'
//Average letter count of the poems words (Sum chars/ sum number of wrds)
function readFromFile(fileName: string) {
  return fs.readFileSync(fileName, charEncoding)
}

function avgWordLength(inputFile: string): number {
  let splittedPoem: string[] = readFromFile(inputFile).split('\n').join(' ').split(' ');
  let totalChars: number = 0;
  splittedPoem.forEach(element => {
    totalChars += element.length
  });
  return totalChars / splittedPoem.length;
}

console.log(avgWordLength('practice.txt'));






