let x, y;
let xSpeed, ySpeed;
let gravity = 0.6;
let friction = 0.997;
let radius = 25;

function setup() {
	createCanvas(600, 400);
	x = width / 2;
	y = height / 2;
	xSpeed = 5;
	ySpeed = 2;
}

function draw() {
	background(220);

	fill(50, 150, 255);
	noStroke();
	ellipse(x, y, radius * 2);

	ySpeed += gravity;
	x += xSpeed;
	y += ySpeed;

	xSpeed *= friction;

	if (y + radius > height) {
		y = height - radius;
		ySpeed *= -0.8;
		xSpeed *= 0.98;
	}

	if (x + radius > width || x - radius < 0) {
		xSpeed *= -1;
	}

	if (y - radius < 0) {
		ySpeed *= -1;
	}
}