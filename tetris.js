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

// function checkLand(){
//     if(pickMinoY === 19){
//         fall -= 1;
//         field[pickMinoY][pickMinoX] = 1;
//         console.log("stop");
//         pickMino = standByMinoBox[0];
//         standByMinoBox.shift();
//         return;
//     }
// }
// setInterval(function(){
//     time / 4;
// },2000)

function minoFall(){
    setInterval(function(){
        // console.log(time);
        clearField();
        fall += 1;
        drawMino();
        if(pickMinoY === 19){
            field[pickMinoY][pickMinoX] = 1;
            fall = -1;
            // console.log("stop");
            // console.log(field);
            return;
        }
        // checkLand();
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
    // clearField();
    // console.log(1);
    // console.log(pickMino);
    // let baseMino = pickMino;
    // // pickMino = [];
    // for(let row = 0; row < baseMino[0].length; row++){
    // for(let col = 0; col < baseMino.length; col++){
    //     // for(let row = 0; row < baseMino[0].length; row++){
    //         // pickMino[col][row] = baseMino[row][col];
    //         pickMino[row][col] = baseMino[col][3-row];
    //     }
    // }
    // console.log(2);
    // console.log(pickMino);
    // // ctx2.clearRect(0,0,200,400);
    // drawMino();

    clearField(); // フィールドをクリア
  console.log(1); // 処理開始ログ
  console.log(pickMino); // 回転前のミノの状態
  let baseMino = pickMino; // 回転前のミノを保持

  // pickMinoは初期化不要

  for (let row = 0; row < baseMino[0].length; row++) {
    for (let col = 0; col < baseMino.length; col++) {
      pickMino[row][col] = baseMino[col][3 - row];
    }
  }

  console.log(2); // 処理完了ログ
  console.log(pickMino); // 回転後のミノの状態
  drawMino(); // 回転後のミノを描画

}

function standByMino(){
    let nextMino = [];
    let verticalPos = 0;
    for(let i = 0; i = randomBox.length; i++){
        // standByMinoBox.push(randomBox[i]);
        // console.log(standByMinoBox.length);
        nextMino = randomBox[i];
        // nextMino.push(standByMino[i]);
        // console.log(nextMino);
        drawNextMino(nextMino,verticalPos);
        verticalPos += nextMino.length + 1;
        // randomBox.shift();
        nextMino.shift();
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
        // console.log("left");
    }else if(event.key === 'ArrowRight'){
        moveRight();
        // console.log("right");
    }else if(event.key === 'ArrowUp'){
        rotate();
        // console.log("up");
    }else if(event.key === 'ArrowDown'){
    //   rotateRight();
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
        // checkLand();
    }
    gameStatus = 1;
}

function reset(){
    window.location.reload();
}