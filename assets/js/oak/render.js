const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

let devOptions = {
    devInfo: true,
    shadowRays: false
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);
ctx.translate(canvas.width / 2, canvas.height / 2);

let fps = 0;
let fpsCount = 0;

let inBounds = (x, y, x1, y1, w, h) => {
    if(x1 < x && y1 < y && x1 + w > x && y1 + h > y){
        return true;
    } else{
        return false;
    }
}

setInterval(() => {
    fps = fpsCount;
    fpsCount = 0;
}, 1000)

let frameUpdateCB = () => {}
let frameUpdate = ( cb ) => {
    frameUpdateCB = cb;
}

let render = () => {
    frameUpdateCB();

    ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    requestAnimationFrame(render);

    move();
    fpsCount++;

    let shadows = [];

    objects.forEach(obj => {
        obj.render(ctx, shadows);
    })

    shadows.forEach(transform => {
        ctx.fillStyle = '#0005';
        ctx.strokeStyle = '#fff';

        ctx.beginPath();
        ctx.moveTo((transform.x - camX) * scale, (transform.y - camY) * scale);
        ctx.lineTo(
            (playerX + 5 - camX) * scale + ((playerX + 5 - camX) * scale - (transform.x - camX) * scale) * -300,
            (playerY - 25 - camY) * scale + ((playerY - 25 - camY) * scale - (transform.y - camY) * scale) * -300
        );
        ctx.lineTo(
            (playerX + 5 - camX) * scale + ((playerX + 5 - camX) * scale - ((transform.x - camX) * scale + (transform.width * scale))) * -300,
            (playerY - 25 - camY) * scale + ((playerY - 25 - camY) * scale - (transform.y - camY) * scale) * -300
        );
        ctx.lineTo((transform.x - camX) * scale + (transform.width * scale), (transform.y - camY) * scale);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo((transform.x - camX) * scale + (transform.width * scale), (transform.y - camY) * scale);
        ctx.lineTo(
            (playerX + 5 - camX) * scale + ((playerX + 5 - camX) * scale - ((transform.x - camX) * scale + (transform.width * scale))) * -300,
            (playerY - 25 - camY) * scale + ((playerY - 25 - camY) * scale - (transform.y - camY) * scale) * -300
        );
        ctx.lineTo(
            (playerX + 5 - camX) * scale + ((playerX + 5 - camX) * scale - ((transform.x - camX) * scale + (transform.width * scale))) * -300,
            (playerY - 25 - camY) * scale + ((playerY - 25 - camY) * scale - ((transform.y - camY) * scale + (transform.height * scale))) * -300
        );
        ctx.lineTo((transform.x - camX) * scale + (transform.width * scale), (transform.y - camY) * scale + (transform.height * scale));
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo((transform.x - camX) * scale + (transform.width * scale), (transform.y - camY) * scale + (transform.height * scale));
        ctx.lineTo(
            (playerX + 5 - camX) * scale + ((playerX + 5 - camX) * scale - ((transform.x - camX) * scale + (transform.width * scale))) * -300,
            (playerY - 25 - camY) * scale + ((playerY - 25 - camY) * scale - ((transform.y - camY) * scale + (transform.height * scale))) * -300
        );
        ctx.lineTo(
            (playerX + 5 - camX) * scale + ((playerX + 5 - camX) * scale - (transform.x - camX) * scale) * -300,
            (playerY - 25 - camY) * scale + ((playerY - 25 - camY) * scale - ((transform.y - camY) * scale + (transform.height * scale))) * -300
        );
        ctx.lineTo((transform.x - camX) * scale, (transform.y - camY) * scale + (transform.height * scale));
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo((transform.x - camX) * scale, (transform.y - camY) * scale + (transform.height * scale));
        ctx.lineTo(
            (playerX + 5 - camX) * scale + ((playerX + 5 - camX) * scale - (transform.x - camX) * scale) * -300,
            (playerY - 25 - camY) * scale + ((playerY - 25 - camY) * scale - ((transform.y - camY) * scale + (transform.height * scale))) * -300
        );
        ctx.lineTo(
            (playerX + 5 - camX) * scale + ((playerX + 5 - camX) * scale - (transform.x - camX) * scale) * -300,
            (playerY - 25 - camY) * scale + ((playerY - 25 - camY) * scale - (transform.y - camY) * scale) * -300
        );
        ctx.lineTo((transform.x - camX) * scale, (transform.y - camY) * scale);
        ctx.fill();
        ctx.closePath();

        if(devOptions.shadowRays){
            ctx.beginPath();
            ctx.moveTo((transform.x - camX) * scale, (transform.y - camY) * scale);
            ctx.lineTo(
                (playerX + 5 - camX) * scale + ((playerX + 5 - camX) * scale - (transform.x - camX) * scale) * -300,
                (playerY + 5 - camY) * scale + ((playerY + 5 - camY) * scale - (transform.y - camY) * scale) * -300
            );
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo((transform.x - camX) * scale + (transform.width * scale), (transform.y - camY) * scale + (transform.height * scale));
            ctx.lineTo(
                (playerX + 5 - camX) * scale + ((playerX + 5 - camX) * scale - ((transform.x - camX) * scale + (transform.width * scale))) * -300,
                (playerY + 5 - camY) * scale + ((playerY + 5 - camY) * scale - ((transform.y - camY) * scale + (transform.height * scale))) * -300
            );
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo((transform.x - camX) * scale, (transform.y - camY) * scale + (transform.height * scale));
            ctx.lineTo(
                (playerX + 5 - camX) * scale + ((playerX + 5 - camX) * scale - (transform.x - camX) * scale) * -300,
                (playerY + 5 - camY) * scale + ((playerY + 5 - camY) * scale - ((transform.y - camY) * scale + (transform.height * scale))) * -300
            );
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo((transform.x - camX) * scale + (transform.width * scale), (transform.y - camY) * scale);
            ctx.lineTo(
                (playerX + 5 - camX) * scale + ((playerX + 5 - camX) * scale - ((transform.x - camX) * scale + (transform.width * scale))) * -300,
                (playerY + 5 - camY) * scale + ((playerY + 5 - camY) * scale - (transform.y - camY) * scale) * -300
            );
            ctx.stroke();
            ctx.closePath();
        }
    })

    ctx.fillStyle = '#f00';
    ctx.fillRect((playerX - camX) * scale, (playerY - camY) * scale, 10 * scale, 10 * scale);

    if(devOptions.devInfo){
        ctx.font = '15px "Courier New"';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'left';
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;

        let onCollider = false;
        objects.forEach(obj => {
            let collider = obj.getComponent(components.collider);
            if(!collider)return;

            if(collider.isRest)onCollider = true;
        })

        let lines = [
            'FPS: ' + fps,
            'GameObjects: ' + objects.length,
            'X/Y: '+playerX.toFixed(2)+', '+playerY.toFixed(2),
            'Camera X/Y: '+camX.toFixed(2)+', '+camY.toFixed(2),
            'Scale: '+sca.toFixed(2)+'x',
            'Camera Scale: '+scale.toFixed(2)+'x',
            'X/Y Velocity: '+xVel.toFixed(2)+', '+yVel.toFixed(2),
            'On Collider: '+onCollider
        ]

        lines.forEach((l, i) => {
            ctx.fillText(l, -(canvas.width / 2) + 10, -(canvas.height / 2) + 20 + (i * 20));
        })
    }
}

render();

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.translate(canvas.width / 2, canvas.height / 2);
}