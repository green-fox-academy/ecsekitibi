function addNumbers(n: number): number {
    if (n < 1) {
        throw new Error ('Cannot use negative numbers')
    }
    if (n == 1) {
        return 1;
    } else {
        return n + addNumbers(n-1);
    }
    

}
let answer: number;
answer = addNumbers(10);

console.log(answer);
