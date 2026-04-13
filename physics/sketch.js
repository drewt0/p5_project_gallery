let x, y;
let xSpeed, ySpeed;
let gravity = 0.6;
let friction = 0.997;
let radius = 25;
let isDragging = false;

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = width / 2;
	y = height / 2;
	xSpeed = 5;
	ySpeed = 2;
}

function draw() {
	background(220);

	if (isDragging) {
		x = mouseX;
		y = mouseY;
		xSpeed = mouseX - pmouseX;
		ySpeed = mouseY - pmouseY;
	} else {
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
			if (x + radius > width) x = width - radius;
			if (x - radius < 0) x = radius;
			xSpeed *= -1;
		}

		if (y - radius < 0) {
			y = radius;
			ySpeed *= -1;
		}
	}

	fill(50, 150, 255);
	noStroke();
	ellipse(x, y, radius * 2);
}

function mousePressed() {
	let d = dist(mouseX, mouseY, x, y);
	if (d < radius) {
		isDragging = true;
		xSpeed = 0;
		ySpeed = 0;
	}
}

function mouseReleased() {
	isDragging = false;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}