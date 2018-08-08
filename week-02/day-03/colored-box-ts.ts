
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(250, 150);
ctx.lineTo(350, 150);
ctx.stroke()

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(350, 150);
ctx.lineTo(350, 250);
ctx.stroke();

ctx.strokeStyle = 'yellow';
ctx.beginPath();
ctx.moveTo(350, 250);
ctx.lineTo(250, 250);
ctx.stroke()

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(250, 250);
ctx.lineTo(250, 150);
ctx.stroke();


