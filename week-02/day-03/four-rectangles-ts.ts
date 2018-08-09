'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

function drawTriangles(pointA, pointB, pointC, pointD, pointE, pointF, pointG, pointH, pointColor: string) {
    ctx.beginPath;
    ctx.strokeStyle = pointColor;
    ctx.moveTo(pointA, pointB);
    ctx.lineTo(pointC, pointD);
    ctx.lineTo(pointE, pointF);
    ctx.lineTo(pointG, pointH);
    ctx.lineTo(pointA, pointB);
    ctx.stroke();
}

for (let i = 0; i < 4; i++) {
    let a = Math.floor(Math.random()* canvas.width)
    let b = Math.floor(Math.random()* canvas.height)
    let c = Math.floor(Math.random()* canvas.width)
    let d = Math.floor(Math.random()* canvas.height)
    let e = Math.floor(Math.random()* canvas.width)
    let f = Math.floor(Math.random()* canvas.height)
    let g = Math.floor(Math.random()* canvas.width)
    let h = Math.floor(Math.random()* canvas.height)
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    drawTriangles(a, b, c, d, e, f, g, h, color); 
}