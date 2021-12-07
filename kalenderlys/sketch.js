
const screen_size = 600;
const height = 400;
const width = 65;
let pos, fire, candle, numb, table, wall, tree, outside;
let fireI = [];
let snowflakes = [];
let auto = true;
let is_december = true;
let christmas_day = false;

function preload() {
  outside = loadImage("./assets/outside.png")
  tree = loadImage("./assets/tree.png")
  wall = loadImage("./assets/background.png")
  table = loadImage("./assets/table.png");
  fireI[0] = loadImage("./fire/1.png");
  fireI[1] = loadImage("./fire/2.png");
  fireI[2] = loadImage("./fire/3.png");
}


function calculate_left() {
  return ((day()-1)*24+hour()-4)/(24*24);
}


function setup() {
  createCanvas(screen_size, screen_size);
  candle = new candleC(createVector(300,screen_size-height),height-20,fireI);
  numb = new numbers(createVector(300,screen_size-height),1,24);
  if (month() != 12) {
    is_december = false;
  } else {
    for (let i = 0; i < 300; i++) {
      snowflakes.push(new snowflake()); 
    }
  
  }
  
}


// this function takes the value of the slider and calculates  it to prx and burns the candle if its set to manual
function dom() {
  document.getElementById("val").innerHTML =  String(auto) +" | "+ document.getElementById("slider").value/1000;
  candle.burn(document.getElementById("slider").value/1000);
}



function draw() {
  if (is_december) {
    S_candle_scene()
  }
  else {
    S_not_december()
  }
  
}


function S_not_december() {
  background(0);
  fill(255)
  textAlign(CENTER);
  textSize(30);
  text("It's not even December yet",screen_size/2,screen_size/2)

}


function S_candle_scene() {
  background("#001A45");

  image(outside,screen_size/2,screen_size/2,screen_size,screen_size)
  for (let flake of snowflakes) {
    flake.update(); 
    flake.display();
  }
  image(wall,screen_size/2,screen_size/2,screen_size,screen_size)
  image(table,300,600,550,150)
  image(tree,150,450,200,200)
  candle.draw1();
  numb.draw();
  candle.draw2();
  if (auto) {
    document.getElementById("val").innerHTML = String(auto) +" | "+ String(calculate_left());
    candle.burn(calculate_left());
    
  }
  else {
    dom();
  }
  
}


class candleC {
  constructor(pos,height,fireI) {
    this.day = day();
    this.hour = hour();
    this.height = height;
    this.candle_h = height;
    this.pos = pos;
    this.og_y = 200;
    fire = new animation(this.pos.x,screen_size-this.height,fireI,9);
  
  }
  burn = (prc) => {
    if (prc > 0.93) {
      fill(20)
      textSize(80)
      text("It's December!!",screen_size/2,screen_size/2-100)
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

  draw1 = () => {
    noStroke();
    fill(255);
    rect(this.pos.x-width/2,this.pos.y,width,this.candle_h,6,6,2,2);
  }
  draw2 = () => {
    fill("#604C32");
    rect(this.pos.x-7.5,this.pos.y-40,15,40);
    fire.move(this.pos.x,this.pos.y-60)
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
    textSize(16);
    fill(155,0,0)
    for (let i = this.start; i < this.end+2; i++) {
      let ia = this.pos.y + candle.cheight()*i/25;
      if (ia-2 > candle.cpos().y && i <= this.end) {
        text(i,this.pos.x,ia);
      }
    }
  }
  
}




class snowflake { 
  constructor() {
    this.posX = random(0,screen_size+200);
    this.posY = random(0,screen_size);
    this.size = random(5, 10);

  }
  update = () => {
    fill(255,255,255,random(200,250))
    this.posX += random(-2.00,0.50)

    this.posY += random(3,4)

    if (this.posY > screen_size) {
      this.posY = 0
      this.posX = random(0,screen_size+200);
    }
  };

  display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}