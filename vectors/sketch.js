let mouse;
let pos;
let fireworks = [];

function setup() {
    createCanvas(innerWidth, innerHeight);
}

function draw() {
    background(0);

    for (let i = fireworks.length - 1; i >= 0; i--) {
        let f = fireworks[i];

        if (!f) continue;
        f.show();

        if (f.particles.length == 0) {
            fireworks.splice(i, 1);
        }
    }

    mouse = createVector(mouseX, mouseY);
}

function mouseClicked() {
    fireworks.push(new Firework(mouseX, mouseY));
}

class Firework {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.particles = [];

        for (let i = 0; i < 1000; i++) {
            this.particles.push({
                pos: createVector(x, y),
                vel: p5.Vector.random2D().mult(random(3, 30)),
                acc: createVector(0, 0),
                alpha: random(200, 300)
            });
        }
    }

    show() {
        let mouseVec = createVector(mouseX, mouseY);

        for (let i = this.particles.length - 1; i >= 0; i--) {
            let p = this.particles[i];

            let steer = p5.Vector.sub(mouseVec, p.pos);
            steer.setMag(0.5);
            p.acc.add(steer);

            p.vel.add(p.acc);
            p.vel.limit(60);
            p.pos.add(p.vel);
            p.acc.mult(0);

            p.alpha -= 0.5;

            if (p.alpha < 1) {
                this.particles.splice(i, 1);
                continue;
            }

            stroke(255, 255, 255, p.alpha);
            strokeWeight(2);
            point(p.pos.x, p.pos.y);
        }
    }
}