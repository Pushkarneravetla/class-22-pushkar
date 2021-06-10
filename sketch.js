const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var eng, world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  
  eng = Engine.create();
  world = eng.world;

  var pushkar = 
  {
  isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20, pushkar);
  World.add(world,ground);

  ball = Bodies.circle(200, 100, 25);
  World.add(world, ball);
}

function draw() {
  background(255,255,255); 
  Engine.update(eng);
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 50);
  ellipse(ball.position.x, ball.position.y, 25, 25);

  
  drawSprites();
}
