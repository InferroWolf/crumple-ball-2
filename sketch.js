
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var release=0;

function preload(){
	image1=loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground=new Ground(400,690,800,20);
   ball=new PaperClass(150,200,20);
   db=new dustbin(600,690,200,20);
   dre=new dustbin(725,600,20,200);
	 dle=new dustbin(550,650,20,100);
   launcher1=new Launcher(ball.body,{x:223,y:81});
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(10,10,10);
  ground.display()
  db.display();
  dre.display();
  dle.display();
  image(image1,450,500,400,200);
  ball.display();
  drawSprites();
 
}

function mouseDragged(){
  if(release===0){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  release=1;
  launcher.fly();
}

function keyPressed(){
  if (keyCode===32){
    launcher.attach(bird.body);
  }
}