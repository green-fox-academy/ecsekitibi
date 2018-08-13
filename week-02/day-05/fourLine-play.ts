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

for (let i = 0; i < canvas.height / 2; i += 10) {
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(canvas.width / 2, 10 + i);
    ctx.stroke();
}
for (let j = 0; j < canvas.width / 2; j += 10) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(0, j);
    ctx.lineTo(j + 10, canvas.height / 2);
    ctx.stroke();
}

for (let k = 0; k < canvas.height / 2; k += 10) {
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2);
    ctx.lineTo(canvas.width / 2, 10 + k);
    ctx.stroke();
}
for (let j = 0; j < canvas.width / 2; j += 10) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(0, j);
    ctx.lineTo(j + 10, canvas.height / 2);
    ctx.stroke();
}
