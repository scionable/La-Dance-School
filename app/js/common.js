
$(document).ready(function (){
	var mySwiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		speed: 300,
		autoplay:5000,
		auto:4000,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	});

    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
    });
});
