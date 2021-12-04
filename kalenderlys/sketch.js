
const screen_size = 600;
const height = 400;
const width = 80;
let pos, fire, candle, numb, table;
let fireI = [];

let t = 0


function preload() {
  table = loadImage("./assets/table.png");
  fireI[0] = loadImage("./fire/1.png");
  fireI[1] = loadImage("./fire/2.png");
}


function setup() {
  createCanvas(screen_size, screen_size);
  candle = new candleC(createVector(300,screen_size-height),height-20,fireI);
  numb = new numbers(createVector(300,screen_size-height),1,24)
  
}

function draw() {
  background(60,20,30);
  image(table,300,600,400,100)
  candle.draw();
  numb.draw();
  candle.burn(t)
  t += 0.01;
}

class candleC {
  constructor(pos,height,fireI) {
    this.day = day();
    this.hour = hour();
    this.height = height;
    this.candle_h = height;
    this.pos = pos;
    this.og_y = 200;
    fire = new animation(this.pos.x,screen_size-this.height,fireI);
  
  }
  burn = (prc) => {
    if (prc > 0.975) {
      print("It's Christmas")
    }
    if (this.pos.y < screen_size-30) {
      this.pos.y = this.og_y+this.height*prc;
      this.candle_h = this.height-this.height*prc;
    }
  }
  cpos = () => {
    return this.pos;
  }
  cheight = () => {
    return this.height;
  }

  draw = () => {
    noStroke();
    fill(255);
    rect(this.pos.x-width/2,this.pos.y,width,this.candle_h,10,10,2,2);
    
    fill(150);
    rect(this.pos.x-7.5,this.pos.y-40,15,40);
    fire.move(this.pos.x,this.pos.y-50)
    fire.update();
    
    
  }
}

class numbers {
  constructor(pos,start,end) {
    this.pos = pos;
    this.start = start;
    this.end = end;
    
  }
  update = (start,end) => {
    this.start = start;
    this.end = end;
  }


  draw = () => {
    textStyle(BOLD);
    textAlign(CENTER)
    
    fill(155,0,0)
    for (let i = this.start; i < this.end+2; i++) {
      let ia = this.pos.y + candle.cheight()*i/25;
      if (ia-8 > candle.cpos().y && i <= this.end) {
        text(i,this.pos.x,ia);
      }
    }
  }
  
}