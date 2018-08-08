
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.


ctx.beginPath();
ctx.moveTo(350, 250);
ctx.lineTo(250, 150);
ctx.strokeStyle = 'red';
ctx.stroke();
