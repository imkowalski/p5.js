
const screen_size = 600;
const height = 400;
const width = 100;
let pos, fire, candle;
let fireI = [];




function preload() {
  fireI[0] = loadImage("./fire/1.png");
  fireI[1] = loadImage("./fire/2.png");

}


function setup() {
  createCanvas(screen_size, screen_size);
  candle = new candleC(createVector(300,screen_size-height),height,fireI);
}

function draw() {
  background(60,20,30);
  candle.draw();
}




class candleC {
  constructor(pos,height,fireI) {
    this.day = day();
    this.hour = hour();
    this.height = height;
    this.og_height = height;
    this.pos = pos;
    fire = new animation(this.pos.x,screen_size-this.height-50,fireI);
  }
  burn = () => {

  }

  draw = () => {
    noStroke();
    fill(255)
    
    rect(this.pos.x-width/2,this.pos.y,width,height);
    fill(150,0,0)
    textAlign(CENTER);
    for (let i = 1; i < 25; i++) {
      let ia = this.pos.y + this.og_height*i/25
      text(i,this.pos.x,ia)
    }
    fill(150);
    rect(this.pos.x-7.5,this.pos.y-40,15,40)
    fire.update();
  }
}