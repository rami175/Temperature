//DB information
let userDB = "Rami";
let passDB = "Test1234";

function login() {
	//get the user name and password from prompts
	let uName = prompt("Please enter user name");
	let passWord = prompt("Please enter pass word");
	console.log(uName, passWord);
	let x = document.getElementById("status");
	//compare the passDB with the variable
	if (uName == userDB && passWord == passDB) {
		x.innerHTML = "<p>Welcome to the system</p>";
	} else {
		// display Welcome on the HTML or invalid credential
		x.innerHTML = "<p class='alert-error'>Invalid cresdential<p/>";
		console.log("Incorrect");
	}
}
