'use strict';




const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


let a = 200;
let h = a * (Math.sqrt(3) / 2);
function drawEquilateralTriangle(side: number, height: number) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, (canvas.height / 2) - (height / 2));
    ctx.lineTo(((canvas.width / 2) - (side / 2)), ((canvas.height / 2) + (height/ 2)));
    ctx.lineTo((canvas.width / 2) + (side / 2), ((canvas.height / 2) + (height / 2)));
    ctx.lineTo(canvas.width / 2, (canvas.height / 2) - (height / 2));
    ctx.stroke();
}
drawEquilateralTriangle(a, h);


let a1 = 100;
let h1 = a * (Math.sqrt(3) / 2);
function draw1EquilateralTriangle(side: number, height: number) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + side, canvas.height / 2 - height / 2);
    ctx.lineTo(canvas.width / 2 + side / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + 1.5 * side, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + side, canvas.height / 2 - height / 2);
    ctx.stroke();
}
draw1EquilateralTriangle(a1, h1);


function draw2EquilateralTriangle(side: number, height: number) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - side, canvas.height / 2 - height / 2);
    ctx.lineTo(canvas.width / 2 - side / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 - 1.5 * side, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 - side, canvas.height / 2 - height / 2);
    ctx.stroke();
}
draw2EquilateralTriangle(a1, h1);


function draw3quilateralTriangle(side: number, height: number) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 - a1 / 2, canvas.height / 2 - h1 / 2);
    ctx.lineTo(canvas.width / 2 + a1 / 2, canvas.height / 2 - h1 / 2);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
}
draw3quilateralTriangle(a1, h1);


console.log()