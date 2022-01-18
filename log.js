class Log extends Base{
    constructor(x,y,w,h,a){
        super(x,y,w,h)
        this.img=loadImage("imagesok/wood2.png")
    Matter.Body.setAngle(this.body,a)
    }
    
}