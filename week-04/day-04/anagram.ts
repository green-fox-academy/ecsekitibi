'use strict'

export function anagramOrNot(inputWord1: string, inputWord2: string): boolean  {
    return inputWord1.split("").sort().join("") === inputWord2.split("").sort().join("")
}