declare function require(path: string): any;
'use strict';
export { };

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
const fs = require('fs');
const charEncoding = 'utf-8'

function countLines(fileName: string) {
    //let countLines: number = 0;
    try {
        let fileContent: string = fs.readFileSync(fileName, charEncoding);
        console.log(fileContent);
        let fileContentArray: string[] = fileContent.split('\n');
        console.log(fileContentArray);
        let countLines: number = fileContentArray.length;
        return countLines;
    } catch (e) {
        return 0;
    }
}
console.log(countLines('my-file.txt'));


