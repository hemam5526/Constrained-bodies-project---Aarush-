
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var roof, bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(800,175,228,20)

	bob1 = new bob(720,675,40)
	bob2 = new bob(300,500,100,100)
    bob3 = new bob(400,500,100,100)
    bob4 = new bob(500,500,100,100)
    bob5 = new bob(600,500,100,100)
	
	rope1 = new rope(bob1.body,roof.body,-80,0)
	rope2 = new rope(bob2.body,roof.body,300,75)
	rope3 = new rope(bob3.body,roof.body,400,75)
	rope4 = new rope(bob4.body,roof.body,500,75)
	rope5 = new rope(bob5.body,roof.body,600,75)

    Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(220);
  Engine.update(engine);
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:385,y:-385})
	}
}

