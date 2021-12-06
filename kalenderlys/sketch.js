
const screen_size = 600;
const height = 400;
const width = 80;
let pos, fire, candle, numb, table;
let fireI = [];
let snowflakes = [];
let auto = true;
let is_december = true;


function preload() {
  table = loadImage("./assets/table.png");
  fireI[0] = loadImage("./fire/1.png");
  fireI[1] = loadImage("./fire/2.png");
}

function calculate_left() {
  return ((day()-1)*24+hour()+1)/(24*24);
}


function setup() {
  createCanvas(screen_size, screen_size);
  candle = new candleC(createVector(300,screen_size-height),height-20,fireI);
  numb = new numbers(createVector(300,screen_size-height),1,24);
  if (month() != 12) {
    is_december = false;
  } else {
    for (let i = 0; i < 100; i++) {
      snowflakes.push(new snowflake()); // append snowflake object
    }
  
  }
  
}


// this function takes the value of the slider and calculates 
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
  
  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(); // update snowflake position
    flake.display(); // draw snowflake
  }
  image(table,300,600,400,100)
  
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
    fire = new animation(this.pos.x,screen_size-this.height,fireI);
  
  }
  burn = (prc) => {
    if (prc > 0.97) {
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

  draw1 = () => {
    noStroke();
    fill(255);
    rect(this.pos.x-width/2,this.pos.y,width,this.candle_h,6,6,2,2);
  }
  draw2 = () => {
    fill("#604C32");
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
  // initialize coordinates
  constructor() {
    this.posX = random(0,screen_size+200);
    this.posY = random(0,screen_size);
    this.size = random(5, 10);

  }
  update = () => {
    fill(255,255,255,random(200,250))
    // x position follows a circle
    this.posX += random(-2,1)

    // different size snowflakes fall at slightly different y speeds
    this.posY += random(0.8,1.1)

    // delete snowflake if past end of screen
    if (this.posY > screen_size) {
      this.posY = 0
      this.posX = random(0,screen_size+200);
    }
  };

  display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}