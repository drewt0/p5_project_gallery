let pos;
let vel;

function setup() {
    createCanvas(innerWidth, innerHeight);

    pos = createVector(width/2, height/2);
    vel = createVector(1, 1);
    background(0);
}

function draw() {
    background(0);
    noStroke();
    fill(255); 

    ellipse(pos.x, pos.y, 20);

    pos.add(vel);

    vel.x = random(-4, 4);
    vel.y = random(-4, 4);
}