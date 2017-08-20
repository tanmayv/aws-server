function Door(x,y){
    this.sprite = createSprite(x,y,270,339);
    var img = loadImage("assets/door.png");
    this.sprite.addImage(img);
    this.sprite.scale = 0.3;
    this.sprite.setCollider("rectangle",0,20,150,200)
    this.sprite.debug = true;
}
function Level2(width, height){
    this.terrainGroup = new Group();
    this.enemiesGroup = new Group();
    this.army = [];
    this.door;
    this.generate = function(){
        this.door = new Door(90,height - 700);
        var ground = new Ground(0,0,8,1,height);
        this.terrainGroup.add(ground.sprite);

        ground = new Ground(10,0,6,1,height);
        this.terrainGroup.add(ground.sprite);

        ground = new Ground(14,2,2,2,height);
        this.terrainGroup.add(ground.sprite);
        
        ground = new Ground(19,2,1,3,height);
        this.terrainGroup.add(ground.sprite);

        ground = new Ground(20,0,8,1,height);
        this.terrainGroup.add(ground.sprite);
        
        ground = new Ground(32,0,4,1,height);
        this.terrainGroup.add(ground.sprite);
        
        ground = new Ground(36,10,1,11,height);
        this.terrainGroup.add(ground.sprite);
        var enemy = new EnemyVertical(18,11, height);
        this.enemiesGroup.add(enemy.sprite);
        this.army.push(enemy);
        enemy = new EnemyVertical(16,10, height);
        this.enemiesGroup.add(enemy.sprite);
        this.army.push(enemy);
        enemy = new EnemyVertical(14,9, height);
        this.enemiesGroup.add(enemy.sprite);
        this.army.push(enemy);
        enemy = new EnemyHorizontal(20,9, height);
        this.enemiesGroup.add(enemy.sprite);
        this.army.push(enemy);
        
        ground = new Ground(35,3,1,1,height);
        this.terrainGroup.add(ground.sprite);

        ground = new Ground(28,6,4,1,height);
        this.terrainGroup.add(ground.sprite);
        
        
        ground = new Ground(13,8,12,1,height);
        this.terrainGroup.add(ground.sprite);

        ground = new Ground(10,10,1,1,height);
        this.terrainGroup.add(ground.sprite);
        ground = new Ground(7,11,1,1,height);
        this.terrainGroup.add(ground.sprite);
        ground = new Ground(0,12,5,1,height);
        this.terrainGroup.add(ground.sprite);
        
    }
    this.update = function(){
        for(var i =0; i < this.army.length; i++){
            this.army[i].update();
        }
    }
}

function Level1(width,height){
    this.terrainGroup = new Group();
    this.enemiesGroup = new Group();
    this.army = [];
    this.door;
    this.generate = function(){
        this.door = new Door(90,height - 700);
        var ground = new Ground(0,0,8,1,height);
        this.terrainGroup.add(ground.sprite);

        ground = new Ground(10,0,9,1,height);
        this.terrainGroup.add(ground.sprite);

        ground = new Ground(15,2,4,2,height);
        this.terrainGroup.add(ground.sprite);
        ground = new Ground(17,4,2,2,height);
        this.terrainGroup.add(ground.sprite);
        
        this.door = new Door(18*50 + 1,height - 300);
        
        
    }
    this.update = function(){
        for(var i =0; i < this.army.length; i++){
            this.army[i].update();
        }
    }
}