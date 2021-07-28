class Breakoutai{
    constructor(){

    }
    

display() {
  background("white")
  ballbkAI = createSprite(200,200,10,10);
  ballbkAI.addImage("ballbkAI",ballbkAIImg)
    //ballbkAI.setAnimation("golfballbkAI_1");
   ballbkAI.scale = 0.05;
    paddle = createSprite(200, 350, 120, 10);
    paddle.shapeColor = color(0,0,255);

    edges=createEdgeSprites();

    bricks = createGroup();
    function createBrickRow(y, color) {
      for(var c=0; c<6; c++)
      {
        brick = createSprite(65+54*c,y,50, 25);
        brick.shapeColor = color;
        bricks.add(brick);
      }
    
    
    }
    createBrickRow(65, "red");
    createBrickRow(65+29, "orange");
    createBrickRow(65+29+29, "green");
    createBrickRow(65+29+29+29, "yellow");
  textSize(20);
  text("Score: "+score,40,47);
  
  paddle.x = World.mouseX;
  
  if(paddle.x < 60)
  {
    paddle.x = 60;
  }
    
  if(paddle.x > 340)
  {
    paddle.x = 340;
  }

drawSprites();
  

function brickHit(ballbkAI,brick) {
  brick.destroy();
  score = score + 5;
   
 }
  ballbkAI.bounceOff(edges[2]);
  ballbkAI.bounceOff(edges[3]);
  ballbkAI.bounceOff(edges[1]);
  ballbkAI.bounceOff(edges[0]);
  ballbkAI.bounceOff(paddle);
  ballbkAI.bounceOff(bricks, brickHit);
  
}


 

 keyPressed()
{
  if (keyCode===32){
  ballbkAI.velocityX = 10;
  ballbkAI.velocityY = 10;
  }
}

}