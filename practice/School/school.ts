import { Student } from "./student";
import { Teacher } from "./teacher";

/*
You have a school which has students and teachers.
Every student and teacher has some common values: name, birthYear

You should be able to enroll students into the school and also hire teachers.

The school has some classes.Students and teachers are assign to only one class.
Students, teachers, school and classes should have a toString method(list every property value)

You should be able to query all students who born after a specific year, like this:
school.studentsBornAfter(1992); //returns a list of Student (s) - if no students found throw an exception

Query all students for a specific class:
  school.getStudents(‘COFFEE’); // returns a list of Student (s) - if no students found throw an exception
  */

'use stricht'

export class School {
  students: Student[];
  teachers: Teacher[];
  name: string;

  constructor(name: string) {
    this.students = [];
    this.teachers = [];
    this.name = name;

  }

  addStudents(student: Student): void {
    this.students.push(student);
  }

  addTeachers(teachers: Teacher): void {
    this.teachers.push(teachers);
  }

  studentsBornAfter(birthYear: number): Student[] {
    let studentsBornAfter: Student[] = this.students.filter(elem => {
      return elem.birthYear > birthYear;
    });

    if (studentsBornAfter.length === 0) {
      throw new Error(`There are no students after ${birthYear}.`);
    } else {
      return studentsBornAfter;
    }
  }

  getStudents(className: string): Student[] {
    let studentsOfClass: Student[] = this.students.filter(student => {
      return student.getClassName() === className;
    });
    if (studentsOfClass.length === 0) {
      throw new Error(`There are no students in ${className} class.`);
    } else {
      return studentsOfClass;
    }
  }
}

