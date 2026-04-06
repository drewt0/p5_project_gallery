let bubbles = [];

function setup() {
    createCanvas(innerWidth-18, innerHeight-20);
    bubbles[0] = new Bubble(width/2, height/2, 300);
}

function draw() {
    background(255);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].show();
        bubbles[i].move();
        
    }
}

function mousePressed() {
    bubbles.push(new Bubble(100, 400, 50));
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
        stroke(51, 67, 202);
        strokeWeight(2);
        fill(51, 183, 202);
        ellipse(this.x, this.y, this.r);
    }
}