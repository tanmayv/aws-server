function Ground(x1,y1,x2,y2, height){

    var img = loadImage("assets/grassMid.png");
    x1 = x1*50 + 25;
    y1 = height - y1*50 - 25;
    x2 = x1 + (x2-1) * 50;
    y2 = y1 + (y2-1)  * 50;
    for(var i = x1; i <=x2; i+= 50){
        for(var j = y1; j<=y2; j+=50){
            var sprite = createSprite(i,j,70,70);
            sprite.addImage(img);
            sprite.scale = 0.72;
        }
    }
    //this.sprite.shapeColor = color(100,100,100);
    this.sprite = createSprite(x1 + (x2-x1)/2,y1 + (y2-y1)/2,0, 0);
    this.sprite.immovable =true;
    this.sprite.setCollider("rectangle",0,0,x2-x1 + 50,y2-y1 + 50);
}