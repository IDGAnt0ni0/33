var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var ball = [];
var divisions =[];
var ball;
var pared;
var ball;

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);

  
  pared1=createSprite(100,20,20);
  pared2=createSprite();
  pared3=createSprite();
  pared4=createSprite();
  pared5=createSprite();

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 75; j <=width; j=j+50) {
    ball.push(new Plinko(j,75));
 }


}

function draw() {
  background(255,255,255); 

  textSize(35)
  text("Puntuación : "+score,20,40);
  fill("white");

  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();
  
  pared1.display();
  pared2.display();
  pared3.display();
  pared4.display();
  pared5.display();
  ball.display();

  drawSprites();
}
for (var i = 0; i < ball.length; i++) {
  ball[i].display();  
}

 if(ball!=null)
 {
    ball.display();


 }

for (var k = 0; k < divisions.length; k++) 
{
  divisions[k].display();
}

function mousePressed()
{
  ball=new Ball(mouseX, 10, 10, 10);  
}