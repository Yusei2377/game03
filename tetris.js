const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.strokeRect(0,0,200,400);
        
        const squareSize = 20;
        ctx.lineWidth = 1;
        for(let i = 0; i < 20; i++){  // 列
            for(let j = 0; j < 10; j++){  // 行
                const x = squareSize * j;
                const y = squareSize * i;
                // ctx.fillStyle = "rgb(0,0,0)";
                // ctx.strokeRect(x,y,squareSize,squareSize);
            }
        }

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

        const minoI = [1,1,1,1];

        const minoO = [[1,1],[1,1]];

        const minoS = [[0,1,1],[1,1,0]];
        
        const minoZ = [[1,1,0],[0,1,1]];

        const minoJ = [[1,0,0],[1,1,1]];

        const minoL = [[0,0,1],[1,1,1]];

        const minoT = [[0,1,0],[1,1,1]];

        // const box = [minoI,minoO,minoS,minoZ,minoJ,minoL,minoT];
        const box = [1,2,3,4,5,6,7];

        // const randomMino = Math.floor(Math.random() * box.length);

        let selectMino;

        for(let i = 0; i < box.length; i++){
            const randomMino = Math.floor(Math.random() * box.length);
            selectMino = box[randomMino];
            console.log(selectMino);
        }

        selectMino = minoT;
        for(let i = 0; i < selectMino.length; i++){
            for(let j = 0; j < i.length; j++){
                if(selectMino[i][j] == 1){
                    ctx.fillStyle = "rgb(255,0,0)";
                    ctx.strokeRect(0 * squareSize + squareSize,0 * squareSize + squareSize,squareSize,squareSize);
                    ctx.fillStyle();
                }
            }
        }