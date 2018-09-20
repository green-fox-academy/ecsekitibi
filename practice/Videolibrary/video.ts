'use strict'

export class Video {
  title: string;
  director: string;
  releaseYear: number;
  nrOfGuestsWhoEverBorrowedAVideo: number;
  canItBorrowed: boolean;

  constructor(title: string, director: string, releaseYear: number) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.nrOfGuestsWhoEverBorrowedAVideo = 0;
    this.canItBorrowed = false;
  }
  borrow(): void {
    this.canItBorrowed = false;
    this.nrOfGuestsWhoEverBorrowedAVideo += 1;
  }

  returnVideo(): void {
    this.canItBorrowed = true;
  }

  toString(): string {
    return `${this.title} by ${this.director} from ${this.releaseYear} is borrowed ${this.nrOfGuestsWhoEverBorrowedAVideo} times.`
  }
}