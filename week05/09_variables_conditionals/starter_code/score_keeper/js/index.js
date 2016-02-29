//function & execution
var total = 0;

function add5() {
	total = total + 5;
	$('#result').html(total);
	console.log('Here is the Total Plus Five');
}

function add10() {
	total = total + 10;
	$('#result').html(total);
	console.log('Here is the Total Plus Ten');
}

function sub1() {
	total = total - 1;
	$('#result').html(total);
	console.log('Here is the Total Minus One');
}

function zero() {
	total = 0;
	$('#result').html(total);
	console.log('Here is the Total Zero');
}

//checker
$(document).ready(function() {
	$('#add5').click(add5);
	$('#add10').click(add10);
	$('#sub1').click(sub1);
	$('#zero').click(zero)
});