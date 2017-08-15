var playerFriction = 0.1;
var horizontalSpeed = 0.35;
var gravity = 1.5;
var jumpForce = 10;
function Player(x,y){
    this.standState = new StandState();
    this.jumpState = new JumpState();
    this.dashState = new DashState();

    this.sprite = createSprite(x,y,64,92);
    var img = loadImage("assets/ground.png");
    this.sprite.addAnimation("stand", "assets/p1_stand.png");
    this.sprite.addAnimation("jump", "assets/p1_jump.png");
    this.sprite.addAnimation("walk", "assets/p1_walk0001.png","assets/p1_walk0002.png","assets/p1_walk0003.png"
                            ,"assets/p1_walk0004.png","assets/p1_walk0005.png","assets/p1_walk0006.png"
                            ,"assets/p1_walk0007.png","assets/p1_walk0008.png","assets/p1_walk0009.png"
                            ,"assets/p1_walk0010.png","assets/p1_walk0011.png");
    //this.sprite.shapeColor = color(100,100,100);
    this.sprite.scale = 0.5;
    this.sprite.setCollider("rectangle",0,0,64,92);
    this.sprite.friction = playerFriction;
    this.jumping = false;
    this.inAir;
    this.playerState = this.standState;
    
    this.update = function(){
       
        if(!this.sprite.touching.bottom){
            this.sprite.addSpeed(gravity,90);
        }
        
        if(this.sprite.touching.left ){
            this.sprite.velocity.x = 0.1
        }
        if(this.sprite.touching.right ){
            this.sprite.velocity.x = -0.1
        }

        this.playerState.update();
    }

    this.jump = function(){
        console.log("jump started")
        player.sprite.addSpeed(10,-90);
        
    }
   
    this.moveLeft = function(mult = 1){
        this.sprite.mirrorX(-1);
        if(this.sprite.getAnimationLabel()=="stand")
            this.sprite.changeAnimation("walk");
        this.sprite.addSpeed(horizontalSpeed*mult,-180);
    }
    this.moveRight = function(mult = 1){
        console.log(mult)
        this.sprite.mirrorX(1);
        if(this.sprite.getAnimationLabel()=="stand")
            this.sprite.changeAnimation("walk");
        this.sprite.addSpeed(horizontalSpeed*mult,0);
    }
    this.setState = function(label){
        if(label =="standing"){
            this.standState.setAsCurrentState(this);
        }
        if(label == "jumping"){
            this.jumpState.setAsCurrentState(this);
        }
        if(label == "dashing"){
            this.dashState.setAsCurrentState(this);
        }
    }
}


function JumpState(){
    this.stateLabel = "jumping";
    this.setAsCurrentState = function(player){
        player.playerState = this;
        this.charge = 4;
        this.allowDoubleJump = false;
        this.doubleJumpDone = false;
        player.sprite.changeAnimation("jump");
    }
    this.update = function(){
        if(player.sprite.touching.bottom){
            player.setState("standing");
        }
        if(keyDown('A')){
            player.moveLeft(1.4);
        }
        if(keyDown('D')){
            player.moveRight(1.4);
        }
        if(keyDown(' ')){
            if(this.allowDoubleJump && !this.doubleJumpDone){
                player.sprite.addSpeed(20,-90);
                this.doubleJumpDone = true;
            }
            player.sprite.velocity.y -= this.charge;
            this.charge /= 1.1;
        }
        if(keyWentUp('J')){
            player.setState("dashing");
        }
        if(keyWentUp(' ')){
            this.allowDoubleJump = !this.doubleJumpDone;
        }
        
    }
}

function StandState(){
    this.stateLabel = "standing";
    this.setAsCurrentState = function(player){
        player.playerState = this;
        player.sprite.changeAnimation("stand")
        player.sprite.velocity.y = 0;
        
    }
    this.update = function(){
        
        if(player.sprite.velocity.x < 1.5 || player.sprite.velocity > -1.5){
            player.sprite.changeAnimation("stand");
        }
        if(keyDown(" ")){
            player.setState("jumping");
            player.jump();
        }
        if(keyDown('A')){
            player.moveLeft();
        }
           
        if(keyDown('D')){
            player.moveRight();
        }
        if(keyWentUp('J')){
            player.setState("dashing");
        }
            
    }
}

function DashState(){
    this.stateLabel = "dashing";
    this.setAsCurrentState = function(player){
        player.playerState = this;
        console.log(player.sprite.getDirection())
        
        player.sprite.changeAnimation("jump")
        player.sprite.velocity.y = 0;
        
        player.sprite.addSpeed(15,player.sprite.getDirection());
    }
    this.update = function(){
        if(player.sprite.velocity.x < 1.5 || player.sprite.velocity > -1.5){
            console.log("going back to standing");
            player.setState("standing");
        }    
    }
}

