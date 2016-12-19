function Monster(locx, locy){
  this.x = locx;
  this.y = locy;


  this.display = function(){
    ellipseMode(CENTER);
    rectMode(CENTER);
    noStroke();
    
    // body
    fill(232, 100, 23);
    ellipse(width/2 + this.x, height/2 + this.y, 200, 200);
    
    // head
    fill(23, 155, 255);
    rect(width/2  + this.x, 110 + this.y, 50, 90);
    
    // eye
    fill(255);
    ellipse(width/2 + this.x, 90 + this.y, 25, 20);
    fill(0);
    ellipse(width/2 + this.x, 90 + this.y, 10, 8.5);
    
    // nose
    stroke(0, 2550, 200);
    line(width/2 + this.x, 110 + this.y, width/2+5 + this.x, 125 + this.y);
    
    // mouth
    noStroke();
    fill(127, 0, 0);
    ellipse(width/2 + this.x, 140 + this.y, 20, 12);
    
    // arms
    stroke(23, 155, 255);
    line(150 + this.x, height/2 + this.y, 120 + this.x, 200 + this.y);
    line(350 + this.x, height/2 + this.y, 380 + this.x, 200 + this.y);
  }
  
}