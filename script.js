const _ = require('lodash');

let array = [1,2,3,4,5,6];

console.log("answer", _.without(array, 5));

var [ color1, color2 ] = document.querySelectorAll(".color");
var text = document.querySelector("h3");
var body = document.querySelector("#gradient");
var btn = document.querySelector("button");

function hexValue() {
	var random = Math.floor(Math.random() * 16777215).toString(16);
	return `#${random}`;
}

function setGradient() {
	styleBackground(color1.value, color2.value);
};

function styleBackground(col1, col2) {
	body.style.background = "linear-gradient(to right, "
		+ col1
		+ ", "
		+ col2 + ")";
	
	text.textContent = body.style.background;
}

function randomGradient() {
	var randomColor1 = hexValue();
	var randomColor2 = hexValue();

	styleBackground(randomColor1, randomColor2);
	color1.value = `${randomColor1}`;
	color2.value = `${randomColor2}`;
}

btn.addEventListener("click", randomGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
window.onload = setGradient;
