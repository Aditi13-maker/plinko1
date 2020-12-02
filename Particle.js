class Particles{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.x=x
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        
        push();
        translate(rpos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("magenta");
        ellipse(0, 0, this.r, this.r);
        pop();
      }
    




}