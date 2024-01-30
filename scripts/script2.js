//functions
let counter = 0;
function increase() {
	if (counter < 5) {
		console.log(counter++);
	} else if (counter == 5) {
		console.log("yes");
	}

	// alert("Hi");
	// document.write("Hi");
}
function decreasCounter() {
	console.log(--counter);
}
function sayHi() {
	let userName = prompt("Enter your name:");

	alert("Hello " + userName);
}
function multiByThree() {
	let num = prompt("Enter the number");
	console.log("The number is" + num);
	let answ = num * 3;
	console.log("The answer is:" + answ);
	document.getElementById("results").innerHTML = answ;
}

function addNumber() {
	let num1 = Number(prompt("Enter the first number"));
	console.log("The first number is" + num1);
	let num2 = Number(prompt("Enter the second number"));
	console.log("The second number is" + num2);
	let answer = num1 + num2;
	console.log("The answer is:" + answer);
	document.getElementById("results").innerHTML = answer;
}
