//
//    WEEK 04 FEWD-DC-21 ASSIGNMENT
//    BY DANNY YI 02/27/2016 JAVASCRIPT REVISION 00
//

// targeting the Class ID of the action button
$( document ).ready(function() {
	$('.readmore').click(morestuff);
	$('.readless').click(lessstuff);
	$('.learnmore').click(aboutmore);

// execution of the object change
function morestuff() {
	$('#show-this-on-click').slideDown();
	$('.readmore').hide();
	$('.readless').show();
	console.log('Ta-da!');
}

function lessstuff() {
	$('#show-this-on-click').slideUp();
	$('.readless').hide();
	$('.readmore').show();
	console.log('Gone!');
}

function aboutmore() {
	$('#learnmoretext').slideDown();
	$('.learnmore').hide();
	console.log('Ta-da! More!');
}

});