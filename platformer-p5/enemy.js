var movementSpeed = 2;
var counter = 150;
function EnemyHorizontal(x,y, height){
    x = x*50 + 25;
    y = height - y*50 - 25;
    this.sprite = createSprite(x,y,25,25);
    this.dir = 1;
    this.sprite.addAnimation("stand", "assets/ground.png");
    //this.sprite.shapeColor = color(100,100,100);
    this.sprite.scale = 2;
    this.sprite.setCollider("rectangle",0,0,25,25);
    this.counter = counter;
    this.update = function(){
        this.counter--;
        if(this.counter <=0){
            this.counter = counter;
            this.dir*= -1;
        }
        this.sprite.position.x += this.dir*movementSpeed;
        
    }
}

function EnemyVertical(x,y, height){
    x = x*50 + 25;
    y = height - y*50 - 25;
    this.sprite = createSprite(x,y,25,25);
    this.dir = 1;
    this.sprite.addAnimation("stand", "assets/ground.png");
    this.sprite.scale = 2;
    this.sprite.setCollider("rectangle",0,0,25,25);
    this.counter = counter;
    this.update = function(){
        this.counter--;
        if(this.counter <=0){
            this.counter = counter;
            this.dir*= -1;
        }
        this.sprite.position.y += this.dir*movementSpeed;   
    }
}
