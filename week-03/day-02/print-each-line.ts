declare function require(path: string): any;
'use strict';
export {};
// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

const fs = require('fs');
const charEncoding = 'utf-8'
 
function readFromFile(fileName: string) {
    try { 
        return fs.readFileSync(fileName, charEncoding);
    } catch (e) {
        throw new Error(`Unable to read file: ${fileName}`);
    }
    }

console.log(readFromFile('myz-file.txt'));
