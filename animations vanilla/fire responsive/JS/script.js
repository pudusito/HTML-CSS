const canvas= document.getElementById('board');

const context = canvas.getContext('2d');



const playerImg= new Image();
playerImg.src = "/Imagenes/fire.png"
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

    context.drawImage(playerImg, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 120, 30, spriteWidth, spriteHeight); 

    gameFrame++;  
    requestAnimationFrame(animateloop);
}

animateloop();

