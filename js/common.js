$(function() {


	function heightDetect() {
		$("header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});



$('.services').parallax({imageSrc: 'img/services_bg.jpg'});
$('header').parallax({imageSrc: 'img/header_bg_1920.jpg'});

$(".scroll").mPageScroll2id();


$('.scroll').addClass('animated bounce');
$(".work_item img, .work_item h6, .work_item p").animated("flipInX", "flipOutX");


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});


