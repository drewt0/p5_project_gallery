let bubbles = [];

function setup() {
    createCanvas(innerWidth-18, innerHeight-20);
    bubbles[0] = new Bubble(width/2, height/2, 2, 2, 1, 1, 250);
}

function draw() {
    background(255);

    for (let i = 0; i < bubbles.length; i++) {
        let b = bubbles[i];
        b.move();

        if (b.bubbleHover()) {
            b.a = 100;
        } else {
            b.a = 200;
        }

        for (let j = i + 1; j < bubbles.length; j++) {
            b.bubbleCollision(bubbles[j]);
        }

        b.show();
    }
}

function mouseClicked() {
    for (let i = bubbles.length-1; i >= 0; i--) {
        let bub = bubbles[i];
        if (bub.bubbleHover()) {
            bub.dx = random(1, 5);
            bub.dy = random(1, 5);
            bub.r /= 1.6
            bub.x += bub.r/1.5*bub.dxMult;
            bub.y += bub.r/1.5*bub.dyMult;
            bubbles.push(new Bubble(bub.x + bub.r/1.5*(-bub.dxMult), bub.y + bub.r/1.5*(-bub.dyMult), bub.dx, bub.dy, -bub.dxMult, -bub.dyMult, bub.r));
        }
    }
}

class Bubble {
    constructor(x, y, dx, dy, dxMult, dyMult, r) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
        this.a = 200;
        this.dxMult = dxMult;
        this.dyMult = dyMult;
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
        let minDist = (this.r + other.r)/2;
        if (d < minDist) {
            this.dxMult *= -1;
            this.dyMult *= -1;
            other.dxMult *= -1;
            other.dyMult *= -1;

            let overlap = minDist - d;
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
            // this.x = width - this.r/2;
        } 
        if (this.x < 0 + this.r/2) {
            this.dxMult = 1;
            // this.x = this.r/2
        }
        if (this.y > height - this.r/2) {
            this.dyMult = -1;
            // this.y = height - this.r/2;
        } 
        if (this.y < 0 + this.r/2) {
            this.dyMult = 1;
            // this.y = this.r/2
        }
            
    }

    show() {
        stroke(51, 67, 202);
        strokeWeight(2);
        fill(51, 183, 202, this.a);
        ellipse(this.x, this.y, this.r);
    }
}