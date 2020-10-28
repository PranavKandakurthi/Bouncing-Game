var movingRect
var fixedRect
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(200,200,40,50);
movingRect.shapeColor = "green";
fixedRect.shapeColor = "green";

 movingRect.velocityX = -2;
 fixedRect.velocityX = 2;
}

function draw() {
  background(0);


  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x <= fixedRect.width/2+movingRect.width/2
    && movingRect.y - fixedRect.y <= fixedRect.height/2+movingRect.height/2
    && fixedRect.y - movingRect.y <= fixedRect.height/2+movingRect.height/2){

      movingRect. shapeColor = "red";
      fixedRect.shapeColor = "red";

      movingRect.velocityX = (-1)*movingRect.velocityX;
      fixedRect.velocityX = (-1)*fixedRect.velocityX;
    }
    else{

      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
    }


  drawSprites();
}