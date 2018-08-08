'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.



function drawLines(xIndex: number, yIndex: number) {
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    ctx.strokeStyle = color;
    ctx.beginPath;
    ctx.moveTo(xIndex, yIndex);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);   
    ctx.stroke();    
}

for (let i = 0; i < 3; i++) {
    let x = Math.floor(Math.random() * canvas.width);
    let y = Math.floor(Math.random() * canvas.height);
    drawLines(x , y);
}
