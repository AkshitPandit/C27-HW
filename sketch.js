var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(50,50,500);

	bobObject1 = new Bob(100,200,50);
	bobObject1.shapeColor=("pink");
	
	bobObject2 = new Bob(200,200,50);
	bobObject2.shapeColor=("pink");
	
	bobObject3 = new Bob(300,200,50);
	bobObject3.shapeColor=("pink");
	
	bobObject4 = new Bob(400,200,50);
	bobObject4.shapeColor=("pink");
	
	bobObject5 = new Bob(500,200,50);
	bobObject5.shapeColor=("pink");
	
	rope1 = new Rope(bobObject1.body,roof.body,-BobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-BobDiameter*2,0);
	rope3 = new Rope(bobObject3.body,roof.body,-BobDiameter*2,0);
	rope4 = new Rope(bobObject4.body,roof.body,-BobDiameter*2,0);
	rope5 = new Rope(bobObject5.body,roof.body,-BobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
	background("light gray");
  rectMode(CENTER);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



