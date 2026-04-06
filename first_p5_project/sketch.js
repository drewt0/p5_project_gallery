let bubbles = [];

function setup() {
    createCanvas(400, 400);
    bubbles[0] = new Bubble(50, 50, 20);
}

function draw() {
    background(0);
    bubbles[0].move();
    bubbles[0].show();
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = 1;
        this.dy = 1;
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x > width - this.r/2) {
            this.dx = -this.dx;
        } else if (this.x < 0 + this.r/2) {
            this.dx = -this.dx;
        }
        if (this.y > height - this.r/2) {
            this.dy = -this.dy;
        } else if (this.y < 0 + this.r/2) {
            this.dy = -this.dy;
        }
    }

    show() {
        noStroke();
        fill(0, 255, 255);
        ellipse(this.x, this.y, this.r);
    }
}