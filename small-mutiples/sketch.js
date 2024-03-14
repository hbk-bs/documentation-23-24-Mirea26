// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
// <reference path="./node_modules/@types/p5/global.d.ts" />
// <reference path="./node_modules/@types/p5/literals.d.ts" />
// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.
//@ts-nocheck
/**
* Well done. This is the what small multiples could look like.
* This set of graphs could be data driven.
* Nothing to add. Here 💯
*/

function setup() {
	// setup runs once
	const canvas = createCanvas(400, 400);
	canvas.parent("sketch");
	background(200);

	let grafikX = 56;
	let grafikY = 4;

	for (let x = 30; x < width; x += 100) {
		for (let y = 30; y < height; y += 100) {
			fill(0);
			rect(x, y, random(50), 10);
			line(x - grafikY, y, x - grafikY, y + grafikX);
			line(x - grafikY, y + grafikX, x + grafikX, y + grafikX);

			push();
			translate(0, 20);
			rect(x, y, random(50), 10);
			pop();

			push();
			translate(0, 40);
			rect(x, y, random(50), 10);
			pop();
		}
	}
}

function draw() {
	// draw runs all the time
}

function keyPressed() {
	if (key === "s") save("small-multiples-mcernota.png");
}