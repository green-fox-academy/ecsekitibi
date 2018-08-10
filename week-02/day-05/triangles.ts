'use strict';



const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

drawEqTriangle(ctx, 400, canvas.width/2, canvas.height/2);
function drawEqTriangle(ctx, side, cx, cy){
    
    let h = side * (Math.sqrt(3)/2);
    
    ctx.save();
    ctx.translate(cx, cy);
  
    ctx.beginPath();
        
        ctx.moveTo(0, -h / 2);
        ctx.lineTo( -side / 2, h / 2);
        ctx.lineTo(side / 2, h / 2);
        ctx.lineTo(0, -h / 2);
        
        ctx.stroke();

        
    ctx.closePath();
    ctx.save();
}

