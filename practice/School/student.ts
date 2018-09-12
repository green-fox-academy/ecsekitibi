import { Human } from "./human";

'use strict'

export class Student extends Human {

  private className: string;

  constructor(name: string, birthYear: number) {
    super(name, birthYear)
    this.className = 'Coffee';
  }

  setClassName(name: string): void {
    this.className = name;
  }

  getClassName(): string {
    return this.className;
  }

  toString(): string {
    return `The ${this.className} has ${this.name} as a student, who are born ${this.birthYear}.`
  }
}