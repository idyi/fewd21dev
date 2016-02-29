/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
* Answer the following questions. This practice set gets progressively harder.
* Remember to test each question, before moving on. Once you're achieved the desired outcome, comment out the code and 
* move on to the next question.
 */


//SECTION 1: REPLACE THE SECTIONS THAT SAY REPLACE ME WITH THE CORRECT CODE.
/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the color to blue.
 * We've started you off, replace the sec
 */
// $(document).ready(function() {   
// 	$("#button1").click(question1);

// 	function question1(){
// 		$("p").css("color", "blue");
// 		console.log('Success!');   //SUCCESS
// 	}
// });


/**
 * Question 2:
 * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
 */

	// function question2(){
	// 	$("h2").html("Danny");
	// }

	// $("#button1").click(question2);  //SUCCESS

/**


 * Question 3:
 * When button 1 is clicked, select the ordered list item that has the class "falseFact". 
 * Using jQuery change the content to read "True Fact".
 */

	// function question3(){
	// 	$(".falseFact").html("True Fact");
	// }

	// $("#button1").click(question3);   //SUCCESS


//SECTION 2: Now you are on your own. Write the necessary code to accomplish the following.
// *
//  * Question 4: 
//  * When button 2 is clicked, change the background color of the whole page to "pink"
 
// $(document).ready(function() {   
// 	$("#button2").click(question4);

// 	function question4(){
// 		$("body").css("background", "pink");
// 		console.log('Success!');   
// 	}
// });		//SUCCESS



/**
 * Question 5:
 * When button 2 is clicked, change the color of all h2's to "green"
 */

 // function question5(){
 // 	$('h2').css("color", "green");
 // }

 // $('#button2').click(question5);  //SUCCESS


/**
 * Question 6:
 * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */

 // function question6(){
 // 	$('blockquote').html('<span>no quote</span>');
 // }

 // $('#button2').click(question6);  //SUCCESS


//SECTION 3: This section is more difficult. Try your hand at the next 3 questions.

/**
 * Question 7:
 * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */

// function q7(){
// 	$('h1').html('jQuery Ninja');
// }

// $('#button3').click(q7);  //SUCCESS


/**
 * Question 8:
 * Have the following code execute when button 3 is clicked. Write a JavaScript comment with a description of what happened. 
 * 
 */

// $(document).ready(function() {
// 	$('#button3').click(q8);

// function q8(){
// 	$('.city').attr('src', 'http://lorempixel.com/g/500/400/food');
// 	console.log('TADA FOOD!');
// }
// });  //SUCCESS

/**
 * Question 9:
 * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 * Bonus: Try to do this with only one jQuery call. $("selector").css({attribute: "value", attribute: "value"});
 */

function q9(){
	$('p').css('color', 'blue');
}

$('#button3').click()







