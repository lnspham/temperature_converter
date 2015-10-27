$(document).ready(function(){


	function convertTemp() {

		var c = $('#celsius').val(); //Celsius. Get user input
		var f= (c * 9)/5 + 32;; //converting Celsius to Fahrenheit 

		$('#fahreneit').html('joy')

		if (f <= 32) {

			$('body').css('background-image', 'url("images/winter.jpg")');

		}if else (f > 32 && f <= 60) {

			$('body').css('background-image', 'url("images/fall.jpg")');

		}if else (f > 60 && f <= 75) {

			$('body').css('background-image', 'url("images/spring.jpg")');

		}else {

			$('body').css('background-image', 'url("images/winter.jpg")');

		}
	}

	$('#convert').click(convertTemp);

});