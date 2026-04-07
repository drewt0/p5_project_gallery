function setup() {
    createCanvas(innerWidth, innerHeight);
}

function draw() {
    background(0);
    fill(255);
    noStroke();

    for (let i = 30; i < width; i+=1) {
        let h = map(noise(i/100), 0, 1, 0, height)
        ellipse(i, h, 1);
    }
}