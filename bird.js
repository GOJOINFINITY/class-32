class Bird extends Base{
    constructor(x,y,w,h){
        super(x,y,w,h)
        this.img=loadImage("imagesok/bird.png")
        this.smoke=loadImage("imagesok/smoke.png")
        this.path=[]
    }
    display(){
       //this.path = [[x1,y1],[x2,y2],[x3,y3]]
        super.display()
        if(this.body.position.x>200&&this.body.velocity.x>10){
            
        var pos=[this.body.position.x,this.body.position.y]
        this.path.push(pos)
        
        for(var i=0;i<this.path.length;i++){
            image(this.smoke,this.path[i][0],this.path[i][1])
        }
    }
        }
}