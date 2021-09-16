var bob,bobImg,coin,coinImg,mushroom,mushroomImg,snail,snailImg,gameover,gameoverImg

var PLAY = 1
var END = 0
var gamestate = 1
var score=0
var sea,seaImg;
var slab,invisibleGround,coinG,mushroomG,snailG,slabG



function preload(){
bobImg=loadAnimation("trex1.png","trex3.png","trex4.png")
coinImg=loadImage("coin.png")
seaImg=loadImage("background.png")
mushroomImg=loadImage("mushroom.png")
snailImg=loadImage("snail.png")
gameover=loadImage("gameOver.png")

}

function setup() {

createCanvas(600,600)
sea=createSprite(300,300,600,600)
sea.addImage(seaImg)
sea.velocityX=-7

bob=createSprite(100,500,50,50) 
bob.addAnimation("walking",bobImg)
bob.scale=0.5



invisibleGround=createSprite(300,500,600,50)

snailG = new Group()
mushroomG = new Group()
slabG = new Group()
coinG = new Group()
}

function draw() {

 if(sea.x<0){
     sea.x=sea.width/8
 }

 invisibleGround.visible=false

 bob.collide(invisibleGround)

 if(keyDown("space")){
     bob.y=bob.y-18
 }
 bob.y=bob.y+1

     
    if(bob.isTouching(coinG)){
    coinG.destroyEach()
    score=score+1
    }
       
    if(bob.isTouching(slabG)){
        bob.velocityY=0
        }

    if (bob.isTouching(snailG)||bob.isTouching(mushroomG)){
     bob.destroy()
     bob.addAnimation("game over",gameoverImg)
     coinG.destroyEach()
     gamestate=END
     snailG.destroyEach()
     mushroomG.destroyEach()     
    }
    
 spawn()
 drawSprites()
 text("Score: "+ score, 500,50);   
}


function spawn(){
    if (frameCount % 60 === 0){
 slab=createSprite(610,100,80,20)
 slab.velocityX=-2
 slab.y=Math.round(random(50,450))

 coin=createSprite(610,100,50,50)
 coin.addImage(coinImg)
 coin.velocityX=-2
coin.scale=0.05
coin.y=Math.round(random(50,450))

 mushroom=createSprite(610,510,20,20)
 mushroom.addImage(mushroomImg)
 mushroom.velocityX=-2
 mushroom.scale=0.05


 snail=createSprite(-10,510,20,20)
 snail.addImage(snailImg)
 snail.scale=0.08
 snail.velocityX=2


 mushroomG.add(mushroom)
 coinG.add(coin)
 slabG.add(slab)
 snailG.add(snail)
    }

}