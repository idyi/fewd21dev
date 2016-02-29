var lights = '1';  //this defines the variable or action

function switchLights() {
	if (lights == '1') { //this activiates the black BG
		lights = '0';
		$('body').addClass('dark');
	} else {  //this removes the black BG
		lights = '1';
		$('body').removeClass('dark');
	}
}

$(document).ready(function() {  //checker
	$('#light_switch').click(switchLights);

});
