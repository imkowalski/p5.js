

class Walkers {
    constructor(int_walkers) {
      this.count = int_walkers;
      this.walkers = [];
      for (let i = 0;i < this.count;i++) {
        this.walkers[i] = new Walker(mid+offset(),mid+offset());
      }
    }
    update = () => {
      for (let i = 0;i < this.count;i++) {
        this.walkers[i].update()
        this.walkers[i].draw()
      }
    }
  }
  
  
  class Walker {
    constructor(x,y,color = [random(0,255),random(0,255),random(0,255)]) {
      this.pos = createVector(x,y);
      this.vel = createVector(0,0);
      this.color = createVector(color[0],color[1],color[2]);
    }
    update = () => {
      //finds the new random velocity and color
      this.vel = createVector(random(-1,1),random(-1,1));
      this.rand_color = createVector(random(-5,5),random(-5,5),random(-5,5));
      
      // adds the random value
      this.pos.add(this.vel);
      this.color.add(this.rand_color);
      
  
      //CONSTRAIN
      //constrain walkers x and y position between the origin (0,0) and screen size / cell size
      this.pos.x = constrain(this.pos.x,0,size/cell_size);
      this.pos.y = constrain(this.pos.y,0,size/cell_size);
      //constrain random color of the square between 0 - 255
      this.color.x = constrain(this.color.x,0,255);
      this.color.y = constrain(this.color.y,0,255);
      this.color.z = constrain(this.color.z,0,255);
  
    }
  
    draw = () => {
      fill(this.color.x,this.color.y,this.color.z);
      square(this.pos.x*cell_size,this.pos.y*cell_size,cell_size);
    }
  
  
  }




  