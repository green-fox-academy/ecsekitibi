export{}
// -  Create a function called `factorio`
//    that returns it's input's factorial

let number: number= 10
function factorio(params:number) {
    for (let i = 1; i <=params ; i++) {
        params = i * params
    }
    return params
}
console.log(factorio(number));
