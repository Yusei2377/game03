const minoI = [[1,1,1,1],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

const minoO = [[1,1],[1,1],[0,0]];

const minoS = [[0,1,1],[1,1,0],[0,0,0]];

const minoZ = [[1,1,0],[0,1,1],[0,0,0]];

const minoJ = [[1,0,0],[1,1,1],[0,0,0]];

const minoL = [[0,0,1],[1,1,1],[0,0,0]];

const minoT = [[0,1,0],[1,1,1],[0,0,0]];

const minoBox = [minoI,minoO,minoS,minoZ,minoJ,minoL,minoT];

function minoColor(){
    if(pickMino === minoI){
        color = "#00ffff"; //cyan
    }else if(pickMino === minoO){
        color = "#ffff00"; //yellow
    }else if(pickMino === minoS){
        color = "#00ff00"; //green
    }else if(pickMino === minoZ){
        color = "#ff0000"; //red
    }else if(pickMino === minoJ){
        color = "#0000ff"; //blue
    }else if(pickMino === minoL){
        color = "#ff8000"; //orange
    }else if(pickMino === minoT){
        color = "#8000ff"; //purple
    }
}