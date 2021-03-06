//variables declared
var bow,bowImg;
var arrow,arrowImg;
var board;
var score=0;
 var boardImg;
var arrowGroup;

function preload(){
  //images loaded
  boardImg=loadImage("target.jpg");
  bowImg=loadImage("bow and arrow.png");
  arrowImg=loadImage("arrow.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);

  //sprites created
  bow=createSprite(displayWidth/2+20,displayHeight/2+350,50,50);
  bow.addImage(bowImg);
  //bow.scale=0.5;
  board=createSprite(displayWidth/2-20,displayHeight/2-50,200,200);
  board.addImage(boardImg);
  board.scale=0.5;

  arrowGroup=createGroup();
  

}

function draw() {

  background(255,255,255);  

  bow.x=mouseX;
  

  if(arrowGroup.x>1000){
    score=score+10;
  }

  //shoot();
  drawSprites();
  textSize(20);
  fill("blue");
  text("SCORE:"+score,displayWidth/4-40,displayHeight/4-20);
}

//function for shooting the arrow
function keyPressed(){
 if(keyCode===32){
   var arrow=createSprite(1000,780,20,20);
    arrow.addImage(arrowImg);
    arrow.scale=0.5;
    arrow.velocityY=Math.round(random(-2,-6));
    arrow.y=random(100,500);
    arrow.x=bow.x;
    //arrow.x=random(500,1500);
    arrowGroup.add(arrow);
    console.log(arrow.x);
    if(arrow.x>500&&arrow.x<700){
      score=score+10;
    }
    if(arrow.x>100&&arrow.x<500){
      score=score+5;
    }
    if(arrow.x>700&&arrow.x<900){
      score=score+15;
    }
    if(arrow.x>900&&arrow.x<1100){
      score=score+20;
    }

  }
}