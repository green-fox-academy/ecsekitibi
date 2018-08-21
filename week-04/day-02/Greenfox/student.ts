import { Person } from "./person";

export class Student extends Person {
    private previousOrganization: string;
    private skippedDays: number;

    constructor(name?: string, age?: number, gender?: string, previousOrganization: string = 'The school of Life') {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = 0;
    }

    getGoal() {
        console.log('My goal is: Be a junior software developer.');
    }

    introduce() {
        console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
    }

    skipDays(daysSkipped: number) {
        this.skippedDays += daysSkipped;
    }
}
