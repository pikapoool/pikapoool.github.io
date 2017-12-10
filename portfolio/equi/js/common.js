$(function() {

	//show toggle menu
	$(".sandwich, .menu_item").click(function() {
		$(".sandwich").toggleClass("active");
		$(".small").slideToggle();
	});

	//add owl carousel
	$(".slider").owlCarousel({
		nav:true,
    loop:true,
		navText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		],
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			768:{
				items:3
			},
			970:{
				items:4
			},
			1366:{
				items:5
			}
		}
	});

	//elements animation
	$(".s_slider_wrap h1").animated("fadeInUp");
	$(".tech_title").animated("fadeInRight");
	$(".about h1, .about p").animated("fadeInLeft");
	$(".news h1, .news p").animated("fadeInRight");

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
