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

  ball = new Paper(300, 200, 75, 75);
  box = new Box(900, 577, 200, 200);
  ground = new Ground(600, height, 1200, 20);

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1600,
      height: 700,
      wireframes: false,
    },
  });
  Engine.run(engine);
  Render.run(render);
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
      x: 332,
      y: -332,
    });
  }
}
