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
    let fileContent: string[] = fs.readFileSync(fileName, charEncoding).split('\n');
    return fileContent;
}

function listIPs(fileName: string) {
    let ipContent: string[] = [];
    readLog(fileName).forEach(eachElements => ipContent.push(eachElements.slice(27, 38)));
    let uniqueIPs: string[] = [];
    ipContent.forEach(function (eachElement: string) {
        if (uniqueIPs.every(param => param !== eachElement)) {
            uniqueIPs.push(eachElement);
        }
    });
    return uniqueIPs;
}
console.log(listIPs('log.txt'));

function getPostRatio(fileName: string) {
    let everyPost: number = 0;
    let everyGet: number = 0;
    let contentOfArray: string[] = [];
    contentOfArray = fs.readFileSync(fileName, charEncoding).split('\n');
    contentOfArray.forEach(elements => {
        if(elements.toString().match(/GET/) !== null) {
            everyPost ++;
        } else {
            everyGet++;
        }
    }); 
    return everyPost / everyGet;

}
console.log(getPostRatio('log.txt'));

