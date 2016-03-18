//
//    WEEK 07 FEWD-DC-21 ASSIGNMENT
//    BY DANNY YI 03/19/2016 JAVASCRIPT REVISION 00
//

$('.burger').on('click', function( event ) {
	event.preventDefault();
	$('.navigation').slideToggle();	
});