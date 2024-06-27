const minoI = [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]];

const minoO = [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]];

const minoS = [[0,0,0,0],[0,1,1,0],[1,1,0,0],[0,0,0,0]];

const minoZ = [[0,0,0,0],[1,1,0,0],[0,1,1,0],[0,0,0,0]];

const minoJ = [[0,0,0,0],[1,0,0,0],[1,1,1,0],[0,0,0,0]];

const minoL = [[0,0,0,0],[0,0,1,0],[1,1,1,0],[0,0,0,0]];

const minoT = [[0,0,0,0],[0,1,0,0],[1,1,1,0],[0,0,0,0]];

let minoBox = [minoI,minoO,minoS,minoZ,minoJ,minoL,minoT];

function randomMino(){ //ミノをランダムにする
    for(let i = 0; i < 7; i++){
        const randomMino = Math.floor(Math.random() * minoBox.length);
        const selectMino = minoBox.splice(randomMino, 1)[0];
        randomBox.push(selectMino);
    }
}

function pickMinoColor(){
    if(minoKinds === minoI){
        color = "#00ffff"; //cyan
    }else if(minoKinds === minoO){
        color = "#ffff00"; //yellow
    }else if(minoKinds === minoS){
        color = "#00ff00"; //green
    }else if(minoKinds === minoZ){
        color = "#ff0000"; //red
    }else if(minoKinds === minoJ){
        color = "#0000ff"; //blue
    }else if(minoKinds === minoL){
        color = "#ff8000"; //orange
    }else if(minoKinds === minoT){
        color = "#8000ff"; //purple
    }
}

function nextMinoColor(){
    if(minoKinds === minoI){
        color = "#00ffff"; //cyan
    }else if(minoKinds === minoO){
        color = "#ffff00"; //yellow
    }else if(minoKinds === minoS){
        color = "#00ff00"; //green
    }else if(minoKinds === minoZ){
        color = "#ff0000"; //red
    }else if(minoKinds === minoJ){
        color = "#0000ff"; //blue
    }else if(minoKinds === minoL){
        color = "#ff8000"; //orange
    }else if(minoKinds === minoT){
        color = "#8000ff"; //purple
    }
}

function drawMino(){ //ミノ描画
    minoKinds = pickMino;
    pickMinoColor();
    for(let col = 0; col < pickMino.length; col++){
        for(let row = 0; row < pickMino.length; row++){
            let x = (row + horaizon) * squareSize;
            let y = (col + fall)* squareSize;
            // console.log(y);
            let fx = row + horaizon;
            let fy = col + fall;
            if(pickMino[col][row] === 1){
                field[fy][fx] = 1;
                ctx2.fillStyle = color;
                ctx2.fillRect(x, y, squareSize, squareSize);
                ctx2.fillStyle = "black"
                ctx2.strokeRect(x, y, squareSize, squareSize);
            }
            pickMinoX = fx;
            pickMinoY = fy;
        }
    }
    checkField();
}

function drawNextMino(nextMino,verticalPos){ //ミノ描画
    minoKinds = nextMino;
    nextMinoColor();
    console.log(nextMino);
    for(let col = 0; col < nextMino.length; col++){
        for(let row = 0; row < nextMino[col].length; row++){
            if(nextMino[col][row] === 1){
                ctx3.fillStyle = color;
                ctx3.strokeRect
                ctx3.fillRect(row * squareSize + squareSize, col * squareSize + squareSize + (verticalPos * squareSize), squareSize, squareSize);
                ctx3.fillStyle = "black"
                ctx3.strokeRect(row * squareSize + squareSize, col * squareSize + squareSize + (verticalPos * squareSize), squareSize, squareSize);
            }
        }
    }
}