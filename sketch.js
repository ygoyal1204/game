//var Form, BreakoutF, Breakoutai, Pongai,PongF;
var form, breakoutf,breakoutai,pongai,pongf;
var ballpongAI,playerPaddle,computerPaddle,canvas
//variable to store different state of game

var edges
//variables to keep the score
var compScore = 0;
var playerScore = 0;
var ballbkAI,bricksf,paddle,edges,brick;
var score = 0;
var canvas
var ballbkAIImg
var ballpongF,playerPaddle,player2Paddle,canvas
//variable to store different state of game

var edges
//variables to keep the score
var player2Score = 0;
var playerScore = 0;
var ball,bricks,paddle,edges,brick,paddle2,ball2;
var score = 0,score2=0;
var canvas
var ballImg,ballImg2
var SERVE=0
var GAME1=1
var GAME2=2
var GAME3=3
var GAME4=4
var gameState = 0;
var pong1 = 1
var pong2 = 2
var breakout1 = 3
var breakout2 = 4




function preload(){
  ballbkAIImg=loadImage("ball.png")  
  ballImg=loadImage("red.png")  
  ballImg2=loadImage("blue.png")  
     
}

function setup() {
  canvas=createCanvas(displayWidth,displayHeight)
  
  form = new Form()
  
 
}

function draw() {
 // fill("black")
  //text("mouseX"+","+"mouseY",mouseX,mouseY)
  background(255);
  
  if(gameState === 0){

form.display();
form.show();
  }
  if(gameState === 1){
    clear();
    form.hide();
    pongai=new Pongai()
    pongai.display();
    
      }
  if(gameState === 2){
        pongf=new PongF()
        pongf.display()
        
    }
    if(gameState === 3){
            breakoutai=new Breakoutai()
            breakoutai.display()
            
      }
              if(gameState === 4){
                breakoutf=new BreakoutF()
                breakoutf.display()
                
                  }

  
  
  
}

