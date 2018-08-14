'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

/*
ctx.beginPath;
ctx.moveTo(0, 0);
ctx.lineTo(canvas.width, 10);
ctx.moveTo(10, 0);
ctx.lineTo(canvas.width, 20)
ctx.moveTo(20, 0);
ctx.lineTo(canvas.width, 30);
ctx.moveTo(30, 0);
ctx.lineTo(canvas.width, 40)
ctx.moveTo(40, 0);
ctx.lineTo(canvas.width, 50)
ctx.moveTo(50, 0);
ctx.lineTo(canvas.width, 60)
ctx.moveTo(60, 0);
ctx.lineTo(canvas.width, 70)
ctx.moveTo(70, 0);
ctx.lineTo(canvas.width, 80)
ctx.moveTo(80, 0);
ctx.lineTo(canvas.width, 90)
ctx.moveTo(90, 0);
ctx.lineTo(canvas.width, 100)
ctx.stroke();  
*/

function drawGraph(graphStyle: string, startX: number, startY: number, endX: number, endY: number) {
    ctx.strokeStyle = graphStyle;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

for (let i = 0; i < canvas.height; i += 10) {
    drawGraph('purple', i, 0, canvas.width, 10 + i );
    

for (let j = 0; j < canvas.width; j += 10) {
    drawGraph('green', 0, j, j + 10, canvas.height)
}
