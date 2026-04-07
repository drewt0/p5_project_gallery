let bubbles = [];

function setup() {
    createCanvas(innerWidth-18, innerHeight-20);
    bubbles[0] = new Bubble(width/2, height/2, 2, 2, 250);
}

function draw() {
    background(255);

    for (let bubble of bubbles) {
        bubble.move();

        if (bubble.bubbleHover()) {
            bubble.a = 100;
        } else {
            bubble.a = 200;
        }

        for (let other of bubbles) {
            bubble.bubbleCollision(other);
        }

        bubble.show();
    }
}

function mouseClicked() {
    for (let i = bubbles.length-1; i >= 0; i--) {
        if (bubbles[i].bubbleHover()) {
            bubbles[i].dx = random(1, 5);
            bubbles[i].dy = random(1,5);
            bubbles[i].r = bubbles[i].r/1.6
            bubbles.push(new Bubble(bubbles[i].x + bubbles[i].r/2*bubbles[i].dxMult, bubbles[i].y + bubbles[i].r/2*bubbles[i].dyMult, bubbles[i].dx * -bubbles[i].dxMult, bubbles[i].dy * -bubbles[i].dyMult, bubbles[i].r));
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
        this.a = 200;
        this.dxMult = 1;
        this.dyMult = 1;
    }

    bubbleHover() {
        let d = dist(mouseX, mouseY, this.x, this.y)
        if (d < this.r/2) {
            return true;
        } else {
            return false;
        }
    }

    bubbleCollision(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        if (d < (this.r + other.r)/2) {
            this.dxMult *= -1;
            this.dyMult *= -1;
            other.dxMult *= -1;
            other.dyMult *= -1;

            let angle = atan2(other.y - this.y, other.x - this.x);
            this.x -= cos(angle) * 2;
            this.y -= sin(angle) * 2;
            other.x += cos(angle) * 2;
            other.y += sin(angle) * 2;
        }
    }

    move() {
        this.x += this.dx*this.dxMult;
        this.y += this.dy*this.dyMult;

        if (this.x > width - this.r/2) {
            this.dxMult = -1;
            this.x = width - this.r/2;
        } else if (this.x < 0 + this.r/2) {
            this.dxMult = 1;
            this.x = this.r/2
        }
        if (this.y > height - this.r/2) {
            this.dyMult = -1;
            this.y = height - this.r/2;
        } else if (this.y < 0 + this.r/2) {
            this.dyMult = 1;
            this.y = this.r/2
        }
            
    }

    show() {
        stroke(51, 67, 202);
        strokeWeight(2);
        fill(51, 183, 202, this.a);
        ellipse(this.x, this.y, this.r);
    }
}