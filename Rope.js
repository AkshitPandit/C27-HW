class Rope{
    constructor(body1,body2,offsetX,offsetY){

           this.offSetX = offsetX;
           this.offsetY = offsetY;   

        var opt = {
            bodyA:body1,
            bodyB:body2,
            pointB = {x:this.offSetX, y:this.offsetY}
        }
        console.log(options);
        this.rope = Constraint.create(opt);
        World.add(world,this.rope);
    }

    display(){
        var caa = this.rope.bodyA.position;
        var nrc = this.rope.bodyB.position;

        strokeWeight(5);
        line(caa.x , caa.y , nrc.x , nrc.y); 
    }
}
