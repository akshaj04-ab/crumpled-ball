class crumpledBall{

constructor(x,y,r){

var options={

isStatic:false,
restitution:0.4,
friction:0.2,
density:1.2
}

this.x=x
this.y=y
this.r=r

this.body=Bodies.circle(x,y,r,options);

this.image=loadImage("paper.png");

World.add(world,this.body);

}
display(){

push();

var pos=this.body.position;

translate(pos.x,pos.y);

ellipseMode(RADIUS);

fill("white");

ellipse(0,0,this.r,this.r);

imageMode(CENTER);

image(this.image,0,0,40,40);

pop();

}

}