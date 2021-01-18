
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let bob1,bob2,bob3,bob4,bob5;
let sling1,sling2,sling3,sling4,sling5;
let roof;

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(500,100,500,30)

	bob1 = new Bob(width/2-200,500,"purple")
	bob2 = new Bob(width/2-100,500,"purple")
	bob3 = new Bob(width/2,500,"purple")
	bob4 = new Bob(width/2+100,500,"purple")
	bob5 = new Bob(width/2+200,500,"purple")

	sling1 = new Chain(bob1.body,{x:width/2-200,y:100})
	sling2 = new Chain(bob2.body,{x:width/2-100,y:100})
	sling3 = new Chain(bob3.body,{x:width/2,y:100})
	sling4 = new Chain(bob4.body,{x:width/2+100,y:100})
	sling5 = new Chain(bob5.body,{x:width/2+200,y:100})


	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine)

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged(){
	Body.setPosition(bob1.body,{x:mouseX,y:mouseY})

	
}

