

const cell = 60
let Csize = cell*8;
let colors = [50,200]

let symbol = {K:0,Q:1,B:2,N:3,R:4,P:5,
              k:6,q:7,b:8,n:9,r:10,p:11}
let playerimgs = [];


function test() {
  for (let y = 0;y <= 7;y++) {
    for(let x = 0;x <= 7;x++){
      if (p[x][y] !== "") { 
        draw_piece(p[x][y],x,y)
      }
      console.log(x,y,p[y][x]);
    
    }
  }

}

function loadpieces() {
  for (let x = 0;x <= 7;x++) {
    for(let y = 0;y <= 7;y++){
      if (p[y][x] !== "") { 
        draw_piece(p[y][x],x,y)
      }
    }
  }

}


function preload() {
  for (let i = 1; i < 13;i++)
    playerimgs[i-1] = loadImage("./pieces/"+i+".png")
}

function setup() {
  createCanvas(Csize,Csize);
  test()
}

function draw() {
  let color = colors[0];
  for (let y = 0;y <= 8;y++) {
    for(let x = 0;x <= 8;x++){
      fill(color)
      square(x*cell,y*cell,cell)
      if (color == colors[0]) {color = colors[1]
      } else if (color == colors[1]) {color = colors[0]}
    }    
  }
  loadpieces()
}


function draw_piece(id,cellx,celly) {
  image(playerimgs[symbol[id]],cellx*cell,celly*cell,cell,cell)
}