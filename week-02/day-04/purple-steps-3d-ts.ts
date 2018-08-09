
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

let size = 10;
let startPoint = 10;
for (let i = 1; i < 7; i++) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(startPoint, startPoint, size, size)
    startPoint += size;
    size += 10;
}