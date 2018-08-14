declare function require(path: string): any;
'use strict';
export {};

const fs = require('fs');
const charEncoding = 'utf-8'

function readFromFile(fileName: string) {
    try {
    return fs.readFileSync(fileName, charEncoding)
    } catch (e) {
        console.log(e);
        
    }
}
function writeToAFile(fileName: string, data: string): void {
    fs.writeFileSync(fileName, data);
}
fs.readFile('hello.txt', charEncoding, function(err, data) {
    console.log(data); 
})

function countChar(char: string): number {
    let result: number = 0;
    const fileContent: string = readFromFile('hello.txt')
    fileContent.split('\r\n').forEach(e => {
        e.split('').forEach(elem => {
            if(elem === char) {
                result ++;
            }
            
        })
    });
    return result;
}
console.log(countChar('a'));


// writeToAFile('hell.txt', 'Csa gecc!');

// console.log(readFromFile('hell.txt'));
