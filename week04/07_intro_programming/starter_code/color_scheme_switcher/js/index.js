// On click white button set colors white
document.getElementById("grayButton").onclick = switchToGrey
document.getElementById("whiteButton").onclick = switchToWhite
// On click grey button set colors grey


// function to make colors white
function switchToWhite(){
		// change background
		document.body.style.backgroundColor = "white";
		// change text colors
		document.body.style.color = "black";
}

// function to make colors gray
function switchToGrey(){
		// change background
		document.body.style.backgroundColor = "gray";
		// change text colors
		document.body.style.color = "white";
}


	// change background
	// change text colors