ctx.fillStyle = '#0005';
ctx.strokeStyle = '#fff';

ctx.beginPath();
ctx.moveTo((transform.x - camX) * scale, (transform.y - camY) * scale);
ctx.lineTo(
    (camX) * scale + ((camX) * scale - (transform.x - camX) * scale) * -140,
    (camY) * scale + ((camY) * scale - (transform.y - camY) * scale) * -140
);
ctx.lineTo(
    (camX) * scale + ((camX) * scale - ((transform.x - camX) * scale + (transform.width * scale))) * -140,
    (camY) * scale + ((camY) * scale - (transform.y - camY) * scale) * -140
);
ctx.lineTo((transform.x - camX) * scale + (transform.width * scale), (transform.y - camY) * scale);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineTo((transform.x - camX) * scale + (transform.width * scale), (transform.y - camY) * scale);
ctx.lineTo(
    (camX) * scale + ((camX) * scale - ((transform.x - camX) * scale + (transform.width * scale))) * -140,
    (camY) * scale + ((camY) * scale - (transform.y - camY) * scale) * -140
);
ctx.lineTo(
    (camX) * scale + ((camX) * scale - ((transform.x - camX) * scale + (transform.width * scale))) * -140,
    (camY) * scale + ((camY) * scale - ((transform.y - camY) * scale + (transform.height * scale))) * -140
);
ctx.lineTo((transform.x - camX) * scale + (transform.width * scale), (transform.y - camY) * scale + (transform.height * scale));
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineTo((transform.x - camX) * scale + (transform.width * scale), (transform.y - camY) * scale + (transform.height * scale));
ctx.lineTo(
    (camX) * scale + ((camX) * scale - ((transform.x - camX) * scale + (transform.width * scale))) * -140,
    (camY) * scale + ((camY) * scale - ((transform.y - camY) * scale + (transform.height * scale))) * -140
);
ctx.lineTo(
    (camX) * scale + ((camX) * scale - (transform.x - camX) * scale) * -140,
    (camY) * scale + ((camY) * scale - ((transform.y - camY) * scale + (transform.height * scale))) * -140
);
ctx.lineTo((transform.x - camX) * scale, (transform.y - camY) * scale + (transform.height * scale));
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineTo((transform.x - camX) * scale, (transform.y - camY) * scale + (transform.height * scale));
ctx.lineTo(
    (camX) * scale + ((camX) * scale - (transform.x - camX) * scale) * -140,
    (camY) * scale + ((camY) * scale - ((transform.y - camY) * scale + (transform.height * scale))) * -140
);
ctx.lineTo(
    (camX) * scale + ((camX) * scale - (transform.x - camX) * scale) * -140,
    (camY) * scale + ((camY) * scale - (transform.y - camY) * scale) * -140
);
ctx.lineTo((transform.x - camX) * scale, (transform.y - camY) * scale);
ctx.fill();
ctx.closePath();