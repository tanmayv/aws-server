var square;
var level1;
var player;
var worldEditor =true;
var templateSprite ;
var width = 800;
var height = 400;
var terrainData = [];
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  level1 = new Level1(width, height);
  level1.prepare();
  player = new Player(100,100);
  level1.setPlayer(player);
  console.log(camera.position.x);
}

function draw() {
  background(176,224,230);
  player.update();
  level1.update();
  drawSprites();
  if(worldEditor){
    onWorldEditEnable();
  }
  camera.position.x = player.sprite.position.x + 250;
  if(camera.position.x < 400){
    camera.position.x = 400;
  }
  
}


function onWorldEditEnable(){

  if(typeof templateSprite === "undefined"){
    console.log("hell yeah")
    templateSprite = new Ground(25, 25);
  }

  templateSprite.sprite.position.x= cameraToWorldSpaceX(mouseX) - (cameraToWorldSpaceX(mouseX)%50) + 25;
  templateSprite.sprite.position.y= cameraToWorldSpaceY(mouseY) - (cameraToWorldSpaceY(mouseY)%50) + 25;
  ;
  //console.log(mouseX + "," + mouseY);
}

function mouseClicked(){
  if(worldEditor){
    var list = {
      "x" : templateSprite.sprite.position.x,
      "y" : templateSprite.sprite.position.y - height
    };

    terrainData.push(list);
    level1.addTerrainBlock(templateSprite.sprite.position.x, templateSprite.sprite.position.y);
    
  }
    
}

function cameraToWorldSpaceX(xcordinate){
  return xcordinate + camera.position.x - width/2;
}

function cameraToWorldSpaceY(ycordinate){
  return ycordinate + camera.position.y - height/2;
}

function saveData(){
  console.log(terrainData);
}
