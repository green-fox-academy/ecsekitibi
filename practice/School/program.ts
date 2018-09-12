import { School } from "./school";
import { Student } from "./student";
import { Class } from "./class";

let greenFox: School = new School('greenFoxAcademy');
let student1: Student = new Student('Bela', 2000);
let student2: Student = new Student('Kati', 2000);
let newClass: Class = new Class('badBoi');

greenFox.addStudents(student1);
greenFox.addStudents(student2);
console.log(student1.toString());

newClass.enrollStudents(student1);
console.log(student1.toString());

newClass.enrollStudents(student2);
console.log(student2.toString());

student1.setClassName("Tiszaparti");
console.log(student1.getClassName());
console.log(student1.toString());

//console.log(greenFox.getStudents("Tiszaparti"));
console.log(greenFox.studentsBornAfter(1998));

console.log(greenFox.getStudents('badBoi'));





