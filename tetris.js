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
    // clearField();
    drawMino();
    standByMino();
    // checkField();
}

function checkField(){
    for(let col = 0; col < 20; col++){
        for(let row = 0; row < 10; row++){
            if(field[col][row] === 1){
                // console.log("field(" + col + "," + row + ")");
            }
            // ctx2.fillStyle = "rgb(0,0,0))";
            // ctx2.strokeRect(col,row,squareSize,squareSize);
        }
        // console.log(field);
    }
}

function clearField(){
    console.log("checkField");
    for(let col = 0; col < 20; col++){
        for(let row = 0; row < 10; row++){
            if(field[col][row] === 1){
                console.log(col,row);
                ctx2.beginPath();
                ctx2.fillStyle = "rgba(0,0,0,0)";
                ctx2.clearRect(0,0,200,400);
                ctx2.beginPath();
                field[col][row] = 0;
            }
        }
    }
}

function checkLand(){
    if(pickMinoY === 19){
        
        console.log("stop");
        pickMino = standByMinoBox[0];
        standByMinoBox.shift();
    }
}

function minoFall(){
    setInterval(function(){
        // clearField();
        fall += 1;
        drawMino();
        console.log(field);
        // if(pickMinoY === 19){
        //     console.log("stop");
        //     return;
        // }
        checkLand();
    },time);
}

function moveLeft(){
    pickMino
}

// function rotateLeft(){
//     let baseMino = pickMino;
//     let baseJ = 0;
//     console.log(baseMino.length);
//     for(let col = 0; col < baseMino.length; col++){
//         console.log(baseMino[col].length);
//         for(let row = 0; row < baseMino[i].length; row++){
//             baseJ = baseMino[col].length - row - 1;
//             pickMino[col][row] = baseMino[row][col];
//             // console.log(baseMino[baseMino[col].length-baseMino[row]][col]);
//             // console.log("("+baseJ+","+col+") = "+baseMino[baseJ][col]);
//         }
//     }
//     console.log(pickMino);
//     drawMino();
// }

function standByMino(){
    let nextMino;
    let verticalPos = 0;
    for(let i = 0; i = randomBox.length; i++){
        standByMinoBox.push = randomBox[i];
        // nextMino = randomBox[i];
        // drawNextMino(nextMino,verticalPos);
        // verticalPos += nextMino.length + 1;
        randomBox.shift();
        // nextMino = [];
    }
    for(let j = 0; j = standByMinoBox.length; j++){
        nextMino = standByMinoBox[j];
        drawNextMino(nextMino,verticalPos);
        verticalPos += nextMino.length + 1;
        nextMino = [];
    }
    minoBox = [minoI,minoO,minoS,minoZ,minoJ,minoL,minoT];
}

addEventListener('keydown', (event) => { //キー操作
    if(event.key === 'ArrowLeft'){
        moveLeft();
        console.log("left");
    }else if(event.key === 'ArrowRight'){
    //   rotateRight();
        console.log("right");
    }else if(event.key === 'ArrowUp'){
    //   rotateLeft();
        console.log("up");
    }else if(event.key === 'ArrowDown'){
    //   rotateRight();
        console.log("down");
        }
    });

function start(){
    if(gameStatus === 0){
        checkField();
        gameplay();
        minoFall();
        // checkLand();
    }
    gameStatus = 1;
}

function reset(){
    window.location.reload();
}