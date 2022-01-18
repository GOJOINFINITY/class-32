class Base{
    constructor(x,y,w,h,a){
        var options = {
            'density':0.4,
            'friction': 0.81,
            'restitution':0.6

        }
        this.body= Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.width= w
        this.height = h
        this.img=loadImage("imagesok/base.png")
    }
    display(){
       push() 
       var pos = this.body.position
       
        imageMode(CENTER)
        
        translate(pos.x,pos.y)    
        rotate(this.body.angle)
        image(this.img,0,0,this.width, this.height)
        pop()
    }
}