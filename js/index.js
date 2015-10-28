$(document).ready(function(){


	function convertTemp() {

		/*identify the variables*/
		var c = parseInt($('#celsius').val()); //Celsius. Get user input
		var f = ""; //or do f = 0;?

		/*provide the actions*/
		if (c <= 32) {

			f = (c * 9)/5 + 32; //converting Celsius to Fahrenheit
			$('body').css('background-image', 'url(images/winter.jpg)');
			$('#fahreneit').css('color', '#000');
			$('#fahreneit').html(f);

		}else if (c > 32 && c <= 40) {

			f = (c * 9)/5 + 32; //converting Celsius to Fahrenheit
			$('body').css('background-image', 'url(images/fall.jpg)');
			$('#fahreneit').css('color', '#000');
			$('#fahreneit').html(f);
		}else if (c > 40 && c <= 50) {

			f = (c * 9)/5 + 32; //converting Celsius to Fahrenheit
			$('body').css('background-image', 'url(images/fall.jpg)');
			$('#fahreneit').css('color', '#000');
			$('#fahreneit').html(f);

		}else {

			f = (c * 9)/5 + 32; //converting Celsius to Fahrenheit
			$('body').css('background-image', 'url(../images/winter.jpg)');
			$('#fahreneit').css('color', '#000');
			$('#fahreneit').html(f);
		}
	}

	/*call for actions*/
	$('#convert').click(convertTemp);

});