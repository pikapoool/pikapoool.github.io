$(document).ready(function() {

	//open toggle menu
	$(".toggle-mnu").click(function(){
		$(this).toggleClass("on");
		$(".top-mnu").slideToggle();
	});

	//menu scroll
	$(".top-mnu ul a").mPageScroll2id();
	$(".arrow-button").mPageScroll2id();


	//button scroll in header
	$(".header-bottom .arrow-button").click(function(){
		$("html, body").animate({ scrollTop: $(".main-head").height() }, "slow");
		return false;
	});


	//mix portfolio
	$("#portfolio-grid").mixItUp();

	//change category for portfolio
	$(".works li").click(function(){
		$(".works li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup_content").magnificPopup();

	//add id for photos in portfolio
	$(".portfolio-item").each(function(i){
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt-descr").attr("id", "work_" + i);
	});

	//animate number count
	$(".portfolio").waypoint(function(){
		$(".count").each(function(){
			$(this).prop("Counter",0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: "swing",
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});
		this.destroy();
	});

	//rotate team cards
	$(".team").waypoint(function(){
		$(".cards .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 200*index);
		});
	});


	//change team members
	$(".card").click(function(){
		$(this).toggleClass("card-active").siblings().removeClass("card-active");
	//	$(".team-descr").addClass(".team-descr-on");
		//$(".card").each(function(i){
		//	if($(this).is(".card-active")) {
		//		$(".team-descr").removeClass("team-descr-on fadeInDown");
		//	} else {
		//		$(".team-descr").addClass("team-descr-on");
		//	}
		//});
});

	$(".close-button").click(function(){
		$(".team-descr").removeClass("team-descr-on");
		$(".card").removeClass("card-active");
	});

	//skills numbers animation
	$(".skills").waypoint(function(){
		$(function() {
			$('.chart').easyPieChart({
				easing: 'ease',
				animate: 3000,
				barColor: '#FFE600',
				trackColor: '#fff',
				scaleColor: false,
				lineWidth: 6,
				trackWidth: 6,
				lineCap: 'butt',
				size: 140,
				onStep: function(from, to, percent) {
					this.el.children[0].innerHTML = Math.round(percent);
				}
			});
		});
		}, {
			offset : "25%"
	});

	//add owl-carousel
	$("#owl-demo").owlCarousel({
		navigation: true,
		navigationText: [
		"<span class='btn-box'></span>",
		"<span class='btn-box'></span>"
		],
		pagination: false,
	});
	$(".slider").owlCarousel({
		autoPlay: 10000,
		navigation: false,
		itemsDesktop : [2000,1],
		itemsDesktopSmall : [900,1],
		itemsTablet: [600,1],
	});

	//animation
	$(".header-middle h1").animated("fadeInUp");
	$(".buttons").animated("fadeIn");
	$(".maintitle span, .maintitle h2, .maintitle p, .title h2, .title p").animated("fadeInRight");
	$(".content ul").animated("fadeInUp");
	$(".services").waypoint(function() {
		$(".ser-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("ser-on");
			}, 200*index);
		});
	});
	$(".ser-item-wrap .ser-item").waypoint(function() {
		$(".how-we-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("how-on");
			}, 200*index);
		});
	});
	$(".portfolio").waypoint(function() {
		$(".numbers-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("numb-on");
			}, 200*index);
		});
	});
	$(".about").waypoint(function() {
		$(".about-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("about-on");
			}, 200*index);
		});
	});
	$(".skills").waypoint(function(){
		$(".skills-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("skills-on");
			}, 300*index);
		});
	}, {
		offset : "25%"
	});
	$(".contacts").waypoint(function() {
		$(".contacts-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("cont-on");
			}, 200*index);
		});
	});
	$(".slider").animated("rollIn");
	$(".mainform").animated("zoomInUp");


	//button scroll in footer
	$(".arrow-top").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});


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

	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

});

$(window).load(function() {

});