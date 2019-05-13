window.onload = function () {

	var modal       = document.getElementById('modal');//модальное с формой
	var modal2      = document.getElementById('modal2');//модальное Успех
	var btns        = document.querySelectorAll('a.buttons');//все кнопки кроме форм
	//var btnForms    = document.querySelectorAll('button.buttons');//все кнопки в формах
	var mobileClose = document.querySelectorAll('.modal-wrapper_close-mobile');//мобильная кнопка Х
	var btnSucces   = document.querySelectorAll('.buttons_succes');//модальное Успех кнопка
	var front       = document.getElementById('front');
	var back       = document.getElementById('back');

	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function () {

			modal.classList.add('modal_active');

		})
	}

	for (var i = 0; i < mobileClose.length; i++) {
		mobileClose[i].addEventListener('click', function () {

			modal.classList.remove('modal_active');
			setTimeout(function () {
				front.style = 'transform: rotateY(0deg)';
				back.style = 'transform: rotateY(180deg)';
			}, 1000);
			modal2.classList.remove('modal_active');

		})
	}

	for (var i = 0; i < btnSucces.length; i++) {
		btnSucces[i].addEventListener('click', function () {

			modal.classList.remove('modal_active');
			setTimeout(function () {
				front.style = 'transform: rotateY(0deg)';
				back.style = 'transform: rotateY(180deg)';
			}, 1000);
			modal2.classList.remove('modal_active');

		})
	}

	window.addEventListener('click', function (e) {

		if (e.target == modal || e.target == modal2 || e.target == mobileClose) {
			modal.classList.remove("modal_active");
			setTimeout(function () {
				front.style = 'transform: rotateY(0deg)';
				back.style = 'transform: rotateY(180deg)';
			}, 1000);
			modal2.classList.remove("modal_active");
		}

	});
	

}
	
	





	