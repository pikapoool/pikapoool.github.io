var windowHeight = document.documentElement.clientHeight;
var windowWidth = window.innerWidth;

$(function() {
	//fixed menu

	var headerTopHeight = $(".header").outerHeight();
	$(window).scroll(function() {
		if ($(window).scrollTop() > 180) {
			$(".headerBottom").addClass("fixed");
		}
		else{
			$(".headerBottom").removeClass("fixed");
		}
	});

	//pjax
	$(document).pjax('.headerMenu a', '#pjax-container');

	//parallax
	$.stellar();

	//toggle language
	$(".headerTop_lang-toggle").click(function(){
		$(this).toggleClass("active").next().slideToggle();
	});

	//firstScreen sliders
	$(".firstScreen_topSlider").owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items : 1,
		loop : true,
		nav : true,
		navText : ['<i class="my icons-font-j"></i>', '<i class="my icons-font-k"></i>'],
		dots : false,
		mouseDrag : false,
	});
	$(".firstScreen_promoSlider_items").owlCarousel({
		autoplay: true,
			autoplayTimeout: 4000, //Set AutoPlay to 3 seconds
			autoplayHoverPause: true,
			items : 1,
			loop : true,
			nav : false,
			dots : true,
			mouseDrag : false,
		});

	//homeNews slider
	$(".homeNewsSlider").owlCarousel({
		items : 1,
		smartSpeed: 1600,
		loop : true,
		nav : true,
		navText : ['<i class="my icons-font-j"></i>', '<i class="my icons-font-k"></i>'],
		dots : false,
		mouseDrag : false,
	});

	//homeLecture slider
	$(".homeLectureSlider").owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items : 1,
		smartSpeed: 1600,
		loop : true,
		nav : true,
		navText : ['<i class="my icons-font-j"></i>', '<i class="my icons-font-k"></i>'],
		dots : false,
		mouseDrag : false,
	});

	//scroll region
	$('.scroll').jScrollPane({
		showArrows: false,
		horizontalGutter: 10,
		einitialiseOnImageLoad: true,
		autoReinitialise :true
	});

	//tabs
	$(".lectureMoreWrap_item_right-tabItem").not(":first").hide();
	$(".lectureMoreWrap_item_right_inner .lectureMoreWrap_item_right-tab").click(function(){
		$(".lectureMoreWrap_item_right_inner .lectureMoreWrap_item_right-tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".lectureMoreWrap_item_right-tabItem").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");


	//animation
	$(".lectureWrap_item:nth-child(2n+1) .lectureWrap_item-img").animated("fadeInRight");
	$(".lectureWrap_item:nth-child(2n) .lectureWrap_item-img").animated("fadeInLeft");
	$(".lectureWrap_item:nth-child(2n+1) .lectureWrap_item-card-title").animated("fadeInLeft");
	$(".lectureWrap_item:nth-child(2n) .lectureWrap_item-card-title").animated("fadeInRight");
	$(".lectureWrap_item .lectureWrap_item-card-price").animated("fadeInUp");
	$(".lectureWrap_item .lectureWrap_item-card-btn").animated("zoomInLeft");
	$(".lectureWrap_item .lectureWrap_item-card-descr").animated("fadeInDown");



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	calcReviews();
});



setBodyHeight = function(){
	$("body.main").css({"min-height":windowHeight});
}

calcReviews = function(){
	var result;
	$(".lectureMoreWrap_item_right-review").each(function(i) {
		result = i;
	});
	$(".lectureMoreWrap_item_right-tab-number").text(result);
}

$(function() {
	setBodyHeight();
});
$(window).load(function() {
	setBodyHeight();
});
$(window).resize(function(){
	setBodyHeight();
});
