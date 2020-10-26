var player,playerImage;
//player.setAnimation("player.png");
//player.scale=5000000000;
 
  var score = 0;



var PLAY = 0;
var END = 1;

var startTime=0;

var gameState = PLAY;

var knife,knifeImage;
//knife.setAnimation("knife.jpg_1");
//knife.scale=0.06;

var enemyImage;
var enemy1Image;
var enemy2Image;
var enemy3Image;
var enemy4Image;
var enemy5Image;
var enemy6Image;
var enemy7Image;

var backgroundImage;

var enemyGroup 
var enemy1Group
var enemy2Group
var enemy3Group

function preload() {
   knifeImage=loadImage ("sprites/knife.png");
   playerImage=loadImage ("sprites/player.png");

   backgroundImage=loadImage("sprites/background.jpg")

   enemyImage=loadImage ("sprites/enemy.png");
   enemy1Image=loadImage ("sprites/enemy.png");
   enemy2Image=loadImage ("sprites/enemy.png");
   enemy3Image=loadImage ("sprites/enemy.png");
   enemy4Image=loadImage ("sprites/enemy.png");
   enemy5Image=loadImage ("sprites/enemy.png");
   enemy6Image=loadImage ("sprites/enemy.png");
   enemy7Image=loadImage ("sprites/enemy.png");

}

function setup() {
  createCanvas(1000,400);
 
  knife = createSprite(200,200,5,5);
  knife.addImage("weapon",knifeImage);
  knife.scale=0.08;
  enemyGroup =new Group();
  enemy1Group =new Group();
  enemy2Group =new Group();
  enemy3Group =new Group();
  player  = createSprite(200,200,20,20);
  player.addImage("knifeanimetion",playerImage);
  player.scale=0.5;
}


function draw() {
  background(backgroundImage);
  
  
  if(keyDown("UP_ARROW")){
    player.y=player.y-5;
  }
  
   if(keyDown("DOWN_ARROW")){
    player.y=player.y+5;
  }
   if(keyDown("LEFT_ARROW")){
    player.x=player.x-5;
   }
  
   if(keyDown("RIGHT_ARROW")){
    player.x=player.x+5;
  }
  
/////////////

  if(keyDown("UP_ARROW")&&keyDown("shift")){
    player.y=player.y-15;
  }
  
  if(keyDown("DOWN_ARROW")&&keyDown("shift")){
    player.y=player.y+15;
  }
  if(keyDown("RIGHT_ARROW")&&keyDown("shift")){
    player.x=player.x+15;
  }
  if(keyDown("LEFT_ARROW")&&keyDown("shift")){
    player.x=player.x-15;
  }


   
 if(knife.isTouching(enemyGroup)){
    enemyGroup.destroyEach();
    score=score+100;
    }
    if(knife.isTouching(enemy1Group)){
    enemy1Group.destroyEach();
           score=score+1000;

    }
    if(knife.isTouching(enemy2Group)){
    enemy2Group.destroyEach();
    score=score+100;
    }
    if(knife.isTouching(enemy3Group)){
    enemy3Group.destroyEach();
          score=score+100;
    }
   textSize(20);
    text("score: "+score,50,40);
  

    if(startTime>0&&startTime+20===second()){
startTime = 0;
knife.y=player.y-10;
  knife.x=player.x+4;
  knife.depth=player.depth+1;
  if(player.isTouching(enemyGroup)||player.isTouching(enemy1Group)
    ||player.isTouching(enemy2Group)||player.isTouching(enemy3Group)){
      knife.destroy();
      player.destroy();
  gameState=END;
}
}
     
if(keyDown("c")){
  knife.y=World.mouseY;
  knife.x=World.mouseX;
  startTime=second();

}else{
  knife.y=player.y-10;
  knife.x=player.x+4;
  knife.depth=player.depth+1;
}  
if(keyDown("space")&&player.isTouching(enemy3Group)){
enemy3Group.destroyEach();
startTime=second();
}
if(keyDown("space")&&player.isTouching(enemy2Group)){
enemy2Group.destroyEach();
startTime=second();

}
if(keyDown("space")&&player.isTouching(enemyGroup)){
enemyGroup.destroyEach();
startTime=second();

}
if(keyDown("space")&&player.isTouching(enemy1Group)){
enemy1Group.destroyEach();
startTime=second();

}


  if(gameState===PLAY){
    notFriend();
  }
 
 if(gameState===END){
   end();
 }
 
    if(player.isTouching(enemyGroup)||player.isTouching(enemy1Group)
    ||player.isTouching(enemy2Group)||player.isTouching(enemy3Group)){
      knife.destroy();
      player.destroy();
  gameState=END;
}


//notFriend();
  
 
  
  
  drawSprites();
}




function notFriend (){
  

  //knife.y=player.y;
  //knife.x=player.x;
   
  if(World.frameCount%100===0&&gameState===PLAY){
  
  var enemy = createSprite(500,20,20,20);
  enemy.addImage("a",enemyImage);
  enemy.scale=0.2;
// enemy.setAnimation("enemy.png");
  enemy.velocityY=2;
  enemyGroup.add(enemy); 
    }
    
    
    
    
  if(World.frameCount%120===0&&gameState===PLAY){
  var enemy1 = createSprite(400,200,20,20);
  enemy1.addImage("b",enemyImage);
  enemy1.scale=0.2;
  //enemy1.setAnimation("enemy.png");
  enemy1.velocityX=-2;
  enemy1Group.add(enemy1); 
  
    }

    if(World.frameCount%600===0&&gameState===PLAY){
      var enemy7 = createSprite(40,20,20,20);
      enemy7.addImage("c",enemyImage);
      enemy7.scale=0.2;
      //enemy1.setAnimation("enemy.png");
      enemy7.shapeColor="red";
      enemy7.velocityX=4;
      enemy1Group.add(enemy7); 
      
        }   
    
    
  
  if(World.frameCount%140===0&&gameState===PLAY){
  var enemy2 = createSprite(0,200,20,20);
  enemy2.addImage("d",enemyImage);
  enemy2.scale=0.2;
//  enemy2.setAnimation("enemy.png");
  enemy2.velocityX=2;
  enemy2Group.add(enemy2); 
  var enemy5 = createSprite(250,40,20,20);
  enemy5.addImage("e",enemyImage);
  enemy5.scale=0.2;
  //enemy3.setAnimation("enemy.png");
  enemy5.velocityY=2;
  enemy3Group.add(enemy5); 
  var enemy6 = createSprite(1000,200,20,20);
  enemy6.addImage("f",enemyImage);
  enemy6.scale=0.2;
  //enemy3.setAnimation("enemy.png");
  enemy6.velocityX=-2;
  enemy3Group.add(enemy6); 
  }
  
  
  
  
  if(World.frameCount%180===0&&gameState===PLAY){
  var enemy3 = createSprite(200,400,20,20);
  enemy3.scale=0.2;
  //enemy3.setAnimation("enemy.png");
  enemy3.velocityY=-2;
  enemy3Group.add(enemy3); 
  var enemy4 = createSprite(20,400,20,20);
  enemy4.scale=0.2;
  //enemy3.setAnimation("enemy.png");
  enemy4.velocityY=-2;
  enemy3Group.add(enemy4);   
  }
  
  
  }
  
  
  function end(){
    enemyGroup.destroyEach(0);
    enemy1Group.destroyEach(0);
    enemy2Group.destroyEach(0);
    enemy3Group.destroyEach(0);
  textSize(50);
   text("GAME OVER",20,200);
  }