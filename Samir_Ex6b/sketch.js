var mario;
var simba;

function setup(){
  createCanvas(500, 500);
  background(255);
  mario = new Monster(100, 100);
  simba = new Monster(-100, -100);
}

function draw(){
  background(255);
  mario.display();
  simba.display();
}