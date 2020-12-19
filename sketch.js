
var movingBox,fixedBox;
function setup() {
  createCanvas(800,400);
   movingBox = createSprite(200, 200, 50, 50);
   fixedBox = createSprite(600,200,50,70);
   fixedBox.debug= true;
   movingBox.debug=true;

   movingBox.shapeColor = "green";
   fixedBox.shapeColor = "green";

   movingBox.velocityX = 3;
   fixedBox.velocityX = -3;

}

function draw() {
  background(0); 
  //movingBox.x = mouseX;
  //movingBox.y = mouseY; 

  console.log(fixedBox.x-movingBox.x);
  console.log(fixedBox.width/2+movingBox.width/2);

  if(fixedBox.x-movingBox.x <= fixedBox.width/2+movingBox.width/2 &&
    movingBox.x-fixedBox.x <= fixedBox.width/2+movingBox.width/2 &&
    fixedBox.y-movingBox.y <= fixedBox.height/2+movingBox.height/2 &&
    movingBox.y-fixedBox.y <= fixedBox.height/2+movingBox.height/2){
    movingBox.shapeColor = "red";
   fixedBox.shapeColor = "red";
   movingBox.velocityX = - movingBox.velocityX; 
   fixedBox.velocityX = - fixedBox.velocityX;


  }else{
    movingBox.shapeColor = "green";
    fixedBox.shapeColor = "green";
  }

  drawSprites();
};