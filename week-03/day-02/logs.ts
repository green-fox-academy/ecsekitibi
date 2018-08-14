declare function require(path: string): any;
'use strict';
export { };
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
const fs = require('fs');
const charEncoding = 'utf-8'

function readLog(fileName: string) {
    
        let fileContent: string= fs.readFileSync(fileName, charEncoding);
        let fileContentArray: string[] = fileContent.split('\n');
        return fileContentArray;
        
}
console.log(readLog('log.txt'));