$(function() {

var owl = $("#owl-demo");

  owl.owlCarousel({
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
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
	$(".navbar-brand").animated("fadeInDown", "fadeOutDown");
	$(".maintitle h1").animated("fadeInLeft", "fadeOutLeft");
	$(".maintitle h6").animated("fadeInRight", "fadeOutRight");
	$(".smart-creative h2").animated("fadeInDown", "fadeOutDown");
	$(".smart-creative h6").animated("fadeInUp", "fadeOutUp");
	$(".item-1").animated("bounceInLeft", "bounceOutLeft");
	$(".item-2").animated("fadeInUp", "fadeOutUp");
	$(".item-3").animated("bounceInRight", "bounceOutRight");
	$(".box").animated("flipInY", "flipOutY");
	$(".price-top").animated("fadeInDown", "fadeOutDown");
});