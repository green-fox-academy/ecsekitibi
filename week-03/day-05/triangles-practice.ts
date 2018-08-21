'use strict';
export {};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size = 200;
let height = a * (Math.sqrt(3) / 2);
function drawTriangle(posX: number, posY: number, side: number ) {
    ctx.beginPath();
    ctx.moveTo(posX, posY);
    ctx.lineTo();
    ctx.lineTo((canvas.width / 2) + (side / 2), ((canvas.height / 2) + (height / 2)));
    ctx.lineTo(canvas.width / 2, (canvas.height / 2) - (height / 2));
    ctx.stroke();
}
