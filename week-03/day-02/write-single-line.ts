declare function require(path: string): any;
'use strict';
export { };
// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

const fs = require('fs');
const charEncoding = 'utf-8'

function writeToAFile(fileName: string, data: string) {
try {
    fs.writeFileSync(fileName, data);
} catch (e) {
    throw new Error (`Unable to write file: ${fileName}`)
}
}
writeToAFile('writeToAFile.txt', 'Ecseki Tibi');