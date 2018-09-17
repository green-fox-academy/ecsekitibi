let numberArray = [1, 2, 5, 10]

function sumNumbers(numberArray) {
  let total = 0
  numberArray.forEach(element => {
    total += element
  });
}

console.log(sumNumbers(numberArray));
