'use strict'
import { anagramOrNot } from "./anagram";
const test = require('tape');

test ('anagram test', (test) => {
    let testString1: string = 'tibor'
    let testString2: string = 'robit'
    test.equal(anagramOrNot(testString1, testString2), true, 'If its true, they are anagrams');
    test.end();
}
)