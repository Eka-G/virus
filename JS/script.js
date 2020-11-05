$(document).ready(function() {
	$(".nav__menu--header>.nav__item").click(function() {
		$(this).addClass("nav__item--active");
		$(this).siblings("li").removeClass("nav__item--active");
	});

	$(".contagion__item-wrapper").click( function() {
		$(this).addClass("contagion__item-wrapper--active");
		$(this).siblings("div").removeClass("contagion__item-wrapper--active");
	});

	$("[data-slider]").slick({
 		infinite: false,
 		fade: false,
 		slidesToShow: 1,
  		slidesToScroll: 1
	});

	$(".slick-prev").addClass("slick-arrow--unavailable");

	$(".slick-arrow").click(function() {
		$(this).siblings().removeClass("slick-arrow--unavailable");
		$(this).addClass("slick-arrow--unavailable");
	});

});
