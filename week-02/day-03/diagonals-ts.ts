'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

ctx.strokeRect(250, 150, 100, 100);

ctx.strokeStyle = 'green';
ctx.beginPath()
ctx.moveTo(250, 150);
ctx.lineTo(350,250);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.beginPath()
ctx.moveTo(350, 150);
ctx.lineTo(250,250);
ctx.stroke();