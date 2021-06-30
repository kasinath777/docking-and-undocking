var spaceimg, spacecraftimg, issimg;
var iss, spacecraft;

function preload(){
spaceimg = loadImage("spacebg.jpg");
spacecraftimg = loadImage("spacecraft1.png");
issimg = loadImage("iss.png")
}

function setup() {
  createCanvas(1000,800);
  iss = createSprite(400, 200, 10, 10);
  iss.addImage(issimg);
  iss.scale = 0.8

  spacecraft = createSprite(500, 300, 10, 10);
  spacecraft.addImage(spacecraftimg)
  spacecraft.scale = 0.3

iss.debug = true
iss.setCollider("circle", 0,0, 10)
}

function draw() {
  background(spaceimg);  
   

  if(keyDown("LEFT_ARROW")){
  spacecraft.x = spacecraft.x-3;
}
 
  if(keyDown("RIGHT_ARROW")){
  spacecraft.x = spacecraft.x+3;
}

  if(keyDown("UP_ARROW")){
 spacecraft.y = spacecraft.y-2
}

if(spacecraft.isTouching(iss)){
textSize(30);
fill("red")
text("DOCKING COMPLETE", 390, 400)
}
  drawSprites();
}