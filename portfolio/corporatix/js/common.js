$(function() {

	$("button.navbar-toggle").click(function(){
		if($(".navbar-default").hasClass("menu")){
			$(".navbar-default").removeClass("menu");
		} else {
			$(".navbar-default").addClass("menu");
		}
	});

	$('.expander').simpleexpand();

	$("header .sec-maintitle").waypoint(function(){
		$(".box").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("box-off").addClass("box-on");
			}, 400*index);
		});
	}, {
		offset : "50%"
	});

	$(".sec-about").waypoint(function(){
		$(".about-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("about-on");
			}, 200*index);
		});
	}, {
		offset : "65%"
	});

	$(".about-us").animated("fadeInRight");
	$("footer .nav, footer .contact").animated("fadeInUp");


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
