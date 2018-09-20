import { Guest } from "./guest";
import { Video } from "./video";

'use strict'

export class VideoStore {
  guest: Guest[];
  video: Video[];

  constructor() {
    this.guest = [];
    this.video = [];
  }

  addGuest(guest: Guest): void {
    this.guest.push(guest);
  }

  addVideo(video: Video): void {
    this.video.push(video);
  }

  borrow(guest: Guest, video: Video): void {
    guest.setBorrowedVideo(video);
    video.borrow();

  }

  returnVideo(guest: Guest, video: Video): void {
    guest.returnVideo();
    video.returnVideo();

  }

  getMostTimeBorrowed() {


  }

  toSting(): string {
    return `The store has ${this.video} videos avalibe and ${this.guest} registered.`
  }
}