


 var sleep,sleeping
 var astronaut
 var bg
 var brush,brushing
 

 function preload() {
sleep=loadAnimation("sleep.png")
bg=loadImage("iss.png")
brush= loadAnimation("brush.png")

}

function setup() {
  createCanvas(400,400);
astronaut=createSprite(200,200,20,20);   
astronaut.addAnimation("sleeping",sleep);  
astronaut.scale=0.1

astronaut=createSprite(200,200,20,20);
astronaut.addAnimation("brushing",brush);
astronaut.scale=0.1

}






function draw() {
  background(bg);  
  
if(keyDown("DOWN_ARROW")){
astronaut.addAnimation("sleeping",sleep);
astronaut.changeAnimation("sleeping");
astronaut.y=350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}
if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brush);
astronaut.changeAnimation("brushing");
astronaut.y=350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}
  drawSprites();
}