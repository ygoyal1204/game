//create the ballpongAI, playerPaddle and computerPaddle as sprite objects
class Pongai{
  constructor(){

  }

display() {
  //clear the screen
  background("white");
  ballpongAI = createSprite(200,200,10,10);
     playerPaddle = createSprite(380,200,10,70);
     computerPaddle = createSprite(10,200,10,70);
    edges=createEdgeSprites();
  
  //place info text in the center
  if (gameState === "serve") {
    text("Press Space to Serve",150,180);
  }
   
  //display scores
  text(compScore, 170,20);
  text(playerScore, 230,20);
  
  //make the player paddle move with the mouse's y position
  playerPaddle.y = World.mouseY;
  
  //AI for the computer paddle
  //make it move with the ballpongAI's y position
  computerPaddle.y = ballpongAI.y;
  
  //draw line at the centre
  for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  
  
  //create edge boundaries
  //make the ballpongAI bounce with the top and the bottom edges
  createEdgeSprites();
  ballpongAI.bounceOff(edges[2]);
  ballpongAI.bounceOff(edges[3]);
  ballpongAI.bounceOff(playerPaddle);
  ballpongAI.bounceOff(computerPaddle);
 
  
  //serve the ballpongAI when space is pressed
  if (keyDown("space") &&  gameState === "serve") {
    serve();
    gameState = "play";
  }
  
 
  //reset the ballpongAI to the centre if it crosses the screen
  if(ballpongAI.x > 400 || ballpongAI.x <0) {
    
    if(ballpongAI.x > 400) {
      compScore = compScore + 1;
    }
    
    if(ballpongAI.x < 0) {
      playerScore = playerScore + 1;
    }
    
    reset();
    gameState = "serve";
  }
  
  if (playerScore === 5 || compScore === 5){
    gameState = "over";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
  if (keyDown("r") && gameState === "over") {
    gameState = "serve";
    compScore = 0;
    playerScore = 0;
  }
  
  drawSprites();
}

 serve() {
  ballpongAI.velocityX = 3;
  ballpongAI.velocityY = 4;
}

 reset() {
  ballpongAI.x = 200;
  ballpongAI.y = 200;
  ballpongAI.velocityX = 0;
  ballpongAI.velocityY = 0;
}
}