import { Guest } from "./guest";
import { Video } from "./video";
import { VideoStore } from "./store";

'use strict';

// Create a VideoLibrary Application, where the guests can borrow
// the videos available in the database.
// Every guest should have a name and an address.
// The guest is able to borrow exactly one Video at one time.
// The video has title, director, release year,
// the number of guests who ever borrowed the video
// and also if the video is borrowed currently.

let guest: Guest = new Guest('Jon Doe', 'Somewhere in Minnesota');
let video: Video = new Video('Titanic', 'James Cameron', 1997);
let store: VideoStore = new VideoStore();
store.addGuest(guest);
store.addVideo(video);
store.borrow(guest, video);


// This borrow method should be handled with the below exceptions:
// if the guest already has a video borrowed (throw exception)
// if the video is not currently available (throw exception)

console.log(guest.toString());
// should print out
// Jon Doe is currently borrowing the Titanic.
console.log(store.toString());

// The store has 0 videos available right now and 1 guests registered.
store.returnVideo(guest, video);
console.log(guest.toString());
// Jon Doe is not borrowing anything currently.
console.log(video.toString());
// Titanic by James Cameron from 1997 - borrowed 1 times.
console.log(store.toString());
// The store has 1 videos available right now and 1 guests registered.
//console.log(store.getMostTimeBorrowed());
// The most borrowed video is Titanic - borrowed 1 times.
