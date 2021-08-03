class Paper {

    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
    this.radius = radius
    this.image = loadImage("paper.png")

 this.body = Bodies.circle(x, y, radius, options);
	 World.add(world, this.body);
       

        
   }
   display(){
    fill("red");
    image(this.image, 0, 0, this.radius, this.radius);

   }
}