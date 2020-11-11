var paperObject,groundObject,dustbinObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

paperObject = new paper(200,450,40)
groundObject = new ground(800,670,1600,20)
dustbinObject = new dustbin(1200,650)
	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  paperObject.display();
  groundObject.display();
  dustbinObject.display();


}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}


