'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let size = 10;
let startPoint = 10;

for (let i = 1; i < 20; i++) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(i * startPoint, i * startPoint, size, size);
    
}