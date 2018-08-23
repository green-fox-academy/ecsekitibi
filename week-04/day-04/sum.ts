'use strict'
export class sumOfNumbers {
    private numberArray: number[];

    constructor (numberArray: any[]= [3, 6, 12, 2, 5]) {
        this.numberArray = numberArray;

    }

    sum(): number {
        let total: number = 0;
        for (let i = 0; i < this.numberArray.length; i++) {
            total += this.numberArray[i];
        } return total;
    }
} 


 



