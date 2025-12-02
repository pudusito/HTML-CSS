const canvas= document.getElementById('canvas1');

const context = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImg= new Image();
playerImg.src = '/shadow_dog.png'
const spriteWidth= 575; // 6876px / 12 columns = 573 (usa 575 porque uso un sprite personal y dibujo un poco mas)
const spriteHeight= 523;    //5230px / 10 rows = 523

//AQUI podemos movernos entre la img
let frameX = 5;
let frameY = 2;

function animateloop() {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    context.fillRect(50, 50, 100, 100);

    //ejemplo :context.drawImage(image, sx, Sy, sw, sh, dx, dy, dw, dh);  
    // #le pasamos la imagen en playerimg## 
    // #sx, sy , sw ,sh, determinan el espacio que queremos recortar
    // #los ultimos 4 argumentos sirven para posicionar el espacio cortado.
    // dx mueve la imagen el eje X(-left, +right), dy el eje Y,dw y dh  hace zoom a la imagen(la estira).
    //context.drawImage(image, sx, Sy, sw, sh, dx, dy, dw, dh);  
    context.drawImage(playerImg, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight); 
                          // 1*spridewidth nos permite movernos 1 imagen a la derecha dentro del sprite, asi mismo con heigth verticalmente
    requestAnimationFrame(animateloop);
}
animateloop();