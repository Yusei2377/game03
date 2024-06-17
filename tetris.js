const canvas1 = document.getElementById("myCanvas1");
const canvas2 = document.getElementById("myCanvas2");
const canvas3 = document.getElementById("myCanvas3");
const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const ctx3 = canvas3.getContext("2d");

const squareSize = 20;
ctx2.lineWidth = 1;
for(let i = 0; i < 20; i++){  // 列
    for(let j = 0; j < 10; j++){  // 行
        const x = squareSize * j;
        const y = squareSize * i;
        // ctx2.fillStyle = "rgb(0,0,0)";
        // ctx2.strokeRect(x,y,squareSize,squareSize);
    }
}

let gameStatus = 0;

const board = [
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

// const box = [1,2,3,4,5,6,7]; //確認用
const randomBox = [];

for(let i = 0; i < 7; i++){
    const randomMino = Math.floor(Math.random() * minoBox.length);
    const selectMino = minoBox.splice(randomMino, 1)[0];
    randomBox.push(selectMino);
}
console.log(randomBox);

let pickMino = randomBox[0];
const color = "red";
console.log(pickMino);
for(let i = 0; i < pickMino.length; i++){ //ミノ描画
    for(let j = 0; j < pickMino[i].length; j++){
        if(pickMino[i][j] === 1){
            ctx2.fillStyle = color;
            ctx2.strokeRect
            ctx2.fillRect(j * squareSize + squareSize, i * squareSize + squareSize, squareSize, squareSize);
            ctx2.fillStyle = "black"
            ctx2.strokeRect(j * squareSize + squareSize, i * squareSize + squareSize, squareSize, squareSize);
        }
    }
}

function rotateLeft(){
    let baseMino = pickMino;
    // pickMino = [];
    let baseJ = 0;
    // let x = 0;
    console.log(baseMino.length);
    // console.log("0" + x);
    for(let i = 0; i < baseMino.length; i++){
        console.log(baseMino[i].length);
        for(let j = 0; j < baseMino[i].length; j++){
            baseJ = baseMino[i].length - j-1;
            // x = baseJ
            // baseJ -= j;
            pickMino[i][j] = baseMino[i][baseJ];
            // console.log(baseMino[baseMino[i].length-baseMino[j]][i]);
            // console.log(baseJ);
        }
    }
    console.log(pickMino);
    for(let i = 0; i < pickMino.length; i++){ //ミノ描画
        for(let j = 0; j < pickMino[i].length; j++){
            if(pickMino[i][j] === 1){
                ctx2.fillStyle = color;
                ctx2.strokeRect
                ctx2.fillRect(j * squareSize + squareSize, i * squareSize + squareSize, squareSize, squareSize);
                ctx2.fillStyle = "black"
                ctx2.strokeRect(j * squareSize + squareSize, i * squareSize + squareSize, squareSize, squareSize);
                // ctx2.fill();
            }
        }
    }
}

addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        console.log("left");
        rotateLeft();
    } else if (event.key === 'ArrowRight') {
    //   rotateRight();
        console.log("right");
    }
    });

function start(){
    gameStatus = 1;
}