var towerImage,tower,doorImage        
var door,doorGroup,climberImage,climber,climberGroup
var ghostImage,ghost,invisibleBlockGroup,invisibleBlock
var gameState="PLAY"
var spookySound

function preload (){
  towerImage=loadImage("tower.png")
doorImage=loadImage("door.png")
  climberImage=loadImage("climber.png")
  ghostImage=loadImage("ghost-standing.png")
  spookySound=loadSound("spooky.wav")
  doorGroup=new Group();
  climberGroup=new Group();
  invisibleBlockGroup=new Group();
}
function setup(){
  createCanvas(600,600)
 // spookySound.loop()
  tower=createSprite(300,300)
  tower.addImage(towerImage)
  tower.velocityY=3;
  
  ghost=createSprite(200,200,50,50)
  ghost.addImage(ghostImage)
  ghost.scale=0.4;
}
function draw(){
  background(0);
  if(gameState==="PLAY")
  {
if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
  gameState="END"
  
}    
    
    
  
  if(tower.y>400){
    tower.y=300;
    
  
  }
  if(keyDown("left")){
    ghost.x=ghost.x-3 
  }
   if(keyDown("right")){
    ghost.x=ghost.x+3
  }
  if(keyDown("SPACE")){
    ghost.velocityY=-5;
  }
  ghost.velocityY=ghost.velocityY+0.8  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  spawnDoor();
  drawSprites();
    
}
  if(gameState==="END"){
   stroke("yellow") 
    fill("yellow")
    textSize(30)
    text("gameOver",200,200)
  }
}
function spawnDoor(){
  if(frameCount%240==0){
    
  door=createSprite(200,-50) 
    door.addImage(doorImage)
    door.velocityY=3;
    door.x=Math.round(random(100,400))
    door.lifetime=500; 
    doorGroup.add(door);
    
    climber=createSprite(200,10)
    climber.addImage(climberImage)
    climber.velocityY=3;
    climber.x=door.x;
    climber.lifetime=500;
    climberGroup.add(climber);
    
  ghost.depth=door.depth+1
invisibleBlock=createSprite(200,15)
    invisibleBlock.width=climber.width;
    invisibleBlock.height=5;
    invisibleBlock.debug=true;
    invisibleBlockGroup.add(invisibleBlock);
    invisibleBlock.velocityY=3;
    invisibleBlock.x=climber.x
     }
}
