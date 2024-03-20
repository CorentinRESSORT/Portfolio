"use strict";

/* console.log(document.getElementById("c1"));

let canvas = document.getElementById("c1");

let ctxt = canvas.getContext('2d');



// (offsetX, offsetY, w, h)
ctxt.fillStyle = "#5555FF"
ctxt.fillRect(50, 25, 200, 100);

ctxt.fillStyle = "#5555FF"
ctxt.fillRect(350, 25, 200, 100);

ctxt.strokeStyle = "#4444EE";
ctxt.strokeRect(50, 175, 200, 100);

ctxt.strokeRect(350, 175, 200, 100);


ctxt.clearRect(150, 75, 300, 150)

ctxt.beginPath();

ctxt.moveTo(50,25);
ctxt.lineTo(250, 125)
ctxt.strokeStyle = "#123456";

 ctxt.lineWidth = 3; 
ctxt.stroke();

console.log(ctxt);


// ! ------------------------- IMG CANEVAS

canvas = document.getElementById("c2");
ctxt = canvas.getContext("2d");
let img = new Image();
let posX = 0, posY =0;
let pattern;
img.src = "twitter.png";

img.onload = function(){
    ctxt.beginPath();
    pattern = ctxt.createPattern(img, 'no-repeat');
    ctxt.fillStyle = pattern;
    ctxt.shadowColor = "black";
    ctxt.shadowOffsetY = 10;
    ctxt.fillRect(posX, posY, 30,30);
    console.log("pouetpouet")
};
console.log(img)
window.addEventListener("keydown", (e)=>{
    console.log(e.code)
    if (e.code === "ArrowLeft")
    {
        posX+=10;
        ctxt.drawImage(img, posX, posY, 30, 30);
        
    }
})


// ! ----------- Drawline


/
ctxt.moveTo(0,0);
ctxt.lineTo(1,1)
ctxt.strokeStyle ="#444444";

ctxt.lineWidth = 4;
ctxt.stroke(); 

console.log(window.screen.orientation.type) */

let canvas  = document.querySelector("#c2");
let ctxt = canvas.getContext("2d");
let img  = new Image();
let perso = new Image();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

img.src = "./assets/img/hp.png";



img.onload = function(){
    ctxt.drawImage(img,0, 0, window.innerWidth, window.innerHeight);
};

perso.src = "./assets/img/stormtroop2.png";
perso.onload = function(){
    ctxt.drawImage(perso, 600, 400, 22, 22)
}

let posX = 600;
let posY = 400;

window.addEventListener("keydown", (e)=>{
    console.log(e.code)
    if (e.code === "ArrowLeft")
    {
        ctxt.clearRect(0,0,canvas.width,canvas.height);
        posX -= 22;
        
        ctxt.drawImage(img, 0, 0, img.width, img.height);
        ctxt.drawImage(perso, posX, posY, 22, 22);
    }
    else if (e.code === "ArrowRight")
    {
        ctxt.clearRect(0,0,canvas.width,canvas.height);
        posX += 22;
        ctxt.drawImage(img, 0, 0, img.width, img.height);
        ctxt.drawImage(perso, posX, posY, 22, 22);
    }
    else if (e.code === "ArrowUp")
    {
        ctxt.clearRect(0,0,canvas.width,canvas.height);
        posY -= 22;
        ctxt.drawImage(img, 0, 0, img.width, img.height);
        ctxt.drawImage(perso, posX, posY, 22, 22);
    }
    else if (e.code === "ArrowDown")
    {
        ctxt.clearRect(0,0,canvas.width,canvas.height);
        posY += 22;
        ctxt.drawImage(img, 0, 0, img.width, img.height);
        ctxt.drawImage(perso, posX, posY, 22, 22);
    }
})