'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function drawSquares(xCor: number, yCor: number, size: number, loop: number) {
    if (loop > 0) {
        ctx.strokeRect(xCor + size, yCor, size, size);
        ctx.strokeRect(xCor, yCor + size, size, size);
        ctx.strokeRect(xCor + 2 * size, yCor + size, size, size);
        ctx.strokeRect(xCor + size, yCor + 2 * size, size, size);
    
    size /= 3;
    drawSquares(xCor + 3 * size, yCor, size, loop -1);
    drawSquares(xCor, yCor + 3 * size, size, loop -1);
    drawSquares(xCor + 6 * size, yCor + 3 * size, size, loop -1);
    drawSquares(xCor + 3 * size, yCor + 6 * size, size, loop -1);

    

    } else {

    }
}
drawSquares(0, 0, canvas.height/3, 5);
