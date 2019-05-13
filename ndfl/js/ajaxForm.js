$(document).ready(function () {

	function ajaxRequest (event) {	
		
		event.preventDefault();

		$.ajax({
			type: $(this).attr('method'),
			url: $(this).attr('action'),
			data: $(this).serialize(),
			success: function (result) {

				$('#modal2').addClass('modal_active');
				$('#name-success2').html(result);
				$("input[type=text], input[type=tel]").val("");
			}
		});
	}



	$('.forms').submit(ajaxRequest);				//top form

	$('.forms_vertical').submit(ajaxRequest);		//bottom form

	$('.modal-wrapper__form').submit(function (event) {	//modal form
		
		event.preventDefault();

		$.ajax({
			type: $(this).attr('method'),
			url: $(this).attr('action'),
			data: $(this).serialize(),
			success: function (result) {

				$('#name-success').html(result);
				$('#front').css('transform', 'rotateY(180deg)');
				$('#back').css('transform', 'rotateY(360deg)');
				$("input[type=text], input[type=tel]").val("");

			}
		});
	});

	
});
