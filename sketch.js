// var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
// var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
// function preload() {}

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  //packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
  //World.add(world, packageBody);

  ball = new Paper(300, 200, 75, 75);

  box = new Box(900, 490, 200, 200);

  //   Create a Ground
  //     ground = Bodies.rectangle(width / 2, 600, width, 10, { isStatic: true });
  //     World.add(world, ground);
  ground = new Ground(600, height, 1200, 20);

  Engine.run(engine);
}

function draw() {
  background(220, 220, 220);
  Matter.Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  box.display();
  ball.display();
  //   drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.body.position, {
      x: 302,
      y: -302,
    });
  }
}
