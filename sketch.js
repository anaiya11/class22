const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var object1;
var ball;



function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var options={
  isStatic:true
}

object1=Bodies.rectangle(200,385,400,40,options);
World.add(world,object1);
console.log(object1);
var ballOptions = {
  restitution: 5.6
}
ball= Bodies.circle(200,200,25,ballOptions)
World.add(world,ball);
}

function draw() {
  background(0);  
  drawSprites();
  Engine.update(engine);
rectMode(CENTER);
  rect(object1.position.x,object1.position.y,400,40);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,25,25)
}