const eng=Matter.Engine;
const bod=Matter.Bodies;
const wor=Matter.World;

var e;
var w;
var obj;
var cir
function setup() {
  createCanvas(800,400);
  e=eng.create();
  w=e.world;
  
  obj=bod.rectangle(300,300,800,50,{isStatic:true});
  wor.add(w,obj);
   
  cir=bod.circle(200,100,25,{restitution:0.5});
  wor.add(w,cir)
  console.log(obj);
}

function draw() {
  background(0);

  eng.update(e);  
  rectMode(CENTER);
  rect(obj.position.x,obj.position.y,400,50);
  ellipseMode(RADIUS);
 ellipse(cir.position.x,cir.position.y,25);
  drawSprites();
}