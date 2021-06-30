class PaperClass{
  constructor(x,y,radius){
    var options={
    isStatic:false,
    restituion:0.5,
    friction:0.5,
    density:1.2
      }
      this.body=Bodies.circle(x,y,radius,options);
      this.radius=radius;
      //this.height=height;
      World.add(world,this.body);
  }
  display(){
    var loc=this.body.position;
    fill("white");
    circle(loc.x,loc.y,this.radius);
  }
}