'use strict'
import { sumOfNumbers } from "./sum";
const test = require('tape');

test ('Sum test', (test) => {
    let testArray: sumOfNumbers = new sumOfNumbers;
    test.equal(testArray.sum(), 28, '3+6+12+5+3 sum is 28');
    let testArray2: sumOfNumbers = new sumOfNumbers([0]);
    test.equal(testArray2.sum(), 0, 'zero is equal zero');
    let testArray3: sumOfNumbers = new sumOfNumbers([null]);
    test.equal(testArray3.sum(), 0, 'null is equal to null');
    let testString: sumOfNumbers = new sumOfNumbers(['aranyhorcsog']);
    test.deepEqual(testString.sum(), 'aranyhorcsog', 'aranyhorcsog is aranyhorcsog');
    test.end();
})

