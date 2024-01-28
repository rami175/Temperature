function convert() {
	let cel = prompt("Please entrer temperature in Celsius");
	let x = parseInt(cel);
	if (isNaN(x)) {
		console.log(cel);
		document.getElementById("emojiText").innerHTML = "Invelid number";
		document.getElementById("emojiPic").innerHTML = "&#128683;";
	} else {
		let feh = (cel * 9) / 5 + 32;
		console.log(feh);

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
