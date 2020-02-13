const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var log1, ground;
var log2, log3, log4, log5;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   // log1 = new Log(100,380,150,PI);
   // log2 = new Log(150,380,150,PI);
   log3 = new Log(85,200,60,PI/8.2);
   log4 = new Log(100,200,60,-PI/8.2);
   //log5 = new Log(120,100,75,PI/2);
    ground = new Ground(200,390,400,20);
   box1 =  new Box(100,380,70,100)
   box2 = new Box(170,380,100,150);
   log5 = new Log(160,60,100,PI/8);
   log6 = new Log(200,60,100,-PI/8);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
   // log1.display();
   // log2.display();
    log3.display();
   log4.display();
   log5.display();
   log6.display();   
   // log5.display();
    box1.display();
    box2.display();
}