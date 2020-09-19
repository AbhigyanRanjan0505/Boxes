class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    //creates variables and give values
    var pos = this.body.position;
    var angle = this.body.angle;

    //pushes the box
    push();
    translate(pos.x,pos.y);
    rotate(angle);

    //displays the rectangle in the centre
    rectMode(CENTER);
    fill(255);
    rect(0,0,this.width,this.height);

    //pops the setting
    pop();
  }
}