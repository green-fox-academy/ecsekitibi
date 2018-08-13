'use strict';



const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


let a = 400;
let h = a * (Math.sqrt(3) / 2);
function drawEquilateralTriangle(side: number, height: number) {
    ctx.beginPath();
    ctx.moveTo(((canvas.width / 2) - (side / 2)), ((canvas.height / 2) + (height/ 2)));
    ctx.lineTo((canvas.width / 2) + (side / 2), ((canvas.height / 2) + (height / 2)));
    ctx.lineTo(canvas.width / 2, (canvas.height / 2) - (height / 2));
    ctx.lineTo(((canvas.width / 2) - (side / 2)), ((canvas.height / 2) + (height / 2)))
    ctx.stroke();
}

drawEquilateralTriangle(a, h);

