let cell_size = 4;
let size = 924;
let mid = Math.floor(size/cell_size/2);
let start_time;



function offset() {
  temp = Math.floor(random(Math.floor(-(mid)),Math.floor((mid))))
  return temp
}



function setup() {
  createCanvas(size,size);
  background(255);
  noStroke();
  w = new Walkers(1000)
  start_time = second();
  
}

function draw() {
  //background(255);
  document.getElementById("fps").innerHTML = "Fps: " + Math.floor(frameRate());
  document.getElementById("sec").innerHTML = "Started: " + round(millis()/1000) + " Seconds ago";
  w.update()
}
