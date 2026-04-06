let bubbles = [];

function setup() {
    createCanvas(innerWidth-18, innerHeight-20);
    bubbles[0] = new Bubble(width/2, height/2, 2, 2, 250);
}

function draw() {
    background(255);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].show();
        bubbles[i].move();
    }
}

function mouseClicked() {
    for (let i = bubbles.length-1; i >= 0; i--) {
        let d = dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y)
        if (d < bubbles[i].r) {
            bubbles[i].dx = random(1, 5);
            bubbles[i].dy = random(1,5);
            bubbles[i].r = bubbles[i].r/1.6
            bubbles.push(new Bubble(bubbles[i].x, bubbles[i].y, -bubbles[i].dx, -bubbles[i].dy, bubbles[i].r));
            
            break;
        }
    }
}

class Bubble {
    constructor(x, y, dx, dy, r) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
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