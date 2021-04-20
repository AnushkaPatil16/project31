class PARTICLE{
    constructor(x,y,){

        var ops = {
            restitution: 1,
            friction: 0,

        }

        this.r = 10;
        this.part = Bodies.circle(x,y,this.r,ops)
        World.add(world,this.part)
    }

    
    display(){

        var pos = this.part.position;
        var angle = this.part.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        //noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

}