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


	//Modal

	$('.header__hamburger').on('click', function () {
		$('.header__nav').fadeIn('slow');
		$(this).fadeOut('slow');
	});

	$('.header__nav-close').on('click', function () {
		$('.header__nav').fadeOut('slow');
		$('.header__hamburger').fadeIn('slow');
	});



	/*
		$('.button_mini').each(function (i) {
			$(this).on('click', function () {
				$('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text());
				$('.overlay, #order').fadeIn('slow');
			});
		}); */

	//Smooth scroll and pageup

	/* $(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn('slow');
		}
		else {
			$('.pageup').fadeOut('slow');
		}
	});
	
	$("a[href^='#up']").click(function () {
		const _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});
	 */

});  