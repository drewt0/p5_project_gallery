let pos;
let incx, incy;

function setup() {
    createCanvas(innerWidth, innerHeight);

    incx = 1;
    incy = 2;

    pos = createVector(width/2, height/2);
    background(0);
}

function draw() {
    // background(0);

    stroke(255);
    strokeWeight(2);
    point(pos.x, pos.y);

    pos.x += map(noise(incx), 0, 1, -1, 1);
    pos.y += map(noise(incy), 0, 1, -1, 1);

    incx += 0.01;
    incy += 0.01;
}