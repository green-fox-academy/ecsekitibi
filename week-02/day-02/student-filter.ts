
'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function moreThanFourCandies(eachStudent:any[]) {
    let listOfNames = [];
    eachStudent.forEach(obj => {
        if(obj.candies > 4) {
            listOfNames.push(obj.name); 
        }
    });
    return(listOfNames)
}
console.log(moreThanFourCandies(students));

function averageCandies(eachStudent:any[]) {
    let sumOfCandies = 0;
    eachStudent.forEach(obj => {
    sumOfCandies += obj.candies;
    })
    return sumOfCandies/eachStudent.length;
}
console.log(averageCandies(students));
