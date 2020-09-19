const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    //creates the objectes
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,380,400,20);
    console.log(box2);
}

function draw(){
    //creates a background
    background(180);

    //updates the engine
    Engine.update(engine);

    //displays the objects
    box1.display();
    box2.display();
    ground.display();
}