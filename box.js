class Box {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
      restitution: 0.4,
      friction: 0.7,
      density: 1.0,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    // rectMode(CENTER);
    // fill("green");
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    // rect(pos.x, pos.y, this.width, this.height);
  }
}
