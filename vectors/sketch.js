let mouse;
let pos;
let fireworks = [];

function setup() {
    createCanvas(innerWidth, innerHeight);
}

function draw() {
    background(0);

    for (let f of fireworks) {
        f.show();
    }

    mouse = createVector(mouseX, mouseY)
}

function mouseClicked() {
    fireworks.push(new Firework(mouse.x, mouse.y));
}

class Firework {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.particles = [];

        for (let i = 0; i < 100; i++) {
            this.particles.push(p5.Vector.random2D());
            this.particles[i].mult(random(30, 90));
        }
    }


    show() {
        stroke(255);
        for (let p of this.particles) {
            line(this.x, this.y, this.x + p.x, this.y + p.y);
        }
    }
}