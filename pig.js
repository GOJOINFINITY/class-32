class Pig extends Base{
    constructor(x,y,w,h){
        super(x,y,w,h)
        this.img=loadImage("imagesok/enemy.png")
        this.alpha=255
    }
    display(){
      if(this.body.speed<2.5){
          super.display()
      }else {
          World.remove(world,this.body)
          push()
        this.alpha=this.alpha-5
        
          tint(255,this.alpha)
          image(this.img,this.body.position.x,this.body.position.y,50,50)
          pop()
      }

    }
    //-5 
  score(){
    if (this.alpha<0&&this.alpha>-10){
      score=score+69
    }
  }
}