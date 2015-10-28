$(document).ready(function(){


	function convertTemp() {

		/*identify the variables*/
		var c = parseInt($('#celsius').val()); //Celsius. Get user input
		var f= (c * 9)/5 + 32;; //converting Celsius to Fahrenheit 
		

		/*provide the actions*/
		if (f <= 32) {

			$('body').css('background-image', 'url("images/winter.jpg")');
			$('#fahreneit').html(f);

		}if else (f > 32 && f <= 60) {

			$('body').css('background-image', 'url("images/fall.jpg")');
			$('#fahreneit').html(f);

		}if else (f > 60 && f <= 75) {

			$('body').css('background-image', 'url("images/spring.jpg")');
			$('#fahreneit').html(f);

		}else {

			$('body').css('background-image', 'url("images/winter.jpg")');
			$('#fahreneit').html(f);
		}
	}

	/*call for actions*/
	$('#convert').click(convertTemp);

});