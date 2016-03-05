//
//    WEEK 05 FEWD-DC-21 ASSIGNMENT
//    BY DANNY YI 03/05/2016 JAVASCRIPT REVISION 00
//


//wait for the DOM elements to load before executing
$(document).ready(function(){
    // Create a function that runs whenever the submit button is clicked
        $("#submit-btn").click(function(){
        
        // 1 // Prevent the submit button from refreshing the page
        event.preventDefault();

        // 2 // A variable called citypix and use the user's input of the #city-type from the form
        var citypix = $("#city-type").val();
        
        // 3 // Disregards extra spaces
        var citypix = citypix.trim();
        
        // 4 // Disregards capitalization
        var citypix = citypix.toLowerCase();

        // 5 If... // the user inputs "New York" or "New York City" or "NYC," the background changes to nyc.jpg on the body tag of the CSS file
        if(citypix == "new york" || citypix == "new york city" || citypix == "nyc"){
            $('body').css('background','url(./images/nyc.jpg) no-repeat center center fixed'); //this overwrites the background 
        }

        // 5 If... // the user inputs "San Francisco" or "SF" or "Bay Area," the background changes to sf.jpg on the body tag of the CSS file
        if(citypix == "san francisco" || citypix == "sf" || citypix == "bay area"){
            $('body').css('background','url(./images/sf.jpg) no-repeat center center fixed'); //this overwrites the background
        }

        // 5 If... // the user inputs "Los Angeles" or "LA" or "LAX," the background changes to austin.jpg on the body tag of the CSS file
        if(citypix == "los angeles" || citypix == "la" || citypix == "lax"){
            $('body').css('background','url(./images/la.jpg) no-repeat center center fixed'); //this overwrites the background
        }

        // 5 If... // the user inputs "Austin" or "ATX," the background changes to austin.jpg on the body tag of the CSS file
        if(citypix == "austin" || citypix == "atx"){
            $('body').css('background','url(./images/austin.jpg) no-repeat center center fixed'); //this overwrites the background
        }

        // 5 If... // the user inputs "Sydney" or "SYD," the background changes to sydney.jpg on the body tag of the CSS file
        if(citypix == "sydney" || citypix == "syd"){
            $('body').css('background','url(./images/sydney.jpg) no-repeat center center fixed'); //this overwrites the background
        }
});
    // Listen for user interaction on the submit button.

});
