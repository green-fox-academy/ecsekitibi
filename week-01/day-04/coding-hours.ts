// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let dailyCodingHours = 6;
let workdaysOfWeek = 5;
let weeklyWorkHours = 52;
let weeksSemester = 17;


console.log(dailyCodingHours * weeksSemester * workdaysOfWeek);

console.log(((dailyCodingHours * workdaysOfWeek * weeksSemester) / (weeklyWorkHours * weeksSemester)) * 100);




