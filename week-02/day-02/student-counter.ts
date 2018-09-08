'use strict';
export { }

const students: any[] = [
    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9.5, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have less than 5 candies
function sumOfCandies(eachStudent: any[]) {
    let candyOfStudent: number = 0;
    eachStudent.forEach(obj => {
        candyOfStudent += obj.candies;
    })
    return candyOfStudent;
}
console.log(' Numbers of candies owned by students: ' + sumOfCandies(students));

function sumOfAgeWhoLessThan5Candies(eachStudent: any[]) {
    let sumOfAge: number = 0;
    eachStudent.forEach(obj => {
        if (obj.candies < 5) {
            sumOfAge += obj.age;
        }
    })
    return sumOfAge;
}
console.log('Sum of the age of people who have less than 5 candies: ' + sumOfAgeWhoLessThan5Candies(students));




