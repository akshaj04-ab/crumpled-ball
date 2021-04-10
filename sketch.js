
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin_left,dustbin_right,dustbin_base;
var ground;
var paperBall;




function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	paperBall=new crumpledBall(200,200,10);
    
	ground=new Ground(500,250,1000,10);

	dustbin_base=new Dustbin(770,235,100,20);

	dustbin_left=new Dustbin(720,170,20,140);
    
	dustbin_right=new Dustbin(820,170,20,140);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  
  ground.display();
  
  dustbin_base.display();
  dustbin_left.display();
  dustbin_right.display();
  paperBall.display();
  drawSprites();
 
}

function keyPressed(){

if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:16,y:-15});
}
}



