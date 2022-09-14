let newBlock = (x, y, w, h) => {
    let g = new GameObject();

    let gt = g.addComponent(components.transform);
    gt.setXY(x, y);
    gt.setWidth(w);
    gt.setHeight(h);

    let gc = g.addComponent(components.collider);
    return g;
}

newBlock(-50, 50, 110, 10);
newBlock(100, 25, 110, 10);
newBlock(250, 0, 110, 10);
newBlock(400, -25, 110, 10);
newBlock(250, -100, 110, 10);
newBlock(100, -150, 110, 10);
newBlock(-100, -200, 110, 10);
newBlock(-100, -240, 10, 40);
newBlock(-200, -250, 110, 10);
newBlock(-200, -500, 10, 250);
newBlock(-100, -350, 410, 10);
newBlock(-100, -450, 410, 10);
newBlock(420, -500, 200, 10);
    
frameUpdate(() => {
    console.log(playerY > 100)
    if(playerY > 100){
        playerY = 0;
        playerX = 0;

        xVel = 0;
        yVel = 0;
    }
})