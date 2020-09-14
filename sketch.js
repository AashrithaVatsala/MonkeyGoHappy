var Monkey, MonkeyImage; 
var BananaGroup, BananaImage; 
var StoneGroup, StoneImage;
var BackGround, BackgroundImage; 
var Ground;
var Score;  

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){

  MonkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  BananaImage = loadImage("Banana.png");

  StoneImage = loadImage("stone.png");

  BackGroundImage = loadImage("jungle2.jpg")  

}

function setup() {
 
  createCanvas(400, 400);
  
  
  BackGround = createSprite(200, 200, 10, 10);
  BackGround.addImage("backGround", BackGroundImage);
  BackGround.velocity = -3;
  
  Monkey = createSprite(70, 310, 10, 10);
  Monkey.addImage("Monkey", MonkeyImage);
  Monkey.scale = 0.15;

  Ground = createSprite(200, 330, 800, 10);
  Ground.x = Ground.width/2;
  
  Score = 0;
  

}

function draw() {
  background(220);
  
  if(gameState === PLAY){

  BackGround.velocityX = -3;
  
   if(BackGround.x < 0){
   BackGround.x = BackGround.width/2;  
  }  
  
  Ground.velocityx = -3;
  if(Ground.x < 0){
    Ground.x = Ground.width/2;
  } 
  
  Score = 0;
  Score = Math.round( Score + frameRate/60)
  text( "survivaltime:" + Score, 300, 390) 
    
  createstone();
  createbanana();
  
} else if(gameState === END){
               }
  
  
}

function createstone() {

  if(frameCount % 300 === 0){  
    var Stone = createSprite(400, 305, 10, 10);
    Stone.addImage("Stone", StoneImage);   
    Stone.scale = 0.15;
    Stone.velocityX = -3;  
    Stone.lifetime = 400;
    StoneGroup.add(Stone);  

  }
}

function createbanana() {

  if(frameCount % 80 === 0){

    var Banana = createSprite(400, 120, 10, 10);
    Banana.y = random(120, 200);
    Banana.addImage("Banana", BananaImage);
    Banana.scale = 0.05;
    Banana.velocityX = 3;
    Banana.lifetime = 400;
    BananaGroup.add(Banana);  

  } 
}