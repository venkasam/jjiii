class Round{
constructor(x,y,radius,angle){
var options={

'isStatic':false,
'restitution':0.3,


}

this.body=Bodies.circle(x,y,radius,angle,options)
this.radius=radius
this.y=y
this.x=x
Body.setAngle(this.body,angle)   
World.add(world,this.body)




}

display(){
var pos =this.body.position;
var angle = this.body.angle;
push()
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
fill("red");
ellipse(this.body.position.x,this.body.position.y,this.body.radius);
pop()
}
}



