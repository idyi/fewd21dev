//
//    WEEK 06 FEWD-DC-21 ASSIGNMENT
//    BY DANNY YI 03/12/2016 JAVASCRIPT REVISION 00
//


//wait for the DOM elements to load before executing
$(document).ready(function(){

	// Setup the array with new values or city names
	var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

	// This allows the array list to increase when new values or city names are added.
	for(i=0;i<cities.length;i++) {

	// Assign the ID #city-type to have a specific function 
	// of appending additional city names 
	$('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
	}
 	console.log('New cities locked and loaded! Now choose wisely.');
	// Assign the <form> tag to have a specfic function of 
	// when the ID #city-type changes then perform one of these functions below.
 	$('form').on('change', '#city-type',function(){
 	// Declaring a new variable "city" when the user selects one of the new values in the ID #city-type
    var city = $('#city-type').val();
    // If the selected new variable city equals to the new value "NYC" then...  
    if(city == 'NYC') {
    	//add the background image by adding the "class" and "class ID" on the <body> tag.
      $('body').attr('class','nyc');
      console.log('NYC pizza yummy');
    }
    // Or if the selected new variable city equals to the new value "SF" then...  
    else if (city == 'SF') {
      //add the background image by adding the "class" and "class ID" on the <body> tag.
      $('body').attr('class','sf');
      console.log('SF clams yummy');
    }
    // Or if the selected new variable city equals to the new value "LA" then...  
    else if (city == 'LA') {
      //add the background image by adding the "class" and "class ID" on the <body> tag.
      $('body').attr('class','la');
      console.log('LA chicken & waffles yummy');
    }
    // Or if the selected new variable city equals to the new value "ATX" then...  
    else if (city == 'ATX') {
      //add the background image by adding the "class" and "class ID" on the <body> tag.
      $('body').attr('class','austin');
      console.log('Austin BBQ yummy');
    }
    // Or if the selected new variable city equals to the new value "SYD" then...  
    else if (city == 'SYD') {
      //add the background image by adding the "class" and "class ID" on the <body> tag.
      $('body').attr('class','sydney');
      console.log('Sydney seafood yummy');
    }

	});
});