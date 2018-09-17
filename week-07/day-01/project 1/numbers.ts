let numberArray = [1, 2, 5, 10]

function multiplyNumbers(numberArray) {
  let total = 1
  numberArray.forEach(element => {
    total *= element
  });
  return total

}

console.log(multiplyNumbers(numberArray));
