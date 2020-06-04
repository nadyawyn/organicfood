$(document).ready(function () {

	$('.reviews__slider').slick({
		autoplay: false,
		infinite: true,
		dots: true,
		arrows: false,
		speed: 1800,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: false,
					arrows: false
				}
			}
		]
	});

});  