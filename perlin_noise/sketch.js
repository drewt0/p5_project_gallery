let inc = 0.01;
let start = 0;

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);
    fill(255);
    noStroke();
}

function draw() {
    background(0);
    stroke(255);
    noFill();

    beginShape();
    let xOff =  start;
    for (let x = 0; x < width; x++) {
        let y = noise(xOff) * height;
        vertex(x, y);

        xOff += inc;
    }

    start += inc;

    endShape();

}