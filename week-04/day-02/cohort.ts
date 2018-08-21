import { Student } from "./student";
import { Mentor } from "./mentor";

export class Cohort {
    name: string;
    students: string[];
    mentors: string[];

    constructor(name: string) {
        this.name = name;
        this.students = [];
        this.mentors = [];
    }

    addStudent(Student) {
        this.students.push(Student);
    }

    addMentor(Mentor) {
        this.mentors.push(Mentor);
    }

    info() {
        console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);

    }
}