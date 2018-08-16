// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

/* with loop
function powerN(base: number, exponent: number): number {
    let result: number = 1;
    for (let i = 0; i < exponent ; i++) {
      result *= base; 
    }
    return result;
}
console.log(powerN(3, 3));
*/

//with recursion
//power(3,2) -> 3 * 3
//power(4,3) -> 4 * 4 * 4; 4 * power(4,2)
//power(4,2) -> 4 * 4; 4 * power(4,1)
//power(4,1) -> 4


function power(base: number, exponent: number): number {
    if (exponent == 1) {
        return base;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(3, 3));
