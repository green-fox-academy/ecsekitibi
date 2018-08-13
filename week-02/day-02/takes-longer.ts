'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

let newQuote: string = quote.replace('Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.', 'Hofstadter\'s Law: It always takes longer than you expect, even when you take into account Hofstadter\'s Law.')

console.log(newQuote);