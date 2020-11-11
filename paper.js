class paper{
    constructor(x, y,diameter) {
      this.image = loadImage("Sprites/paper.png");   
      var options = {
            'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.2,
        }
        this.x=x
        this.y=y
        this.diameter=diameter
        
        this.body = Bodies.circle(this.x,this.y,this.diameter/2,options);
        World.add(world, this.body);
      }
      
      display(){
        var paperpos=this.body.position
        var angle = this.body.angle;
        push();
        translate(paperpos.x, paperpos.y);
        imageMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.diameter,this.diameter)
        pop();
      }
}