import { Mentor } from "./mentor";
import { Student } from "./student";

export class Cohort {
    name: string;
    students: Student[];
    mentors: Mentor[];

    constructor(name: string) {
        this.name = name;
        this.students = [];
        this.mentors = [];
    }

    addStudent(student: Student) {
        this.students.push(student);
    }

    addMentor(mentor: Mentor) {
        this.mentors.push(mentor);
    }

    info() {
        console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);

    }
}