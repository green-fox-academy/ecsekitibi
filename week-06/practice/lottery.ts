// Create a method that find the 5 most common lottery numbers in lottery.csv

'use strict';
declare function require(path: string): any;

export { };

const fs = require('fs');
const charEncoding = 'utf-8'

function readFileSync(fileName: string) {

  let filePath: string = fileName + '.csv';
  try {
    let fileContent: string = fs.readFileSync(filePath, charEncoding);
    return fileContent
  } catch (e) {
    throw new Error('The file you want to load doesnt exist')
  }

}


function mostFrequentLotteryNumber(fileName: string) {
  let textArray: any[] = [];
  let splittedArray: any[] = [];
  let lotteryNumbers: any[] = [];
  let eachLottery: any[] = [];

  let maxNumber: number = 0;
  let mostfrequentNumber: number;
  textArray = readFileSync(fileName).split('\n');
  for (let i = 0; i < textArray.length; i++) {
    splittedArray.push(textArray[i].split(';'));
  }
  splittedArray.forEach(element => {
    lotteryNumbers.push(element.slice(element.length - 5, element.length))
  })

  eachLottery = lotteryNumbers.join(',').split(',');
  console.log(eachLottery.length);


  for (let i = 0; i < eachLottery.length; i++) {
    let currentNumber: number = 0;
    for (let j = 0; j < eachLottery.length; j++) {
      if (eachLottery[i] === eachLottery[j]) {
        currentNumber++;
      }
    }
    if (currentNumber > maxNumber) {
      maxNumber = currentNumber
      mostfrequentNumber = eachLottery[i];
    }
    console.log(mostfrequentNumber, maxNumber);
  }
}


//console.log(mostFrequentLotteryNumber('lottery'));
mostFrequentLotteryNumber('lottery');

