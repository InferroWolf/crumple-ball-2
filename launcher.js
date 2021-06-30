class Launcher {
  constructor(body1,point2){
   var options ={
    length:10,
    stiffness:0.04,
    bodyA:body1,
    pointB:point2
   }
   this.launcher = Constraint.create(options);
   World.add(world,this.launcher);
  }
  display(){
   if (this.launcher.bodyA!=null){
    var pointA = this.launcher.bodyA.position;
    var pointB = this.launcher.pointB;
    strokeWeight(4);
  }
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    line(pointA.x,pointA.y,190,75); 
  }
  fly(){
    this.launcher.bodyA=null;
  }
  attach(body){
  this.launcher.bodyA=body
  }
}