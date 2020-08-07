class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      var radius = 10;
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("white");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };
