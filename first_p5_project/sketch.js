let bubble;

function setup() {
    createCanvas(400, 400);
    bubble = new Bubble();
}

function draw() {
    background(0);
    bubble.move();
    bubble.show();
}

class Bubble {
    constructor() {
        this.x = 200;
        this.y = 100;
        this.size = 40;
    }

    move() {
        this.x++;
        this.y++;
    }

    show() {
        noStroke();
        fill(0, 255, 255);
        ellipse(this.x, this.y, this.size)
    }
}