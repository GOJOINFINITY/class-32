class Slingshot{
    constructor(b1,p2){

    this.sling=Matter.Constraint.create({bodyA: b1,
        pointB:p2,
        stiffness:0.0969,
        length:0.69})
    World.add(world,this.sling)
    this.pointB=p2
    this.s1=loadImage("imagesok/sling1.png")
    this.s2=loadImage("imagesok/sling2.png")
    this.s3=loadImage("imagesok/sling3.png")
    }

    display(){
        image(this.s1,200,20)
        image(this.s2,175,20)
push()
        strokeWeight(4)
        //line(x1,y1,x2,y2)
        if(this.sling.bodyA){
        if(this.sling.bodyA.position.x<220){   
        line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y)
        line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y)
        image(this.s3,this.sling.bodyA.position.x-30,this.sling.bodyA.position.y-10,15,30)
        } else{
            line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y)
            line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y)
            image(this.s3,this.sling.bodyA.position.x+25,this.sling.bodyA.position.y-10,15,30) 
        }
        }
        pop() 
    }
    fly(){
        this.sling.bodyA=null 
    }
    attach(body){
        this.sling.bodyA=body
    }
}