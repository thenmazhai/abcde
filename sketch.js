
var trex ,trex_running, ground, groundImg;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImg=loadAnimation("ground2.png");
}

function setup(){
  createCanvas(600,200)
  

  //create a trex sprite
 trex=createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 edges=createEdgeSprites();
 //adding scale and position to trex
 trex.scale=0.5;
 trex.x=50;
 //create ground sprite
 ground=createSprite(200,180,400,20);
 ground.addAnimation("ground",groundImg);
 ground.x=ground.width/2;
}

function draw(){
  //set the background
  background("white");
  ground.velocityX=-2;
  console.log(ground.x);

  if(ground.x<0){
    ground.x=ground.width/2;
  }
  //using console.log
  console.log("trex Runner");
  console.log(trex.y);
  //jumps when space key is pressed
  if(keyDown("space")){
    trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY+0.5;
  //stop trex from falling down
  trex.collide(ground);
  drawSprites();

}
