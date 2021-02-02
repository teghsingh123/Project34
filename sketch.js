//Create variables here
var dog,dogIm, HappyDog,database,foodS,foodStock
function preload()
{
  //load images here
  dogIm = loadImage("images/dogImg.png");
  HappyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500 , 500);
  
  dog = createSprite(200,200,0,0);
  dog.addImage(dogIm);
  dog.scale = 0.15

  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
  textSize(20);
}


function draw() {  
background(46,139,87);
text("Press Up Arrow to Feed",130,10,300,20)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(HappyDog);
}
  drawSprites();
  //add styles here
textSize(10);
fill("white");
stroke("black");
textSize(13);
}

function readStock(data){
  foodS=data.val();


}

function writeStock(x){
  if(x<= 0){
    x=0;
  }else{
    x=x-1;
  }
 
  database.ref('/').update({
    Food:x
  })
}

