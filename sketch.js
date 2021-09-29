const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

var top_wall;
var bottom_wall;

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;
 var options = {
    restitution:0.1
     
 }
  
ball = Bodies.circle(50,100,20,options)
World.add(world,ball)
  ground =new Ground(400,550,800,20);
  top_wall =new Ground(700,470,20,150);
  bottom_wall =new Ground(550,470,20,150);
  button=createImg("up.png")
  button.position(20,20)
  button.size(50,50)
  button.mouseClicked(hforce)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  
ellipse(ball.position.x,ball.position.y,20)
  ground.show();
 top_wall.show();
 bottom_wall.show();
  Engine.update(engine);
}


function hforce(){
   Matter.Body.applyForce(ball,{x:0,y:0},{x:0.06,y:-0.05})



}
