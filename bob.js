class bob{
    constructor(x,y,radius){
       var options = {
           isStatic: false,
           restitution: 1,
           friction: 0,
           density: 0.8
       }
     this.body = Bodies.circle(x,y, radius, options)
     this.x = x;
     this.y = y;
     this.radius = radius;
     World.add(world,this.body)
    }
 
    display(){
     var paperpos = this.body.position;
     push();
     translate(paperpos.x,paperpos.y);
     rectMode(CENTER)
     fill("blue");
     ellipseMode(CENTER);
     ellipse(0,0,this.radius,this.radius);
     pop();
 
     
    }
 
 
 
 }