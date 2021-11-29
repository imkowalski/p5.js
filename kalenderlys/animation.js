
class animation {
    // Animates an array of pictures
    constructor(x,y,array,fps=10,size=[100,100]) {
      imageMode(CENTER);
      this.x=x;
      this.y=y;
      this.images = array;
      this.image = 0;
      this.len = array.length;
      this.fps = fps;
      this.c = 0;
      this.size = size;
    }
    move(x, y) {
      this.x = x;
      this.y = y;
    }
  
  
    draw() {
      image(this.images[this.image],this.x,this.y,this.size[0],this.size[1])
    }
    update() {
      if (this.c == this.fps) {
        this.c = 0;
        this.image++;
        if (this.image >= this.len) {this.image = 0;}
      }
      this.draw();
      this.c++;
    }
  }