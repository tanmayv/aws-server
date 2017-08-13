var width = 800;
var height = 500;
var currentLevel;
var player ;
function setup(){
    createCanvas(800,500);
    if(typeof currentLevel == "undefined"){
        currentLevel = new Level1(width, height);
        currentLevel.generate();
    }
    player = new Player(50,height-200);
}

function draw(){
    background(176,224,230);
    if(player.sprite.position.y > height){
        resetPlayer();
    }
    player.sprite.overlap(currentLevel.door.sprite, function(p,d){
        player.sprite.addSpeed(50,-45);
        alert("Level Complete!");
    })
    player.sprite.collide(currentLevel.terrainGroup);
    
    player.update();
    currentLevel.update();
    followPlayer();
    currentLevel.enemiesGroup.collide(currentLevel.terrainGroup);
    player.sprite.collide(currentLevel.enemiesGroup, function(p,e){
        if(player.playerState.stateLabel == 'dashing'){
            e.remove();
        }else{
            resetPlayer();
        }
    })
    drawSprites(); 
}

function followPlayer(){
    camera.position.x = player.sprite.position.x;

    camera.position.y = player.sprite.position.y;
    if(camera.position.x < width/2){
        camera.position.x = width/2;
    }
     
    if(camera.position.y > height/2){
        camera.position.y = height/2;
    }
}

function resetPlayer(){
    player.sprite.position.x = 50;
    player.sprite.position.y = height - 200;
}