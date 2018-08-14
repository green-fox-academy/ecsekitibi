declare function require(path: string): any;
'use strict';
export { };
// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');
const charEncoding = 'utf-8'

function copyFile(copyFrom: string, copyTo: string) {
    try {
        let content : string = fs.readFileSync(copyFrom, charEncoding);
        fs.writeFileSync(copyTo, content);
    } catch (e) {
        return false;
    }
    return true;    
}
console.log(copyFile('copy-file.txt', 'newCopiedFile.txt'));
