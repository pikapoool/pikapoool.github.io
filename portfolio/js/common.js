var windowHeight = document.documentElement.clientHeight;
var windowWidth = window.innerWidth;

$(function() {

	///fancybox
	$(".fancybox").fancybox({
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});


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
});


