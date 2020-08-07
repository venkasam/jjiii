var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score=100

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(displayWidth*5,600);
	pers=createSprite(displayWidth*5/2,450,displayWidth*5,100)
	//score1=database.ref('point')
    //score1.on("value",num)
	
	
		box=createSprite(1000,350,100,100)
	
	
	
	engine = Engine.create();
	world = engine.world;
	//hell=new Round(500,450,60,PI)
button=createButton("play")
buttonn=createButton("reStart")
button.position(900,100)
buttonn.position(900,150)



	

	
	
}


function draw() {
	background("red")
  Engine.update(engine)
  //hell.display()
  box.velocityX=-2
  if(box.x<200){
	box=createSprite(1000,350,random(50,250),100)
	box.velocityX=random(0,4)
}
//if(hell.y==box.y&&hell.x==box.x){
///write(score)
//score=score+2

//}
text(score,900,50)
 
 
 
 
  drawSprites()
}
button.mousePressed(()=>{



})
//function num(data){
//point=data.val()

//}
//function write(score){
	//database.ref("/").update({
	//point:score
	
	//})
//}
