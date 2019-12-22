var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		loop: true,
		paginationClickable: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
		},
	});
