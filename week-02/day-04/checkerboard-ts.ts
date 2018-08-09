'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

let size = 10;   ;

for (let j = 0; j < canvas.width; j++) {
    for (let i = 0; i < canvas.height; i++) {
        if (i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1) {
            ctx.fillRect (j * size, i * size, size, size);
        }
        
    }
    
}    
    
    
    