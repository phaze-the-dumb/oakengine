let playerX = 0,
    playerY = 0,
    staticCamX = 0,
    staticCamY = 0,
    camX = 0,
    camY = 0,
    isKeyDown = {},
    lastTime = Date.now(),
    sca = 1.5,
    scale = 0.01,
    walkSpeed = 0.01,
    runSpeed = 0.02,
    speed = runSpeed,
    yVel = 0,
    xVel = 0,
    prevX = 0,
    prevY = 0,
    mouse = {
        x: 0,
        y: 0
    };

window.onmousemove = ( e ) => {
    mouse.x = e.clientX - canvas.width / 2;
    mouse.y = e.clientY - canvas.height / 2;
}

let move = () => {
    let dt = Date.now() - lastTime;
    
    yVel += 0.1;

    let colliderCount = 0;
    objects.forEach(go => {
        let collider = go.getComponent(components.collider);
        if(!collider)return;

        if(collider.isRest)colliderCount++;
    })

    objects.forEach(go => {
        let collider = go.getComponent(components.collider);
        if(!collider)return;

        if(playerY + 10 > collider.y && playerX + 10 > collider.x && playerX < collider.x + collider.w && playerY < collider.y + collider.h){
            let yVelCache = yVel;
            yVel = 0;

            if(isKeyDown['a']){
                xVel -= speed * dt;
                if(xVel < speed * -100)xVel = speed * -100;
            }
        
            if(isKeyDown['d']){
                xVel += speed * dt;
                if(xVel > speed * 100)xVel = speed * 100;
            }

            if(isKeyDown['w']){
                yVel -= 4;
            }

            if(!collider.isRest){
                yVel = 0;
                if(!collider.allowClimb && yVelCache < 0)
                    yVel = yVelCache * -1
                else
                    collider.isRest = true;

                if(playerY > collider.y && playerY - 10 < collider.y + collider.h){
                    if(colliderCount !== 0){
                        if(xVel.toFixed(2) > 0 && playerX + 10 > collider.x && !playerX + 10 < collider.x + collider.w)
                            xVel = 0;

                        if(xVel.toFixed(2) < 0 && playerX < collider.x + collider.w && !playerX > collider.x)
                            xVel = 0;

                        collider.isRest = false;
                    } else if(isKeyDown['w']){
                        xVel *= -1.84;
                        yVel -= 2.5;

                        if(xVel > 5)xVel = 5 // Comment Out For Fucky Wall Jump
                        if(xVel < -5)xVel = -5 // Comment Out For Fucky Wall Jump
                    } else{
                        xVel *= -1;
                    }
                }
    
            }

            if(xVel > 0){
                xVel -= 0.1
            } else if(xVel < 0){
                xVel += 0.1
            }
        } else{
            if(collider.isRest)
                collider.isRest = false;

            if(xVel > 0){
                xVel -= 0.0005
            } else if(xVel < 0){
                xVel += 0.0005
            }
        }
    })

    playerY += yVel;
    playerX += xVel;

    camX = math.lerp(camX, playerX + mouse.x / 10, 0.05);
    camY = math.lerp(camY, playerY + mouse.y / 10, 0.05);
    scale = math.lerp(scale, sca - (Math.sqrt(Math.pow(mouse.x, 2) + Math.pow(mouse.y, 2)) / 10000), 0.1);
    
    lastTime = Date.now();
}

window.onkeydown = (e) => isKeyDown[e.key] = true;
window.onkeyup = (e) => isKeyDown[e.key] = false;

window.onwheel = (e) => {
    if(e.deltaY > 0){
        if(sca > 1){
            sca -= 0.1;
        }
    } else{
        if(sca < 1.5){
            sca += 0.1;
        }
    }
}