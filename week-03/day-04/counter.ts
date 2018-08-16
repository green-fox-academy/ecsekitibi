'use strict'
export { }
// Write a recursive function that takes one parameter: n and counts down from n.


function counter(n: number): void {
    if (n === 1) {
        console.log(1);
    } else {
        console.log(n);
        counter(n-1);
    }
    
}
counter(6);
