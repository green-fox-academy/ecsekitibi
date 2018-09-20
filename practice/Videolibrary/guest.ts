import { Video } from "./video";

'use strict'

export class Guest {
  name: string;
  adress: string;
  isBorrow: boolean;
  borrovedVideo: Video;

  constructor(name: string, adress: string) {
    this.name = name;
    this.adress = adress;
    this.isBorrow = false;
    this.borrovedVideo = undefined;
  }

  returnVideo(): void {
    this.borrovedVideo = undefined;
    this.isBorrow = false;
  }

  setBorrowedVideo(video: Video) {
    this.borrovedVideo = video;
    this.isBorrow = true
  }

  toString(): string {
    if (this.isBorrow) {
      return `${this.name} is currently borrowing ${this.borrovedVideo}`
    } else {
      return `${this.name} is not borrowing anything currently.`
    }

  }
}