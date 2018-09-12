import { Student } from "./student";

'use strict'

export class Class {
  private name: string;
  private classMembers: Student[];

  constructor(name: string) {
    this.name = name;
    this.classMembers = [];
  }

  enrollStudents(student: Student) {
    this.classMembers.push(student);
    student.setClassName(this.name);
  }

  toString(): string {
    return `The school has a ${this.name} class and it has ${this.classMembers.length} students.`
  }
}