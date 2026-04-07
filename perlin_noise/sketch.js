let xOff = 0;
let yOff = 1;

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);
    fill(255);
    noStroke();

    for (let i = 0; i < 10000; i++) {
        let w = map(noise(xOff), 0, 1, 0, width)
        let h = map(noise(yOff), 0, 1, 0, height)
        ellipse(w, h, 1);

        xOff+=0.02;
        yOff+=0.02;
    }
}

function draw() {
    // background(0);
    // fill(255);
    // noStroke();
    // if (xOff < 100) {
    //     let w = map(noise(xOff), 0, 1, 0, width)
    //     let h = map(noise(yOff), 0, 1, 0, height)
    //     ellipse(w, h, 1);

    //     xOff+=0.02;
    //     yOff+=0.02;
    // }

}