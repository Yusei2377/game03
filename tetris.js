const canvas1 = document.getElementById("myCanvas1");
const canvas2 = document.getElementById("myCanvas2");
const canvas3 = document.getElementById("myCanvas3");
const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const ctx3 = canvas3.getContext("2d");

const squareSize = 20;
ctx2.lineWidth = 1;
for(let col = 0; col < 20; col++){  // 列
    for(let row = 0; row < 10; row++){  // 行
        const x = squareSize * row;
        const y = squareSize * col;
        // ctx2.fillStyle = "rgb(0,0,0)";
        // ctx2.strokeRect(x,y,squareSize,squareSize);
    }
}

let gameStatus = 0;
let pickMino;
let pickMinoX,pickMinoY;
let color;
let minoKinds;
let fall = 0;
let horaizon = 0;
let time = 1000;

let randomBox = [];
let standByMinoBox = [];

let field = [
    [0,0,0,0,0,0,0,0,0,0], //0
    [0,0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0,0], //5
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0], //10
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0], //15
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0], //19
];

function gameplay(){
    randomMino();
    console.log(randomBox);
    pickMino = randomBox[0];
    randomBox.shift();
    drawMino();
}

function checkField(){
    for(let col = 0; col < 20; col++){
        for(let row = 0; row < 10; row++){
            if(field[col][row] === 1){
            }
        }
    }
}

function clearField(){
    for(let col = 0; col < 20; col++){
        for(let row = 0; row < 10; row++){
            if(field[col][row] === 1){
                ctx2.fillStyle = "rgba(0,0,0,0)";
                ctx2.beginPath();
                ctx2.clearRect(0,0,200,400);
                field[col][row] = 0;
            }
        }
    }
}

function minoFall(){
    setInterval(function(){
        clearField();
        fall += 1;
        drawMino();
        if(pickMinoY === 19){
            field[pickMinoY][pickMinoX] = 1;
            fall = -1;
            return;
        }
        standByMino();
    },time);
}

function moveLeft(){
    if(pickMinoX - pickMino[0].length +1 === 0){
        return;
    }
    clearField();
    horaizon -= 1;
    drawMino();
}

function moveRight(){
    if(pickMinoX === 9){
        return;
    }
    clearField();
    horaizon += 1;
    drawMino();
}

function rotate(){
    clearField();
    console.log(1);
    console.log(pickMino);
    let baseMino = [[],[],[],[]];
    
    for(let col = 0; col < baseMino.length; col++){
        for(let row = 0; row < baseMino.length; row++){
            baseMino[col][row] = pickMino[row][baseMino.length - 1 - col];
        }
    }
    pickMino = baseMino;
    console.log(2);
    console.log(pickMino);
    drawMino();
}

function standByMino(){
    let nextMino = [];
    let verticalPos = 0;
    for(let i = 0; i = randomBox.length; i++){
        // standByMinoBox.push(randomBox[i]);
        // console.log(standByMinoBox.length);
        nextMino = randomBox[i];
        // nextMino.push(standByMino[i]);
        console.log(nextMino);
        drawNextMino(nextMino,verticalPos);
        verticalPos += nextMino.length + 1;
        randomBox.shift();
        // nextMino.shift();
    }
    if(randomBox.length === 0){
        // minoBox = [minoI,minoO,minoS,minoZ,minoJ,minoL,minoT];
        randomMino();
    }
    // console.log("("+2+")"+standByMinoBox.length);
    // for(let j = 0; j = standByMinoBox.length; j++){
    //     nextMino = standByMinoBox[j];
    //     drawNextMino(nextMino,verticalPos);
    //     verticalPos += nextMino.length + 1;
    //     nextMino = [];
    // }
    // minoBox = [minoI,minoO,minoS,minoZ,minoJ,minoL,minoT];
}

addEventListener('keydown', (event) => { //キー操作
    if(event.key === 'ArrowLeft'){
        moveLeft();
    }else if(event.key === 'ArrowRight'){
        moveRight();
    }else if(event.key === 'ArrowUp'){
        rotate();
    }else if(event.key === 'ArrowDown'){
        console.log("down");
    }else if(event.key === " "){
        start();
    }
    });

function start(){
    if(gameStatus === 0){
        checkField();
        gameplay();
        minoFall();
    }
    gameStatus = 1;
}

function reset(){
    window.location.reload();
}