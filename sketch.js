const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boy1;
var snow = [];

function preload() {
  backgroundImg = loadImage("winter.jpg");
}

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,1);
 
  boy1 = new Boy(600, 580, 10, 10);
  boy1.scale = 0.001;
  
  if(frameCount % 50 === 0){

    for(var i=0; i<200; i++){
      snow.push(new Snow(random(0,800), random(0,800)));
      }
    }
  }

function draw() {
  background(0,0,0);
  background(backgroundImg);
  Engine.update(engine);
  
  boy1.display();
  
  for(var i = 0; i<200; i++){
    snow[i].showDrop();
    snow[i].updateY()
}
drawSprites();
}