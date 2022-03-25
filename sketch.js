const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var bg, ma, maImg;
var block, blockImg, lpipe, lpipeImg, spipe, spipeImg, blockGroup
var maCam

function preload()
{
   bg = loadImage("assets/bg.png");
   maImg = loadImage("assets/standing.png") 
   blockImg = loadImage("assets/block.png")
}

function setup()
{
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world
  
    ma = createSprite(100,570,20,20);
    ma.addImage(maImg);
    ma.scale = 0.1

    blockGroup = new Group()


}

function draw()
{


    background(0,0,0);

    image(bg,0, 0, width, height);
    image(bg,-width, 0, width, height);
    image(bg,width, 0, width, height);
    image(bg,width*2, 0, width, height);
    image(bg,width*3, 0, width, height);
    image(bg,width*4, 0, width, height);
    image(bg,width*5, 0, width, height);

    maCam = ma.x + 10

    textSize(20);
    text("Score:"+ ma.x, ma.x, ma.y - 80)

    camera.position.x = maCam;

    moveMa();
    spawnBlocks();

    drawSprites();

}

function moveMa()
{
    if(keyDown(RIGHT_ARROW))
    {
        ma.x += 10
    }


    if(keyDown(LEFT_ARROW))
    {
        ma.x -= 10
    }

    if(ma.y <= 570)
    {
        ma.y += 15;
    }

    if(keyDown(UP_ARROW))
    {
        ma.y -= 20
    }

}


function spawnBlocks()
{
    if(frameCount % 20 === 0)
    {
        block = createSprite(random(500, width*5), random(300, height - 100),40,10); 
        block.addImage(blockImg);

        blockGroup.add(block);

     }

     ma.collide(blockGroup);
}