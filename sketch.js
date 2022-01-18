const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies
var gamestate= "ok"
var bgimg
var score = 0
function preload(){
  
  getTime()
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create()
  world = engine.world;
  ground= new Ground(600,395,1200,20)
 platform= new Ground(150,305,300,170)

  box1= new Box(700,320,70,70)
  box2= new Box(920,320,70,70)
//PI = 180
  pig1 = new Pig(810,350,50,50)
  log1 = new Log(810,260,300,20,PI)
  box3= new Box(700,240,70,70)
  box4= new Box(920,240,70,70)
//PI = 180
  pig2 = new Pig(810,220,50,50)
  log2 = new Log(810,180,300,20,PI)

  box5= new Box(810,160,70,70)

  log3 = new Log(760,150,150,20,-PI/4)
  log4 = new Log(870,150,150,20,PI/4)
bird = new Bird(100,100,50,50)
 
 slingshot= new Slingshot(bird.body,{x:200,y:50})

}

function draw() {
  if(bgimg){
    background(bgimg);
  }
  textSize(25)
  fill("white")
  text("Score="+score,900,69)
  
  Engine.update(engine)
 
  box1.display()
  box2.display()
  ground.display()
  pig1.display()
  pig1.score()
  log1.display()
  box3.display()
  box4.display()
 
  pig2.display()
  pig2.score()
  log2.display()
box5.display()
log3.display()
log4.display()
 bird.display()
 platform.display()
 
 slingshot.display()
}

function mouseDragged(){
  if(gamestate=="ok"){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
  }
}

function mouseReleased (){
  slingshot.fly()
  gamestate="notok"
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(bird.body)
    gamestate= "ok"
  }
}

async function getTime (){
  var response =await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var rjson =await response.json()
  var dt= rjson.datetime
  var adt= dt.slice(11,13)
  console.log(adt)
  if (adt >=6&&adt<=16){
    bg="imagesok/bg.png"
  }else{
    bg="imagesok/bg2.jpg"
  }
  bgimg=loadImage(bg)
}