import { Human } from "./human";

'use strict'

export class Teacher extends Human {

  constructor(name: string, birthYear: number) {
    super(name, birthYear)
  }

  toString(): string {
    return `The class has ${this.name} as a teacher, who has born ${this.birthYear}.`
  }
}