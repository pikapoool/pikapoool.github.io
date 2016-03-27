$(function() {


	//add carousel
	var owl = $("#owl-demo");
	owl.owlCarousel({
			items : 4, //10 items above 1000px browser width
			itemsDesktop : [1000,3], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,2], // betweem 900px and 601px
			itemsTablet: [600,1], //2 items between 600 and 0
			itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		});
	$(".slider").owlCarousel({
		autoPlay: 10000,
		navigation: true,
		pagination: false,
		itemsDesktop: [2000,1],
		itemsDesktopSmall: [900,1],
		itemsTablet: [600,1],
		navigationText: [
			"<span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>",
			"<span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>"
		],
	});

	//rotate team box
	$(".experts").waypoint(function(){
		$(".experts .box").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("box-off").addClass("box-on");
			}, 200*index);
		});
	}, {
		offset : "25%"
	});

	//animation
	$(".navbar-brand").animated("fadeInDown");
	$(".maintitle h1").animated("fadeInLeft");
	$(".maintitle h6").animated("fadeInRight");
	$(".smart-creative h2, .experts h2, .elegant h2, .tweets h2").animated("fadeInDown");
	$(".smart-creative h6, .experts h6, .elegant h6, .tweets h6").animated("fadeInUp");
	$(".item-1").animated("bounceInLeft");
	$(".item-2").animated("fadeInUp");
	$(".item-3").animated("bounceInRight");

	$(".elegant").waypoint(function(){
		$(".price-top .price-box").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("price-box-off").addClass("price-box-on");
			}, 200*index);
		});
		$(".price-bottom .price-box").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("price-bottom-off").addClass("price-box-on");
			}, 200*index);
		});
	});

	// Custom Navigation Events
	$(".next").click(function(){
		owl.trigger('owl.next');
	})
	$(".prev").click(function(){
		owl.trigger('owl.prev');
	})


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

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

$(window).load(function() {

});