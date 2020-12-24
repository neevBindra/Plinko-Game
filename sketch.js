const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world,engine;
var ground;
var div1,div2,div3,div4,div5,div6,div7,div8;
var plinkos = []
var particles = []
var p1;
function setup() {
  createCanvas(600,800);
  engine = Engine.create();
    world = engine.world;
    // bodies
    ground = new Ground(230,740,780,10);
    div1 = new Division(10,575,10,330);
    div2 = new Division(90,575,10,330);
    div3 = new Division(170,575,10,330);
    div4 = new Division(250,575,10,330);
    div5 = new Division(330,575,10,330);
    div6 = new Division(410,575,10,330);
    div7 = new Division(490,575,10,330);
    div8 = new Division(570,575,10,330);
    for(var j= 40; j<=width; j = j+50)
    {
    plinkos.push(new Plinko(j,75))
    }

    for(var j= 15; j<=width; j = j+50)
    {
    plinkos.push(new Plinko(j,155))
    }

    for(var j= 35; j<=width; j = j+50)
    {
    plinkos.push(new Plinko(j,240))
    }

    for(var j= 15; j<=width; j = j+50)
    {
    plinkos.push(new Plinko(j,325))
    }

  
    
}

function draw() {
  background("black");  
  Engine.update(engine);
    rectMode(CENTER)
    ground.display();
    div1.display();
    div2.display();
    div3.display();
    div4.display();
    div5.display();
    div6.display();
    div7.display();
    div8.display();

    if(frameCount % 60 === 0){
      particles.push(new Particle(random (width/2 -10, width/2+10),10,10))
    }
    
  for(var i=0; i<plinkos.length; i++ ){
    plinkos[i].display();
  }

  for(var v=0; v<plinkos.length; v++ ){
    plinkos[v].display();
  }

  for(var n=0; n<plinkos.length; n++ ){
    plinkos[n].display();
  }
    
  for(var b=0; b<plinkos.length; b++ ){
    plinkos[b].display();
  }

  for(var l=0; l<particles.length; l++ ){
    particles[l].display();
  }

  drawSprites();
}