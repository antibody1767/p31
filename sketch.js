const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var division = [];
var plinko= [];

var ground;

var particles= [];




function setup() {
  createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,580,400,10);

  for( var i = 0; i< width; i = i+50){
    division.push( new Division( i, 500));
  }
  
  for( var u = 50; u <width; u=u+ 50){
    plinko.push(new Plinko(u,100));
  }
 
  for( u = 25; u <width; u=u+ 50){
    plinko.push(new Plinko(u,200));
  }
  
  for(  u = 15; u <width; u=u+ 50){
    plinko.push(new Plinko(u,300));
  }
}

function draw() {
  background(0);  
 ground.display();
 Engine.update(engine);

  for(var j =0; j<division.length;j++){
    division[j].display();
 }

 for(var l = 0; l<plinko.length; l++){
   plinko[l].display();
 }
 if(frameCount% 60 === 0){
   
  particles.push(new Particle(random(20,300),0,10));
 }
 for(var l = 0; l<particles.length; l++){
 particles[l].display();
}
}