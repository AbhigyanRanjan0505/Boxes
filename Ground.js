class Ground{
    constructor(x,y,w,h){
      var groundoptions = {
          isStatic: true
      }

      this.body = Bodies.rectangle(x,y,w,h,groundoptions);
      this.width = w;
      this.height = h;

      World.add(world, this.body);
    }

    display(){
      rectMode(CENTER);
      fill(255);
      var p = this.body.position;
      rect(p.x,p.y,this.width,this.height);
    }
}
