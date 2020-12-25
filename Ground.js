class Ground{
    constructor(x,y,width,height){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height

        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this,body)
    }
}
