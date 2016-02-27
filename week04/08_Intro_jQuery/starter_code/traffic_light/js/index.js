//Implement the red light using jQuery. Don't forget to add the script tags.

// targeting the action buttonm
$( document ).ready(function() {
	$("#stopButton").click(illuminateRed);
	$("#slowButton").click(illuminateYellow);
	$("#goButton").click(illuminateGreen);


// execution of the object change
function illuminateRed(){
	clearLights();
	$("#stopLight").css("background-color", "red");
	console.log("Red Confirmed");  //This shows up on the Comand line in Inspector
  }

function illuminateYellow(){
	clearLights();
	$("#slowLight").css("background-color", "yellow");
	console.log("Yellow Confirmed");
}

function illuminateGreen(){
	clearLights();
	$("#goLight").css("background-color", "green");
	console.log("Green Confirmed")
}

function clearLights() {
	$("#stopLight", "#slowLight", "#goLight").css("background-color", "black");
	// $("#slowLight").css("background-color", "black");
	// $("#goLight").css("background-color", "black");
}

});
