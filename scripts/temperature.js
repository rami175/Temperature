function convert2() {
	let temp = parseInt(prompt("Please enter temperature"));
	let tempUnit = prompt("please enter c for Celsius or f for Fahrenheit");
	if (tempUnit == "c" || tempUnit == "C") {
		convertToF(temp);
	} else if (tempUnit == "f" || tempUnit == "F") {
		convertToC(temp);
	} else {
		document.getElementById("weather").innerHTML = "Please enter C or f";
		document.getElementById("emojiText").innerHTML = "Invelid input";
		document.getElementById("emojiPic").innerHTML = "&#128683;";
	}
}

function convertToF(cel) {
	//let cel = prompt("Please entrer temperature in Celsius");
	let x = parseInt(cel);
	if (isNaN(x)) {
		document.getElementById("weather").innerHTML = "Wrong";
		document.getElementById("emojiText").innerHTML = "Invelid input";
		document.getElementById("emojiPic").innerHTML = "&#128683;";
	} else {
		let feh = (cel * 9) / 5 + 32;

		if (feh <= 50) {
			document.getElementById("weather").innerHTML = "Cold";
			document.getElementById("emojiPic").innerHTML = "&#9924;";
		} else if (feh <= 86) {
			document.getElementById("weather").innerHTML = "Nice";
			document.getElementById("emojiPic").innerHTML = "&#127748;";
		} else {
			document.getElementById("weather").innerHTML = "Hot";
			document.getElementById("emojiPic").innerHTML = "&#127749;";
		}

		document.getElementById(
			"emojiText"
		).innerHTML = `The conversion of Celsius ${cel}<span>&#176;</span> to Fehrenheit is ${feh}<span>&#176;</span>`;
	}
}

function convertToC(feh) {
	//let cel = prompt("Please entrer temperature in Celsius");
	let x = parseInt(feh);
	if (isNaN(x)) {
		document.getElementById("weather").innerHTML = "Wrong";
		document.getElementById("emojiText").innerHTML = "Invelid input";
		document.getElementById("emojiPic").innerHTML = "&#128683;";
	} else {
		let cel1 = ((feh - 32) * 5) / 9;
		let cel = Math.round(cel1);
		if (cel <= 10) {
			document.getElementById("weather").innerHTML = "Cold";
			document.getElementById("emojiPic").innerHTML = "&#9924;";
		} else if (cel <= 30) {
			document.getElementById("weather").innerHTML = "Nice";
			document.getElementById("emojiPic").innerHTML = "&#127748;";
		} else {
			document.getElementById("weather").innerHTML = "Hot";
			document.getElementById("emojiPic").innerHTML = "&#127749;";
		}

		document.getElementById(
			"emojiText"
		).innerHTML = `The conversion of Fehrenheit  ${feh}<span>&#176;</span> to Celsius is ${cel}<span>&#176;</span>`;
	}
}
