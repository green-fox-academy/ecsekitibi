'use strict';
declare function require(path: string): any;
const fs = require('fs');
export { }

// Count the average letter number of the words in a text
function averageLetterNumber(inputFile: string): void {
  let readFromFile: string = fs.readFileSync(inputFile, 'utf-8');
  let fileWithoutSpecChar: string = readFromFile.replace(/[^a-zA-Z]/gi, ' ');
  //console.log(fileWithoutSpecChar);
  let fileToArray: string[] = fileWithoutSpecChar.split(' ');
  //console.log(fileToArray);
  let newFileArray: string[] = [];
  fileToArray.forEach((element) => {
    if (element !== '') {
      newFileArray.push(element);
    }
  });
  //console.log(newFileArray);
  let counter: number = 0;
  newFileArray.forEach((element) => {
    counter += element.length;
  });
  console.log(counter / newFileArray.length);
}

averageLetterNumber('practice.txt');