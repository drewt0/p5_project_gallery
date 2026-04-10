let mouse;
let pos;
let fireworks = [];

function setup() {
    createCanvas(innerWidth, innerHeight);
}

function draw() {
    background(0);

    for (let i = fireworks.length; i >= 0; i--) {
        let f = fireworks[i];

        if (!f) continue;
        f.show();

        if (f.particles.length == 0) {
            fireworks.splice(i, 1);
        }
    }

    mouse = createVector(mouseX, mouseY)
}

function mouseClicked() {
    fireworks.push(new Firework(mouseX, mouseY));
}

class Firework {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.particles = [];
        this.alpha = [];
        this.timer = 0;

        for (let i = 0; i < 100; i++) {
            this.particles.push(p5.Vector.random2D());
            this.particles[i].mult(random(30, 90));

            this.alpha.push(random(90, 200));
        }
    }


    show() {
        for (let i = this.particles.length; i >= 0; i--) {
            let p = this.particles[i];
            let a = this.alpha[i];

            if (!p) continue;

            this.alpha[i] -= 2;
            if (a < 1) {
                this.particles.splice(i, 1);
                this.alpha.splice(i, 1);
                continue;
            }

            stroke(255, 255, 255, a);
            line(this.x, this.y, this.x + p.x, this.y + p.y);
            p.mult(1.02);
        }
    }
}