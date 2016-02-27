// targeting the action button 
// A $( document ).ready() block.
$( document ).ready(function() {
  $("#grayButton").click(switchGray);
  $("#whiteButton").click(switchWhite);


// exection of the object change
  function switchGray() {
    $("body").css("background-color", "gray");
    console.log("Gray Confirmed");  //This shows up on the Comand line in Inspector
  }	

  function switchWhite() {
    $("body").css("background-color", "white");
    console.log("White Confirmed");  //This shows up on the Comand line in Inspector
  }	
    // console.log( "ready!" );
});



//CMD+? comments groups or items

// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;

// function switchGray() {
//   document.body.style.backgroundColor = 'gray';
//  document.body.style.color = 'white';
// }

// function switchWhite() {
//   document.body.style.backgroundColor = 'white';
//   document.body.style.color = 'black';
// }


