
var monkey , monkeymoving;
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup;
var survivalTime=0;
var score 
function preload(){
  
  
   monkeymoving=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
    
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(400, 400);
    
  
    monkey=createSprite(80,300,20,20);
    monkey.addAnimation("moving",monkeymoving);
    monkey.scale=0.1;
  
    ground=createSprite(400,350,900,10);
    ground.velocityX=-4;
    //ground.x=ground.width/2;
}


function draw() {
    background("white")
  
    food();
    obstacles();
    bananaGroup=createGroup();
    obstacleGroup=createGroup();
  
  
  if(obstacleGroup.isTouching(monkey)){
     monkey.velocityX=0;

   }
    monkey.velocityY = monkey.velocityY + 0.8
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
  
   
   monkey.collide(ground)
   drawSprites();

   stroke("black");
   textSize(20)
   fill("black")
   survivalTime=Math.ceil(frameCount/frameRate())
   text("survivalTime:"+ survivalTime,100,50);
  
}

function food(){
 if (frameCount % 150 === 0){
    var banana = createSprite(400,200,20,20);
     banana.addImage(bananaImage);
     banana.velocityX=-4;
     banana.scale=0.1;
     banana.y=Math.round(random(50,120));
     banana .setLifetime=-1;
    bananaGroup.add( banana);   
 }
  
  
}

function obstacles(){
  if(World.frameCount%300===0){
   obstacle=createSprite(300,325,20,20); 
   obstacle.addImage(obstaceImage);
   obstacle.setLifetime=150;
   obstacle.velocityX=-4;
   obstacle.scale=0.1 
   obstacleGroup.add(obstacle);   
    
  }
  
  
}
  




