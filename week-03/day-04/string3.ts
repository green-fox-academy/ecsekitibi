// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

'use strict';
export { };

function adjacentChars(newString: string): any {
    if (newString.length > 0) {
        return newString.slice(0, 1) + '*' + adjacentChars(newString.slice(1));
    } else {
        return '';
    }
}

console.log(adjacentChars('nem tudom megcsinalja-e'));