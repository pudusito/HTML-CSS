const canvas= document.getElementById('canvas1');

const context = canvas.getContext('2d');



const playerImg= new Image();
playerImg.src = "/fire.png"
const spriteWidth= 60; 
const spriteHeight= 120;    

let frameX = 0;
let frameY = 0;
const totalFrames = 16; //total de columnas
let gameFrame = 0;
const staggerFrames = 7;     //velocidad de animacion

function animateloop() {
    context.clearRect(0, 0, canvas.width, canvas.height);//limpia el frame antes de dibujar

    let currentFrame = Math.floor(gameFrame / staggerFrames) % totalFrames;
    frameX = currentFrame;  

    context.drawImage(playerImg, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 100, -20, spriteWidth+50, spriteHeight+50); 

    gameFrame++;  
    requestAnimationFrame(animateloop);
}

animateloop();


